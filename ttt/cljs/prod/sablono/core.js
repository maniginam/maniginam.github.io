// Compiled by ClojureScript 1.10.773 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__3959__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__3956 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__3957 = cljs.core.seq.call(null,vec__3956);
var first__3958 = cljs.core.first.call(null,seq__3957);
var seq__3957__$1 = cljs.core.next.call(null,seq__3957);
var tag = first__3958;
var body = seq__3957__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__3959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3960__i = 0, G__3960__a = new Array(arguments.length -  0);
while (G__3960__i < G__3960__a.length) {G__3960__a[G__3960__i] = arguments[G__3960__i + 0]; ++G__3960__i;}
  args = new cljs.core.IndexedSeq(G__3960__a,0,null);
} 
return G__3959__delegate.call(this,args);};
G__3959.cljs$lang$maxFixedArity = 0;
G__3959.cljs$lang$applyTo = (function (arglist__3961){
var args = cljs.core.seq(arglist__3961);
return G__3959__delegate(args);
});
G__3959.cljs$core$IFn$_invoke$arity$variadic = G__3959__delegate;
return G__3959;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__3962(s__3963){
return (new cljs.core.LazySeq(null,(function (){
var s__3963__$1 = s__3963;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3963__$1);
if(temp__5735__auto__){
var s__3963__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3963__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__3963__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__3965 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__3964 = (0);
while(true){
if((i__3964 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__3964);
cljs.core.chunk_append.call(null,b__3965,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__3966 = (i__3964 + (1));
i__3964 = G__3966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3965),sablono$core$update_arglists_$_iter__3962.call(null,cljs.core.chunk_rest.call(null,s__3963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3965),null);
}
} else {
var args = cljs.core.first.call(null,s__3963__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__3962.call(null,cljs.core.rest.call(null,s__3963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3972 = arguments.length;
var i__4737__auto___3973 = (0);
while(true){
if((i__4737__auto___3973 < len__4736__auto___3972)){
args__4742__auto__.push((arguments[i__4737__auto___3973]));

var G__3974 = (i__4737__auto___3973 + (1));
i__4737__auto___3973 = G__3974;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__3968(s__3969){
return (new cljs.core.LazySeq(null,(function (){
var s__3969__$1 = s__3969;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3969__$1);
if(temp__5735__auto__){
var s__3969__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3969__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__3969__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__3971 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__3970 = (0);
while(true){
if((i__3970 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__3970);
cljs.core.chunk_append.call(null,b__3971,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__3975 = (i__3970 + (1));
i__3970 = G__3975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3971),sablono$core$iter__3968.call(null,cljs.core.chunk_rest.call(null,s__3969__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3971),null);
}
} else {
var style = cljs.core.first.call(null,s__3969__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__3968.call(null,cljs.core.rest.call(null,s__3969__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq3967){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq3967));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to3976 = (function sablono$core$link_to3976(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3979 = arguments.length;
var i__4737__auto___3980 = (0);
while(true){
if((i__4737__auto___3980 < len__4736__auto___3979)){
args__4742__auto__.push((arguments[i__4737__auto___3980]));

var G__3981 = (i__4737__auto___3980 + (1));
i__4737__auto___3980 = G__3981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to3976.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to3976.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to3976.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to3976.cljs$lang$applyTo = (function (seq3977){
var G__3978 = cljs.core.first.call(null,seq3977);
var seq3977__$1 = cljs.core.next.call(null,seq3977);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3978,seq3977__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to3976);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to3982 = (function sablono$core$mail_to3982(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3989 = arguments.length;
var i__4737__auto___3990 = (0);
while(true){
if((i__4737__auto___3990 < len__4736__auto___3989)){
args__4742__auto__.push((arguments[i__4737__auto___3990]));

var G__3991 = (i__4737__auto___3990 + (1));
i__4737__auto___3990 = G__3991;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to3982.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to3982.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__3985){
var vec__3986 = p__3985;
var content = cljs.core.nth.call(null,vec__3986,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to3982.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to3982.cljs$lang$applyTo = (function (seq3983){
var G__3984 = cljs.core.first.call(null,seq3983);
var seq3983__$1 = cljs.core.next.call(null,seq3983);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3984,seq3983__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to3982);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list3992 = (function sablono$core$unordered_list3992(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list3992_$_iter__3993(s__3994){
return (new cljs.core.LazySeq(null,(function (){
var s__3994__$1 = s__3994;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__3994__$1);
if(temp__5735__auto__){
var s__3994__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3994__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__3994__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__3996 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__3995 = (0);
while(true){
if((i__3995 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__3995);
cljs.core.chunk_append.call(null,b__3996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__3997 = (i__3995 + (1));
i__3995 = G__3997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3996),sablono$core$unordered_list3992_$_iter__3993.call(null,cljs.core.chunk_rest.call(null,s__3994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3996),null);
}
} else {
var x = cljs.core.first.call(null,s__3994__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list3992_$_iter__3993.call(null,cljs.core.rest.call(null,s__3994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list3992);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list3998 = (function sablono$core$ordered_list3998(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list3998_$_iter__3999(s__4000){
return (new cljs.core.LazySeq(null,(function (){
var s__4000__$1 = s__4000;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4000__$1);
if(temp__5735__auto__){
var s__4000__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4000__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4000__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4002 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4001 = (0);
while(true){
if((i__4001 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__4001);
cljs.core.chunk_append.call(null,b__4002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__4003 = (i__4001 + (1));
i__4001 = G__4003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4002),sablono$core$ordered_list3998_$_iter__3999.call(null,cljs.core.chunk_rest.call(null,s__4000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4002),null);
}
} else {
var x = cljs.core.first.call(null,s__4000__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list3998_$_iter__3999.call(null,cljs.core.rest.call(null,s__4000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list3998);
/**
 * Create an image element.
 */
sablono.core.image4004 = (function sablono$core$image4004(var_args){
var G__4006 = arguments.length;
switch (G__4006) {
case 1:
return sablono.core.image4004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image4004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image4004.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image4004.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image4004.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image4004);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__4008_SHARP_,p2__4009_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4008_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__4009_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__4010_SHARP_,p2__4011_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4010_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__4011_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__4013 = arguments.length;
switch (G__4013) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field4015 = (function sablono$core$color_field4015(var_args){
var G__4017 = arguments.length;
switch (G__4017) {
case 1:
return sablono.core.color_field4015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field4015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field4015.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3946__auto__);
}));

(sablono.core.color_field4015.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.color_field4015.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field4015);

/**
 * Creates a date input field.
 */
sablono.core.date_field4018 = (function sablono$core$date_field4018(var_args){
var G__4020 = arguments.length;
switch (G__4020) {
case 1:
return sablono.core.date_field4018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field4018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field4018.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3946__auto__);
}));

(sablono.core.date_field4018.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.date_field4018.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field4018);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field4021 = (function sablono$core$datetime_field4021(var_args){
var G__4023 = arguments.length;
switch (G__4023) {
case 1:
return sablono.core.datetime_field4021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field4021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field4021.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3946__auto__);
}));

(sablono.core.datetime_field4021.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.datetime_field4021.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field4021);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field4024 = (function sablono$core$datetime_local_field4024(var_args){
var G__4026 = arguments.length;
switch (G__4026) {
case 1:
return sablono.core.datetime_local_field4024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field4024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field4024.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3946__auto__);
}));

(sablono.core.datetime_local_field4024.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.datetime_local_field4024.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field4024);

/**
 * Creates a email input field.
 */
sablono.core.email_field4027 = (function sablono$core$email_field4027(var_args){
var G__4029 = arguments.length;
switch (G__4029) {
case 1:
return sablono.core.email_field4027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field4027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field4027.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3946__auto__);
}));

(sablono.core.email_field4027.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.email_field4027.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field4027);

/**
 * Creates a file input field.
 */
sablono.core.file_field4030 = (function sablono$core$file_field4030(var_args){
var G__4032 = arguments.length;
switch (G__4032) {
case 1:
return sablono.core.file_field4030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field4030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field4030.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3946__auto__);
}));

(sablono.core.file_field4030.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.file_field4030.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field4030);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field4033 = (function sablono$core$hidden_field4033(var_args){
var G__4035 = arguments.length;
switch (G__4035) {
case 1:
return sablono.core.hidden_field4033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field4033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field4033.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3946__auto__);
}));

(sablono.core.hidden_field4033.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.hidden_field4033.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field4033);

/**
 * Creates a month input field.
 */
sablono.core.month_field4036 = (function sablono$core$month_field4036(var_args){
var G__4038 = arguments.length;
switch (G__4038) {
case 1:
return sablono.core.month_field4036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field4036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field4036.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3946__auto__);
}));

(sablono.core.month_field4036.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.month_field4036.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field4036);

/**
 * Creates a number input field.
 */
sablono.core.number_field4039 = (function sablono$core$number_field4039(var_args){
var G__4041 = arguments.length;
switch (G__4041) {
case 1:
return sablono.core.number_field4039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field4039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field4039.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3946__auto__);
}));

(sablono.core.number_field4039.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.number_field4039.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field4039);

/**
 * Creates a password input field.
 */
sablono.core.password_field4042 = (function sablono$core$password_field4042(var_args){
var G__4044 = arguments.length;
switch (G__4044) {
case 1:
return sablono.core.password_field4042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field4042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field4042.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3946__auto__);
}));

(sablono.core.password_field4042.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.password_field4042.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field4042);

/**
 * Creates a range input field.
 */
sablono.core.range_field4045 = (function sablono$core$range_field4045(var_args){
var G__4047 = arguments.length;
switch (G__4047) {
case 1:
return sablono.core.range_field4045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field4045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field4045.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3946__auto__);
}));

(sablono.core.range_field4045.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.range_field4045.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field4045);

/**
 * Creates a search input field.
 */
sablono.core.search_field4048 = (function sablono$core$search_field4048(var_args){
var G__4050 = arguments.length;
switch (G__4050) {
case 1:
return sablono.core.search_field4048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field4048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field4048.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3946__auto__);
}));

(sablono.core.search_field4048.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.search_field4048.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field4048);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field4051 = (function sablono$core$tel_field4051(var_args){
var G__4053 = arguments.length;
switch (G__4053) {
case 1:
return sablono.core.tel_field4051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field4051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field4051.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3946__auto__);
}));

(sablono.core.tel_field4051.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.tel_field4051.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field4051);

/**
 * Creates a text input field.
 */
sablono.core.text_field4054 = (function sablono$core$text_field4054(var_args){
var G__4056 = arguments.length;
switch (G__4056) {
case 1:
return sablono.core.text_field4054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field4054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field4054.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3946__auto__);
}));

(sablono.core.text_field4054.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.text_field4054.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field4054);

/**
 * Creates a time input field.
 */
sablono.core.time_field4057 = (function sablono$core$time_field4057(var_args){
var G__4059 = arguments.length;
switch (G__4059) {
case 1:
return sablono.core.time_field4057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field4057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field4057.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3946__auto__);
}));

(sablono.core.time_field4057.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.time_field4057.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field4057);

/**
 * Creates a url input field.
 */
sablono.core.url_field4060 = (function sablono$core$url_field4060(var_args){
var G__4062 = arguments.length;
switch (G__4062) {
case 1:
return sablono.core.url_field4060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field4060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field4060.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3946__auto__);
}));

(sablono.core.url_field4060.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.url_field4060.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field4060);

/**
 * Creates a week input field.
 */
sablono.core.week_field4063 = (function sablono$core$week_field4063(var_args){
var G__4065 = arguments.length;
switch (G__4065) {
case 1:
return sablono.core.week_field4063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field4063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field4063.cljs$core$IFn$_invoke$arity$1 = (function (name__3946__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3946__auto__);
}));

(sablono.core.week_field4063.cljs$core$IFn$_invoke$arity$2 = (function (name__3946__auto__,value__3947__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3946__auto__,value__3947__auto__);
}));

(sablono.core.week_field4063.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field4063);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box4083 = (function sablono$core$check_box4083(var_args){
var G__4085 = arguments.length;
switch (G__4085) {
case 1:
return sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box4083.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box4083.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box4083);
/**
 * Creates a radio button.
 */
sablono.core.radio_button4087 = (function sablono$core$radio_button4087(var_args){
var G__4089 = arguments.length;
switch (G__4089) {
case 1:
return sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button4087.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button4087.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button4087);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options4091 = (function sablono$core$select_options4091(coll){
var iter__4529__auto__ = (function sablono$core$select_options4091_$_iter__4092(s__4093){
return (new cljs.core.LazySeq(null,(function (){
var s__4093__$1 = s__4093;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4093__$1);
if(temp__5735__auto__){
var s__4093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4093__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__4093__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__4095 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__4094 = (0);
while(true){
if((i__4094 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__4094);
cljs.core.chunk_append.call(null,b__4095,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__4096 = x;
var text = cljs.core.nth.call(null,vec__4096,(0),null);
var val = cljs.core.nth.call(null,vec__4096,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__4096,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options4091.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__4102 = (i__4094 + (1));
i__4094 = G__4102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4095),sablono$core$select_options4091_$_iter__4092.call(null,cljs.core.chunk_rest.call(null,s__4093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4095),null);
}
} else {
var x = cljs.core.first.call(null,s__4093__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__4099 = x;
var text = cljs.core.nth.call(null,vec__4099,(0),null);
var val = cljs.core.nth.call(null,vec__4099,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__4099,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options4091.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options4091_$_iter__4092.call(null,cljs.core.rest.call(null,s__4093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options4091);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down4103 = (function sablono$core$drop_down4103(var_args){
var G__4105 = arguments.length;
switch (G__4105) {
case 2:
return sablono.core.drop_down4103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down4103.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down4103.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down4103.call(null,name,options,null);
}));

(sablono.core.drop_down4103.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down4103.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down4103);
/**
 * Creates a text area element.
 */
sablono.core.text_area4107 = (function sablono$core$text_area4107(var_args){
var G__4109 = arguments.length;
switch (G__4109) {
case 1:
return sablono.core.text_area4107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area4107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area4107.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area4107.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area4107.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area4107);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label4111 = (function sablono$core$label4111(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label4111);
/**
 * Creates a submit button.
 */
sablono.core.submit_button4112 = (function sablono$core$submit_button4112(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button4112);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button4113 = (function sablono$core$reset_button4113(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button4113);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to4114 = (function sablono$core$form_to4114(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4121 = arguments.length;
var i__4737__auto___4122 = (0);
while(true){
if((i__4737__auto___4122 < len__4736__auto___4121)){
args__4742__auto__.push((arguments[i__4737__auto___4122]));

var G__4123 = (i__4737__auto___4122 + (1));
i__4737__auto___4122 = G__4123;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to4114.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to4114.cljs$core$IFn$_invoke$arity$variadic = (function (p__4117,body){
var vec__4118 = p__4117;
var method = cljs.core.nth.call(null,vec__4118,(0),null);
var action = cljs.core.nth.call(null,vec__4118,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to4114.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to4114.cljs$lang$applyTo = (function (seq4115){
var G__4116 = cljs.core.first.call(null,seq4115);
var seq4115__$1 = cljs.core.next.call(null,seq4115);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4116,seq4115__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to4114);

//# sourceMappingURL=core.js.map
