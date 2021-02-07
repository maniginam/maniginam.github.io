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
var description__4695__auto___33131 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__33089_33132 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__33090_33133 = description__4695__auto___33131;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__33090_33133);

try{var seq__33091_33134 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__33113_33138 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__33114_33139 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__33114_33139);

try{var seq__33115_33140 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__33113_33138,_STAR_parent_description_STAR__temp_val__33114_33139,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___33144 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___33145 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___33144,actual__4781__auto___33145)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33144 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33144)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33145 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33145))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__33113_33138,_STAR_parent_description_STAR__temp_val__33114_33139,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__33113_33138,_STAR_parent_description_STAR__temp_val__33114_33139,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___33146 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__4781__auto___33147 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___33146,actual__4781__auto___33147)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33146 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33146)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33147 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33147))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__33113_33138,_STAR_parent_description_STAR__temp_val__33114_33139,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131))
)],null)));
var chunk__33116_33141 = null;
var count__33117_33142 = (0);
var i__33118_33143 = (0);
while(true){
if((i__33118_33143 < count__33117_33142)){
var component__4696__auto___33148 = cljs.core._nth.call(null,chunk__33116_33141,i__33118_33143);
speclj.components.install.call(null,component__4696__auto___33148,description__4695__auto____$1);


var G__33149 = seq__33115_33140;
var G__33150 = chunk__33116_33141;
var G__33151 = count__33117_33142;
var G__33152 = (i__33118_33143 + (1));
seq__33115_33140 = G__33149;
chunk__33116_33141 = G__33150;
count__33117_33142 = G__33151;
i__33118_33143 = G__33152;
continue;
} else {
var temp__5735__auto___33153 = cljs.core.seq.call(null,seq__33115_33140);
if(temp__5735__auto___33153){
var seq__33115_33154__$1 = temp__5735__auto___33153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33115_33154__$1)){
var c__4556__auto___33155 = cljs.core.chunk_first.call(null,seq__33115_33154__$1);
var G__33156 = cljs.core.chunk_rest.call(null,seq__33115_33154__$1);
var G__33157 = c__4556__auto___33155;
var G__33158 = cljs.core.count.call(null,c__4556__auto___33155);
var G__33159 = (0);
seq__33115_33140 = G__33156;
chunk__33116_33141 = G__33157;
count__33117_33142 = G__33158;
i__33118_33143 = G__33159;
continue;
} else {
var component__4696__auto___33160 = cljs.core.first.call(null,seq__33115_33154__$1);
speclj.components.install.call(null,component__4696__auto___33160,description__4695__auto____$1);


var G__33161 = cljs.core.next.call(null,seq__33115_33154__$1);
var G__33162 = null;
var G__33163 = (0);
var G__33164 = (0);
seq__33115_33140 = G__33161;
chunk__33116_33141 = G__33162;
count__33117_33142 = G__33163;
i__33118_33143 = G__33164;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__33113_33138);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__33119_33165 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__33120_33166 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__33120_33166);

try{var seq__33121_33167 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__33119_33165,_STAR_parent_description_STAR__temp_val__33120_33166,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___33171 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___33172 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___33171,actual__4781__auto___33172)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33171 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33171)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33172 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33172))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__33119_33165,_STAR_parent_description_STAR__temp_val__33120_33166,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131))
)],null)));
var chunk__33122_33168 = null;
var count__33123_33169 = (0);
var i__33124_33170 = (0);
while(true){
if((i__33124_33170 < count__33123_33169)){
var component__4696__auto___33173 = cljs.core._nth.call(null,chunk__33122_33168,i__33124_33170);
speclj.components.install.call(null,component__4696__auto___33173,description__4695__auto____$1);


var G__33174 = seq__33121_33167;
var G__33175 = chunk__33122_33168;
var G__33176 = count__33123_33169;
var G__33177 = (i__33124_33170 + (1));
seq__33121_33167 = G__33174;
chunk__33122_33168 = G__33175;
count__33123_33169 = G__33176;
i__33124_33170 = G__33177;
continue;
} else {
var temp__5735__auto___33178 = cljs.core.seq.call(null,seq__33121_33167);
if(temp__5735__auto___33178){
var seq__33121_33179__$1 = temp__5735__auto___33178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33121_33179__$1)){
var c__4556__auto___33180 = cljs.core.chunk_first.call(null,seq__33121_33179__$1);
var G__33181 = cljs.core.chunk_rest.call(null,seq__33121_33179__$1);
var G__33182 = c__4556__auto___33180;
var G__33183 = cljs.core.count.call(null,c__4556__auto___33180);
var G__33184 = (0);
seq__33121_33167 = G__33181;
chunk__33122_33168 = G__33182;
count__33123_33169 = G__33183;
i__33124_33170 = G__33184;
continue;
} else {
var component__4696__auto___33185 = cljs.core.first.call(null,seq__33121_33179__$1);
speclj.components.install.call(null,component__4696__auto___33185,description__4695__auto____$1);


var G__33186 = cljs.core.next.call(null,seq__33121_33179__$1);
var G__33187 = null;
var G__33188 = (0);
var G__33189 = (0);
seq__33121_33167 = G__33186;
chunk__33122_33168 = G__33187;
count__33123_33169 = G__33188;
i__33124_33170 = G__33189;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__33119_33165);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__33125_33190 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__33126_33191 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__33126_33191);

try{var seq__33127_33192 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__33125_33190,_STAR_parent_description_STAR__temp_val__33126_33191,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___33196 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___33197 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___33196,actual__4781__auto___33197)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33196 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33196)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33197 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33197))," (using =)"].join('')));
}

var expected__4780__auto___33198 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__4781__auto___33199 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___33198,actual__4781__auto___33199)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33198 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33198)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33199 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33199))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__33125_33190,_STAR_parent_description_STAR__temp_val__33126_33191,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__33089_33132,_STAR_parent_description_STAR__temp_val__33090_33133,description__4695__auto___33131))
)],null)));
var chunk__33128_33193 = null;
var count__33129_33194 = (0);
var i__33130_33195 = (0);
while(true){
if((i__33130_33195 < count__33129_33194)){
var component__4696__auto___33200 = cljs.core._nth.call(null,chunk__33128_33193,i__33130_33195);
speclj.components.install.call(null,component__4696__auto___33200,description__4695__auto____$1);


var G__33201 = seq__33127_33192;
var G__33202 = chunk__33128_33193;
var G__33203 = count__33129_33194;
var G__33204 = (i__33130_33195 + (1));
seq__33127_33192 = G__33201;
chunk__33128_33193 = G__33202;
count__33129_33194 = G__33203;
i__33130_33195 = G__33204;
continue;
} else {
var temp__5735__auto___33205 = cljs.core.seq.call(null,seq__33127_33192);
if(temp__5735__auto___33205){
var seq__33127_33206__$1 = temp__5735__auto___33205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33127_33206__$1)){
var c__4556__auto___33207 = cljs.core.chunk_first.call(null,seq__33127_33206__$1);
var G__33208 = cljs.core.chunk_rest.call(null,seq__33127_33206__$1);
var G__33209 = c__4556__auto___33207;
var G__33210 = cljs.core.count.call(null,c__4556__auto___33207);
var G__33211 = (0);
seq__33127_33192 = G__33208;
chunk__33128_33193 = G__33209;
count__33129_33194 = G__33210;
i__33130_33195 = G__33211;
continue;
} else {
var component__4696__auto___33212 = cljs.core.first.call(null,seq__33127_33206__$1);
speclj.components.install.call(null,component__4696__auto___33212,description__4695__auto____$1);


var G__33213 = cljs.core.next.call(null,seq__33127_33206__$1);
var G__33214 = null;
var G__33215 = (0);
var G__33216 = (0);
seq__33127_33192 = G__33213;
chunk__33128_33193 = G__33214;
count__33129_33194 = G__33215;
i__33130_33195 = G__33216;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__33125_33190);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__33092_33135 = null;
var count__33093_33136 = (0);
var i__33094_33137 = (0);
while(true){
if((i__33094_33137 < count__33093_33136)){
var component__4696__auto___33217 = cljs.core._nth.call(null,chunk__33092_33135,i__33094_33137);
speclj.components.install.call(null,component__4696__auto___33217,description__4695__auto___33131);


var G__33218 = seq__33091_33134;
var G__33219 = chunk__33092_33135;
var G__33220 = count__33093_33136;
var G__33221 = (i__33094_33137 + (1));
seq__33091_33134 = G__33218;
chunk__33092_33135 = G__33219;
count__33093_33136 = G__33220;
i__33094_33137 = G__33221;
continue;
} else {
var temp__5735__auto___33222 = cljs.core.seq.call(null,seq__33091_33134);
if(temp__5735__auto___33222){
var seq__33091_33223__$1 = temp__5735__auto___33222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33091_33223__$1)){
var c__4556__auto___33224 = cljs.core.chunk_first.call(null,seq__33091_33223__$1);
var G__33225 = cljs.core.chunk_rest.call(null,seq__33091_33223__$1);
var G__33226 = c__4556__auto___33224;
var G__33227 = cljs.core.count.call(null,c__4556__auto___33224);
var G__33228 = (0);
seq__33091_33134 = G__33225;
chunk__33092_33135 = G__33226;
count__33093_33136 = G__33227;
i__33094_33137 = G__33228;
continue;
} else {
var component__4696__auto___33229 = cljs.core.first.call(null,seq__33091_33223__$1);
speclj.components.install.call(null,component__4696__auto___33229,description__4695__auto___33131);


var G__33230 = cljs.core.next.call(null,seq__33091_33223__$1);
var G__33231 = null;
var G__33232 = (0);
var G__33233 = (0);
seq__33091_33134 = G__33230;
chunk__33092_33135 = G__33231;
count__33093_33136 = G__33232;
i__33094_33137 = G__33233;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__33089_33132);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___33131);
}


//# sourceMappingURL=game_spec.js.map
