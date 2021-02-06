(ns ttt.board.board)

(def player1-piece "X")
(def player2-piece "O")
(def pieces {:player1 "X" :player2 "O"})
(def player-nums {:player1 1 :player2 2})
(def game-pieces {:player1-piece "X" :player2-piece "O"})

(defn create-board [size]
	(let [box-count (* size size)
				;board-map (if (= 1 box-count) {0 0} (apply hash-map (mapcat #(repeat 2 %) (range box-count))))
				board (vec (range box-count))]
		board))

(defn get-rows [board]
	(let [size (count board)
				grid-size (int (Math/sqrt size))
				rows (for [row (range 0 grid-size)]
							 (subvec board (* row grid-size) (* (inc row) grid-size)))]
		rows))

(defn did-row-win? [board]
	(let [rows (get-rows board)
				wins-by-row (for [row rows] (every? #(= (first row) %) (rest row)))]
		(not (empty? (filter true? wins-by-row)))))

(defn get-columns [board]
	(let [size (count board)
				grid-size (int (Math/sqrt size))
				columns (for [column (range 0 grid-size)]
									(map #(nth board %)
											 (take grid-size (iterate (partial + grid-size) column))))]
		columns))

(defn did-col-win? [board]
	(let [columns (get-columns board)
				wins-by-col (for [column columns] (every? #(= (first column) %) (rest column)))]
		(not (empty? (filter true? wins-by-col)))))

(defn get-diagonals [board]
	(let [size (count board)
				grid-size (int (Math/sqrt size))
				diagonal1 (map #(nth board %) (take grid-size (iterate (partial + (inc grid-size)) 0)))
				diagonal2 (map #(nth board %) (take grid-size (iterate (partial + (dec grid-size)) (dec grid-size))))]
		[diagonal1 diagonal2]))

(defn get-all-lines [board]
	(let [rows (get-rows board)
				cols (get-columns board)
				diags (get-diagonals board)]
		(concat rows cols diags)))

(defn line-is-winner? [board line]
	(let [test (nth board (first line))
				others (map #(nth board %) (rest line))]
	(every? #(= test %) others)))

(defn get-winning-line [board]
	(let [empty-board (create-board (Math/sqrt (count board)))
				winning-lines (get-all-lines empty-board)
				wins (mapcat #(if (line-is-winner? board %) %) winning-lines)]
		wins))

(defn did-diagonal-win? [board]
	(let [diagonals (get-diagonals board)
				diagonal1 (first diagonals)
				diagonal2 (second diagonals)
				diag1-win? (every? #(= (first diagonal1) %) diagonal1)
				diag2-win? (every? #(= (first diagonal2) %) diagonal2)]
		(or diag1-win? diag2-win?)))

(defn is-win? [board]
	(or (did-row-win? board) (did-col-win? board) (did-diagonal-win? board)))

(defn winning-line-index [board]
	(let [lines (get-all-lines board)
				indexes (range 0 (count lines))]
		(first (remove nil? (for [line lines index indexes]
													(if (is-win? line)
														index
														nil))))))

(defn is-vector-win? [row]
	(every? #(= (first row) %) (rest row)))

(defn is-winning-move? [board]
	(let [rows (get-rows board)
				columns (get-columns board)
				diagonals (get-diagonals board)]
		(map #(filter (is-vector-win? %1) %2) [rows columns diagonals])))

(defn put-piece-on-board [board box-played game-piece]
	(replace {box-played game-piece} board))

(defn open-boxes [board]
	(filter #(int? %) board))

(defn played-boxes [board]
	(remove nil? (map #(if (not (int? %1)) %2) board (vec (range 0 (count board))))))

(defn full-board? [board]
	(empty? (open-boxes board)))

(defn empty-board? [board]
	(every? int? board))

(defn does-box-exist? [box board]
	(and (>= box 0) (< box (count board))))

(defn is-box-open? [board played-box]
	(let [open-boxes (open-boxes board)]
		(= [played-box] (filter #(= played-box %) open-boxes))))

(defn is-good-box? [board box]
	(and (does-box-exist? box board) (is-box-open? board box)))


