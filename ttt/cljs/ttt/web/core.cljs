(ns ttt.web.core
	(:require [ttt.web.components :refer [component]]
						[ttt.master.core :as tcore]
						[ttt.master.game-master :as master]))

(defonce game (atom (assoc tcore/game-model :status :waiting :console :web
																						:persistence {:db :web} :current-player :player1)))

(defn render! []
	(.render js/ReactDOM
					 (if (master/ai-turn? @game)
						 (do (master/update-state @game)
								 (component game))
						 (component game))
					 (.getElementById js/document "ttt")))

(add-watch game :on-change (fn [k a o n] (render!)))

(render!)