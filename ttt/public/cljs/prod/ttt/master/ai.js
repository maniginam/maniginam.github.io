// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.master.ai');
goog.require('cljs.core');
goog.require('ttt.master.core');
goog.require('ttt.master.optimal_play');
ttt.master.ai.levels__GT_depths = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"easy","easy",315769928),(2),new cljs.core.Keyword(null,"medium","medium",-1864319384),(1),new cljs.core.Keyword(null,"hard","hard",2068420191),(0)], null);
cljs.core._add_method.call(null,ttt.master.core.select_box,new cljs.core.Keyword(null,"computer","computer",-1035300443),(function (player,game){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var depth = cljs.core.get.call(null,ttt.master.ai.levels__GT_depths,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(game),(0));
var box = ttt.master.optimal_play.play_optimal_box.call(null,board,new cljs.core.Keyword(null,"player-num","player-num",1393572093).cljs$core$IFn$_invoke$arity$1(player),depth);
return box;
}));

//# sourceMappingURL=ai.js.map
