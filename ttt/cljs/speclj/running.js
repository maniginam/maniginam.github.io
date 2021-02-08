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
var seq__8043 = cljs.core.seq.call(null,components);
var chunk__8044 = null;
var count__8045 = (0);
var i__8046 = (0);
while(true){
if((i__8046 < count__8045)){
var component = cljs.core._nth.call(null,chunk__8044,i__8046);
component.body.call(null);


var G__8047 = seq__8043;
var G__8048 = chunk__8044;
var G__8049 = count__8045;
var G__8050 = (i__8046 + (1));
seq__8043 = G__8047;
chunk__8044 = G__8048;
count__8045 = G__8049;
i__8046 = G__8050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8043);
if(temp__5735__auto__){
var seq__8043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8043__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8043__$1);
var G__8051 = cljs.core.chunk_rest.call(null,seq__8043__$1);
var G__8052 = c__4556__auto__;
var G__8053 = cljs.core.count.call(null,c__4556__auto__);
var G__8054 = (0);
seq__8043 = G__8051;
chunk__8044 = G__8052;
count__8045 = G__8053;
i__8046 = G__8054;
continue;
} else {
var component = cljs.core.first.call(null,seq__8043__$1);
component.body.call(null);


var G__8055 = cljs.core.next.call(null,seq__8043__$1);
var G__8056 = null;
var G__8057 = (0);
var G__8058 = (0);
seq__8043 = G__8055;
chunk__8044 = G__8056;
count__8045 = G__8057;
i__8046 = G__8058;
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
var seq__8059 = cljs.core.seq.call(null,withs);
var chunk__8060 = null;
var count__8061 = (0);
var i__8062 = (0);
while(true){
if((i__8062 < count__8061)){
var with$ = cljs.core._nth.call(null,chunk__8060,i__8062);
speclj.components.reset_with.call(null,with$);


var G__8063 = seq__8059;
var G__8064 = chunk__8060;
var G__8065 = count__8061;
var G__8066 = (i__8062 + (1));
seq__8059 = G__8063;
chunk__8060 = G__8064;
count__8061 = G__8065;
i__8062 = G__8066;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__8059);
if(temp__5735__auto__){
var seq__8059__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8059__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__8059__$1);
var G__8067 = cljs.core.chunk_rest.call(null,seq__8059__$1);
var G__8068 = c__4556__auto__;
var G__8069 = cljs.core.count.call(null,c__4556__auto__);
var G__8070 = (0);
seq__8059 = G__8067;
chunk__8060 = G__8068;
count__8061 = G__8069;
i__8062 = G__8070;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__8059__$1);
speclj.components.reset_with.call(null,with$);


var G__8071 = cljs.core.next.call(null,seq__8059__$1);
var G__8072 = null;
var G__8073 = (0);
var G__8074 = (0);
seq__8059 = G__8071;
chunk__8060 = G__8072;
count__8061 = G__8073;
i__8062 = G__8074;
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
var G__8075 = cljs.core.deref.call(null,description__$1.parent);
var G__8076 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__8075;
components = G__8076;
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
var befores = speclj.running.collect_components.call(null,(function (p1__8077_SHARP_){
return cljs.core.deref.call(null,p1__8077_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__8078_SHARP_){
return cljs.core.deref.call(null,p1__8078_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__8079_SHARP_){
return cljs.core.deref.call(null,p1__8079_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__8080_SHARP_){
return p1__8080_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__8081_SHARP_){
return cljs.core.deref.call(null,p1__8081_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e8082){var e = e8082;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__8083(s__8084){
return (new cljs.core.LazySeq(null,(function (){
var s__8084__$1 = s__8084;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__8084__$1);
if(temp__5735__auto__){
var s__8084__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8084__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__8084__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__8086 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__8085 = (0);
while(true){
if((i__8085 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__8085);
cljs.core.chunk_append.call(null,b__8086,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__8087 = (i__8085 + (1));
i__8085 = G__8087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8086),speclj$running$do_characteristics_$_iter__8083.call(null,cljs.core.chunk_rest.call(null,s__8084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8086),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__8084__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__8083.call(null,cljs.core.rest.call(null,s__8084__$2)));
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
var G__8088 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__8089 = cljs.core.rest.call(null,contexts);
results__$1 = G__8088;
contexts = G__8089;
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
var var_names = cljs.core.map.call(null,(function (p1__8092_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__8092_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__8093_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__8093_SHARP_.unique_name)].join('');
}),withs);
var seq__8094_8126 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__8095_8127 = null;
var count__8096_8128 = (0);
var i__8097_8129 = (0);
while(true){
if((i__8097_8129 < count__8096_8128)){
var vec__8104_8130 = cljs.core._nth.call(null,chunk__8095_8127,i__8097_8129);
var n_8131 = cljs.core.nth.call(null,vec__8104_8130,(0),null);
var un_8132 = cljs.core.nth.call(null,vec__8104_8130,(1),null);
var code_8133 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8131)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_8132),";"].join('');
eval(code_8133);


var G__8134 = seq__8094_8126;
var G__8135 = chunk__8095_8127;
var G__8136 = count__8096_8128;
var G__8137 = (i__8097_8129 + (1));
seq__8094_8126 = G__8134;
chunk__8095_8127 = G__8135;
count__8096_8128 = G__8136;
i__8097_8129 = G__8137;
continue;
} else {
var temp__5735__auto___8138 = cljs.core.seq.call(null,seq__8094_8126);
if(temp__5735__auto___8138){
var seq__8094_8139__$1 = temp__5735__auto___8138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8094_8139__$1)){
var c__4556__auto___8140 = cljs.core.chunk_first.call(null,seq__8094_8139__$1);
var G__8141 = cljs.core.chunk_rest.call(null,seq__8094_8139__$1);
var G__8142 = c__4556__auto___8140;
var G__8143 = cljs.core.count.call(null,c__4556__auto___8140);
var G__8144 = (0);
seq__8094_8126 = G__8141;
chunk__8095_8127 = G__8142;
count__8096_8128 = G__8143;
i__8097_8129 = G__8144;
continue;
} else {
var vec__8107_8145 = cljs.core.first.call(null,seq__8094_8139__$1);
var n_8146 = cljs.core.nth.call(null,vec__8107_8145,(0),null);
var un_8147 = cljs.core.nth.call(null,vec__8107_8145,(1),null);
var code_8148 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8146)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_8147),";"].join('');
eval(code_8148);


var G__8149 = cljs.core.next.call(null,seq__8094_8139__$1);
var G__8150 = null;
var G__8151 = (0);
var G__8152 = (0);
seq__8094_8126 = G__8149;
chunk__8095_8127 = G__8150;
count__8096_8128 = G__8151;
i__8097_8129 = G__8152;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__8110_8153 = cljs.core.seq.call(null,var_names);
var chunk__8111_8154 = null;
var count__8112_8155 = (0);
var i__8113_8156 = (0);
while(true){
if((i__8113_8156 < count__8112_8155)){
var vec__8120_8157 = cljs.core._nth.call(null,chunk__8111_8154,i__8113_8156);
var n_8158 = cljs.core.nth.call(null,vec__8120_8157,(0),null);
var code_8159 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8158)," = null;"].join('');
eval(code_8159);


var G__8160 = seq__8110_8153;
var G__8161 = chunk__8111_8154;
var G__8162 = count__8112_8155;
var G__8163 = (i__8113_8156 + (1));
seq__8110_8153 = G__8160;
chunk__8111_8154 = G__8161;
count__8112_8155 = G__8162;
i__8113_8156 = G__8163;
continue;
} else {
var temp__5735__auto___8164 = cljs.core.seq.call(null,seq__8110_8153);
if(temp__5735__auto___8164){
var seq__8110_8165__$1 = temp__5735__auto___8164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8110_8165__$1)){
var c__4556__auto___8166 = cljs.core.chunk_first.call(null,seq__8110_8165__$1);
var G__8167 = cljs.core.chunk_rest.call(null,seq__8110_8165__$1);
var G__8168 = c__4556__auto___8166;
var G__8169 = cljs.core.count.call(null,c__4556__auto___8166);
var G__8170 = (0);
seq__8110_8153 = G__8167;
chunk__8111_8154 = G__8168;
count__8112_8155 = G__8169;
i__8113_8156 = G__8170;
continue;
} else {
var vec__8123_8171 = cljs.core.first.call(null,seq__8110_8165__$1);
var n_8172 = cljs.core.nth.call(null,vec__8123_8171,(0),null);
var code_8173 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_8172)," = null;"].join('');
eval(code_8173);


var G__8174 = cljs.core.next.call(null,seq__8110_8165__$1);
var G__8175 = null;
var G__8176 = (0);
var G__8177 = (0);
seq__8110_8153 = G__8174;
chunk__8111_8154 = G__8175;
count__8112_8155 = G__8176;
i__8113_8156 = G__8177;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__8178_SHARP_){
return p1__8178_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_8179 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_8179.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_8180 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_8180.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_8181 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_8181.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_8182 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_8182.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
