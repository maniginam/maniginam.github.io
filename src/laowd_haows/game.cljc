(ns laowd-haows.game
  (:require [laowd-haows.frog :as frog]
            [laowd-haows.player :as player]))

(def ^:private base-frogs-to-win 10)
(def ^:private orange-frog-penalty 5)
(def ^:private initial-green-frogs 5)
(def ^:private initial-orange-frogs 5)
(def ^:private ai-move-delay-ms 200)

(defn- random-position
  [width height]
  {:x (+ 80 (rand-int (- width 160)))
   :y (+ 100 (rand-int (- height 200)))})

(defn- create-initial-frogs
  [width height]
  (let [green-frogs (repeatedly initial-green-frogs
                                #(frog/create-with-personality :green (random-position width height)))
        orange-frogs (repeatedly initial-orange-frogs
                                 #(frog/create-with-personality :orange (random-position width height)))]
    (vec (concat green-frogs orange-frogs))))

(defn init
  [{:keys [mode width height]
    :or {width 800 height 600}}]
  (let [player-1 (player/create :lana {:x 100 :y 300})
        players (case mode
                  :single-player
                  {:player-1 player-1}

                  :two-player
                  {:player-1 player-1
                   :player-2 (player/create :lincoln {:x 700 :y 300})}

                  :vs-computer
                  {:player-1 player-1
                   :computer (assoc (player/create :lincoln {:x 700 :y 300})
                                    :is-computer? true)})]
    (cond-> {:mode mode
             :width width
             :height height
             :players players
             :frogs (create-initial-frogs width height)
             :spawn-timer 0
             :game-over? false
             :winner nil}
      (= mode :vs-computer) (assoc :ai-timer 0))))

(defn green-frog-count
  [player]
  (count (filter #(= :green (:color %)) (:bucket player))))

(defn orange-frog-count
  [player]
  (count (filter #(= :orange (:color %)) (:bucket player))))

(defn calculate-score
  [player]
  (reduce + 0 (map frog/point-value (:bucket player))))

(defn frogs-needed-to-win
  [player]
  (+ base-frogs-to-win (* orange-frog-penalty (orange-frog-count player))))

(defn winner?
  [player]
  (>= (green-frog-count player) (frogs-needed-to-win player)))

(def ^:private spawn-interval-ms 5000)
(def ^:private scoop-range 50)

(defn- spawn-random-frog
  [width height]
  (let [color (if (< (rand) 0.5) :green :orange)]
    (frog/create-with-personality color (random-position width height))))

(defn update-spawn
  [game delta-ms]
  (let [new-timer (+ (:spawn-timer game) delta-ms)]
    (if (>= new-timer spawn-interval-ms)
      (-> game
          (update :frogs conj (spawn-random-frog (:width game) (:height game)))
          (assoc :spawn-timer (- new-timer spawn-interval-ms)))
      (assoc game :spawn-timer new-timer))))

(defn- distance
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  #?(:clj (Math/sqrt (+ (Math/pow (- x2 x1) 2) (Math/pow (- y2 y1) 2)))
     :cljs (js/Math.sqrt (+ (js/Math.pow (- x2 x1) 2) (js/Math.pow (- y2 y1) 2)))))

(defn- find-nearby-frog
  [player-pos frogs]
  (first (filter #(<= (distance player-pos (:position %)) scoop-range) frogs)))

(defn player-scoop
  [game player-key]
  (let [player-pos (get-in game [:players player-key :position])
        nearby-frog (find-nearby-frog player-pos (:frogs game))]
    (if nearby-frog
      (-> game
          (update :frogs (fn [frogs] (vec (remove #(= % nearby-frog) frogs))))
          (update-in [:players player-key] player/scoop nearby-frog))
      game)))

(defn should-ai-act?
  [game]
  (>= (:ai-timer game 0) ai-move-delay-ms))

(defn update-ai-timer
  [game delta]
  (update game :ai-timer (fnil + 0) delta))

(defn reset-ai-timer
  [game]
  (assoc game :ai-timer 0))
