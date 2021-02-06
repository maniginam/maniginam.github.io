// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___12718 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12388_12719 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12389_12720 = description__4695__auto___12718;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12389_12720);

try{var seq__12390_12721 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12556_12725 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12557_12726 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12557_12726);

try{var seq__12558_12727 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12640_12731 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12641_12732 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12641_12732);

try{var seq__12642_12733 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__12640_12731,_STAR_parent_description_STAR__temp_val__12641_12732,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__4781__auto__ = status;
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12640_12731,_STAR_parent_description_STAR__temp_val__12641_12732,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__12640_12731,_STAR_parent_description_STAR__temp_val__12641_12732,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12640_12731,_STAR_parent_description_STAR__temp_val__12641_12732,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
)],null)));
var chunk__12643_12734 = null;
var count__12644_12735 = (0);
var i__12645_12736 = (0);
while(true){
if((i__12645_12736 < count__12644_12735)){
var component__4696__auto___12737 = cljs.core._nth.call(null,chunk__12643_12734,i__12645_12736);
speclj.components.install.call(null,component__4696__auto___12737,description__4695__auto____$2);


var G__12738 = seq__12642_12733;
var G__12739 = chunk__12643_12734;
var G__12740 = count__12644_12735;
var G__12741 = (i__12645_12736 + (1));
seq__12642_12733 = G__12738;
chunk__12643_12734 = G__12739;
count__12644_12735 = G__12740;
i__12645_12736 = G__12741;
continue;
} else {
var temp__5735__auto___12742 = cljs.core.seq.call(null,seq__12642_12733);
if(temp__5735__auto___12742){
var seq__12642_12743__$1 = temp__5735__auto___12742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12642_12743__$1)){
var c__4556__auto___12744 = cljs.core.chunk_first.call(null,seq__12642_12743__$1);
var G__12745 = cljs.core.chunk_rest.call(null,seq__12642_12743__$1);
var G__12746 = c__4556__auto___12744;
var G__12747 = cljs.core.count.call(null,c__4556__auto___12744);
var G__12748 = (0);
seq__12642_12733 = G__12745;
chunk__12643_12734 = G__12746;
count__12644_12735 = G__12747;
i__12645_12736 = G__12748;
continue;
} else {
var component__4696__auto___12749 = cljs.core.first.call(null,seq__12642_12743__$1);
speclj.components.install.call(null,component__4696__auto___12749,description__4695__auto____$2);


var G__12750 = cljs.core.next.call(null,seq__12642_12743__$1);
var G__12751 = null;
var G__12752 = (0);
var G__12753 = (0);
seq__12642_12733 = G__12750;
chunk__12643_12734 = G__12751;
count__12644_12735 = G__12752;
i__12645_12736 = G__12753;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12640_12731);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12646_12754 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12647_12755 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12647_12755);

try{var seq__12648_12756 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12658_12760 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12659_12761 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12659_12761);

try{var seq__12660_12762 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12766 = (0);
var actual__4781__auto___12767 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12766,actual__4781__auto___12767)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12766 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12766)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12767 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12767))," (using =)"].join('')));
}

var expected__4780__auto___12768 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___12769 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12768,actual__4781__auto___12769)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12768 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12768)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12769 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12769))," (using =)"].join('')));
}

var expected__4780__auto___12770 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___12771 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12770,actual__4781__auto___12771)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12770 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12770)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12771 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12771))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12772 = (1);
var actual__4781__auto___12773 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12772,actual__4781__auto___12773)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12772 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12772)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12773 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12773))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12774 = (2);
var actual__4781__auto___12775 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12774,actual__4781__auto___12775)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12774 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12774)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12775 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12775))," (using =)"].join('')));
}

var expected__4780__auto___12776 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___12777 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12776,actual__4781__auto___12777)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12776 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12776)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12777 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12777))," (using =)"].join('')));
}

var expected__4780__auto___12778 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___12779 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___12778,actual__4781__auto___12779)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12778 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12778)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12779 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12779))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12658_12760,_STAR_parent_description_STAR__temp_val__12659_12761,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12646_12754,_STAR_parent_description_STAR__temp_val__12647_12755,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
)],null)));
var chunk__12661_12763 = null;
var count__12662_12764 = (0);
var i__12663_12765 = (0);
while(true){
if((i__12663_12765 < count__12662_12764)){
var component__4696__auto___12780 = cljs.core._nth.call(null,chunk__12661_12763,i__12663_12765);
speclj.components.install.call(null,component__4696__auto___12780,description__4695__auto____$3);


var G__12781 = seq__12660_12762;
var G__12782 = chunk__12661_12763;
var G__12783 = count__12662_12764;
var G__12784 = (i__12663_12765 + (1));
seq__12660_12762 = G__12781;
chunk__12661_12763 = G__12782;
count__12662_12764 = G__12783;
i__12663_12765 = G__12784;
continue;
} else {
var temp__5735__auto___12785 = cljs.core.seq.call(null,seq__12660_12762);
if(temp__5735__auto___12785){
var seq__12660_12786__$1 = temp__5735__auto___12785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12660_12786__$1)){
var c__4556__auto___12787 = cljs.core.chunk_first.call(null,seq__12660_12786__$1);
var G__12788 = cljs.core.chunk_rest.call(null,seq__12660_12786__$1);
var G__12789 = c__4556__auto___12787;
var G__12790 = cljs.core.count.call(null,c__4556__auto___12787);
var G__12791 = (0);
seq__12660_12762 = G__12788;
chunk__12661_12763 = G__12789;
count__12662_12764 = G__12790;
i__12663_12765 = G__12791;
continue;
} else {
var component__4696__auto___12792 = cljs.core.first.call(null,seq__12660_12786__$1);
speclj.components.install.call(null,component__4696__auto___12792,description__4695__auto____$3);


var G__12793 = cljs.core.next.call(null,seq__12660_12786__$1);
var G__12794 = null;
var G__12795 = (0);
var G__12796 = (0);
seq__12660_12762 = G__12793;
chunk__12661_12763 = G__12794;
count__12662_12764 = G__12795;
i__12663_12765 = G__12796;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12658_12760);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__12649_12757 = null;
var count__12650_12758 = (0);
var i__12651_12759 = (0);
while(true){
if((i__12651_12759 < count__12650_12758)){
var component__4696__auto___12797 = cljs.core._nth.call(null,chunk__12649_12757,i__12651_12759);
speclj.components.install.call(null,component__4696__auto___12797,description__4695__auto____$2);


var G__12798 = seq__12648_12756;
var G__12799 = chunk__12649_12757;
var G__12800 = count__12650_12758;
var G__12801 = (i__12651_12759 + (1));
seq__12648_12756 = G__12798;
chunk__12649_12757 = G__12799;
count__12650_12758 = G__12800;
i__12651_12759 = G__12801;
continue;
} else {
var temp__5735__auto___12802 = cljs.core.seq.call(null,seq__12648_12756);
if(temp__5735__auto___12802){
var seq__12648_12803__$1 = temp__5735__auto___12802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12648_12803__$1)){
var c__4556__auto___12804 = cljs.core.chunk_first.call(null,seq__12648_12803__$1);
var G__12805 = cljs.core.chunk_rest.call(null,seq__12648_12803__$1);
var G__12806 = c__4556__auto___12804;
var G__12807 = cljs.core.count.call(null,c__4556__auto___12804);
var G__12808 = (0);
seq__12648_12756 = G__12805;
chunk__12649_12757 = G__12806;
count__12650_12758 = G__12807;
i__12651_12759 = G__12808;
continue;
} else {
var component__4696__auto___12809 = cljs.core.first.call(null,seq__12648_12803__$1);
speclj.components.install.call(null,component__4696__auto___12809,description__4695__auto____$2);


var G__12810 = cljs.core.next.call(null,seq__12648_12803__$1);
var G__12811 = null;
var G__12812 = (0);
var G__12813 = (0);
seq__12648_12756 = G__12810;
chunk__12649_12757 = G__12811;
count__12650_12758 = G__12812;
i__12651_12759 = G__12813;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12646_12754);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12664_12814 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12665_12815 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12665_12815);

try{var seq__12666_12816 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12676_12820 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12677_12821 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12677_12821);

try{var seq__12678_12822 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12826 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__4781__auto___12827 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto___12826,actual__4781__auto___12827)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12826 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12826)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12827 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12827))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12828 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__4781__auto___12829 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto___12828,actual__4781__auto___12829)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12828 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12828)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12829 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12829))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12830 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__4781__auto___12831 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto___12830,actual__4781__auto___12831)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12830 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12830)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12831 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12831))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12676_12820,_STAR_parent_description_STAR__temp_val__12677_12821,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12664_12814,_STAR_parent_description_STAR__temp_val__12665_12815,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
)],null)));
var chunk__12679_12823 = null;
var count__12680_12824 = (0);
var i__12681_12825 = (0);
while(true){
if((i__12681_12825 < count__12680_12824)){
var component__4696__auto___12832 = cljs.core._nth.call(null,chunk__12679_12823,i__12681_12825);
speclj.components.install.call(null,component__4696__auto___12832,description__4695__auto____$3);


var G__12833 = seq__12678_12822;
var G__12834 = chunk__12679_12823;
var G__12835 = count__12680_12824;
var G__12836 = (i__12681_12825 + (1));
seq__12678_12822 = G__12833;
chunk__12679_12823 = G__12834;
count__12680_12824 = G__12835;
i__12681_12825 = G__12836;
continue;
} else {
var temp__5735__auto___12837 = cljs.core.seq.call(null,seq__12678_12822);
if(temp__5735__auto___12837){
var seq__12678_12838__$1 = temp__5735__auto___12837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12678_12838__$1)){
var c__4556__auto___12839 = cljs.core.chunk_first.call(null,seq__12678_12838__$1);
var G__12840 = cljs.core.chunk_rest.call(null,seq__12678_12838__$1);
var G__12841 = c__4556__auto___12839;
var G__12842 = cljs.core.count.call(null,c__4556__auto___12839);
var G__12843 = (0);
seq__12678_12822 = G__12840;
chunk__12679_12823 = G__12841;
count__12680_12824 = G__12842;
i__12681_12825 = G__12843;
continue;
} else {
var component__4696__auto___12844 = cljs.core.first.call(null,seq__12678_12838__$1);
speclj.components.install.call(null,component__4696__auto___12844,description__4695__auto____$3);


var G__12845 = cljs.core.next.call(null,seq__12678_12838__$1);
var G__12846 = null;
var G__12847 = (0);
var G__12848 = (0);
seq__12678_12822 = G__12845;
chunk__12679_12823 = G__12846;
count__12680_12824 = G__12847;
i__12681_12825 = G__12848;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12676_12820);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__12667_12817 = null;
var count__12668_12818 = (0);
var i__12669_12819 = (0);
while(true){
if((i__12669_12819 < count__12668_12818)){
var component__4696__auto___12849 = cljs.core._nth.call(null,chunk__12667_12817,i__12669_12819);
speclj.components.install.call(null,component__4696__auto___12849,description__4695__auto____$2);


var G__12850 = seq__12666_12816;
var G__12851 = chunk__12667_12817;
var G__12852 = count__12668_12818;
var G__12853 = (i__12669_12819 + (1));
seq__12666_12816 = G__12850;
chunk__12667_12817 = G__12851;
count__12668_12818 = G__12852;
i__12669_12819 = G__12853;
continue;
} else {
var temp__5735__auto___12854 = cljs.core.seq.call(null,seq__12666_12816);
if(temp__5735__auto___12854){
var seq__12666_12855__$1 = temp__5735__auto___12854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12666_12855__$1)){
var c__4556__auto___12856 = cljs.core.chunk_first.call(null,seq__12666_12855__$1);
var G__12857 = cljs.core.chunk_rest.call(null,seq__12666_12855__$1);
var G__12858 = c__4556__auto___12856;
var G__12859 = cljs.core.count.call(null,c__4556__auto___12856);
var G__12860 = (0);
seq__12666_12816 = G__12857;
chunk__12667_12817 = G__12858;
count__12668_12818 = G__12859;
i__12669_12819 = G__12860;
continue;
} else {
var component__4696__auto___12861 = cljs.core.first.call(null,seq__12666_12855__$1);
speclj.components.install.call(null,component__4696__auto___12861,description__4695__auto____$2);


var G__12862 = cljs.core.next.call(null,seq__12666_12855__$1);
var G__12863 = null;
var G__12864 = (0);
var G__12865 = (0);
seq__12666_12816 = G__12862;
chunk__12667_12817 = G__12863;
count__12668_12818 = G__12864;
i__12669_12819 = G__12865;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12664_12814);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12682_12866 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12683_12867 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12683_12867);

try{var seq__12684_12868 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12694_12872 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12695_12873 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12695_12873);

try{var seq__12696_12874 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__12694_12872,_STAR_parent_description_STAR__temp_val__12695_12873,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12682_12866,_STAR_parent_description_STAR__temp_val__12683_12867,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12878 = (3);
var actual__4781__auto___12879 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___12878,actual__4781__auto___12879)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12878 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12878)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12879 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12879))," (using =)"].join('')));
}

var expected__4780__auto___12880 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___12881 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___12880,actual__4781__auto___12881)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12880 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12880)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12881 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12881))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12694_12872,_STAR_parent_description_STAR__temp_val__12695_12873,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12682_12866,_STAR_parent_description_STAR__temp_val__12683_12867,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__12694_12872,_STAR_parent_description_STAR__temp_val__12695_12873,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12682_12866,_STAR_parent_description_STAR__temp_val__12683_12867,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12882 = (2);
var actual__4781__auto___12883 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___12882,actual__4781__auto___12883)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12882 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12882)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12883 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12883))," (using =)"].join('')));
}

var expected__4780__auto___12884 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__4781__auto___12885 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___12884,actual__4781__auto___12885)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12884 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12884)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12885 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12885))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12694_12872,_STAR_parent_description_STAR__temp_val__12695_12873,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12682_12866,_STAR_parent_description_STAR__temp_val__12683_12867,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
)],null)));
var chunk__12697_12875 = null;
var count__12698_12876 = (0);
var i__12699_12877 = (0);
while(true){
if((i__12699_12877 < count__12698_12876)){
var component__4696__auto___12886 = cljs.core._nth.call(null,chunk__12697_12875,i__12699_12877);
speclj.components.install.call(null,component__4696__auto___12886,description__4695__auto____$3);


var G__12887 = seq__12696_12874;
var G__12888 = chunk__12697_12875;
var G__12889 = count__12698_12876;
var G__12890 = (i__12699_12877 + (1));
seq__12696_12874 = G__12887;
chunk__12697_12875 = G__12888;
count__12698_12876 = G__12889;
i__12699_12877 = G__12890;
continue;
} else {
var temp__5735__auto___12891 = cljs.core.seq.call(null,seq__12696_12874);
if(temp__5735__auto___12891){
var seq__12696_12892__$1 = temp__5735__auto___12891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12696_12892__$1)){
var c__4556__auto___12893 = cljs.core.chunk_first.call(null,seq__12696_12892__$1);
var G__12894 = cljs.core.chunk_rest.call(null,seq__12696_12892__$1);
var G__12895 = c__4556__auto___12893;
var G__12896 = cljs.core.count.call(null,c__4556__auto___12893);
var G__12897 = (0);
seq__12696_12874 = G__12894;
chunk__12697_12875 = G__12895;
count__12698_12876 = G__12896;
i__12699_12877 = G__12897;
continue;
} else {
var component__4696__auto___12898 = cljs.core.first.call(null,seq__12696_12892__$1);
speclj.components.install.call(null,component__4696__auto___12898,description__4695__auto____$3);


var G__12899 = cljs.core.next.call(null,seq__12696_12892__$1);
var G__12900 = null;
var G__12901 = (0);
var G__12902 = (0);
seq__12696_12874 = G__12899;
chunk__12697_12875 = G__12900;
count__12698_12876 = G__12901;
i__12699_12877 = G__12902;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12694_12872);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__12685_12869 = null;
var count__12686_12870 = (0);
var i__12687_12871 = (0);
while(true){
if((i__12687_12871 < count__12686_12870)){
var component__4696__auto___12903 = cljs.core._nth.call(null,chunk__12685_12869,i__12687_12871);
speclj.components.install.call(null,component__4696__auto___12903,description__4695__auto____$2);


var G__12904 = seq__12684_12868;
var G__12905 = chunk__12685_12869;
var G__12906 = count__12686_12870;
var G__12907 = (i__12687_12871 + (1));
seq__12684_12868 = G__12904;
chunk__12685_12869 = G__12905;
count__12686_12870 = G__12906;
i__12687_12871 = G__12907;
continue;
} else {
var temp__5735__auto___12908 = cljs.core.seq.call(null,seq__12684_12868);
if(temp__5735__auto___12908){
var seq__12684_12909__$1 = temp__5735__auto___12908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12684_12909__$1)){
var c__4556__auto___12910 = cljs.core.chunk_first.call(null,seq__12684_12909__$1);
var G__12911 = cljs.core.chunk_rest.call(null,seq__12684_12909__$1);
var G__12912 = c__4556__auto___12910;
var G__12913 = cljs.core.count.call(null,c__4556__auto___12910);
var G__12914 = (0);
seq__12684_12868 = G__12911;
chunk__12685_12869 = G__12912;
count__12686_12870 = G__12913;
i__12687_12871 = G__12914;
continue;
} else {
var component__4696__auto___12915 = cljs.core.first.call(null,seq__12684_12909__$1);
speclj.components.install.call(null,component__4696__auto___12915,description__4695__auto____$2);


var G__12916 = cljs.core.next.call(null,seq__12684_12909__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12684_12868 = G__12916;
chunk__12685_12869 = G__12917;
count__12686_12870 = G__12918;
i__12687_12871 = G__12919;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12682_12866);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12700_12920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12701_12921 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12701_12921);

try{var seq__12702_12922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__12712_12926 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12713_12927 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12713_12927);

try{var seq__12714_12928 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__12712_12926,_STAR_parent_description_STAR__temp_val__12713_12927,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12700_12920,_STAR_parent_description_STAR__temp_val__12701_12921,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12932 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___12933 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___12932,actual__4781__auto___12933)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12932 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12932)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12933 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12933))," (using =)"].join('')));
}

var expected__4780__auto___12934 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___12935 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___12934,actual__4781__auto___12935)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12934 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12934)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12935 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12935))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12712_12926,_STAR_parent_description_STAR__temp_val__12713_12927,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12700_12920,_STAR_parent_description_STAR__temp_val__12701_12921,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__12712_12926,_STAR_parent_description_STAR__temp_val__12713_12927,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12700_12920,_STAR_parent_description_STAR__temp_val__12701_12921,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___12936 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___12937 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___12936,actual__4781__auto___12937)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12936 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12936)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12937 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12937))," (using =)"].join('')));
}

var expected__4780__auto___12938 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___12939 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___12938,actual__4781__auto___12939)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12938 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12938)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12939 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12939))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12712_12926,_STAR_parent_description_STAR__temp_val__12713_12927,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__12700_12920,_STAR_parent_description_STAR__temp_val__12701_12921,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__12556_12725,_STAR_parent_description_STAR__temp_val__12557_12726,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12388_12719,_STAR_parent_description_STAR__temp_val__12389_12720,description__4695__auto___12718))
)],null)));
var chunk__12715_12929 = null;
var count__12716_12930 = (0);
var i__12717_12931 = (0);
while(true){
if((i__12717_12931 < count__12716_12930)){
var component__4696__auto___12940 = cljs.core._nth.call(null,chunk__12715_12929,i__12717_12931);
speclj.components.install.call(null,component__4696__auto___12940,description__4695__auto____$3);


var G__12941 = seq__12714_12928;
var G__12942 = chunk__12715_12929;
var G__12943 = count__12716_12930;
var G__12944 = (i__12717_12931 + (1));
seq__12714_12928 = G__12941;
chunk__12715_12929 = G__12942;
count__12716_12930 = G__12943;
i__12717_12931 = G__12944;
continue;
} else {
var temp__5735__auto___12945 = cljs.core.seq.call(null,seq__12714_12928);
if(temp__5735__auto___12945){
var seq__12714_12946__$1 = temp__5735__auto___12945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12714_12946__$1)){
var c__4556__auto___12947 = cljs.core.chunk_first.call(null,seq__12714_12946__$1);
var G__12948 = cljs.core.chunk_rest.call(null,seq__12714_12946__$1);
var G__12949 = c__4556__auto___12947;
var G__12950 = cljs.core.count.call(null,c__4556__auto___12947);
var G__12951 = (0);
seq__12714_12928 = G__12948;
chunk__12715_12929 = G__12949;
count__12716_12930 = G__12950;
i__12717_12931 = G__12951;
continue;
} else {
var component__4696__auto___12952 = cljs.core.first.call(null,seq__12714_12946__$1);
speclj.components.install.call(null,component__4696__auto___12952,description__4695__auto____$3);


var G__12953 = cljs.core.next.call(null,seq__12714_12946__$1);
var G__12954 = null;
var G__12955 = (0);
var G__12956 = (0);
seq__12714_12928 = G__12953;
chunk__12715_12929 = G__12954;
count__12716_12930 = G__12955;
i__12717_12931 = G__12956;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12712_12926);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__12703_12923 = null;
var count__12704_12924 = (0);
var i__12705_12925 = (0);
while(true){
if((i__12705_12925 < count__12704_12924)){
var component__4696__auto___12957 = cljs.core._nth.call(null,chunk__12703_12923,i__12705_12925);
speclj.components.install.call(null,component__4696__auto___12957,description__4695__auto____$2);


var G__12958 = seq__12702_12922;
var G__12959 = chunk__12703_12923;
var G__12960 = count__12704_12924;
var G__12961 = (i__12705_12925 + (1));
seq__12702_12922 = G__12958;
chunk__12703_12923 = G__12959;
count__12704_12924 = G__12960;
i__12705_12925 = G__12961;
continue;
} else {
var temp__5735__auto___12962 = cljs.core.seq.call(null,seq__12702_12922);
if(temp__5735__auto___12962){
var seq__12702_12963__$1 = temp__5735__auto___12962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12702_12963__$1)){
var c__4556__auto___12964 = cljs.core.chunk_first.call(null,seq__12702_12963__$1);
var G__12965 = cljs.core.chunk_rest.call(null,seq__12702_12963__$1);
var G__12966 = c__4556__auto___12964;
var G__12967 = cljs.core.count.call(null,c__4556__auto___12964);
var G__12968 = (0);
seq__12702_12922 = G__12965;
chunk__12703_12923 = G__12966;
count__12704_12924 = G__12967;
i__12705_12925 = G__12968;
continue;
} else {
var component__4696__auto___12969 = cljs.core.first.call(null,seq__12702_12963__$1);
speclj.components.install.call(null,component__4696__auto___12969,description__4695__auto____$2);


var G__12970 = cljs.core.next.call(null,seq__12702_12963__$1);
var G__12971 = null;
var G__12972 = (0);
var G__12973 = (0);
seq__12702_12922 = G__12970;
chunk__12703_12923 = G__12971;
count__12704_12924 = G__12972;
i__12705_12925 = G__12973;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12700_12920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})()],null)));
var chunk__12559_12728 = null;
var count__12560_12729 = (0);
var i__12561_12730 = (0);
while(true){
if((i__12561_12730 < count__12560_12729)){
var component__4696__auto___12974 = cljs.core._nth.call(null,chunk__12559_12728,i__12561_12730);
speclj.components.install.call(null,component__4696__auto___12974,description__4695__auto____$1);


var G__12975 = seq__12558_12727;
var G__12976 = chunk__12559_12728;
var G__12977 = count__12560_12729;
var G__12978 = (i__12561_12730 + (1));
seq__12558_12727 = G__12975;
chunk__12559_12728 = G__12976;
count__12560_12729 = G__12977;
i__12561_12730 = G__12978;
continue;
} else {
var temp__5735__auto___12979 = cljs.core.seq.call(null,seq__12558_12727);
if(temp__5735__auto___12979){
var seq__12558_12980__$1 = temp__5735__auto___12979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12558_12980__$1)){
var c__4556__auto___12981 = cljs.core.chunk_first.call(null,seq__12558_12980__$1);
var G__12982 = cljs.core.chunk_rest.call(null,seq__12558_12980__$1);
var G__12983 = c__4556__auto___12981;
var G__12984 = cljs.core.count.call(null,c__4556__auto___12981);
var G__12985 = (0);
seq__12558_12727 = G__12982;
chunk__12559_12728 = G__12983;
count__12560_12729 = G__12984;
i__12561_12730 = G__12985;
continue;
} else {
var component__4696__auto___12986 = cljs.core.first.call(null,seq__12558_12980__$1);
speclj.components.install.call(null,component__4696__auto___12986,description__4695__auto____$1);


var G__12987 = cljs.core.next.call(null,seq__12558_12980__$1);
var G__12988 = null;
var G__12989 = (0);
var G__12990 = (0);
seq__12558_12727 = G__12987;
chunk__12559_12728 = G__12988;
count__12560_12729 = G__12989;
i__12561_12730 = G__12990;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12556_12725);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__12391_12722 = null;
var count__12392_12723 = (0);
var i__12393_12724 = (0);
while(true){
if((i__12393_12724 < count__12392_12723)){
var component__4696__auto___12991 = cljs.core._nth.call(null,chunk__12391_12722,i__12393_12724);
speclj.components.install.call(null,component__4696__auto___12991,description__4695__auto___12718);


var G__12992 = seq__12390_12721;
var G__12993 = chunk__12391_12722;
var G__12994 = count__12392_12723;
var G__12995 = (i__12393_12724 + (1));
seq__12390_12721 = G__12992;
chunk__12391_12722 = G__12993;
count__12392_12723 = G__12994;
i__12393_12724 = G__12995;
continue;
} else {
var temp__5735__auto___12996 = cljs.core.seq.call(null,seq__12390_12721);
if(temp__5735__auto___12996){
var seq__12390_12997__$1 = temp__5735__auto___12996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12390_12997__$1)){
var c__4556__auto___12998 = cljs.core.chunk_first.call(null,seq__12390_12997__$1);
var G__12999 = cljs.core.chunk_rest.call(null,seq__12390_12997__$1);
var G__13000 = c__4556__auto___12998;
var G__13001 = cljs.core.count.call(null,c__4556__auto___12998);
var G__13002 = (0);
seq__12390_12721 = G__12999;
chunk__12391_12722 = G__13000;
count__12392_12723 = G__13001;
i__12393_12724 = G__13002;
continue;
} else {
var component__4696__auto___13003 = cljs.core.first.call(null,seq__12390_12997__$1);
speclj.components.install.call(null,component__4696__auto___13003,description__4695__auto___12718);


var G__13004 = cljs.core.next.call(null,seq__12390_12997__$1);
var G__13005 = null;
var G__13006 = (0);
var G__13007 = (0);
seq__12390_12721 = G__13004;
chunk__12391_12722 = G__13005;
count__12392_12723 = G__13006;
i__12393_12724 = G__13007;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12388_12719);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___12718);
}


//# sourceMappingURL=setup_spec.js.map
