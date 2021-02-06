(ns ttt.master.game-master-cljc
	(:require [ttt.board.board :as board]))

(defn game-over? [game]
	(let [board (:board game)]
		(or (board/is-win? board) (board/full-board? board))))

(defn ai-turn? [state]
	(let [current-player-key (:current-player state)
				current-player (get state current-player-key)]
		(and (= :playing (:status state)) (not= :human (:type current-player)))))

(defn next-player [game]
	(if (= (:current-player game) :player1) :player2 :player1))

(defn update-board-with-move [game box]
	(let [player (get game (:current-player game))
				board (vec (:board game))
				piece (:piece player)
				new-board (replace {box piece} board)]
		new-board))

(defn play-turn [game-atom]
	(let [box (:box-played @game-atom)
				new-board (update-board-with-move @game-atom box)]
		(swap! game-atom assoc :board new-board
					 :current-player (next-player @game-atom))))

(defn update-game-with-move! [game box]
	(let [new-board (update-board-with-move game box)
				next-player (next-player game)
				game (assoc game :box-played box :board new-board :current-player next-player)]
		game))

(defn make-computer-move [game]
		game)
	;(play-turn (assoc game :box-played (tcore/select-box (get game (:current-player game)) game))))

(defn maybe-make-computer-move [game]
		game)

(defn update-state [game]
	(play-turn game)
	(maybe-make-computer-move game)
	)