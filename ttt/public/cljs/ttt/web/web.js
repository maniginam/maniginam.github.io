// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.web');
goog.require('cljs.core');
goog.require('ttt.master.core');
goog.require('ttt.master.game_master');
ttt.web.web.game_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ttt.web.web.update_game = (function ttt$web$web$update_game(game_atom){
return cljs.core.deref.call(null,game_atom);
});

//# sourceMappingURL=web.js.map
