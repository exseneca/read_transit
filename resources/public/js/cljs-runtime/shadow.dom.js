goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37311 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37311(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37312 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37312(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36080 = coll;
var G__36081 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36080,G__36081) : shadow.dom.lazy_native_coll_seq.call(null,G__36080,G__36081));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36096 = arguments.length;
switch (G__36096) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36107 = arguments.length;
switch (G__36107) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36113 = arguments.length;
switch (G__36113) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36122 = arguments.length;
switch (G__36122) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36143 = arguments.length;
switch (G__36143) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36161 = arguments.length;
switch (G__36161) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36175){if((e36175 instanceof Object)){
var e = e36175;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36175;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36182 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36183 = null;
var count__36184 = (0);
var i__36185 = (0);
while(true){
if((i__36185 < count__36184)){
var el = chunk__36183.cljs$core$IIndexed$_nth$arity$2(null,i__36185);
var handler_37325__$1 = ((function (seq__36182,chunk__36183,count__36184,i__36185,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36182,chunk__36183,count__36184,i__36185,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37325__$1);


var G__37326 = seq__36182;
var G__37327 = chunk__36183;
var G__37328 = count__36184;
var G__37329 = (i__36185 + (1));
seq__36182 = G__37326;
chunk__36183 = G__37327;
count__36184 = G__37328;
i__36185 = G__37329;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36182);
if(temp__5804__auto__){
var seq__36182__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36182__$1);
var G__37330 = cljs.core.chunk_rest(seq__36182__$1);
var G__37331 = c__5568__auto__;
var G__37332 = cljs.core.count(c__5568__auto__);
var G__37333 = (0);
seq__36182 = G__37330;
chunk__36183 = G__37331;
count__36184 = G__37332;
i__36185 = G__37333;
continue;
} else {
var el = cljs.core.first(seq__36182__$1);
var handler_37334__$1 = ((function (seq__36182,chunk__36183,count__36184,i__36185,el,seq__36182__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36182,chunk__36183,count__36184,i__36185,el,seq__36182__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37334__$1);


var G__37339 = cljs.core.next(seq__36182__$1);
var G__37340 = null;
var G__37341 = (0);
var G__37342 = (0);
seq__36182 = G__37339;
chunk__36183 = G__37340;
count__36184 = G__37341;
i__36185 = G__37342;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36190 = arguments.length;
switch (G__36190) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36211 = cljs.core.seq(events);
var chunk__36212 = null;
var count__36213 = (0);
var i__36214 = (0);
while(true){
if((i__36214 < count__36213)){
var vec__36238 = chunk__36212.cljs$core$IIndexed$_nth$arity$2(null,i__36214);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36238,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37344 = seq__36211;
var G__37345 = chunk__36212;
var G__37346 = count__36213;
var G__37347 = (i__36214 + (1));
seq__36211 = G__37344;
chunk__36212 = G__37345;
count__36213 = G__37346;
i__36214 = G__37347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36211);
if(temp__5804__auto__){
var seq__36211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36211__$1);
var G__37351 = cljs.core.chunk_rest(seq__36211__$1);
var G__37352 = c__5568__auto__;
var G__37353 = cljs.core.count(c__5568__auto__);
var G__37354 = (0);
seq__36211 = G__37351;
chunk__36212 = G__37352;
count__36213 = G__37353;
i__36214 = G__37354;
continue;
} else {
var vec__36241 = cljs.core.first(seq__36211__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36241,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37355 = cljs.core.next(seq__36211__$1);
var G__37356 = null;
var G__37357 = (0);
var G__37358 = (0);
seq__36211 = G__37355;
chunk__36212 = G__37356;
count__36213 = G__37357;
i__36214 = G__37358;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36244 = cljs.core.seq(styles);
var chunk__36245 = null;
var count__36246 = (0);
var i__36247 = (0);
while(true){
if((i__36247 < count__36246)){
var vec__36259 = chunk__36245.cljs$core$IIndexed$_nth$arity$2(null,i__36247);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36259,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37359 = seq__36244;
var G__37360 = chunk__36245;
var G__37361 = count__36246;
var G__37362 = (i__36247 + (1));
seq__36244 = G__37359;
chunk__36245 = G__37360;
count__36246 = G__37361;
i__36247 = G__37362;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36244);
if(temp__5804__auto__){
var seq__36244__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36244__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36244__$1);
var G__37363 = cljs.core.chunk_rest(seq__36244__$1);
var G__37364 = c__5568__auto__;
var G__37365 = cljs.core.count(c__5568__auto__);
var G__37366 = (0);
seq__36244 = G__37363;
chunk__36245 = G__37364;
count__36246 = G__37365;
i__36247 = G__37366;
continue;
} else {
var vec__36263 = cljs.core.first(seq__36244__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37367 = cljs.core.next(seq__36244__$1);
var G__37368 = null;
var G__37369 = (0);
var G__37370 = (0);
seq__36244 = G__37367;
chunk__36245 = G__37368;
count__36246 = G__37369;
i__36247 = G__37370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36280_37371 = key;
var G__36280_37372__$1 = (((G__36280_37371 instanceof cljs.core.Keyword))?G__36280_37371.fqn:null);
switch (G__36280_37372__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37375 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37375,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37375,"aria-");
}
})())){
el.setAttribute(ks_37375,value);
} else {
(el[ks_37375] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36513){
var map__36514 = p__36513;
var map__36514__$1 = cljs.core.__destructure_map(map__36514);
var props = map__36514__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36514__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36517 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36517,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36526 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36526,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36526;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36529 = arguments.length;
switch (G__36529) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36534){
var vec__36535 = p__36534;
var seq__36536 = cljs.core.seq(vec__36535);
var first__36537 = cljs.core.first(seq__36536);
var seq__36536__$1 = cljs.core.next(seq__36536);
var nn = first__36537;
var first__36537__$1 = cljs.core.first(seq__36536__$1);
var seq__36536__$2 = cljs.core.next(seq__36536__$1);
var np = first__36537__$1;
var nc = seq__36536__$2;
var node = vec__36535;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36545 = nn;
var G__36546 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36545,G__36546) : create_fn.call(null,G__36545,G__36546));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36549 = nn;
var G__36550 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36549,G__36550) : create_fn.call(null,G__36549,G__36550));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36555 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36555,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36555,(1),null);
var seq__36559_37377 = cljs.core.seq(node_children);
var chunk__36560_37378 = null;
var count__36561_37379 = (0);
var i__36562_37380 = (0);
while(true){
if((i__36562_37380 < count__36561_37379)){
var child_struct_37381 = chunk__36560_37378.cljs$core$IIndexed$_nth$arity$2(null,i__36562_37380);
var children_37382 = shadow.dom.dom_node(child_struct_37381);
if(cljs.core.seq_QMARK_(children_37382)){
var seq__36647_37383 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37382));
var chunk__36649_37384 = null;
var count__36650_37385 = (0);
var i__36651_37386 = (0);
while(true){
if((i__36651_37386 < count__36650_37385)){
var child_37387 = chunk__36649_37384.cljs$core$IIndexed$_nth$arity$2(null,i__36651_37386);
if(cljs.core.truth_(child_37387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37387);


var G__37388 = seq__36647_37383;
var G__37389 = chunk__36649_37384;
var G__37390 = count__36650_37385;
var G__37391 = (i__36651_37386 + (1));
seq__36647_37383 = G__37388;
chunk__36649_37384 = G__37389;
count__36650_37385 = G__37390;
i__36651_37386 = G__37391;
continue;
} else {
var G__37392 = seq__36647_37383;
var G__37393 = chunk__36649_37384;
var G__37394 = count__36650_37385;
var G__37395 = (i__36651_37386 + (1));
seq__36647_37383 = G__37392;
chunk__36649_37384 = G__37393;
count__36650_37385 = G__37394;
i__36651_37386 = G__37395;
continue;
}
} else {
var temp__5804__auto___37396 = cljs.core.seq(seq__36647_37383);
if(temp__5804__auto___37396){
var seq__36647_37397__$1 = temp__5804__auto___37396;
if(cljs.core.chunked_seq_QMARK_(seq__36647_37397__$1)){
var c__5568__auto___37398 = cljs.core.chunk_first(seq__36647_37397__$1);
var G__37399 = cljs.core.chunk_rest(seq__36647_37397__$1);
var G__37400 = c__5568__auto___37398;
var G__37401 = cljs.core.count(c__5568__auto___37398);
var G__37402 = (0);
seq__36647_37383 = G__37399;
chunk__36649_37384 = G__37400;
count__36650_37385 = G__37401;
i__36651_37386 = G__37402;
continue;
} else {
var child_37403 = cljs.core.first(seq__36647_37397__$1);
if(cljs.core.truth_(child_37403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37403);


var G__37404 = cljs.core.next(seq__36647_37397__$1);
var G__37405 = null;
var G__37406 = (0);
var G__37407 = (0);
seq__36647_37383 = G__37404;
chunk__36649_37384 = G__37405;
count__36650_37385 = G__37406;
i__36651_37386 = G__37407;
continue;
} else {
var G__37408 = cljs.core.next(seq__36647_37397__$1);
var G__37409 = null;
var G__37410 = (0);
var G__37411 = (0);
seq__36647_37383 = G__37408;
chunk__36649_37384 = G__37409;
count__36650_37385 = G__37410;
i__36651_37386 = G__37411;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37382);
}


var G__37412 = seq__36559_37377;
var G__37413 = chunk__36560_37378;
var G__37414 = count__36561_37379;
var G__37415 = (i__36562_37380 + (1));
seq__36559_37377 = G__37412;
chunk__36560_37378 = G__37413;
count__36561_37379 = G__37414;
i__36562_37380 = G__37415;
continue;
} else {
var temp__5804__auto___37416 = cljs.core.seq(seq__36559_37377);
if(temp__5804__auto___37416){
var seq__36559_37417__$1 = temp__5804__auto___37416;
if(cljs.core.chunked_seq_QMARK_(seq__36559_37417__$1)){
var c__5568__auto___37418 = cljs.core.chunk_first(seq__36559_37417__$1);
var G__37419 = cljs.core.chunk_rest(seq__36559_37417__$1);
var G__37420 = c__5568__auto___37418;
var G__37421 = cljs.core.count(c__5568__auto___37418);
var G__37422 = (0);
seq__36559_37377 = G__37419;
chunk__36560_37378 = G__37420;
count__36561_37379 = G__37421;
i__36562_37380 = G__37422;
continue;
} else {
var child_struct_37423 = cljs.core.first(seq__36559_37417__$1);
var children_37424 = shadow.dom.dom_node(child_struct_37423);
if(cljs.core.seq_QMARK_(children_37424)){
var seq__36684_37425 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37424));
var chunk__36686_37426 = null;
var count__36687_37427 = (0);
var i__36688_37428 = (0);
while(true){
if((i__36688_37428 < count__36687_37427)){
var child_37429 = chunk__36686_37426.cljs$core$IIndexed$_nth$arity$2(null,i__36688_37428);
if(cljs.core.truth_(child_37429)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37429);


var G__37430 = seq__36684_37425;
var G__37431 = chunk__36686_37426;
var G__37432 = count__36687_37427;
var G__37433 = (i__36688_37428 + (1));
seq__36684_37425 = G__37430;
chunk__36686_37426 = G__37431;
count__36687_37427 = G__37432;
i__36688_37428 = G__37433;
continue;
} else {
var G__37434 = seq__36684_37425;
var G__37435 = chunk__36686_37426;
var G__37436 = count__36687_37427;
var G__37437 = (i__36688_37428 + (1));
seq__36684_37425 = G__37434;
chunk__36686_37426 = G__37435;
count__36687_37427 = G__37436;
i__36688_37428 = G__37437;
continue;
}
} else {
var temp__5804__auto___37438__$1 = cljs.core.seq(seq__36684_37425);
if(temp__5804__auto___37438__$1){
var seq__36684_37439__$1 = temp__5804__auto___37438__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36684_37439__$1)){
var c__5568__auto___37440 = cljs.core.chunk_first(seq__36684_37439__$1);
var G__37441 = cljs.core.chunk_rest(seq__36684_37439__$1);
var G__37442 = c__5568__auto___37440;
var G__37443 = cljs.core.count(c__5568__auto___37440);
var G__37444 = (0);
seq__36684_37425 = G__37441;
chunk__36686_37426 = G__37442;
count__36687_37427 = G__37443;
i__36688_37428 = G__37444;
continue;
} else {
var child_37445 = cljs.core.first(seq__36684_37439__$1);
if(cljs.core.truth_(child_37445)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37445);


var G__37446 = cljs.core.next(seq__36684_37439__$1);
var G__37447 = null;
var G__37448 = (0);
var G__37449 = (0);
seq__36684_37425 = G__37446;
chunk__36686_37426 = G__37447;
count__36687_37427 = G__37448;
i__36688_37428 = G__37449;
continue;
} else {
var G__37450 = cljs.core.next(seq__36684_37439__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__36684_37425 = G__37450;
chunk__36686_37426 = G__37451;
count__36687_37427 = G__37452;
i__36688_37428 = G__37453;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37424);
}


var G__37454 = cljs.core.next(seq__36559_37417__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__36559_37377 = G__37454;
chunk__36560_37378 = G__37455;
count__36561_37379 = G__37456;
i__36562_37380 = G__37457;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36773 = cljs.core.seq(node);
var chunk__36774 = null;
var count__36775 = (0);
var i__36776 = (0);
while(true){
if((i__36776 < count__36775)){
var n = chunk__36774.cljs$core$IIndexed$_nth$arity$2(null,i__36776);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37459 = seq__36773;
var G__37460 = chunk__36774;
var G__37461 = count__36775;
var G__37462 = (i__36776 + (1));
seq__36773 = G__37459;
chunk__36774 = G__37460;
count__36775 = G__37461;
i__36776 = G__37462;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36773);
if(temp__5804__auto__){
var seq__36773__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36773__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36773__$1);
var G__37463 = cljs.core.chunk_rest(seq__36773__$1);
var G__37464 = c__5568__auto__;
var G__37465 = cljs.core.count(c__5568__auto__);
var G__37466 = (0);
seq__36773 = G__37463;
chunk__36774 = G__37464;
count__36775 = G__37465;
i__36776 = G__37466;
continue;
} else {
var n = cljs.core.first(seq__36773__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37467 = cljs.core.next(seq__36773__$1);
var G__37468 = null;
var G__37469 = (0);
var G__37470 = (0);
seq__36773 = G__37467;
chunk__36774 = G__37468;
count__36775 = G__37469;
i__36776 = G__37470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36817 = arguments.length;
switch (G__36817) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36837 = arguments.length;
switch (G__36837) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36852 = arguments.length;
switch (G__36852) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37477 = arguments.length;
var i__5770__auto___37479 = (0);
while(true){
if((i__5770__auto___37479 < len__5769__auto___37477)){
args__5775__auto__.push((arguments[i__5770__auto___37479]));

var G__37480 = (i__5770__auto___37479 + (1));
i__5770__auto___37479 = G__37480;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36866_37481 = cljs.core.seq(nodes);
var chunk__36867_37482 = null;
var count__36868_37483 = (0);
var i__36869_37484 = (0);
while(true){
if((i__36869_37484 < count__36868_37483)){
var node_37485 = chunk__36867_37482.cljs$core$IIndexed$_nth$arity$2(null,i__36869_37484);
fragment.appendChild(shadow.dom._to_dom(node_37485));


var G__37486 = seq__36866_37481;
var G__37487 = chunk__36867_37482;
var G__37488 = count__36868_37483;
var G__37489 = (i__36869_37484 + (1));
seq__36866_37481 = G__37486;
chunk__36867_37482 = G__37487;
count__36868_37483 = G__37488;
i__36869_37484 = G__37489;
continue;
} else {
var temp__5804__auto___37490 = cljs.core.seq(seq__36866_37481);
if(temp__5804__auto___37490){
var seq__36866_37491__$1 = temp__5804__auto___37490;
if(cljs.core.chunked_seq_QMARK_(seq__36866_37491__$1)){
var c__5568__auto___37492 = cljs.core.chunk_first(seq__36866_37491__$1);
var G__37493 = cljs.core.chunk_rest(seq__36866_37491__$1);
var G__37494 = c__5568__auto___37492;
var G__37495 = cljs.core.count(c__5568__auto___37492);
var G__37496 = (0);
seq__36866_37481 = G__37493;
chunk__36867_37482 = G__37494;
count__36868_37483 = G__37495;
i__36869_37484 = G__37496;
continue;
} else {
var node_37497 = cljs.core.first(seq__36866_37491__$1);
fragment.appendChild(shadow.dom._to_dom(node_37497));


var G__37498 = cljs.core.next(seq__36866_37491__$1);
var G__37499 = null;
var G__37500 = (0);
var G__37501 = (0);
seq__36866_37481 = G__37498;
chunk__36867_37482 = G__37499;
count__36868_37483 = G__37500;
i__36869_37484 = G__37501;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36858){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36858));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36870_37502 = cljs.core.seq(scripts);
var chunk__36871_37503 = null;
var count__36872_37504 = (0);
var i__36873_37505 = (0);
while(true){
if((i__36873_37505 < count__36872_37504)){
var vec__36883_37507 = chunk__36871_37503.cljs$core$IIndexed$_nth$arity$2(null,i__36873_37505);
var script_tag_37508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883_37507,(0),null);
var script_body_37509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36883_37507,(1),null);
eval(script_body_37509);


var G__37510 = seq__36870_37502;
var G__37511 = chunk__36871_37503;
var G__37512 = count__36872_37504;
var G__37513 = (i__36873_37505 + (1));
seq__36870_37502 = G__37510;
chunk__36871_37503 = G__37511;
count__36872_37504 = G__37512;
i__36873_37505 = G__37513;
continue;
} else {
var temp__5804__auto___37514 = cljs.core.seq(seq__36870_37502);
if(temp__5804__auto___37514){
var seq__36870_37515__$1 = temp__5804__auto___37514;
if(cljs.core.chunked_seq_QMARK_(seq__36870_37515__$1)){
var c__5568__auto___37516 = cljs.core.chunk_first(seq__36870_37515__$1);
var G__37517 = cljs.core.chunk_rest(seq__36870_37515__$1);
var G__37518 = c__5568__auto___37516;
var G__37519 = cljs.core.count(c__5568__auto___37516);
var G__37520 = (0);
seq__36870_37502 = G__37517;
chunk__36871_37503 = G__37518;
count__36872_37504 = G__37519;
i__36873_37505 = G__37520;
continue;
} else {
var vec__36886_37521 = cljs.core.first(seq__36870_37515__$1);
var script_tag_37522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_37521,(0),null);
var script_body_37523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36886_37521,(1),null);
eval(script_body_37523);


var G__37525 = cljs.core.next(seq__36870_37515__$1);
var G__37526 = null;
var G__37527 = (0);
var G__37528 = (0);
seq__36870_37502 = G__37525;
chunk__36871_37503 = G__37526;
count__36872_37504 = G__37527;
i__36873_37505 = G__37528;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36889){
var vec__36890 = p__36889;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36890,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36898 = arguments.length;
switch (G__36898) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36909 = cljs.core.seq(style_keys);
var chunk__36910 = null;
var count__36911 = (0);
var i__36912 = (0);
while(true){
if((i__36912 < count__36911)){
var it = chunk__36910.cljs$core$IIndexed$_nth$arity$2(null,i__36912);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37531 = seq__36909;
var G__37532 = chunk__36910;
var G__37533 = count__36911;
var G__37534 = (i__36912 + (1));
seq__36909 = G__37531;
chunk__36910 = G__37532;
count__36911 = G__37533;
i__36912 = G__37534;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36909);
if(temp__5804__auto__){
var seq__36909__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36909__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36909__$1);
var G__37535 = cljs.core.chunk_rest(seq__36909__$1);
var G__37536 = c__5568__auto__;
var G__37537 = cljs.core.count(c__5568__auto__);
var G__37538 = (0);
seq__36909 = G__37535;
chunk__36910 = G__37536;
count__36911 = G__37537;
i__36912 = G__37538;
continue;
} else {
var it = cljs.core.first(seq__36909__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37539 = cljs.core.next(seq__36909__$1);
var G__37540 = null;
var G__37541 = (0);
var G__37542 = (0);
seq__36909 = G__37539;
chunk__36910 = G__37540;
count__36911 = G__37541;
i__36912 = G__37542;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36921,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36939 = k36921;
var G__36939__$1 = (((G__36939 instanceof cljs.core.Keyword))?G__36939.fqn:null);
switch (G__36939__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36921,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36940){
var vec__36941 = p__36940;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36941,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36920){
var self__ = this;
var G__36920__$1 = this;
return (new cljs.core.RecordIter((0),G__36920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36922,other36923){
var self__ = this;
var this36922__$1 = this;
return (((!((other36923 == null)))) && ((((this36922__$1.constructor === other36923.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36922__$1.x,other36923.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36922__$1.y,other36923.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36922__$1.__extmap,other36923.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36921){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36952 = k36921;
var G__36952__$1 = (((G__36952 instanceof cljs.core.Keyword))?G__36952.fqn:null);
switch (G__36952__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36921);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36920){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36953 = cljs.core.keyword_identical_QMARK_;
var expr__36954 = k__5352__auto__;
if(cljs.core.truth_((pred__36953.cljs$core$IFn$_invoke$arity$2 ? pred__36953.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36954) : pred__36953.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36954)))){
return (new shadow.dom.Coordinate(G__36920,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36953.cljs$core$IFn$_invoke$arity$2 ? pred__36953.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36954) : pred__36953.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36954)))){
return (new shadow.dom.Coordinate(self__.x,G__36920,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36920),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36920){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36920,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36930){
var extmap__5385__auto__ = (function (){var G__36957 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36930,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36957);
} else {
return G__36957;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36930),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36930),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36962,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36972 = k36962;
var G__36972__$1 = (((G__36972 instanceof cljs.core.Keyword))?G__36972.fqn:null);
switch (G__36972__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36962,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36973){
var vec__36974 = p__36973;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36961){
var self__ = this;
var G__36961__$1 = this;
return (new cljs.core.RecordIter((0),G__36961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36963,other36964){
var self__ = this;
var this36963__$1 = this;
return (((!((other36964 == null)))) && ((((this36963__$1.constructor === other36964.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.w,other36964.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.h,other36964.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36963__$1.__extmap,other36964.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36962){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36986 = k36962;
var G__36986__$1 = (((G__36986 instanceof cljs.core.Keyword))?G__36986.fqn:null);
switch (G__36986__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36962);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36961){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36988 = cljs.core.keyword_identical_QMARK_;
var expr__36989 = k__5352__auto__;
if(cljs.core.truth_((pred__36988.cljs$core$IFn$_invoke$arity$2 ? pred__36988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36989) : pred__36988.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36989)))){
return (new shadow.dom.Size(G__36961,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36988.cljs$core$IFn$_invoke$arity$2 ? pred__36988.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36989) : pred__36988.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36989)))){
return (new shadow.dom.Size(self__.w,G__36961,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36961),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36961){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36961,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36965){
var extmap__5385__auto__ = (function (){var G__36997 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36965,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36965)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36997);
} else {
return G__36997;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36965),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36965),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37560 = (i + (1));
var G__37561 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37560;
ret = G__37561;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37030){
var vec__37031 = p__37030;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37031,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37037 = arguments.length;
switch (G__37037) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37564 = ps;
var G__37565 = (i + (1));
el__$1 = G__37564;
i = G__37565;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37047 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37047,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37054_37569 = cljs.core.seq(props);
var chunk__37055_37570 = null;
var count__37056_37571 = (0);
var i__37057_37572 = (0);
while(true){
if((i__37057_37572 < count__37056_37571)){
var vec__37071_37573 = chunk__37055_37570.cljs$core$IIndexed$_nth$arity$2(null,i__37057_37572);
var k_37574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071_37573,(0),null);
var v_37575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37071_37573,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37574);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37574),v_37575);


var G__37576 = seq__37054_37569;
var G__37577 = chunk__37055_37570;
var G__37578 = count__37056_37571;
var G__37579 = (i__37057_37572 + (1));
seq__37054_37569 = G__37576;
chunk__37055_37570 = G__37577;
count__37056_37571 = G__37578;
i__37057_37572 = G__37579;
continue;
} else {
var temp__5804__auto___37580 = cljs.core.seq(seq__37054_37569);
if(temp__5804__auto___37580){
var seq__37054_37581__$1 = temp__5804__auto___37580;
if(cljs.core.chunked_seq_QMARK_(seq__37054_37581__$1)){
var c__5568__auto___37583 = cljs.core.chunk_first(seq__37054_37581__$1);
var G__37584 = cljs.core.chunk_rest(seq__37054_37581__$1);
var G__37585 = c__5568__auto___37583;
var G__37586 = cljs.core.count(c__5568__auto___37583);
var G__37587 = (0);
seq__37054_37569 = G__37584;
chunk__37055_37570 = G__37585;
count__37056_37571 = G__37586;
i__37057_37572 = G__37587;
continue;
} else {
var vec__37086_37588 = cljs.core.first(seq__37054_37581__$1);
var k_37589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086_37588,(0),null);
var v_37590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37086_37588,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37589);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37589),v_37590);


var G__37591 = cljs.core.next(seq__37054_37581__$1);
var G__37592 = null;
var G__37593 = (0);
var G__37594 = (0);
seq__37054_37569 = G__37591;
chunk__37055_37570 = G__37592;
count__37056_37571 = G__37593;
i__37057_37572 = G__37594;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37105 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37105,(1),null);
var seq__37112_37596 = cljs.core.seq(node_children);
var chunk__37114_37597 = null;
var count__37115_37598 = (0);
var i__37116_37599 = (0);
while(true){
if((i__37116_37599 < count__37115_37598)){
var child_struct_37601 = chunk__37114_37597.cljs$core$IIndexed$_nth$arity$2(null,i__37116_37599);
if((!((child_struct_37601 == null)))){
if(typeof child_struct_37601 === 'string'){
var text_37602 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37602),child_struct_37601].join(''));
} else {
var children_37604 = shadow.dom.svg_node(child_struct_37601);
if(cljs.core.seq_QMARK_(children_37604)){
var seq__37147_37606 = cljs.core.seq(children_37604);
var chunk__37149_37607 = null;
var count__37150_37608 = (0);
var i__37151_37609 = (0);
while(true){
if((i__37151_37609 < count__37150_37608)){
var child_37610 = chunk__37149_37607.cljs$core$IIndexed$_nth$arity$2(null,i__37151_37609);
if(cljs.core.truth_(child_37610)){
node.appendChild(child_37610);


var G__37611 = seq__37147_37606;
var G__37612 = chunk__37149_37607;
var G__37613 = count__37150_37608;
var G__37614 = (i__37151_37609 + (1));
seq__37147_37606 = G__37611;
chunk__37149_37607 = G__37612;
count__37150_37608 = G__37613;
i__37151_37609 = G__37614;
continue;
} else {
var G__37615 = seq__37147_37606;
var G__37616 = chunk__37149_37607;
var G__37617 = count__37150_37608;
var G__37618 = (i__37151_37609 + (1));
seq__37147_37606 = G__37615;
chunk__37149_37607 = G__37616;
count__37150_37608 = G__37617;
i__37151_37609 = G__37618;
continue;
}
} else {
var temp__5804__auto___37619 = cljs.core.seq(seq__37147_37606);
if(temp__5804__auto___37619){
var seq__37147_37620__$1 = temp__5804__auto___37619;
if(cljs.core.chunked_seq_QMARK_(seq__37147_37620__$1)){
var c__5568__auto___37621 = cljs.core.chunk_first(seq__37147_37620__$1);
var G__37622 = cljs.core.chunk_rest(seq__37147_37620__$1);
var G__37623 = c__5568__auto___37621;
var G__37624 = cljs.core.count(c__5568__auto___37621);
var G__37625 = (0);
seq__37147_37606 = G__37622;
chunk__37149_37607 = G__37623;
count__37150_37608 = G__37624;
i__37151_37609 = G__37625;
continue;
} else {
var child_37626 = cljs.core.first(seq__37147_37620__$1);
if(cljs.core.truth_(child_37626)){
node.appendChild(child_37626);


var G__37627 = cljs.core.next(seq__37147_37620__$1);
var G__37628 = null;
var G__37629 = (0);
var G__37630 = (0);
seq__37147_37606 = G__37627;
chunk__37149_37607 = G__37628;
count__37150_37608 = G__37629;
i__37151_37609 = G__37630;
continue;
} else {
var G__37631 = cljs.core.next(seq__37147_37620__$1);
var G__37632 = null;
var G__37633 = (0);
var G__37634 = (0);
seq__37147_37606 = G__37631;
chunk__37149_37607 = G__37632;
count__37150_37608 = G__37633;
i__37151_37609 = G__37634;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37604);
}
}


var G__37635 = seq__37112_37596;
var G__37636 = chunk__37114_37597;
var G__37637 = count__37115_37598;
var G__37638 = (i__37116_37599 + (1));
seq__37112_37596 = G__37635;
chunk__37114_37597 = G__37636;
count__37115_37598 = G__37637;
i__37116_37599 = G__37638;
continue;
} else {
var G__37639 = seq__37112_37596;
var G__37640 = chunk__37114_37597;
var G__37641 = count__37115_37598;
var G__37642 = (i__37116_37599 + (1));
seq__37112_37596 = G__37639;
chunk__37114_37597 = G__37640;
count__37115_37598 = G__37641;
i__37116_37599 = G__37642;
continue;
}
} else {
var temp__5804__auto___37643 = cljs.core.seq(seq__37112_37596);
if(temp__5804__auto___37643){
var seq__37112_37644__$1 = temp__5804__auto___37643;
if(cljs.core.chunked_seq_QMARK_(seq__37112_37644__$1)){
var c__5568__auto___37645 = cljs.core.chunk_first(seq__37112_37644__$1);
var G__37646 = cljs.core.chunk_rest(seq__37112_37644__$1);
var G__37647 = c__5568__auto___37645;
var G__37648 = cljs.core.count(c__5568__auto___37645);
var G__37649 = (0);
seq__37112_37596 = G__37646;
chunk__37114_37597 = G__37647;
count__37115_37598 = G__37648;
i__37116_37599 = G__37649;
continue;
} else {
var child_struct_37651 = cljs.core.first(seq__37112_37644__$1);
if((!((child_struct_37651 == null)))){
if(typeof child_struct_37651 === 'string'){
var text_37652 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37652),child_struct_37651].join(''));
} else {
var children_37653 = shadow.dom.svg_node(child_struct_37651);
if(cljs.core.seq_QMARK_(children_37653)){
var seq__37158_37654 = cljs.core.seq(children_37653);
var chunk__37160_37655 = null;
var count__37161_37656 = (0);
var i__37162_37657 = (0);
while(true){
if((i__37162_37657 < count__37161_37656)){
var child_37658 = chunk__37160_37655.cljs$core$IIndexed$_nth$arity$2(null,i__37162_37657);
if(cljs.core.truth_(child_37658)){
node.appendChild(child_37658);


var G__37659 = seq__37158_37654;
var G__37660 = chunk__37160_37655;
var G__37661 = count__37161_37656;
var G__37662 = (i__37162_37657 + (1));
seq__37158_37654 = G__37659;
chunk__37160_37655 = G__37660;
count__37161_37656 = G__37661;
i__37162_37657 = G__37662;
continue;
} else {
var G__37663 = seq__37158_37654;
var G__37664 = chunk__37160_37655;
var G__37665 = count__37161_37656;
var G__37666 = (i__37162_37657 + (1));
seq__37158_37654 = G__37663;
chunk__37160_37655 = G__37664;
count__37161_37656 = G__37665;
i__37162_37657 = G__37666;
continue;
}
} else {
var temp__5804__auto___37667__$1 = cljs.core.seq(seq__37158_37654);
if(temp__5804__auto___37667__$1){
var seq__37158_37669__$1 = temp__5804__auto___37667__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37158_37669__$1)){
var c__5568__auto___37671 = cljs.core.chunk_first(seq__37158_37669__$1);
var G__37672 = cljs.core.chunk_rest(seq__37158_37669__$1);
var G__37673 = c__5568__auto___37671;
var G__37674 = cljs.core.count(c__5568__auto___37671);
var G__37675 = (0);
seq__37158_37654 = G__37672;
chunk__37160_37655 = G__37673;
count__37161_37656 = G__37674;
i__37162_37657 = G__37675;
continue;
} else {
var child_37676 = cljs.core.first(seq__37158_37669__$1);
if(cljs.core.truth_(child_37676)){
node.appendChild(child_37676);


var G__37677 = cljs.core.next(seq__37158_37669__$1);
var G__37678 = null;
var G__37679 = (0);
var G__37680 = (0);
seq__37158_37654 = G__37677;
chunk__37160_37655 = G__37678;
count__37161_37656 = G__37679;
i__37162_37657 = G__37680;
continue;
} else {
var G__37681 = cljs.core.next(seq__37158_37669__$1);
var G__37682 = null;
var G__37683 = (0);
var G__37684 = (0);
seq__37158_37654 = G__37681;
chunk__37160_37655 = G__37682;
count__37161_37656 = G__37683;
i__37162_37657 = G__37684;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37653);
}
}


var G__37685 = cljs.core.next(seq__37112_37644__$1);
var G__37686 = null;
var G__37687 = (0);
var G__37688 = (0);
seq__37112_37596 = G__37685;
chunk__37114_37597 = G__37686;
count__37115_37598 = G__37687;
i__37116_37599 = G__37688;
continue;
} else {
var G__37690 = cljs.core.next(seq__37112_37644__$1);
var G__37691 = null;
var G__37692 = (0);
var G__37693 = (0);
seq__37112_37596 = G__37690;
chunk__37114_37597 = G__37691;
count__37115_37598 = G__37692;
i__37116_37599 = G__37693;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37697 = arguments.length;
var i__5770__auto___37699 = (0);
while(true){
if((i__5770__auto___37699 < len__5769__auto___37697)){
args__5775__auto__.push((arguments[i__5770__auto___37699]));

var G__37701 = (i__5770__auto___37699 + (1));
i__5770__auto___37699 = G__37701;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37182){
var G__37183 = cljs.core.first(seq37182);
var seq37182__$1 = cljs.core.next(seq37182);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37183,seq37182__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37197 = arguments.length;
switch (G__37197) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33618__auto___37706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_37267){
var state_val_37268 = (state_37267[(1)]);
if((state_val_37268 === (1))){
var state_37267__$1 = state_37267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37267__$1,(2),once_or_cleanup);
} else {
if((state_val_37268 === (2))){
var inst_37253 = (state_37267[(2)]);
var inst_37257 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37267__$1 = (function (){var statearr_37288 = state_37267;
(statearr_37288[(7)] = inst_37253);

return statearr_37288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37267__$1,inst_37257);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33204__auto__ = null;
var shadow$dom$state_machine__33204__auto____0 = (function (){
var statearr_37292 = [null,null,null,null,null,null,null,null];
(statearr_37292[(0)] = shadow$dom$state_machine__33204__auto__);

(statearr_37292[(1)] = (1));

return statearr_37292;
});
var shadow$dom$state_machine__33204__auto____1 = (function (state_37267){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_37267);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e37296){var ex__33207__auto__ = e37296;
var statearr_37297_37707 = state_37267;
(statearr_37297_37707[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_37267[(4)]))){
var statearr_37302_37708 = state_37267;
(statearr_37302_37708[(1)] = cljs.core.first((state_37267[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37709 = state_37267;
state_37267 = G__37709;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
shadow$dom$state_machine__33204__auto__ = function(state_37267){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33204__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33204__auto____1.call(this,state_37267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33204__auto____0;
shadow$dom$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33204__auto____1;
return shadow$dom$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_37304 = f__33619__auto__();
(statearr_37304[(6)] = c__33618__auto___37706);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
