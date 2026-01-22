(ns laowd-haows.ui.audio)

(defonce audio-ctx (atom nil))
(defonce music-playing? (atom false))

(defn init-audio []
  (when-not @audio-ctx
    (reset! audio-ctx (js/AudioContext.))))

(defn- create-oscillator [ctx freq type duration gain-val]
  (let [osc (.createOscillator ctx)
        gain (.createGain ctx)
        now (.-currentTime ctx)]
    (set! (.-type osc) type)
    (set! (.-value (.-frequency osc)) freq)
    (.connect osc gain)
    (.connect gain (.-destination ctx))
    (set! (.-value (.-gain gain)) gain-val)
    (.setValueAtTime (.-gain gain) gain-val now)
    (.exponentialRampToValueAtTime (.-gain gain) 0.001 (+ now duration))
    (.start osc now)
    (.stop osc (+ now duration))))

(defn play-scoop-sound []
  (when-let [ctx @audio-ctx]
    (create-oscillator ctx 600 "sine" 0.1 0.3)
    (js/setTimeout #(create-oscillator ctx 800 "sine" 0.1 0.25) 50)
    (js/setTimeout #(create-oscillator ctx 1000 "sine" 0.15 0.2) 100)))

(defn play-scoop-green []
  (when-let [ctx @audio-ctx]
    (create-oscillator ctx 523 "sine" 0.1 0.25)
    (js/setTimeout #(create-oscillator ctx 659 "sine" 0.1 0.25) 80)
    (js/setTimeout #(create-oscillator ctx 784 "sine" 0.15 0.2) 160)))

(defn play-scoop-orange []
  (when-let [ctx @audio-ctx]
    (create-oscillator ctx 200 "sawtooth" 0.2 0.15)
    (js/setTimeout #(create-oscillator ctx 150 "sawtooth" 0.25 0.12) 100)))

(defn play-jump-sound []
  (when-let [ctx @audio-ctx]
    (let [osc (.createOscillator ctx)
          gain (.createGain ctx)
          now (.-currentTime ctx)]
      (set! (.-type osc) "sine")
      (.setValueAtTime (.-frequency osc) 300 now)
      (.exponentialRampToValueAtTime (.-frequency osc) 600 (+ now 0.1))
      (.connect osc gain)
      (.connect gain (.-destination ctx))
      (set! (.-value (.-gain gain)) 0.08)
      (.exponentialRampToValueAtTime (.-gain gain) 0.001 (+ now 0.12))
      (.start osc now)
      (.stop osc (+ now 0.12)))))

(defn play-win-sound []
  (when-let [ctx @audio-ctx]
    (let [notes [523 659 784 1047]]
      (doseq [[i note] (map-indexed vector notes)]
        (js/setTimeout #(create-oscillator ctx note "sine" 0.3 0.2) (* i 150))))))

(defn play-move-sound []
  (when-let [ctx @audio-ctx]
    (create-oscillator ctx 220 "triangle" 0.05 0.05)))

(defn- play-bass-note [ctx freq start duration]
  (let [osc (.createOscillator ctx)
        gain (.createGain ctx)]
    (set! (.-type osc) "triangle")
    (set! (.-value (.-frequency osc)) freq)
    (.connect osc gain)
    (.connect gain (.-destination ctx))
    (set! (.-value (.-gain gain)) 0)
    (.setValueAtTime (.-gain gain) 0 start)
    (.linearRampToValueAtTime (.-gain gain) 0.12 (+ start 0.02))
    (.linearRampToValueAtTime (.-gain gain) 0.08 (+ start (* duration 0.5)))
    (.linearRampToValueAtTime (.-gain gain) 0 (+ start duration))
    (.start osc start)
    (.stop osc (+ start duration))))

(defn- play-melody-note [ctx freq start duration]
  (let [osc (.createOscillator ctx)
        gain (.createGain ctx)]
    (set! (.-type osc) "square")
    (set! (.-value (.-frequency osc)) freq)
    (.connect osc gain)
    (.connect gain (.-destination ctx))
    (set! (.-value (.-gain gain)) 0)
    (.setValueAtTime (.-gain gain) 0 start)
    (.linearRampToValueAtTime (.-gain gain) 0.06 (+ start 0.01))
    (.linearRampToValueAtTime (.-gain gain) 0.04 (+ start (* duration 0.7)))
    (.linearRampToValueAtTime (.-gain gain) 0 (+ start duration))
    (.start osc start)
    (.stop osc (+ start duration))))

(defn play-funky-loop []
  (when-let [ctx @audio-ctx]
    (when-not @music-playing?
      (reset! music-playing? true)
      (let [now (.-currentTime ctx)
            bpm 120
            beat (/ 60 bpm)
            bar (* 4 beat)
            bass-notes [[65 0] [65 1] [82 2] [98 2.5] [65 3]
                        [65 4] [65 5] [98 6] [82 6.5] [65 7]]
            melody-notes [[262 0] [330 0.5] [392 1] [330 1.5]
                          [262 2] [294 2.5] [262 3] [196 3.5]
                          [262 4] [330 4.5] [392 5] [440 5.5]
                          [392 6] [330 6.5] [294 7] [262 7.5]]]
        (doseq [[freq beat-pos] bass-notes]
          (play-bass-note ctx freq (+ now (* beat-pos beat)) (* beat 0.8)))
        (doseq [[freq beat-pos] melody-notes]
          (play-melody-note ctx freq (+ now (* beat-pos beat)) (* beat 0.4)))

        (js/setTimeout
         (fn []
           (reset! music-playing? false)
           (when @audio-ctx
             (play-funky-loop)))
         (* bar 2 1000))))))

(defn stop-music []
  (reset! music-playing? false))

(defn toggle-music []
  (if @music-playing?
    (stop-music)
    (play-funky-loop)))
