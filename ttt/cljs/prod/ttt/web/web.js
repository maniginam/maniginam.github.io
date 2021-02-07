// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.web');
goog.require('cljs.core');
goog.require('ttt.master.game_master');
goog.require('ttt.web.components');
ttt.web.web.run = (function ttt$web$web$run(game_atom){
var game = cljs.core.deref.call(null,game_atom);
while(true){
cljs.core.println.call(null,"game: ",game);

cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,game));

var G__15113 = ttt.web.components.component.call(null,game_atom);
game = G__15113;
continue;
break;
}
});

//# sourceMappingURL=web.js.map
