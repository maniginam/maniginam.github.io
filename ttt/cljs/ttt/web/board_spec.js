// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.board_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('ttt.web.board');
goog.require('ttt.master.spec_helper');
ttt.web.board_spec.test_atom = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.spec_helper.test_game,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153)));
var description__4695__auto___32962 = speclj.components.new_description.call(null,"The Board - ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__32908_32963 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32909_32964 = description__4695__auto___32962;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32909_32964);

try{var seq__32910_32965 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"the lines: ","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__32938_32969 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32939_32970 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32939_32970);

try{var seq__32940_32971 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"vertical",((function (_STAR_parent_description_STAR__orig_val__32938_32969,_STAR_parent_description_STAR__temp_val__32939_32970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_vertical_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__32904_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__32904_SHARP_));

return cljs.core.second.call(null,p1__32904_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__32905_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__32905_SHARP_));

return cljs.core.second.call(null,p1__32905_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___32975 = "vline@100";
var actual__4781__auto___32976 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32975,actual__4781__auto___32976)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32975 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32975)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32976 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32976))," (using =)"].join('')));
}

var expected__4780__auto___32977 = "100";
var actual__4781__auto___32978 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32977,actual__4781__auto___32978)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32977 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32977)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32978 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32978))," (using =)"].join('')));
}

var expected__4780__auto___32979 = "0%";
var actual__4781__auto___32980 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32979,actual__4781__auto___32980)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32979 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32979)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32980 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32980))," (using =)"].join('')));
}

var expected__4780__auto___32981 = "100%";
var actual__4781__auto___32982 = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32981,actual__4781__auto___32982)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32981 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32981)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32982 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32982))," (using =)"].join('')));
}

var expected__4780__auto___32983 = "vline@200";
var actual__4781__auto___32984 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___32983,actual__4781__auto___32984)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32983 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32983)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32984 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32984))," (using =)"].join('')));
}

var expected__4780__auto___32985 = "200";
var actual__4781__auto___32986 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___32985,actual__4781__auto___32986)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32985 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32985)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32986 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32986))," (using =)"].join('')));
}

var expected__4780__auto___32987 = "0%";
var actual__4781__auto___32988 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___32987,actual__4781__auto___32988)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32987 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32987)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32988 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32988))," (using =)"].join('')));
}

var expected__4780__auto__ = "100%";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32938_32969,_STAR_parent_description_STAR__temp_val__32939_32970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962))
),speclj.components.new_characteristic.call(null,"horizontal",((function (_STAR_parent_description_STAR__orig_val__32938_32969,_STAR_parent_description_STAR__temp_val__32939_32970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var lines = ttt.web.board.draw_horizontal_lines.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null));
var first = cljs.core.apply.call(null,(function (p1__32906_SHARP_){
cljs.core.keyword.call(null,cljs.core.first.call(null,p1__32906_SHARP_));

return cljs.core.second.call(null,p1__32906_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.first.call(null,lines)));
var second = cljs.core.apply.call(null,(function (p1__32907_SHARP_){
cljs.core.keyword.call(null,first.call(null,p1__32907_SHARP_));

return cljs.core.second.call(null,p1__32907_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.second.call(null,lines)));
var expected__4780__auto___32989 = "hline@100";
var actual__4781__auto___32990 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32989,actual__4781__auto___32990)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32989 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32989)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32990 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32990))," (using =)"].join('')));
}

var expected__4780__auto___32991 = "0%";
var actual__4781__auto___32992 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32991,actual__4781__auto___32992)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32991 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32991)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32992 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32992))," (using =)"].join('')));
}

var expected__4780__auto___32993 = "100%";
var actual__4781__auto___32994 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32993,actual__4781__auto___32994)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32993 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32993)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32994 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32994))," (using =)"].join('')));
}

var expected__4780__auto___32995 = "100";
var actual__4781__auto___32996 = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(first);
if(cljs.core._EQ_.call(null,expected__4780__auto___32995,actual__4781__auto___32996)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32995 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32995)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32996 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32996))," (using =)"].join('')));
}

var expected__4780__auto___32997 = "hline@200";
var actual__4781__auto___32998 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___32997,actual__4781__auto___32998)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32997 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32997)),speclj.platform.endl,"     got: ",(((actual__4781__auto___32998 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___32998))," (using =)"].join('')));
}

var expected__4780__auto___32999 = "0%";
var actual__4781__auto___33000 = new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___32999,actual__4781__auto___33000)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___32999 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___32999)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33000 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33000))," (using =)"].join('')));
}

var expected__4780__auto___33001 = "100%";
var actual__4781__auto___33002 = new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto___33001,actual__4781__auto___33002)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33001 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33001)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33002 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33002))," (using =)"].join('')));
}

var expected__4780__auto__ = "200";
var actual__4781__auto__ = new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(second);
if(cljs.core._EQ_.call(null,expected__4780__auto__,actual__4781__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto__)),speclj.platform.endl,"     got: ",(((actual__4781__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__32938_32969,_STAR_parent_description_STAR__temp_val__32939_32970,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962))
)],null)));
var chunk__32941_32972 = null;
var count__32942_32973 = (0);
var i__32943_32974 = (0);
while(true){
if((i__32943_32974 < count__32942_32973)){
var component__4696__auto___33003 = cljs.core._nth.call(null,chunk__32941_32972,i__32943_32974);
speclj.components.install.call(null,component__4696__auto___33003,description__4695__auto____$1);


var G__33004 = seq__32940_32971;
var G__33005 = chunk__32941_32972;
var G__33006 = count__32942_32973;
var G__33007 = (i__32943_32974 + (1));
seq__32940_32971 = G__33004;
chunk__32941_32972 = G__33005;
count__32942_32973 = G__33006;
i__32943_32974 = G__33007;
continue;
} else {
var temp__5735__auto___33008 = cljs.core.seq.call(null,seq__32940_32971);
if(temp__5735__auto___33008){
var seq__32940_33009__$1 = temp__5735__auto___33008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32940_33009__$1)){
var c__4556__auto___33010 = cljs.core.chunk_first.call(null,seq__32940_33009__$1);
var G__33011 = cljs.core.chunk_rest.call(null,seq__32940_33009__$1);
var G__33012 = c__4556__auto___33010;
var G__33013 = cljs.core.count.call(null,c__4556__auto___33010);
var G__33014 = (0);
seq__32940_32971 = G__33011;
chunk__32941_32972 = G__33012;
count__32942_32973 = G__33013;
i__32943_32974 = G__33014;
continue;
} else {
var component__4696__auto___33015 = cljs.core.first.call(null,seq__32940_33009__$1);
speclj.components.install.call(null,component__4696__auto___33015,description__4695__auto____$1);


var G__33016 = cljs.core.next.call(null,seq__32940_33009__$1);
var G__33017 = null;
var G__33018 = (0);
var G__33019 = (0);
seq__32940_32971 = G__33016;
chunk__32941_32972 = G__33017;
count__32942_32973 = G__33018;
i__32943_32974 = G__33019;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32938_32969);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})(),(function (){var description__4695__auto____$1 = speclj.components.new_description.call(null,"boxes","ttt.web.board-spec");
var _STAR_parent_description_STAR__orig_val__32944_33020 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__32945_33021 = description__4695__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__32945_33021);

try{var seq__32946_33022 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"empty",((function (_STAR_parent_description_STAR__orig_val__32944_33020,_STAR_parent_description_STAR__temp_val__32945_33021,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962){
return (function (){
cljs.core.reset_BANG_.call(null,ttt.web.board.svg_size,(300));

var boxes = ttt.web.board.draw_boxes.call(null,ttt.web.board_spec.test_atom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7),(8)], null),new cljs.core.Keyword(null,"board-specs","board-specs",-706078460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boxes-per-row","boxes-per-row",2120658449),(3),new cljs.core.Keyword(null,"box-size","box-size",1023444916),(100),new cljs.core.Keyword(null,"svg-size","svg-size",366005153),(300)], null)], null));
var seq__32956 = cljs.core.seq.call(null,boxes);
var chunk__32958 = null;
var count__32959 = (0);
var i__32960 = (0);
while(true){
if((i__32960 < count__32959)){
var box = cljs.core._nth.call(null,chunk__32958,i__32960);
var id_33026 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_33027 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_33026,(3))));
var y_33028 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_33026 / (3)) | (0))));
var expected__4780__auto___33029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_33026,new cljs.core.Keyword(null,"x","x",2099068185),x_33027,new cljs.core.Keyword(null,"y","y",-1757859776),y_33028,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___33030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___33029,actual__4781__auto___33030)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33029 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33029)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33030 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33030))," (using =)"].join('')));
}


var G__33031 = seq__32956;
var G__33032 = chunk__32958;
var G__33033 = count__32959;
var G__33034 = (i__32960 + (1));
seq__32956 = G__33031;
chunk__32958 = G__33032;
count__32959 = G__33033;
i__32960 = G__33034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32956);
if(temp__5735__auto__){
var seq__32956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32956__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__32956__$1);
var G__33035 = cljs.core.chunk_rest.call(null,seq__32956__$1);
var G__33036 = c__4556__auto__;
var G__33037 = cljs.core.count.call(null,c__4556__auto__);
var G__33038 = (0);
seq__32956 = G__33035;
chunk__32958 = G__33036;
count__32959 = G__33037;
i__32960 = G__33038;
continue;
} else {
var box = cljs.core.first.call(null,seq__32956__$1);
var id_33039 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,box));
var x_33040 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * cljs.core.rem.call(null,id_33039,(3))));
var y_33041 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((((300) / (3)) * ((id_33039 / (3)) | (0))));
var expected__4780__auto___33042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id_33039,new cljs.core.Keyword(null,"x","x",2099068185),x_33040,new cljs.core.Keyword(null,"y","y",-1757859776),y_33041,new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100",new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(100, 50, 255,0.45)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"30%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click"], null)], null);
var actual__4781__auto___33043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,box),cljs.core.assoc.call(null,cljs.core.second.call(null,box),new cljs.core.Keyword(null,"on-click","on-click",1632826543),"click")], null);
if(cljs.core._EQ_.call(null,expected__4780__auto___33042,actual__4781__auto___33043)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__4780__auto___33042 == null))?"nil":cljs.core.pr_str.call(null,expected__4780__auto___33042)),speclj.platform.endl,"     got: ",(((actual__4781__auto___33043 == null))?"nil":cljs.core.pr_str.call(null,actual__4781__auto___33043))," (using =)"].join('')));
}


var G__33044 = cljs.core.next.call(null,seq__32956__$1);
var G__33045 = null;
var G__33046 = (0);
var G__33047 = (0);
seq__32956 = G__33044;
chunk__32958 = G__33045;
count__32959 = G__33046;
i__32960 = G__33047;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_parent_description_STAR__orig_val__32944_33020,_STAR_parent_description_STAR__temp_val__32945_33021,description__4695__auto____$1,_STAR_parent_description_STAR__orig_val__32908_32963,_STAR_parent_description_STAR__temp_val__32909_32964,description__4695__auto___32962))
)],null)));
var chunk__32947_33023 = null;
var count__32948_33024 = (0);
var i__32949_33025 = (0);
while(true){
if((i__32949_33025 < count__32948_33024)){
var component__4696__auto___33048 = cljs.core._nth.call(null,chunk__32947_33023,i__32949_33025);
speclj.components.install.call(null,component__4696__auto___33048,description__4695__auto____$1);


var G__33049 = seq__32946_33022;
var G__33050 = chunk__32947_33023;
var G__33051 = count__32948_33024;
var G__33052 = (i__32949_33025 + (1));
seq__32946_33022 = G__33049;
chunk__32947_33023 = G__33050;
count__32948_33024 = G__33051;
i__32949_33025 = G__33052;
continue;
} else {
var temp__5735__auto___33053 = cljs.core.seq.call(null,seq__32946_33022);
if(temp__5735__auto___33053){
var seq__32946_33054__$1 = temp__5735__auto___33053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32946_33054__$1)){
var c__4556__auto___33055 = cljs.core.chunk_first.call(null,seq__32946_33054__$1);
var G__33056 = cljs.core.chunk_rest.call(null,seq__32946_33054__$1);
var G__33057 = c__4556__auto___33055;
var G__33058 = cljs.core.count.call(null,c__4556__auto___33055);
var G__33059 = (0);
seq__32946_33022 = G__33056;
chunk__32947_33023 = G__33057;
count__32948_33024 = G__33058;
i__32949_33025 = G__33059;
continue;
} else {
var component__4696__auto___33060 = cljs.core.first.call(null,seq__32946_33054__$1);
speclj.components.install.call(null,component__4696__auto___33060,description__4695__auto____$1);


var G__33061 = cljs.core.next.call(null,seq__32946_33054__$1);
var G__33062 = null;
var G__33063 = (0);
var G__33064 = (0);
seq__32946_33022 = G__33061;
chunk__32947_33023 = G__33062;
count__32948_33024 = G__33063;
i__32949_33025 = G__33064;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32944_33020);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto____$1);
}

return description__4695__auto____$1;
})()],null)));
var chunk__32911_32966 = null;
var count__32912_32967 = (0);
var i__32913_32968 = (0);
while(true){
if((i__32913_32968 < count__32912_32967)){
var component__4696__auto___33065 = cljs.core._nth.call(null,chunk__32911_32966,i__32913_32968);
speclj.components.install.call(null,component__4696__auto___33065,description__4695__auto___32962);


var G__33066 = seq__32910_32965;
var G__33067 = chunk__32911_32966;
var G__33068 = count__32912_32967;
var G__33069 = (i__32913_32968 + (1));
seq__32910_32965 = G__33066;
chunk__32911_32966 = G__33067;
count__32912_32967 = G__33068;
i__32913_32968 = G__33069;
continue;
} else {
var temp__5735__auto___33070 = cljs.core.seq.call(null,seq__32910_32965);
if(temp__5735__auto___33070){
var seq__32910_33071__$1 = temp__5735__auto___33070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32910_33071__$1)){
var c__4556__auto___33072 = cljs.core.chunk_first.call(null,seq__32910_33071__$1);
var G__33073 = cljs.core.chunk_rest.call(null,seq__32910_33071__$1);
var G__33074 = c__4556__auto___33072;
var G__33075 = cljs.core.count.call(null,c__4556__auto___33072);
var G__33076 = (0);
seq__32910_32965 = G__33073;
chunk__32911_32966 = G__33074;
count__32912_32967 = G__33075;
i__32913_32968 = G__33076;
continue;
} else {
var component__4696__auto___33077 = cljs.core.first.call(null,seq__32910_33071__$1);
speclj.components.install.call(null,component__4696__auto___33077,description__4695__auto___32962);


var G__33078 = cljs.core.next.call(null,seq__32910_33071__$1);
var G__33079 = null;
var G__33080 = (0);
var G__33081 = (0);
seq__32910_32965 = G__33078;
chunk__32911_32966 = G__33079;
count__32912_32967 = G__33080;
i__32913_32968 = G__33081;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__32908_32963);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4695__auto___32962);
}


//# sourceMappingURL=board_spec.js.map
