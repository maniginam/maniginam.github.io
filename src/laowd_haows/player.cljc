(ns laowd-haows.player)

(def ^:private move-speed 10)

(def ^:private characters
  {:lana {:name "Lana Laowd"
          :personality "Cheerful and competitive"
          :catchphrase "Let's hop to it!"
          :color "#9b59b6"
          :hair-color "#8B4513"
          :outfit-color "#E91E63"
          :expression :determined}

   :lincoln {:name "Lincoln Laowd"
             :personality "Calm and strategic"
             :catchphrase "Patience wins the pond!"
             :color "#3498db"
             :hair-color "#2c3e50"
             :outfit-color "#2196F3"
             :expression :focused}})

(def ^:private character-names
  {:lana "Lana Laowd"
   :lincoln "Lincoln Laowd"})

(defn character-info
  [character-key]
  (get characters character-key))

(defn create
  [character position]
  {:character character
   :position position
   :bucket []})

(defn display-name
  [{:keys [character]}]
  (get character-names character))

(defn move
  [player direction]
  (let [{:keys [x y]} (:position player)]
    (assoc player :position
           (case direction
             :forward {:x x :y (- y move-speed)}
             :down {:x x :y (+ y move-speed)}
             :left {:x (- x move-speed) :y y}
             :right {:x (+ x move-speed) :y y}))))

(defn scoop
  [player frog]
  (update player :bucket conj frog))
