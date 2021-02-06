// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__2613 = cljs.core.seq.call(null,components);
var chunk__2614 = null;
var count__2615 = (0);
var i__2616 = (0);
while(true){
if((i__2616 < count__2615)){
var component = cljs.core._nth.call(null,chunk__2614,i__2616);
component.body.call(null);


var G__2617 = seq__2613;
var G__2618 = chunk__2614;
var G__2619 = count__2615;
var G__2620 = (i__2616 + (1));
seq__2613 = G__2617;
chunk__2614 = G__2618;
count__2615 = G__2619;
i__2616 = G__2620;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2613);
if(temp__5735__auto__){
var seq__2613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2613__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2613__$1);
var G__2621 = cljs.core.chunk_rest.call(null,seq__2613__$1);
var G__2622 = c__4556__auto__;
var G__2623 = cljs.core.count.call(null,c__4556__auto__);
var G__2624 = (0);
seq__2613 = G__2621;
chunk__2614 = G__2622;
count__2615 = G__2623;
i__2616 = G__2624;
continue;
} else {
var component = cljs.core.first.call(null,seq__2613__$1);
component.body.call(null);


var G__2625 = cljs.core.next.call(null,seq__2613__$1);
var G__2626 = null;
var G__2627 = (0);
var G__2628 = (0);
seq__2613 = G__2625;
chunk__2614 = G__2626;
count__2615 = G__2627;
i__2616 = G__2628;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__2629 = cljs.core.seq.call(null,withs);
var chunk__2630 = null;
var count__2631 = (0);
var i__2632 = (0);
while(true){
if((i__2632 < count__2631)){
var with$ = cljs.core._nth.call(null,chunk__2630,i__2632);
speclj.components.reset_with.call(null,with$);


var G__2633 = seq__2629;
var G__2634 = chunk__2630;
var G__2635 = count__2631;
var G__2636 = (i__2632 + (1));
seq__2629 = G__2633;
chunk__2630 = G__2634;
count__2631 = G__2635;
i__2632 = G__2636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__2629);
if(temp__5735__auto__){
var seq__2629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2629__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__2629__$1);
var G__2637 = cljs.core.chunk_rest.call(null,seq__2629__$1);
var G__2638 = c__4556__auto__;
var G__2639 = cljs.core.count.call(null,c__4556__auto__);
var G__2640 = (0);
seq__2629 = G__2637;
chunk__2630 = G__2638;
count__2631 = G__2639;
i__2632 = G__2640;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__2629__$1);
speclj.components.reset_with.call(null,with$);


var G__2641 = cljs.core.next.call(null,seq__2629__$1);
var G__2642 = null;
var G__2643 = (0);
var G__2644 = (0);
seq__2629 = G__2641;
chunk__2630 = G__2642;
count__2631 = G__2643;
i__2632 = G__2644;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__2645 = cljs.core.deref.call(null,description__$1.parent);
var G__2646 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__2645;
components = G__2646;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__2647_SHARP_){
return cljs.core.deref.call(null,p1__2647_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__2648_SHARP_){
return cljs.core.deref.call(null,p1__2648_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__2649_SHARP_){
return cljs.core.deref.call(null,p1__2649_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__2650_SHARP_){
return p1__2650_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__2651_SHARP_){
return cljs.core.deref.call(null,p1__2651_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e2652){var e = e2652;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__2653(s__2654){
return (new cljs.core.LazySeq(null,(function (){
var s__2654__$1 = s__2654;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__2654__$1);
if(temp__5735__auto__){
var s__2654__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2654__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__2654__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__2656 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__2655 = (0);
while(true){
if((i__2655 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__2655);
cljs.core.chunk_append.call(null,b__2656,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__2657 = (i__2655 + (1));
i__2655 = G__2657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2656),speclj$running$do_characteristics_$_iter__2653.call(null,cljs.core.chunk_rest.call(null,s__2654__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2656),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__2654__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__2653.call(null,cljs.core.rest.call(null,s__2654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var contexts = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,contexts)){
var G__2658 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__2659 = cljs.core.rest.call(null,contexts);
results__$1 = G__2658;
contexts = G__2659;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.charcteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__2662_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__2662_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__2663_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__2663_SHARP_.unique_name)].join('');
}),withs);
var seq__2664_2696 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__2665_2697 = null;
var count__2666_2698 = (0);
var i__2667_2699 = (0);
while(true){
if((i__2667_2699 < count__2666_2698)){
var vec__2674_2700 = cljs.core._nth.call(null,chunk__2665_2697,i__2667_2699);
var n_2701 = cljs.core.nth.call(null,vec__2674_2700,(0),null);
var un_2702 = cljs.core.nth.call(null,vec__2674_2700,(1),null);
var code_2703 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_2701)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_2702),";"].join('');
eval(code_2703);


var G__2704 = seq__2664_2696;
var G__2705 = chunk__2665_2697;
var G__2706 = count__2666_2698;
var G__2707 = (i__2667_2699 + (1));
seq__2664_2696 = G__2704;
chunk__2665_2697 = G__2705;
count__2666_2698 = G__2706;
i__2667_2699 = G__2707;
continue;
} else {
var temp__5735__auto___2708 = cljs.core.seq.call(null,seq__2664_2696);
if(temp__5735__auto___2708){
var seq__2664_2709__$1 = temp__5735__auto___2708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2664_2709__$1)){
var c__4556__auto___2710 = cljs.core.chunk_first.call(null,seq__2664_2709__$1);
var G__2711 = cljs.core.chunk_rest.call(null,seq__2664_2709__$1);
var G__2712 = c__4556__auto___2710;
var G__2713 = cljs.core.count.call(null,c__4556__auto___2710);
var G__2714 = (0);
seq__2664_2696 = G__2711;
chunk__2665_2697 = G__2712;
count__2666_2698 = G__2713;
i__2667_2699 = G__2714;
continue;
} else {
var vec__2677_2715 = cljs.core.first.call(null,seq__2664_2709__$1);
var n_2716 = cljs.core.nth.call(null,vec__2677_2715,(0),null);
var un_2717 = cljs.core.nth.call(null,vec__2677_2715,(1),null);
var code_2718 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_2716)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_2717),";"].join('');
eval(code_2718);


var G__2719 = cljs.core.next.call(null,seq__2664_2709__$1);
var G__2720 = null;
var G__2721 = (0);
var G__2722 = (0);
seq__2664_2696 = G__2719;
chunk__2665_2697 = G__2720;
count__2666_2698 = G__2721;
i__2667_2699 = G__2722;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__2680_2723 = cljs.core.seq.call(null,var_names);
var chunk__2681_2724 = null;
var count__2682_2725 = (0);
var i__2683_2726 = (0);
while(true){
if((i__2683_2726 < count__2682_2725)){
var vec__2690_2727 = cljs.core._nth.call(null,chunk__2681_2724,i__2683_2726);
var n_2728 = cljs.core.nth.call(null,vec__2690_2727,(0),null);
var code_2729 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_2728)," = null;"].join('');
eval(code_2729);


var G__2730 = seq__2680_2723;
var G__2731 = chunk__2681_2724;
var G__2732 = count__2682_2725;
var G__2733 = (i__2683_2726 + (1));
seq__2680_2723 = G__2730;
chunk__2681_2724 = G__2731;
count__2682_2725 = G__2732;
i__2683_2726 = G__2733;
continue;
} else {
var temp__5735__auto___2734 = cljs.core.seq.call(null,seq__2680_2723);
if(temp__5735__auto___2734){
var seq__2680_2735__$1 = temp__5735__auto___2734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2680_2735__$1)){
var c__4556__auto___2736 = cljs.core.chunk_first.call(null,seq__2680_2735__$1);
var G__2737 = cljs.core.chunk_rest.call(null,seq__2680_2735__$1);
var G__2738 = c__4556__auto___2736;
var G__2739 = cljs.core.count.call(null,c__4556__auto___2736);
var G__2740 = (0);
seq__2680_2723 = G__2737;
chunk__2681_2724 = G__2738;
count__2682_2725 = G__2739;
i__2683_2726 = G__2740;
continue;
} else {
var vec__2693_2741 = cljs.core.first.call(null,seq__2680_2735__$1);
var n_2742 = cljs.core.nth.call(null,vec__2693_2741,(0),null);
var code_2743 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_2742)," = null;"].join('');
eval(code_2743);


var G__2744 = cljs.core.next.call(null,seq__2680_2735__$1);
var G__2745 = null;
var G__2746 = (0);
var G__2747 = (0);
seq__2680_2723 = G__2744;
chunk__2681_2724 = G__2745;
count__2682_2725 = G__2746;
i__2683_2726 = G__2747;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__2748_SHARP_){
return p1__2748_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_2749 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_2749.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_2750 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_2750.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_2751 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_2751.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_2752 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_2752.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
