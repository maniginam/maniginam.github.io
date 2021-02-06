(ns ttt.terminal.console-messages
  (:require [ttt.master.core :as tcore]))

(defmethod tcore/welcome :terminal [console]
  (println "Welcome to Tic-Tac-Toe!"))

(def game-type-message ["Computer-v-Computer"
                        "Human-v-Computer"
                        "Human-v-Human"])

(def board-size-prompt-message (str "What size grid do you want to play on?"))

(defn level-prompt []
  (str "Select a Level:
  E - Easy
  M - Medium
  H - Hard"))

(defn box-taken [box] (str "box " box " is already taken"))

(def ask-to-play-again (str "Do you want to play again?  Y or N"))

(def ask-restart (str "Do you want to start up where you left last game? Y or N"))