// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.master.game_master');
goog.require('cljs.core');
goog.require('ttt.master.core');
goog.require('ttt.persistence.game_saving');
goog.require('ttt.board.board');
goog.require('ttt.master.ai');
ttt.master.game_master.game_over_QMARK_ = (function ttt$master$game_master$game_over_QMARK_(game){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
return ((ttt.board.board.is_win_QMARK_.call(null,board)) || (ttt.board.board.full_board_QMARK_.call(null,board)));
});
ttt.master.game_master.next_player = (function ttt$master$game_master$next_player(game){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player1","player1",-1491573636))){
return new cljs.core.Keyword(null,"player2","player2",-226422775);
} else {
return new cljs.core.Keyword(null,"player1","player1",-1491573636);
}
});
ttt.master.game_master.ai_turn_QMARK_ = (function ttt$master$game_master$ai_turn_QMARK_(state){
var current_player_key = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(state);
var current_player = cljs.core.get.call(null,state,current_player_key);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_player))));
});
ttt.master.game_master.update_board_with_move = (function ttt$master$game_master$update_board_with_move(game,box){
if((box == null)){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
} else {
var player = cljs.core.get.call(null,game,new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(game));
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var piece = new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(player);
var new_board = cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([box,piece]),board);
return new_board;
}
});
ttt.master.game_master.get_move_from_player = (function ttt$master$game_master$get_move_from_player(game){
if(ttt.board.board.full_board_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game))){
return null;
} else {
var player = cljs.core.get.call(null,game,new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(game));
var box = ttt.master.core.select_box.call(null,player,game);
return box;
}
});
ttt.master.game_master.update_game_with_move_BANG_ = (function ttt$master$game_master$update_game_with_move_BANG_(game,box){
var new_board = ttt.master.game_master.update_board_with_move.call(null,game,box);
var next_player = ttt.master.game_master.next_player.call(null,game);
var game__$1 = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"box-played","box-played",405285239),box,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"current-player","current-player",-970625153),next_player);
ttt.master.core.save_turn.call(null,game__$1);

ttt.master.core.draw_state.call(null,game__$1);

return game__$1;
});
ttt.master.game_master.get_winner = (function ttt$master$game_master$get_winner(game){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
if((board == null)){
return game;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game)))){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"winner","winner",714604679),(1));
} else {
if(ttt.board.board.is_win_QMARK_.call(null,board)){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"player-num","player-num",1393572093).cljs$core$IFn$_invoke$arity$1(ttt.master.game_master.next_player.call(null,game).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"winning-line","winning-line",1521632579),ttt.board.board.get_winning_line.call(null,board));
} else {
if(ttt.board.board.full_board_QMARK_.call(null,board)){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"winner","winner",714604679),(0),new cljs.core.Keyword(null,"winning-line","winning-line",1521632579),null);
} else {
return game;

}
}
}
}
});
ttt.master.game_master.game_with_next_move = (function ttt$master$game_master$game_with_next_move(game){
return ttt.master.game_master.update_game_with_move_BANG_.call(null,game,ttt.master.game_master.get_move_from_player.call(null,game));
});
ttt.master.game_master.play_turn_BANG_ = (function ttt$master$game_master$play_turn_BANG_(game){
ttt.master.core.save_turn.call(null,game);

return game;
});
ttt.master.game_master.play_game = (function ttt$master$game_master$play_game(game){
if(ttt.master.game_master.game_over_QMARK_.call(null,game)){
return ttt.master.game_master.get_winner.call(null,game);
} else {
return ttt.master.game_master.play_turn_BANG_.call(null,ttt.master.game_master.game_with_next_move.call(null,game));
}
});
ttt.master.game_master.set_level = (function ttt$master$game_master$set_level(game,level){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113));
});
ttt.master.game_master.start_game_BANG_ = (function ttt$master$game_master$start_game_BANG_(game){
var game__$1 = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335));
ttt.master.core.save_game.call(null,game__$1);

return ttt.master.core.update_game_with_id.call(null,game__$1);
});
ttt.master.game_master.set_players = (function ttt$master$game_master$set_players(state,type){
var users = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(state);
if((users === (0))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player1","player1",-1491573636),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),type),new cljs.core.Keyword(null,"player2","player2",-226422775),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),type),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081));
} else {
if(cljs.core._EQ_.call(null,(2),users)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player1","player1",-1491573636),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),type),new cljs.core.Keyword(null,"player2","player2",-226422775),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),type),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113));
} else {
var player2type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"human","human",-772334390)))?new cljs.core.Keyword(null,"computer","computer",-1035300443):((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"computer","computer",-1035300443)))?new cljs.core.Keyword(null,"human","human",-772334390):null));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"player1","player1",-1491573636),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),type),new cljs.core.Keyword(null,"player2","player2",-226422775),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348),player2type),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081));

}
}
});
ttt.master.game_master.maybe_make_computer_move = (function ttt$master$game_master$maybe_make_computer_move(state){
if((((!(ttt.master.game_master.game_over_QMARK_.call(null,state)))) && (ttt.master.game_master.ai_turn_QMARK_.call(null,state)))){
return ttt.master.game_master.game_with_next_move.call(null,state);
} else {
return state;
}
});
ttt.master.game_master.maybe_game_over = (function ttt$master$game_master$maybe_game_over(state){
if(((ttt.master.game_master.game_over_QMARK_.call(null,state)) && ((!((new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state) == null)))))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return state;
}
});
ttt.master.game_master.maybe_start_game = (function ttt$master$game_master$maybe_start_game(state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ready-to-play","ready-to-play",161594201),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state))){
return ttt.master.game_master.start_game_BANG_.call(null,state);
} else {
return state;
}
});
ttt.master.game_master.maybe_load_game = (function ttt$master$game_master$maybe_load_game(state){
if((new cljs.core.Keyword(null,"last-game","last-game",1547493148).cljs$core$IFn$_invoke$arity$1(state) == null)){
var loaded_game = ttt.master.core.load_game.call(null,state);
var last_game = ((cljs.core.empty_QMARK_.call(null,loaded_game))?cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-game","last-game",1547493148),cljs.core.PersistentVector.EMPTY):cljs.core.assoc.call(null,loaded_game,new cljs.core.Keyword(null,"old-console","old-console",1042691420),new cljs.core.Keyword(null,"console","console",1228072057).cljs$core$IFn$_invoke$arity$1(loaded_game),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"console","console",1228072057).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-game","last-game",1547493148),last_game);
} else {
return state;
}
});
ttt.master.game_master.maybe_pause_for_restart = (function ttt$master$game_master$maybe_pause_for_restart(state){
var pause = new cljs.core.Keyword(null,"play-again-pause","play-again-pause",-117043075).cljs$core$IFn$_invoke$arity$1(state);
var new_pause = ((ttt.master.game_master.game_over_QMARK_.call(null,state))?(((pause == null))?(1):(((pause < (100)))?(pause + (1)):(100)
)):(0));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"play-again-pause","play-again-pause",-117043075),new_pause);
});
ttt.master.game_master.maybe_update_status = (function ttt$master$game_master$maybe_update_status(state){
if(((ttt.master.game_master.game_over_QMARK_.call(null,state)) && ((!((new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state) == null)))))){
if(cljs.core._EQ_.call(null,(100),new cljs.core.Keyword(null,"play-again-pause","play-again-pause",-117043075).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"play-again","play-again",184461122));
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"game-over","game-over",-607322695));
}
} else {
return state;
}
});
ttt.master.game_master.update_state = (function ttt$master$game_master$update_state(state){
return ttt.master.game_master.maybe_update_status.call(null,ttt.master.game_master.maybe_pause_for_restart.call(null,ttt.master.game_master.get_winner.call(null,ttt.master.game_master.maybe_game_over.call(null,ttt.master.game_master.maybe_make_computer_move.call(null,ttt.master.game_master.maybe_start_game.call(null,ttt.master.game_master.maybe_load_game.call(null,state)))))));
});

//# sourceMappingURL=game_master.js.map
