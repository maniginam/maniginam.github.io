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
var description__4695__auto___83905 = speclj.components.new_description.call(null,"Play Game - ","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__83863_83906 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83864_83907 = description__4695__auto___83905;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83864_83907);

try{var seq__83865_83908 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"human v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__83887_83912 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83888_83913 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83888_83913);

try{var seq__83889_83914 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__83887_83912,_STAR_parent_description_STAR__temp_val__83888_83913,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"box-played","box-played",405285239),(1),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___83918 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___83919 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___83918,actual__4781__auto___83919)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83918 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83918)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83919 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83919))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83887_83912,_STAR_parent_description_STAR__temp_val__83888_83913,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905))
),speclj.components.new_characteristic.call(null,"O in box 4",((function (_STAR_parent_description_STAR__orig_val__83887_83912,_STAR_parent_description_STAR__temp_val__83888_83913,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"box-played","box-played",405285239),(4),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.web.board.play_turn.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___83920 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),"O",(5),(6),(7),(8)], null);
var actual__4781__auto___83921 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___83920,actual__4781__auto___83921)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83920 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83920)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83921 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83921))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player1","player1",-1491573636);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83887_83912,_STAR_parent_description_STAR__temp_val__83888_83913,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905))
)],null)));
var chunk__83890_83915 = null;
var count__83891_83916 = (0);
var i__83892_83917 = (0);
while(true){
if((i__83892_83917 < count__83891_83916)){
var component__4696__auto___83922 = cljs.core._nth.call(null,chunk__83890_83915,i__83892_83917);
speclj.components.install.call(null,component__4696__auto___83922,description__4695__auto____$1);


var G__83923 = seq__83889_83914;
var G__83924 = chunk__83890_83915;
var G__83925 = count__83891_83916;
var G__83926 = (i__83892_83917 + (1));
seq__83889_83914 = G__83923;
chunk__83890_83915 = G__83924;
count__83891_83916 = G__83925;
i__83892_83917 = G__83926;
continue;
} else {
var temp__5735__auto___83927 = cljs.core.seq.call(null,seq__83889_83914);
if(temp__5735__auto___83927){
var seq__83889_83928__$1 = temp__5735__auto___83927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83889_83928__$1)){
var c__4556__auto___83929 = cljs.core.chunk_first.call(null,seq__83889_83928__$1);
var G__83930 = cljs.core.chunk_rest.call(null,seq__83889_83928__$1);
var G__83931 = c__4556__auto___83929;
var G__83932 = cljs.core.count.call(null,c__4556__auto___83929);
var G__83933 = (0);
seq__83889_83914 = G__83930;
chunk__83890_83915 = G__83931;
count__83891_83916 = G__83932;
i__83892_83917 = G__83933;
continue;
} else {
var component__4696__auto___83934 = cljs.core.first.call(null,seq__83889_83928__$1);
speclj.components.install.call(null,component__4696__auto___83934,description__4695__auto____$1);


var G__83935 = cljs.core.next.call(null,seq__83889_83928__$1);
var G__83936 = null;
var G__83937 = (0);
var G__83938 = (0);
seq__83889_83914 = G__83935;
chunk__83890_83915 = G__83936;
count__83891_83916 = G__83937;
i__83892_83917 = G__83938;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83887_83912);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"computer v human:","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__83893_83939 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83894_83940 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83894_83940);

try{var seq__83895_83941 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X in box 1",((function (_STAR_parent_description_STAR__orig_val__83893_83939,_STAR_parent_description_STAR__temp_val__83894_83940,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___83945 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"X",(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___83946 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___83945,actual__4781__auto___83946)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83945 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83945)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83946 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83946))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83893_83939,_STAR_parent_description_STAR__temp_val__83894_83940,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905))
)],null)));
var chunk__83896_83942 = null;
var count__83897_83943 = (0);
var i__83898_83944 = (0);
while(true){
if((i__83898_83944 < count__83897_83943)){
var component__4696__auto___83947 = cljs.core._nth.call(null,chunk__83896_83942,i__83898_83944);
speclj.components.install.call(null,component__4696__auto___83947,description__4695__auto____$1);


var G__83948 = seq__83895_83941;
var G__83949 = chunk__83896_83942;
var G__83950 = count__83897_83943;
var G__83951 = (i__83898_83944 + (1));
seq__83895_83941 = G__83948;
chunk__83896_83942 = G__83949;
count__83897_83943 = G__83950;
i__83898_83944 = G__83951;
continue;
} else {
var temp__5735__auto___83952 = cljs.core.seq.call(null,seq__83895_83941);
if(temp__5735__auto___83952){
var seq__83895_83953__$1 = temp__5735__auto___83952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83895_83953__$1)){
var c__4556__auto___83954 = cljs.core.chunk_first.call(null,seq__83895_83953__$1);
var G__83955 = cljs.core.chunk_rest.call(null,seq__83895_83953__$1);
var G__83956 = c__4556__auto___83954;
var G__83957 = cljs.core.count.call(null,c__4556__auto___83954);
var G__83958 = (0);
seq__83895_83941 = G__83955;
chunk__83896_83942 = G__83956;
count__83897_83943 = G__83957;
i__83898_83944 = G__83958;
continue;
} else {
var component__4696__auto___83959 = cljs.core.first.call(null,seq__83895_83953__$1);
speclj.components.install.call(null,component__4696__auto___83959,description__4695__auto____$1);


var G__83960 = cljs.core.next.call(null,seq__83895_83953__$1);
var G__83961 = null;
var G__83962 = (0);
var G__83963 = (0);
seq__83895_83941 = G__83960;
chunk__83896_83942 = G__83961;
count__83897_83943 = G__83962;
i__83898_83944 = G__83963;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83893_83939);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"game over","ttt.web.game-spec");
var _STAR_parent_description_STAR__orig_val__83899_83964 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83900_83965 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83900_83965);

try{var seq__83901_83966 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.spec_helper.test_game),speclj.components.new_characteristic.call(null,"X wins",((function (_STAR_parent_description_STAR__orig_val__83899_83964,_STAR_parent_description_STAR__temp_val__83900_83965,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.master.spec_helper.mock_move,(1));

cljs.core.swap_BANG_.call(null,ttt.web.game_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"playing","playing",70013335),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",(1),"X",(3),(4),(5),(6),(7),(8)], null));

cljs.core.reset_BANG_.call(null,ttt.web.game_spec.test_atom,ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.game_spec.test_atom)));

var expected__4780__auto___83970 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","X",(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___83971 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___83970,actual__4781__auto___83971)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83970 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83970)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83971 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83971))," (using =)"].join('')));
}

var expected__4780__auto___83972 = new cljs.core.Keyword(null,"game-over","game-over",-607322695);
var actual__4781__auto___83973 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto___83972,actual__4781__auto___83973)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83972 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83972)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83973 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83973))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player2","player2",-226422775);
var actual__4781__auto__ = new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.game_spec.test_atom));
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83899_83964,_STAR_parent_description_STAR__temp_val__83900_83965,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83863_83906,_STAR_parent_description_STAR__temp_val__83864_83907,description__4695__auto___83905))
)],null)));
var chunk__83902_83967 = null;
var count__83903_83968 = (0);
var i__83904_83969 = (0);
while(true){
if((i__83904_83969 < count__83903_83968)){
var component__4696__auto___83974 = cljs.core._nth.call(null,chunk__83902_83967,i__83904_83969);
speclj.components.install.call(null,component__4696__auto___83974,description__4695__auto____$1);


var G__83975 = seq__83901_83966;
var G__83976 = chunk__83902_83967;
var G__83977 = count__83903_83968;
var G__83978 = (i__83904_83969 + (1));
seq__83901_83966 = G__83975;
chunk__83902_83967 = G__83976;
count__83903_83968 = G__83977;
i__83904_83969 = G__83978;
continue;
} else {
var temp__5735__auto___83979 = cljs.core.seq.call(null,seq__83901_83966);
if(temp__5735__auto___83979){
var seq__83901_83980__$1 = temp__5735__auto___83979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83901_83980__$1)){
var c__4556__auto___83981 = cljs.core.chunk_first.call(null,seq__83901_83980__$1);
var G__83982 = cljs.core.chunk_rest.call(null,seq__83901_83980__$1);
var G__83983 = c__4556__auto___83981;
var G__83984 = cljs.core.count.call(null,c__4556__auto___83981);
var G__83985 = (0);
seq__83901_83966 = G__83982;
chunk__83902_83967 = G__83983;
count__83903_83968 = G__83984;
i__83904_83969 = G__83985;
continue;
} else {
var component__4696__auto___83986 = cljs.core.first.call(null,seq__83901_83980__$1);
speclj.components.install.call(null,component__4696__auto___83986,description__4695__auto____$1);


var G__83987 = cljs.core.next.call(null,seq__83901_83980__$1);
var G__83988 = null;
var G__83989 = (0);
var G__83990 = (0);
seq__83901_83966 = G__83987;
chunk__83902_83967 = G__83988;
count__83903_83968 = G__83989;
i__83904_83969 = G__83990;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83899_83964);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__83866_83909 = null;
var count__83867_83910 = (0);
var i__83868_83911 = (0);
while(true){
if((i__83868_83911 < count__83867_83910)){
var component__4696__auto___83991 = cljs.core._nth.call(null,chunk__83866_83909,i__83868_83911);
speclj.components.install.call(null,component__4696__auto___83991,description__4695__auto___83905);


var G__83992 = seq__83865_83908;
var G__83993 = chunk__83866_83909;
var G__83994 = count__83867_83910;
var G__83995 = (i__83868_83911 + (1));
seq__83865_83908 = G__83992;
chunk__83866_83909 = G__83993;
count__83867_83910 = G__83994;
i__83868_83911 = G__83995;
continue;
} else {
var temp__5735__auto___83996 = cljs.core.seq.call(null,seq__83865_83908);
if(temp__5735__auto___83996){
var seq__83865_83997__$1 = temp__5735__auto___83996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83865_83997__$1)){
var c__4556__auto___83998 = cljs.core.chunk_first.call(null,seq__83865_83997__$1);
var G__83999 = cljs.core.chunk_rest.call(null,seq__83865_83997__$1);
var G__84000 = c__4556__auto___83998;
var G__84001 = cljs.core.count.call(null,c__4556__auto___83998);
var G__84002 = (0);
seq__83865_83908 = G__83999;
chunk__83866_83909 = G__84000;
count__83867_83910 = G__84001;
i__83868_83911 = G__84002;
continue;
} else {
var component__4696__auto___84003 = cljs.core.first.call(null,seq__83865_83997__$1);
speclj.components.install.call(null,component__4696__auto___84003,description__4695__auto___83905);


var G__84004 = cljs.core.next.call(null,seq__83865_83997__$1);
var G__84005 = null;
var G__84006 = (0);
var G__84007 = (0);
seq__83865_83908 = G__84004;
chunk__83866_83909 = G__84005;
count__83867_83910 = G__84006;
i__83868_83911 = G__84007;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83863_83906);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___83905);
}


//# sourceMappingURL=game_spec.js.map
