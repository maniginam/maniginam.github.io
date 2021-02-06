// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___12260 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__12206_12261 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12207_12262 = description__4695__auto___12260;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12207_12262);

try{var seq__12208_12263 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__12236_12267 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12237_12268 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12237_12268);

try{var seq__12238_12269 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__12236_12267,_STAR_parent_description_STAR__temp_val__12237_12268,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__12202_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__12202_SHARP_));

return cljs.core.second.call(null,p1__12202_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__12203_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__12203_SHARP_));

return cljs.core.second.call(null,p1__12203_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___12273 = "vline@100";
var actual__4781__auto___12274 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12273,actual__4781__auto___12274)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12273 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12273)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12274 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12274))," (using =)"].join('')));
}

var expected__4780__auto___12275 = "100";
var actual__4781__auto___12276 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12275,actual__4781__auto___12276)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12275 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12275)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12276 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12276))," (using =)"].join('')));
}

var expected__4780__auto___12277 = "0%";
var actual__4781__auto___12278 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12277,actual__4781__auto___12278)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12277 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12277)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12278 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12278))," (using =)"].join('')));
}

var expected__4780__auto___12279 = "100%";
var actual__4781__auto___12280 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12279,actual__4781__auto___12280)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12279 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12279)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12280 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12280))," (using =)"].join('')));
}

var expected__4780__auto___12281 = "vline@200";
var actual__4781__auto___12282 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12281,actual__4781__auto___12282)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12281 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12281)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12282 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12282))," (using =)"].join('')));
}

var expected__4780__auto___12283 = "200";
var actual__4781__auto___12284 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12283,actual__4781__auto___12284)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12283 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12283)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12284 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12284))," (using =)"].join('')));
}

var expected__4780__auto___12285 = "0%";
var actual__4781__auto___12286 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12285,actual__4781__auto___12286)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12285 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12285)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12286 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12286))," (using =)"].join('')));
}

var expected__4780__auto__ = "100%";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12236_12267,_STAR_parent_description_STAR__temp_val__12237_12268,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__12236_12267,_STAR_parent_description_STAR__temp_val__12237_12268,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__12204_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__12204_SHARP_));

return cljs.core.second.call(null,p1__12204_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__12205_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__12205_SHARP_));

return cljs.core.second.call(null,p1__12205_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___12287 = "hline@100";
var actual__4781__auto___12288 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12287,actual__4781__auto___12288)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12287 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12287)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12288 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12288))," (using =)"].join('')));
}

var expected__4780__auto___12289 = "0%";
var actual__4781__auto___12290 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12289,actual__4781__auto___12290)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12289 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12289)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12290 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12290))," (using =)"].join('')));
}

var expected__4780__auto___12291 = "100%";
var actual__4781__auto___12292 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12291,actual__4781__auto___12292)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12291 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12291)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12292 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12292))," (using =)"].join('')));
}

var expected__4780__auto___12293 = "100";
var actual__4781__auto___12294 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___12293,actual__4781__auto___12294)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12293 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12293)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12294 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12294))," (using =)"].join('')));
}

var expected__4780__auto___12295 = "hline@200";
var actual__4781__auto___12296 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12295,actual__4781__auto___12296)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12295 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12295)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12296 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12296))," (using =)"].join('')));
}

var expected__4780__auto___12297 = "0%";
var actual__4781__auto___12298 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12297,actual__4781__auto___12298)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12297 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12297)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12298 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12298))," (using =)"].join('')));
}

var expected__4780__auto___12299 = "100%";
var actual__4781__auto___12300 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___12299,actual__4781__auto___12300)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12299 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12299)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12300 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12300))," (using =)"].join('')));
}

var expected__4780__auto__ = "200";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__12236_12267,_STAR_parent_description_STAR__temp_val__12237_12268,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260))
)],null)));
var chunk__12239_12270 = null;
var count__12240_12271 = (0);
var i__12241_12272 = (0);
while(true){
if((i__12241_12272 < count__12240_12271)){
var component__4696__auto___12301 = cljs.core._nth.call(null,chunk__12239_12270,i__12241_12272);
speclj.components.install.call(null,component__4696__auto___12301,description__4695__auto____$1);


var G__12302 = seq__12238_12269;
var G__12303 = chunk__12239_12270;
var G__12304 = count__12240_12271;
var G__12305 = (i__12241_12272 + (1));
seq__12238_12269 = G__12302;
chunk__12239_12270 = G__12303;
count__12240_12271 = G__12304;
i__12241_12272 = G__12305;
continue;
} else {
var temp__5735__auto___12306 = cljs.core.seq.call(null,seq__12238_12269);
if(temp__5735__auto___12306){
var seq__12238_12307__$1 = temp__5735__auto___12306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12238_12307__$1)){
var c__4556__auto___12308 = cljs.core.chunk_first.call(null,seq__12238_12307__$1);
var G__12309 = cljs.core.chunk_rest.call(null,seq__12238_12307__$1);
var G__12310 = c__4556__auto___12308;
var G__12311 = cljs.core.count.call(null,c__4556__auto___12308);
var G__12312 = (0);
seq__12238_12269 = G__12309;
chunk__12239_12270 = G__12310;
count__12240_12271 = G__12311;
i__12241_12272 = G__12312;
continue;
} else {
var component__4696__auto___12313 = cljs.core.first.call(null,seq__12238_12307__$1);
speclj.components.install.call(null,component__4696__auto___12313,description__4695__auto____$1);


var G__12314 = cljs.core.next.call(null,seq__12238_12307__$1);
var G__12315 = null;
var G__12316 = (0);
var G__12317 = (0);
seq__12238_12269 = G__12314;
chunk__12239_12270 = G__12315;
count__12240_12271 = G__12316;
i__12241_12272 = G__12317;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12236_12267);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__12242_12318 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12243_12319 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12243_12319);

try{var seq__12244_12320 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__12242_12318,_STAR_parent_description_STAR__temp_val__12243_12319,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var seq__12254 = cljs.core.seq.call(null,boxes);
var chunk__12256 = null;
var count__12257 = (0);
var i__12258 = (0);
while(true){
if((i__12258 < count__12257)){
var box = cljs.core._nth.call(null,chunk__12256,i__12258);
var id_12324 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_12325 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_12324,(3))));
var y_12326 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_12324 / (3)) | (0))));
var expected__4780__auto___12327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_12324,new cljs.core.Keyword(null,"x","x",2099068185),x_12325,new cljs.core.Keyword(null,"y","y",-1757859776),y_12326,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___12328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___12327,actual__4781__auto___12328)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12327 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12327)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12328 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12328))," (using =)"].join('')));
}


var G__12329 = seq__12254;
var G__12330 = chunk__12256;
var G__12331 = count__12257;
var G__12332 = (i__12258 + (1));
seq__12254 = G__12329;
chunk__12256 = G__12330;
count__12257 = G__12331;
i__12258 = G__12332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__12254);
if(temp__5735__auto__){
var seq__12254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12254__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12254__$1);
var G__12333 = cljs.core.chunk_rest.call(null,seq__12254__$1);
var G__12334 = c__4556__auto__;
var G__12335 = cljs.core.count.call(null,c__4556__auto__);
var G__12336 = (0);
seq__12254 = G__12333;
chunk__12256 = G__12334;
count__12257 = G__12335;
i__12258 = G__12336;
continue;
} else {
var box = cljs.core.first.call(null,seq__12254__$1);
var id_12337 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_12338 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_12337,(3))));
var y_12339 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_12337 / (3)) | (0))));
var expected__4780__auto___12340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_12337,new cljs.core.Keyword(null,"x","x",2099068185),x_12338,new cljs.core.Keyword(null,"y","y",-1757859776),y_12339,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___12341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___12340,actual__4781__auto___12341)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___12340 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___12340)),speclj.platform.endl,"     got: ",(((actual__4781__auto___12341 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___12341))," (using =)"].join('')));
}


var G__12342 = cljs.core.next.call(null,seq__12254__$1);
var G__12343 = null;
var G__12344 = (0);
var G__12345 = (0);
seq__12254 = G__12342;
chunk__12256 = G__12343;
count__12257 = G__12344;
i__12258 = G__12345;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__12242_12318,_STAR_parent_description_STAR__temp_val__12243_12319,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__12206_12261,_STAR_parent_description_STAR__temp_val__12207_12262,description__4695__auto___12260))
)],null)));
var chunk__12245_12321 = null;
var count__12246_12322 = (0);
var i__12247_12323 = (0);
while(true){
if((i__12247_12323 < count__12246_12322)){
var component__4696__auto___12346 = cljs.core._nth.call(null,chunk__12245_12321,i__12247_12323);
speclj.components.install.call(null,component__4696__auto___12346,description__4695__auto____$1);


var G__12347 = seq__12244_12320;
var G__12348 = chunk__12245_12321;
var G__12349 = count__12246_12322;
var G__12350 = (i__12247_12323 + (1));
seq__12244_12320 = G__12347;
chunk__12245_12321 = G__12348;
count__12246_12322 = G__12349;
i__12247_12323 = G__12350;
continue;
} else {
var temp__5735__auto___12351 = cljs.core.seq.call(null,seq__12244_12320);
if(temp__5735__auto___12351){
var seq__12244_12352__$1 = temp__5735__auto___12351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12244_12352__$1)){
var c__4556__auto___12353 = cljs.core.chunk_first.call(null,seq__12244_12352__$1);
var G__12354 = cljs.core.chunk_rest.call(null,seq__12244_12352__$1);
var G__12355 = c__4556__auto___12353;
var G__12356 = cljs.core.count.call(null,c__4556__auto___12353);
var G__12357 = (0);
seq__12244_12320 = G__12354;
chunk__12245_12321 = G__12355;
count__12246_12322 = G__12356;
i__12247_12323 = G__12357;
continue;
} else {
var component__4696__auto___12358 = cljs.core.first.call(null,seq__12244_12352__$1);
speclj.components.install.call(null,component__4696__auto___12358,description__4695__auto____$1);


var G__12359 = cljs.core.next.call(null,seq__12244_12352__$1);
var G__12360 = null;
var G__12361 = (0);
var G__12362 = (0);
seq__12244_12320 = G__12359;
chunk__12245_12321 = G__12360;
count__12246_12322 = G__12361;
i__12247_12323 = G__12362;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12242_12318);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__12209_12264 = null;
var count__12210_12265 = (0);
var i__12211_12266 = (0);
while(true){
if((i__12211_12266 < count__12210_12265)){
var component__4696__auto___12363 = cljs.core._nth.call(null,chunk__12209_12264,i__12211_12266);
speclj.components.install.call(null,component__4696__auto___12363,description__4695__auto___12260);


var G__12364 = seq__12208_12263;
var G__12365 = chunk__12209_12264;
var G__12366 = count__12210_12265;
var G__12367 = (i__12211_12266 + (1));
seq__12208_12263 = G__12364;
chunk__12209_12264 = G__12365;
count__12210_12265 = G__12366;
i__12211_12266 = G__12367;
continue;
} else {
var temp__5735__auto___12368 = cljs.core.seq.call(null,seq__12208_12263);
if(temp__5735__auto___12368){
var seq__12208_12369__$1 = temp__5735__auto___12368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12208_12369__$1)){
var c__4556__auto___12370 = cljs.core.chunk_first.call(null,seq__12208_12369__$1);
var G__12371 = cljs.core.chunk_rest.call(null,seq__12208_12369__$1);
var G__12372 = c__4556__auto___12370;
var G__12373 = cljs.core.count.call(null,c__4556__auto___12370);
var G__12374 = (0);
seq__12208_12263 = G__12371;
chunk__12209_12264 = G__12372;
count__12210_12265 = G__12373;
i__12211_12266 = G__12374;
continue;
} else {
var component__4696__auto___12375 = cljs.core.first.call(null,seq__12208_12369__$1);
speclj.components.install.call(null,component__4696__auto___12375,description__4695__auto___12260);


var G__12376 = cljs.core.next.call(null,seq__12208_12369__$1);
var G__12377 = null;
var G__12378 = (0);
var G__12379 = (0);
seq__12208_12263 = G__12376;
chunk__12209_12264 = G__12377;
count__12210_12265 = G__12378;
i__12211_12266 = G__12379;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12206_12261);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___12260);
}


//# sourceMappingURL=board_spec.js.map
