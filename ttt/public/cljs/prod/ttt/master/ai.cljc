(ns ttt.master.ai
  (:require [ttt.master.core :as tcore]
            [ttt.master.optimal-play :as play]))

(def levels->depths {:easy 2 :medium 1 :hard 0})

(defmethod tcore/select-box :computer [player game]
  (let [board (:board game)
        depth (get levels->depths (:level game) 0)
        box (play/play-optimal-box board (:player-num player) depth)]
    box))


