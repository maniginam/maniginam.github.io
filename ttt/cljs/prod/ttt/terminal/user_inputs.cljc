(ns ttt.terminal.user-inputs
  (:require [ttt.board.board :as board]
            [ttt.terminal.console-messages :as msg]
            [ttt.master.core :as tcore]))

(defn bad-type [input]
  (println (str input " is not a valid option"))
  false)

(defn valid-for-int-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (bad-type input)))))

(defn valid-user-count-option? [input]
  (and (>= input 0) (<= input 2)))

(defn bad-user-count [input]
  (println (str input " is not an option"))
  false)

(defn valid-user-count? [input]
  (if (true? (valid-for-int-type? input))
    (if (valid-user-count-option? (Integer/parseInt input))
      true
      (bad-user-count input))))

(defn ask-num-of-players []
  (println "0 Computer v Computer")
  (println "1 Human v Computer")
  (println "2 Human v Human")
  (println "How many humans are playing?  Please enter 0, 1, or 2")
  (read-line))

(defn too-many-players-tries []
  (println "Nevermind, I'll play on my own.")
  0)

(defmethod tcore/offer-position :terminal [console]
  (println "X goes first.  Do you want to be X or O")
  (read-line))

(defn valid-type-string? [input]
  (if (= "" input)
    (do (println "You didn't enter anything") false)
    (not (false? (try (.toUpperCase input)
                      (catch Exception e (println (str input " not valid option")) false))))))

(defn valid-position? [input]
  (if (valid-type-string? input)
    (if (or (= "X" (.toUpperCase input)) (= "O" (.toUpperCase input)))
      true
      (do (println (str input " is not an option.")) false))))

(defn set-position [input]
  (if (= "X" (.toUpperCase input)) :human :computer))

(defn valid-level? [input]
  (if (valid-type-string? input)
    (if (or (= "H" (.toUpperCase input)) (= "M" (.toUpperCase input)) (= "E" (.toUpperCase input)))
      true
      (do (println (str input " is not an option.")) false))))

(defmethod tcore/too-many-tries :position [input]
  (println "Nevermind, I'll go first.")
  "O")

(defmethod tcore/too-many-tries :play-again [input]
  (println "I'll take that as a No.  Let's play again soon!")
  false)

(defmethod tcore/too-many-tries :restart? [input]
  (println "Let's just start you with a new game")
  false)

(defmethod tcore/too-many-tries :level [input]
  (println "I'll pick for you...  Hard!")
  :hard)

(defn std-board-msg []
  (println "Nevermind, let's play a standard 3x3 board")
  3)

(defmethod tcore/board-size-prompt :terminal [console]
  (println msg/board-size-prompt-message)
  (read-line))

(defn ask-for-box []
  (println "Select a box")
  (read-line))

(defn valid-box-type? [input]
  (int? (try (Integer/parseInt input)
             (catch Exception e (println (str input " is not a valid option")) false))))

(defn box-open? [input board]
  (if (board/is-box-open? board input)
    true
    (do (println (str "box " input " is already taken")) false)))

(defn valid-box-option? [input board]
  (if (and (>= input 0) (< input (count board)))
    true
    (do (println (str input " is not a box option")) false)))

(defn valid-box? [input board]
  (if (valid-box-type? input)
    (let [input (Integer/parseInt input)]
      (if (valid-box-option? input board)
        (box-open? input board)
        false))))

(defn validate-box-input [board]
  (loop [input (ask-for-box)]
    (if (valid-box? input board)
      (Integer/parseInt input)
      (recur (ask-for-box)))))

(defn valid-yes-or-no-input? [input]
  (if (valid-type-string? input)
    (if (or (= "Y" (.toUpperCase input)) (= "N" (.toUpperCase input)))
      true
      (do (println (str input " is not an option.")) false))))

(defn get-play-again-input []
  (println msg/ask-to-play-again)
  (read-line))

(defmethod tcore/get-restart-input :terminal [console]
  (println msg/ask-restart)
  (read-line))