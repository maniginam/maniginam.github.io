// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.persistence.mock_db');
goog.require('cljs.core');
goog.require('ttt.master.core');
ttt.persistence.mock_db.games = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.core._add_method.call(null,ttt.master.core.update_game_with_id,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return game;
}));
cljs.core._add_method.call(null,ttt.master.core.save_game,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
var id = (((new cljs.core.Keyword(null,"gameID","gameID",1872844863).cljs$core$IFn$_invoke$arity$1(game) == null))?cljs.core.rand_int.call(null,(999)):new cljs.core.Keyword(null,"gameID","gameID",1872844863).cljs$core$IFn$_invoke$arity$1(game));
var game__$1 = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"gameID","gameID",1872844863),id);
cljs.core.swap_BANG_.call(null,ttt.persistence.mock_db.games,(function (game_map){
return cljs.core.assoc.call(null,game_map,id,game__$1);
}));

return game__$1;
}));
cljs.core._add_method.call(null,ttt.master.core.save_turn,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return ttt.master.core.save_game.call(null,game);
}));
cljs.core._add_method.call(null,ttt.master.core.load_game,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.get.call(null,cljs.core.deref.call(null,ttt.persistence.mock_db.games),new cljs.core.Keyword(null,"gameID","gameID",1872844863).cljs$core$IFn$_invoke$arity$1(game));
}));

//# sourceMappingURL=mock_db.js.map
