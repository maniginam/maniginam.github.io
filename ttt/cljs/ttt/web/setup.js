// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup');
goog.require('cljs.core');
goog.require('ttt.board.board');
goog.require('ttt.master.core');
cljs.core._add_method.call(null,ttt.master.core.set_parameters,new cljs.core.Keyword(null,"waiting","waiting",895906735),(function (game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594));
}));
cljs.core._add_method.call(null,ttt.master.core.set_players,(0),(function (game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null));
}));
cljs.core._add_method.call(null,ttt.master.core.set_users,(0),(function (game){
return cljs.core.assoc.call(null,ttt.master.core.set_players.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"entry","entry",505168823),(0))),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"users","users",-713552705),(0));
}));
cljs.core._add_method.call(null,ttt.master.core.set_users,(1),(function (game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"users","users",-713552705),(1));
}));
cljs.core._add_method.call(null,ttt.master.core.set_users,(2),(function (game){
return cljs.core.assoc.call(null,ttt.master.core.set_players.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"entry","entry",505168823),(2))),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"users","users",-713552705),(2));
}));
cljs.core._add_method.call(null,ttt.master.core.set_players,(2),(function (game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));
}));
cljs.core._add_method.call(null,ttt.master.core.set_parameters,new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),(function (game){
return ttt.master.core.set_users.call(null,game);
}));
cljs.core._add_method.call(null,ttt.master.core.set_players,"X",(function (game){
var player1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var player2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"player1","player1",-1491573636),player1,new cljs.core.Keyword(null,"player2","player2",-226422775),player2);
}));
cljs.core._add_method.call(null,ttt.master.core.set_players,"O",(function (game){
var player1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var player2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"player1","player1",-1491573636),player1,new cljs.core.Keyword(null,"player2","player2",-226422775),player2);
}));
cljs.core._add_method.call(null,ttt.master.core.set_parameters,new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),(function (game){
return cljs.core.assoc.call(null,ttt.master.core.set_players.call(null,game),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081));
}));
cljs.core._add_method.call(null,ttt.master.core.set_parameters,new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),(function (game){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(game)));
}));
cljs.core._add_method.call(null,ttt.master.core.set_parameters,new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),(function (game){
var board_size = new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(game);
var board = ttt.board.board.create_board.call(null,board_size);
var game_with_board = cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board-size","board-size",140730505),board_size,new cljs.core.Keyword(null,"board","board",-1907017633),board);
return cljs.core.assoc.call(null,game_with_board,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636));
}));

//# sourceMappingURL=setup.js.map
