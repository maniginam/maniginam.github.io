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
var description__4695__auto___13066 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__13024_13067 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13025_13068 = description__4695__auto___13066;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13025_13068);

try{var seq__13026_13069 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__13048_13073 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13049_13074 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13049_13074);

try{var seq__13050_13075 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__13048_13073,_STAR_parent_description_STAR__temp_val__13049_13074,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___13079 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___13080 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___13079,actual__4781__auto___13080)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___13079 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___13079)),speclj.platform.endl,"     got: ",(((actual__4781__auto___13080 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___13080))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13048_13073,_STAR_parent_description_STAR__temp_val__13049_13074,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__13048_13073,_STAR_parent_description_STAR__temp_val__13049_13074,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___13081 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__4781__auto___13082 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___13081,actual__4781__auto___13082)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___13081 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___13081)),speclj.platform.endl,"     got: ",(((actual__4781__auto___13082 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___13082))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13048_13073,_STAR_parent_description_STAR__temp_val__13049_13074,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066))
)],null)));
var chunk__13051_13076 = null;
var count__13052_13077 = (0);
var i__13053_13078 = (0);
while(true){
if((i__13053_13078 < count__13052_13077)){
var component__4696__auto___13083 = cljs.core._nth.call(null,chunk__13051_13076,i__13053_13078);
speclj.components.install.call(null,component__4696__auto___13083,description__4695__auto____$1);


var G__13084 = seq__13050_13075;
var G__13085 = chunk__13051_13076;
var G__13086 = count__13052_13077;
var G__13087 = (i__13053_13078 + (1));
seq__13050_13075 = G__13084;
chunk__13051_13076 = G__13085;
count__13052_13077 = G__13086;
i__13053_13078 = G__13087;
continue;
} else {
var temp__5735__auto___13088 = cljs.core.seq.call(null,seq__13050_13075);
if(temp__5735__auto___13088){
var seq__13050_13089__$1 = temp__5735__auto___13088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13050_13089__$1)){
var c__4556__auto___13090 = cljs.core.chunk_first.call(null,seq__13050_13089__$1);
var G__13091 = cljs.core.chunk_rest.call(null,seq__13050_13089__$1);
var G__13092 = c__4556__auto___13090;
var G__13093 = cljs.core.count.call(null,c__4556__auto___13090);
var G__13094 = (0);
seq__13050_13075 = G__13091;
chunk__13051_13076 = G__13092;
count__13052_13077 = G__13093;
i__13053_13078 = G__13094;
continue;
} else {
var component__4696__auto___13095 = cljs.core.first.call(null,seq__13050_13089__$1);
speclj.components.install.call(null,component__4696__auto___13095,description__4695__auto____$1);


var G__13096 = cljs.core.next.call(null,seq__13050_13089__$1);
var G__13097 = null;
var G__13098 = (0);
var G__13099 = (0);
seq__13050_13075 = G__13096;
chunk__13051_13076 = G__13097;
count__13052_13077 = G__13098;
i__13053_13078 = G__13099;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13048_13073);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__13054_13100 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13055_13101 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13055_13101);

try{var seq__13056_13102 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__13054_13100,_STAR_parent_description_STAR__temp_val__13055_13101,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___13106 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___13107 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___13106,actual__4781__auto___13107)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___13106 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___13106)),speclj.platform.endl,"     got: ",(((actual__4781__auto___13107 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___13107))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13054_13100,_STAR_parent_description_STAR__temp_val__13055_13101,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066))
)],null)));
var chunk__13057_13103 = null;
var count__13058_13104 = (0);
var i__13059_13105 = (0);
while(true){
if((i__13059_13105 < count__13058_13104)){
var component__4696__auto___13108 = cljs.core._nth.call(null,chunk__13057_13103,i__13059_13105);
speclj.components.install.call(null,component__4696__auto___13108,description__4695__auto____$1);


var G__13109 = seq__13056_13102;
var G__13110 = chunk__13057_13103;
var G__13111 = count__13058_13104;
var G__13112 = (i__13059_13105 + (1));
seq__13056_13102 = G__13109;
chunk__13057_13103 = G__13110;
count__13058_13104 = G__13111;
i__13059_13105 = G__13112;
continue;
} else {
var temp__5735__auto___13113 = cljs.core.seq.call(null,seq__13056_13102);
if(temp__5735__auto___13113){
var seq__13056_13114__$1 = temp__5735__auto___13113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13056_13114__$1)){
var c__4556__auto___13115 = cljs.core.chunk_first.call(null,seq__13056_13114__$1);
var G__13116 = cljs.core.chunk_rest.call(null,seq__13056_13114__$1);
var G__13117 = c__4556__auto___13115;
var G__13118 = cljs.core.count.call(null,c__4556__auto___13115);
var G__13119 = (0);
seq__13056_13102 = G__13116;
chunk__13057_13103 = G__13117;
count__13058_13104 = G__13118;
i__13059_13105 = G__13119;
continue;
} else {
var component__4696__auto___13120 = cljs.core.first.call(null,seq__13056_13114__$1);
speclj.components.install.call(null,component__4696__auto___13120,description__4695__auto____$1);


var G__13121 = cljs.core.next.call(null,seq__13056_13114__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__13056_13102 = G__13121;
chunk__13057_13103 = G__13122;
count__13058_13104 = G__13123;
i__13059_13105 = G__13124;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13054_13100);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__13060_13125 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__13061_13126 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__13061_13126);

try{var seq__13062_13127 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__13060_13125,_STAR_parent_description_STAR__temp_val__13061_13126,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___13131 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___13132 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___13131,actual__4781__auto___13132)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___13131 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___13131)),speclj.platform.endl,"     got: ",(((actual__4781__auto___13132 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___13132))," (using =)"].join('')));
}

var expected__4780__auto___13133 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__4781__auto___13134 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___13133,actual__4781__auto___13134)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___13133 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___13133)),speclj.platform.endl,"     got: ",(((actual__4781__auto___13134 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___13134))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__13060_13125,_STAR_parent_description_STAR__temp_val__13061_13126,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__13024_13067,_STAR_parent_description_STAR__temp_val__13025_13068,description__4695__auto___13066))
)],null)));
var chunk__13063_13128 = null;
var count__13064_13129 = (0);
var i__13065_13130 = (0);
while(true){
if((i__13065_13130 < count__13064_13129)){
var component__4696__auto___13135 = cljs.core._nth.call(null,chunk__13063_13128,i__13065_13130);
speclj.components.install.call(null,component__4696__auto___13135,description__4695__auto____$1);


var G__13136 = seq__13062_13127;
var G__13137 = chunk__13063_13128;
var G__13138 = count__13064_13129;
var G__13139 = (i__13065_13130 + (1));
seq__13062_13127 = G__13136;
chunk__13063_13128 = G__13137;
count__13064_13129 = G__13138;
i__13065_13130 = G__13139;
continue;
} else {
var temp__5735__auto___13140 = cljs.core.seq.call(null,seq__13062_13127);
if(temp__5735__auto___13140){
var seq__13062_13141__$1 = temp__5735__auto___13140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13062_13141__$1)){
var c__4556__auto___13142 = cljs.core.chunk_first.call(null,seq__13062_13141__$1);
var G__13143 = cljs.core.chunk_rest.call(null,seq__13062_13141__$1);
var G__13144 = c__4556__auto___13142;
var G__13145 = cljs.core.count.call(null,c__4556__auto___13142);
var G__13146 = (0);
seq__13062_13127 = G__13143;
chunk__13063_13128 = G__13144;
count__13064_13129 = G__13145;
i__13065_13130 = G__13146;
continue;
} else {
var component__4696__auto___13147 = cljs.core.first.call(null,seq__13062_13141__$1);
speclj.components.install.call(null,component__4696__auto___13147,description__4695__auto____$1);


var G__13148 = cljs.core.next.call(null,seq__13062_13141__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__13062_13127 = G__13148;
chunk__13063_13128 = G__13149;
count__13064_13129 = G__13150;
i__13065_13130 = G__13151;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13060_13125);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__13027_13070 = null;
var count__13028_13071 = (0);
var i__13029_13072 = (0);
while(true){
if((i__13029_13072 < count__13028_13071)){
var component__4696__auto___13152 = cljs.core._nth.call(null,chunk__13027_13070,i__13029_13072);
speclj.components.install.call(null,component__4696__auto___13152,description__4695__auto___13066);


var G__13153 = seq__13026_13069;
var G__13154 = chunk__13027_13070;
var G__13155 = count__13028_13071;
var G__13156 = (i__13029_13072 + (1));
seq__13026_13069 = G__13153;
chunk__13027_13070 = G__13154;
count__13028_13071 = G__13155;
i__13029_13072 = G__13156;
continue;
} else {
var temp__5735__auto___13157 = cljs.core.seq.call(null,seq__13026_13069);
if(temp__5735__auto___13157){
var seq__13026_13158__$1 = temp__5735__auto___13157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13026_13158__$1)){
var c__4556__auto___13159 = cljs.core.chunk_first.call(null,seq__13026_13158__$1);
var G__13160 = cljs.core.chunk_rest.call(null,seq__13026_13158__$1);
var G__13161 = c__4556__auto___13159;
var G__13162 = cljs.core.count.call(null,c__4556__auto___13159);
var G__13163 = (0);
seq__13026_13069 = G__13160;
chunk__13027_13070 = G__13161;
count__13028_13071 = G__13162;
i__13029_13072 = G__13163;
continue;
} else {
var component__4696__auto___13164 = cljs.core.first.call(null,seq__13026_13158__$1);
speclj.components.install.call(null,component__4696__auto___13164,description__4695__auto___13066);


var G__13165 = cljs.core.next.call(null,seq__13026_13158__$1);
var G__13166 = null;
var G__13167 = (0);
var G__13168 = (0);
seq__13026_13069 = G__13165;
chunk__13027_13070 = G__13166;
count__13028_13071 = G__13167;
i__13029_13072 = G__13168;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__13024_13067);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___13066);
}


//# sourceMappingURL=game_spec.js.map
