(ns ttt.web.web
	(:require [ttt.master.core :as tcore]
						[ttt.master.game-master :as master]
						))

(def game-atom (atom {}))

;(defn maybe-setup [game-atom]
;	(if (= :playing (:status @game-atom))
;		@game-atom
;		(swap! game-atom merge (tcore/set-parameters @game-atom))))

;(defn maybe-play-turn [game-atom]
;	(if (= :playing (:status @game-atom))
;		(swap! game-atom merge (master/play-turn game-atom))
;		@game-atom))

(defn update-game [game-atom]
	;(master/play-turn game-atom)
	;(maybe-setup game-atom)
	;(master/make-computer-move game-atom)
	@game-atom
	)


;The body of a macro has two implicitly bound symbols: &form and &env.
;They work like two extra unnamed args.
;The names begin with '&' to avoid name clashes with normal user-defined symbols.
;The value of &form is the form of the original macro call before macro expansion.
;There's useful meta-data on &form. The value of &env is the "environment",
;which is basically a map of lexical bindings.
;The keys of &env are the lexically bound symbols.
;The values are internal compiler details, and probably aren't useful for user code.

;(defmacro m [] `(let [x 1] x))
;(m) ; => CompilerException java.lang.RuntimeException:
; Can't let qualified name: user/x, compiling:(NO_SOURCE_PATH:1)
;We can see why:
;(macroexpand-1 '(m)) ; => (clojure.core/let [user/x 1] user/x)
;The syntax-quote has resolved `x` to `user/x`â€”which can't be `let`.
; This is a good thing, as it's signalling to us that we should use
; gensyms by appending `#`:
;(defmacro m [] `(let [x# 1] x#))
;(m) ; => 1
;(macroexpand-1 '(m)) ; => (clojure.core/let [x__383__auto__ 1] x__383__auto__)
;@Arlen:
;If you want to capture the local variables, or create a non-locally
; scoped variable, you can prepend them with ~', allow a namespace capture:
;



;(defmacro parameters [status method]
;	`(defmethod tcore/set-parameters ~status [~'game] ~@method))


;(defmacro players [humans method]
;	`(defmethod tcore/set-players ~humans [~'game] ~@method))
;
;(defmacro users [humans method]
;	`(defmethod tcore/set-users ~humans [~'game] ~@method))

;(parameters :waiting (setup/waiting @game-atom))
;(parameters :user-setup (setup/user-setup @game-atom))
;(parameters :player-setup (setup/player-setup @game-atom))
;(parameters :level-setup (setup/level-setup @game-atom))
;(parameters :board-setup (setup/board-setup @game-atom))
;
;(players 0 (setup/cvc @game-atom))
;(players 2 (setup/hvh @game-atom))
;(players "X" (setup/hvc @game-atom))
;(players "O" (setup/cvh @game-atom))
;
;(users 0 (setup/no-humans @game-atom))
;(users 1 (setup/one-human @game-atom))
;(users 2 (setup/two-human @game-atom))

;(defmacro parameters []
;	#?(:clj (tcore/set-parameters @game-atom)))
