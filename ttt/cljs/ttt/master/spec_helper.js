// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.master.spec_helper');
goog.require('cljs.core');
goog.require('ttt.master.core');
ttt.master.spec_helper.player1 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mock","mock",-383657858)], null);
ttt.master.spec_helper.player2 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mock","mock",-383657858)], null);
ttt.master.spec_helper.standard_board = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
ttt.master.spec_helper.console = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mock","mock",-383657858));
ttt.master.spec_helper.empty_game = cljs.core.assoc.call(null,ttt.master.core.game_model,new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"mock","mock",-383657858),new cljs.core.Keyword(null,"dbname","dbname",-974440753),"test",new cljs.core.Keyword(null,"table","table",-564943036),"TEST"], null),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"mock","mock",-383657858));
ttt.master.spec_helper.test_game = cljs.core.assoc.call(null,ttt.master.core.game_model,new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"mock","mock",-383657858),new cljs.core.Keyword(null,"dbname","dbname",-974440753),"test",new cljs.core.Keyword(null,"table","table",-564943036),"TEST"], null),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"mock","mock",-383657858),new cljs.core.Keyword(null,"users","users",-713552705),(0),new cljs.core.Keyword(null,"player1","player1",-1491573636),ttt.master.spec_helper.player1,new cljs.core.Keyword(null,"player2","player2",-226422775),ttt.master.spec_helper.player2,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-size","board-size",140730505),(3));
ttt.master.spec_helper.mock_move = cljs.core.atom.call(null,(0));
cljs.core._add_method.call(null,ttt.master.core.select_box,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (_,game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_move);
}));
ttt.master.spec_helper.mock_position = cljs.core.atom.call(null,"x");
cljs.core._add_method.call(null,ttt.master.core.offer_position,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_position);
}));
ttt.master.spec_helper.mock_restart_QMARK_ = cljs.core.atom.call(null,false);
cljs.core._add_method.call(null,ttt.master.core.restart_QMARK_,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_restart_QMARK_);
}));
ttt.master.spec_helper.mock_player_count = cljs.core.atom.call(null,(0));
cljs.core._add_method.call(null,ttt.master.core.validate_player_count,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_player_count);
}));
ttt.master.spec_helper.mock_board_size = cljs.core.atom.call(null,(3));
cljs.core._add_method.call(null,ttt.master.core.set_board_size,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_board_size);
}));
ttt.master.spec_helper.mock_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191));
cljs.core._add_method.call(null,ttt.master.core.prompt_for_level,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return cljs.core.deref.call(null,ttt.master.spec_helper.mock_level);
}));
cljs.core._add_method.call(null,ttt.master.core.draw_state,new cljs.core.Keyword(null,"mock","mock",-383657858),(function (game){
return null;
}));

//# sourceMappingURL=spec_helper.js.map
