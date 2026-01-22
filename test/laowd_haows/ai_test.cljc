(ns laowd-haows.ai-test
  (:require [clojure.test :refer [deftest testing is]]
            [laowd-haows.ai :as ai]
            [laowd-haows.frog :as frog]
            [laowd-haows.player :as player]))

(deftest find-target-test
  (testing "targets nearest green frog"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :green {:x 200 :y 100})
                 (frog/create :green {:x 300 :y 100})
                 (frog/create :orange {:x 110 :y 100})]
          target (ai/find-target computer frogs)]
      (is (= :green (:color target)))
      (is (= {:x 200 :y 100} (:position target)))))

  (testing "ignores orange frogs"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :orange {:x 105 :y 100})
                 (frog/create :green {:x 500 :y 500})]
          target (ai/find-target computer frogs)]
      (is (= :green (:color target)))))

  (testing "returns nil when no green frogs"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :orange {:x 150 :y 100})]
          target (ai/find-target computer frogs)]
      (is (nil? target)))))

(deftest decide-action-test
  (testing "moves toward target when far"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :green {:x 200 :y 100})]
          action (ai/decide-action computer frogs)]
      (is (= :right action))))

  (testing "moves up when target is above"
    (let [computer (player/create :lincoln {:x 100 :y 200})
          frogs [(frog/create :green {:x 100 :y 50})]
          action (ai/decide-action computer frogs)]
      (is (= :forward action))))

  (testing "moves down when target is below"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :green {:x 100 :y 250})]
          action (ai/decide-action computer frogs)]
      (is (= :down action))))

  (testing "moves left when target is to the left"
    (let [computer (player/create :lincoln {:x 200 :y 100})
          frogs [(frog/create :green {:x 50 :y 100})]
          action (ai/decide-action computer frogs)]
      (is (= :left action))))

  (testing "scoops when close enough"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :green {:x 105 :y 105})]
          action (ai/decide-action computer frogs)]
      (is (= :scoop action))))

  (testing "returns nil when no green frogs to chase"
    (let [computer (player/create :lincoln {:x 100 :y 100})
          frogs [(frog/create :orange {:x 150 :y 100})]
          action (ai/decide-action computer frogs)]
      (is (nil? action)))))
