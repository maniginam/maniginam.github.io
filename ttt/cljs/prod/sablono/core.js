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
var G__7759__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__7756 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__7757 = cljs.core.seq.call(null,vec__7756);
var first__7758 = cljs.core.first.call(null,seq__7757);
var seq__7757__$1 = cljs.core.next.call(null,seq__7757);
var tag = first__7758;
var body = seq__7757__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__7759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7760__i = 0, G__7760__a = new Array(arguments.length -  0);
while (G__7760__i < G__7760__a.length) {G__7760__a[G__7760__i] = arguments[G__7760__i + 0]; ++G__7760__i;}
  args = new cljs.core.IndexedSeq(G__7760__a,0,null);
} 
return G__7759__delegate.call(this,args);};
G__7759.cljs$lang$maxFixedArity = 0;
G__7759.cljs$lang$applyTo = (function (arglist__7761){
var args = cljs.core.seq(arglist__7761);
return G__7759__delegate(args);
});
G__7759.cljs$core$IFn$_invoke$arity$variadic = G__7759__delegate;
return G__7759;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__7762(s__7763){
return (new cljs.core.LazySeq(null,(function (){
var s__7763__$1 = s__7763;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7763__$1);
if(temp__5735__auto__){
var s__7763__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7763__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7763__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7765 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7764 = (0);
while(true){
if((i__7764 < size__4528__auto__)){
var args = cljs.core._nth.call(null,c__4527__auto__,i__7764);
cljs.core.chunk_append.call(null,b__7765,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__7766 = (i__7764 + (1));
i__7764 = G__7766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7765),sablono$core$update_arglists_$_iter__7762.call(null,cljs.core.chunk_rest.call(null,s__7763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7765),null);
}
} else {
var args = cljs.core.first.call(null,s__7763__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__7762.call(null,cljs.core.rest.call(null,s__7763__$2)));
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
var len__4736__auto___7772 = arguments.length;
var i__4737__auto___7773 = (0);
while(true){
if((i__4737__auto___7773 < len__4736__auto___7772)){
args__4742__auto__.push((arguments[i__4737__auto___7773]));

var G__7774 = (i__4737__auto___7773 + (1));
i__4737__auto___7773 = G__7774;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__7768(s__7769){
return (new cljs.core.LazySeq(null,(function (){
var s__7769__$1 = s__7769;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7769__$1);
if(temp__5735__auto__){
var s__7769__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7769__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7769__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7771 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7770 = (0);
while(true){
if((i__7770 < size__4528__auto__)){
var style = cljs.core._nth.call(null,c__4527__auto__,i__7770);
cljs.core.chunk_append.call(null,b__7771,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__7775 = (i__7770 + (1));
i__7770 = G__7775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7771),sablono$core$iter__7768.call(null,cljs.core.chunk_rest.call(null,s__7769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7771),null);
}
} else {
var style = cljs.core.first.call(null,s__7769__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__7768.call(null,cljs.core.rest.call(null,s__7769__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq7767){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7767));
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
sablono.core.link_to7776 = (function sablono$core$link_to7776(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7779 = arguments.length;
var i__4737__auto___7780 = (0);
while(true){
if((i__4737__auto___7780 < len__4736__auto___7779)){
args__4742__auto__.push((arguments[i__4737__auto___7780]));

var G__7781 = (i__4737__auto___7780 + (1));
i__4737__auto___7780 = G__7781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to7776.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to7776.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to7776.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to7776.cljs$lang$applyTo = (function (seq7777){
var G__7778 = cljs.core.first.call(null,seq7777);
var seq7777__$1 = cljs.core.next.call(null,seq7777);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7778,seq7777__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to7776);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to7782 = (function sablono$core$mail_to7782(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7789 = arguments.length;
var i__4737__auto___7790 = (0);
while(true){
if((i__4737__auto___7790 < len__4736__auto___7789)){
args__4742__auto__.push((arguments[i__4737__auto___7790]));

var G__7791 = (i__4737__auto___7790 + (1));
i__4737__auto___7790 = G__7791;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to7782.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to7782.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__7785){
var vec__7786 = p__7785;
var content = cljs.core.nth.call(null,vec__7786,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to7782.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to7782.cljs$lang$applyTo = (function (seq7783){
var G__7784 = cljs.core.first.call(null,seq7783);
var seq7783__$1 = cljs.core.next.call(null,seq7783);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7784,seq7783__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to7782);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list7792 = (function sablono$core$unordered_list7792(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list7792_$_iter__7793(s__7794){
return (new cljs.core.LazySeq(null,(function (){
var s__7794__$1 = s__7794;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7794__$1);
if(temp__5735__auto__){
var s__7794__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7794__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7794__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7796 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7795 = (0);
while(true){
if((i__7795 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7795);
cljs.core.chunk_append.call(null,b__7796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7797 = (i__7795 + (1));
i__7795 = G__7797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7796),sablono$core$unordered_list7792_$_iter__7793.call(null,cljs.core.chunk_rest.call(null,s__7794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7796),null);
}
} else {
var x = cljs.core.first.call(null,s__7794__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list7792_$_iter__7793.call(null,cljs.core.rest.call(null,s__7794__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list7792);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list7798 = (function sablono$core$ordered_list7798(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list7798_$_iter__7799(s__7800){
return (new cljs.core.LazySeq(null,(function (){
var s__7800__$1 = s__7800;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7800__$1);
if(temp__5735__auto__){
var s__7800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7800__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7800__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7802 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7801 = (0);
while(true){
if((i__7801 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7801);
cljs.core.chunk_append.call(null,b__7802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__7803 = (i__7801 + (1));
i__7801 = G__7803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7802),sablono$core$ordered_list7798_$_iter__7799.call(null,cljs.core.chunk_rest.call(null,s__7800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7802),null);
}
} else {
var x = cljs.core.first.call(null,s__7800__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list7798_$_iter__7799.call(null,cljs.core.rest.call(null,s__7800__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list7798);
/**
 * Create an image element.
 */
sablono.core.image7804 = (function sablono$core$image7804(var_args){
var G__7806 = arguments.length;
switch (G__7806) {
case 1:
return sablono.core.image7804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image7804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image7804.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image7804.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image7804.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image7804);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__7808_SHARP_,p2__7809_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7808_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7809_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__7810_SHARP_,p2__7811_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7810_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__7811_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__7813 = arguments.length;
switch (G__7813) {
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
sablono.core.color_field7815 = (function sablono$core$color_field7815(var_args){
var G__7817 = arguments.length;
switch (G__7817) {
case 1:
return sablono.core.color_field7815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field7815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field7815.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__6418__auto__);
}));

(sablono.core.color_field7815.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.color_field7815.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field7815);

/**
 * Creates a date input field.
 */
sablono.core.date_field7818 = (function sablono$core$date_field7818(var_args){
var G__7820 = arguments.length;
switch (G__7820) {
case 1:
return sablono.core.date_field7818.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field7818.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field7818.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__6418__auto__);
}));

(sablono.core.date_field7818.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.date_field7818.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field7818);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field7821 = (function sablono$core$datetime_field7821(var_args){
var G__7823 = arguments.length;
switch (G__7823) {
case 1:
return sablono.core.datetime_field7821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field7821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field7821.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__6418__auto__);
}));

(sablono.core.datetime_field7821.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.datetime_field7821.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field7821);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field7824 = (function sablono$core$datetime_local_field7824(var_args){
var G__7826 = arguments.length;
switch (G__7826) {
case 1:
return sablono.core.datetime_local_field7824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field7824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field7824.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__6418__auto__);
}));

(sablono.core.datetime_local_field7824.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.datetime_local_field7824.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field7824);

/**
 * Creates a email input field.
 */
sablono.core.email_field7827 = (function sablono$core$email_field7827(var_args){
var G__7829 = arguments.length;
switch (G__7829) {
case 1:
return sablono.core.email_field7827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field7827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field7827.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__6418__auto__);
}));

(sablono.core.email_field7827.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.email_field7827.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field7827);

/**
 * Creates a file input field.
 */
sablono.core.file_field7830 = (function sablono$core$file_field7830(var_args){
var G__7832 = arguments.length;
switch (G__7832) {
case 1:
return sablono.core.file_field7830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field7830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field7830.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__6418__auto__);
}));

(sablono.core.file_field7830.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.file_field7830.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field7830);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field7833 = (function sablono$core$hidden_field7833(var_args){
var G__7835 = arguments.length;
switch (G__7835) {
case 1:
return sablono.core.hidden_field7833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field7833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field7833.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__6418__auto__);
}));

(sablono.core.hidden_field7833.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.hidden_field7833.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field7833);

/**
 * Creates a month input field.
 */
sablono.core.month_field7836 = (function sablono$core$month_field7836(var_args){
var G__7838 = arguments.length;
switch (G__7838) {
case 1:
return sablono.core.month_field7836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field7836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field7836.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__6418__auto__);
}));

(sablono.core.month_field7836.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.month_field7836.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field7836);

/**
 * Creates a number input field.
 */
sablono.core.number_field7839 = (function sablono$core$number_field7839(var_args){
var G__7841 = arguments.length;
switch (G__7841) {
case 1:
return sablono.core.number_field7839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field7839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field7839.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__6418__auto__);
}));

(sablono.core.number_field7839.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.number_field7839.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field7839);

/**
 * Creates a password input field.
 */
sablono.core.password_field7842 = (function sablono$core$password_field7842(var_args){
var G__7844 = arguments.length;
switch (G__7844) {
case 1:
return sablono.core.password_field7842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field7842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field7842.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__6418__auto__);
}));

(sablono.core.password_field7842.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.password_field7842.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field7842);

/**
 * Creates a range input field.
 */
sablono.core.range_field7845 = (function sablono$core$range_field7845(var_args){
var G__7847 = arguments.length;
switch (G__7847) {
case 1:
return sablono.core.range_field7845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field7845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field7845.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__6418__auto__);
}));

(sablono.core.range_field7845.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.range_field7845.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field7845);

/**
 * Creates a search input field.
 */
sablono.core.search_field7848 = (function sablono$core$search_field7848(var_args){
var G__7850 = arguments.length;
switch (G__7850) {
case 1:
return sablono.core.search_field7848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field7848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field7848.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__6418__auto__);
}));

(sablono.core.search_field7848.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.search_field7848.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field7848);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field7851 = (function sablono$core$tel_field7851(var_args){
var G__7853 = arguments.length;
switch (G__7853) {
case 1:
return sablono.core.tel_field7851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field7851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field7851.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__6418__auto__);
}));

(sablono.core.tel_field7851.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.tel_field7851.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field7851);

/**
 * Creates a text input field.
 */
sablono.core.text_field7854 = (function sablono$core$text_field7854(var_args){
var G__7856 = arguments.length;
switch (G__7856) {
case 1:
return sablono.core.text_field7854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field7854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field7854.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__6418__auto__);
}));

(sablono.core.text_field7854.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.text_field7854.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field7854);

/**
 * Creates a time input field.
 */
sablono.core.time_field7857 = (function sablono$core$time_field7857(var_args){
var G__7859 = arguments.length;
switch (G__7859) {
case 1:
return sablono.core.time_field7857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field7857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field7857.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__6418__auto__);
}));

(sablono.core.time_field7857.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.time_field7857.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field7857);

/**
 * Creates a url input field.
 */
sablono.core.url_field7860 = (function sablono$core$url_field7860(var_args){
var G__7862 = arguments.length;
switch (G__7862) {
case 1:
return sablono.core.url_field7860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field7860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field7860.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__6418__auto__);
}));

(sablono.core.url_field7860.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.url_field7860.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field7860);

/**
 * Creates a week input field.
 */
sablono.core.week_field7863 = (function sablono$core$week_field7863(var_args){
var G__7865 = arguments.length;
switch (G__7865) {
case 1:
return sablono.core.week_field7863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field7863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field7863.cljs$core$IFn$_invoke$arity$1 = (function (name__6418__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__6418__auto__);
}));

(sablono.core.week_field7863.cljs$core$IFn$_invoke$arity$2 = (function (name__6418__auto__,value__6419__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__6418__auto__,value__6419__auto__);
}));

(sablono.core.week_field7863.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field7863);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box7883 = (function sablono$core$check_box7883(var_args){
var G__7885 = arguments.length;
switch (G__7885) {
case 1:
return sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7883.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box7883.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box7883);
/**
 * Creates a radio button.
 */
sablono.core.radio_button7887 = (function sablono$core$radio_button7887(var_args){
var G__7889 = arguments.length;
switch (G__7889) {
case 1:
return sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7887.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button7887.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button7887);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options7891 = (function sablono$core$select_options7891(coll){
var iter__4529__auto__ = (function sablono$core$select_options7891_$_iter__7892(s__7893){
return (new cljs.core.LazySeq(null,(function (){
var s__7893__$1 = s__7893;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__7893__$1);
if(temp__5735__auto__){
var s__7893__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7893__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7893__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7895 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7894 = (0);
while(true){
if((i__7894 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__7894);
cljs.core.chunk_append.call(null,b__7895,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7896 = x;
var text = cljs.core.nth.call(null,vec__7896,(0),null);
var val = cljs.core.nth.call(null,vec__7896,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7896,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7891.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__7902 = (i__7894 + (1));
i__7894 = G__7902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7895),sablono$core$select_options7891_$_iter__7892.call(null,cljs.core.chunk_rest.call(null,s__7893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7895),null);
}
} else {
var x = cljs.core.first.call(null,s__7893__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__7899 = x;
var text = cljs.core.nth.call(null,vec__7899,(0),null);
var val = cljs.core.nth.call(null,vec__7899,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__7899,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options7891.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options7891_$_iter__7892.call(null,cljs.core.rest.call(null,s__7893__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options7891);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down7903 = (function sablono$core$drop_down7903(var_args){
var G__7905 = arguments.length;
switch (G__7905) {
case 2:
return sablono.core.drop_down7903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down7903.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down7903.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down7903.call(null,name,options,null);
}));

(sablono.core.drop_down7903.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down7903.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down7903);
/**
 * Creates a text area element.
 */
sablono.core.text_area7907 = (function sablono$core$text_area7907(var_args){
var G__7909 = arguments.length;
switch (G__7909) {
case 1:
return sablono.core.text_area7907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area7907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area7907.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area7907.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area7907.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area7907);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label7911 = (function sablono$core$label7911(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label7911);
/**
 * Creates a submit button.
 */
sablono.core.submit_button7912 = (function sablono$core$submit_button7912(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button7912);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button7913 = (function sablono$core$reset_button7913(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button7913);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to7914 = (function sablono$core$form_to7914(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7921 = arguments.length;
var i__4737__auto___7922 = (0);
while(true){
if((i__4737__auto___7922 < len__4736__auto___7921)){
args__4742__auto__.push((arguments[i__4737__auto___7922]));

var G__7923 = (i__4737__auto___7922 + (1));
i__4737__auto___7922 = G__7923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to7914.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to7914.cljs$core$IFn$_invoke$arity$variadic = (function (p__7917,body){
var vec__7918 = p__7917;
var method = cljs.core.nth.call(null,vec__7918,(0),null);
var action = cljs.core.nth.call(null,vec__7918,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to7914.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to7914.cljs$lang$applyTo = (function (seq7915){
var G__7916 = cljs.core.first.call(null,seq7915);
var seq7915__$1 = cljs.core.next.call(null,seq7915);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7916,seq7915__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to7914);

//# sourceMappingURL=core.js.map
