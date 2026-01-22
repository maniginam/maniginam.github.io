(ns laowd-haows.frog)

(def personalities
  {:happy   {:name "Hoppy"    :trait "Always smiling"       :eyes :wide      :mouth :smile}
   :sleepy  {:name "Drowsy"   :trait "Half-asleep jumper"   :eyes :droopy    :mouth :yawn}
   :grumpy  {:name "Grumble"  :trait "Perpetually annoyed"  :eyes :angry     :mouth :frown}
   :silly   {:name "Giggles"  :trait "Cross-eyed goofball"  :eyes :crossed   :mouth :tongue}
   :shy     {:name "Blushy"   :trait "Easily embarrassed"   :eyes :looking-away :mouth :small}})

(def ^:private personality-keys (vec (keys personalities)))

(defn- random-personality []
  (rand-nth personality-keys))

(defn create
  [color position]
  {:color color
   :position position})

(defn create-with-personality
  [color position]
  {:color color
   :position position
   :personality (random-personality)})

(defn point-value
  [{:keys [color]}]
  (case color
    :green 1
    :orange -1))

(defn jump
  [frog new-position]
  (assoc frog :position new-position))
