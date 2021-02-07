// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.setup_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.master.spec_helper');
goog.require('ttt.master.core');
goog.require('ttt.web.setup');
ttt.web.setup_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___32396 = speclj.components.new_description.call(null,"TTT Setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32066_32397 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32067_32398 = description__4695__auto___32396;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32067_32398);

try{var seq__32068_32399 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
return cljs.core.reset_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null)));
});})(_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"Status","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32234_32403 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32235_32404 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32235_32404);

try{var seq__32236_32405 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"waiting","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32318_32409 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32319_32410 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32319_32410);

try{var seq__32320_32411 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"welcomes at startup",((function (_STAR_parent_description_STAR__orig_val__32318_32409,_STAR_parent_description_STAR__temp_val__32319_32410,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"waiting","waiting",895906735);
var actual__4781__auto__ = status;
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32318_32409,_STAR_parent_description_STAR__temp_val__32319_32410,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"click start for user-setup",((function (_STAR_parent_description_STAR__orig_val__32318_32409,_STAR_parent_description_STAR__temp_val__32319_32410,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
var game = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto__ = new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32318_32409,_STAR_parent_description_STAR__temp_val__32319_32410,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
)],null)));
var chunk__32321_32412 = null;
var count__32322_32413 = (0);
var i__32323_32414 = (0);
while(true){
if((i__32323_32414 < count__32322_32413)){
var component__4696__auto___32415 = cljs.core._nth.call(null,chunk__32321_32412,i__32323_32414);
speclj.components.install.call(null,component__4696__auto___32415,description__4695__auto____$2);


var G__32416 = seq__32320_32411;
var G__32417 = chunk__32321_32412;
var G__32418 = count__32322_32413;
var G__32419 = (i__32323_32414 + (1));
seq__32320_32411 = G__32416;
chunk__32321_32412 = G__32417;
count__32322_32413 = G__32418;
i__32323_32414 = G__32419;
continue;
} else {
var temp__5735__auto___32420 = cljs.core.seq.call(null,seq__32320_32411);
if(temp__5735__auto___32420){
var seq__32320_32421__$1 = temp__5735__auto___32420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32320_32421__$1)){
var c__4556__auto___32422 = cljs.core.chunk_first.call(null,seq__32320_32421__$1);
var G__32423 = cljs.core.chunk_rest.call(null,seq__32320_32421__$1);
var G__32424 = c__4556__auto___32422;
var G__32425 = cljs.core.count.call(null,c__4556__auto___32422);
var G__32426 = (0);
seq__32320_32411 = G__32423;
chunk__32321_32412 = G__32424;
count__32322_32413 = G__32425;
i__32323_32414 = G__32426;
continue;
} else {
var component__4696__auto___32427 = cljs.core.first.call(null,seq__32320_32421__$1);
speclj.components.install.call(null,component__4696__auto___32427,description__4695__auto____$2);


var G__32428 = cljs.core.next.call(null,seq__32320_32421__$1);
var G__32429 = null;
var G__32430 = (0);
var G__32431 = (0);
seq__32320_32411 = G__32428;
chunk__32321_32412 = G__32429;
count__32322_32413 = G__32430;
i__32323_32414 = G__32431;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32318_32409);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"user-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32324_32432 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32325_32433 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32325_32433);

try{var seq__32326_32434 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"users: ","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32336_32438 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32337_32439 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32337_32439);

try{var seq__32338_32440 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"0",((function (_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(0));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32444 = (0);
var actual__4781__auto___32445 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32444,actual__4781__auto___32445)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32444 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32444)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32445 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32445))," (using =)"].join('')));
}

var expected__4780__auto___32446 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___32447 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32446,actual__4781__auto___32447)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32446 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32446)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32447 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32447))," (using =)"].join('')));
}

var expected__4780__auto___32448 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___32449 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32448,actual__4781__auto___32449)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32448 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32448)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32449 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32449))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"1",((function (_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(1));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32450 = (1);
var actual__4781__auto___32451 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32450,actual__4781__auto___32451)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32450 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32450)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32451 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32451))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"player-setup","player-setup",-18534652);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"2",((function (_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"user-setup","user-setup",-1883963594),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var game_after_click = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32452 = (2);
var actual__4781__auto___32453 = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32452,actual__4781__auto___32453)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32452 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32452)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32453 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32453))," (using =)"].join('')));
}

var expected__4780__auto___32454 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___32455 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32454,actual__4781__auto___32455)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32454 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32454)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32455 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32455))," (using =)"].join('')));
}

var expected__4780__auto___32456 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___32457 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto___32456,actual__4781__auto___32457)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32456 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32456)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32457 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32457))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game_after_click);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32336_32438,_STAR_parent_description_STAR__temp_val__32337_32439,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32324_32432,_STAR_parent_description_STAR__temp_val__32325_32433,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
)],null)));
var chunk__32339_32441 = null;
var count__32340_32442 = (0);
var i__32341_32443 = (0);
while(true){
if((i__32341_32443 < count__32340_32442)){
var component__4696__auto___32458 = cljs.core._nth.call(null,chunk__32339_32441,i__32341_32443);
speclj.components.install.call(null,component__4696__auto___32458,description__4695__auto____$3);


var G__32459 = seq__32338_32440;
var G__32460 = chunk__32339_32441;
var G__32461 = count__32340_32442;
var G__32462 = (i__32341_32443 + (1));
seq__32338_32440 = G__32459;
chunk__32339_32441 = G__32460;
count__32340_32442 = G__32461;
i__32341_32443 = G__32462;
continue;
} else {
var temp__5735__auto___32463 = cljs.core.seq.call(null,seq__32338_32440);
if(temp__5735__auto___32463){
var seq__32338_32464__$1 = temp__5735__auto___32463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32338_32464__$1)){
var c__4556__auto___32465 = cljs.core.chunk_first.call(null,seq__32338_32464__$1);
var G__32466 = cljs.core.chunk_rest.call(null,seq__32338_32464__$1);
var G__32467 = c__4556__auto___32465;
var G__32468 = cljs.core.count.call(null,c__4556__auto___32465);
var G__32469 = (0);
seq__32338_32440 = G__32466;
chunk__32339_32441 = G__32467;
count__32340_32442 = G__32468;
i__32341_32443 = G__32469;
continue;
} else {
var component__4696__auto___32470 = cljs.core.first.call(null,seq__32338_32464__$1);
speclj.components.install.call(null,component__4696__auto___32470,description__4695__auto____$3);


var G__32471 = cljs.core.next.call(null,seq__32338_32464__$1);
var G__32472 = null;
var G__32473 = (0);
var G__32474 = (0);
seq__32338_32440 = G__32471;
chunk__32339_32441 = G__32472;
count__32340_32442 = G__32473;
i__32341_32443 = G__32474;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32336_32438);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__32327_32435 = null;
var count__32328_32436 = (0);
var i__32329_32437 = (0);
while(true){
if((i__32329_32437 < count__32328_32436)){
var component__4696__auto___32475 = cljs.core._nth.call(null,chunk__32327_32435,i__32329_32437);
speclj.components.install.call(null,component__4696__auto___32475,description__4695__auto____$2);


var G__32476 = seq__32326_32434;
var G__32477 = chunk__32327_32435;
var G__32478 = count__32328_32436;
var G__32479 = (i__32329_32437 + (1));
seq__32326_32434 = G__32476;
chunk__32327_32435 = G__32477;
count__32328_32436 = G__32478;
i__32329_32437 = G__32479;
continue;
} else {
var temp__5735__auto___32480 = cljs.core.seq.call(null,seq__32326_32434);
if(temp__5735__auto___32480){
var seq__32326_32481__$1 = temp__5735__auto___32480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32326_32481__$1)){
var c__4556__auto___32482 = cljs.core.chunk_first.call(null,seq__32326_32481__$1);
var G__32483 = cljs.core.chunk_rest.call(null,seq__32326_32481__$1);
var G__32484 = c__4556__auto___32482;
var G__32485 = cljs.core.count.call(null,c__4556__auto___32482);
var G__32486 = (0);
seq__32326_32434 = G__32483;
chunk__32327_32435 = G__32484;
count__32328_32436 = G__32485;
i__32329_32437 = G__32486;
continue;
} else {
var component__4696__auto___32487 = cljs.core.first.call(null,seq__32326_32481__$1);
speclj.components.install.call(null,component__4696__auto___32487,description__4695__auto____$2);


var G__32488 = cljs.core.next.call(null,seq__32326_32481__$1);
var G__32489 = null;
var G__32490 = (0);
var G__32491 = (0);
seq__32326_32434 = G__32488;
chunk__32327_32435 = G__32489;
count__32328_32436 = G__32490;
i__32329_32437 = G__32491;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32324_32432);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"level-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32342_32492 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32343_32493 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32343_32493);

try{var seq__32344_32494 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"level selected:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32354_32498 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32355_32499 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32355_32499);

try{var seq__32356_32500 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"easy",((function (_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"easy");

var click_easy = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32504 = new cljs.core.Keyword(null,"easy","easy",315769928);
var actual__4781__auto___32505 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto___32504,actual__4781__auto___32505)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32504 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32504)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32505 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32505))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_easy);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"medium",((function (_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"medium");

var click_medium = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32506 = new cljs.core.Keyword(null,"medium","medium",-1864319384);
var actual__4781__auto___32507 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto___32506,actual__4781__auto___32507)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32506 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32506)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32507 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32507))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_medium);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"hard",((function (_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"level-setup","level-setup",-648656081),new cljs.core.Keyword(null,"entry","entry",505168823),"hard");

var click_hard = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32508 = new cljs.core.Keyword(null,"hard","hard",2068420191);
var actual__4781__auto___32509 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto___32508,actual__4781__auto___32509)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32508 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32508)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32509 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32509))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"board-setup","board-setup",-844148113);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_hard);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32354_32498,_STAR_parent_description_STAR__temp_val__32355_32499,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32342_32492,_STAR_parent_description_STAR__temp_val__32343_32493,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
)],null)));
var chunk__32357_32501 = null;
var count__32358_32502 = (0);
var i__32359_32503 = (0);
while(true){
if((i__32359_32503 < count__32358_32502)){
var component__4696__auto___32510 = cljs.core._nth.call(null,chunk__32357_32501,i__32359_32503);
speclj.components.install.call(null,component__4696__auto___32510,description__4695__auto____$3);


var G__32511 = seq__32356_32500;
var G__32512 = chunk__32357_32501;
var G__32513 = count__32358_32502;
var G__32514 = (i__32359_32503 + (1));
seq__32356_32500 = G__32511;
chunk__32357_32501 = G__32512;
count__32358_32502 = G__32513;
i__32359_32503 = G__32514;
continue;
} else {
var temp__5735__auto___32515 = cljs.core.seq.call(null,seq__32356_32500);
if(temp__5735__auto___32515){
var seq__32356_32516__$1 = temp__5735__auto___32515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32356_32516__$1)){
var c__4556__auto___32517 = cljs.core.chunk_first.call(null,seq__32356_32516__$1);
var G__32518 = cljs.core.chunk_rest.call(null,seq__32356_32516__$1);
var G__32519 = c__4556__auto___32517;
var G__32520 = cljs.core.count.call(null,c__4556__auto___32517);
var G__32521 = (0);
seq__32356_32500 = G__32518;
chunk__32357_32501 = G__32519;
count__32358_32502 = G__32520;
i__32359_32503 = G__32521;
continue;
} else {
var component__4696__auto___32522 = cljs.core.first.call(null,seq__32356_32516__$1);
speclj.components.install.call(null,component__4696__auto___32522,description__4695__auto____$3);


var G__32523 = cljs.core.next.call(null,seq__32356_32516__$1);
var G__32524 = null;
var G__32525 = (0);
var G__32526 = (0);
seq__32356_32500 = G__32523;
chunk__32357_32501 = G__32524;
count__32358_32502 = G__32525;
i__32359_32503 = G__32526;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32354_32498);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__32345_32495 = null;
var count__32346_32496 = (0);
var i__32347_32497 = (0);
while(true){
if((i__32347_32497 < count__32346_32496)){
var component__4696__auto___32527 = cljs.core._nth.call(null,chunk__32345_32495,i__32347_32497);
speclj.components.install.call(null,component__4696__auto___32527,description__4695__auto____$2);


var G__32528 = seq__32344_32494;
var G__32529 = chunk__32345_32495;
var G__32530 = count__32346_32496;
var G__32531 = (i__32347_32497 + (1));
seq__32344_32494 = G__32528;
chunk__32345_32495 = G__32529;
count__32346_32496 = G__32530;
i__32347_32497 = G__32531;
continue;
} else {
var temp__5735__auto___32532 = cljs.core.seq.call(null,seq__32344_32494);
if(temp__5735__auto___32532){
var seq__32344_32533__$1 = temp__5735__auto___32532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32344_32533__$1)){
var c__4556__auto___32534 = cljs.core.chunk_first.call(null,seq__32344_32533__$1);
var G__32535 = cljs.core.chunk_rest.call(null,seq__32344_32533__$1);
var G__32536 = c__4556__auto___32534;
var G__32537 = cljs.core.count.call(null,c__4556__auto___32534);
var G__32538 = (0);
seq__32344_32494 = G__32535;
chunk__32345_32495 = G__32536;
count__32346_32496 = G__32537;
i__32347_32497 = G__32538;
continue;
} else {
var component__4696__auto___32539 = cljs.core.first.call(null,seq__32344_32533__$1);
speclj.components.install.call(null,component__4696__auto___32539,description__4695__auto____$2);


var G__32540 = cljs.core.next.call(null,seq__32344_32533__$1);
var G__32541 = null;
var G__32542 = (0);
var G__32543 = (0);
seq__32344_32494 = G__32540;
chunk__32345_32495 = G__32541;
count__32346_32496 = G__32542;
i__32347_32497 = G__32543;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32342_32492);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"board-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32360_32544 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32361_32545 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32361_32545);

try{var seq__32362_32546 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"board-size:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32372_32550 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32373_32551 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32373_32551);

try{var seq__32374_32552 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"3x3",((function (_STAR_parent_description_STAR__orig_val__32372_32550,_STAR_parent_description_STAR__temp_val__32373_32551,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32360_32544,_STAR_parent_description_STAR__temp_val__32361_32545,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(3));

var three_by_three = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32556 = (3);
var actual__4781__auto___32557 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___32556,actual__4781__auto___32557)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32556 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32556)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32557 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32557))," (using =)"].join('')));
}

var expected__4780__auto___32558 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null);
var actual__4781__auto___32559 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto___32558,actual__4781__auto___32559)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32558 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32558)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32559 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32559))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(three_by_three);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32372_32550,_STAR_parent_description_STAR__temp_val__32373_32551,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32360_32544,_STAR_parent_description_STAR__temp_val__32361_32545,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"2x2 with entry as string",((function (_STAR_parent_description_STAR__orig_val__32372_32550,_STAR_parent_description_STAR__temp_val__32373_32551,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32360_32544,_STAR_parent_description_STAR__temp_val__32361_32545,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"board-setup","board-setup",-844148113),new cljs.core.Keyword(null,"entry","entry",505168823),(2));

var two_by_two = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32560 = (2);
var actual__4781__auto___32561 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___32560,actual__4781__auto___32561)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32560 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32560)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32561 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32561))," (using =)"].join('')));
}

var expected__4780__auto___32562 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3)], null);
var actual__4781__auto___32563 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto___32562,actual__4781__auto___32563)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32562 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32562)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32563 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32563))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"playing","playing",70013335);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(two_by_two);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32372_32550,_STAR_parent_description_STAR__temp_val__32373_32551,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32360_32544,_STAR_parent_description_STAR__temp_val__32361_32545,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
)],null)));
var chunk__32375_32553 = null;
var count__32376_32554 = (0);
var i__32377_32555 = (0);
while(true){
if((i__32377_32555 < count__32376_32554)){
var component__4696__auto___32564 = cljs.core._nth.call(null,chunk__32375_32553,i__32377_32555);
speclj.components.install.call(null,component__4696__auto___32564,description__4695__auto____$3);


var G__32565 = seq__32374_32552;
var G__32566 = chunk__32375_32553;
var G__32567 = count__32376_32554;
var G__32568 = (i__32377_32555 + (1));
seq__32374_32552 = G__32565;
chunk__32375_32553 = G__32566;
count__32376_32554 = G__32567;
i__32377_32555 = G__32568;
continue;
} else {
var temp__5735__auto___32569 = cljs.core.seq.call(null,seq__32374_32552);
if(temp__5735__auto___32569){
var seq__32374_32570__$1 = temp__5735__auto___32569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32374_32570__$1)){
var c__4556__auto___32571 = cljs.core.chunk_first.call(null,seq__32374_32570__$1);
var G__32572 = cljs.core.chunk_rest.call(null,seq__32374_32570__$1);
var G__32573 = c__4556__auto___32571;
var G__32574 = cljs.core.count.call(null,c__4556__auto___32571);
var G__32575 = (0);
seq__32374_32552 = G__32572;
chunk__32375_32553 = G__32573;
count__32376_32554 = G__32574;
i__32377_32555 = G__32575;
continue;
} else {
var component__4696__auto___32576 = cljs.core.first.call(null,seq__32374_32570__$1);
speclj.components.install.call(null,component__4696__auto___32576,description__4695__auto____$3);


var G__32577 = cljs.core.next.call(null,seq__32374_32570__$1);
var G__32578 = null;
var G__32579 = (0);
var G__32580 = (0);
seq__32374_32552 = G__32577;
chunk__32375_32553 = G__32578;
count__32376_32554 = G__32579;
i__32377_32555 = G__32580;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32372_32550);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__32363_32547 = null;
var count__32364_32548 = (0);
var i__32365_32549 = (0);
while(true){
if((i__32365_32549 < count__32364_32548)){
var component__4696__auto___32581 = cljs.core._nth.call(null,chunk__32363_32547,i__32365_32549);
speclj.components.install.call(null,component__4696__auto___32581,description__4695__auto____$2);


var G__32582 = seq__32362_32546;
var G__32583 = chunk__32363_32547;
var G__32584 = count__32364_32548;
var G__32585 = (i__32365_32549 + (1));
seq__32362_32546 = G__32582;
chunk__32363_32547 = G__32583;
count__32364_32548 = G__32584;
i__32365_32549 = G__32585;
continue;
} else {
var temp__5735__auto___32586 = cljs.core.seq.call(null,seq__32362_32546);
if(temp__5735__auto___32586){
var seq__32362_32587__$1 = temp__5735__auto___32586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32362_32587__$1)){
var c__4556__auto___32588 = cljs.core.chunk_first.call(null,seq__32362_32587__$1);
var G__32589 = cljs.core.chunk_rest.call(null,seq__32362_32587__$1);
var G__32590 = c__4556__auto___32588;
var G__32591 = cljs.core.count.call(null,c__4556__auto___32588);
var G__32592 = (0);
seq__32362_32546 = G__32589;
chunk__32363_32547 = G__32590;
count__32364_32548 = G__32591;
i__32365_32549 = G__32592;
continue;
} else {
var component__4696__auto___32593 = cljs.core.first.call(null,seq__32362_32587__$1);
speclj.components.install.call(null,component__4696__auto___32593,description__4695__auto____$2);


var G__32594 = cljs.core.next.call(null,seq__32362_32587__$1);
var G__32595 = null;
var G__32596 = (0);
var G__32597 = (0);
seq__32362_32546 = G__32594;
chunk__32363_32547 = G__32595;
count__32364_32548 = G__32596;
i__32365_32549 = G__32597;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32360_32544);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})(),(function (){var description__4695__auto____$2 = speclj.components.new_description.call(null,"player-setup","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32378_32598 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32379_32599 = description__4695__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32379_32599);

try{var seq__32380_32600 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$3 = speclj.components.new_description.call(null,"human selects:","ttt.web.setup-spec");
var _STAR_parent_description_STAR__orig_val__32390_32604 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32391_32605 = description__4695__auto____$3;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32391_32605);

try{var seq__32392_32606 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"X",((function (_STAR_parent_description_STAR__orig_val__32390_32604,_STAR_parent_description_STAR__temp_val__32391_32605,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32378_32598,_STAR_parent_description_STAR__temp_val__32379_32599,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"X");

var click_X = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32610 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___32611 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___32610,actual__4781__auto___32611)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32610 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32610)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32611 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32611))," (using =)"].join('')));
}

var expected__4780__auto___32612 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___32613 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto___32612,actual__4781__auto___32613)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32612 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32612)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32613 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32613))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_X);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32390_32604,_STAR_parent_description_STAR__temp_val__32391_32605,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32378_32598,_STAR_parent_description_STAR__temp_val__32379_32599,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
),speclj.components.new_characteristic.call(null,"O",((function (_STAR_parent_description_STAR__orig_val__32390_32604,_STAR_parent_description_STAR__temp_val__32391_32605,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32378_32598,_STAR_parent_description_STAR__temp_val__32379_32599,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396){
return (function (){
cljs.core.swap_BANG_.call(null,ttt.web.setup_spec.test_atom,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"player-setup","player-setup",-18534652),new cljs.core.Keyword(null,"entry","entry",505168823),"O");

var click_O = ttt.master.core.set_parameters.call(null,cljs.core.deref.call(null,ttt.web.setup_spec.test_atom));
var expected__4780__auto___32614 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(1),new cljs.core.Keyword(null,"piece","piece",1396691784),"X",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"computer","computer",-1035300443)], null);
var actual__4781__auto___32615 = new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___32614,actual__4781__auto___32615)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32614 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32614)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32615 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32615))," (using =)"].join('')));
}

var expected__4780__auto___32616 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-num","player-num",1393572093),(2),new cljs.core.Keyword(null,"piece","piece",1396691784),"O",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"human","human",-772334390)], null);
var actual__4781__auto___32617 = new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto___32616,actual__4781__auto___32617)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32616 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32616)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32617 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32617))," (using =)"].join('')));
}

var expected__4780__auto__ = new cljs.core.Keyword(null,"level-setup","level-setup",-648656081);
var actual__4781__auto__ = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(click_O);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32390_32604,_STAR_parent_description_STAR__temp_val__32391_32605,description__4695__auto____$3,_STAR_parent_description_STAR__orig_val__32378_32598,_STAR_parent_description_STAR__temp_val__32379_32599,description__4695__auto____$2,_STAR_parent_description_STAR__orig_val__32234_32403,_STAR_parent_description_STAR__temp_val__32235_32404,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32066_32397,_STAR_parent_description_STAR__temp_val__32067_32398,description__4695__auto___32396))
)],null)));
var chunk__32393_32607 = null;
var count__32394_32608 = (0);
var i__32395_32609 = (0);
while(true){
if((i__32395_32609 < count__32394_32608)){
var component__4696__auto___32618 = cljs.core._nth.call(null,chunk__32393_32607,i__32395_32609);
speclj.components.install.call(null,component__4696__auto___32618,description__4695__auto____$3);


var G__32619 = seq__32392_32606;
var G__32620 = chunk__32393_32607;
var G__32621 = count__32394_32608;
var G__32622 = (i__32395_32609 + (1));
seq__32392_32606 = G__32619;
chunk__32393_32607 = G__32620;
count__32394_32608 = G__32621;
i__32395_32609 = G__32622;
continue;
} else {
var temp__5735__auto___32623 = cljs.core.seq.call(null,seq__32392_32606);
if(temp__5735__auto___32623){
var seq__32392_32624__$1 = temp__5735__auto___32623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32392_32624__$1)){
var c__4556__auto___32625 = cljs.core.chunk_first.call(null,seq__32392_32624__$1);
var G__32626 = cljs.core.chunk_rest.call(null,seq__32392_32624__$1);
var G__32627 = c__4556__auto___32625;
var G__32628 = cljs.core.count.call(null,c__4556__auto___32625);
var G__32629 = (0);
seq__32392_32606 = G__32626;
chunk__32393_32607 = G__32627;
count__32394_32608 = G__32628;
i__32395_32609 = G__32629;
continue;
} else {
var component__4696__auto___32630 = cljs.core.first.call(null,seq__32392_32624__$1);
speclj.components.install.call(null,component__4696__auto___32630,description__4695__auto____$3);


var G__32631 = cljs.core.next.call(null,seq__32392_32624__$1);
var G__32632 = null;
var G__32633 = (0);
var G__32634 = (0);
seq__32392_32606 = G__32631;
chunk__32393_32607 = G__32632;
count__32394_32608 = G__32633;
i__32395_32609 = G__32634;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32390_32604);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$3);
}

return description__4695__auto____$3;
})()],null)));
var chunk__32381_32601 = null;
var count__32382_32602 = (0);
var i__32383_32603 = (0);
while(true){
if((i__32383_32603 < count__32382_32602)){
var component__4696__auto___32635 = cljs.core._nth.call(null,chunk__32381_32601,i__32383_32603);
speclj.components.install.call(null,component__4696__auto___32635,description__4695__auto____$2);


var G__32636 = seq__32380_32600;
var G__32637 = chunk__32381_32601;
var G__32638 = count__32382_32602;
var G__32639 = (i__32383_32603 + (1));
seq__32380_32600 = G__32636;
chunk__32381_32601 = G__32637;
count__32382_32602 = G__32638;
i__32383_32603 = G__32639;
continue;
} else {
var temp__5735__auto___32640 = cljs.core.seq.call(null,seq__32380_32600);
if(temp__5735__auto___32640){
var seq__32380_32641__$1 = temp__5735__auto___32640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32380_32641__$1)){
var c__4556__auto___32642 = cljs.core.chunk_first.call(null,seq__32380_32641__$1);
var G__32643 = cljs.core.chunk_rest.call(null,seq__32380_32641__$1);
var G__32644 = c__4556__auto___32642;
var G__32645 = cljs.core.count.call(null,c__4556__auto___32642);
var G__32646 = (0);
seq__32380_32600 = G__32643;
chunk__32381_32601 = G__32644;
count__32382_32602 = G__32645;
i__32383_32603 = G__32646;
continue;
} else {
var component__4696__auto___32647 = cljs.core.first.call(null,seq__32380_32641__$1);
speclj.components.install.call(null,component__4696__auto___32647,description__4695__auto____$2);


var G__32648 = cljs.core.next.call(null,seq__32380_32641__$1);
var G__32649 = null;
var G__32650 = (0);
var G__32651 = (0);
seq__32380_32600 = G__32648;
chunk__32381_32601 = G__32649;
count__32382_32602 = G__32650;
i__32383_32603 = G__32651;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32378_32598);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$2);
}

return description__4695__auto____$2;
})()],null)));
var chunk__32237_32406 = null;
var count__32238_32407 = (0);
var i__32239_32408 = (0);
while(true){
if((i__32239_32408 < count__32238_32407)){
var component__4696__auto___32652 = cljs.core._nth.call(null,chunk__32237_32406,i__32239_32408);
speclj.components.install.call(null,component__4696__auto___32652,description__4695__auto____$1);


var G__32653 = seq__32236_32405;
var G__32654 = chunk__32237_32406;
var G__32655 = count__32238_32407;
var G__32656 = (i__32239_32408 + (1));
seq__32236_32405 = G__32653;
chunk__32237_32406 = G__32654;
count__32238_32407 = G__32655;
i__32239_32408 = G__32656;
continue;
} else {
var temp__5735__auto___32657 = cljs.core.seq.call(null,seq__32236_32405);
if(temp__5735__auto___32657){
var seq__32236_32658__$1 = temp__5735__auto___32657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32236_32658__$1)){
var c__4556__auto___32659 = cljs.core.chunk_first.call(null,seq__32236_32658__$1);
var G__32660 = cljs.core.chunk_rest.call(null,seq__32236_32658__$1);
var G__32661 = c__4556__auto___32659;
var G__32662 = cljs.core.count.call(null,c__4556__auto___32659);
var G__32663 = (0);
seq__32236_32405 = G__32660;
chunk__32237_32406 = G__32661;
count__32238_32407 = G__32662;
i__32239_32408 = G__32663;
continue;
} else {
var component__4696__auto___32664 = cljs.core.first.call(null,seq__32236_32658__$1);
speclj.components.install.call(null,component__4696__auto___32664,description__4695__auto____$1);


var G__32665 = cljs.core.next.call(null,seq__32236_32658__$1);
var G__32666 = null;
var G__32667 = (0);
var G__32668 = (0);
seq__32236_32405 = G__32665;
chunk__32237_32406 = G__32666;
count__32238_32407 = G__32667;
i__32239_32408 = G__32668;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32234_32403);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__32069_32400 = null;
var count__32070_32401 = (0);
var i__32071_32402 = (0);
while(true){
if((i__32071_32402 < count__32070_32401)){
var component__4696__auto___32669 = cljs.core._nth.call(null,chunk__32069_32400,i__32071_32402);
speclj.components.install.call(null,component__4696__auto___32669,description__4695__auto___32396);


var G__32670 = seq__32068_32399;
var G__32671 = chunk__32069_32400;
var G__32672 = count__32070_32401;
var G__32673 = (i__32071_32402 + (1));
seq__32068_32399 = G__32670;
chunk__32069_32400 = G__32671;
count__32070_32401 = G__32672;
i__32071_32402 = G__32673;
continue;
} else {
var temp__5735__auto___32674 = cljs.core.seq.call(null,seq__32068_32399);
if(temp__5735__auto___32674){
var seq__32068_32675__$1 = temp__5735__auto___32674;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32068_32675__$1)){
var c__4556__auto___32676 = cljs.core.chunk_first.call(null,seq__32068_32675__$1);
var G__32677 = cljs.core.chunk_rest.call(null,seq__32068_32675__$1);
var G__32678 = c__4556__auto___32676;
var G__32679 = cljs.core.count.call(null,c__4556__auto___32676);
var G__32680 = (0);
seq__32068_32399 = G__32677;
chunk__32069_32400 = G__32678;
count__32070_32401 = G__32679;
i__32071_32402 = G__32680;
continue;
} else {
var component__4696__auto___32681 = cljs.core.first.call(null,seq__32068_32675__$1);
speclj.components.install.call(null,component__4696__auto___32681,description__4695__auto___32396);


var G__32682 = cljs.core.next.call(null,seq__32068_32675__$1);
var G__32683 = null;
var G__32684 = (0);
var G__32685 = (0);
seq__32068_32399 = G__32682;
chunk__32069_32400 = G__32683;
count__32070_32401 = G__32684;
i__32071_32402 = G__32685;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32066_32397);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___32396);
}


//# sourceMappingURL=setup_spec.js.map
