goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37294__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37295__i = 0, G__37295__a = new Array(arguments.length -  0);
while (G__37295__i < G__37295__a.length) {G__37295__a[G__37295__i] = arguments[G__37295__i + 0]; ++G__37295__i;}
  args = new cljs.core.IndexedSeq(G__37295__a,0,null);
} 
return G__37294__delegate.call(this,args);};
G__37294.cljs$lang$maxFixedArity = 0;
G__37294.cljs$lang$applyTo = (function (arglist__37298){
var args = cljs.core.seq(arglist__37298);
return G__37294__delegate(args);
});
G__37294.cljs$core$IFn$_invoke$arity$variadic = G__37294__delegate;
return G__37294;
})()
);

(o.error = (function() { 
var G__37299__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37300__i = 0, G__37300__a = new Array(arguments.length -  0);
while (G__37300__i < G__37300__a.length) {G__37300__a[G__37300__i] = arguments[G__37300__i + 0]; ++G__37300__i;}
  args = new cljs.core.IndexedSeq(G__37300__a,0,null);
} 
return G__37299__delegate.call(this,args);};
G__37299.cljs$lang$maxFixedArity = 0;
G__37299.cljs$lang$applyTo = (function (arglist__37301){
var args = cljs.core.seq(arglist__37301);
return G__37299__delegate(args);
});
G__37299.cljs$core$IFn$_invoke$arity$variadic = G__37299__delegate;
return G__37299;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
