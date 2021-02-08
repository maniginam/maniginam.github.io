// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___42659 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42329_42660 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42330_42661 = description__5972__auto___42659;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42330_42661);

try{var seq__42331_42662 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42497_42666 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42498_42667 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42498_42667);

try{var seq__42499_42668 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42581_42672 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42582_42673 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42582_42673);

try{var seq__42583_42674 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__42581_42672,_STAR_parent_description_STAR__temp_val__42582_42673,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__6058__auto__ = status;
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42581_42672,_STAR_parent_description_STAR__temp_val__42582_42673,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__42581_42672,_STAR_parent_description_STAR__temp_val__42582_42673,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42581_42672,_STAR_parent_description_STAR__temp_val__42582_42673,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
)],null)));
var chunk__42584_42675 = null;
var count__42585_42676 = (0);
var i__42586_42677 = (0);
while(true){
if((i__42586_42677 < count__42585_42676)){
var component__5973__auto___42678 = cljs.core._nth.call(null,chunk__42584_42675,i__42586_42677);
speclj.components.install.call(null,component__5973__auto___42678,description__5972__auto____$2);


var G__42679 = seq__42583_42674;
var G__42680 = chunk__42584_42675;
var G__42681 = count__42585_42676;
var G__42682 = (i__42586_42677 + (1));
seq__42583_42674 = G__42679;
chunk__42584_42675 = G__42680;
count__42585_42676 = G__42681;
i__42586_42677 = G__42682;
continue;
} else {
var temp__5735__auto___42683 = cljs.core.seq.call(null,seq__42583_42674);
if(temp__5735__auto___42683){
var seq__42583_42684__$1 = temp__5735__auto___42683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42583_42684__$1)){
var c__4556__auto___42685 = cljs.core.chunk_first.call(null,seq__42583_42684__$1);
var G__42686 = cljs.core.chunk_rest.call(null,seq__42583_42684__$1);
var G__42687 = c__4556__auto___42685;
var G__42688 = cljs.core.count.call(null,c__4556__auto___42685);
var G__42689 = (0);
seq__42583_42674 = G__42686;
chunk__42584_42675 = G__42687;
count__42585_42676 = G__42688;
i__42586_42677 = G__42689;
continue;
} else {
var component__5973__auto___42690 = cljs.core.first.call(null,seq__42583_42684__$1);
speclj.components.install.call(null,component__5973__auto___42690,description__5972__auto____$2);


var G__42691 = cljs.core.next.call(null,seq__42583_42684__$1);
var G__42692 = null;
var G__42693 = (0);
var G__42694 = (0);
seq__42583_42674 = G__42691;
chunk__42584_42675 = G__42692;
count__42585_42676 = G__42693;
i__42586_42677 = G__42694;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42581_42672);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42587_42695 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42588_42696 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42588_42696);

try{var seq__42589_42697 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42599_42701 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42600_42702 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42600_42702);

try{var seq__42601_42703 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42707 = (0);
var actual__6058__auto___42708 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42707,actual__6058__auto___42708)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42707 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42707)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42708 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42708))," (using =)"].join('')));
}

var expected__6057__auto___42709 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___42710 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42709,actual__6058__auto___42710)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42709 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42709)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42710 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42710))," (using =)"].join('')));
}

var expected__6057__auto___42711 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___42712 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42711,actual__6058__auto___42712)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42711 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42711)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42712 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42712))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42713 = (1);
var actual__6058__auto___42714 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42713,actual__6058__auto___42714)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42713 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42713)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42714 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42714))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42715 = (2);
var actual__6058__auto___42716 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42715,actual__6058__auto___42716)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42715 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42715)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42716 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42716))," (using =)"].join('')));
}

var expected__6057__auto___42717 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___42718 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42717,actual__6058__auto___42718)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42717 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42717)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42718 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42718))," (using =)"].join('')));
}

var expected__6057__auto___42719 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___42720 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto___42719,actual__6058__auto___42720)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42719 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42719)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42720 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42720))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42599_42701,_STAR_parent_description_STAR__temp_val__42600_42702,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42587_42695,_STAR_parent_description_STAR__temp_val__42588_42696,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
)],null)));
var chunk__42602_42704 = null;
var count__42603_42705 = (0);
var i__42604_42706 = (0);
while(true){
if((i__42604_42706 < count__42603_42705)){
var component__5973__auto___42721 = cljs.core._nth.call(null,chunk__42602_42704,i__42604_42706);
speclj.components.install.call(null,component__5973__auto___42721,description__5972__auto____$3);


var G__42722 = seq__42601_42703;
var G__42723 = chunk__42602_42704;
var G__42724 = count__42603_42705;
var G__42725 = (i__42604_42706 + (1));
seq__42601_42703 = G__42722;
chunk__42602_42704 = G__42723;
count__42603_42705 = G__42724;
i__42604_42706 = G__42725;
continue;
} else {
var temp__5735__auto___42726 = cljs.core.seq.call(null,seq__42601_42703);
if(temp__5735__auto___42726){
var seq__42601_42727__$1 = temp__5735__auto___42726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42601_42727__$1)){
var c__4556__auto___42728 = cljs.core.chunk_first.call(null,seq__42601_42727__$1);
var G__42729 = cljs.core.chunk_rest.call(null,seq__42601_42727__$1);
var G__42730 = c__4556__auto___42728;
var G__42731 = cljs.core.count.call(null,c__4556__auto___42728);
var G__42732 = (0);
seq__42601_42703 = G__42729;
chunk__42602_42704 = G__42730;
count__42603_42705 = G__42731;
i__42604_42706 = G__42732;
continue;
} else {
var component__5973__auto___42733 = cljs.core.first.call(null,seq__42601_42727__$1);
speclj.components.install.call(null,component__5973__auto___42733,description__5972__auto____$3);


var G__42734 = cljs.core.next.call(null,seq__42601_42727__$1);
var G__42735 = null;
var G__42736 = (0);
var G__42737 = (0);
seq__42601_42703 = G__42734;
chunk__42602_42704 = G__42735;
count__42603_42705 = G__42736;
i__42604_42706 = G__42737;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42599_42701);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__42590_42698 = null;
var count__42591_42699 = (0);
var i__42592_42700 = (0);
while(true){
if((i__42592_42700 < count__42591_42699)){
var component__5973__auto___42738 = cljs.core._nth.call(null,chunk__42590_42698,i__42592_42700);
speclj.components.install.call(null,component__5973__auto___42738,description__5972__auto____$2);


var G__42739 = seq__42589_42697;
var G__42740 = chunk__42590_42698;
var G__42741 = count__42591_42699;
var G__42742 = (i__42592_42700 + (1));
seq__42589_42697 = G__42739;
chunk__42590_42698 = G__42740;
count__42591_42699 = G__42741;
i__42592_42700 = G__42742;
continue;
} else {
var temp__5735__auto___42743 = cljs.core.seq.call(null,seq__42589_42697);
if(temp__5735__auto___42743){
var seq__42589_42744__$1 = temp__5735__auto___42743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42589_42744__$1)){
var c__4556__auto___42745 = cljs.core.chunk_first.call(null,seq__42589_42744__$1);
var G__42746 = cljs.core.chunk_rest.call(null,seq__42589_42744__$1);
var G__42747 = c__4556__auto___42745;
var G__42748 = cljs.core.count.call(null,c__4556__auto___42745);
var G__42749 = (0);
seq__42589_42697 = G__42746;
chunk__42590_42698 = G__42747;
count__42591_42699 = G__42748;
i__42592_42700 = G__42749;
continue;
} else {
var component__5973__auto___42750 = cljs.core.first.call(null,seq__42589_42744__$1);
speclj.components.install.call(null,component__5973__auto___42750,description__5972__auto____$2);


var G__42751 = cljs.core.next.call(null,seq__42589_42744__$1);
var G__42752 = null;
var G__42753 = (0);
var G__42754 = (0);
seq__42589_42697 = G__42751;
chunk__42590_42698 = G__42752;
count__42591_42699 = G__42753;
i__42592_42700 = G__42754;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42587_42695);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42605_42755 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42606_42756 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42606_42756);

try{var seq__42607_42757 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42617_42761 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42618_42762 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42618_42762);

try{var seq__42619_42763 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42767 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__6058__auto___42768 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto___42767,actual__6058__auto___42768)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42767 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42767)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42768 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42768))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42769 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__6058__auto___42770 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto___42769,actual__6058__auto___42770)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42769 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42769)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42770 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42770))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42771 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__6058__auto___42772 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto___42771,actual__6058__auto___42772)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42771 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42771)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42772 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42772))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42617_42761,_STAR_parent_description_STAR__temp_val__42618_42762,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42605_42755,_STAR_parent_description_STAR__temp_val__42606_42756,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
)],null)));
var chunk__42620_42764 = null;
var count__42621_42765 = (0);
var i__42622_42766 = (0);
while(true){
if((i__42622_42766 < count__42621_42765)){
var component__5973__auto___42773 = cljs.core._nth.call(null,chunk__42620_42764,i__42622_42766);
speclj.components.install.call(null,component__5973__auto___42773,description__5972__auto____$3);


var G__42774 = seq__42619_42763;
var G__42775 = chunk__42620_42764;
var G__42776 = count__42621_42765;
var G__42777 = (i__42622_42766 + (1));
seq__42619_42763 = G__42774;
chunk__42620_42764 = G__42775;
count__42621_42765 = G__42776;
i__42622_42766 = G__42777;
continue;
} else {
var temp__5735__auto___42778 = cljs.core.seq.call(null,seq__42619_42763);
if(temp__5735__auto___42778){
var seq__42619_42779__$1 = temp__5735__auto___42778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42619_42779__$1)){
var c__4556__auto___42780 = cljs.core.chunk_first.call(null,seq__42619_42779__$1);
var G__42781 = cljs.core.chunk_rest.call(null,seq__42619_42779__$1);
var G__42782 = c__4556__auto___42780;
var G__42783 = cljs.core.count.call(null,c__4556__auto___42780);
var G__42784 = (0);
seq__42619_42763 = G__42781;
chunk__42620_42764 = G__42782;
count__42621_42765 = G__42783;
i__42622_42766 = G__42784;
continue;
} else {
var component__5973__auto___42785 = cljs.core.first.call(null,seq__42619_42779__$1);
speclj.components.install.call(null,component__5973__auto___42785,description__5972__auto____$3);


var G__42786 = cljs.core.next.call(null,seq__42619_42779__$1);
var G__42787 = null;
var G__42788 = (0);
var G__42789 = (0);
seq__42619_42763 = G__42786;
chunk__42620_42764 = G__42787;
count__42621_42765 = G__42788;
i__42622_42766 = G__42789;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42617_42761);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__42608_42758 = null;
var count__42609_42759 = (0);
var i__42610_42760 = (0);
while(true){
if((i__42610_42760 < count__42609_42759)){
var component__5973__auto___42790 = cljs.core._nth.call(null,chunk__42608_42758,i__42610_42760);
speclj.components.install.call(null,component__5973__auto___42790,description__5972__auto____$2);


var G__42791 = seq__42607_42757;
var G__42792 = chunk__42608_42758;
var G__42793 = count__42609_42759;
var G__42794 = (i__42610_42760 + (1));
seq__42607_42757 = G__42791;
chunk__42608_42758 = G__42792;
count__42609_42759 = G__42793;
i__42610_42760 = G__42794;
continue;
} else {
var temp__5735__auto___42795 = cljs.core.seq.call(null,seq__42607_42757);
if(temp__5735__auto___42795){
var seq__42607_42796__$1 = temp__5735__auto___42795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42607_42796__$1)){
var c__4556__auto___42797 = cljs.core.chunk_first.call(null,seq__42607_42796__$1);
var G__42798 = cljs.core.chunk_rest.call(null,seq__42607_42796__$1);
var G__42799 = c__4556__auto___42797;
var G__42800 = cljs.core.count.call(null,c__4556__auto___42797);
var G__42801 = (0);
seq__42607_42757 = G__42798;
chunk__42608_42758 = G__42799;
count__42609_42759 = G__42800;
i__42610_42760 = G__42801;
continue;
} else {
var component__5973__auto___42802 = cljs.core.first.call(null,seq__42607_42796__$1);
speclj.components.install.call(null,component__5973__auto___42802,description__5972__auto____$2);


var G__42803 = cljs.core.next.call(null,seq__42607_42796__$1);
var G__42804 = null;
var G__42805 = (0);
var G__42806 = (0);
seq__42607_42757 = G__42803;
chunk__42608_42758 = G__42804;
count__42609_42759 = G__42805;
i__42610_42760 = G__42806;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42605_42755);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42623_42807 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42624_42808 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42624_42808);

try{var seq__42625_42809 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42635_42813 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42636_42814 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42636_42814);

try{var seq__42637_42815 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__42635_42813,_STAR_parent_description_STAR__temp_val__42636_42814,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42623_42807,_STAR_parent_description_STAR__temp_val__42624_42808,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42819 = (3);
var actual__6058__auto___42820 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___42819,actual__6058__auto___42820)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42819 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42819)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42820 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42820))," (using =)"].join('')));
}

var expected__6057__auto___42821 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__6058__auto___42822 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto___42821,actual__6058__auto___42822)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42821 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42821)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42822 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42822))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42635_42813,_STAR_parent_description_STAR__temp_val__42636_42814,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42623_42807,_STAR_parent_description_STAR__temp_val__42624_42808,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__42635_42813,_STAR_parent_description_STAR__temp_val__42636_42814,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42623_42807,_STAR_parent_description_STAR__temp_val__42624_42808,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42823 = (2);
var actual__6058__auto___42824 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___42823,actual__6058__auto___42824)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42823 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42823)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42824 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42824))," (using =)"].join('')));
}

var expected__6057__auto___42825 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__6058__auto___42826 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto___42825,actual__6058__auto___42826)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42825 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42825)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42826 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42826))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42635_42813,_STAR_parent_description_STAR__temp_val__42636_42814,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42623_42807,_STAR_parent_description_STAR__temp_val__42624_42808,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
)],null)));
var chunk__42638_42816 = null;
var count__42639_42817 = (0);
var i__42640_42818 = (0);
while(true){
if((i__42640_42818 < count__42639_42817)){
var component__5973__auto___42827 = cljs.core._nth.call(null,chunk__42638_42816,i__42640_42818);
speclj.components.install.call(null,component__5973__auto___42827,description__5972__auto____$3);


var G__42828 = seq__42637_42815;
var G__42829 = chunk__42638_42816;
var G__42830 = count__42639_42817;
var G__42831 = (i__42640_42818 + (1));
seq__42637_42815 = G__42828;
chunk__42638_42816 = G__42829;
count__42639_42817 = G__42830;
i__42640_42818 = G__42831;
continue;
} else {
var temp__5735__auto___42832 = cljs.core.seq.call(null,seq__42637_42815);
if(temp__5735__auto___42832){
var seq__42637_42833__$1 = temp__5735__auto___42832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42637_42833__$1)){
var c__4556__auto___42834 = cljs.core.chunk_first.call(null,seq__42637_42833__$1);
var G__42835 = cljs.core.chunk_rest.call(null,seq__42637_42833__$1);
var G__42836 = c__4556__auto___42834;
var G__42837 = cljs.core.count.call(null,c__4556__auto___42834);
var G__42838 = (0);
seq__42637_42815 = G__42835;
chunk__42638_42816 = G__42836;
count__42639_42817 = G__42837;
i__42640_42818 = G__42838;
continue;
} else {
var component__5973__auto___42839 = cljs.core.first.call(null,seq__42637_42833__$1);
speclj.components.install.call(null,component__5973__auto___42839,description__5972__auto____$3);


var G__42840 = cljs.core.next.call(null,seq__42637_42833__$1);
var G__42841 = null;
var G__42842 = (0);
var G__42843 = (0);
seq__42637_42815 = G__42840;
chunk__42638_42816 = G__42841;
count__42639_42817 = G__42842;
i__42640_42818 = G__42843;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42635_42813);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__42626_42810 = null;
var count__42627_42811 = (0);
var i__42628_42812 = (0);
while(true){
if((i__42628_42812 < count__42627_42811)){
var component__5973__auto___42844 = cljs.core._nth.call(null,chunk__42626_42810,i__42628_42812);
speclj.components.install.call(null,component__5973__auto___42844,description__5972__auto____$2);


var G__42845 = seq__42625_42809;
var G__42846 = chunk__42626_42810;
var G__42847 = count__42627_42811;
var G__42848 = (i__42628_42812 + (1));
seq__42625_42809 = G__42845;
chunk__42626_42810 = G__42846;
count__42627_42811 = G__42847;
i__42628_42812 = G__42848;
continue;
} else {
var temp__5735__auto___42849 = cljs.core.seq.call(null,seq__42625_42809);
if(temp__5735__auto___42849){
var seq__42625_42850__$1 = temp__5735__auto___42849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42625_42850__$1)){
var c__4556__auto___42851 = cljs.core.chunk_first.call(null,seq__42625_42850__$1);
var G__42852 = cljs.core.chunk_rest.call(null,seq__42625_42850__$1);
var G__42853 = c__4556__auto___42851;
var G__42854 = cljs.core.count.call(null,c__4556__auto___42851);
var G__42855 = (0);
seq__42625_42809 = G__42852;
chunk__42626_42810 = G__42853;
count__42627_42811 = G__42854;
i__42628_42812 = G__42855;
continue;
} else {
var component__5973__auto___42856 = cljs.core.first.call(null,seq__42625_42850__$1);
speclj.components.install.call(null,component__5973__auto___42856,description__5972__auto____$2);


var G__42857 = cljs.core.next.call(null,seq__42625_42850__$1);
var G__42858 = null;
var G__42859 = (0);
var G__42860 = (0);
seq__42625_42809 = G__42857;
chunk__42626_42810 = G__42858;
count__42627_42811 = G__42859;
i__42628_42812 = G__42860;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42623_42807);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})(),(function (){var description__5972__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42641_42861 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42642_42862 = description__5972__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42642_42862);

try{var seq__42643_42863 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__42653_42867 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42654_42868 = description__5972__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42654_42868);

try{var seq__42655_42869 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__42653_42867,_STAR_parent_description_STAR__temp_val__42654_42868,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42641_42861,_STAR_parent_description_STAR__temp_val__42642_42862,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42873 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___42874 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___42873,actual__6058__auto___42874)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42873 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42873)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42874 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42874))," (using =)"].join('')));
}

var expected__6057__auto___42875 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___42876 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto___42875,actual__6058__auto___42876)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42875 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42875)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42876 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42876))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42653_42867,_STAR_parent_description_STAR__temp_val__42654_42868,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42641_42861,_STAR_parent_description_STAR__temp_val__42642_42862,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__42653_42867,_STAR_parent_description_STAR__temp_val__42654_42868,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42641_42861,_STAR_parent_description_STAR__temp_val__42642_42862,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__6057__auto___42877 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__6058__auto___42878 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___42877,actual__6058__auto___42878)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42877 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42877)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42878 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42878))," (using =)"].join('')));
}

var expected__6057__auto___42879 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__6058__auto___42880 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto___42879,actual__6058__auto___42880)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42879 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42879)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42880 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42880))," (using =)"].join('')));
}

var expected__6057__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__6058__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42653_42867,_STAR_parent_description_STAR__temp_val__42654_42868,description__5972__auto____$3,_STAR_parent_description_STAR__orig_val__42641_42861,_STAR_parent_description_STAR__temp_val__42642_42862,description__5972__auto____$2,_STAR_parent_description_STAR__orig_val__42497_42666,_STAR_parent_description_STAR__temp_val__42498_42667,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42329_42660,_STAR_parent_description_STAR__temp_val__42330_42661,description__5972__auto___42659))
)],null)));
var chunk__42656_42870 = null;
var count__42657_42871 = (0);
var i__42658_42872 = (0);
while(true){
if((i__42658_42872 < count__42657_42871)){
var component__5973__auto___42881 = cljs.core._nth.call(null,chunk__42656_42870,i__42658_42872);
speclj.components.install.call(null,component__5973__auto___42881,description__5972__auto____$3);


var G__42882 = seq__42655_42869;
var G__42883 = chunk__42656_42870;
var G__42884 = count__42657_42871;
var G__42885 = (i__42658_42872 + (1));
seq__42655_42869 = G__42882;
chunk__42656_42870 = G__42883;
count__42657_42871 = G__42884;
i__42658_42872 = G__42885;
continue;
} else {
var temp__5735__auto___42886 = cljs.core.seq.call(null,seq__42655_42869);
if(temp__5735__auto___42886){
var seq__42655_42887__$1 = temp__5735__auto___42886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42655_42887__$1)){
var c__4556__auto___42888 = cljs.core.chunk_first.call(null,seq__42655_42887__$1);
var G__42889 = cljs.core.chunk_rest.call(null,seq__42655_42887__$1);
var G__42890 = c__4556__auto___42888;
var G__42891 = cljs.core.count.call(null,c__4556__auto___42888);
var G__42892 = (0);
seq__42655_42869 = G__42889;
chunk__42656_42870 = G__42890;
count__42657_42871 = G__42891;
i__42658_42872 = G__42892;
continue;
} else {
var component__5973__auto___42893 = cljs.core.first.call(null,seq__42655_42887__$1);
speclj.components.install.call(null,component__5973__auto___42893,description__5972__auto____$3);


var G__42894 = cljs.core.next.call(null,seq__42655_42887__$1);
var G__42895 = null;
var G__42896 = (0);
var G__42897 = (0);
seq__42655_42869 = G__42894;
chunk__42656_42870 = G__42895;
count__42657_42871 = G__42896;
i__42658_42872 = G__42897;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42653_42867);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$3);
}

return description__5972__auto____$3;
})()],null)));
var chunk__42644_42864 = null;
var count__42645_42865 = (0);
var i__42646_42866 = (0);
while(true){
if((i__42646_42866 < count__42645_42865)){
var component__5973__auto___42898 = cljs.core._nth.call(null,chunk__42644_42864,i__42646_42866);
speclj.components.install.call(null,component__5973__auto___42898,description__5972__auto____$2);


var G__42899 = seq__42643_42863;
var G__42900 = chunk__42644_42864;
var G__42901 = count__42645_42865;
var G__42902 = (i__42646_42866 + (1));
seq__42643_42863 = G__42899;
chunk__42644_42864 = G__42900;
count__42645_42865 = G__42901;
i__42646_42866 = G__42902;
continue;
} else {
var temp__5735__auto___42903 = cljs.core.seq.call(null,seq__42643_42863);
if(temp__5735__auto___42903){
var seq__42643_42904__$1 = temp__5735__auto___42903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42643_42904__$1)){
var c__4556__auto___42905 = cljs.core.chunk_first.call(null,seq__42643_42904__$1);
var G__42906 = cljs.core.chunk_rest.call(null,seq__42643_42904__$1);
var G__42907 = c__4556__auto___42905;
var G__42908 = cljs.core.count.call(null,c__4556__auto___42905);
var G__42909 = (0);
seq__42643_42863 = G__42906;
chunk__42644_42864 = G__42907;
count__42645_42865 = G__42908;
i__42646_42866 = G__42909;
continue;
} else {
var component__5973__auto___42910 = cljs.core.first.call(null,seq__42643_42904__$1);
speclj.components.install.call(null,component__5973__auto___42910,description__5972__auto____$2);


var G__42911 = cljs.core.next.call(null,seq__42643_42904__$1);
var G__42912 = null;
var G__42913 = (0);
var G__42914 = (0);
seq__42643_42863 = G__42911;
chunk__42644_42864 = G__42912;
count__42645_42865 = G__42913;
i__42646_42866 = G__42914;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42641_42861);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$2);
}

return description__5972__auto____$2;
})()],null)));
var chunk__42500_42669 = null;
var count__42501_42670 = (0);
var i__42502_42671 = (0);
while(true){
if((i__42502_42671 < count__42501_42670)){
var component__5973__auto___42915 = cljs.core._nth.call(null,chunk__42500_42669,i__42502_42671);
speclj.components.install.call(null,component__5973__auto___42915,description__5972__auto____$1);


var G__42916 = seq__42499_42668;
var G__42917 = chunk__42500_42669;
var G__42918 = count__42501_42670;
var G__42919 = (i__42502_42671 + (1));
seq__42499_42668 = G__42916;
chunk__42500_42669 = G__42917;
count__42501_42670 = G__42918;
i__42502_42671 = G__42919;
continue;
} else {
var temp__5735__auto___42920 = cljs.core.seq.call(null,seq__42499_42668);
if(temp__5735__auto___42920){
var seq__42499_42921__$1 = temp__5735__auto___42920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42499_42921__$1)){
var c__4556__auto___42922 = cljs.core.chunk_first.call(null,seq__42499_42921__$1);
var G__42923 = cljs.core.chunk_rest.call(null,seq__42499_42921__$1);
var G__42924 = c__4556__auto___42922;
var G__42925 = cljs.core.count.call(null,c__4556__auto___42922);
var G__42926 = (0);
seq__42499_42668 = G__42923;
chunk__42500_42669 = G__42924;
count__42501_42670 = G__42925;
i__42502_42671 = G__42926;
continue;
} else {
var component__5973__auto___42927 = cljs.core.first.call(null,seq__42499_42921__$1);
speclj.components.install.call(null,component__5973__auto___42927,description__5972__auto____$1);


var G__42928 = cljs.core.next.call(null,seq__42499_42921__$1);
var G__42929 = null;
var G__42930 = (0);
var G__42931 = (0);
seq__42499_42668 = G__42928;
chunk__42500_42669 = G__42929;
count__42501_42670 = G__42930;
i__42502_42671 = G__42931;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42497_42666);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__42332_42663 = null;
var count__42333_42664 = (0);
var i__42334_42665 = (0);
while(true){
if((i__42334_42665 < count__42333_42664)){
var component__5973__auto___42932 = cljs.core._nth.call(null,chunk__42332_42663,i__42334_42665);
speclj.components.install.call(null,component__5973__auto___42932,description__5972__auto___42659);


var G__42933 = seq__42331_42662;
var G__42934 = chunk__42332_42663;
var G__42935 = count__42333_42664;
var G__42936 = (i__42334_42665 + (1));
seq__42331_42662 = G__42933;
chunk__42332_42663 = G__42934;
count__42333_42664 = G__42935;
i__42334_42665 = G__42936;
continue;
} else {
var temp__5735__auto___42937 = cljs.core.seq.call(null,seq__42331_42662);
if(temp__5735__auto___42937){
var seq__42331_42938__$1 = temp__5735__auto___42937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42331_42938__$1)){
var c__4556__auto___42939 = cljs.core.chunk_first.call(null,seq__42331_42938__$1);
var G__42940 = cljs.core.chunk_rest.call(null,seq__42331_42938__$1);
var G__42941 = c__4556__auto___42939;
var G__42942 = cljs.core.count.call(null,c__4556__auto___42939);
var G__42943 = (0);
seq__42331_42662 = G__42940;
chunk__42332_42663 = G__42941;
count__42333_42664 = G__42942;
i__42334_42665 = G__42943;
continue;
} else {
var component__5973__auto___42944 = cljs.core.first.call(null,seq__42331_42938__$1);
speclj.components.install.call(null,component__5973__auto___42944,description__5972__auto___42659);


var G__42945 = cljs.core.next.call(null,seq__42331_42938__$1);
var G__42946 = null;
var G__42947 = (0);
var G__42948 = (0);
seq__42331_42662 = G__42945;
chunk__42332_42663 = G__42946;
count__42333_42664 = G__42947;
i__42334_42665 = G__42948;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42329_42660);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___42659);
}


//# sourceMappingURL=setup_spec.js.map
