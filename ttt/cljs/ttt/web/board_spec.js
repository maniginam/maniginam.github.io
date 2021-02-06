// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___16141 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__16087_16142 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16088_16143 = description__4695__auto___16141;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16088_16143);

try{var seq__16089_16144 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__16117_16148 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16118_16149 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16118_16149);

try{var seq__16119_16150 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__16117_16148,_STAR_parent_description_STAR__temp_val__16118_16149,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__16083_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__16083_SHARP_));

return cljs.core.second.call(null,p1__16083_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__16084_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__16084_SHARP_));

return cljs.core.second.call(null,p1__16084_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___16154 = "vline@100";
var actual__4781__auto___16155 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16154,actual__4781__auto___16155)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16154 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16154)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16155 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16155))," (using =)"].join('')));
}

var expected__4780__auto___16156 = "100";
var actual__4781__auto___16157 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16156,actual__4781__auto___16157)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16156 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16156)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16157 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16157))," (using =)"].join('')));
}

var expected__4780__auto___16158 = "0%";
var actual__4781__auto___16159 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16158,actual__4781__auto___16159)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16158 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16158)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16159 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16159))," (using =)"].join('')));
}

var expected__4780__auto___16160 = "100%";
var actual__4781__auto___16161 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16160,actual__4781__auto___16161)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16160 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16160)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16161 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16161))," (using =)"].join('')));
}

var expected__4780__auto___16162 = "vline@200";
var actual__4781__auto___16163 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16162,actual__4781__auto___16163)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16162 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16162)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16163 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16163))," (using =)"].join('')));
}

var expected__4780__auto___16164 = "200";
var actual__4781__auto___16165 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16164,actual__4781__auto___16165)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16164 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16164)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16165 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16165))," (using =)"].join('')));
}

var expected__4780__auto___16166 = "0%";
var actual__4781__auto___16167 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16166,actual__4781__auto___16167)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16166 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16166)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16167 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16167))," (using =)"].join('')));
}

var expected__4780__auto__ = "100%";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16117_16148,_STAR_parent_description_STAR__temp_val__16118_16149,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__16117_16148,_STAR_parent_description_STAR__temp_val__16118_16149,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__16085_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__16085_SHARP_));

return cljs.core.second.call(null,p1__16085_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__16086_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__16086_SHARP_));

return cljs.core.second.call(null,p1__16086_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___16168 = "hline@100";
var actual__4781__auto___16169 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16168,actual__4781__auto___16169)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16168 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16168)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16169 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16169))," (using =)"].join('')));
}

var expected__4780__auto___16170 = "0%";
var actual__4781__auto___16171 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16170,actual__4781__auto___16171)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16170 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16170)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16171 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16171))," (using =)"].join('')));
}

var expected__4780__auto___16172 = "100%";
var actual__4781__auto___16173 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16172,actual__4781__auto___16173)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16172 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16172)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16173 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16173))," (using =)"].join('')));
}

var expected__4780__auto___16174 = "100";
var actual__4781__auto___16175 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___16174,actual__4781__auto___16175)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16174 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16174)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16175 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16175))," (using =)"].join('')));
}

var expected__4780__auto___16176 = "hline@200";
var actual__4781__auto___16177 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16176,actual__4781__auto___16177)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16176 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16176)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16177 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16177))," (using =)"].join('')));
}

var expected__4780__auto___16178 = "0%";
var actual__4781__auto___16179 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16178,actual__4781__auto___16179)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16178 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16178)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16179 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16179))," (using =)"].join('')));
}

var expected__4780__auto___16180 = "100%";
var actual__4781__auto___16181 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___16180,actual__4781__auto___16181)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16180 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16180)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16181 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16181))," (using =)"].join('')));
}

var expected__4780__auto__ = "200";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__16117_16148,_STAR_parent_description_STAR__temp_val__16118_16149,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141))
)],null)));
var chunk__16120_16151 = null;
var count__16121_16152 = (0);
var i__16122_16153 = (0);
while(true){
if((i__16122_16153 < count__16121_16152)){
var component__4696__auto___16182 = cljs.core._nth.call(null,chunk__16120_16151,i__16122_16153);
speclj.components.install.call(null,component__4696__auto___16182,description__4695__auto____$1);


var G__16183 = seq__16119_16150;
var G__16184 = chunk__16120_16151;
var G__16185 = count__16121_16152;
var G__16186 = (i__16122_16153 + (1));
seq__16119_16150 = G__16183;
chunk__16120_16151 = G__16184;
count__16121_16152 = G__16185;
i__16122_16153 = G__16186;
continue;
} else {
var temp__5735__auto___16187 = cljs.core.seq.call(null,seq__16119_16150);
if(temp__5735__auto___16187){
var seq__16119_16188__$1 = temp__5735__auto___16187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16119_16188__$1)){
var c__4556__auto___16189 = cljs.core.chunk_first.call(null,seq__16119_16188__$1);
var G__16190 = cljs.core.chunk_rest.call(null,seq__16119_16188__$1);
var G__16191 = c__4556__auto___16189;
var G__16192 = cljs.core.count.call(null,c__4556__auto___16189);
var G__16193 = (0);
seq__16119_16150 = G__16190;
chunk__16120_16151 = G__16191;
count__16121_16152 = G__16192;
i__16122_16153 = G__16193;
continue;
} else {
var component__4696__auto___16194 = cljs.core.first.call(null,seq__16119_16188__$1);
speclj.components.install.call(null,component__4696__auto___16194,description__4695__auto____$1);


var G__16195 = cljs.core.next.call(null,seq__16119_16188__$1);
var G__16196 = null;
var G__16197 = (0);
var G__16198 = (0);
seq__16119_16150 = G__16195;
chunk__16120_16151 = G__16196;
count__16121_16152 = G__16197;
i__16122_16153 = G__16198;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16117_16148);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__16123_16199 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__16124_16200 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__16124_16200);

try{var seq__16125_16201 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__16123_16199,_STAR_parent_description_STAR__temp_val__16124_16200,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var seq__16135 = cljs.core.seq.call(null,boxes);
var chunk__16137 = null;
var count__16138 = (0);
var i__16139 = (0);
while(true){
if((i__16139 < count__16138)){
var box = cljs.core._nth.call(null,chunk__16137,i__16139);
var id_16205 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_16206 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_16205,(3))));
var y_16207 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_16205 / (3)) | (0))));
var expected__4780__auto___16208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_16205,new cljs.core.Keyword(null,"x","x",2099068185),x_16206,new cljs.core.Keyword(null,"y","y",-1757859776),y_16207,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___16209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___16208,actual__4781__auto___16209)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16208 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16208)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16209 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16209))," (using =)"].join('')));
}


var G__16210 = seq__16135;
var G__16211 = chunk__16137;
var G__16212 = count__16138;
var G__16213 = (i__16139 + (1));
seq__16135 = G__16210;
chunk__16137 = G__16211;
count__16138 = G__16212;
i__16139 = G__16213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__16135);
if(temp__5735__auto__){
var seq__16135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16135__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16135__$1);
var G__16214 = cljs.core.chunk_rest.call(null,seq__16135__$1);
var G__16215 = c__4556__auto__;
var G__16216 = cljs.core.count.call(null,c__4556__auto__);
var G__16217 = (0);
seq__16135 = G__16214;
chunk__16137 = G__16215;
count__16138 = G__16216;
i__16139 = G__16217;
continue;
} else {
var box = cljs.core.first.call(null,seq__16135__$1);
var id_16218 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_16219 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_16218,(3))));
var y_16220 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_16218 / (3)) | (0))));
var expected__4780__auto___16221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_16218,new cljs.core.Keyword(null,"x","x",2099068185),x_16219,new cljs.core.Keyword(null,"y","y",-1757859776),y_16220,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___16222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___16221,actual__4781__auto___16222)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___16221 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___16221)),speclj.platform.endl,"     got: ",(((actual__4781__auto___16222 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___16222))," (using =)"].join('')));
}


var G__16223 = cljs.core.next.call(null,seq__16135__$1);
var G__16224 = null;
var G__16225 = (0);
var G__16226 = (0);
seq__16135 = G__16223;
chunk__16137 = G__16224;
count__16138 = G__16225;
i__16139 = G__16226;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__16123_16199,_STAR_parent_description_STAR__temp_val__16124_16200,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__16087_16142,_STAR_parent_description_STAR__temp_val__16088_16143,description__4695__auto___16141))
)],null)));
var chunk__16126_16202 = null;
var count__16127_16203 = (0);
var i__16128_16204 = (0);
while(true){
if((i__16128_16204 < count__16127_16203)){
var component__4696__auto___16227 = cljs.core._nth.call(null,chunk__16126_16202,i__16128_16204);
speclj.components.install.call(null,component__4696__auto___16227,description__4695__auto____$1);


var G__16228 = seq__16125_16201;
var G__16229 = chunk__16126_16202;
var G__16230 = count__16127_16203;
var G__16231 = (i__16128_16204 + (1));
seq__16125_16201 = G__16228;
chunk__16126_16202 = G__16229;
count__16127_16203 = G__16230;
i__16128_16204 = G__16231;
continue;
} else {
var temp__5735__auto___16232 = cljs.core.seq.call(null,seq__16125_16201);
if(temp__5735__auto___16232){
var seq__16125_16233__$1 = temp__5735__auto___16232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16125_16233__$1)){
var c__4556__auto___16234 = cljs.core.chunk_first.call(null,seq__16125_16233__$1);
var G__16235 = cljs.core.chunk_rest.call(null,seq__16125_16233__$1);
var G__16236 = c__4556__auto___16234;
var G__16237 = cljs.core.count.call(null,c__4556__auto___16234);
var G__16238 = (0);
seq__16125_16201 = G__16235;
chunk__16126_16202 = G__16236;
count__16127_16203 = G__16237;
i__16128_16204 = G__16238;
continue;
} else {
var component__4696__auto___16239 = cljs.core.first.call(null,seq__16125_16233__$1);
speclj.components.install.call(null,component__4696__auto___16239,description__4695__auto____$1);


var G__16240 = cljs.core.next.call(null,seq__16125_16233__$1);
var G__16241 = null;
var G__16242 = (0);
var G__16243 = (0);
seq__16125_16201 = G__16240;
chunk__16126_16202 = G__16241;
count__16127_16203 = G__16242;
i__16128_16204 = G__16243;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16123_16199);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__16090_16145 = null;
var count__16091_16146 = (0);
var i__16092_16147 = (0);
while(true){
if((i__16092_16147 < count__16091_16146)){
var component__4696__auto___16244 = cljs.core._nth.call(null,chunk__16090_16145,i__16092_16147);
speclj.components.install.call(null,component__4696__auto___16244,description__4695__auto___16141);


var G__16245 = seq__16089_16144;
var G__16246 = chunk__16090_16145;
var G__16247 = count__16091_16146;
var G__16248 = (i__16092_16147 + (1));
seq__16089_16144 = G__16245;
chunk__16090_16145 = G__16246;
count__16091_16146 = G__16247;
i__16092_16147 = G__16248;
continue;
} else {
var temp__5735__auto___16249 = cljs.core.seq.call(null,seq__16089_16144);
if(temp__5735__auto___16249){
var seq__16089_16250__$1 = temp__5735__auto___16249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16089_16250__$1)){
var c__4556__auto___16251 = cljs.core.chunk_first.call(null,seq__16089_16250__$1);
var G__16252 = cljs.core.chunk_rest.call(null,seq__16089_16250__$1);
var G__16253 = c__4556__auto___16251;
var G__16254 = cljs.core.count.call(null,c__4556__auto___16251);
var G__16255 = (0);
seq__16089_16144 = G__16252;
chunk__16090_16145 = G__16253;
count__16091_16146 = G__16254;
i__16092_16147 = G__16255;
continue;
} else {
var component__4696__auto___16256 = cljs.core.first.call(null,seq__16089_16250__$1);
speclj.components.install.call(null,component__4696__auto___16256,description__4695__auto___16141);


var G__16257 = cljs.core.next.call(null,seq__16089_16250__$1);
var G__16258 = null;
var G__16259 = (0);
var G__16260 = (0);
seq__16089_16144 = G__16257;
chunk__16090_16145 = G__16258;
count__16091_16146 = G__16259;
i__16092_16147 = G__16260;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__16087_16142);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___16141);
}


//# sourceMappingURL=board_spec.js.map
