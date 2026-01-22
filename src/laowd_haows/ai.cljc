(ns laowd-haows.ai)

(def ^:private scoop-range 50)

(defn- distance
  [{x1 :x y1 :y} {x2 :x y2 :y}]
  #?(:clj (Math/sqrt (+ (Math/pow (- x2 x1) 2) (Math/pow (- y2 y1) 2)))
     :cljs (js/Math.sqrt (+ (js/Math.pow (- x2 x1) 2) (js/Math.pow (- y2 y1) 2)))))

(defn find-target
  [computer frogs]
  (let [green-frogs (filter #(= :green (:color %)) frogs)
        computer-pos (:position computer)]
    (when (seq green-frogs)
      (->> green-frogs
           (sort-by #(distance computer-pos (:position %)))
           first))))

(defn decide-action
  [computer frogs]
  (when-let [target (find-target computer frogs)]
    (let [{px :x py :y} (:position computer)
          {tx :x ty :y} (:position target)
          dist (distance (:position computer) (:position target))
          dx (- tx px)
          dy (- ty py)]
      (cond
        (<= dist scoop-range) :scoop
        (> (abs dx) (abs dy)) (if (pos? dx) :right :left)
        :else (if (pos? dy) :down :forward)))))
