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
var G__7469__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__7466 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__7467 = cljs.core.seq.call(null,vec__7466);
var first__7468 = cljs.core.first.call(null,seq__7467);
var seq__7467__$1 = cljs.core.next.call(null,seq__7467);
var tag = first__7468;
var body = seq__7467__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__7469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7470__i = 0, G__7470__a = new Array(arguments.length -  0);
while (G__7470__i < G__7470__a.length) {G__7470__a[G__7470__i] = arguments[G__7470__i + 0]; ++G__7470__i;}
  args = new cljs.core.IndexedSeq(G__7470__a,0,null);
} 
return G__7469__delegate.call(this,args);};
G__7469.cljs$lang$maxFixedArity = 0;
G__7469.cljs$lang$applyTo = (function (arglist__7471){
var args = cljs.core.seq(arglist__7471);
return G__7469__delegate(args);
});
G__7469.cljs$core$IFn$_invoke$arity$variadic = G__7469__delegate;
return G__7469;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__7472(s__7473){
return (new cljs.core.LazySeq(null,(function (){
var s__7473__$1 = s__7473;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7473__$1);
if(temp__5735__auto__){
var s__7473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7473__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7473__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7475 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7474 = (0);
while(true){
if((i__7474 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__7474);
cljs.core.chunk_append.call(null,b__7475,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__7476 = (i__7474 + (1));
i__7474 = G__7476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7475),sablono$core$update_arglists_$_iter__7472.call(null,cljs.core.chunk_rest.call(null,s__7473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7475),null);
}
} else {
var args = cljs.core.first.call(null,s__7473__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__7472.call(null,cljs.core.rest.call(null,s__7473__$2)));
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
var len__4736__auto___7482 = arguments.length;
var i__4737__auto___7483 = (0);
while(true){
if((i__4737__auto___7483 < len__4736__auto___7482)){
args__4742__auto__.push((arguments[i__4737__auto___7483]));

var G__7484 = (i__4737__auto___7483 + (1));
i__4737__auto___7483 = G__7484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__7478(s__7479){
return (new cljs.core.LazySeq(null,(function (){
var s__7479__$1 = s__7479;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7479__$1);
if(temp__5735__auto__){
var s__7479__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7479__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7479__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7481 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7480 = (0);
while(true){
if((i__7480 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__7480);
cljs.core.chunk_append.call(null,b__7481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__7485 = (i__7480 + (1));
i__7480 = G__7485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7481),sablono$core$iter__7478.call(null,cljs.core.chunk_rest.call(null,s__7479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7481),null);
}
} else {
var style = cljs.core.first.call(null,s__7479__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__7478.call(null,cljs.core.rest.call(null,s__7479__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq7477){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7477));
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
sablono.core.link_to7486 = (function sablono$core$link_to7486(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7489 = arguments.length;
var i__4737__auto___7490 = (0);
while(true){
if((i__4737__auto___7490 < len__4736__auto___7489)){
args__4742__auto__.push((arguments[i__4737__auto___7490]));

var G__7491 = (i__4737__auto___7490 + (1));
i__4737__auto___7490 = G__7491;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to7486.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to7486.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to7486.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to7486.cljs$lang$applyTo = (function (seq7487){
var G__7488 = cljs.core.first.call(null,seq7487);
var seq7487__$1 = cljs.core.next.call(null,seq7487);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7488,seq7487__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to7486);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to7492 = (function sablono$core$mail_to7492(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7499 = arguments.length;
var i__4737__auto___7500 = (0);
while(true){
if((i__4737__auto___7500 < len__4736__auto___7499)){
args__4742__auto__.push((arguments[i__4737__auto___7500]));

var G__7501 = (i__4737__auto___7500 + (1));
i__4737__auto___7500 = G__7501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to7492.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to7492.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__7495){
var vec__7496 = p__7495;
var content = cljs.core.nth.call(null,vec__7496,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to7492.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to7492.cljs$lang$applyTo = (function (seq7493){
var G__7494 = cljs.core.first.call(null,seq7493);
var seq7493__$1 = cljs.core.next.call(null,seq7493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7494,seq7493__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to7492);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list7502 = (function sablono$core$unordered_list7502(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list7502_$_iter__7503(s__7504){
return (new cljs.core.LazySeq(null,(function (){
var s__7504__$1 = s__7504;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7504__$1);
if(temp__5735__auto__){
var s__7504__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7504__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7504__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7506 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7505 = (0);
while(true){
if((i__7505 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7505);
cljs.core.chunk_append.call(null,b__7506,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7507 = (i__7505 + (1));
i__7505 = G__7507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7506),sablono$core$unordered_list7502_$_iter__7503.call(null,cljs.core.chunk_rest.call(null,s__7504__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7506),null);
}
} else {
var x = cljs.core.first.call(null,s__7504__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list7502_$_iter__7503.call(null,cljs.core.rest.call(null,s__7504__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list7502);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list7508 = (function sablono$core$ordered_list7508(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list7508_$_iter__7509(s__7510){
return (new cljs.core.LazySeq(null,(function (){
var s__7510__$1 = s__7510;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7510__$1);
if(temp__5735__auto__){
var s__7510__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7510__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7510__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7512 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7511 = (0);
while(true){
if((i__7511 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7511);
cljs.core.chunk_append.call(null,b__7512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7513 = (i__7511 + (1));
i__7511 = G__7513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),sablono$core$ordered_list7508_$_iter__7509.call(null,cljs.core.chunk_rest.call(null,s__7510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),null);
}
} else {
var x = cljs.core.first.call(null,s__7510__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list7508_$_iter__7509.call(null,cljs.core.rest.call(null,s__7510__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list7508);
/**
 * Create an image element.
 */
sablono.core.image7514 = (function sablono$core$image7514(var_args){
var G__7516 = arguments.length;
switch (G__7516) {
case 1:
return sablono.core.image7514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image7514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image7514.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image7514.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image7514.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image7514);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__7518_SHARP_,p2__7519_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7518_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7519_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__7520_SHARP_,p2__7521_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7520_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7521_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__7523 = arguments.length;
switch (G__7523) {
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
sablono.core.color_field7525 = (function sablono$core$color_field7525(var_args){
var G__7527 = arguments.length;
switch (G__7527) {
case 1:
return sablono.core.color_field7525.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field7525.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field7525.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3861__auto__);
}));

(sablono.core.color_field7525.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.color_field7525.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field7525);

/**
 * Creates a date input field.
 */
sablono.core.date_field7528 = (function sablono$core$date_field7528(var_args){
var G__7530 = arguments.length;
switch (G__7530) {
case 1:
return sablono.core.date_field7528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field7528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field7528.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3861__auto__);
}));

(sablono.core.date_field7528.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.date_field7528.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field7528);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field7531 = (function sablono$core$datetime_field7531(var_args){
var G__7533 = arguments.length;
switch (G__7533) {
case 1:
return sablono.core.datetime_field7531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field7531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field7531.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3861__auto__);
}));

(sablono.core.datetime_field7531.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.datetime_field7531.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field7531);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field7534 = (function sablono$core$datetime_local_field7534(var_args){
var G__7536 = arguments.length;
switch (G__7536) {
case 1:
return sablono.core.datetime_local_field7534.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field7534.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field7534.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3861__auto__);
}));

(sablono.core.datetime_local_field7534.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.datetime_local_field7534.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field7534);

/**
 * Creates a email input field.
 */
sablono.core.email_field7537 = (function sablono$core$email_field7537(var_args){
var G__7539 = arguments.length;
switch (G__7539) {
case 1:
return sablono.core.email_field7537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field7537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field7537.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3861__auto__);
}));

(sablono.core.email_field7537.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.email_field7537.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field7537);

/**
 * Creates a file input field.
 */
sablono.core.file_field7540 = (function sablono$core$file_field7540(var_args){
var G__7542 = arguments.length;
switch (G__7542) {
case 1:
return sablono.core.file_field7540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field7540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field7540.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3861__auto__);
}));

(sablono.core.file_field7540.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.file_field7540.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field7540);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field7543 = (function sablono$core$hidden_field7543(var_args){
var G__7545 = arguments.length;
switch (G__7545) {
case 1:
return sablono.core.hidden_field7543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field7543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field7543.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3861__auto__);
}));

(sablono.core.hidden_field7543.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.hidden_field7543.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field7543);

/**
 * Creates a month input field.
 */
sablono.core.month_field7546 = (function sablono$core$month_field7546(var_args){
var G__7548 = arguments.length;
switch (G__7548) {
case 1:
return sablono.core.month_field7546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field7546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field7546.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3861__auto__);
}));

(sablono.core.month_field7546.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.month_field7546.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field7546);

/**
 * Creates a number input field.
 */
sablono.core.number_field7549 = (function sablono$core$number_field7549(var_args){
var G__7551 = arguments.length;
switch (G__7551) {
case 1:
return sablono.core.number_field7549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field7549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field7549.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3861__auto__);
}));

(sablono.core.number_field7549.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.number_field7549.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field7549);

/**
 * Creates a password input field.
 */
sablono.core.password_field7552 = (function sablono$core$password_field7552(var_args){
var G__7554 = arguments.length;
switch (G__7554) {
case 1:
return sablono.core.password_field7552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field7552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field7552.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3861__auto__);
}));

(sablono.core.password_field7552.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.password_field7552.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field7552);

/**
 * Creates a range input field.
 */
sablono.core.range_field7555 = (function sablono$core$range_field7555(var_args){
var G__7557 = arguments.length;
switch (G__7557) {
case 1:
return sablono.core.range_field7555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field7555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field7555.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3861__auto__);
}));

(sablono.core.range_field7555.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.range_field7555.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field7555);

/**
 * Creates a search input field.
 */
sablono.core.search_field7558 = (function sablono$core$search_field7558(var_args){
var G__7560 = arguments.length;
switch (G__7560) {
case 1:
return sablono.core.search_field7558.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field7558.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field7558.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3861__auto__);
}));

(sablono.core.search_field7558.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.search_field7558.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field7558);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field7561 = (function sablono$core$tel_field7561(var_args){
var G__7563 = arguments.length;
switch (G__7563) {
case 1:
return sablono.core.tel_field7561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field7561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field7561.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3861__auto__);
}));

(sablono.core.tel_field7561.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.tel_field7561.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field7561);

/**
 * Creates a text input field.
 */
sablono.core.text_field7564 = (function sablono$core$text_field7564(var_args){
var G__7566 = arguments.length;
switch (G__7566) {
case 1:
return sablono.core.text_field7564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field7564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field7564.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3861__auto__);
}));

(sablono.core.text_field7564.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.text_field7564.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field7564);

/**
 * Creates a time input field.
 */
sablono.core.time_field7567 = (function sablono$core$time_field7567(var_args){
var G__7569 = arguments.length;
switch (G__7569) {
case 1:
return sablono.core.time_field7567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field7567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field7567.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3861__auto__);
}));

(sablono.core.time_field7567.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.time_field7567.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field7567);

/**
 * Creates a url input field.
 */
sablono.core.url_field7570 = (function sablono$core$url_field7570(var_args){
var G__7572 = arguments.length;
switch (G__7572) {
case 1:
return sablono.core.url_field7570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field7570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field7570.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3861__auto__);
}));

(sablono.core.url_field7570.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.url_field7570.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field7570);

/**
 * Creates a week input field.
 */
sablono.core.week_field7573 = (function sablono$core$week_field7573(var_args){
var G__7575 = arguments.length;
switch (G__7575) {
case 1:
return sablono.core.week_field7573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field7573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field7573.cljs$core$IFn$_invoke$arity$1 = (function (name__3861__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3861__auto__);
}));

(sablono.core.week_field7573.cljs$core$IFn$_invoke$arity$2 = (function (name__3861__auto__,value__3862__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__3861__auto__,value__3862__auto__);
}));

(sablono.core.week_field7573.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field7573);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box7593 = (function sablono$core$check_box7593(var_args){
var G__7595 = arguments.length;
switch (G__7595) {
case 1:
return sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7593.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7593.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box7593);
/**
 * Creates a radio button.
 */
sablono.core.radio_button7597 = (function sablono$core$radio_button7597(var_args){
var G__7599 = arguments.length;
switch (G__7599) {
case 1:
return sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7597.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7597.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button7597);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options7601 = (function sablono$core$select_options7601(coll){
var iter__4529__auto__ = (function sablono$core$select_options7601_$_iter__7602(s__7603){
return (new cljs.core.LazySeq(null,(function (){
var s__7603__$1 = s__7603;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7603__$1);
if(temp__5735__auto__){
var s__7603__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7603__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7603__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7605 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7604 = (0);
while(true){
if((i__7604 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7604);
cljs.core.chunk_append.call(null,b__7605,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7606 = x;
var text = cljs.core.nth.call(null,vec__7606,(0),null);
var val = cljs.core.nth.call(null,vec__7606,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7606,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7601.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__7612 = (i__7604 + (1));
i__7604 = G__7612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7605),sablono$core$select_options7601_$_iter__7602.call(null,cljs.core.chunk_rest.call(null,s__7603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7605),null);
}
} else {
var x = cljs.core.first.call(null,s__7603__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7609 = x;
var text = cljs.core.nth.call(null,vec__7609,(0),null);
var val = cljs.core.nth.call(null,vec__7609,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7609,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7601.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options7601_$_iter__7602.call(null,cljs.core.rest.call(null,s__7603__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options7601);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down7613 = (function sablono$core$drop_down7613(var_args){
var G__7615 = arguments.length;
switch (G__7615) {
case 2:
return sablono.core.drop_down7613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down7613.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down7613.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down7613.call(null,name,options,null);
}));

(sablono.core.drop_down7613.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down7613.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down7613);
/**
 * Creates a text area element.
 */
sablono.core.text_area7617 = (function sablono$core$text_area7617(var_args){
var G__7619 = arguments.length;
switch (G__7619) {
case 1:
return sablono.core.text_area7617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area7617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area7617.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area7617.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area7617.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area7617);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label7621 = (function sablono$core$label7621(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label7621);
/**
 * Creates a submit button.
 */
sablono.core.submit_button7622 = (function sablono$core$submit_button7622(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button7622);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button7623 = (function sablono$core$reset_button7623(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button7623);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to7624 = (function sablono$core$form_to7624(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7631 = arguments.length;
var i__4737__auto___7632 = (0);
while(true){
if((i__4737__auto___7632 < len__4736__auto___7631)){
args__4742__auto__.push((arguments[i__4737__auto___7632]));

var G__7633 = (i__4737__auto___7632 + (1));
i__4737__auto___7632 = G__7633;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to7624.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to7624.cljs$core$IFn$_invoke$arity$variadic = (function (p__7627,body){
var vec__7628 = p__7627;
var method = cljs.core.nth.call(null,vec__7628,(0),null);
var action = cljs.core.nth.call(null,vec__7628,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to7624.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to7624.cljs$lang$applyTo = (function (seq7625){
var G__7626 = cljs.core.first.call(null,seq7625);
var seq7625__$1 = cljs.core.next.call(null,seq7625);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7626,seq7625__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to7624);

//# sourceMappingURL=core.js.map
