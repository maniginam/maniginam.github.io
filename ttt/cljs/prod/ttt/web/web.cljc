(ns ttt.web.web
	(:require [ttt.master.game-master :as master]
						[ttt.web.components :as comp]))


(defn run [game-atom]
	(loop [game @game-atom]
		(println "game: " game)
		(swap! game-atom merge (master/update-state game))
		(recur (comp/component game-atom))))