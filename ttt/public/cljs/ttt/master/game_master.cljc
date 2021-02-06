(ns ttt.master.game-master
	(:require [ttt.master.core :as tcore]
						[ttt.persistence.game-saving]
						[ttt.board.board :as board]))

(defn game-over? [game]
	(let [board (:board game)]
		(or (board/is-win? board) (board/full-board? board))))

(defn next-player [game]
	(if (= (:current-player game) :player1) :player2 :player1))

(defn ai-turn? [state]
	(let [current-player-key (:current-player state)
				current-player (get state current-player-key)]
		(and (= :playing (:status state)) (not= :human (:type current-player)))))

(defn update-board-with-move [game box]
	(if (nil? box)
		(:board game)
		(let [player (get game (:current-player game))
					board (:board game)
					piece (:piece player)
					new-board (replace {box piece} board)]
			new-board)))

(defn get-move-from-player [game]
	(if (board/full-board? (:board game))
		nil
		(let [player (get game (:current-player game))
					box (tcore/select-box player game)]
			box)))

(defn update-game-with-move! [game box]
	(let [new-board (update-board-with-move game box)
				next-player (next-player game)
				game (assoc game :box-played box :board new-board :current-player next-player)]
		(tcore/save-turn game)
		(tcore/draw-state game)
		game))

(defn get-winner [game]
	(let [board (:board game)]
		(cond (nil? board) game
					(= 1 (count (:board game))) (assoc game :winner 1)
					(board/is-win? board) (assoc game :winner (:player-num ((next-player game) game)) :winning-line (board/get-winning-line board))
					(board/full-board? board) (assoc game :winner 0 :winning-line nil)
					:else game)))

(defn game-with-next-move [game]
	(update-game-with-move! game (get-move-from-player game)))

(defn play-turn! [game]
	(tcore/save-turn game)
	game)

(defn play-game [game]
	(if (game-over? game)
		(get-winner game)
		(play-turn! (game-with-next-move game))))

(defn set-level [game level]
	(assoc game :level level :status :board-setup))

(defn start-game! [game]
	(let [game (assoc game :status :playing)]
		(tcore/save-game game)
		(tcore/update-game-with-id game)))

(defn set-players [state type]
	(let [users (:users state)]
		(cond (zero? users) (assoc state :player1 (assoc (:player1 state) :type type)
																		 :player2 (assoc (:player2 state) :type type)
																		 :status :level-setup)
					(= 2 users) (assoc state :player1 (assoc (:player1 state) :type type)
																	 :player2 (assoc (:player2 state) :type type)
																	 :status :board-setup)
					:else (let [player2type (cond (= type :human) :computer
																				(= type :computer) :human)]
									(assoc state :player1 (assoc (:player1 state) :type type)
															 :player2 (assoc (:player2 state) :type player2type)
															 :status :level-setup)))))

(defn maybe-make-computer-move [state]
	(if (and (not (game-over? state)) (ai-turn? state))
		(game-with-next-move state)
		state))

(defn maybe-game-over [state]
	(if (and (game-over? state) (not (nil? (:board state))))
		(assoc state :status :game-over)
		state))

(defn maybe-start-game [state]
	(if (= :ready-to-play (:status state))
		(start-game! state)
		state))

(defn maybe-load-game [state]
	(if (nil? (:last-game state))
		(let [loaded-game (tcore/load-game state)
					last-game (if (empty? loaded-game) (assoc state :last-game []) (assoc loaded-game :old-console (:console loaded-game) :console (:console state)))]
			(assoc state :last-game last-game))
		state))

(defn maybe-pause-for-restart [state]
	(let [pause (:play-again-pause state)
				new-pause (if (game-over? state)
										(cond (nil? pause) 1
													(< pause 100) (inc pause)
													:else 100)
										0)]
		(assoc state :play-again-pause new-pause)))

(defn maybe-update-status [state]
	(if (and (game-over? state) (not (nil? (:board state))))
		(if (= 100 (:play-again-pause state))
			(assoc state :status :play-again)
			(assoc state :status :game-over))
		state))

(defn update-state [state]
	(-> state
			maybe-load-game
			maybe-start-game
			maybe-make-computer-move
			maybe-game-over
			get-winner
			maybe-pause-for-restart
			maybe-update-status))




