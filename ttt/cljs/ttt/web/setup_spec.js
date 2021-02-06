// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___16599 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16269_16600 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16270_16601 = description__4695__auto___16599;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16270_16601);

try{var seq__16271_16602 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16437_16606 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16438_16607 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16438_16607);

try{var seq__16439_16608 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16521_16612 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16522_16613 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16522_16613);

try{var seq__16523_16614 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__16521_16612,_STAR_parent_description_STAR__temp_val__16522_16613,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__4781__auto__ = status;
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16521_16612,_STAR_parent_description_STAR__temp_val__16522_16613,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__16521_16612,_STAR_parent_description_STAR__temp_val__16522_16613,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16521_16612,_STAR_parent_description_STAR__temp_val__16522_16613,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
)],null)));
var chunk__16524_16615 = null;
var count__16525_16616 = (0);
var i__16526_16617 = (0);
while(true){
if((i__16526_16617 < count__16525_16616)){
var component__4696__auto___16618 = cljs.core._nth.call(null,chunk__16524_16615,i__16526_16617);
speclj.components.install.call(null,component__4696__auto___16618,description__4695__auto____$2);


var G__16619 = seq__16523_16614;
var G__16620 = chunk__16524_16615;
var G__16621 = count__16525_16616;
var G__16622 = (i__16526_16617 + (1));
seq__16523_16614 = G__16619;
chunk__16524_16615 = G__16620;
count__16525_16616 = G__16621;
i__16526_16617 = G__16622;
continue;
} else {
var temp__5735__auto___16623 = cljs.core.seq.call(null,seq__16523_16614);
if(temp__5735__auto___16623){
var seq__16523_16624__$1 = temp__5735__auto___16623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16523_16624__$1)){
var c__4556__auto___16625 = cljs.core.chunk_first.call(null,seq__16523_16624__$1);
var G__16626 = cljs.core.chunk_rest.call(null,seq__16523_16624__$1);
var G__16627 = c__4556__auto___16625;
var G__16628 = cljs.core.count.call(null,c__4556__auto___16625);
var G__16629 = (0);
seq__16523_16614 = G__16626;
chunk__16524_16615 = G__16627;
count__16525_16616 = G__16628;
i__16526_16617 = G__16629;
continue;
} else {
var component__4696__auto___16630 = cljs.core.first.call(null,seq__16523_16624__$1);
speclj.components.install.call(null,component__4696__auto___16630,description__4695__auto____$2);


var G__16631 = cljs.core.next.call(null,seq__16523_16624__$1);
var G__16632 = null;
var G__16633 = (0);
var G__16634 = (0);
seq__16523_16614 = G__16631;
chunk__16524_16615 = G__16632;
count__16525_16616 = G__16633;
i__16526_16617 = G__16634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16521_16612);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16527_16635 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16528_16636 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16528_16636);

try{var seq__16529_16637 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16539_16641 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16540_16642 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16540_16642);

try{var seq__16541_16643 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16647 = (0);
var actual__4781__auto___16648 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16647,actual__4781__auto___16648)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16647 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16647)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16648 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16648))," (using =)"].join('')));
}

var expected__4780__auto___16649 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___16650 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16649,actual__4781__auto___16650)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16649 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16649)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16650 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16650))," (using =)"].join('')));
}

var expected__4780__auto___16651 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___16652 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16651,actual__4781__auto___16652)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16651 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16651)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16652 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16652))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16653 = (1);
var actual__4781__auto___16654 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16653,actual__4781__auto___16654)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16653 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16653)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16654 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16654))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16655 = (2);
var actual__4781__auto___16656 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16655,actual__4781__auto___16656)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16655 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16655)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16656 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16656))," (using =)"].join('')));
}

var expected__4780__auto___16657 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___16658 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16657,actual__4781__auto___16658)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16657 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16657)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16658 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16658))," (using =)"].join('')));
}

var expected__4780__auto___16659 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___16660 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___16659,actual__4781__auto___16660)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16659 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16659)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16660 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16660))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16539_16641,_STAR_parent_description_STAR__temp_val__16540_16642,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16527_16635,_STAR_parent_description_STAR__temp_val__16528_16636,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
)],null)));
var chunk__16542_16644 = null;
var count__16543_16645 = (0);
var i__16544_16646 = (0);
while(true){
if((i__16544_16646 < count__16543_16645)){
var component__4696__auto___16661 = cljs.core._nth.call(null,chunk__16542_16644,i__16544_16646);
speclj.components.install.call(null,component__4696__auto___16661,description__4695__auto____$3);


var G__16662 = seq__16541_16643;
var G__16663 = chunk__16542_16644;
var G__16664 = count__16543_16645;
var G__16665 = (i__16544_16646 + (1));
seq__16541_16643 = G__16662;
chunk__16542_16644 = G__16663;
count__16543_16645 = G__16664;
i__16544_16646 = G__16665;
continue;
} else {
var temp__5735__auto___16666 = cljs.core.seq.call(null,seq__16541_16643);
if(temp__5735__auto___16666){
var seq__16541_16667__$1 = temp__5735__auto___16666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16541_16667__$1)){
var c__4556__auto___16668 = cljs.core.chunk_first.call(null,seq__16541_16667__$1);
var G__16669 = cljs.core.chunk_rest.call(null,seq__16541_16667__$1);
var G__16670 = c__4556__auto___16668;
var G__16671 = cljs.core.count.call(null,c__4556__auto___16668);
var G__16672 = (0);
seq__16541_16643 = G__16669;
chunk__16542_16644 = G__16670;
count__16543_16645 = G__16671;
i__16544_16646 = G__16672;
continue;
} else {
var component__4696__auto___16673 = cljs.core.first.call(null,seq__16541_16667__$1);
speclj.components.install.call(null,component__4696__auto___16673,description__4695__auto____$3);


var G__16674 = cljs.core.next.call(null,seq__16541_16667__$1);
var G__16675 = null;
var G__16676 = (0);
var G__16677 = (0);
seq__16541_16643 = G__16674;
chunk__16542_16644 = G__16675;
count__16543_16645 = G__16676;
i__16544_16646 = G__16677;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16539_16641);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__16530_16638 = null;
var count__16531_16639 = (0);
var i__16532_16640 = (0);
while(true){
if((i__16532_16640 < count__16531_16639)){
var component__4696__auto___16678 = cljs.core._nth.call(null,chunk__16530_16638,i__16532_16640);
speclj.components.install.call(null,component__4696__auto___16678,description__4695__auto____$2);


var G__16679 = seq__16529_16637;
var G__16680 = chunk__16530_16638;
var G__16681 = count__16531_16639;
var G__16682 = (i__16532_16640 + (1));
seq__16529_16637 = G__16679;
chunk__16530_16638 = G__16680;
count__16531_16639 = G__16681;
i__16532_16640 = G__16682;
continue;
} else {
var temp__5735__auto___16683 = cljs.core.seq.call(null,seq__16529_16637);
if(temp__5735__auto___16683){
var seq__16529_16684__$1 = temp__5735__auto___16683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16529_16684__$1)){
var c__4556__auto___16685 = cljs.core.chunk_first.call(null,seq__16529_16684__$1);
var G__16686 = cljs.core.chunk_rest.call(null,seq__16529_16684__$1);
var G__16687 = c__4556__auto___16685;
var G__16688 = cljs.core.count.call(null,c__4556__auto___16685);
var G__16689 = (0);
seq__16529_16637 = G__16686;
chunk__16530_16638 = G__16687;
count__16531_16639 = G__16688;
i__16532_16640 = G__16689;
continue;
} else {
var component__4696__auto___16690 = cljs.core.first.call(null,seq__16529_16684__$1);
speclj.components.install.call(null,component__4696__auto___16690,description__4695__auto____$2);


var G__16691 = cljs.core.next.call(null,seq__16529_16684__$1);
var G__16692 = null;
var G__16693 = (0);
var G__16694 = (0);
seq__16529_16637 = G__16691;
chunk__16530_16638 = G__16692;
count__16531_16639 = G__16693;
i__16532_16640 = G__16694;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16527_16635);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16545_16695 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16546_16696 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16546_16696);

try{var seq__16547_16697 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16557_16701 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16558_16702 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16558_16702);

try{var seq__16559_16703 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16707 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__4781__auto___16708 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto___16707,actual__4781__auto___16708)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16707 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16707)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16708 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16708))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16709 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__4781__auto___16710 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto___16709,actual__4781__auto___16710)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16709 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16709)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16710 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16710))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16711 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__4781__auto___16712 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto___16711,actual__4781__auto___16712)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16711 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16711)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16712 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16712))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16557_16701,_STAR_parent_description_STAR__temp_val__16558_16702,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16545_16695,_STAR_parent_description_STAR__temp_val__16546_16696,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
)],null)));
var chunk__16560_16704 = null;
var count__16561_16705 = (0);
var i__16562_16706 = (0);
while(true){
if((i__16562_16706 < count__16561_16705)){
var component__4696__auto___16713 = cljs.core._nth.call(null,chunk__16560_16704,i__16562_16706);
speclj.components.install.call(null,component__4696__auto___16713,description__4695__auto____$3);


var G__16714 = seq__16559_16703;
var G__16715 = chunk__16560_16704;
var G__16716 = count__16561_16705;
var G__16717 = (i__16562_16706 + (1));
seq__16559_16703 = G__16714;
chunk__16560_16704 = G__16715;
count__16561_16705 = G__16716;
i__16562_16706 = G__16717;
continue;
} else {
var temp__5735__auto___16718 = cljs.core.seq.call(null,seq__16559_16703);
if(temp__5735__auto___16718){
var seq__16559_16719__$1 = temp__5735__auto___16718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16559_16719__$1)){
var c__4556__auto___16720 = cljs.core.chunk_first.call(null,seq__16559_16719__$1);
var G__16721 = cljs.core.chunk_rest.call(null,seq__16559_16719__$1);
var G__16722 = c__4556__auto___16720;
var G__16723 = cljs.core.count.call(null,c__4556__auto___16720);
var G__16724 = (0);
seq__16559_16703 = G__16721;
chunk__16560_16704 = G__16722;
count__16561_16705 = G__16723;
i__16562_16706 = G__16724;
continue;
} else {
var component__4696__auto___16725 = cljs.core.first.call(null,seq__16559_16719__$1);
speclj.components.install.call(null,component__4696__auto___16725,description__4695__auto____$3);


var G__16726 = cljs.core.next.call(null,seq__16559_16719__$1);
var G__16727 = null;
var G__16728 = (0);
var G__16729 = (0);
seq__16559_16703 = G__16726;
chunk__16560_16704 = G__16727;
count__16561_16705 = G__16728;
i__16562_16706 = G__16729;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16557_16701);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__16548_16698 = null;
var count__16549_16699 = (0);
var i__16550_16700 = (0);
while(true){
if((i__16550_16700 < count__16549_16699)){
var component__4696__auto___16730 = cljs.core._nth.call(null,chunk__16548_16698,i__16550_16700);
speclj.components.install.call(null,component__4696__auto___16730,description__4695__auto____$2);


var G__16731 = seq__16547_16697;
var G__16732 = chunk__16548_16698;
var G__16733 = count__16549_16699;
var G__16734 = (i__16550_16700 + (1));
seq__16547_16697 = G__16731;
chunk__16548_16698 = G__16732;
count__16549_16699 = G__16733;
i__16550_16700 = G__16734;
continue;
} else {
var temp__5735__auto___16735 = cljs.core.seq.call(null,seq__16547_16697);
if(temp__5735__auto___16735){
var seq__16547_16736__$1 = temp__5735__auto___16735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16547_16736__$1)){
var c__4556__auto___16737 = cljs.core.chunk_first.call(null,seq__16547_16736__$1);
var G__16738 = cljs.core.chunk_rest.call(null,seq__16547_16736__$1);
var G__16739 = c__4556__auto___16737;
var G__16740 = cljs.core.count.call(null,c__4556__auto___16737);
var G__16741 = (0);
seq__16547_16697 = G__16738;
chunk__16548_16698 = G__16739;
count__16549_16699 = G__16740;
i__16550_16700 = G__16741;
continue;
} else {
var component__4696__auto___16742 = cljs.core.first.call(null,seq__16547_16736__$1);
speclj.components.install.call(null,component__4696__auto___16742,description__4695__auto____$2);


var G__16743 = cljs.core.next.call(null,seq__16547_16736__$1);
var G__16744 = null;
var G__16745 = (0);
var G__16746 = (0);
seq__16547_16697 = G__16743;
chunk__16548_16698 = G__16744;
count__16549_16699 = G__16745;
i__16550_16700 = G__16746;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16545_16695);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16563_16747 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16564_16748 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16564_16748);

try{var seq__16565_16749 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16575_16753 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16576_16754 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16576_16754);

try{var seq__16577_16755 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__16575_16753,_STAR_parent_description_STAR__temp_val__16576_16754,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16563_16747,_STAR_parent_description_STAR__temp_val__16564_16748,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16759 = (3);
var actual__4781__auto___16760 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___16759,actual__4781__auto___16760)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16759 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16759)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16760 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16760))," (using =)"].join('')));
}

var expected__4780__auto___16761 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___16762 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___16761,actual__4781__auto___16762)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16761 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16761)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16762 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16762))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16575_16753,_STAR_parent_description_STAR__temp_val__16576_16754,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16563_16747,_STAR_parent_description_STAR__temp_val__16564_16748,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__16575_16753,_STAR_parent_description_STAR__temp_val__16576_16754,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16563_16747,_STAR_parent_description_STAR__temp_val__16564_16748,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16763 = (2);
var actual__4781__auto___16764 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___16763,actual__4781__auto___16764)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16763 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16763)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16764 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16764))," (using =)"].join('')));
}

var expected__4780__auto___16765 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__4781__auto___16766 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___16765,actual__4781__auto___16766)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16765 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16765)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16766 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16766))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16575_16753,_STAR_parent_description_STAR__temp_val__16576_16754,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16563_16747,_STAR_parent_description_STAR__temp_val__16564_16748,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
)],null)));
var chunk__16578_16756 = null;
var count__16579_16757 = (0);
var i__16580_16758 = (0);
while(true){
if((i__16580_16758 < count__16579_16757)){
var component__4696__auto___16767 = cljs.core._nth.call(null,chunk__16578_16756,i__16580_16758);
speclj.components.install.call(null,component__4696__auto___16767,description__4695__auto____$3);


var G__16768 = seq__16577_16755;
var G__16769 = chunk__16578_16756;
var G__16770 = count__16579_16757;
var G__16771 = (i__16580_16758 + (1));
seq__16577_16755 = G__16768;
chunk__16578_16756 = G__16769;
count__16579_16757 = G__16770;
i__16580_16758 = G__16771;
continue;
} else {
var temp__5735__auto___16772 = cljs.core.seq.call(null,seq__16577_16755);
if(temp__5735__auto___16772){
var seq__16577_16773__$1 = temp__5735__auto___16772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16577_16773__$1)){
var c__4556__auto___16774 = cljs.core.chunk_first.call(null,seq__16577_16773__$1);
var G__16775 = cljs.core.chunk_rest.call(null,seq__16577_16773__$1);
var G__16776 = c__4556__auto___16774;
var G__16777 = cljs.core.count.call(null,c__4556__auto___16774);
var G__16778 = (0);
seq__16577_16755 = G__16775;
chunk__16578_16756 = G__16776;
count__16579_16757 = G__16777;
i__16580_16758 = G__16778;
continue;
} else {
var component__4696__auto___16779 = cljs.core.first.call(null,seq__16577_16773__$1);
speclj.components.install.call(null,component__4696__auto___16779,description__4695__auto____$3);


var G__16780 = cljs.core.next.call(null,seq__16577_16773__$1);
var G__16781 = null;
var G__16782 = (0);
var G__16783 = (0);
seq__16577_16755 = G__16780;
chunk__16578_16756 = G__16781;
count__16579_16757 = G__16782;
i__16580_16758 = G__16783;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16575_16753);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__16566_16750 = null;
var count__16567_16751 = (0);
var i__16568_16752 = (0);
while(true){
if((i__16568_16752 < count__16567_16751)){
var component__4696__auto___16784 = cljs.core._nth.call(null,chunk__16566_16750,i__16568_16752);
speclj.components.install.call(null,component__4696__auto___16784,description__4695__auto____$2);


var G__16785 = seq__16565_16749;
var G__16786 = chunk__16566_16750;
var G__16787 = count__16567_16751;
var G__16788 = (i__16568_16752 + (1));
seq__16565_16749 = G__16785;
chunk__16566_16750 = G__16786;
count__16567_16751 = G__16787;
i__16568_16752 = G__16788;
continue;
} else {
var temp__5735__auto___16789 = cljs.core.seq.call(null,seq__16565_16749);
if(temp__5735__auto___16789){
var seq__16565_16790__$1 = temp__5735__auto___16789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16565_16790__$1)){
var c__4556__auto___16791 = cljs.core.chunk_first.call(null,seq__16565_16790__$1);
var G__16792 = cljs.core.chunk_rest.call(null,seq__16565_16790__$1);
var G__16793 = c__4556__auto___16791;
var G__16794 = cljs.core.count.call(null,c__4556__auto___16791);
var G__16795 = (0);
seq__16565_16749 = G__16792;
chunk__16566_16750 = G__16793;
count__16567_16751 = G__16794;
i__16568_16752 = G__16795;
continue;
} else {
var component__4696__auto___16796 = cljs.core.first.call(null,seq__16565_16790__$1);
speclj.components.install.call(null,component__4696__auto___16796,description__4695__auto____$2);


var G__16797 = cljs.core.next.call(null,seq__16565_16790__$1);
var G__16798 = null;
var G__16799 = (0);
var G__16800 = (0);
seq__16565_16749 = G__16797;
chunk__16566_16750 = G__16798;
count__16567_16751 = G__16799;
i__16568_16752 = G__16800;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16563_16747);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16581_16801 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16582_16802 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16582_16802);

try{var seq__16583_16803 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__16593_16807 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16594_16808 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16594_16808);

try{var seq__16595_16809 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__16593_16807,_STAR_parent_description_STAR__temp_val__16594_16808,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16581_16801,_STAR_parent_description_STAR__temp_val__16582_16802,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16813 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___16814 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___16813,actual__4781__auto___16814)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16813 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16813)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16814 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16814))," (using =)"].join('')));
}

var expected__4780__auto___16815 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___16816 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___16815,actual__4781__auto___16816)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16815 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16815)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16816 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16816))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16593_16807,_STAR_parent_description_STAR__temp_val__16594_16808,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16581_16801,_STAR_parent_description_STAR__temp_val__16582_16802,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__16593_16807,_STAR_parent_description_STAR__temp_val__16594_16808,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16581_16801,_STAR_parent_description_STAR__temp_val__16582_16802,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___16817 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___16818 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___16817,actual__4781__auto___16818)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16817 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16817)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16818 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16818))," (using =)"].join('')));
}

var expected__4780__auto___16819 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___16820 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___16819,actual__4781__auto___16820)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16819 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16819)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16820 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16820))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16593_16807,_STAR_parent_description_STAR__temp_val__16594_16808,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__16581_16801,_STAR_parent_description_STAR__temp_val__16582_16802,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__16437_16606,_STAR_parent_description_STAR__temp_val__16438_16607,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16269_16600,_STAR_parent_description_STAR__temp_val__16270_16601,description__4695__auto___16599))
)],null)));
var chunk__16596_16810 = null;
var count__16597_16811 = (0);
var i__16598_16812 = (0);
while(true){
if((i__16598_16812 < count__16597_16811)){
var component__4696__auto___16821 = cljs.core._nth.call(null,chunk__16596_16810,i__16598_16812);
speclj.components.install.call(null,component__4696__auto___16821,description__4695__auto____$3);


var G__16822 = seq__16595_16809;
var G__16823 = chunk__16596_16810;
var G__16824 = count__16597_16811;
var G__16825 = (i__16598_16812 + (1));
seq__16595_16809 = G__16822;
chunk__16596_16810 = G__16823;
count__16597_16811 = G__16824;
i__16598_16812 = G__16825;
continue;
} else {
var temp__5735__auto___16826 = cljs.core.seq.call(null,seq__16595_16809);
if(temp__5735__auto___16826){
var seq__16595_16827__$1 = temp__5735__auto___16826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16595_16827__$1)){
var c__4556__auto___16828 = cljs.core.chunk_first.call(null,seq__16595_16827__$1);
var G__16829 = cljs.core.chunk_rest.call(null,seq__16595_16827__$1);
var G__16830 = c__4556__auto___16828;
var G__16831 = cljs.core.count.call(null,c__4556__auto___16828);
var G__16832 = (0);
seq__16595_16809 = G__16829;
chunk__16596_16810 = G__16830;
count__16597_16811 = G__16831;
i__16598_16812 = G__16832;
continue;
} else {
var component__4696__auto___16833 = cljs.core.first.call(null,seq__16595_16827__$1);
speclj.components.install.call(null,component__4696__auto___16833,description__4695__auto____$3);


var G__16834 = cljs.core.next.call(null,seq__16595_16827__$1);
var G__16835 = null;
var G__16836 = (0);
var G__16837 = (0);
seq__16595_16809 = G__16834;
chunk__16596_16810 = G__16835;
count__16597_16811 = G__16836;
i__16598_16812 = G__16837;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16593_16807);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__16584_16804 = null;
var count__16585_16805 = (0);
var i__16586_16806 = (0);
while(true){
if((i__16586_16806 < count__16585_16805)){
var component__4696__auto___16838 = cljs.core._nth.call(null,chunk__16584_16804,i__16586_16806);
speclj.components.install.call(null,component__4696__auto___16838,description__4695__auto____$2);


var G__16839 = seq__16583_16803;
var G__16840 = chunk__16584_16804;
var G__16841 = count__16585_16805;
var G__16842 = (i__16586_16806 + (1));
seq__16583_16803 = G__16839;
chunk__16584_16804 = G__16840;
count__16585_16805 = G__16841;
i__16586_16806 = G__16842;
continue;
} else {
var temp__5735__auto___16843 = cljs.core.seq.call(null,seq__16583_16803);
if(temp__5735__auto___16843){
var seq__16583_16844__$1 = temp__5735__auto___16843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16583_16844__$1)){
var c__4556__auto___16845 = cljs.core.chunk_first.call(null,seq__16583_16844__$1);
var G__16846 = cljs.core.chunk_rest.call(null,seq__16583_16844__$1);
var G__16847 = c__4556__auto___16845;
var G__16848 = cljs.core.count.call(null,c__4556__auto___16845);
var G__16849 = (0);
seq__16583_16803 = G__16846;
chunk__16584_16804 = G__16847;
count__16585_16805 = G__16848;
i__16586_16806 = G__16849;
continue;
} else {
var component__4696__auto___16850 = cljs.core.first.call(null,seq__16583_16844__$1);
speclj.components.install.call(null,component__4696__auto___16850,description__4695__auto____$2);


var G__16851 = cljs.core.next.call(null,seq__16583_16844__$1);
var G__16852 = null;
var G__16853 = (0);
var G__16854 = (0);
seq__16583_16803 = G__16851;
chunk__16584_16804 = G__16852;
count__16585_16805 = G__16853;
i__16586_16806 = G__16854;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16581_16801);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})()],null)));
var chunk__16440_16609 = null;
var count__16441_16610 = (0);
var i__16442_16611 = (0);
while(true){
if((i__16442_16611 < count__16441_16610)){
var component__4696__auto___16855 = cljs.core._nth.call(null,chunk__16440_16609,i__16442_16611);
speclj.components.install.call(null,component__4696__auto___16855,description__4695__auto____$1);


var G__16856 = seq__16439_16608;
var G__16857 = chunk__16440_16609;
var G__16858 = count__16441_16610;
var G__16859 = (i__16442_16611 + (1));
seq__16439_16608 = G__16856;
chunk__16440_16609 = G__16857;
count__16441_16610 = G__16858;
i__16442_16611 = G__16859;
continue;
} else {
var temp__5735__auto___16860 = cljs.core.seq.call(null,seq__16439_16608);
if(temp__5735__auto___16860){
var seq__16439_16861__$1 = temp__5735__auto___16860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16439_16861__$1)){
var c__4556__auto___16862 = cljs.core.chunk_first.call(null,seq__16439_16861__$1);
var G__16863 = cljs.core.chunk_rest.call(null,seq__16439_16861__$1);
var G__16864 = c__4556__auto___16862;
var G__16865 = cljs.core.count.call(null,c__4556__auto___16862);
var G__16866 = (0);
seq__16439_16608 = G__16863;
chunk__16440_16609 = G__16864;
count__16441_16610 = G__16865;
i__16442_16611 = G__16866;
continue;
} else {
var component__4696__auto___16867 = cljs.core.first.call(null,seq__16439_16861__$1);
speclj.components.install.call(null,component__4696__auto___16867,description__4695__auto____$1);


var G__16868 = cljs.core.next.call(null,seq__16439_16861__$1);
var G__16869 = null;
var G__16870 = (0);
var G__16871 = (0);
seq__16439_16608 = G__16868;
chunk__16440_16609 = G__16869;
count__16441_16610 = G__16870;
i__16442_16611 = G__16871;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16437_16606);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__16272_16603 = null;
var count__16273_16604 = (0);
var i__16274_16605 = (0);
while(true){
if((i__16274_16605 < count__16273_16604)){
var component__4696__auto___16872 = cljs.core._nth.call(null,chunk__16272_16603,i__16274_16605);
speclj.components.install.call(null,component__4696__auto___16872,description__4695__auto___16599);


var G__16873 = seq__16271_16602;
var G__16874 = chunk__16272_16603;
var G__16875 = count__16273_16604;
var G__16876 = (i__16274_16605 + (1));
seq__16271_16602 = G__16873;
chunk__16272_16603 = G__16874;
count__16273_16604 = G__16875;
i__16274_16605 = G__16876;
continue;
} else {
var temp__5735__auto___16877 = cljs.core.seq.call(null,seq__16271_16602);
if(temp__5735__auto___16877){
var seq__16271_16878__$1 = temp__5735__auto___16877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16271_16878__$1)){
var c__4556__auto___16879 = cljs.core.chunk_first.call(null,seq__16271_16878__$1);
var G__16880 = cljs.core.chunk_rest.call(null,seq__16271_16878__$1);
var G__16881 = c__4556__auto___16879;
var G__16882 = cljs.core.count.call(null,c__4556__auto___16879);
var G__16883 = (0);
seq__16271_16602 = G__16880;
chunk__16272_16603 = G__16881;
count__16273_16604 = G__16882;
i__16274_16605 = G__16883;
continue;
} else {
var component__4696__auto___16884 = cljs.core.first.call(null,seq__16271_16878__$1);
speclj.components.install.call(null,component__4696__auto___16884,description__4695__auto___16599);


var G__16885 = cljs.core.next.call(null,seq__16271_16878__$1);
var G__16886 = null;
var G__16887 = (0);
var G__16888 = (0);
seq__16271_16602 = G__16885;
chunk__16272_16603 = G__16886;
count__16273_16604 = G__16887;
i__16274_16605 = G__16888;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16269_16600);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___16599);
}


//# sourceMappingURL=setup_spec.js.map
