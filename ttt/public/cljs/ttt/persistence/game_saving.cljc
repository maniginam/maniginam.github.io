(ns ttt.persistence.game-saving
	(:require [ttt.master.core :as tcore]))

(def game-num (atom 0))
(def games (atom {}))

(defmethod tcore/load-game :web [game]
	(if (empty? @games)
		{:status :game-over :board ["X"]}
		(get games (dec @game-num))))

(defmethod tcore/save-game :web [game]
	(swap! games assoc (reset! game-num inc) (assoc game :gameID @game-num)))

(defmethod tcore/save-turn :web [game]
	(swap! games merge game))