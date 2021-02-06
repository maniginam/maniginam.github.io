(ns ttt.master.core)

(def console (atom :gui))
(def types {0 :computer 1 nil 2 :human})
(def dbname "ttt")
(def game-model {:status           :waiting
                 :persistence      {:db :mysql :dbname "ttt"}
                 :users            nil
                 :board-size       3
                 :current-player   :player1
                 :player1          {:player-num 1 :piece "X" :type nil}
                 :player2          {:player-num 2 :piece "O" :type nil}})

(defmulti report! :console)
(defmulti welcome :console)
(defmulti game-setup :console)
(defmulti setup :console)
(defmulti update-game :console)
(defmulti offer-position :console)
(defmulti draw-board :console)
(defmulti draw-state :console)
(defmulti print-turn (fn [console _ _] (:console console)))
(defmulti print-type (fn [player _] (:type player)))
(defmulti select-box (fn [player _] (:type player)))
(defmulti get-selection (fn [console _] (:console console)))
(defmulti validate-player-count :console)
(defmulti board-size-prompt :console)
(defmulti set-board-size :console)
(defmulti prompt-for-level :console)
(defmulti get-box-input :console)
(defmulti play-again :console)
(defmulti play-again? :console)
(defmulti too-many-tries :input)
(defmulti quit-game :console)
(defmulti restart? :console)
(defmulti get-restart-input :console)
(defmulti run-game :console)
(defmulti set-parameters :status)
(defmulti set-users :entry)
(defmulti set-players :entry)

(defmulti save-game (fn [game] (:db (:persistence game))))
(defmulti save-turn (fn [game] (:db (:persistence game))))
(defmulti load-game (fn [game] (:db (:persistence game))))
(defmulti update-game-with-id (fn [game] (:db (:persistence game))))
(defmulti save-status (fn [game] (:db (:persistence game))))

(defn set-state [state]
  state)

(defn update-game-state [state key val]
  (assoc state key val))

(defn get-state [state]
  state)

(defn update-console [interface]
  (reset! console interface))





