(ns ttt.master.human
  (:require [ttt.master.core :as tcore]
            [ttt.board.board :as board]
            [ttt.terminal.user-inputs :as input]))

(defmethod tcore/print-type :human [player box]
  (println (str "You played box " box)))

(defmethod tcore/select-box :human [player game]
  (let [board (:board game)]
    (tcore/draw-board game board)
    (println (str (:piece player) "'s Turn"))
    (let [box (input/validate-box-input board)]
      box)))


