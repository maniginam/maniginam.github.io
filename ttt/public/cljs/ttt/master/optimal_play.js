// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.master.optimal_play');
goog.require('cljs.core');
goog.require('ttt.board.board');
ttt.master.optimal_play.get_score = (function ttt$master$optimal_play$get_score(winner,depth){
if(cljs.core._EQ_.call(null,winner,(1))){
return ((10) - depth);
} else {
if(cljs.core._EQ_.call(null,winner,(2))){
return (depth - (10));
} else {
return (0);

}
}
});
ttt.master.optimal_play.get_next_player = (function ttt$master$optimal_play$get_next_player(player){
if(cljs.core._EQ_.call(null,player,(1))){
return (2);
} else {
return (1);
}
});
ttt.master.optimal_play.get_player_piece = (function ttt$master$optimal_play$get_player_piece(player){
if(cljs.core._EQ_.call(null,player,(1))){
return "X";
} else {
return "O";
}
});
ttt.master.optimal_play.get_box_scores = (function ttt$master$optimal_play$get_box_scores(board,player_num,depth){
var iter__4529__auto__ = (function ttt$master$optimal_play$get_box_scores_$_iter__13010(s__13011){
return (new cljs.core.LazySeq(null,(function (){
var s__13011__$1 = s__13011;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__13011__$1);
if(temp__5735__auto__){
var s__13011__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13011__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__13011__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__13013 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__13012 = (0);
while(true){
if((i__13012 < size__4528__auto__)){
var box = cljs.core._nth.call(null,c__4527__auto__,i__13012);
cljs.core.chunk_append.call(null,b__13013,(function (){var piece = ttt.master.optimal_play.get_player_piece.call(null,player_num);
var test_board = cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([box,piece]),board);
var box_score = ((ttt.board.board.is_win_QMARK_.call(null,test_board))?ttt.master.optimal_play.get_score.call(null,player_num,depth):((ttt.board.board.full_board_QMARK_.call(null,test_board))?ttt.master.optimal_play.get_score.call(null,(0),depth):(((((cljs.core.count.call(null,board) <= (9))) && ((depth >= (5)))))?ttt.master.optimal_play.get_score.call(null,(0),depth):(((((cljs.core.count.call(null,board) > (9))) && ((depth > (3)))))?ttt.master.optimal_play.get_score.call(null,(0),depth):((cljs.core._EQ_.call(null,player_num,(1)))?cljs.core.apply.call(null,cljs.core.min,ttt.master.optimal_play.get_box_scores.call(null,test_board,ttt.master.optimal_play.get_next_player.call(null,player_num),(depth + (1)))):cljs.core.apply.call(null,cljs.core.max,ttt.master.optimal_play.get_box_scores.call(null,test_board,ttt.master.optimal_play.get_next_player.call(null,player_num),(depth + (1)))))
))));
return box_score;
})());

var G__13014 = (i__13012 + (1));
i__13012 = G__13014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13013),ttt$master$optimal_play$get_box_scores_$_iter__13010.call(null,cljs.core.chunk_rest.call(null,s__13011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13013),null);
}
} else {
var box = cljs.core.first.call(null,s__13011__$2);
return cljs.core.cons.call(null,(function (){var piece = ttt.master.optimal_play.get_player_piece.call(null,player_num);
var test_board = cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([box,piece]),board);
var box_score = ((ttt.board.board.is_win_QMARK_.call(null,test_board))?ttt.master.optimal_play.get_score.call(null,player_num,depth):((ttt.board.board.full_board_QMARK_.call(null,test_board))?ttt.master.optimal_play.get_score.call(null,(0),depth):(((((cljs.core.count.call(null,board) <= (9))) && ((depth >= (5)))))?ttt.master.optimal_play.get_score.call(null,(0),depth):(((((cljs.core.count.call(null,board) > (9))) && ((depth > (3)))))?ttt.master.optimal_play.get_score.call(null,(0),depth):((cljs.core._EQ_.call(null,player_num,(1)))?cljs.core.apply.call(null,cljs.core.min,ttt.master.optimal_play.get_box_scores.call(null,test_board,ttt.master.optimal_play.get_next_player.call(null,player_num),(depth + (1)))):cljs.core.apply.call(null,cljs.core.max,ttt.master.optimal_play.get_box_scores.call(null,test_board,ttt.master.optimal_play.get_next_player.call(null,player_num),(depth + (1)))))
))));
return box_score;
})(),ttt$master$optimal_play$get_box_scores_$_iter__13010.call(null,cljs.core.rest.call(null,s__13011__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,ttt.board.board.open_boxes.call(null,board));
});
ttt.master.optimal_play.play_optimal_box = (function ttt$master$optimal_play$play_optimal_box(board,player_num,depth){
if(ttt.board.board.empty_board_QMARK_.call(null,board)){
var box_count = cljs.core.count.call(null,board);
var row_size = (Math.sqrt(box_count) | (0));
var corners = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(row_size - (1)),(box_count - row_size),(box_count - (1))], null);
var box = cljs.core.nth.call(null,corners,cljs.core.rand_int.call(null,(4)));
return box;
} else {
var box_scores = ttt.master.optimal_play.get_box_scores.call(null,board,player_num,depth);
var open_boxes = ttt.board.board.open_boxes.call(null,board);
var same_QMARK_ = cljs.core.every_QMARK_.call(null,(function (p1__13015_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,box_scores),p1__13015_SHARP_);
}),cljs.core.rest.call(null,box_scores));
var min = cljs.core.apply.call(null,cljs.core.min,box_scores);
var max = cljs.core.apply.call(null,cljs.core.max,box_scores);
var box = ((same_QMARK_)?cljs.core.nth.call(null,open_boxes,cljs.core.rand_int.call(null,cljs.core.count.call(null,open_boxes))):(function (){var index = (0);
while(true){
if(cljs.core._EQ_.call(null,player_num,(1))){
if(cljs.core._EQ_.call(null,max,cljs.core.nth.call(null,box_scores,index))){
return cljs.core.nth.call(null,open_boxes,index);
} else {
var G__13016 = (index + (1));
index = G__13016;
continue;
}
} else {
if(cljs.core._EQ_.call(null,min,cljs.core.nth.call(null,box_scores,index))){
return cljs.core.nth.call(null,open_boxes,index);
} else {
var G__13017 = (index + (1));
index = G__13017;
continue;
}
}
break;
}
})());
return box;

}
});

//# sourceMappingURL=optimal_play.js.map
