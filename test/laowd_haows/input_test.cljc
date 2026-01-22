(ns laowd-haows.input-test
  (:require [clojure.test :refer [deftest testing is]]
            [laowd-haows.input :as input]))

(deftest key-mapping-test
  (testing "player 1 movement keys (QWES)"
    (is (= [:player-1 :forward] (input/key->action "KeyW")))
    (is (= [:player-1 :down] (input/key->action "KeyS")))
    (is (= [:player-1 :left] (input/key->action "KeyQ")))
    (is (= [:player-1 :right] (input/key->action "KeyE"))))

  (testing "player 1 scoop key"
    (is (= [:player-1 :scoop] (input/key->action "ShiftLeft"))))

  (testing "player 2 movement keys (arrows)"
    (is (= [:player-2 :forward] (input/key->action "ArrowUp")))
    (is (= [:player-2 :down] (input/key->action "ArrowDown")))
    (is (= [:player-2 :left] (input/key->action "ArrowLeft")))
    (is (= [:player-2 :right] (input/key->action "ArrowRight"))))

  (testing "player 2 scoop key"
    (is (= [:player-2 :scoop] (input/key->action "ShiftRight"))))

  (testing "unknown key returns nil"
    (is (nil? (input/key->action "KeyZ")))))

(deftest active-keys-test
  (testing "tracks pressed keys"
    (let [state (-> (input/init)
                    (input/key-down "KeyW")
                    (input/key-down "KeyQ"))]
      (is (contains? (:pressed-keys state) "KeyW"))
      (is (contains? (:pressed-keys state) "KeyQ"))))

  (testing "removes released keys"
    (let [state (-> (input/init)
                    (input/key-down "KeyW")
                    (input/key-up "KeyW"))]
      (is (not (contains? (:pressed-keys state) "KeyW"))))))

(deftest mode-aware-actions-test
  (testing "in single-player mode, arrows map to player-1"
    (is (= [:player-1 :forward] (input/key->action-for-mode "ArrowUp" :single-player)))
    (is (= [:player-1 :down] (input/key->action-for-mode "ArrowDown" :single-player)))
    (is (= [:player-1 :left] (input/key->action-for-mode "ArrowLeft" :single-player)))
    (is (= [:player-1 :right] (input/key->action-for-mode "ArrowRight" :single-player)))
    (is (= [:player-1 :scoop] (input/key->action-for-mode "ShiftRight" :single-player))))

  (testing "in vs-computer mode, arrows map to player-1"
    (is (= [:player-1 :forward] (input/key->action-for-mode "ArrowUp" :vs-computer)))
    (is (= [:player-1 :scoop] (input/key->action-for-mode "ShiftRight" :vs-computer))))

  (testing "in two-player mode, arrows map to player-2"
    (is (= [:player-2 :forward] (input/key->action-for-mode "ArrowUp" :two-player)))
    (is (= [:player-2 :scoop] (input/key->action-for-mode "ShiftRight" :two-player))))

  (testing "QWES keys always map to player-1 regardless of mode"
    (is (= [:player-1 :forward] (input/key->action-for-mode "KeyW" :single-player)))
    (is (= [:player-1 :forward] (input/key->action-for-mode "KeyW" :two-player)))
    (is (= [:player-1 :forward] (input/key->action-for-mode "KeyW" :vs-computer)))))
