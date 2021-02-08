(ns ttt.web.game-spec
	(:require-macros [speclj.core :refer [run-specs before after describe context it should=]])
	(:require [speclj.core]
						[ttt.master.spec-helper :as helper]
						[ttt.master.game-master :as master]
						[ttt.persistence.mock-db :as db]
						[ttt.master.core :as tcore]
						[ttt.web.board :as web]))

(def test-atom (atom (assoc helper/test-game :console :web :current-player :player1 :persistence {:db :web})))

(describe "Play Game - "
	(before (reset! test-atom (assoc helper/test-game :console :web :current-player :player1 :persistence {:db :web})))
	(context "human v human:"
		(it "X in box 1"
			(swap! test-atom assoc :current-player :player1 :status :playing :box-played 1 :board [0 1 2 3 4 5 6 7 8]
						 :player1 {:player-num 1 :piece "X" :type :human} :player2 {:player-num 2 :piece "O" :type :human :persistence {:db :web}})
			(reset! test-atom (web/play-turn @test-atom))
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @test-atom))
			(should= :player2 (:current-player @test-atom)))
		(it "O in box 4"
			(swap! test-atom assoc :box-played 4 :current-player :player2 :status :playing :board [0 "X" 2 3 4 5 6 7 8] :player2 {:player-num 2 :piece "O" :type :human})
			(reset! test-atom (web/play-turn @test-atom))
			(should= [0 "X" 2 3 "O" 5 6 7 8] (:board @test-atom))
			(should= :player1 (:current-player @test-atom))))

	(context "computer v human:"
		(reset! test-atom helper/test-game)
		(it "X in box 1"
			(reset! helper/mock-move 1)
			(swap! test-atom assoc :status :playing :board [0 1 2 3 4 5 6 7 8]
						 :player2 {:player-num 2 :piece "O" :type :human})
			(reset! test-atom (master/update-state @test-atom))
			(should= [0 "X" 2 3 4 5 6 7 8] (:board @test-atom))
			(should= :player2 (:current-player @test-atom))))

	(context "game over"
		(reset! test-atom helper/test-game)
		(it "X wins"
			(reset! helper/mock-move 1)
			(swap! test-atom assoc :status :playing :board ["X" 1 "X" 3 4 5 6 7 8])
			(reset! test-atom (master/update-state @test-atom))
			(should= ["X" "X" "X" 3 4 5 6 7 8] (:board @test-atom))
			(should= :game-over (:status @test-atom))
			(should= :player2 (:current-player @test-atom))))
	)


(run-specs)

