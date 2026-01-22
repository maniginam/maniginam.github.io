(ns laowd-haows.ui.main
  (:require [laowd-haows.game :as game]
            [laowd-haows.player :as player]
            [laowd-haows.frog :as frog]
            [laowd-haows.input :as input]
            [laowd-haows.ai :as ai]))

(defonce game-state (atom nil))
(defonce input-state (atom (input/init)))
(defonce canvas-ctx (atom nil))
(defonce last-time (atom 0))

(def canvas-width 800)
(def canvas-height 600)

(defn- draw-rect [ctx x y w h color]
  (set! (.-fillStyle ctx) color)
  (.fillRect ctx x y w h))

(defn- draw-rounded-rect [ctx x y w h r color]
  (set! (.-fillStyle ctx) color)
  (.beginPath ctx)
  (.moveTo ctx (+ x r) y)
  (.lineTo ctx (+ x w (- r)) y)
  (.quadraticCurveTo ctx (+ x w) y (+ x w) (+ y r))
  (.lineTo ctx (+ x w) (+ y h (- r)))
  (.quadraticCurveTo ctx (+ x w) (+ y h) (+ x w (- r)) (+ y h))
  (.lineTo ctx (+ x r) (+ y h))
  (.quadraticCurveTo ctx x (+ y h) x (+ y h (- r)))
  (.lineTo ctx x (+ y r))
  (.quadraticCurveTo ctx x y (+ x r) y)
  (.closePath ctx)
  (.fill ctx))

(defn- draw-circle [ctx x y r color]
  (set! (.-fillStyle ctx) color)
  (.beginPath ctx)
  (.arc ctx x y r 0 (* 2 js/Math.PI))
  (.fill ctx))

(defn- draw-ellipse [ctx x y rx ry color]
  (set! (.-fillStyle ctx) color)
  (.beginPath ctx)
  (.ellipse ctx x y rx ry 0 0 (* 2 js/Math.PI))
  (.fill ctx))

(defn- draw-text [ctx text x y color size]
  (set! (.-fillStyle ctx) color)
  (set! (.-font ctx) (str "bold " size "px 'Segoe UI', sans-serif"))
  (.fillText ctx text x y))

(defn- draw-frog-eyes [ctx x y personality color]
  (let [eye-info (get-in frog/personalities [personality :eyes])
        eye-white "#ffffff"
        pupil-color "#1a1a1a"]
    (case eye-info
      :wide
      (do
        (draw-circle ctx (- x 6) (- y 10) 6 eye-white)
        (draw-circle ctx (+ x 6) (- y 10) 6 eye-white)
        (draw-circle ctx (- x 5) (- y 9) 3 pupil-color)
        (draw-circle ctx (+ x 7) (- y 9) 3 pupil-color)
        (draw-circle ctx (- x 4) (- y 10) 1 "#fff"))

      :droopy
      (do
        (draw-ellipse ctx (- x 6) (- y 8) 5 3 eye-white)
        (draw-ellipse ctx (+ x 6) (- y 8) 5 3 eye-white)
        (draw-circle ctx (- x 5) (- y 8) 2 pupil-color)
        (draw-circle ctx (+ x 7) (- y 8) 2 pupil-color))

      :angry
      (do
        (draw-circle ctx (- x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (+ x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (- x 5) (- y 9) 2.5 pupil-color)
        (draw-circle ctx (+ x 7) (- y 9) 2.5 pupil-color)
        (set! (.-strokeStyle ctx) color)
        (set! (.-lineWidth ctx) 2)
        (.beginPath ctx)
        (.moveTo ctx (- x 10) (- y 14))
        (.lineTo ctx (- x 2) (- y 11))
        (.stroke ctx)
        (.beginPath ctx)
        (.moveTo ctx (+ x 10) (- y 14))
        (.lineTo ctx (+ x 2) (- y 11))
        (.stroke ctx))

      :crossed
      (do
        (draw-circle ctx (- x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (+ x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (- x 4) (- y 9) 2.5 pupil-color)
        (draw-circle ctx (+ x 4) (- y 9) 2.5 pupil-color))

      :looking-away
      (do
        (draw-circle ctx (- x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (+ x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (- x 8) (- y 10) 2.5 pupil-color)
        (draw-circle ctx (+ x 4) (- y 10) 2.5 pupil-color)
        (draw-circle ctx (- x 3) (- y 6) 3 "#ffb6c1"))

      (do
        (draw-circle ctx (- x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (+ x 6) (- y 10) 5 eye-white)
        (draw-circle ctx (- x 5) (- y 9) 2.5 pupil-color)
        (draw-circle ctx (+ x 7) (- y 9) 2.5 pupil-color)))))

(defn- draw-frog-mouth [ctx x y personality]
  (let [mouth-info (get-in frog/personalities [personality :mouth])]
    (set! (.-strokeStyle ctx) "#1a1a1a")
    (set! (.-lineWidth ctx) 2)
    (case mouth-info
      :smile
      (do
        (.beginPath ctx)
        (.arc ctx x (+ y 2) 6 0.1 (- js/Math.PI 0.1))
        (.stroke ctx))

      :yawn
      (draw-ellipse ctx x (+ y 4) 4 6 "#8B0000")

      :frown
      (do
        (.beginPath ctx)
        (.arc ctx x (+ y 8) 6 (+ js/Math.PI 0.3) (- (* 2 js/Math.PI) 0.3))
        (.stroke ctx))

      :tongue
      (do
        (.beginPath ctx)
        (.arc ctx x (+ y 2) 5 0.1 (- js/Math.PI 0.1))
        (.stroke ctx)
        (draw-ellipse ctx x (+ y 8) 3 5 "#FF69B4"))

      :small
      (do
        (.beginPath ctx)
        (.moveTo ctx (- x 3) (+ y 3))
        (.lineTo ctx (+ x 3) (+ y 3))
        (.stroke ctx))

      (do
        (.beginPath ctx)
        (.arc ctx x (+ y 2) 5 0.1 (- js/Math.PI 0.1))
        (.stroke ctx)))))

(defn- draw-cute-frog [ctx frog-data]
  (let [{:keys [x y]} (:position frog-data)
        color (if (= :green (:color frog-data)) "#2ecc71" "#e67e22")
        light-color (if (= :green (:color frog-data)) "#58d68d" "#f0b27a")
        dark-color (if (= :green (:color frog-data)) "#27ae60" "#d35400")
        personality (or (:personality frog-data) :happy)
        frog-name (get-in frog/personalities [personality :name] "Froggy")]

    (draw-ellipse ctx (- x 12) (+ y 8) 8 5 dark-color)
    (draw-ellipse ctx (+ x 12) (+ y 8) 8 5 dark-color)

    (draw-ellipse ctx x y 18 15 color)

    (draw-ellipse ctx x (+ y 5) 12 8 light-color)

    (draw-circle ctx (- x 8) (- y 12) 7 color)
    (draw-circle ctx (+ x 8) (- y 12) 7 color)

    (draw-frog-eyes ctx x y personality color)

    (draw-frog-mouth ctx x y personality)

    (draw-text ctx frog-name (- x 20) (- y 25) "#fff" 9)))

(defn- draw-player-character [ctx player]
  (let [{:keys [x y]} (:position player)
        char-key (:character player)
        info (player/character-info char-key)
        main-color (:color info)
        hair-color (:hair-color info)
        outfit-color (:outfit-color info)]

    (draw-ellipse ctx x (+ y 25) 15 8 "#8B4513")

    (draw-rounded-rect ctx (- x 18) (- y 5) 36 35 5 outfit-color)

    (draw-ellipse ctx (- x 22) (+ y 8) 8 12 outfit-color)
    (draw-ellipse ctx (+ x 22) (+ y 8) 8 12 outfit-color)
    (draw-circle ctx (- x 22) (+ y 18) 6 "#FFDAB9")
    (draw-circle ctx (+ x 22) (+ y 18) 6 "#FFDAB9")

    (draw-circle ctx x (- y 20) 18 "#FFDAB9")

    (if (= char-key :lana)
      (do
        (draw-ellipse ctx x (- y 32) 20 10 hair-color)
        (draw-ellipse ctx (- x 16) (- y 20) 6 15 hair-color)
        (draw-ellipse ctx (+ x 16) (- y 20) 6 15 hair-color))
      (do
        (draw-ellipse ctx x (- y 32) 18 8 hair-color)
        (draw-rect ctx (- x 15) (- y 35) 30 10 hair-color)))

    (draw-circle ctx (- x 6) (- y 22) 3 "#fff")
    (draw-circle ctx (+ x 6) (- y 22) 3 "#fff")
    (draw-circle ctx (- x 5) (- y 21) 1.5 "#1a1a1a")
    (draw-circle ctx (+ x 7) (- y 21) 1.5 "#1a1a1a")

    (set! (.-strokeStyle ctx) "#1a1a1a")
    (set! (.-lineWidth ctx) 1.5)
    (.beginPath ctx)
    (.arc ctx x (- y 14) 4 0.1 (- js/Math.PI 0.1))
    (.stroke ctx)

    (draw-rounded-rect ctx (- x 20) (+ y 30) 40 15 3 "#8B4513")
    (draw-rounded-rect ctx (- x 18) (+ y 32) 36 8 2 "#A0522D")

    (draw-text ctx (:name info) (- x 30) (- y 50) main-color 12)
    (draw-text ctx (:catchphrase info) (- x 45) (- y 38) "#fff" 9)))

(defn- draw-hud [ctx game]
  (draw-rect ctx 0 0 canvas-width 70 "rgba(0,0,0,0.85)")

  (let [players (:players game)]
    (when-let [p1 (:player-1 players)]
      (let [score (game/calculate-score p1)
            greens (game/green-frog-count p1)
            oranges (game/orange-frog-count p1)
            needed (game/frogs-needed-to-win p1)
            info (player/character-info :lana)]
        (draw-circle ctx 30 35 20 (:color info))
        (draw-text ctx "L" 24 42 "#fff" 18)
        (draw-text ctx (:name info) 55 25 (:color info) 14)
        (draw-text ctx (str "Score: " score) 55 42 "#fff" 12)
        (draw-text ctx (str "Frogs: " greens "/" needed " | Bad: " oranges) 55 57 "#95a5a6" 11)))

    (when-let [p2 (or (:player-2 players) (:computer players))]
      (let [score (game/calculate-score p2)
            greens (game/green-frog-count p2)
            oranges (game/orange-frog-count p2)
            needed (game/frogs-needed-to-win p2)
            info (player/character-info :lincoln)
            label (if (:is-computer? p2) "CPU" "")]
        (draw-circle ctx 770 35 20 (:color info))
        (draw-text ctx "Li" 758 42 "#fff" 14)
        (draw-text ctx (str (:name info) " " label) 520 25 (:color info) 14)
        (draw-text ctx (str "Score: " score) 600 42 "#fff" 12)
        (draw-text ctx (str "Frogs: " greens "/" needed " | Bad: " oranges) 520 57 "#95a5a6" 11)))))

(defn- draw-controls [ctx game]
  (draw-rect ctx 0 (- canvas-height 50) canvas-width 50 "rgba(0,0,0,0.85)")
  (let [mode (:mode game)
        p1-controls (if (= mode :two-player)
                      "P1: Q/W/E/S + L-Shift"
                      "Move: Q/W/E/S or Arrows | Scoop: Shift")]
    (draw-text ctx p1-controls 20 (- canvas-height 20) "#9b59b6" 13)
    (when (= mode :two-player)
      (draw-text ctx "P2: Arrows + R-Shift" 550 (- canvas-height 20) "#3498db" 13))))

(defn- draw-pond [ctx]
  (draw-rect ctx 40 70 (- canvas-width 80) (- canvas-height 130) "#1a5f2a")

  (set! (.-fillStyle ctx) "rgba(0, 100, 150, 0.3)")
  (doseq [_ (range 5)]
    (let [px (+ 60 (rand-int (- canvas-width 120)))
          py (+ 90 (rand-int (- canvas-height 180)))]
      (.beginPath ctx)
      (.ellipse ctx px py 30 15 0 0 (* 2 js/Math.PI))
      (.fill ctx)))

  (set! (.-fillStyle ctx) "#2d7a3a")
  (doseq [_ (range 8)]
    (let [px (+ 50 (rand-int (- canvas-width 100)))
          py (+ 80 (rand-int (- canvas-height 160)))]
      (.beginPath ctx)
      (.ellipse ctx px py 8 4 (rand) 0 (* 2 js/Math.PI))
      (.fill ctx))))

(defn- draw-winner [ctx game]
  (when-let [winner (:winner game)]
    (let [info (player/character-info (:character winner))]
      (draw-rect ctx 150 150 500 300 "rgba(0,0,0,0.95)")
      (draw-rounded-rect ctx 160 160 480 280 15 "#2c3e50")

      (draw-text ctx "WINNER!" 310 220 "#f1c40f" 42)

      (draw-circle ctx 400 290 40 (:color info))
      (draw-text ctx (subs (:name info) 0 1) 388 300 "#fff" 30)

      (draw-text ctx (:name info) 280 360 "#fff" 28)
      (draw-text ctx (:catchphrase info) 260 395 "#95a5a6" 16)

      (draw-text ctx "Press SPACE to play again" 290 430 "#3498db" 14))))

(defn- render [ctx game]
  (draw-rect ctx 0 0 canvas-width canvas-height "#1a1a2e")

  (draw-pond ctx)

  (doseq [frog-data (:frogs game)]
    (draw-cute-frog ctx frog-data))

  (doseq [[_ player-data] (:players game)]
    (draw-player-character ctx player-data))

  (draw-hud ctx game)
  (draw-controls ctx game)

  (when (:game-over? game)
    (draw-winner ctx game)))

(defn- process-player-input [game player-key actions]
  (reduce (fn [g [pk action]]
            (if (= pk player-key)
              (cond
                (= action :scoop)
                (game/player-scoop g player-key)

                (#{:forward :down :left :right} action)
                (update-in g [:players player-key] player/move action)

                :else g)
              g))
          game
          actions))

(defn- clamp-position [game player-key]
  (update-in game [:players player-key :position]
             (fn [{:keys [x y]}]
               {:x (max 70 (min (- canvas-width 70) x))
                :y (max 100 (min (- canvas-height 80) y))})))

(defn- process-ai [game delta]
  (if-let [computer (get-in game [:players :computer])]
    (if-let [action (ai/decide-action computer (:frogs game))]
      (let [g (if (= action :scoop)
                (game/player-scoop game :computer)
                (update-in game [:players :computer] player/move action))]
        (clamp-position g :computer))
      game)
    game))

(defn- check-winner [game]
  (let [players (:players game)]
    (cond
      (game/winner? (:player-1 players))
      (assoc game :game-over? true :winner (:player-1 players))

      (and (:player-2 players) (game/winner? (:player-2 players)))
      (assoc game :game-over? true :winner (:player-2 players))

      (and (:computer players) (game/winner? (:computer players)))
      (assoc game :game-over? true :winner (:computer players))

      :else game)))

(defn- update-frogs-jump [game]
  (update game :frogs
          (fn [frogs]
            (mapv (fn [f]
                    (if (< (rand) 0.02)
                      (frog/jump f {:x (+ (:x (:position f)) (- (rand-int 50) 25))
                                    :y (+ (:y (:position f)) (- (rand-int 50) 25))})
                      f))
                  frogs))))

(defn- clamp-frogs [game]
  (update game :frogs
          (fn [frogs]
            (mapv (fn [f]
                    (update f :position
                            (fn [{:keys [x y]}]
                              {:x (max 70 (min (- canvas-width 70) x))
                               :y (max 100 (min (- canvas-height 80) y))})))
                  frogs))))

(defn- game-loop [timestamp]
  (let [delta (- timestamp @last-time)
        ctx @canvas-ctx
        game @game-state]
    (reset! last-time timestamp)

    (when (and ctx game (not (:game-over? game)))
      (let [mode (:mode game)
            actions (input/get-active-actions @input-state mode)
            updated-game (-> game
                             (game/update-spawn delta)
                             (update-frogs-jump)
                             (clamp-frogs)
                             (process-player-input :player-1 actions)
                             (clamp-position :player-1)
                             (cond-> (:player-2 (:players game))
                               (-> (process-player-input :player-2 actions)
                                   (clamp-position :player-2)))
                             (cond-> (:computer (:players game))
                               (process-ai delta))
                             (check-winner))]
        (reset! game-state updated-game)))

    (when ctx
      (render ctx @game-state))

    (js/requestAnimationFrame game-loop)))

(defn- handle-keydown [e]
  (.preventDefault e)
  (let [code (.-code e)]
    (swap! input-state input/key-down code)
    (when (and (= code "Space") (:game-over? @game-state))
      (reset! game-state (game/init {:mode (:mode @game-state)
                                     :width canvas-width
                                     :height canvas-height})))))

(defn- handle-keyup [e]
  (swap! input-state input/key-up (.-code e)))

(defn- create-menu []
  (let [app (js/document.getElementById "app")]
    (set! (.-innerHTML app)
          "<div style='text-align:center;color:white;padding:20px;'>
             <h1 style='font-size:52px;color:#f1c40f;margin-bottom:5px;text-shadow: 3px 3px #27ae60;'>LAOWD HAOWS</h1>
             <p style='font-size:24px;margin-bottom:5px;'>The Frog Catching Game!</p>
             <p style='margin-bottom:30px;color:#95a5a6;'>Catch green frogs (+1) | Avoid orange frogs (-1)</p>
             <div style='display:flex;flex-direction:column;gap:15px;align-items:center;'>
               <button id='single-btn' style='padding:18px 50px;font-size:20px;cursor:pointer;border:none;border-radius:12px;background:linear-gradient(135deg, #9b59b6, #8e44ad);color:white;font-weight:bold;transition:transform 0.2s;'>Single Player</button>
               <button id='two-btn' style='padding:18px 50px;font-size:20px;cursor:pointer;border:none;border-radius:12px;background:linear-gradient(135deg, #3498db, #2980b9);color:white;font-weight:bold;'>Two Players</button>
               <button id='cpu-btn' style='padding:18px 50px;font-size:20px;cursor:pointer;border:none;border-radius:12px;background:linear-gradient(135deg, #e67e22, #d35400);color:white;font-weight:bold;'>VS Computer</button>
             </div>
             <div style='margin-top:40px;padding:20px;background:rgba(255,255,255,0.1);border-radius:12px;max-width:500px;margin-left:auto;margin-right:auto;'>
               <p style='color:#f1c40f;font-weight:bold;margin-bottom:10px;'>How to Win:</p>
               <p style='color:#ecf0f1;'>Collect 10 green frogs to win!</p>
               <p style='color:#e74c3c;font-size:14px;margin-top:5px;'>But each orange frog requires 5 extra greens...</p>
             </div>
             <div style='margin-top:20px;display:flex;justify-content:center;gap:40px;'>
               <div style='text-align:center;'>
                 <div style='width:60px;height:60px;background:#9b59b6;border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:24px;'>L</div>
                 <p style='color:#9b59b6;font-weight:bold;'>Lana Laowd</p>
                 <p style='color:#95a5a6;font-size:12px;'>\"Let's hop to it!\"</p>
               </div>
               <div style='text-align:center;'>
                 <div style='width:60px;height:60px;background:#3498db;border-radius:50%;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:24px;'>Li</div>
                 <p style='color:#3498db;font-weight:bold;'>Lincoln Laowd</p>
                 <p style='color:#95a5a6;font-size:12px;'>\"Patience wins the pond!\"</p>
               </div>
             </div>
           </div>")))

(defn- start-game [mode]
  (let [app (js/document.getElementById "app")]
    (set! (.-innerHTML app) "<canvas id='game-canvas'></canvas>")
    (let [canvas (js/document.getElementById "game-canvas")]
      (set! (.-width canvas) canvas-width)
      (set! (.-height canvas) canvas-height)
      (reset! canvas-ctx (.getContext canvas "2d"))
      (reset! game-state (game/init {:mode mode :width canvas-width :height canvas-height}))
      (reset! input-state (input/init))
      (reset! last-time (js/performance.now))

      (js/document.addEventListener "keydown" handle-keydown)
      (js/document.addEventListener "keyup" handle-keyup)

      (js/requestAnimationFrame game-loop))))

(defn- setup-menu-handlers []
  (when-let [single-btn (js/document.getElementById "single-btn")]
    (.addEventListener single-btn "click" #(start-game :single-player)))
  (when-let [two-btn (js/document.getElementById "two-btn")]
    (.addEventListener two-btn "click" #(start-game :two-player)))
  (when-let [cpu-btn (js/document.getElementById "cpu-btn")]
    (.addEventListener cpu-btn "click" #(start-game :vs-computer))))

(defn init []
  (create-menu)
  (setup-menu-handlers))

(defn reload []
  (when @canvas-ctx
    (render @canvas-ctx @game-state)))
