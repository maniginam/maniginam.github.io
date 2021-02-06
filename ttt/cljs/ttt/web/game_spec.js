// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.game_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.game_master');
goog.require('ttt.persistence.mock_db');
goog.require('ttt.master.core');
goog.require('ttt.web.board');
ttt.web.game_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
var description__4695__auto___16935 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__16893_16936 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16894_16937 = description__4695__auto___16935;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16894_16937);

try{var seq__16895_16938 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__16917_16942 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16918_16943 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16918_16943);

try{var seq__16919_16944 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__16917_16942,_STAR_parent_description_STAR__temp_val__16918_16943,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___16948 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___16949 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___16948,actual__4781__auto___16949)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16948 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16948)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16949 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16949))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16917_16942,_STAR_parent_description_STAR__temp_val__16918_16943,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__16917_16942,_STAR_parent_description_STAR__temp_val__16918_16943,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___16950 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__4781__auto___16951 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___16950,actual__4781__auto___16951)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16950 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16950)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16951 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16951))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16917_16942,_STAR_parent_description_STAR__temp_val__16918_16943,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935))
)],null)));
var chunk__16920_16945 = null;
var count__16921_16946 = (0);
var i__16922_16947 = (0);
while(true){
if((i__16922_16947 < count__16921_16946)){
var component__4696__auto___16952 = cljs.core._nth.call(null,chunk__16920_16945,i__16922_16947);
speclj.components.install.call(null,component__4696__auto___16952,description__4695__auto____$1);


var G__16953 = seq__16919_16944;
var G__16954 = chunk__16920_16945;
var G__16955 = count__16921_16946;
var G__16956 = (i__16922_16947 + (1));
seq__16919_16944 = G__16953;
chunk__16920_16945 = G__16954;
count__16921_16946 = G__16955;
i__16922_16947 = G__16956;
continue;
} else {
var temp__5735__auto___16957 = cljs.core.seq.call(null,seq__16919_16944);
if(temp__5735__auto___16957){
var seq__16919_16958__$1 = temp__5735__auto___16957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16919_16958__$1)){
var c__4556__auto___16959 = cljs.core.chunk_first.call(null,seq__16919_16958__$1);
var G__16960 = cljs.core.chunk_rest.call(null,seq__16919_16958__$1);
var G__16961 = c__4556__auto___16959;
var G__16962 = cljs.core.count.call(null,c__4556__auto___16959);
var G__16963 = (0);
seq__16919_16944 = G__16960;
chunk__16920_16945 = G__16961;
count__16921_16946 = G__16962;
i__16922_16947 = G__16963;
continue;
} else {
var component__4696__auto___16964 = cljs.core.first.call(null,seq__16919_16958__$1);
speclj.components.install.call(null,component__4696__auto___16964,description__4695__auto____$1);


var G__16965 = cljs.core.next.call(null,seq__16919_16958__$1);
var G__16966 = null;
var G__16967 = (0);
var G__16968 = (0);
seq__16919_16944 = G__16965;
chunk__16920_16945 = G__16966;
count__16921_16946 = G__16967;
i__16922_16947 = G__16968;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16917_16942);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__16923_16969 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16924_16970 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16924_16970);

try{var seq__16925_16971 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__16923_16969,_STAR_parent_description_STAR__temp_val__16924_16970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___16975 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___16976 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___16975,actual__4781__auto___16976)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16975 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16975)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16976 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16976))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16923_16969,_STAR_parent_description_STAR__temp_val__16924_16970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935))
)],null)));
var chunk__16926_16972 = null;
var count__16927_16973 = (0);
var i__16928_16974 = (0);
while(true){
if((i__16928_16974 < count__16927_16973)){
var component__4696__auto___16977 = cljs.core._nth.call(null,chunk__16926_16972,i__16928_16974);
speclj.components.install.call(null,component__4696__auto___16977,description__4695__auto____$1);


var G__16978 = seq__16925_16971;
var G__16979 = chunk__16926_16972;
var G__16980 = count__16927_16973;
var G__16981 = (i__16928_16974 + (1));
seq__16925_16971 = G__16978;
chunk__16926_16972 = G__16979;
count__16927_16973 = G__16980;
i__16928_16974 = G__16981;
continue;
} else {
var temp__5735__auto___16982 = cljs.core.seq.call(null,seq__16925_16971);
if(temp__5735__auto___16982){
var seq__16925_16983__$1 = temp__5735__auto___16982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16925_16983__$1)){
var c__4556__auto___16984 = cljs.core.chunk_first.call(null,seq__16925_16983__$1);
var G__16985 = cljs.core.chunk_rest.call(null,seq__16925_16983__$1);
var G__16986 = c__4556__auto___16984;
var G__16987 = cljs.core.count.call(null,c__4556__auto___16984);
var G__16988 = (0);
seq__16925_16971 = G__16985;
chunk__16926_16972 = G__16986;
count__16927_16973 = G__16987;
i__16928_16974 = G__16988;
continue;
} else {
var component__4696__auto___16989 = cljs.core.first.call(null,seq__16925_16983__$1);
speclj.components.install.call(null,component__4696__auto___16989,description__4695__auto____$1);


var G__16990 = cljs.core.next.call(null,seq__16925_16983__$1);
var G__16991 = null;
var G__16992 = (0);
var G__16993 = (0);
seq__16925_16971 = G__16990;
chunk__16926_16972 = G__16991;
count__16927_16973 = G__16992;
i__16928_16974 = G__16993;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16923_16969);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__16929_16994 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16930_16995 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16930_16995);

try{var seq__16931_16996 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__16929_16994,_STAR_parent_description_STAR__temp_val__16930_16995,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___17000 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___17001 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___17000,actual__4781__auto___17001)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___17000 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___17000)),speclj.platform.endl,"     got: ",(((actual__4781__auto___17001 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___17001))," (using =)"].join('')));
}

var expected__4780__auto___17002 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__4781__auto___17003 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___17002,actual__4781__auto___17003)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___17002 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___17002)),speclj.platform.endl,"     got: ",(((actual__4781__auto___17003 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___17003))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16929_16994,_STAR_parent_description_STAR__temp_val__16930_16995,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16893_16936,_STAR_parent_description_STAR__temp_val__16894_16937,description__4695__auto___16935))
)],null)));
var chunk__16932_16997 = null;
var count__16933_16998 = (0);
var i__16934_16999 = (0);
while(true){
if((i__16934_16999 < count__16933_16998)){
var component__4696__auto___17004 = cljs.core._nth.call(null,chunk__16932_16997,i__16934_16999);
speclj.components.install.call(null,component__4696__auto___17004,description__4695__auto____$1);


var G__17005 = seq__16931_16996;
var G__17006 = chunk__16932_16997;
var G__17007 = count__16933_16998;
var G__17008 = (i__16934_16999 + (1));
seq__16931_16996 = G__17005;
chunk__16932_16997 = G__17006;
count__16933_16998 = G__17007;
i__16934_16999 = G__17008;
continue;
} else {
var temp__5735__auto___17009 = cljs.core.seq.call(null,seq__16931_16996);
if(temp__5735__auto___17009){
var seq__16931_17010__$1 = temp__5735__auto___17009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16931_17010__$1)){
var c__4556__auto___17011 = cljs.core.chunk_first.call(null,seq__16931_17010__$1);
var G__17012 = cljs.core.chunk_rest.call(null,seq__16931_17010__$1);
var G__17013 = c__4556__auto___17011;
var G__17014 = cljs.core.count.call(null,c__4556__auto___17011);
var G__17015 = (0);
seq__16931_16996 = G__17012;
chunk__16932_16997 = G__17013;
count__16933_16998 = G__17014;
i__16934_16999 = G__17015;
continue;
} else {
var component__4696__auto___17016 = cljs.core.first.call(null,seq__16931_17010__$1);
speclj.components.install.call(null,component__4696__auto___17016,description__4695__auto____$1);


var G__17017 = cljs.core.next.call(null,seq__16931_17010__$1);
var G__17018 = null;
var G__17019 = (0);
var G__17020 = (0);
seq__16931_16996 = G__17017;
chunk__16932_16997 = G__17018;
count__16933_16998 = G__17019;
i__16934_16999 = G__17020;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16929_16994);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__16896_16939 = null;
var count__16897_16940 = (0);
var i__16898_16941 = (0);
while(true){
if((i__16898_16941 < count__16897_16940)){
var component__4696__auto___17021 = cljs.core._nth.call(null,chunk__16896_16939,i__16898_16941);
speclj.components.install.call(null,component__4696__auto___17021,description__4695__auto___16935);


var G__17022 = seq__16895_16938;
var G__17023 = chunk__16896_16939;
var G__17024 = count__16897_16940;
var G__17025 = (i__16898_16941 + (1));
seq__16895_16938 = G__17022;
chunk__16896_16939 = G__17023;
count__16897_16940 = G__17024;
i__16898_16941 = G__17025;
continue;
} else {
var temp__5735__auto___17026 = cljs.core.seq.call(null,seq__16895_16938);
if(temp__5735__auto___17026){
var seq__16895_17027__$1 = temp__5735__auto___17026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16895_17027__$1)){
var c__4556__auto___17028 = cljs.core.chunk_first.call(null,seq__16895_17027__$1);
var G__17029 = cljs.core.chunk_rest.call(null,seq__16895_17027__$1);
var G__17030 = c__4556__auto___17028;
var G__17031 = cljs.core.count.call(null,c__4556__auto___17028);
var G__17032 = (0);
seq__16895_16938 = G__17029;
chunk__16896_16939 = G__17030;
count__16897_16940 = G__17031;
i__16898_16941 = G__17032;
continue;
} else {
var component__4696__auto___17033 = cljs.core.first.call(null,seq__16895_17027__$1);
speclj.components.install.call(null,component__4696__auto___17033,description__4695__auto___16935);


var G__17034 = cljs.core.next.call(null,seq__16895_17027__$1);
var G__17035 = null;
var G__17036 = (0);
var G__17037 = (0);
seq__16895_16938 = G__17034;
chunk__16896_16939 = G__17035;
count__16897_16940 = G__17036;
i__16898_16941 = G__17037;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16893_16936);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___16935);
}


//# sourceMappingURL=game_spec.js.map
