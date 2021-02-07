// Compiled by ClojureScript 1.10.773 {}
goog.provide('ttt.web.core');
goog.require('cljs.core');
goog.require('ttt.web.components');
goog.require('ttt.master.core');
goog.require('ttt.master.game_master');
if((typeof ttt !== 'undefined') && (typeof ttt.web !== 'undefined') && (typeof ttt.web.core !== 'undefined') && (typeof ttt.web.core.game !== 'undefined')){
} else {
ttt.web.core.game = cljs.core.atom.call(null,cljs.core.assoc.call(null,ttt.master.core.game_model,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"waiting","waiting",895906735),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"web","web",-654701153),new cljs.core.Keyword(null,"persistence","persistence",-203044807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"web","web",-654701153)], null),new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player1","player1",-1491573636)));
}
ttt.web.core.render_BANG_ = (function ttt$web$core$render_BANG_(){
return ReactDOM.render(((ttt.master.game_master.ai_turn_QMARK_.call(null,cljs.core.deref.call(null,ttt.web.core.game)))?(function (){
ttt.master.game_master.update_state.call(null,cljs.core.deref.call(null,ttt.web.core.game));

return ttt.web.components.component.call(null,ttt.web.core.game);
})()
:ttt.web.components.component.call(null,ttt.web.core.game)),document.getElementById("ttt"));
});
cljs.core.add_watch.call(null,ttt.web.core.game,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (k,a,o,n){
return ttt.web.core.render_BANG_.call(null);
}));
ttt.web.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map
