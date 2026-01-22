(ns laowd-haows.game-test
  (:require [clojure.test :refer [deftest testing is]]
            [laowd-haows.game :as game]
            [laowd-haows.frog :as frog]
            [laowd-haows.player :as player]))

(deftest init-game-test
  (testing "single player game starts with player 1 as Lana"
    (let [g (game/init {:mode :single-player})]
      (is (= :lana (get-in g [:players :player-1 :character])))))

  (testing "two player game has both Lana and Lincoln"
    (let [g (game/init {:mode :two-player})]
      (is (= :lana (get-in g [:players :player-1 :character])))
      (is (= :lincoln (get-in g [:players :player-2 :character])))))

  (testing "vs computer game has computer player"
    (let [g (game/init {:mode :vs-computer})]
      (is (= :lana (get-in g [:players :player-1 :character])))
      (is (= :lincoln (get-in g [:players :computer :character])))
      (is (true? (get-in g [:players :computer :is-computer?])))))

  (testing "game starts with 5 green and 5 orange frogs"
    (let [g (game/init {:mode :single-player})
          frogs (:frogs g)
          green-count (count (filter #(= :green (:color %)) frogs))
          orange-count (count (filter #(= :orange (:color %)) frogs))]
      (is (= 5 green-count))
      (is (= 5 orange-count)))))

(deftest calculate-score-test
  (testing "score is sum of green frogs minus orange frogs"
    (let [p (-> (player/create :lana {:x 0 :y 0})
                (player/scoop (frog/create :green {:x 0 :y 0}))
                (player/scoop (frog/create :green {:x 0 :y 0}))
                (player/scoop (frog/create :orange {:x 0 :y 0})))]
      (is (= 1 (game/calculate-score p)))))

  (testing "empty bucket has zero score"
    (let [p (player/create :lana {:x 0 :y 0})]
      (is (= 0 (game/calculate-score p))))))

(deftest frog-counts-test
  (testing "counts green frogs in bucket"
    (let [p (-> (player/create :lana {:x 0 :y 0})
                (player/scoop (frog/create :green {:x 0 :y 0}))
                (player/scoop (frog/create :green {:x 0 :y 0})))]
      (is (= 2 (game/green-frog-count p)))))

  (testing "counts orange frogs in bucket"
    (let [p (-> (player/create :lana {:x 0 :y 0})
                (player/scoop (frog/create :orange {:x 0 :y 0}))
                (player/scoop (frog/create :orange {:x 0 :y 0}))
                (player/scoop (frog/create :orange {:x 0 :y 0})))]
      (is (= 3 (game/orange-frog-count p))))))

(deftest win-condition-test
  (testing "player wins with 10 green frogs and no orange"
    (let [p (reduce (fn [acc _] (player/scoop acc (frog/create :green {:x 0 :y 0})))
                    (player/create :lana {:x 0 :y 0})
                    (range 10))]
      (is (true? (game/winner? p)))))

  (testing "player does not win with 9 green frogs"
    (let [p (reduce (fn [acc _] (player/scoop acc (frog/create :green {:x 0 :y 0})))
                    (player/create :lana {:x 0 :y 0})
                    (range 9))]
      (is (false? (game/winner? p)))))

  (testing "with 1 orange frog, need 15 green to win"
    (let [p-not-enough (-> (reduce (fn [acc _] (player/scoop acc (frog/create :green {:x 0 :y 0})))
                                   (player/create :lana {:x 0 :y 0})
                                   (range 14))
                           (player/scoop (frog/create :orange {:x 0 :y 0})))
          p-enough (-> (reduce (fn [acc _] (player/scoop acc (frog/create :green {:x 0 :y 0})))
                               (player/create :lana {:x 0 :y 0})
                               (range 15))
                       (player/scoop (frog/create :orange {:x 0 :y 0})))]
      (is (false? (game/winner? p-not-enough)))
      (is (true? (game/winner? p-enough)))))

  (testing "with 2 orange frogs, need 20 green to win"
    (let [p (-> (reduce (fn [acc _] (player/scoop acc (frog/create :green {:x 0 :y 0})))
                        (player/create :lana {:x 0 :y 0})
                        (range 20))
                (player/scoop (frog/create :orange {:x 0 :y 0}))
                (player/scoop (frog/create :orange {:x 0 :y 0})))]
      (is (true? (game/winner? p))))))

(deftest frogs-needed-test
  (testing "base requirement is 10 green frogs"
    (let [p (player/create :lana {:x 0 :y 0})]
      (is (= 10 (game/frogs-needed-to-win p)))))

  (testing "each orange frog adds 5 to requirement"
    (let [p (-> (player/create :lana {:x 0 :y 0})
                (player/scoop (frog/create :orange {:x 0 :y 0}))
                (player/scoop (frog/create :orange {:x 0 :y 0})))]
      (is (= 20 (game/frogs-needed-to-win p))))))

(deftest spawn-frog-test
  (testing "spawns a new frog after 5 seconds"
    (let [g (game/init {:mode :single-player})
          initial-count (count (:frogs g))
          updated (game/update-spawn g 5000)]
      (is (= (inc initial-count) (count (:frogs updated))))))

  (testing "does not spawn before 5 seconds"
    (let [g (game/init {:mode :single-player})
          initial-count (count (:frogs g))
          updated (game/update-spawn g 4999)]
      (is (= initial-count (count (:frogs updated))))))

  (testing "accumulates time toward next spawn"
    (let [g (game/init {:mode :single-player})
          updated (game/update-spawn g 3000)]
      (is (= 3000 (:spawn-timer updated))))))

(deftest scoop-from-game-test
  (testing "player scoops nearby frog and removes it from game"
    (let [g (-> (game/init {:mode :single-player})
                (assoc :frogs [(frog/create :green {:x 105 :y 305})]))
          result (game/player-scoop g :player-1)]
      (is (= 0 (count (:frogs result))))
      (is (= 1 (count (get-in result [:players :player-1 :bucket]))))))

  (testing "player cannot scoop frog that is too far"
    (let [g (-> (game/init {:mode :single-player})
                (assoc :frogs [(frog/create :green {:x 500 :y 500})]))
          result (game/player-scoop g :player-1)]
      (is (= 1 (count (:frogs result))))
      (is (= 0 (count (get-in result [:players :player-1 :bucket])))))))
