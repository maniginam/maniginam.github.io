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
var G__6431__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6428 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__6429 = cljs.core.seq.call(null,vec__6428);
var first__6430 = cljs.core.first.call(null,seq__6429);
var seq__6429__$1 = cljs.core.next.call(null,seq__6429);
var tag = first__6430;
var body = seq__6429__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6432__i = 0, G__6432__a = new Array(arguments.length -  0);
while (G__6432__i < G__6432__a.length) {G__6432__a[G__6432__i] = arguments[G__6432__i + 0]; ++G__6432__i;}
  args = new cljs.core.IndexedSeq(G__6432__a,0,null);
} 
return G__6431__delegate.call(this,args);};
G__6431.cljs$lang$maxFixedArity = 0;
G__6431.cljs$lang$applyTo = (function (arglist__6433){
var args = cljs.core.seq(arglist__6433);
return G__6431__delegate(args);
});
G__6431.cljs$core$IFn$_invoke$arity$variadic = G__6431__delegate;
return G__6431;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__6434(s__6435){
return (new cljs.core.LazySeq(null,(function (){
var s__6435__$1 = s__6435;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6435__$1);
if(temp__5735__auto__){
var s__6435__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6435__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6435__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6437 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6436 = (0);
while(true){
if((i__6436 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__6436);
cljs.core.chunk_append.call(null,b__6437,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6438 = (i__6436 + (1));
i__6436 = G__6438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6437),sablono$core$update_arglists_$_iter__6434.call(null,cljs.core.chunk_rest.call(null,s__6435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6437),null);
}
} else {
var args = cljs.core.first.call(null,s__6435__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6434.call(null,cljs.core.rest.call(null,s__6435__$2)));
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
var len__4736__auto___6444 = arguments.length;
var i__4737__auto___6445 = (0);
while(true){
if((i__4737__auto___6445 < len__4736__auto___6444)){
args__4742__auto__.push((arguments[i__4737__auto___6445]));

var G__6446 = (i__4737__auto___6445 + (1));
i__4737__auto___6445 = G__6446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__6440(s__6441){
return (new cljs.core.LazySeq(null,(function (){
var s__6441__$1 = s__6441;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6441__$1);
if(temp__5735__auto__){
var s__6441__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6441__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6441__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6443 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6442 = (0);
while(true){
if((i__6442 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__6442);
cljs.core.chunk_append.call(null,b__6443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6447 = (i__6442 + (1));
i__6442 = G__6447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6443),sablono$core$iter__6440.call(null,cljs.core.chunk_rest.call(null,s__6441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6443),null);
}
} else {
var style = cljs.core.first.call(null,s__6441__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6440.call(null,cljs.core.rest.call(null,s__6441__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq6439){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6439));
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
sablono.core.link_to6448 = (function sablono$core$link_to6448(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6451 = arguments.length;
var i__4737__auto___6452 = (0);
while(true){
if((i__4737__auto___6452 < len__4736__auto___6451)){
args__4742__auto__.push((arguments[i__4737__auto___6452]));

var G__6453 = (i__4737__auto___6452 + (1));
i__4737__auto___6452 = G__6453;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to6448.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to6448.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to6448.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to6448.cljs$lang$applyTo = (function (seq6449){
var G__6450 = cljs.core.first.call(null,seq6449);
var seq6449__$1 = cljs.core.next.call(null,seq6449);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6450,seq6449__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6448);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6454 = (function sablono$core$mail_to6454(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6461 = arguments.length;
var i__4737__auto___6462 = (0);
while(true){
if((i__4737__auto___6462 < len__4736__auto___6461)){
args__4742__auto__.push((arguments[i__4737__auto___6462]));

var G__6463 = (i__4737__auto___6462 + (1));
i__4737__auto___6462 = G__6463;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to6454.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to6454.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6457){
var vec__6458 = p__6457;
var content = cljs.core.nth.call(null,vec__6458,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to6454.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to6454.cljs$lang$applyTo = (function (seq6455){
var G__6456 = cljs.core.first.call(null,seq6455);
var seq6455__$1 = cljs.core.next.call(null,seq6455);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6456,seq6455__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6454);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6464 = (function sablono$core$unordered_list6464(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list6464_$_iter__6465(s__6466){
return (new cljs.core.LazySeq(null,(function (){
var s__6466__$1 = s__6466;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6466__$1);
if(temp__5735__auto__){
var s__6466__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6466__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6466__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6468 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6467 = (0);
while(true){
if((i__6467 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6467);
cljs.core.chunk_append.call(null,b__6468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6469 = (i__6467 + (1));
i__6467 = G__6469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6468),sablono$core$unordered_list6464_$_iter__6465.call(null,cljs.core.chunk_rest.call(null,s__6466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6468),null);
}
} else {
var x = cljs.core.first.call(null,s__6466__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6464_$_iter__6465.call(null,cljs.core.rest.call(null,s__6466__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6464);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6470 = (function sablono$core$ordered_list6470(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list6470_$_iter__6471(s__6472){
return (new cljs.core.LazySeq(null,(function (){
var s__6472__$1 = s__6472;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6472__$1);
if(temp__5735__auto__){
var s__6472__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6472__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6472__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6474 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6473 = (0);
while(true){
if((i__6473 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6473);
cljs.core.chunk_append.call(null,b__6474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6475 = (i__6473 + (1));
i__6473 = G__6475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6474),sablono$core$ordered_list6470_$_iter__6471.call(null,cljs.core.chunk_rest.call(null,s__6472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6474),null);
}
} else {
var x = cljs.core.first.call(null,s__6472__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6470_$_iter__6471.call(null,cljs.core.rest.call(null,s__6472__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6470);
/**
 * Create an image element.
 */
sablono.core.image6476 = (function sablono$core$image6476(var_args){
var G__6478 = arguments.length;
switch (G__6478) {
case 1:
return sablono.core.image6476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image6476.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image6476.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image6476.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6476);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6480_SHARP_,p2__6481_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6480_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6481_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6482_SHARP_,p2__6483_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6482_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__6483_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__6485 = arguments.length;
switch (G__6485) {
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
sablono.core.color_field6487 = (function sablono$core$color_field6487(var_args){
var G__6489 = arguments.length;
switch (G__6489) {
case 1:
return sablono.core.color_field6487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field6487.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__6418__auto__);
}));

(sablono.core.color_field6487.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.color_field6487.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6487);

/**
 * Creates a date input field.
 */
sablono.core.date_field6490 = (function sablono$core$date_field6490(var_args){
var G__6492 = arguments.length;
switch (G__6492) {
case 1:
return sablono.core.date_field6490.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6490.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field6490.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__6418__auto__);
}));

(sablono.core.date_field6490.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.date_field6490.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6490);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6493 = (function sablono$core$datetime_field6493(var_args){
var G__6495 = arguments.length;
switch (G__6495) {
case 1:
return sablono.core.datetime_field6493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field6493.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__6418__auto__);
}));

(sablono.core.datetime_field6493.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.datetime_field6493.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6493);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6496 = (function sablono$core$datetime_local_field6496(var_args){
var G__6498 = arguments.length;
switch (G__6498) {
case 1:
return sablono.core.datetime_local_field6496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field6496.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__6418__auto__);
}));

(sablono.core.datetime_local_field6496.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.datetime_local_field6496.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6496);

/**
 * Creates a email input field.
 */
sablono.core.email_field6499 = (function sablono$core$email_field6499(var_args){
var G__6501 = arguments.length;
switch (G__6501) {
case 1:
return sablono.core.email_field6499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field6499.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__6418__auto__);
}));

(sablono.core.email_field6499.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.email_field6499.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6499);

/**
 * Creates a file input field.
 */
sablono.core.file_field6502 = (function sablono$core$file_field6502(var_args){
var G__6504 = arguments.length;
switch (G__6504) {
case 1:
return sablono.core.file_field6502.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field6502.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__6418__auto__);
}));

(sablono.core.file_field6502.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.file_field6502.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6502);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6505 = (function sablono$core$hidden_field6505(var_args){
var G__6507 = arguments.length;
switch (G__6507) {
case 1:
return sablono.core.hidden_field6505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field6505.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__6418__auto__);
}));

(sablono.core.hidden_field6505.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.hidden_field6505.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6505);

/**
 * Creates a month input field.
 */
sablono.core.month_field6508 = (function sablono$core$month_field6508(var_args){
var G__6510 = arguments.length;
switch (G__6510) {
case 1:
return sablono.core.month_field6508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field6508.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__6418__auto__);
}));

(sablono.core.month_field6508.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.month_field6508.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6508);

/**
 * Creates a number input field.
 */
sablono.core.number_field6511 = (function sablono$core$number_field6511(var_args){
var G__6513 = arguments.length;
switch (G__6513) {
case 1:
return sablono.core.number_field6511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field6511.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__6418__auto__);
}));

(sablono.core.number_field6511.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.number_field6511.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6511);

/**
 * Creates a password input field.
 */
sablono.core.password_field6514 = (function sablono$core$password_field6514(var_args){
var G__6516 = arguments.length;
switch (G__6516) {
case 1:
return sablono.core.password_field6514.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6514.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field6514.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__6418__auto__);
}));

(sablono.core.password_field6514.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.password_field6514.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6514);

/**
 * Creates a range input field.
 */
sablono.core.range_field6517 = (function sablono$core$range_field6517(var_args){
var G__6519 = arguments.length;
switch (G__6519) {
case 1:
return sablono.core.range_field6517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field6517.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__6418__auto__);
}));

(sablono.core.range_field6517.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.range_field6517.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6517);

/**
 * Creates a search input field.
 */
sablono.core.search_field6520 = (function sablono$core$search_field6520(var_args){
var G__6522 = arguments.length;
switch (G__6522) {
case 1:
return sablono.core.search_field6520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field6520.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__6418__auto__);
}));

(sablono.core.search_field6520.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.search_field6520.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6520);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6523 = (function sablono$core$tel_field6523(var_args){
var G__6525 = arguments.length;
switch (G__6525) {
case 1:
return sablono.core.tel_field6523.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6523.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field6523.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__6418__auto__);
}));

(sablono.core.tel_field6523.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.tel_field6523.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6523);

/**
 * Creates a text input field.
 */
sablono.core.text_field6526 = (function sablono$core$text_field6526(var_args){
var G__6528 = arguments.length;
switch (G__6528) {
case 1:
return sablono.core.text_field6526.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6526.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field6526.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__6418__auto__);
}));

(sablono.core.text_field6526.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.text_field6526.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6526);

/**
 * Creates a time input field.
 */
sablono.core.time_field6529 = (function sablono$core$time_field6529(var_args){
var G__6531 = arguments.length;
switch (G__6531) {
case 1:
return sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__6418__auto__);
}));

(sablono.core.time_field6529.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.time_field6529.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6529);

/**
 * Creates a url input field.
 */
sablono.core.url_field6532 = (function sablono$core$url_field6532(var_args){
var G__6534 = arguments.length;
switch (G__6534) {
case 1:
return sablono.core.url_field6532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field6532.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__6418__auto__);
}));

(sablono.core.url_field6532.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.url_field6532.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6532);

/**
 * Creates a week input field.
 */
sablono.core.week_field6535 = (function sablono$core$week_field6535(var_args){
var G__6537 = arguments.length;
switch (G__6537) {
case 1:
return sablono.core.week_field6535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field6535.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__6418__auto__);
}));

(sablono.core.week_field6535.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.week_field6535.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6535);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6555 = (function sablono$core$check_box6555(var_args){
var G__6557 = arguments.length;
switch (G__6557) {
case 1:
return sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box6555.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box6555.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6555);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6559 = (function sablono$core$radio_button6559(var_args){
var G__6561 = arguments.length;
switch (G__6561) {
case 1:
return sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button6559.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button6559.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6559);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6563 = (function sablono$core$select_options6563(coll){
var iter__4529__auto__ = (function sablono$core$select_options6563_$_iter__6564(s__6565){
return (new cljs.core.LazySeq(null,(function (){
var s__6565__$1 = s__6565;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__6565__$1);
if(temp__5735__auto__){
var s__6565__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6565__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6565__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6567 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6566 = (0);
while(true){
if((i__6566 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__6566);
cljs.core.chunk_append.call(null,b__6567,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6568 = x;
var text = cljs.core.nth.call(null,vec__6568,(0),null);
var val = cljs.core.nth.call(null,vec__6568,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6568,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6563.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6574 = (i__6566 + (1));
i__6566 = G__6574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6567),sablono$core$select_options6563_$_iter__6564.call(null,cljs.core.chunk_rest.call(null,s__6565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6567),null);
}
} else {
var x = cljs.core.first.call(null,s__6565__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6571 = x;
var text = cljs.core.nth.call(null,vec__6571,(0),null);
var val = cljs.core.nth.call(null,vec__6571,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6571,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options6563.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6563_$_iter__6564.call(null,cljs.core.rest.call(null,s__6565__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6563);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6575 = (function sablono$core$drop_down6575(var_args){
var G__6577 = arguments.length;
switch (G__6577) {
case 2:
return sablono.core.drop_down6575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6575.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down6575.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6575.call(null,name,options,null);
}));

(sablono.core.drop_down6575.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down6575.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6575);
/**
 * Creates a text area element.
 */
sablono.core.text_area6579 = (function sablono$core$text_area6579(var_args){
var G__6581 = arguments.length;
switch (G__6581) {
case 1:
return sablono.core.text_area6579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area6579.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area6579.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area6579.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6579);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6583 = (function sablono$core$label6583(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6583);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6584 = (function sablono$core$submit_button6584(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6584);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6585 = (function sablono$core$reset_button6585(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6585);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6586 = (function sablono$core$form_to6586(var_args){
var args__4742__auto__ = [];
var len__4736__auto___6593 = arguments.length;
var i__4737__auto___6594 = (0);
while(true){
if((i__4737__auto___6594 < len__4736__auto___6593)){
args__4742__auto__.push((arguments[i__4737__auto___6594]));

var G__6595 = (i__4737__auto___6594 + (1));
i__4737__auto___6594 = G__6595;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to6586.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to6586.cljs$core$IFn$_invoke$arity$variadic = (function (p__6589,body){
var vec__6590 = p__6589;
var method = cljs.core.nth.call(null,vec__6590,(0),null);
var action = cljs.core.nth.call(null,vec__6590,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to6586.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to6586.cljs$lang$applyTo = (function (seq6587){
var G__6588 = cljs.core.first.call(null,seq6587);
var seq6587__$1 = cljs.core.next.call(null,seq6587);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6588,seq6587__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6586);

//# sourceMappingURL=core.js.map
