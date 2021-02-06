(ns ttt.persistence.mock-db
  (:require [ttt.master.core :as tcore]))

(def games (atom {}))

(defmethod tcore/update-game-with-id :mock [game]
  game)

(defmethod tcore/save-game :mock [game]
  (let [id (if (nil? (:gameID game)) (rand-int 999) (:gameID game))
        game (assoc game :gameID id)]
    (swap! games (fn[game-map] (assoc game-map id game)))
    game))

(defmethod tcore/save-turn :mock [game]
  (tcore/save-game game))

(defmethod tcore/load-game :mock [game]
  (get @games (:gameID game)))