// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__2317_SHARP_){
return p1__2317_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_2318 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_2318.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_2319 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_2319.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_2320 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_2320.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_2321 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_2321.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_2322 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_2322.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_2323 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_2323.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_2324 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_2324.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__2325 = cljs.core.seq.call(null,reporters);
var chunk__2326 = null;
var count__2327 = (0);
var i__2328 = (0);
while(true){
if((i__2328 < count__2327)){
var reporter = cljs.core._nth.call(null,chunk__2326,i__2328);
speclj.reporting.report_pass.call(null,reporter,result);


var G__2329 = seq__2325;
var G__2330 = chunk__2326;
var G__2331 = count__2327;
var G__2332 = (i__2328 + (1));
seq__2325 = G__2329;
chunk__2326 = G__2330;
count__2327 = G__2331;
i__2328 = G__2332;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2325);
if(temp__5735__auto__){
var seq__2325__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2325__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2325__$1);
var G__2333 = cljs.core.chunk_rest.call(null,seq__2325__$1);
var G__2334 = c__4556__auto__;
var G__2335 = cljs.core.count.call(null,c__4556__auto__);
var G__2336 = (0);
seq__2325 = G__2333;
chunk__2326 = G__2334;
count__2327 = G__2335;
i__2328 = G__2336;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2325__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__2337 = cljs.core.next.call(null,seq__2325__$1);
var G__2338 = null;
var G__2339 = (0);
var G__2340 = (0);
seq__2325 = G__2337;
chunk__2326 = G__2338;
count__2327 = G__2339;
i__2328 = G__2340;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__2341 = cljs.core.seq.call(null,reporters);
var chunk__2342 = null;
var count__2343 = (0);
var i__2344 = (0);
while(true){
if((i__2344 < count__2343)){
var reporter = cljs.core._nth.call(null,chunk__2342,i__2344);
speclj.reporting.report_fail.call(null,reporter,result);


var G__2345 = seq__2341;
var G__2346 = chunk__2342;
var G__2347 = count__2343;
var G__2348 = (i__2344 + (1));
seq__2341 = G__2345;
chunk__2342 = G__2346;
count__2343 = G__2347;
i__2344 = G__2348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2341);
if(temp__5735__auto__){
var seq__2341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2341__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2341__$1);
var G__2349 = cljs.core.chunk_rest.call(null,seq__2341__$1);
var G__2350 = c__4556__auto__;
var G__2351 = cljs.core.count.call(null,c__4556__auto__);
var G__2352 = (0);
seq__2341 = G__2349;
chunk__2342 = G__2350;
count__2343 = G__2351;
i__2344 = G__2352;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2341__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__2353 = cljs.core.next.call(null,seq__2341__$1);
var G__2354 = null;
var G__2355 = (0);
var G__2356 = (0);
seq__2341 = G__2353;
chunk__2342 = G__2354;
count__2343 = G__2355;
i__2344 = G__2356;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__2357 = cljs.core.seq.call(null,reporters);
var chunk__2358 = null;
var count__2359 = (0);
var i__2360 = (0);
while(true){
if((i__2360 < count__2359)){
var reporter = cljs.core._nth.call(null,chunk__2358,i__2360);
speclj.reporting.report_pending.call(null,reporter,result);


var G__2361 = seq__2357;
var G__2362 = chunk__2358;
var G__2363 = count__2359;
var G__2364 = (i__2360 + (1));
seq__2357 = G__2361;
chunk__2358 = G__2362;
count__2359 = G__2363;
i__2360 = G__2364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2357);
if(temp__5735__auto__){
var seq__2357__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2357__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2357__$1);
var G__2365 = cljs.core.chunk_rest.call(null,seq__2357__$1);
var G__2366 = c__4556__auto__;
var G__2367 = cljs.core.count.call(null,c__4556__auto__);
var G__2368 = (0);
seq__2357 = G__2365;
chunk__2358 = G__2366;
count__2359 = G__2367;
i__2360 = G__2368;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2357__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__2369 = cljs.core.next.call(null,seq__2357__$1);
var G__2370 = null;
var G__2371 = (0);
var G__2372 = (0);
seq__2357 = G__2369;
chunk__2358 = G__2370;
count__2359 = G__2371;
i__2360 = G__2372;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__2373 = cljs.core.seq.call(null,reporters);
var chunk__2374 = null;
var count__2375 = (0);
var i__2376 = (0);
while(true){
if((i__2376 < count__2375)){
var reporter = cljs.core._nth.call(null,chunk__2374,i__2376);
speclj.reporting.report_error.call(null,reporter,result);


var G__2377 = seq__2373;
var G__2378 = chunk__2374;
var G__2379 = count__2375;
var G__2380 = (i__2376 + (1));
seq__2373 = G__2377;
chunk__2374 = G__2378;
count__2375 = G__2379;
i__2376 = G__2380;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2373);
if(temp__5735__auto__){
var seq__2373__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2373__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2373__$1);
var G__2381 = cljs.core.chunk_rest.call(null,seq__2373__$1);
var G__2382 = c__4556__auto__;
var G__2383 = cljs.core.count.call(null,c__4556__auto__);
var G__2384 = (0);
seq__2373 = G__2381;
chunk__2374 = G__2382;
count__2375 = G__2383;
i__2376 = G__2384;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2373__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__2385 = cljs.core.next.call(null,seq__2373__$1);
var G__2386 = null;
var G__2387 = (0);
var G__2388 = (0);
seq__2373 = G__2385;
chunk__2374 = G__2386;
count__2375 = G__2387;
i__2376 = G__2388;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_2389 = speclj.platform.stack_trace.call(null,exception);
var elides_2390 = (0);
while(true){
if(cljs.core.seq.call(null,levels_2389)){
var level_2391 = cljs.core.first.call(null,levels_2389);
if(speclj.platform.elide_level_QMARK_.call(null,level_2391)){
var G__2392 = cljs.core.rest.call(null,levels_2389);
var G__2393 = (elides_2390 + (1));
levels_2389 = G__2392;
elides_2390 = G__2393;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_2390);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_2391));

var G__2394 = cljs.core.rest.call(null,levels_2389);
var G__2395 = (0);
levels_2389 = G__2394;
elides_2390 = G__2395;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_2390);
}
break;
}

var temp__5733__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5733__auto__)){
var cause = temp__5733__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__2396_2400 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__2397_2401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__2398_2402 = true;
var _STAR_print_fn_STAR__temp_val__2399_2403 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__2398_2402);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__2399_2403);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__2397_2401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__2396_2400);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2407 = arguments.length;
var i__4737__auto___2408 = (0);
while(true){
if((i__4737__auto___2408 < len__4736__auto___2407)){
args__4742__auto__.push((arguments[i__4737__auto___2408]));

var G__2409 = (i__4737__auto___2408 + (1));
i__4737__auto___2408 = G__2409;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__2404_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2404_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq2405){
var G__2406 = cljs.core.first.call(null,seq2405);
var seq2405__$1 = cljs.core.next.call(null,seq2405);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2406,seq2405__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2412 = arguments.length;
var i__4737__auto___2413 = (0);
while(true){
if((i__4737__auto___2413 < len__4736__auto___2412)){
args__4742__auto__.push((arguments[i__4737__auto___2413]));

var G__2414 = (i__4737__auto___2413 + (1));
i__4737__auto___2413 = G__2414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq2410){
var G__2411 = cljs.core.first.call(null,seq2410);
var seq2410__$1 = cljs.core.next.call(null,seq2410);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2411,seq2410__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__2415 = cljs.core.seq.call(null,reporters);
var chunk__2416 = null;
var count__2417 = (0);
var i__2418 = (0);
while(true){
if((i__2418 < count__2417)){
var reporter = cljs.core._nth.call(null,chunk__2416,i__2418);
speclj.reporting.report_description.call(null,reporter,description);


var G__2419 = seq__2415;
var G__2420 = chunk__2416;
var G__2421 = count__2417;
var G__2422 = (i__2418 + (1));
seq__2415 = G__2419;
chunk__2416 = G__2420;
count__2417 = G__2421;
i__2418 = G__2422;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2415);
if(temp__5735__auto__){
var seq__2415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2415__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2415__$1);
var G__2423 = cljs.core.chunk_rest.call(null,seq__2415__$1);
var G__2424 = c__4556__auto__;
var G__2425 = cljs.core.count.call(null,c__4556__auto__);
var G__2426 = (0);
seq__2415 = G__2423;
chunk__2416 = G__2424;
count__2417 = G__2425;
i__2418 = G__2426;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2415__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__2427 = cljs.core.next.call(null,seq__2415__$1);
var G__2428 = null;
var G__2429 = (0);
var G__2430 = (0);
seq__2415 = G__2427;
chunk__2416 = G__2428;
count__2417 = G__2429;
i__2418 = G__2430;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__2431 = cljs.core.seq.call(null,reporters);
var chunk__2432 = null;
var count__2433 = (0);
var i__2434 = (0);
while(true){
if((i__2434 < count__2433)){
var reporter = cljs.core._nth.call(null,chunk__2432,i__2434);
speclj.reporting.report_runs.call(null,reporter,results);


var G__2435 = seq__2431;
var G__2436 = chunk__2432;
var G__2437 = count__2433;
var G__2438 = (i__2434 + (1));
seq__2431 = G__2435;
chunk__2432 = G__2436;
count__2433 = G__2437;
i__2434 = G__2438;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2431);
if(temp__5735__auto__){
var seq__2431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2431__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2431__$1);
var G__2439 = cljs.core.chunk_rest.call(null,seq__2431__$1);
var G__2440 = c__4556__auto__;
var G__2441 = cljs.core.count.call(null,c__4556__auto__);
var G__2442 = (0);
seq__2431 = G__2439;
chunk__2432 = G__2440;
count__2433 = G__2441;
i__2434 = G__2442;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2431__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__2443 = cljs.core.next.call(null,seq__2431__$1);
var G__2444 = null;
var G__2445 = (0);
var G__2446 = (0);
seq__2431 = G__2443;
chunk__2432 = G__2444;
count__2433 = G__2445;
i__2434 = G__2446;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__2447 = cljs.core.seq.call(null,reporters);
var chunk__2448 = null;
var count__2449 = (0);
var i__2450 = (0);
while(true){
if((i__2450 < count__2449)){
var reporter = cljs.core._nth.call(null,chunk__2448,i__2450);
speclj.reporting.report_message.call(null,reporter,message);


var G__2451 = seq__2447;
var G__2452 = chunk__2448;
var G__2453 = count__2449;
var G__2454 = (i__2450 + (1));
seq__2447 = G__2451;
chunk__2448 = G__2452;
count__2449 = G__2453;
i__2450 = G__2454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2447);
if(temp__5735__auto__){
var seq__2447__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2447__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2447__$1);
var G__2455 = cljs.core.chunk_rest.call(null,seq__2447__$1);
var G__2456 = c__4556__auto__;
var G__2457 = cljs.core.count.call(null,c__4556__auto__);
var G__2458 = (0);
seq__2447 = G__2455;
chunk__2448 = G__2456;
count__2449 = G__2457;
i__2450 = G__2458;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2447__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__2459 = cljs.core.next.call(null,seq__2447__$1);
var G__2460 = null;
var G__2461 = (0);
var G__2462 = (0);
seq__2447 = G__2459;
chunk__2448 = G__2460;
count__2449 = G__2461;
i__2450 = G__2462;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__2463 = cljs.core.seq.call(null,reporters);
var chunk__2464 = null;
var count__2465 = (0);
var i__2466 = (0);
while(true){
if((i__2466 < count__2465)){
var reporter = cljs.core._nth.call(null,chunk__2464,i__2466);
speclj.reporting.report_error.call(null,reporter,exception);


var G__2467 = seq__2463;
var G__2468 = chunk__2464;
var G__2469 = count__2465;
var G__2470 = (i__2466 + (1));
seq__2463 = G__2467;
chunk__2464 = G__2468;
count__2465 = G__2469;
i__2466 = G__2470;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2463);
if(temp__5735__auto__){
var seq__2463__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2463__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2463__$1);
var G__2471 = cljs.core.chunk_rest.call(null,seq__2463__$1);
var G__2472 = c__4556__auto__;
var G__2473 = cljs.core.count.call(null,c__4556__auto__);
var G__2474 = (0);
seq__2463 = G__2471;
chunk__2464 = G__2472;
count__2465 = G__2473;
i__2466 = G__2474;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__2463__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__2475 = cljs.core.next.call(null,seq__2463__$1);
var G__2476 = null;
var G__2477 = (0);
var G__2478 = (0);
seq__2463 = G__2475;
chunk__2464 = G__2476;
count__2465 = G__2477;
i__2466 = G__2478;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
