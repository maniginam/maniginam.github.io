(ns laowd-haows.frog-test
  (:require [clojure.test :refer [deftest testing is]]
            [laowd-haows.frog :as frog]))

(deftest create-frog-test
  (testing "creates a green frog"
    (let [f (frog/create :green {:x 10 :y 20})]
      (is (= :green (:color f)))
      (is (= {:x 10 :y 20} (:position f)))))

  (testing "creates an orange frog"
    (let [f (frog/create :orange {:x 5 :y 15})]
      (is (= :orange (:color f)))
      (is (= {:x 5 :y 15} (:position f))))))

(deftest point-value-test
  (testing "green frog is worth 1 point"
    (let [f (frog/create :green {:x 0 :y 0})]
      (is (= 1 (frog/point-value f)))))

  (testing "orange frog is worth -1 point"
    (let [f (frog/create :orange {:x 0 :y 0})]
      (is (= -1 (frog/point-value f))))))

(deftest jump-test
  (testing "frog can jump to a new position"
    (let [f (frog/create :green {:x 10 :y 10})
          jumped (frog/jump f {:x 15 :y 20})]
      (is (= {:x 15 :y 20} (:position jumped))))))

(deftest personality-test
  (testing "frog has a personality"
    (let [f (frog/create-with-personality :green {:x 0 :y 0})]
      (is (contains? f :personality))
      (is (contains? frog/personalities (:personality f)))))

  (testing "personality has name and traits"
    (let [f (frog/create-with-personality :green {:x 0 :y 0})
          p (get frog/personalities (:personality f))]
      (is (contains? p :name))
      (is (contains? p :trait))
      (is (contains? p :eyes))))

  (testing "all personality types exist"
    (is (= 5 (count frog/personalities)))))
