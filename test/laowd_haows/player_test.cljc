(ns laowd-haows.player-test
  (:require [clojure.test :refer [deftest testing is]]
            [laowd-haows.player :as player]
            [laowd-haows.frog :as frog]))

(deftest create-player-test
  (testing "creates Lana Laowd"
    (let [p (player/create :lana {:x 100 :y 100})]
      (is (= :lana (:character p)))
      (is (= "Lana Laowd" (player/display-name p)))
      (is (= {:x 100 :y 100} (:position p)))))

  (testing "creates Lincoln Laowd"
    (let [p (player/create :lincoln {:x 200 :y 200})]
      (is (= :lincoln (:character p)))
      (is (= "Lincoln Laowd" (player/display-name p)))
      (is (= {:x 200 :y 200} (:position p)))))

  (testing "player starts with empty bucket"
    (let [p (player/create :lana {:x 0 :y 0})]
      (is (empty? (:bucket p))))))

(deftest move-player-test
  (testing "player moves forward"
    (let [p (player/create :lana {:x 100 :y 100})
          moved (player/move p :forward)]
      (is (= {:x 100 :y 90} (:position moved)))))

  (testing "player moves down"
    (let [p (player/create :lana {:x 100 :y 100})
          moved (player/move p :down)]
      (is (= {:x 100 :y 110} (:position moved)))))

  (testing "player moves left"
    (let [p (player/create :lana {:x 100 :y 100})
          moved (player/move p :left)]
      (is (= {:x 90 :y 100} (:position moved)))))

  (testing "player moves right"
    (let [p (player/create :lana {:x 100 :y 100})
          moved (player/move p :right)]
      (is (= {:x 110 :y 100} (:position moved))))))

(deftest scoop-frog-test
  (testing "scoops a frog into the bucket"
    (let [p (player/create :lana {:x 100 :y 100})
          f (frog/create :green {:x 105 :y 105})
          scooped (player/scoop p f)]
      (is (= 1 (count (:bucket scooped))))
      (is (= :green (:color (first (:bucket scooped)))))))

  (testing "scoops multiple frogs"
    (let [p (player/create :lana {:x 100 :y 100})
          f1 (frog/create :green {:x 105 :y 105})
          f2 (frog/create :orange {:x 108 :y 108})
          scooped (-> p (player/scoop f1) (player/scoop f2))]
      (is (= 2 (count (:bucket scooped)))))))

(deftest character-personality-test
  (testing "Lana has personality traits"
    (let [lana-info (player/character-info :lana)]
      (is (= "Lana Laowd" (:name lana-info)))
      (is (some? (:personality lana-info)))
      (is (some? (:catchphrase lana-info)))
      (is (some? (:color lana-info)))))

  (testing "Lincoln has personality traits"
    (let [lincoln-info (player/character-info :lincoln)]
      (is (= "Lincoln Laowd" (:name lincoln-info)))
      (is (some? (:personality lincoln-info)))
      (is (some? (:catchphrase lincoln-info)))
      (is (some? (:color lincoln-info)))))

  (testing "characters have distinct personalities"
    (let [lana (player/character-info :lana)
          lincoln (player/character-info :lincoln)]
      (is (not= (:personality lana) (:personality lincoln))))))
