// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___83569 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83239_83570 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83240_83571 = description__4695__auto___83569;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83240_83571);

try{var seq__83241_83572 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83407_83576 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83408_83577 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83408_83577);

try{var seq__83409_83578 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83491_83582 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83492_83583 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83492_83583);

try{var seq__83493_83584 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__83491_83582,_STAR_parent_description_STAR__temp_val__83492_83583,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__4781__auto__ = status;
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83491_83582,_STAR_parent_description_STAR__temp_val__83492_83583,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__83491_83582,_STAR_parent_description_STAR__temp_val__83492_83583,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83491_83582,_STAR_parent_description_STAR__temp_val__83492_83583,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
)],null)));
var chunk__83494_83585 = null;
var count__83495_83586 = (0);
var i__83496_83587 = (0);
while(true){
if((i__83496_83587 < count__83495_83586)){
var component__4696__auto___83588 = cljs.core._nth.call(null,chunk__83494_83585,i__83496_83587);
speclj.components.install.call(null,component__4696__auto___83588,description__4695__auto____$2);


var G__83589 = seq__83493_83584;
var G__83590 = chunk__83494_83585;
var G__83591 = count__83495_83586;
var G__83592 = (i__83496_83587 + (1));
seq__83493_83584 = G__83589;
chunk__83494_83585 = G__83590;
count__83495_83586 = G__83591;
i__83496_83587 = G__83592;
continue;
} else {
var temp__5735__auto___83593 = cljs.core.seq.call(null,seq__83493_83584);
if(temp__5735__auto___83593){
var seq__83493_83594__$1 = temp__5735__auto___83593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83493_83594__$1)){
var c__4556__auto___83595 = cljs.core.chunk_first.call(null,seq__83493_83594__$1);
var G__83596 = cljs.core.chunk_rest.call(null,seq__83493_83594__$1);
var G__83597 = c__4556__auto___83595;
var G__83598 = cljs.core.count.call(null,c__4556__auto___83595);
var G__83599 = (0);
seq__83493_83584 = G__83596;
chunk__83494_83585 = G__83597;
count__83495_83586 = G__83598;
i__83496_83587 = G__83599;
continue;
} else {
var component__4696__auto___83600 = cljs.core.first.call(null,seq__83493_83594__$1);
speclj.components.install.call(null,component__4696__auto___83600,description__4695__auto____$2);


var G__83601 = cljs.core.next.call(null,seq__83493_83594__$1);
var G__83602 = null;
var G__83603 = (0);
var G__83604 = (0);
seq__83493_83584 = G__83601;
chunk__83494_83585 = G__83602;
count__83495_83586 = G__83603;
i__83496_83587 = G__83604;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83491_83582);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83497_83605 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83498_83606 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83498_83606);

try{var seq__83499_83607 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83509_83611 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83510_83612 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83510_83612);

try{var seq__83511_83613 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83617 = (0);
var actual__4781__auto___83618 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83617,actual__4781__auto___83618)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83617 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83617)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83618 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83618))," (using =)"].join('')));
}

var expected__4780__auto___83619 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___83620 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83619,actual__4781__auto___83620)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83619 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83619)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83620 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83620))," (using =)"].join('')));
}

var expected__4780__auto___83621 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___83622 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83621,actual__4781__auto___83622)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83621 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83621)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83622 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83622))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83623 = (1);
var actual__4781__auto___83624 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83623,actual__4781__auto___83624)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83623 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83623)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83624 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83624))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83625 = (2);
var actual__4781__auto___83626 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83625,actual__4781__auto___83626)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83625 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83625)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83626 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83626))," (using =)"].join('')));
}

var expected__4780__auto___83627 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___83628 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83627,actual__4781__auto___83628)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83627 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83627)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83628 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83628))," (using =)"].join('')));
}

var expected__4780__auto___83629 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___83630 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___83629,actual__4781__auto___83630)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83629 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83629)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83630 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83630))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83509_83611,_STAR_parent_description_STAR__temp_val__83510_83612,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83497_83605,_STAR_parent_description_STAR__temp_val__83498_83606,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
)],null)));
var chunk__83512_83614 = null;
var count__83513_83615 = (0);
var i__83514_83616 = (0);
while(true){
if((i__83514_83616 < count__83513_83615)){
var component__4696__auto___83631 = cljs.core._nth.call(null,chunk__83512_83614,i__83514_83616);
speclj.components.install.call(null,component__4696__auto___83631,description__4695__auto____$3);


var G__83632 = seq__83511_83613;
var G__83633 = chunk__83512_83614;
var G__83634 = count__83513_83615;
var G__83635 = (i__83514_83616 + (1));
seq__83511_83613 = G__83632;
chunk__83512_83614 = G__83633;
count__83513_83615 = G__83634;
i__83514_83616 = G__83635;
continue;
} else {
var temp__5735__auto___83636 = cljs.core.seq.call(null,seq__83511_83613);
if(temp__5735__auto___83636){
var seq__83511_83637__$1 = temp__5735__auto___83636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83511_83637__$1)){
var c__4556__auto___83638 = cljs.core.chunk_first.call(null,seq__83511_83637__$1);
var G__83639 = cljs.core.chunk_rest.call(null,seq__83511_83637__$1);
var G__83640 = c__4556__auto___83638;
var G__83641 = cljs.core.count.call(null,c__4556__auto___83638);
var G__83642 = (0);
seq__83511_83613 = G__83639;
chunk__83512_83614 = G__83640;
count__83513_83615 = G__83641;
i__83514_83616 = G__83642;
continue;
} else {
var component__4696__auto___83643 = cljs.core.first.call(null,seq__83511_83637__$1);
speclj.components.install.call(null,component__4696__auto___83643,description__4695__auto____$3);


var G__83644 = cljs.core.next.call(null,seq__83511_83637__$1);
var G__83645 = null;
var G__83646 = (0);
var G__83647 = (0);
seq__83511_83613 = G__83644;
chunk__83512_83614 = G__83645;
count__83513_83615 = G__83646;
i__83514_83616 = G__83647;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83509_83611);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__83500_83608 = null;
var count__83501_83609 = (0);
var i__83502_83610 = (0);
while(true){
if((i__83502_83610 < count__83501_83609)){
var component__4696__auto___83648 = cljs.core._nth.call(null,chunk__83500_83608,i__83502_83610);
speclj.components.install.call(null,component__4696__auto___83648,description__4695__auto____$2);


var G__83649 = seq__83499_83607;
var G__83650 = chunk__83500_83608;
var G__83651 = count__83501_83609;
var G__83652 = (i__83502_83610 + (1));
seq__83499_83607 = G__83649;
chunk__83500_83608 = G__83650;
count__83501_83609 = G__83651;
i__83502_83610 = G__83652;
continue;
} else {
var temp__5735__auto___83653 = cljs.core.seq.call(null,seq__83499_83607);
if(temp__5735__auto___83653){
var seq__83499_83654__$1 = temp__5735__auto___83653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83499_83654__$1)){
var c__4556__auto___83655 = cljs.core.chunk_first.call(null,seq__83499_83654__$1);
var G__83656 = cljs.core.chunk_rest.call(null,seq__83499_83654__$1);
var G__83657 = c__4556__auto___83655;
var G__83658 = cljs.core.count.call(null,c__4556__auto___83655);
var G__83659 = (0);
seq__83499_83607 = G__83656;
chunk__83500_83608 = G__83657;
count__83501_83609 = G__83658;
i__83502_83610 = G__83659;
continue;
} else {
var component__4696__auto___83660 = cljs.core.first.call(null,seq__83499_83654__$1);
speclj.components.install.call(null,component__4696__auto___83660,description__4695__auto____$2);


var G__83661 = cljs.core.next.call(null,seq__83499_83654__$1);
var G__83662 = null;
var G__83663 = (0);
var G__83664 = (0);
seq__83499_83607 = G__83661;
chunk__83500_83608 = G__83662;
count__83501_83609 = G__83663;
i__83502_83610 = G__83664;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83497_83605);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83515_83665 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83516_83666 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83516_83666);

try{var seq__83517_83667 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83527_83671 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83528_83672 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83528_83672);

try{var seq__83529_83673 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83677 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__4781__auto___83678 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto___83677,actual__4781__auto___83678)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83677 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83677)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83678 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83678))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83679 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__4781__auto___83680 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto___83679,actual__4781__auto___83680)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83679 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83679)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83680 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83680))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83681 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__4781__auto___83682 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto___83681,actual__4781__auto___83682)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83681 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83681)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83682 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83682))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83527_83671,_STAR_parent_description_STAR__temp_val__83528_83672,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83515_83665,_STAR_parent_description_STAR__temp_val__83516_83666,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
)],null)));
var chunk__83530_83674 = null;
var count__83531_83675 = (0);
var i__83532_83676 = (0);
while(true){
if((i__83532_83676 < count__83531_83675)){
var component__4696__auto___83683 = cljs.core._nth.call(null,chunk__83530_83674,i__83532_83676);
speclj.components.install.call(null,component__4696__auto___83683,description__4695__auto____$3);


var G__83684 = seq__83529_83673;
var G__83685 = chunk__83530_83674;
var G__83686 = count__83531_83675;
var G__83687 = (i__83532_83676 + (1));
seq__83529_83673 = G__83684;
chunk__83530_83674 = G__83685;
count__83531_83675 = G__83686;
i__83532_83676 = G__83687;
continue;
} else {
var temp__5735__auto___83688 = cljs.core.seq.call(null,seq__83529_83673);
if(temp__5735__auto___83688){
var seq__83529_83689__$1 = temp__5735__auto___83688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83529_83689__$1)){
var c__4556__auto___83690 = cljs.core.chunk_first.call(null,seq__83529_83689__$1);
var G__83691 = cljs.core.chunk_rest.call(null,seq__83529_83689__$1);
var G__83692 = c__4556__auto___83690;
var G__83693 = cljs.core.count.call(null,c__4556__auto___83690);
var G__83694 = (0);
seq__83529_83673 = G__83691;
chunk__83530_83674 = G__83692;
count__83531_83675 = G__83693;
i__83532_83676 = G__83694;
continue;
} else {
var component__4696__auto___83695 = cljs.core.first.call(null,seq__83529_83689__$1);
speclj.components.install.call(null,component__4696__auto___83695,description__4695__auto____$3);


var G__83696 = cljs.core.next.call(null,seq__83529_83689__$1);
var G__83697 = null;
var G__83698 = (0);
var G__83699 = (0);
seq__83529_83673 = G__83696;
chunk__83530_83674 = G__83697;
count__83531_83675 = G__83698;
i__83532_83676 = G__83699;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83527_83671);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__83518_83668 = null;
var count__83519_83669 = (0);
var i__83520_83670 = (0);
while(true){
if((i__83520_83670 < count__83519_83669)){
var component__4696__auto___83700 = cljs.core._nth.call(null,chunk__83518_83668,i__83520_83670);
speclj.components.install.call(null,component__4696__auto___83700,description__4695__auto____$2);


var G__83701 = seq__83517_83667;
var G__83702 = chunk__83518_83668;
var G__83703 = count__83519_83669;
var G__83704 = (i__83520_83670 + (1));
seq__83517_83667 = G__83701;
chunk__83518_83668 = G__83702;
count__83519_83669 = G__83703;
i__83520_83670 = G__83704;
continue;
} else {
var temp__5735__auto___83705 = cljs.core.seq.call(null,seq__83517_83667);
if(temp__5735__auto___83705){
var seq__83517_83706__$1 = temp__5735__auto___83705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83517_83706__$1)){
var c__4556__auto___83707 = cljs.core.chunk_first.call(null,seq__83517_83706__$1);
var G__83708 = cljs.core.chunk_rest.call(null,seq__83517_83706__$1);
var G__83709 = c__4556__auto___83707;
var G__83710 = cljs.core.count.call(null,c__4556__auto___83707);
var G__83711 = (0);
seq__83517_83667 = G__83708;
chunk__83518_83668 = G__83709;
count__83519_83669 = G__83710;
i__83520_83670 = G__83711;
continue;
} else {
var component__4696__auto___83712 = cljs.core.first.call(null,seq__83517_83706__$1);
speclj.components.install.call(null,component__4696__auto___83712,description__4695__auto____$2);


var G__83713 = cljs.core.next.call(null,seq__83517_83706__$1);
var G__83714 = null;
var G__83715 = (0);
var G__83716 = (0);
seq__83517_83667 = G__83713;
chunk__83518_83668 = G__83714;
count__83519_83669 = G__83715;
i__83520_83670 = G__83716;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83515_83665);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83533_83717 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83534_83718 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83534_83718);

try{var seq__83535_83719 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83545_83723 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83546_83724 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83546_83724);

try{var seq__83547_83725 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__83545_83723,_STAR_parent_description_STAR__temp_val__83546_83724,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83533_83717,_STAR_parent_description_STAR__temp_val__83534_83718,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83729 = (3);
var actual__4781__auto___83730 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___83729,actual__4781__auto___83730)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83729 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83729)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83730 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83730))," (using =)"].join('')));
}

var expected__4780__auto___83731 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___83732 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___83731,actual__4781__auto___83732)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83731 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83731)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83732 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83732))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83545_83723,_STAR_parent_description_STAR__temp_val__83546_83724,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83533_83717,_STAR_parent_description_STAR__temp_val__83534_83718,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__83545_83723,_STAR_parent_description_STAR__temp_val__83546_83724,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83533_83717,_STAR_parent_description_STAR__temp_val__83534_83718,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83733 = (2);
var actual__4781__auto___83734 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___83733,actual__4781__auto___83734)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83733 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83733)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83734 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83734))," (using =)"].join('')));
}

var expected__4780__auto___83735 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__4781__auto___83736 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___83735,actual__4781__auto___83736)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83735 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83735)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83736 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83736))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83545_83723,_STAR_parent_description_STAR__temp_val__83546_83724,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83533_83717,_STAR_parent_description_STAR__temp_val__83534_83718,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
)],null)));
var chunk__83548_83726 = null;
var count__83549_83727 = (0);
var i__83550_83728 = (0);
while(true){
if((i__83550_83728 < count__83549_83727)){
var component__4696__auto___83737 = cljs.core._nth.call(null,chunk__83548_83726,i__83550_83728);
speclj.components.install.call(null,component__4696__auto___83737,description__4695__auto____$3);


var G__83738 = seq__83547_83725;
var G__83739 = chunk__83548_83726;
var G__83740 = count__83549_83727;
var G__83741 = (i__83550_83728 + (1));
seq__83547_83725 = G__83738;
chunk__83548_83726 = G__83739;
count__83549_83727 = G__83740;
i__83550_83728 = G__83741;
continue;
} else {
var temp__5735__auto___83742 = cljs.core.seq.call(null,seq__83547_83725);
if(temp__5735__auto___83742){
var seq__83547_83743__$1 = temp__5735__auto___83742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83547_83743__$1)){
var c__4556__auto___83744 = cljs.core.chunk_first.call(null,seq__83547_83743__$1);
var G__83745 = cljs.core.chunk_rest.call(null,seq__83547_83743__$1);
var G__83746 = c__4556__auto___83744;
var G__83747 = cljs.core.count.call(null,c__4556__auto___83744);
var G__83748 = (0);
seq__83547_83725 = G__83745;
chunk__83548_83726 = G__83746;
count__83549_83727 = G__83747;
i__83550_83728 = G__83748;
continue;
} else {
var component__4696__auto___83749 = cljs.core.first.call(null,seq__83547_83743__$1);
speclj.components.install.call(null,component__4696__auto___83749,description__4695__auto____$3);


var G__83750 = cljs.core.next.call(null,seq__83547_83743__$1);
var G__83751 = null;
var G__83752 = (0);
var G__83753 = (0);
seq__83547_83725 = G__83750;
chunk__83548_83726 = G__83751;
count__83549_83727 = G__83752;
i__83550_83728 = G__83753;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83545_83723);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__83536_83720 = null;
var count__83537_83721 = (0);
var i__83538_83722 = (0);
while(true){
if((i__83538_83722 < count__83537_83721)){
var component__4696__auto___83754 = cljs.core._nth.call(null,chunk__83536_83720,i__83538_83722);
speclj.components.install.call(null,component__4696__auto___83754,description__4695__auto____$2);


var G__83755 = seq__83535_83719;
var G__83756 = chunk__83536_83720;
var G__83757 = count__83537_83721;
var G__83758 = (i__83538_83722 + (1));
seq__83535_83719 = G__83755;
chunk__83536_83720 = G__83756;
count__83537_83721 = G__83757;
i__83538_83722 = G__83758;
continue;
} else {
var temp__5735__auto___83759 = cljs.core.seq.call(null,seq__83535_83719);
if(temp__5735__auto___83759){
var seq__83535_83760__$1 = temp__5735__auto___83759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83535_83760__$1)){
var c__4556__auto___83761 = cljs.core.chunk_first.call(null,seq__83535_83760__$1);
var G__83762 = cljs.core.chunk_rest.call(null,seq__83535_83760__$1);
var G__83763 = c__4556__auto___83761;
var G__83764 = cljs.core.count.call(null,c__4556__auto___83761);
var G__83765 = (0);
seq__83535_83719 = G__83762;
chunk__83536_83720 = G__83763;
count__83537_83721 = G__83764;
i__83538_83722 = G__83765;
continue;
} else {
var component__4696__auto___83766 = cljs.core.first.call(null,seq__83535_83760__$1);
speclj.components.install.call(null,component__4696__auto___83766,description__4695__auto____$2);


var G__83767 = cljs.core.next.call(null,seq__83535_83760__$1);
var G__83768 = null;
var G__83769 = (0);
var G__83770 = (0);
seq__83535_83719 = G__83767;
chunk__83536_83720 = G__83768;
count__83537_83721 = G__83769;
i__83538_83722 = G__83770;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83533_83717);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83551_83771 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83552_83772 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83552_83772);

try{var seq__83553_83773 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__83563_83777 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83564_83778 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83564_83778);

try{var seq__83565_83779 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__83563_83777,_STAR_parent_description_STAR__temp_val__83564_83778,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83551_83771,_STAR_parent_description_STAR__temp_val__83552_83772,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83783 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___83784 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___83783,actual__4781__auto___83784)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83783 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83783)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83784 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83784))," (using =)"].join('')));
}

var expected__4780__auto___83785 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___83786 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___83785,actual__4781__auto___83786)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83785 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83785)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83786 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83786))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83563_83777,_STAR_parent_description_STAR__temp_val__83564_83778,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83551_83771,_STAR_parent_description_STAR__temp_val__83552_83772,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__83563_83777,_STAR_parent_description_STAR__temp_val__83564_83778,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83551_83771,_STAR_parent_description_STAR__temp_val__83552_83772,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___83787 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___83788 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___83787,actual__4781__auto___83788)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83787 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83787)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83788 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83788))," (using =)"].join('')));
}

var expected__4780__auto___83789 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___83790 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___83789,actual__4781__auto___83790)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83789 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83789)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83790 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83790))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83563_83777,_STAR_parent_description_STAR__temp_val__83564_83778,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__83551_83771,_STAR_parent_description_STAR__temp_val__83552_83772,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__83407_83576,_STAR_parent_description_STAR__temp_val__83408_83577,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83239_83570,_STAR_parent_description_STAR__temp_val__83240_83571,description__4695__auto___83569))
)],null)));
var chunk__83566_83780 = null;
var count__83567_83781 = (0);
var i__83568_83782 = (0);
while(true){
if((i__83568_83782 < count__83567_83781)){
var component__4696__auto___83791 = cljs.core._nth.call(null,chunk__83566_83780,i__83568_83782);
speclj.components.install.call(null,component__4696__auto___83791,description__4695__auto____$3);


var G__83792 = seq__83565_83779;
var G__83793 = chunk__83566_83780;
var G__83794 = count__83567_83781;
var G__83795 = (i__83568_83782 + (1));
seq__83565_83779 = G__83792;
chunk__83566_83780 = G__83793;
count__83567_83781 = G__83794;
i__83568_83782 = G__83795;
continue;
} else {
var temp__5735__auto___83796 = cljs.core.seq.call(null,seq__83565_83779);
if(temp__5735__auto___83796){
var seq__83565_83797__$1 = temp__5735__auto___83796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83565_83797__$1)){
var c__4556__auto___83798 = cljs.core.chunk_first.call(null,seq__83565_83797__$1);
var G__83799 = cljs.core.chunk_rest.call(null,seq__83565_83797__$1);
var G__83800 = c__4556__auto___83798;
var G__83801 = cljs.core.count.call(null,c__4556__auto___83798);
var G__83802 = (0);
seq__83565_83779 = G__83799;
chunk__83566_83780 = G__83800;
count__83567_83781 = G__83801;
i__83568_83782 = G__83802;
continue;
} else {
var component__4696__auto___83803 = cljs.core.first.call(null,seq__83565_83797__$1);
speclj.components.install.call(null,component__4696__auto___83803,description__4695__auto____$3);


var G__83804 = cljs.core.next.call(null,seq__83565_83797__$1);
var G__83805 = null;
var G__83806 = (0);
var G__83807 = (0);
seq__83565_83779 = G__83804;
chunk__83566_83780 = G__83805;
count__83567_83781 = G__83806;
i__83568_83782 = G__83807;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83563_83777);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__83554_83774 = null;
var count__83555_83775 = (0);
var i__83556_83776 = (0);
while(true){
if((i__83556_83776 < count__83555_83775)){
var component__4696__auto___83808 = cljs.core._nth.call(null,chunk__83554_83774,i__83556_83776);
speclj.components.install.call(null,component__4696__auto___83808,description__4695__auto____$2);


var G__83809 = seq__83553_83773;
var G__83810 = chunk__83554_83774;
var G__83811 = count__83555_83775;
var G__83812 = (i__83556_83776 + (1));
seq__83553_83773 = G__83809;
chunk__83554_83774 = G__83810;
count__83555_83775 = G__83811;
i__83556_83776 = G__83812;
continue;
} else {
var temp__5735__auto___83813 = cljs.core.seq.call(null,seq__83553_83773);
if(temp__5735__auto___83813){
var seq__83553_83814__$1 = temp__5735__auto___83813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83553_83814__$1)){
var c__4556__auto___83815 = cljs.core.chunk_first.call(null,seq__83553_83814__$1);
var G__83816 = cljs.core.chunk_rest.call(null,seq__83553_83814__$1);
var G__83817 = c__4556__auto___83815;
var G__83818 = cljs.core.count.call(null,c__4556__auto___83815);
var G__83819 = (0);
seq__83553_83773 = G__83816;
chunk__83554_83774 = G__83817;
count__83555_83775 = G__83818;
i__83556_83776 = G__83819;
continue;
} else {
var component__4696__auto___83820 = cljs.core.first.call(null,seq__83553_83814__$1);
speclj.components.install.call(null,component__4696__auto___83820,description__4695__auto____$2);


var G__83821 = cljs.core.next.call(null,seq__83553_83814__$1);
var G__83822 = null;
var G__83823 = (0);
var G__83824 = (0);
seq__83553_83773 = G__83821;
chunk__83554_83774 = G__83822;
count__83555_83775 = G__83823;
i__83556_83776 = G__83824;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83551_83771);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})()],null)));
var chunk__83410_83579 = null;
var count__83411_83580 = (0);
var i__83412_83581 = (0);
while(true){
if((i__83412_83581 < count__83411_83580)){
var component__4696__auto___83825 = cljs.core._nth.call(null,chunk__83410_83579,i__83412_83581);
speclj.components.install.call(null,component__4696__auto___83825,description__4695__auto____$1);


var G__83826 = seq__83409_83578;
var G__83827 = chunk__83410_83579;
var G__83828 = count__83411_83580;
var G__83829 = (i__83412_83581 + (1));
seq__83409_83578 = G__83826;
chunk__83410_83579 = G__83827;
count__83411_83580 = G__83828;
i__83412_83581 = G__83829;
continue;
} else {
var temp__5735__auto___83830 = cljs.core.seq.call(null,seq__83409_83578);
if(temp__5735__auto___83830){
var seq__83409_83831__$1 = temp__5735__auto___83830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83409_83831__$1)){
var c__4556__auto___83832 = cljs.core.chunk_first.call(null,seq__83409_83831__$1);
var G__83833 = cljs.core.chunk_rest.call(null,seq__83409_83831__$1);
var G__83834 = c__4556__auto___83832;
var G__83835 = cljs.core.count.call(null,c__4556__auto___83832);
var G__83836 = (0);
seq__83409_83578 = G__83833;
chunk__83410_83579 = G__83834;
count__83411_83580 = G__83835;
i__83412_83581 = G__83836;
continue;
} else {
var component__4696__auto___83837 = cljs.core.first.call(null,seq__83409_83831__$1);
speclj.components.install.call(null,component__4696__auto___83837,description__4695__auto____$1);


var G__83838 = cljs.core.next.call(null,seq__83409_83831__$1);
var G__83839 = null;
var G__83840 = (0);
var G__83841 = (0);
seq__83409_83578 = G__83838;
chunk__83410_83579 = G__83839;
count__83411_83580 = G__83840;
i__83412_83581 = G__83841;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83407_83576);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__83242_83573 = null;
var count__83243_83574 = (0);
var i__83244_83575 = (0);
while(true){
if((i__83244_83575 < count__83243_83574)){
var component__4696__auto___83842 = cljs.core._nth.call(null,chunk__83242_83573,i__83244_83575);
speclj.components.install.call(null,component__4696__auto___83842,description__4695__auto___83569);


var G__83843 = seq__83241_83572;
var G__83844 = chunk__83242_83573;
var G__83845 = count__83243_83574;
var G__83846 = (i__83244_83575 + (1));
seq__83241_83572 = G__83843;
chunk__83242_83573 = G__83844;
count__83243_83574 = G__83845;
i__83244_83575 = G__83846;
continue;
} else {
var temp__5735__auto___83847 = cljs.core.seq.call(null,seq__83241_83572);
if(temp__5735__auto___83847){
var seq__83241_83848__$1 = temp__5735__auto___83847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83241_83848__$1)){
var c__4556__auto___83849 = cljs.core.chunk_first.call(null,seq__83241_83848__$1);
var G__83850 = cljs.core.chunk_rest.call(null,seq__83241_83848__$1);
var G__83851 = c__4556__auto___83849;
var G__83852 = cljs.core.count.call(null,c__4556__auto___83849);
var G__83853 = (0);
seq__83241_83572 = G__83850;
chunk__83242_83573 = G__83851;
count__83243_83574 = G__83852;
i__83244_83575 = G__83853;
continue;
} else {
var component__4696__auto___83854 = cljs.core.first.call(null,seq__83241_83848__$1);
speclj.components.install.call(null,component__4696__auto___83854,description__4695__auto___83569);


var G__83855 = cljs.core.next.call(null,seq__83241_83848__$1);
var G__83856 = null;
var G__83857 = (0);
var G__83858 = (0);
seq__83241_83572 = G__83855;
chunk__83242_83573 = G__83856;
count__83243_83574 = G__83857;
i__83244_83575 = G__83858;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83239_83570);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___83569);
}


//# sourceMappingURL=setup_spec.js.map
