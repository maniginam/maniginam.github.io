// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.persistence.mysql');
goog.require('cljs.core');
goog.require('ttt.master.core');
ttt.persistence.mysql.game_num = cljs.core.atom.call(null,(0));
ttt.persistence.mysql.games = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.core._add_method.call(null,ttt.master.core.load_game,new cljs.core.Keyword(null,"web","web",-654701153),(function (game){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,ttt.persistence.mysql.games))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X"], null)], null);
} else {
return cljs.core.get.call(null,ttt.persistence.mysql.games,(cljs.core.deref.call(null,ttt.persistence.mysql.game_num) - (1)));
}
}));
cljs.core._add_method.call(null,ttt.master.core.save_game,new cljs.core.Keyword(null,"web","web",-654701153),(function (game){
return cljs.core.swap_BANG_.call(null,ttt.persistence.mysql.games,cljs.core.assoc,cljs.core.reset_BANG_.call(null,ttt.persistence.mysql.game_num,cljs.core.inc),cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"gameID","gameID",1872844863),cljs.core.deref.call(null,ttt.persistence.mysql.game_num)));
}));
cljs.core._add_method.call(null,ttt.master.core.save_turn,new cljs.core.Keyword(null,"web","web",-654701153),(function (game){
return cljs.core.swap_BANG_.call(null,ttt.persistence.mysql.games,cljs.core.merge,game);
}));

//# sourceMappingURL=mysql.js.map
