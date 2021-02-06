(ns ttt.terminal.ai
  (:require [ttt.master.core :as tcore]
            [ttt.master.optimal-play :as play]))

(def levels->depths {:easy 2 :medium 1 :hard 0})

(defmethod tcore/print-type :computer [player box]
  (println (str "Computer plays box " box)))

;; COMPLETE - TODO - GLM : get rid of default

(defmethod tcore/print-turn :terminal [game player box]
  (tcore/print-type player box))

(defmethod tcore/select-box :computer [player game]
  (let [board (:board game)
        depth (get levels->depths (:level game) 0)
        box (play/play-optimal-box board (:player-num player) depth)]
    box))


