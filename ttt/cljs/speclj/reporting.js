// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__7747_SHARP_){
return p1__7747_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_7748 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_7748.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_7749 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_7749.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_7750 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_7750.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_7751 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_7751.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_7752 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_7752.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_7753 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_7753.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_7754 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_7754.call(null,this$,exception);
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
var seq__7755 = cljs.core.seq.call(null,reporters);
var chunk__7756 = null;
var count__7757 = (0);
var i__7758 = (0);
while(true){
if((i__7758 < count__7757)){
var reporter = cljs.core._nth.call(null,chunk__7756,i__7758);
speclj.reporting.report_pass.call(null,reporter,result);


var G__7759 = seq__7755;
var G__7760 = chunk__7756;
var G__7761 = count__7757;
var G__7762 = (i__7758 + (1));
seq__7755 = G__7759;
chunk__7756 = G__7760;
count__7757 = G__7761;
i__7758 = G__7762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7755);
if(temp__5735__auto__){
var seq__7755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7755__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7755__$1);
var G__7763 = cljs.core.chunk_rest.call(null,seq__7755__$1);
var G__7764 = c__4556__auto__;
var G__7765 = cljs.core.count.call(null,c__4556__auto__);
var G__7766 = (0);
seq__7755 = G__7763;
chunk__7756 = G__7764;
count__7757 = G__7765;
i__7758 = G__7766;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7755__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__7767 = cljs.core.next.call(null,seq__7755__$1);
var G__7768 = null;
var G__7769 = (0);
var G__7770 = (0);
seq__7755 = G__7767;
chunk__7756 = G__7768;
count__7757 = G__7769;
i__7758 = G__7770;
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
var seq__7771 = cljs.core.seq.call(null,reporters);
var chunk__7772 = null;
var count__7773 = (0);
var i__7774 = (0);
while(true){
if((i__7774 < count__7773)){
var reporter = cljs.core._nth.call(null,chunk__7772,i__7774);
speclj.reporting.report_fail.call(null,reporter,result);


var G__7775 = seq__7771;
var G__7776 = chunk__7772;
var G__7777 = count__7773;
var G__7778 = (i__7774 + (1));
seq__7771 = G__7775;
chunk__7772 = G__7776;
count__7773 = G__7777;
i__7774 = G__7778;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7771);
if(temp__5735__auto__){
var seq__7771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7771__$1);
var G__7779 = cljs.core.chunk_rest.call(null,seq__7771__$1);
var G__7780 = c__4556__auto__;
var G__7781 = cljs.core.count.call(null,c__4556__auto__);
var G__7782 = (0);
seq__7771 = G__7779;
chunk__7772 = G__7780;
count__7773 = G__7781;
i__7774 = G__7782;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7771__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__7783 = cljs.core.next.call(null,seq__7771__$1);
var G__7784 = null;
var G__7785 = (0);
var G__7786 = (0);
seq__7771 = G__7783;
chunk__7772 = G__7784;
count__7773 = G__7785;
i__7774 = G__7786;
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
var seq__7787 = cljs.core.seq.call(null,reporters);
var chunk__7788 = null;
var count__7789 = (0);
var i__7790 = (0);
while(true){
if((i__7790 < count__7789)){
var reporter = cljs.core._nth.call(null,chunk__7788,i__7790);
speclj.reporting.report_pending.call(null,reporter,result);


var G__7791 = seq__7787;
var G__7792 = chunk__7788;
var G__7793 = count__7789;
var G__7794 = (i__7790 + (1));
seq__7787 = G__7791;
chunk__7788 = G__7792;
count__7789 = G__7793;
i__7790 = G__7794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7787);
if(temp__5735__auto__){
var seq__7787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7787__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7787__$1);
var G__7795 = cljs.core.chunk_rest.call(null,seq__7787__$1);
var G__7796 = c__4556__auto__;
var G__7797 = cljs.core.count.call(null,c__4556__auto__);
var G__7798 = (0);
seq__7787 = G__7795;
chunk__7788 = G__7796;
count__7789 = G__7797;
i__7790 = G__7798;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7787__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__7799 = cljs.core.next.call(null,seq__7787__$1);
var G__7800 = null;
var G__7801 = (0);
var G__7802 = (0);
seq__7787 = G__7799;
chunk__7788 = G__7800;
count__7789 = G__7801;
i__7790 = G__7802;
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
var seq__7803 = cljs.core.seq.call(null,reporters);
var chunk__7804 = null;
var count__7805 = (0);
var i__7806 = (0);
while(true){
if((i__7806 < count__7805)){
var reporter = cljs.core._nth.call(null,chunk__7804,i__7806);
speclj.reporting.report_error.call(null,reporter,result);


var G__7807 = seq__7803;
var G__7808 = chunk__7804;
var G__7809 = count__7805;
var G__7810 = (i__7806 + (1));
seq__7803 = G__7807;
chunk__7804 = G__7808;
count__7805 = G__7809;
i__7806 = G__7810;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7803);
if(temp__5735__auto__){
var seq__7803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7803__$1);
var G__7811 = cljs.core.chunk_rest.call(null,seq__7803__$1);
var G__7812 = c__4556__auto__;
var G__7813 = cljs.core.count.call(null,c__4556__auto__);
var G__7814 = (0);
seq__7803 = G__7811;
chunk__7804 = G__7812;
count__7805 = G__7813;
i__7806 = G__7814;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7803__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__7815 = cljs.core.next.call(null,seq__7803__$1);
var G__7816 = null;
var G__7817 = (0);
var G__7818 = (0);
seq__7803 = G__7815;
chunk__7804 = G__7816;
count__7805 = G__7817;
i__7806 = G__7818;
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
var levels_7819 = speclj.platform.stack_trace.call(null,exception);
var elides_7820 = (0);
while(true){
if(cljs.core.seq.call(null,levels_7819)){
var level_7821 = cljs.core.first.call(null,levels_7819);
if(speclj.platform.elide_level_QMARK_.call(null,level_7821)){
var G__7822 = cljs.core.rest.call(null,levels_7819);
var G__7823 = (elides_7820 + (1));
levels_7819 = G__7822;
elides_7820 = G__7823;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_7820);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_7821));

var G__7824 = cljs.core.rest.call(null,levels_7819);
var G__7825 = (0);
levels_7819 = G__7824;
elides_7820 = G__7825;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_7820);
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
var _STAR_print_newline_STAR__orig_val__7826_7830 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7827_7831 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7828_7832 = true;
var _STAR_print_fn_STAR__temp_val__7829_7833 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7828_7832);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7829_7833);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7827_7831);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7826_7830);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7837 = arguments.length;
var i__4737__auto___7838 = (0);
while(true){
if((i__4737__auto___7838 < len__4736__auto___7837)){
args__4742__auto__.push((arguments[i__4737__auto___7838]));

var G__7839 = (i__4737__auto___7838 + (1));
i__4737__auto___7838 = G__7839;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__7834_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7834_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq7835){
var G__7836 = cljs.core.first.call(null,seq7835);
var seq7835__$1 = cljs.core.next.call(null,seq7835);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7836,seq7835__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7842 = arguments.length;
var i__4737__auto___7843 = (0);
while(true){
if((i__4737__auto___7843 < len__4736__auto___7842)){
args__4742__auto__.push((arguments[i__4737__auto___7843]));

var G__7844 = (i__4737__auto___7843 + (1));
i__4737__auto___7843 = G__7844;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq7840){
var G__7841 = cljs.core.first.call(null,seq7840);
var seq7840__$1 = cljs.core.next.call(null,seq7840);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7841,seq7840__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__7845 = cljs.core.seq.call(null,reporters);
var chunk__7846 = null;
var count__7847 = (0);
var i__7848 = (0);
while(true){
if((i__7848 < count__7847)){
var reporter = cljs.core._nth.call(null,chunk__7846,i__7848);
speclj.reporting.report_description.call(null,reporter,description);


var G__7849 = seq__7845;
var G__7850 = chunk__7846;
var G__7851 = count__7847;
var G__7852 = (i__7848 + (1));
seq__7845 = G__7849;
chunk__7846 = G__7850;
count__7847 = G__7851;
i__7848 = G__7852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7845);
if(temp__5735__auto__){
var seq__7845__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7845__$1);
var G__7853 = cljs.core.chunk_rest.call(null,seq__7845__$1);
var G__7854 = c__4556__auto__;
var G__7855 = cljs.core.count.call(null,c__4556__auto__);
var G__7856 = (0);
seq__7845 = G__7853;
chunk__7846 = G__7854;
count__7847 = G__7855;
i__7848 = G__7856;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7845__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__7857 = cljs.core.next.call(null,seq__7845__$1);
var G__7858 = null;
var G__7859 = (0);
var G__7860 = (0);
seq__7845 = G__7857;
chunk__7846 = G__7858;
count__7847 = G__7859;
i__7848 = G__7860;
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
var seq__7861 = cljs.core.seq.call(null,reporters);
var chunk__7862 = null;
var count__7863 = (0);
var i__7864 = (0);
while(true){
if((i__7864 < count__7863)){
var reporter = cljs.core._nth.call(null,chunk__7862,i__7864);
speclj.reporting.report_runs.call(null,reporter,results);


var G__7865 = seq__7861;
var G__7866 = chunk__7862;
var G__7867 = count__7863;
var G__7868 = (i__7864 + (1));
seq__7861 = G__7865;
chunk__7862 = G__7866;
count__7863 = G__7867;
i__7864 = G__7868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7861);
if(temp__5735__auto__){
var seq__7861__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7861__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7861__$1);
var G__7869 = cljs.core.chunk_rest.call(null,seq__7861__$1);
var G__7870 = c__4556__auto__;
var G__7871 = cljs.core.count.call(null,c__4556__auto__);
var G__7872 = (0);
seq__7861 = G__7869;
chunk__7862 = G__7870;
count__7863 = G__7871;
i__7864 = G__7872;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7861__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__7873 = cljs.core.next.call(null,seq__7861__$1);
var G__7874 = null;
var G__7875 = (0);
var G__7876 = (0);
seq__7861 = G__7873;
chunk__7862 = G__7874;
count__7863 = G__7875;
i__7864 = G__7876;
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
var seq__7877 = cljs.core.seq.call(null,reporters);
var chunk__7878 = null;
var count__7879 = (0);
var i__7880 = (0);
while(true){
if((i__7880 < count__7879)){
var reporter = cljs.core._nth.call(null,chunk__7878,i__7880);
speclj.reporting.report_message.call(null,reporter,message);


var G__7881 = seq__7877;
var G__7882 = chunk__7878;
var G__7883 = count__7879;
var G__7884 = (i__7880 + (1));
seq__7877 = G__7881;
chunk__7878 = G__7882;
count__7879 = G__7883;
i__7880 = G__7884;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7877);
if(temp__5735__auto__){
var seq__7877__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7877__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7877__$1);
var G__7885 = cljs.core.chunk_rest.call(null,seq__7877__$1);
var G__7886 = c__4556__auto__;
var G__7887 = cljs.core.count.call(null,c__4556__auto__);
var G__7888 = (0);
seq__7877 = G__7885;
chunk__7878 = G__7886;
count__7879 = G__7887;
i__7880 = G__7888;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7877__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__7889 = cljs.core.next.call(null,seq__7877__$1);
var G__7890 = null;
var G__7891 = (0);
var G__7892 = (0);
seq__7877 = G__7889;
chunk__7878 = G__7890;
count__7879 = G__7891;
i__7880 = G__7892;
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
var seq__7893 = cljs.core.seq.call(null,reporters);
var chunk__7894 = null;
var count__7895 = (0);
var i__7896 = (0);
while(true){
if((i__7896 < count__7895)){
var reporter = cljs.core._nth.call(null,chunk__7894,i__7896);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7897 = seq__7893;
var G__7898 = chunk__7894;
var G__7899 = count__7895;
var G__7900 = (i__7896 + (1));
seq__7893 = G__7897;
chunk__7894 = G__7898;
count__7895 = G__7899;
i__7896 = G__7900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__7893);
if(temp__5735__auto__){
var seq__7893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7893__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__7893__$1);
var G__7901 = cljs.core.chunk_rest.call(null,seq__7893__$1);
var G__7902 = c__4556__auto__;
var G__7903 = cljs.core.count.call(null,c__4556__auto__);
var G__7904 = (0);
seq__7893 = G__7901;
chunk__7894 = G__7902;
count__7895 = G__7903;
i__7896 = G__7904;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__7893__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__7905 = cljs.core.next.call(null,seq__7893__$1);
var G__7906 = null;
var G__7907 = (0);
var G__7908 = (0);
seq__7893 = G__7905;
chunk__7894 = G__7906;
count__7895 = G__7907;
i__7896 = G__7908;
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
