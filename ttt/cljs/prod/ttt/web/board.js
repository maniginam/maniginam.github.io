// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board');
goog.require('cljs.core');
goog.require('ttt.master.game_master');
goog.require('ttt.master.core');
goog.require('ttt.board.board');
ttt.web.board.svg_size = cljs.core.atom.call(null,(550));
ttt.web.board.playing_color = "coral";
ttt.web.board.winner_color = "rgb(152 251 152)";
ttt.web.board.cats_color = "rgb(80 80 80)";
ttt.web.board.draw_O = (function ttt$web$board$draw_O(box,board){
var box_width = parseInt(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(box));
var box_height = parseInt(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(box));
var box_size = (function (){var x__4217__auto__ = box_width;
var y__4218__auto__ = box_height;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var x = parseInt(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(box));
var y = parseInt(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(box));
var r = ((0.7 * box_size) / (2));
var cx = (x + (box_size / (2)));
var cy = (y + (box_size / (2)));
var o = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(248, 152, 121)",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"25"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),(r + ((25) / (2))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(80 80 80)",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),(r - ((25) / (2))),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(80 80 80)",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null)], null);
return o;
});
ttt.web.board.draw_X = (function ttt$web$board$draw_X(box,board){
var box_width = parseInt(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(box));
var box_height = parseInt(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(box));
var box_size = (function (){var x__4217__auto__ = box_width;
var y__4218__auto__ = box_height;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var x = parseInt(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(box));
var y = parseInt(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(box));
var lt = (x + (0.2 * box_size));
var rt = (x + (0.8 * box_size));
var top = (y + (0.2 * box_size));
var bottom = (y + (0.8 * box_size));
var piece = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["rgb(248, 152, 121)",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(box)),"d"].join(''),top,"round","30",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(box)),"d"].join(''),lt,bottom,rt])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["rgb(248, 152, 121)",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(box)),"u"].join(''),bottom,"round","30",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(box)),"u"].join(''),lt,top,rt])], null)], null);
return piece;
});
ttt.web.board.draw_pieces = (function ttt$web$board$draw_pieces(game,boxes){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var pieces = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__31802_SHARP_){
if(cljs.core._EQ_.call(null,"X",cljs.core.nth.call(null,board,parseInt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__31802_SHARP_)))))){
return ttt.web.board.draw_X.call(null,cljs.core.second.call(null,p1__31802_SHARP_),board);
} else {
if(cljs.core._EQ_.call(null,"O",cljs.core.nth.call(null,board,parseInt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__31802_SHARP_)))))){
return ttt.web.board.draw_O.call(null,cljs.core.second.call(null,p1__31802_SHARP_),board);
} else {
return null;
}
}
}),boxes));
return (new cljs.core.List(null,pieces,null,(1),null));
});
ttt.web.board.draw_horizontal_lines = (function ttt$web$board$draw_horizontal_lines(board_specs){
var box_size = new cljs.core.Keyword(null,"box-size","box-size",1023444916).cljs$core$IFn$_invoke$arity$1(board_specs);
var boxes = new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449).cljs$core$IFn$_invoke$arity$1(board_specs);
var left = cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.05 * cljs.core.deref.call(null,ttt.web.board.svg_size)));
var right = cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.95 * cljs.core.deref.call(null,ttt.web.board.svg_size)));
var constants = (function (){var iter__4529__auto__ = (function ttt$web$board$draw_horizontal_lines_$_iter__31804(s__31805){
return (new cljs.core.LazySeq(null,(function (){
var s__31805__$1 = s__31805;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31805__$1);
if(temp__5735__auto__){
var s__31805__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31805__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31805__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31807 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31806 = (0);
while(true){
if((i__31806 < size__4528__auto__)){
var line = cljs.core._nth.call(null,c__4527__auto__,i__31806);
cljs.core.chunk_append.call(null,b__31807,cljs.core.str.cljs$core$IFn$_invoke$arity$1((line * box_size)));

var G__31808 = (i__31806 + (1));
i__31806 = G__31808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31807),ttt$web$board$draw_horizontal_lines_$_iter__31804.call(null,cljs.core.chunk_rest.call(null,s__31805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31807),null);
}
} else {
var line = cljs.core.first.call(null,s__31805__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1((line * box_size)),ttt$web$board$draw_horizontal_lines_$_iter__31804.call(null,cljs.core.rest.call(null,s__31805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(1),boxes));
})();
return cljs.core.map.call(null,(function (p1__31803_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),["hline@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31803_SHARP_)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"line",new cljs.core.Keyword(null,"x1","x1",-1863922247),"0%",new cljs.core.Keyword(null,"y1","y1",589123466),p1__31803_SHARP_,new cljs.core.Keyword(null,"x2","x2",-1362513475),"100%",new cljs.core.Keyword(null,"y2","y2",-718691301),p1__31803_SHARP_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(94, 94, 99)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null));
}),constants);
});
ttt.web.board.draw_vertical_lines = (function ttt$web$board$draw_vertical_lines(board_specs){
var box_size = new cljs.core.Keyword(null,"box-size","box-size",1023444916).cljs$core$IFn$_invoke$arity$1(board_specs);
var boxes = new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449).cljs$core$IFn$_invoke$arity$1(board_specs);
var top = cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.05 * cljs.core.deref.call(null,ttt.web.board.svg_size)));
var bottom = cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.95 * cljs.core.deref.call(null,ttt.web.board.svg_size)));
var constants = (function (){var iter__4529__auto__ = (function ttt$web$board$draw_vertical_lines_$_iter__31810(s__31811){
return (new cljs.core.LazySeq(null,(function (){
var s__31811__$1 = s__31811;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31811__$1);
if(temp__5735__auto__){
var s__31811__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31811__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31811__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31813 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31812 = (0);
while(true){
if((i__31812 < size__4528__auto__)){
var line = cljs.core._nth.call(null,c__4527__auto__,i__31812);
cljs.core.chunk_append.call(null,b__31813,cljs.core.str.cljs$core$IFn$_invoke$arity$1((line * box_size)));

var G__31814 = (i__31812 + (1));
i__31812 = G__31814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31813),ttt$web$board$draw_vertical_lines_$_iter__31810.call(null,cljs.core.chunk_rest.call(null,s__31811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31813),null);
}
} else {
var line = cljs.core.first.call(null,s__31811__$2);
return cljs.core.cons.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1((line * box_size)),ttt$web$board$draw_vertical_lines_$_iter__31810.call(null,cljs.core.rest.call(null,s__31811__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(1),boxes));
})();
return cljs.core.map.call(null,(function (p1__31809_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),["vline@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31809_SHARP_)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"line",new cljs.core.Keyword(null,"x1","x1",-1863922247),p1__31809_SHARP_,new cljs.core.Keyword(null,"y1","y1",589123466),"0%",new cljs.core.Keyword(null,"x2","x2",-1362513475),p1__31809_SHARP_,new cljs.core.Keyword(null,"y2","y2",-718691301),"100%",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(94, 94, 99)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null));
}),constants);
});
ttt.web.board.draw_lines = (function ttt$web$board$draw_lines(board_specs){
var h_lines = ttt.web.board.draw_horizontal_lines.call(null,board_specs);
var v_lines = ttt.web.board.draw_vertical_lines.call(null,board_specs);
return (new cljs.core.List(null,h_lines,(new cljs.core.List(null,v_lines,null,(1),null)),(2),null));
});
ttt.web.board.play_turn = (function ttt$web$board$play_turn(game){
var box = new cljs.core.Keyword(null,"box-played","box-played",405285239).cljs$core$IFn$_invoke$arity$1(game);
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),ttt.master.game_master.update_board_with_move.call(null,game,box),new cljs.core.Keyword(null,"current-player","current-player",-970625153),ttt.master.game_master.next_player.call(null,game));
});
ttt.web.board.draw_boxes = (function ttt$web$board$draw_boxes(game_atom,board_specs){
var box_size = new cljs.core.Keyword(null,"box-size","box-size",1023444916).cljs$core$IFn$_invoke$arity$1(board_specs);
var boxes_per_row = new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449).cljs$core$IFn$_invoke$arity$1(board_specs);
var boxes = (function (){var iter__4529__auto__ = (function ttt$web$board$draw_boxes_$_iter__31815(s__31816){
return (new cljs.core.LazySeq(null,(function (){
var s__31816__$1 = s__31816;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__31816__$1);
if(temp__5735__auto__){
var s__31816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31816__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__31816__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__31818 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__31817 = (0);
while(true){
if((i__31817 < size__4528__auto__)){
var box = cljs.core._nth.call(null,c__4527__auto__,i__31817);
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * cljs.core.rem.call(null,box,boxes_per_row)));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * ((box / boxes_per_row) | (0))));
cljs.core.chunk_append.call(null,b__31818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,cljs.core.str.cljs$core$IFn$_invoke$arity$1(box),"rgba(100, 50, 255,0.75)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),((function (i__31817,x,y,box,c__4527__auto__,size__4528__auto__,b__31818,s__31816__$2,temp__5735__auto__,box_size,boxes_per_row){
return (function (){
if((!(ttt.master.game_master.ai_turn_QMARK_.call(null,cljs.core.deref.call(null,game_atom))))){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom)))) && (ttt.board.board.is_box_open_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom)),box)))){
var game = cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),box);
var game_with_human_play = ttt.web.board.play_turn.call(null,game);
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,game_with_human_play));
} else {
return null;
}
} else {
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,game_atom)));
}
});})(i__31817,x,y,box,c__4527__auto__,size__4528__auto__,b__31818,s__31816__$2,temp__5735__auto__,box_size,boxes_per_row))
,"60%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(box),x,cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size)])], null));

var G__31819 = (i__31817 + (1));
i__31817 = G__31819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31818),ttt$web$board$draw_boxes_$_iter__31815.call(null,cljs.core.chunk_rest.call(null,s__31816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31818),null);
}
} else {
var box = cljs.core.first.call(null,s__31816__$2);
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * cljs.core.rem.call(null,box,boxes_per_row)));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * ((box / boxes_per_row) | (0))));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[y,cljs.core.str.cljs$core$IFn$_invoke$arity$1(box),"rgba(100, 50, 255,0.75)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),((function (x,y,box,s__31816__$2,temp__5735__auto__,box_size,boxes_per_row){
return (function (){
if((!(ttt.master.game_master.ai_turn_QMARK_.call(null,cljs.core.deref.call(null,game_atom))))){
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom)))) && (ttt.board.board.is_box_open_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom)),box)))){
var game = cljs.core.swap_BANG_.call(null,game_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),box);
var game_with_human_play = ttt.web.board.play_turn.call(null,game);
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,game_with_human_play));
} else {
return null;
}
} else {
return cljs.core.swap_BANG_.call(null,game_atom,cljs.core.merge,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,game_atom)));
}
});})(x,y,box,s__31816__$2,temp__5735__auto__,box_size,boxes_per_row))
,"60%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(box),x,cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size)])], null),ttt$web$board$draw_boxes_$_iter__31815.call(null,cljs.core.rest.call(null,s__31816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),(boxes_per_row * boxes_per_row)));
})();
return boxes;
});
ttt.web.board.draw_board = (function ttt$web$board$draw_board(game_atom){
var board_size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game_atom));
var box_size = (cljs.core.deref.call(null,ttt.web.board.svg_size) / board_size);
var board_specs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-size","box-size",1023444916),box_size,new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),board_size], null);
var boxes = ttt.web.board.draw_boxes.call(null,game_atom,board_specs);
var lines = ttt.web.board.draw_lines.call(null,board_specs);
var pieces = ttt.web.board.draw_pieces.call(null,cljs.core.deref.call(null,game_atom),boxes);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"board"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"board",new cljs.core.Keyword(null,"id","id",-1388402092),"board"], null),boxes,lines,pieces], null)], null);
});
cljs.core._add_method.call(null,ttt.master.core.draw_state,new cljs.core.Keyword(null,"web","web",-654701153),(function (game){
return game;
}));

//# sourceMappingURL=board.js.map
