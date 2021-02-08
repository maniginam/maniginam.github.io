// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__5972__auto___42222 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__42176_42223 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42177_42224 = description__5972__auto___42222;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42177_42224);

try{var seq__42178_42225 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__42202_42229 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42203_42230 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42203_42230);

try{var seq__42204_42231 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__42202_42229,_STAR_parent_description_STAR__temp_val__42203_42230,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__42172_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__42172_SHARP_));

return cljs.core.second.call(null,p1__42172_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__42173_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__42173_SHARP_));

return cljs.core.second.call(null,p1__42173_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___42235 = "vline@100";
var actual__6058__auto___42236 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42235,actual__6058__auto___42236)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42235 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42235)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42236 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42236))," (using =)"].join('')));
}

var expected__6057__auto___42237 = "100";
var actual__6058__auto___42238 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42237,actual__6058__auto___42238)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42237 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42237)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42238 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42238))," (using =)"].join('')));
}

var expected__6057__auto___42239 = "0%";
var actual__6058__auto___42240 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42239,actual__6058__auto___42240)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42239 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42239)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42240 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42240))," (using =)"].join('')));
}

var expected__6057__auto___42241 = "100%";
var actual__6058__auto___42242 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42241,actual__6058__auto___42242)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42241 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42241)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42242 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42242))," (using =)"].join('')));
}

var expected__6057__auto___42243 = "vline@200";
var actual__6058__auto___42244 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42243,actual__6058__auto___42244)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42243 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42243)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42244 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42244))," (using =)"].join('')));
}

var expected__6057__auto___42245 = "200";
var actual__6058__auto___42246 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42245,actual__6058__auto___42246)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42245 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42245)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42246 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42246))," (using =)"].join('')));
}

var expected__6057__auto___42247 = "0%";
var actual__6058__auto___42248 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42247,actual__6058__auto___42248)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42247 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42247)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42248 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42248))," (using =)"].join('')));
}

var expected__6057__auto__ = "100%";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42202_42229,_STAR_parent_description_STAR__temp_val__42203_42230,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__42202_42229,_STAR_parent_description_STAR__temp_val__42203_42230,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__42174_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__42174_SHARP_));

return cljs.core.second.call(null,p1__42174_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__42175_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__42175_SHARP_));

return cljs.core.second.call(null,p1__42175_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__6057__auto___42249 = "hline@100";
var actual__6058__auto___42250 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42249,actual__6058__auto___42250)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42249 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42249)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42250 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42250))," (using =)"].join('')));
}

var expected__6057__auto___42251 = "0%";
var actual__6058__auto___42252 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42251,actual__6058__auto___42252)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42251 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42251)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42252 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42252))," (using =)"].join('')));
}

var expected__6057__auto___42253 = "100%";
var actual__6058__auto___42254 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42253,actual__6058__auto___42254)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42253 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42253)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42254 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42254))," (using =)"].join('')));
}

var expected__6057__auto___42255 = "100";
var actual__6058__auto___42256 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__6057__auto___42255,actual__6058__auto___42256)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42255 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42255)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42256 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42256))," (using =)"].join('')));
}

var expected__6057__auto___42257 = "hline@200";
var actual__6058__auto___42258 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42257,actual__6058__auto___42258)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42257 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42257)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42258 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42258))," (using =)"].join('')));
}

var expected__6057__auto___42259 = "0%";
var actual__6058__auto___42260 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42259,actual__6058__auto___42260)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42259 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42259)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42260 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42260))," (using =)"].join('')));
}

var expected__6057__auto___42261 = "100%";
var actual__6058__auto___42262 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto___42261,actual__6058__auto___42262)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto___42261 == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto___42261)),speclj.platform.endl,"     got: ",(((actual__6058__auto___42262 == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto___42262))," (using =)"].join('')));
}

var expected__6057__auto__ = "200";
var actual__6058__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__42202_42229,_STAR_parent_description_STAR__temp_val__42203_42230,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222))
)],null)));
var chunk__42205_42232 = null;
var count__42206_42233 = (0);
var i__42207_42234 = (0);
while(true){
if((i__42207_42234 < count__42206_42233)){
var component__5973__auto___42263 = cljs.core._nth.call(null,chunk__42205_42232,i__42207_42234);
speclj.components.install.call(null,component__5973__auto___42263,description__5972__auto____$1);


var G__42264 = seq__42204_42231;
var G__42265 = chunk__42205_42232;
var G__42266 = count__42206_42233;
var G__42267 = (i__42207_42234 + (1));
seq__42204_42231 = G__42264;
chunk__42205_42232 = G__42265;
count__42206_42233 = G__42266;
i__42207_42234 = G__42267;
continue;
} else {
var temp__5735__auto___42268 = cljs.core.seq.call(null,seq__42204_42231);
if(temp__5735__auto___42268){
var seq__42204_42269__$1 = temp__5735__auto___42268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42204_42269__$1)){
var c__4556__auto___42270 = cljs.core.chunk_first.call(null,seq__42204_42269__$1);
var G__42271 = cljs.core.chunk_rest.call(null,seq__42204_42269__$1);
var G__42272 = c__4556__auto___42270;
var G__42273 = cljs.core.count.call(null,c__4556__auto___42270);
var G__42274 = (0);
seq__42204_42231 = G__42271;
chunk__42205_42232 = G__42272;
count__42206_42233 = G__42273;
i__42207_42234 = G__42274;
continue;
} else {
var component__5973__auto___42275 = cljs.core.first.call(null,seq__42204_42269__$1);
speclj.components.install.call(null,component__5973__auto___42275,description__5972__auto____$1);


var G__42276 = cljs.core.next.call(null,seq__42204_42269__$1);
var G__42277 = null;
var G__42278 = (0);
var G__42279 = (0);
seq__42204_42231 = G__42276;
chunk__42205_42232 = G__42277;
count__42206_42233 = G__42278;
i__42207_42234 = G__42279;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42202_42229);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})(),(function (){var description__5972__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__42208_42280 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__42209_42281 = description__5972__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__42209_42281);

try{var seq__42210_42282 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__42208_42280,_STAR_parent_description_STAR__temp_val__42209_42281,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var iter__4529__auto__ = (function ttt$web$board_spec$iter__42218(s__42219){
return (new cljs.core.LazySeq(null,(function (){
var s__42219__$1 = s__42219;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__42219__$1);
if(temp__5735__auto__){
var s__42219__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42219__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__42219__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__42221 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__42220 = (0);
while(true){
if((i__42220 < size__4528__auto__)){
var box = cljs.core._nth.call(null,c__4527__auto__,i__42220);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id,(3))));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id / (3)) | (0))));
cljs.core.chunk_append.call(null,b__42221,(function (){var expected__6057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__6058__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
})());

var G__42286 = (i__42220 + (1));
i__42220 = G__42286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42221),ttt$web$board_spec$iter__42218.call(null,cljs.core.chunk_rest.call(null,s__42219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42221),null);
}
} else {
var box = cljs.core.first.call(null,s__42219__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id,(3))));
var y = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id / (3)) | (0))));
return cljs.core.cons.call(null,(function (){var expected__6057__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__6058__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__6057__auto__,actual__6058__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__6057__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__6057__auto__)),speclj.platform.endl,"     got: ",(((actual__6058__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__6058__auto__))," (using =)"].join('')));
}
})(),ttt$web$board_spec$iter__42218.call(null,cljs.core.rest.call(null,s__42219__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,boxes);
});})(_STAR_parent_description_STAR__orig_val__42208_42280,_STAR_parent_description_STAR__temp_val__42209_42281,description__5972__auto____$1,_STAR_parent_description_STAR__orig_val__42176_42223,_STAR_parent_description_STAR__temp_val__42177_42224,description__5972__auto___42222))
)],null)));
var chunk__42211_42283 = null;
var count__42212_42284 = (0);
var i__42213_42285 = (0);
while(true){
if((i__42213_42285 < count__42212_42284)){
var component__5973__auto___42287 = cljs.core._nth.call(null,chunk__42211_42283,i__42213_42285);
speclj.components.install.call(null,component__5973__auto___42287,description__5972__auto____$1);


var G__42288 = seq__42210_42282;
var G__42289 = chunk__42211_42283;
var G__42290 = count__42212_42284;
var G__42291 = (i__42213_42285 + (1));
seq__42210_42282 = G__42288;
chunk__42211_42283 = G__42289;
count__42212_42284 = G__42290;
i__42213_42285 = G__42291;
continue;
} else {
var temp__5735__auto___42292 = cljs.core.seq.call(null,seq__42210_42282);
if(temp__5735__auto___42292){
var seq__42210_42293__$1 = temp__5735__auto___42292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42210_42293__$1)){
var c__4556__auto___42294 = cljs.core.chunk_first.call(null,seq__42210_42293__$1);
var G__42295 = cljs.core.chunk_rest.call(null,seq__42210_42293__$1);
var G__42296 = c__4556__auto___42294;
var G__42297 = cljs.core.count.call(null,c__4556__auto___42294);
var G__42298 = (0);
seq__42210_42282 = G__42295;
chunk__42211_42283 = G__42296;
count__42212_42284 = G__42297;
i__42213_42285 = G__42298;
continue;
} else {
var component__5973__auto___42299 = cljs.core.first.call(null,seq__42210_42293__$1);
speclj.components.install.call(null,component__5973__auto___42299,description__5972__auto____$1);


var G__42300 = cljs.core.next.call(null,seq__42210_42293__$1);
var G__42301 = null;
var G__42302 = (0);
var G__42303 = (0);
seq__42210_42282 = G__42300;
chunk__42211_42283 = G__42301;
count__42212_42284 = G__42302;
i__42213_42285 = G__42303;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42208_42280);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto____$1);
}

return description__5972__auto____$1;
})()],null)));
var chunk__42179_42226 = null;
var count__42180_42227 = (0);
var i__42181_42228 = (0);
while(true){
if((i__42181_42228 < count__42180_42227)){
var component__5973__auto___42304 = cljs.core._nth.call(null,chunk__42179_42226,i__42181_42228);
speclj.components.install.call(null,component__5973__auto___42304,description__5972__auto___42222);


var G__42305 = seq__42178_42225;
var G__42306 = chunk__42179_42226;
var G__42307 = count__42180_42227;
var G__42308 = (i__42181_42228 + (1));
seq__42178_42225 = G__42305;
chunk__42179_42226 = G__42306;
count__42180_42227 = G__42307;
i__42181_42228 = G__42308;
continue;
} else {
var temp__5735__auto___42309 = cljs.core.seq.call(null,seq__42178_42225);
if(temp__5735__auto___42309){
var seq__42178_42310__$1 = temp__5735__auto___42309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42178_42310__$1)){
var c__4556__auto___42311 = cljs.core.chunk_first.call(null,seq__42178_42310__$1);
var G__42312 = cljs.core.chunk_rest.call(null,seq__42178_42310__$1);
var G__42313 = c__4556__auto___42311;
var G__42314 = cljs.core.count.call(null,c__4556__auto___42311);
var G__42315 = (0);
seq__42178_42225 = G__42312;
chunk__42179_42226 = G__42313;
count__42180_42227 = G__42314;
i__42181_42228 = G__42315;
continue;
} else {
var component__5973__auto___42316 = cljs.core.first.call(null,seq__42178_42310__$1);
speclj.components.install.call(null,component__5973__auto___42316,description__5972__auto___42222);


var G__42317 = cljs.core.next.call(null,seq__42178_42310__$1);
var G__42318 = null;
var G__42319 = (0);
var G__42320 = (0);
seq__42178_42225 = G__42317;
chunk__42179_42226 = G__42318;
count__42180_42227 = G__42319;
i__42181_42228 = G__42320;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__42176_42223);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5972__auto___42222);
}


//# sourceMappingURL=board_spec.js.map
