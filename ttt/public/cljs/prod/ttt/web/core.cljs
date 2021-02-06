(ns ttt.web.core
	(:require [ttt.web.components :refer [component]]))

(defonce game (atom {:status :waiting :console :web :current-player :player1}))

(defn render! []
	(.render js/ReactDOM
					 (component game)
					 (.getElementById js/document "ttt")))

(add-watch game :on-change (fn [k a o n] (render!)))

(render!)