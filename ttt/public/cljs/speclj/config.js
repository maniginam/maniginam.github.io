// Compiled by ClojureScript 1.10.773 {}
goog.provide('speclj.config');
goog.require('cljs.core');
goog.require('speclj.platform');
speclj.config.default_reporters = cljs.core.atom.call(null,null);
speclj.config.active_reporters = (function speclj$config$active_reporters(){
if(cljs.core.truth_(speclj.config._STAR_reporters_STAR_)){
return speclj.config._STAR_reporters_STAR_;
} else {
var temp__5733__auto__ = cljs.core.deref.call(null,speclj.config.default_reporters);
if(cljs.core.truth_(temp__5733__auto__)){
var reporters = temp__5733__auto__;
return reporters;
} else {
throw (new Error("*reporters* is unbound and no default value has been provided"));
}
}
});
speclj.config.default_runner = cljs.core.atom.call(null,null);
speclj.config.default_runner_fn = cljs.core.atom.call(null,null);
speclj.config.active_runner = (function speclj$config$active_runner(){
if(cljs.core.truth_(speclj.config._STAR_runner_STAR_)){
return speclj.config._STAR_runner_STAR_;
} else {
var temp__5733__auto__ = cljs.core.deref.call(null,speclj.config.default_runner);
if(cljs.core.truth_(temp__5733__auto__)){
var runner = temp__5733__auto__;
return runner;
} else {
throw (new Error("*runner* is unbound and no default value has been provided"));
}
}
});
speclj.config._STAR_omit_pending_QMARK__STAR_ = false;
speclj.config._STAR_color_QMARK__STAR_ = false;
speclj.config._STAR_full_stack_trace_QMARK__STAR_ = false;
speclj.config._STAR_tag_filter_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include","include",153360230),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),cljs.core.PersistentHashSet.EMPTY], null);
speclj.config.default_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spec"], null),new cljs.core.Keyword(null,"runner","runner",1945441304),"standard",new cljs.core.Keyword(null,"reporters","reporters",-373999166),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["progress"], null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250),false], null);
speclj.config.config_bindings = (function speclj$config$config_bindings(){
throw "Not Supported in ClojureScript";
});
speclj.config.load_runner = (function speclj$config$load_runner(name){
try{return speclj.platform.dynamically_invoke.call(null,["speclj.run.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-runner"].join(''));
}catch (e2219){var e = e2219;
throw (new Error(["Failed to load runner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter_by_name = (function speclj$config$load_reporter_by_name(name){
try{return speclj.platform.dynamically_invoke.call(null,["speclj.report.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-reporter"].join(''));
}catch (e2220){var e = e2220;
throw (new Error(["Failed to load reporter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter = (function speclj$config$load_reporter(name_or_object){
if(typeof name_or_object === 'string'){
return speclj.config.load_reporter_by_name.call(null,name_or_object);
} else {
return name_or_object;
}
});
speclj.config.parse_tags = (function speclj$config$parse_tags(values){
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"includes","includes",-438304563),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY], null);
var values__$1 = values;
while(true){
if(cljs.core.seq.call(null,values__$1)){
var value = cljs.core.name.call(null,cljs.core.first.call(null,values__$1));
if(cljs.core._EQ_.call(null,"~",cljs.core.first.call(null,value))){
var G__2221 = cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,value))));
var G__2222 = cljs.core.rest.call(null,values__$1);
result = G__2221;
values__$1 = G__2222;
continue;
} else {
var G__2223 = cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"includes","includes",-438304563)], null),cljs.core.conj,cljs.core.keyword.call(null,value));
var G__2224 = cljs.core.rest.call(null,values__$1);
result = G__2223;
values__$1 = G__2224;
continue;
}
} else {
return result;
}
break;
}
});
speclj.config.config_mappings = (function speclj$config$config_mappings(_){
throw "Not Supportedin ClojureScript";
});
/**
 * Runs the given function with all the cofigurations set.  Useful in cljs because config-mappings can't be used.
 */
speclj.config.with_config = (function speclj$config$with_config(config,action){
var _STAR_runner_STAR__orig_val__2225 = speclj.config._STAR_runner_STAR_;
var _STAR_reporters_STAR__orig_val__2226 = speclj.config._STAR_reporters_STAR_;
var _STAR_specs_STAR__orig_val__2227 = speclj.config._STAR_specs_STAR_;
var _STAR_color_QMARK__STAR__orig_val__2228 = speclj.config._STAR_color_QMARK__STAR_;
var _STAR_omit_pending_QMARK__STAR__orig_val__2229 = speclj.config._STAR_omit_pending_QMARK__STAR_;
var _STAR_full_stack_trace_QMARK__STAR__orig_val__2230 = speclj.config._STAR_full_stack_trace_QMARK__STAR_;
var _STAR_tag_filter_STAR__orig_val__2231 = speclj.config._STAR_tag_filter_STAR_;
var _STAR_runner_STAR__temp_val__2232 = (cljs.core.truth_(new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config))?(function (){
cljs.core.println.call(null,"loading runner in config");

return speclj.config.load_runner.call(null,new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config));
})()
:speclj.config.active_runner.call(null));
var _STAR_reporters_STAR__temp_val__2233 = (cljs.core.truth_(new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.mapv.call(null,speclj.config.load_reporter,new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config)):speclj.config.active_reporters.call(null));
var _STAR_specs_STAR__temp_val__2234 = new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_color_QMARK__STAR__temp_val__2235 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_omit_pending_QMARK__STAR__temp_val__2236 = new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_full_stack_trace_QMARK__STAR__temp_val__2237 = (!((new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394).cljs$core$IFn$_invoke$arity$1(config) == null)));
var _STAR_tag_filter_STAR__temp_val__2238 = speclj.config.parse_tags.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(config));
(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__temp_val__2232);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__temp_val__2233);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__temp_val__2234);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__temp_val__2235);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__temp_val__2236);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__temp_val__2237);

(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__temp_val__2238);

try{return action.call(null);
}finally {(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__orig_val__2231);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__orig_val__2230);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__orig_val__2229);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__orig_val__2228);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__orig_val__2227);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__orig_val__2226);

(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__orig_val__2225);
}});

//# sourceMappingURL=config.js.map
