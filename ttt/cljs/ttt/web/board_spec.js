// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___83111 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__83057_83112 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83058_83113 = description__4695__auto___83111;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83058_83113);

try{var seq__83059_83114 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__83087_83118 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83088_83119 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83088_83119);

try{var seq__83089_83120 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__83087_83118,_STAR_parent_description_STAR__temp_val__83088_83119,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__83053_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__83053_SHARP_));

return cljs.core.second.call(null,p1__83053_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__83054_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__83054_SHARP_));

return cljs.core.second.call(null,p1__83054_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___83124 = "vline@100";
var actual__4781__auto___83125 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83124,actual__4781__auto___83125)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83124 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83124)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83125 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83125))," (using =)"].join('')));
}

var expected__4780__auto___83126 = "100";
var actual__4781__auto___83127 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83126,actual__4781__auto___83127)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83126 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83126)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83127 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83127))," (using =)"].join('')));
}

var expected__4780__auto___83128 = "0%";
var actual__4781__auto___83129 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83128,actual__4781__auto___83129)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83128 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83128)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83129 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83129))," (using =)"].join('')));
}

var expected__4780__auto___83130 = "100%";
var actual__4781__auto___83131 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83130,actual__4781__auto___83131)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83130 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83130)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83131 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83131))," (using =)"].join('')));
}

var expected__4780__auto___83132 = "vline@200";
var actual__4781__auto___83133 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83132,actual__4781__auto___83133)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83132 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83132)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83133 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83133))," (using =)"].join('')));
}

var expected__4780__auto___83134 = "200";
var actual__4781__auto___83135 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83134,actual__4781__auto___83135)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83134 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83134)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83135 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83135))," (using =)"].join('')));
}

var expected__4780__auto___83136 = "0%";
var actual__4781__auto___83137 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83136,actual__4781__auto___83137)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83136 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83136)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83137 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83137))," (using =)"].join('')));
}

var expected__4780__auto__ = "100%";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83087_83118,_STAR_parent_description_STAR__temp_val__83088_83119,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__83087_83118,_STAR_parent_description_STAR__temp_val__83088_83119,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__83055_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__83055_SHARP_));

return cljs.core.second.call(null,p1__83055_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__83056_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__83056_SHARP_));

return cljs.core.second.call(null,p1__83056_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___83138 = "hline@100";
var actual__4781__auto___83139 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83138,actual__4781__auto___83139)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83138 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83138)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83139 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83139))," (using =)"].join('')));
}

var expected__4780__auto___83140 = "0%";
var actual__4781__auto___83141 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83140,actual__4781__auto___83141)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83140 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83140)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83141 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83141))," (using =)"].join('')));
}

var expected__4780__auto___83142 = "100%";
var actual__4781__auto___83143 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83142,actual__4781__auto___83143)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83142 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83142)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83143 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83143))," (using =)"].join('')));
}

var expected__4780__auto___83144 = "100";
var actual__4781__auto___83145 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___83144,actual__4781__auto___83145)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83144 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83144)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83145 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83145))," (using =)"].join('')));
}

var expected__4780__auto___83146 = "hline@200";
var actual__4781__auto___83147 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83146,actual__4781__auto___83147)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83146 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83146)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83147 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83147))," (using =)"].join('')));
}

var expected__4780__auto___83148 = "0%";
var actual__4781__auto___83149 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83148,actual__4781__auto___83149)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83148 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83148)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83149 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83149))," (using =)"].join('')));
}

var expected__4780__auto___83150 = "100%";
var actual__4781__auto___83151 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___83150,actual__4781__auto___83151)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83150 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83150)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83151 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83151))," (using =)"].join('')));
}

var expected__4780__auto__ = "200";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__83087_83118,_STAR_parent_description_STAR__temp_val__83088_83119,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111))
)],null)));
var chunk__83090_83121 = null;
var count__83091_83122 = (0);
var i__83092_83123 = (0);
while(true){
if((i__83092_83123 < count__83091_83122)){
var component__4696__auto___83152 = cljs.core._nth.call(null,chunk__83090_83121,i__83092_83123);
speclj.components.install.call(null,component__4696__auto___83152,description__4695__auto____$1);


var G__83153 = seq__83089_83120;
var G__83154 = chunk__83090_83121;
var G__83155 = count__83091_83122;
var G__83156 = (i__83092_83123 + (1));
seq__83089_83120 = G__83153;
chunk__83090_83121 = G__83154;
count__83091_83122 = G__83155;
i__83092_83123 = G__83156;
continue;
} else {
var temp__5735__auto___83157 = cljs.core.seq.call(null,seq__83089_83120);
if(temp__5735__auto___83157){
var seq__83089_83158__$1 = temp__5735__auto___83157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83089_83158__$1)){
var c__4556__auto___83159 = cljs.core.chunk_first.call(null,seq__83089_83158__$1);
var G__83160 = cljs.core.chunk_rest.call(null,seq__83089_83158__$1);
var G__83161 = c__4556__auto___83159;
var G__83162 = cljs.core.count.call(null,c__4556__auto___83159);
var G__83163 = (0);
seq__83089_83120 = G__83160;
chunk__83090_83121 = G__83161;
count__83091_83122 = G__83162;
i__83092_83123 = G__83163;
continue;
} else {
var component__4696__auto___83164 = cljs.core.first.call(null,seq__83089_83158__$1);
speclj.components.install.call(null,component__4696__auto___83164,description__4695__auto____$1);


var G__83165 = cljs.core.next.call(null,seq__83089_83158__$1);
var G__83166 = null;
var G__83167 = (0);
var G__83168 = (0);
seq__83089_83120 = G__83165;
chunk__83090_83121 = G__83166;
count__83091_83122 = G__83167;
i__83092_83123 = G__83168;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83087_83118);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__83093_83169 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__83094_83170 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__83094_83170);

try{var seq__83095_83171 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__83093_83169,_STAR_parent_description_STAR__temp_val__83094_83170,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var seq__83105 = cljs.core.seq.call(null,boxes);
var chunk__83107 = null;
var count__83108 = (0);
var i__83109 = (0);
while(true){
if((i__83109 < count__83108)){
var box = cljs.core._nth.call(null,chunk__83107,i__83109);
var id_83175 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_83176 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_83175,(3))));
var y_83177 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_83175 / (3)) | (0))));
var expected__4780__auto___83178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_83175,new cljs.core.Keyword(null,"x","x",2099068185),x_83176,new cljs.core.Keyword(null,"y","y",-1757859776),y_83177,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___83179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___83178,actual__4781__auto___83179)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83178 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83178)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83179 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83179))," (using =)"].join('')));
}


var G__83180 = seq__83105;
var G__83181 = chunk__83107;
var G__83182 = count__83108;
var G__83183 = (i__83109 + (1));
seq__83105 = G__83180;
chunk__83107 = G__83181;
count__83108 = G__83182;
i__83109 = G__83183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__83105);
if(temp__5735__auto__){
var seq__83105__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83105__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__83105__$1);
var G__83184 = cljs.core.chunk_rest.call(null,seq__83105__$1);
var G__83185 = c__4556__auto__;
var G__83186 = cljs.core.count.call(null,c__4556__auto__);
var G__83187 = (0);
seq__83105 = G__83184;
chunk__83107 = G__83185;
count__83108 = G__83186;
i__83109 = G__83187;
continue;
} else {
var box = cljs.core.first.call(null,seq__83105__$1);
var id_83188 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_83189 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_83188,(3))));
var y_83190 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_83188 / (3)) | (0))));
var expected__4780__auto___83191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_83188,new cljs.core.Keyword(null,"x","x",2099068185),x_83189,new cljs.core.Keyword(null,"y","y",-1757859776),y_83190,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___83192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___83191,actual__4781__auto___83192)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___83191 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___83191)),speclj.platform.endl,"     got: ",(((actual__4781__auto___83192 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___83192))," (using =)"].join('')));
}


var G__83193 = cljs.core.next.call(null,seq__83105__$1);
var G__83194 = null;
var G__83195 = (0);
var G__83196 = (0);
seq__83105 = G__83193;
chunk__83107 = G__83194;
count__83108 = G__83195;
i__83109 = G__83196;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__83093_83169,_STAR_parent_description_STAR__temp_val__83094_83170,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__83057_83112,_STAR_parent_description_STAR__temp_val__83058_83113,description__4695__auto___83111))
)],null)));
var chunk__83096_83172 = null;
var count__83097_83173 = (0);
var i__83098_83174 = (0);
while(true){
if((i__83098_83174 < count__83097_83173)){
var component__4696__auto___83197 = cljs.core._nth.call(null,chunk__83096_83172,i__83098_83174);
speclj.components.install.call(null,component__4696__auto___83197,description__4695__auto____$1);


var G__83198 = seq__83095_83171;
var G__83199 = chunk__83096_83172;
var G__83200 = count__83097_83173;
var G__83201 = (i__83098_83174 + (1));
seq__83095_83171 = G__83198;
chunk__83096_83172 = G__83199;
count__83097_83173 = G__83200;
i__83098_83174 = G__83201;
continue;
} else {
var temp__5735__auto___83202 = cljs.core.seq.call(null,seq__83095_83171);
if(temp__5735__auto___83202){
var seq__83095_83203__$1 = temp__5735__auto___83202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83095_83203__$1)){
var c__4556__auto___83204 = cljs.core.chunk_first.call(null,seq__83095_83203__$1);
var G__83205 = cljs.core.chunk_rest.call(null,seq__83095_83203__$1);
var G__83206 = c__4556__auto___83204;
var G__83207 = cljs.core.count.call(null,c__4556__auto___83204);
var G__83208 = (0);
seq__83095_83171 = G__83205;
chunk__83096_83172 = G__83206;
count__83097_83173 = G__83207;
i__83098_83174 = G__83208;
continue;
} else {
var component__4696__auto___83209 = cljs.core.first.call(null,seq__83095_83203__$1);
speclj.components.install.call(null,component__4696__auto___83209,description__4695__auto____$1);


var G__83210 = cljs.core.next.call(null,seq__83095_83203__$1);
var G__83211 = null;
var G__83212 = (0);
var G__83213 = (0);
seq__83095_83171 = G__83210;
chunk__83096_83172 = G__83211;
count__83097_83173 = G__83212;
i__83098_83174 = G__83213;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83093_83169);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__83060_83115 = null;
var count__83061_83116 = (0);
var i__83062_83117 = (0);
while(true){
if((i__83062_83117 < count__83061_83116)){
var component__4696__auto___83214 = cljs.core._nth.call(null,chunk__83060_83115,i__83062_83117);
speclj.components.install.call(null,component__4696__auto___83214,description__4695__auto___83111);


var G__83215 = seq__83059_83114;
var G__83216 = chunk__83060_83115;
var G__83217 = count__83061_83116;
var G__83218 = (i__83062_83117 + (1));
seq__83059_83114 = G__83215;
chunk__83060_83115 = G__83216;
count__83061_83116 = G__83217;
i__83062_83117 = G__83218;
continue;
} else {
var temp__5735__auto___83219 = cljs.core.seq.call(null,seq__83059_83114);
if(temp__5735__auto___83219){
var seq__83059_83220__$1 = temp__5735__auto___83219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83059_83220__$1)){
var c__4556__auto___83221 = cljs.core.chunk_first.call(null,seq__83059_83220__$1);
var G__83222 = cljs.core.chunk_rest.call(null,seq__83059_83220__$1);
var G__83223 = c__4556__auto___83221;
var G__83224 = cljs.core.count.call(null,c__4556__auto___83221);
var G__83225 = (0);
seq__83059_83114 = G__83222;
chunk__83060_83115 = G__83223;
count__83061_83116 = G__83224;
i__83062_83117 = G__83225;
continue;
} else {
var component__4696__auto___83226 = cljs.core.first.call(null,seq__83059_83220__$1);
speclj.components.install.call(null,component__4696__auto___83226,description__4695__auto___83111);


var G__83227 = cljs.core.next.call(null,seq__83059_83220__$1);
var G__83228 = null;
var G__83229 = (0);
var G__83230 = (0);
seq__83059_83114 = G__83227;
chunk__83060_83115 = G__83228;
count__83061_83116 = G__83229;
i__83062_83117 = G__83230;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__83057_83112);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___83111);
}


//# sourceMappingURL=board_spec.js.map
