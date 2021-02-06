(ns ttt.master.optimal-play
  (:require [ttt.board.board :as board]))

(defn get-score [winner depth]
  (cond (= winner 1) (- 10 depth)
        (= winner 2) (- depth 10)
        :else 0))

(defn get-next-player [player]
  (if (= player 1) 2 1))

(defn get-player-piece [player]
  (if (= player 1) "X" "O"))

(defn get-box-scores [board player-num depth]
  (for [box (board/open-boxes board)]
    (let [piece (get-player-piece player-num)
          test-board (replace {box piece} board)
          box-score (cond (board/is-win? test-board) (get-score player-num depth)
                          (board/full-board? test-board) (get-score 0 depth)
                          (and (<= (count board) 9) (>= depth 5)) (get-score 0 depth)
                          (and (> (count board) 9) (> depth 3)) (get-score 0 depth)
                          :else
                          (if (= player-num 1)
                            (apply min (get-box-scores test-board (get-next-player player-num) (inc depth)))
                            (apply max (get-box-scores test-board (get-next-player player-num) (inc depth)))))]
      box-score)))

(defn play-optimal-box [board player-num depth]
  (cond (board/empty-board? board)
        (let [box-count (count board)
              row-size (int (Math/sqrt box-count))
              corners [0 (dec row-size) (- box-count row-size) (dec box-count)]
              box (nth corners (rand-int 4))]
          box)
        :else (let [box-scores (get-box-scores board player-num depth)
                    open-boxes (board/open-boxes board)
                    same? (every? #(= (first box-scores) %) (rest box-scores))
                    min (apply min box-scores)
                    max (apply max box-scores)
                    box (if same?
                          (nth open-boxes (rand-int (count open-boxes)))
                          (loop [index 0]
                            (if (= player-num 1)
                              (if (= max (nth box-scores index))
                                (nth open-boxes index)
                                (recur (inc index)))
                              (if (= min (nth box-scores index))
                                (nth open-boxes index)
                                (recur (inc index))))))]
                box)))