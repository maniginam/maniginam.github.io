(ns laowd-haows.input)

(def ^:private key-mappings
  {"KeyW"       [:player-1 :forward]
   "KeyS"       [:player-1 :down]
   "KeyQ"       [:player-1 :left]
   "KeyE"       [:player-1 :right]
   "ShiftLeft"  [:player-1 :scoop]

   "ArrowUp"    [:player-2 :forward]
   "ArrowDown"  [:player-2 :down]
   "ArrowLeft"  [:player-2 :left]
   "ArrowRight" [:player-2 :right]
   "ShiftRight" [:player-2 :scoop]})

(defn key->action
  [key-code]
  (get key-mappings key-code))

(def ^:private p2-to-p1-keys
  #{"ArrowUp" "ArrowDown" "ArrowLeft" "ArrowRight" "ShiftRight"})

(defn key->action-for-mode
  [key-code mode]
  (cond
    (and (= key-code "Space")
         (#{:single-player :vs-computer} mode))
    [:player-1 :scoop]

    :else
    (let [action (key->action key-code)]
      (if (and action
               (p2-to-p1-keys key-code)
               (#{:single-player :vs-computer} mode))
        [:player-1 (second action)]
        action))))

(defn init
  []
  {:pressed-keys #{}})

(defn key-down
  [state key-code]
  (update state :pressed-keys conj key-code))

(defn key-up
  [state key-code]
  (update state :pressed-keys disj key-code))

(defn pressed?
  [state key-code]
  (contains? (:pressed-keys state) key-code))

(defn get-active-actions
  ([state]
   (->> (:pressed-keys state)
        (map key->action)
        (remove nil?)))
  ([state mode]
   (->> (:pressed-keys state)
        (map #(key->action-for-mode % mode))
        (remove nil?))))
