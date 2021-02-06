// Compiled by ClojureScript 1.10.773 {}
goog.provide('sablono.normalize');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('sablono.util');
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.normalize.compact_map = (function sablono$normalize$compact_map(m){
if(cljs.core.truth_(m)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__4769){
var vec__4770 = p__4769;
var _ = cljs.core.nth.call(null,vec__4770,(0),null);
var v = cljs.core.nth.call(null,vec__4770,(1),null);
return cljs.core.empty_QMARK_.call(null,v);
})),m);
} else {
return null;
}
});
sablono.normalize.class_name = (function sablono$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Returns true if `x` is a map lookup form, otherwise false.
 */
sablono.normalize.map_lookup_QMARK_ = (function sablono$normalize$map_lookup_QMARK_(x){
return ((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)));
});
/**
 * Normalize `class` into a vector of classes.
 */
sablono.normalize.class$ = (function sablono$normalize$class(class$){
if((class$ == null)){
return null;
} else {
if(sablono.normalize.map_lookup_QMARK_.call(null,class$)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(cljs.core.list_QMARK_.call(null,class$)){
if((cljs.core.first.call(null,class$) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
return cljs.core.map.call(null,sablono.normalize.class_name,class$);
}
} else {
if((class$ instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if(typeof class$ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null);
} else {
if((class$ instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.normalize.class_name.call(null,class$)], null);
} else {
if(((((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))) && (cljs.core.every_QMARK_.call(null,(function (p1__4773_SHARP_){
return (((p1__4773_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__4773_SHARP_ === 'string'));
}),class$)))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
if(((cljs.core.set_QMARK_.call(null,class$)) || (cljs.core.sequential_QMARK_.call(null,class$)))){
return cljs.core.mapv.call(null,sablono.normalize.class_name,class$);
} else {
return class$;

}
}
}
}
}
}
}
}
});
/**
 * Normalize the `attrs` of an element.
 */
sablono.normalize.attributes = (function sablono$normalize$attributes(attrs){
var G__4774 = attrs;
if(cljs.core.truth_(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.update_in.call(null,G__4774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),sablono.normalize.class$);
} else {
return G__4774;
}
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.normalize.merge_with_class = (function sablono$normalize$merge_with_class(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4777 = arguments.length;
var i__4737__auto___4778 = (0);
while(true){
if((i__4737__auto___4778 < len__4736__auto___4777)){
args__4742__auto__.push((arguments[i__4737__auto___4778]));

var G__4779 = (i__4737__auto___4778 + (1));
i__4737__auto___4778 = G__4779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.map.call(null,sablono.normalize.attributes,maps);
var classes = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps__$1);
if(cljs.core.seq.call(null,maps__$1)){
var G__4776 = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,maps__$1);
if((!(cljs.core.empty_QMARK_.call(null,classes)))){
return cljs.core.assoc.call(null,G__4776,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.vec.call(null,classes));
} else {
return G__4776;
}
} else {
return null;
}
}));

(sablono.normalize.merge_with_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.normalize.merge_with_class.cljs$lang$applyTo = (function (seq4775){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4775));
}));

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.normalize.strip_css = (function sablono$normalize$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.normalize.match_tag = (function sablono$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__4782 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__4782,(0),null);
var names = cljs.core.nth.call(null,vec__4782,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,sablono.normalize.strip_css.call(null,cljs.core.some.call(null,(function (p1__4780_SHARP_){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__4780_SHARP_))){
return p1__4780_SHARP_;
} else {
return null;
}
}),names)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__4781_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__4781_SHARP_));
})),cljs.core.map.call(null,sablono.normalize.strip_css)),names)], null);
});
/**
 * Normalize the children of a HTML element.
 */
sablono.normalize.children = (function sablono$normalize$children(x){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,(((x == null))?cljs.core.List.EMPTY:((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):((sablono.util.element_QMARK_.call(null,x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_.call(null,x))?x:((((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1))) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && ((!(typeof cljs.core.first.call(null,x) === 'string'))) && ((!(sablono.util.element_QMARK_.call(null,cljs.core.first.call(null,x)))))))?sablono.normalize.children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(new cljs.core.List(null,x,null,(1),null))
))))))));
});
/**
 * Returns true if `x` are the attributes of an HTML element,
 *   otherwise false.
 */
sablono.normalize.attrs_QMARK_ = (function sablono$normalize$attrs_QMARK_(x){
return cljs.core.map_QMARK_.call(null,x);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.normalize.element = (function sablono$normalize$element(p__4785){
var vec__4786 = p__4785;
var seq__4787 = cljs.core.seq.call(null,vec__4786);
var first__4788 = cljs.core.first.call(null,seq__4787);
var seq__4787__$1 = cljs.core.next.call(null,seq__4787);
var tag = first__4788;
var content = seq__4787__$1;
if((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
}

var vec__4789 = sablono.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__4789,(0),null);
var id = cljs.core.nth.call(null,vec__4789,(1),null);
var class$ = cljs.core.nth.call(null,vec__4789,(2),null);
var tag_attrs = sablono.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(sablono.normalize.attrs_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.merge_with_class.call(null,tag_attrs,map_attrs),sablono.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.normalize.attributes.call(null,tag_attrs),sablono.normalize.children.call(null,content)], null);
}
});

//# sourceMappingURL=normalize.js.map
