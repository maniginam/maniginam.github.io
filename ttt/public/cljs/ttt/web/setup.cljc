(ns ttt.web.setup
	(:require [ttt.board.board :as board]
						[ttt.master.core :as tcore]))

(defmethod tcore/set-parameters :waiting [game]
	(assoc game :status :user-setup))

(defmethod tcore/set-players 0 [game]
	(assoc game :player1 {:player-num 1 :piece "X" :type :computer} :player2 {:player-num 2 :piece "O" :type :computer}))

(defmethod tcore/set-users 0 [game]
	(assoc (tcore/set-players (assoc game :entry 0)) :status :level-setup :users 0))

(defmethod tcore/set-users 1 [game]
	(assoc game :status :player-setup :users 1))

(defmethod tcore/set-users 2 [game]
	(assoc (tcore/set-players (assoc game :entry 2)) :status :board-setup :users 2))

(defmethod tcore/set-players 2 [game]
	(assoc game :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human}))

(defmethod tcore/set-parameters :user-setup [game]
	(tcore/set-users game))

(defmethod tcore/set-players "X" [game]
	(let [player1 {:player-num 1 :piece "X" :type :human}
				player2 {:player-num 2 :piece "O" :type :computer}]
		(assoc game :player1 player1 :player2 player2)))

(defmethod tcore/set-players "O" [game]
	(let [player1 {:player-num 1 :piece "X" :type :computer}
				player2 {:player-num 2 :piece "O" :type :human}]
		(assoc game :player1 player1 :player2 player2)))

(defmethod tcore/set-parameters :player-setup [game]
					(assoc (tcore/set-players game) :status :level-setup))

(defmethod tcore/set-parameters :level-setup [game]
					(assoc game :status :board-setup :level (keyword (:entry game))))

(defmethod tcore/set-parameters :board-setup [game]
					(let [board-size (:entry game)]
						(let [board (board/create-board board-size)
									game-with-board (assoc game :board-size board-size :board board)]
							(assoc game-with-board :status :playing :current-player :player1))))



