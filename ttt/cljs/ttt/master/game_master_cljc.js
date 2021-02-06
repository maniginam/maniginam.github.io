// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.master.game_master_cljc');
goog.require('cljs.core');
goog.require('ttt.board.board');
ttt.master.game_master_cljc.game_over_QMARK_ = (function ttt$master$game_master_cljc$game_over_QMARK_(game){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
return ((ttt.board.board.is_win_QMARK_.call(null,board)) || (ttt.board.board.full_board_QMARK_.call(null,board)));
});
ttt.master.game_master_cljc.ai_turn_QMARK_ = (function ttt$master$game_master_cljc$ai_turn_QMARK_(state){
var current_player_key = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(state);
var current_player = cljs.core.get.call(null,state,current_player_key);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_player))));
});
ttt.master.game_master_cljc.next_player = (function ttt$master$game_master_cljc$next_player(game){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player1","player1",-1491573636))){
return new cljs.core.Keyword(null,"player2","player2",-226422775);
} else {
return new cljs.core.Keyword(null,"player1","player1",-1491573636);
}
});
ttt.master.game_master_cljc.update_board_with_move = (function ttt$master$game_master_cljc$update_board_with_move(game,box){
var player = cljs.core.get.call(null,game,new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(game));
var board = cljs.core.vec.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game));
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(player);
var new_board = cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([box,piece]),board);
return new_board;
});
ttt.master.game_master_cljc.play_turn = (function ttt$master$game_master_cljc$play_turn(game_atom){
var box = new cljs.core.Keyword(null,"box-played","box-played",405285239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom));
var new_board = ttt.master.game_master_cljc.update_board_with_move.call(null,cljs.core.deref.call(null,game_atom),box);
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"current-player","current-player",-970625153),ttt.master.game_master_cljc.next_player.call(null,cljs.core.deref.call(null,game_atom)));
});
ttt.master.game_master_cljc.update_game_with_move_BANG_ = (function ttt$master$game_master_cljc$update_game_with_move_BANG_(game,box){
var new_board = ttt.master.game_master_cljc.update_board_with_move.call(null,game,box);
var next_player = ttt.master.game_master_cljc.next_player.call(null,game);
var game__$1 = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"box-played","box-played",405285239),box,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"current-player","current-player",-970625153),next_player);
return game__$1;
});
ttt.master.game_master_cljc.make_computer_move = (function ttt$master$game_master_cljc$make_computer_move(game){
return game;
});
ttt.master.game_master_cljc.maybe_make_computer_move = (function ttt$master$game_master_cljc$maybe_make_computer_move(game){
return game;
});
ttt.master.game_master_cljc.update_state = (function ttt$master$game_master_cljc$update_state(game){
ttt.master.game_master_cljc.play_turn.call(null,game);

return ttt.master.game_master_cljc.maybe_make_computer_move.call(null,game);
});

//# sourceMappingURL=game_master_cljc.js.map
