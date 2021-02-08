// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('ttt.web.board');
goog.require('ttt.master.core');
goog.require('ttt.master.game_master');
goog.require('ttt.web.setup');
if((typeof ttt !== 'undefined') && (typeof ttt.web !== 'undefined') && (typeof ttt.web.components !== 'undefined') && (typeof ttt.web.components.component !== 'undefined')){
} else {
ttt.web.components.component = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ttt.web.components","component"),(function (game_atom){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"waiting","waiting",895906735),(function (game_atom){
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"Welcome to Tic Tac Toe!"),sablono.core.create_element.call(null,"button",({"id": "start", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,cljs.core.assoc.call(null,ttt.master.core.game_model,new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
}), "className": "h-center"}),"Let's Play!")));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),(function (game_atom){
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"TicTacToe!"),sablono.core.create_element.call(null,"h2",null,"How Many Humans Are Playing?"),sablono.core.create_element.call(null,"button",({"id": "cvc", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),(0));

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"No humans are playing"),sablono.core.create_element.call(null,"button",({"id": "hvc", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),(1));

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"Me VS Computer!"),sablono.core.create_element.call(null,"button",({"id": "hvh", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),(2));

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"me & a human friend")));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),(function (game_atom){
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"TicTacToe!"),sablono.core.create_element.call(null,"h2",null,"Choose a Difficulty"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"button",({"id": "easy", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"easy"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"button",({"id": "medium", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"Medium"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"button",({"id": "hard", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"HARD!")));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),(function (game_atom){
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"TicTacToe!"),sablono.core.create_element.call(null,"h2",null,"Do you want to be X or O?"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"button",({"id": "X", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),"X");

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"X"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"button",({"id": "O", "type": "submit", "onClick": (function (){
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),"O");

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));
})}),"O")));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),(function (game_atom){
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"TicTacToe!"),sablono.core.create_element.call(null,"h2",null,"What size board do you want to play?"),sablono.core.create_element.call(null,"br",null),sablono.core.create_element.call(null,"label",null,"? x ?  "),sablono.interpreter.create_element.call(null,"input",({"id": "boardsize", "type": "text", "name": "board-size"})),sablono.core.create_element.call(null,"button",({"id": "play", "type": "submit", "onClick": (function (){
var entry = document.getElementById("boardsize").value;
cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"entry","entry",505168823),entry,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636));

cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,game_atom)));

return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,game_atom)));
})}),"Let's Play!")));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"playing","playing",70013335),(function (game_atom){
var player = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom));
var piece = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player1","player1",-1491573636),player))?"X":"O");
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"TicTacToe!"),(function (){var attrs83043 = [piece,"'s Turn"].join('');
return cljs.core.apply.call(null,sablono.core.create_element,"h2",((cljs.core.map_QMARK_.call(null,attrs83043))?sablono.interpreter.attributes.call(null,attrs83043):null),((cljs.core.map_QMARK_.call(null,attrs83043))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs83043)], null)));
})()),sablono.interpreter.interpret.call(null,ttt.web.board.draw_board.call(null,game_atom)));
}));
cljs.core._add_method.call(null,ttt.web.components.component,new cljs.core.Keyword(null,"game-over","game-over",-607322695),(function (game_atom){
var winner = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom));
return sablono.core.create_element.call(null,"div",({"className": "h-center"}),sablono.core.create_element.call(null,"div",({"className": "container"}),sablono.core.create_element.call(null,"h1",null,"GAME OVER!"),(function (){var attrs83046 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,(0),winner))?"Cat's Game!":((cljs.core._EQ_.call(null,(1),winner))?"X Won!":((cljs.core._EQ_.call(null,(2),winner))?"O Won!":null))));
return cljs.core.apply.call(null,sablono.core.create_element,"h2",((cljs.core.map_QMARK_.call(null,attrs83046))?sablono.interpreter.attributes.call(null,attrs83046):null),((cljs.core.map_QMARK_.call(null,attrs83046))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs83046)], null)));
})(),sablono.core.create_element.call(null,"button",({"id": "play-again", "type": "submit", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,cljs.core.assoc.call(null,ttt.master.core.game_model,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
}), "className": "h-center"}),"Let's Play Again!"),sablono.core.create_element.call(null,"br",null),sablono.interpreter.interpret.call(null,ttt.web.board.draw_board.call(null,game_atom))));
}));

//# sourceMappingURL=components.js.map
