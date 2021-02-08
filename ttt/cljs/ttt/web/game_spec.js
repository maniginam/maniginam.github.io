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
var description__5972__auto___42995 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__42953_42996 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42954_42997 = description__5972__auto___42995;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42954_42997);

try{var seq__42955_42998 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__42977_43002 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42978_43003 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42978_43003);

try{var seq__42979_43004 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__42977_43002,_STAR_parent_description_STAR__temp_val__42978_43003,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___43008 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___43009 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___43008,actual__6058__auto___43009)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43008 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43008)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43009 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43009))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42977_43002,_STAR_parent_description_STAR__temp_val__42978_43003,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__42977_43002,_STAR_parent_description_STAR__temp_val__42978_43003,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___43010 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__6058__auto___43011 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___43010,actual__6058__auto___43011)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43010 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43010)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43011 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43011))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42977_43002,_STAR_parent_description_STAR__temp_val__42978_43003,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995))
)],null)));
var chunk__42980_43005 = null;
var count__42981_43006 = (0);
var i__42982_43007 = (0);
while(true){
if((i__42982_43007 < count__42981_43006)){
var component__5973__auto___43012 = cljs.core._nth.call(null,chunk__42980_43005,i__42982_43007);
speclj.components.install.call(null,component__5973__auto___43012,description__5972__auto____$1);


var G__43013 = seq__42979_43004;
var G__43014 = chunk__42980_43005;
var G__43015 = count__42981_43006;
var G__43016 = (i__42982_43007 + (1));
seq__42979_43004 = G__43013;
chunk__42980_43005 = G__43014;
count__42981_43006 = G__43015;
i__42982_43007 = G__43016;
continue;
} else {
var temp__5735__auto___43017 = cljs.core.seq.call(null,seq__42979_43004);
if(temp__5735__auto___43017){
var seq__42979_43018__$1 = temp__5735__auto___43017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42979_43018__$1)){
var c__4556__auto___43019 = cljs.core.chunk_first.call(null,seq__42979_43018__$1);
var G__43020 = cljs.core.chunk_rest.call(null,seq__42979_43018__$1);
var G__43021 = c__4556__auto___43019;
var G__43022 = cljs.core.count.call(null,c__4556__auto___43019);
var G__43023 = (0);
seq__42979_43004 = G__43020;
chunk__42980_43005 = G__43021;
count__42981_43006 = G__43022;
i__42982_43007 = G__43023;
continue;
} else {
var component__5973__auto___43024 = cljs.core.first.call(null,seq__42979_43018__$1);
speclj.components.install.call(null,component__5973__auto___43024,description__5972__auto____$1);


var G__43025 = cljs.core.next.call(null,seq__42979_43018__$1);
var G__43026 = null;
var G__43027 = (0);
var G__43028 = (0);
seq__42979_43004 = G__43025;
chunk__42980_43005 = G__43026;
count__42981_43006 = G__43027;
i__42982_43007 = G__43028;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42977_43002);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__42983_43029 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42984_43030 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42984_43030);

try{var seq__42985_43031 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__42983_43029,_STAR_parent_description_STAR__temp_val__42984_43030,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___43035 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___43036 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___43035,actual__6058__auto___43036)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43035 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43035)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43036 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43036))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42983_43029,_STAR_parent_description_STAR__temp_val__42984_43030,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995))
)],null)));
var chunk__42986_43032 = null;
var count__42987_43033 = (0);
var i__42988_43034 = (0);
while(true){
if((i__42988_43034 < count__42987_43033)){
var component__5973__auto___43037 = cljs.core._nth.call(null,chunk__42986_43032,i__42988_43034);
speclj.components.install.call(null,component__5973__auto___43037,description__5972__auto____$1);


var G__43038 = seq__42985_43031;
var G__43039 = chunk__42986_43032;
var G__43040 = count__42987_43033;
var G__43041 = (i__42988_43034 + (1));
seq__42985_43031 = G__43038;
chunk__42986_43032 = G__43039;
count__42987_43033 = G__43040;
i__42988_43034 = G__43041;
continue;
} else {
var temp__5735__auto___43042 = cljs.core.seq.call(null,seq__42985_43031);
if(temp__5735__auto___43042){
var seq__42985_43043__$1 = temp__5735__auto___43042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42985_43043__$1)){
var c__4556__auto___43044 = cljs.core.chunk_first.call(null,seq__42985_43043__$1);
var G__43045 = cljs.core.chunk_rest.call(null,seq__42985_43043__$1);
var G__43046 = c__4556__auto___43044;
var G__43047 = cljs.core.count.call(null,c__4556__auto___43044);
var G__43048 = (0);
seq__42985_43031 = G__43045;
chunk__42986_43032 = G__43046;
count__42987_43033 = G__43047;
i__42988_43034 = G__43048;
continue;
} else {
var component__5973__auto___43049 = cljs.core.first.call(null,seq__42985_43043__$1);
speclj.components.install.call(null,component__5973__auto___43049,description__5972__auto____$1);


var G__43050 = cljs.core.next.call(null,seq__42985_43043__$1);
var G__43051 = null;
var G__43052 = (0);
var G__43053 = (0);
seq__42985_43031 = G__43050;
chunk__42986_43032 = G__43051;
count__42987_43033 = G__43052;
i__42988_43034 = G__43053;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42983_43029);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__42989_43054 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42990_43055 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42990_43055);

try{var seq__42991_43056 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__42989_43054,_STAR_parent_description_STAR__temp_val__42990_43055,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__6057__auto___43060 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___43061 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___43060,actual__6058__auto___43061)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43060 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43060)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43061 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43061))," (using =)"].join('')));
}

var expected__6057__auto___43062 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__6058__auto___43063 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto___43062,actual__6058__auto___43063)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___43062 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___43062)),speclj.platform.endl,"     got: ",(((actual__6058__auto___43063 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___43063))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__6058__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42989_43054,_STAR_parent_description_STAR__temp_val__42990_43055,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42953_42996,_STAR_parent_description_STAR__temp_val__42954_42997,description__5972__auto___42995))
)],null)));
var chunk__42992_43057 = null;
var count__42993_43058 = (0);
var i__42994_43059 = (0);
while(true){
if((i__42994_43059 < count__42993_43058)){
var component__5973__auto___43064 = cljs.core._nth.call(null,chunk__42992_43057,i__42994_43059);
speclj.components.install.call(null,component__5973__auto___43064,description__5972__auto____$1);


var G__43065 = seq__42991_43056;
var G__43066 = chunk__42992_43057;
var G__43067 = count__42993_43058;
var G__43068 = (i__42994_43059 + (1));
seq__42991_43056 = G__43065;
chunk__42992_43057 = G__43066;
count__42993_43058 = G__43067;
i__42994_43059 = G__43068;
continue;
} else {
var temp__5735__auto___43069 = cljs.core.seq.call(null,seq__42991_43056);
if(temp__5735__auto___43069){
var seq__42991_43070__$1 = temp__5735__auto___43069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42991_43070__$1)){
var c__4556__auto___43071 = cljs.core.chunk_first.call(null,seq__42991_43070__$1);
var G__43072 = cljs.core.chunk_rest.call(null,seq__42991_43070__$1);
var G__43073 = c__4556__auto___43071;
var G__43074 = cljs.core.count.call(null,c__4556__auto___43071);
var G__43075 = (0);
seq__42991_43056 = G__43072;
chunk__42992_43057 = G__43073;
count__42993_43058 = G__43074;
i__42994_43059 = G__43075;
continue;
} else {
var component__5973__auto___43076 = cljs.core.first.call(null,seq__42991_43070__$1);
speclj.components.install.call(null,component__5973__auto___43076,description__5972__auto____$1);


var G__43077 = cljs.core.next.call(null,seq__42991_43070__$1);
var G__43078 = null;
var G__43079 = (0);
var G__43080 = (0);
seq__42991_43056 = G__43077;
chunk__42992_43057 = G__43078;
count__42993_43058 = G__43079;
i__42994_43059 = G__43080;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42989_43054);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__42956_42999 = null;
var count__42957_43000 = (0);
var i__42958_43001 = (0);
while(true){
if((i__42958_43001 < count__42957_43000)){
var component__5973__auto___43081 = cljs.core._nth.call(null,chunk__42956_42999,i__42958_43001);
speclj.components.install.call(null,component__5973__auto___43081,description__5972__auto___42995);


var G__43082 = seq__42955_42998;
var G__43083 = chunk__42956_42999;
var G__43084 = count__42957_43000;
var G__43085 = (i__42958_43001 + (1));
seq__42955_42998 = G__43082;
chunk__42956_42999 = G__43083;
count__42957_43000 = G__43084;
i__42958_43001 = G__43085;
continue;
} else {
var temp__5735__auto___43086 = cljs.core.seq.call(null,seq__42955_42998);
if(temp__5735__auto___43086){
var seq__42955_43087__$1 = temp__5735__auto___43086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42955_43087__$1)){
var c__4556__auto___43088 = cljs.core.chunk_first.call(null,seq__42955_43087__$1);
var G__43089 = cljs.core.chunk_rest.call(null,seq__42955_43087__$1);
var G__43090 = c__4556__auto___43088;
var G__43091 = cljs.core.count.call(null,c__4556__auto___43088);
var G__43092 = (0);
seq__42955_42998 = G__43089;
chunk__42956_42999 = G__43090;
count__42957_43000 = G__43091;
i__42958_43001 = G__43092;
continue;
} else {
var component__5973__auto___43093 = cljs.core.first.call(null,seq__42955_43087__$1);
speclj.components.install.call(null,component__5973__auto___43093,description__5972__auto___42995);


var G__43094 = cljs.core.next.call(null,seq__42955_43087__$1);
var G__43095 = null;
var G__43096 = (0);
var G__43097 = (0);
seq__42955_42998 = G__43094;
chunk__42956_42999 = G__43095;
count__42957_43000 = G__43096;
i__42958_43001 = G__43097;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42953_42996);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___42995);
}


//# sourceMappingURL=game_spec.js.map
