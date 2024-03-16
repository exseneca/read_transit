goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33709 = (function (f,blockable,meta33710){
this.f = f;
this.blockable = blockable;
this.meta33710 = meta33710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33711,meta33710__$1){
var self__ = this;
var _33711__$1 = this;
return (new cljs.core.async.t_cljs$core$async33709(self__.f,self__.blockable,meta33710__$1));
}));

(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33711){
var self__ = this;
var _33711__$1 = this;
return self__.meta33710;
}));

(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33710","meta33710",-1933577385,null)], null);
}));

(cljs.core.async.t_cljs$core$async33709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33709");

(cljs.core.async.t_cljs$core$async33709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33709.
 */
cljs.core.async.__GT_t_cljs$core$async33709 = (function cljs$core$async$__GT_t_cljs$core$async33709(f,blockable,meta33710){
return (new cljs.core.async.t_cljs$core$async33709(f,blockable,meta33710));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33707 = arguments.length;
switch (G__33707) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33709(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33761 = arguments.length;
switch (G__33761) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33804 = arguments.length;
switch (G__33804) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35907 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35907) : fn1.call(null,val_35907));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35907) : fn1.call(null,val_35907));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33809 = arguments.length;
switch (G__33809) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35909 = n;
var x_35910 = (0);
while(true){
if((x_35910 < n__5636__auto___35909)){
(a[x_35910] = x_35910);

var G__35911 = (x_35910 + (1));
x_35910 = G__35911;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33812 = (function (flag,meta33813){
this.flag = flag;
this.meta33813 = meta33813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33814,meta33813__$1){
var self__ = this;
var _33814__$1 = this;
return (new cljs.core.async.t_cljs$core$async33812(self__.flag,meta33813__$1));
}));

(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33814){
var self__ = this;
var _33814__$1 = this;
return self__.meta33813;
}));

(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33813","meta33813",-1210705091,null)], null);
}));

(cljs.core.async.t_cljs$core$async33812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33812");

(cljs.core.async.t_cljs$core$async33812.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33812.
 */
cljs.core.async.__GT_t_cljs$core$async33812 = (function cljs$core$async$__GT_t_cljs$core$async33812(flag,meta33813){
return (new cljs.core.async.t_cljs$core$async33812(flag,meta33813));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33812(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33820 = (function (flag,cb,meta33821){
this.flag = flag;
this.cb = cb;
this.meta33821 = meta33821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33822,meta33821__$1){
var self__ = this;
var _33822__$1 = this;
return (new cljs.core.async.t_cljs$core$async33820(self__.flag,self__.cb,meta33821__$1));
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33822){
var self__ = this;
var _33822__$1 = this;
return self__.meta33821;
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33821","meta33821",2107366783,null)], null);
}));

(cljs.core.async.t_cljs$core$async33820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33820");

(cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33820.
 */
cljs.core.async.__GT_t_cljs$core$async33820 = (function cljs$core$async$__GT_t_cljs$core$async33820(flag,cb,meta33821){
return (new cljs.core.async.t_cljs$core$async33820(flag,cb,meta33821));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33820(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33823_SHARP_){
var G__33827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33823_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33827) : fret.call(null,G__33827));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33824_SHARP_){
var G__33828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33824_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33828) : fret.call(null,G__33828));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35912 = (i + (1));
i = G__35912;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35914 = arguments.length;
var i__5770__auto___35915 = (0);
while(true){
if((i__5770__auto___35915 < len__5769__auto___35914)){
args__5775__auto__.push((arguments[i__5770__auto___35915]));

var G__35916 = (i__5770__auto___35915 + (1));
i__5770__auto___35915 = G__35916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33831){
var map__33833 = p__33831;
var map__33833__$1 = cljs.core.__destructure_map(map__33833);
var opts = map__33833__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33829){
var G__33830 = cljs.core.first(seq33829);
var seq33829__$1 = cljs.core.next(seq33829);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33830,seq33829__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33836 = arguments.length;
switch (G__33836) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33618__auto___35918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_33872){
var state_val_33886 = (state_33872[(1)]);
if((state_val_33886 === (7))){
var inst_33865 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33931_35919 = state_33872__$1;
(statearr_33931_35919[(2)] = inst_33865);

(statearr_33931_35919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (1))){
var state_33872__$1 = state_33872;
var statearr_33933_35921 = state_33872__$1;
(statearr_33933_35921[(2)] = null);

(statearr_33933_35921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (4))){
var inst_33848 = (state_33872[(7)]);
var inst_33848__$1 = (state_33872[(2)]);
var inst_33849 = (inst_33848__$1 == null);
var state_33872__$1 = (function (){var statearr_33938 = state_33872;
(statearr_33938[(7)] = inst_33848__$1);

return statearr_33938;
})();
if(cljs.core.truth_(inst_33849)){
var statearr_33942_35922 = state_33872__$1;
(statearr_33942_35922[(1)] = (5));

} else {
var statearr_33943_35923 = state_33872__$1;
(statearr_33943_35923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (13))){
var state_33872__$1 = state_33872;
var statearr_33945_35924 = state_33872__$1;
(statearr_33945_35924[(2)] = null);

(statearr_33945_35924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (6))){
var inst_33848 = (state_33872[(7)]);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33872__$1,(11),to,inst_33848);
} else {
if((state_val_33886 === (3))){
var inst_33867 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33872__$1,inst_33867);
} else {
if((state_val_33886 === (12))){
var state_33872__$1 = state_33872;
var statearr_33957_35925 = state_33872__$1;
(statearr_33957_35925[(2)] = null);

(statearr_33957_35925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (2))){
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33872__$1,(4),from);
} else {
if((state_val_33886 === (11))){
var inst_33858 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
if(cljs.core.truth_(inst_33858)){
var statearr_33962_35926 = state_33872__$1;
(statearr_33962_35926[(1)] = (12));

} else {
var statearr_33963_35927 = state_33872__$1;
(statearr_33963_35927[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (9))){
var state_33872__$1 = state_33872;
var statearr_33964_35928 = state_33872__$1;
(statearr_33964_35928[(2)] = null);

(statearr_33964_35928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (5))){
var state_33872__$1 = state_33872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33965_35929 = state_33872__$1;
(statearr_33965_35929[(1)] = (8));

} else {
var statearr_33966_35930 = state_33872__$1;
(statearr_33966_35930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (14))){
var inst_33863 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33967_35931 = state_33872__$1;
(statearr_33967_35931[(2)] = inst_33863);

(statearr_33967_35931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (10))){
var inst_33855 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33968_35932 = state_33872__$1;
(statearr_33968_35932[(2)] = inst_33855);

(statearr_33968_35932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33886 === (8))){
var inst_33852 = cljs.core.async.close_BANG_(to);
var state_33872__$1 = state_33872;
var statearr_33969_35933 = state_33872__$1;
(statearr_33969_35933[(2)] = inst_33852);

(statearr_33969_35933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_33970 = [null,null,null,null,null,null,null,null];
(statearr_33970[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_33970[(1)] = (1));

return statearr_33970;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_33872){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33872);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33971){var ex__33207__auto__ = e33971;
var statearr_33972_35934 = state_33872;
(statearr_33972_35934[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33872[(4)]))){
var statearr_33973_35935 = state_33872;
(statearr_33973_35935[(1)] = cljs.core.first((state_33872[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35936 = state_33872;
state_33872 = G__35936;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_33872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_33872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_33974 = f__33619__auto__();
(statearr_33974[(6)] = c__33618__auto___35918);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33977){
var vec__33978 = p__33977;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33978,(1),null);
var job = vec__33978;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33618__auto___35941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_33987){
var state_val_33988 = (state_33987[(1)]);
if((state_val_33988 === (1))){
var state_33987__$1 = state_33987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33987__$1,(2),res,v);
} else {
if((state_val_33988 === (2))){
var inst_33984 = (state_33987[(2)]);
var inst_33985 = cljs.core.async.close_BANG_(res);
var state_33987__$1 = (function (){var statearr_33990 = state_33987;
(statearr_33990[(7)] = inst_33984);

return statearr_33990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33987__$1,inst_33985);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_33991 = [null,null,null,null,null,null,null,null];
(statearr_33991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_33991[(1)] = (1));

return statearr_33991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_33987){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_33987);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e33993){var ex__33207__auto__ = e33993;
var statearr_33994_35943 = state_33987;
(statearr_33994_35943[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_33987[(4)]))){
var statearr_33995_35946 = state_33987;
(statearr_33995_35946[(1)] = cljs.core.first((state_33987[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35948 = state_33987;
state_33987 = G__35948;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_33987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_33987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_33997 = f__33619__auto__();
(statearr_33997[(6)] = c__33618__auto___35941);

return statearr_33997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33998){
var vec__33999 = p__33998;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33999,(1),null);
var job = vec__33999;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35950 = n;
var __35951 = (0);
while(true){
if((__35951 < n__5636__auto___35950)){
var G__34002_35952 = type;
var G__34002_35953__$1 = (((G__34002_35952 instanceof cljs.core.Keyword))?G__34002_35952.fqn:null);
switch (G__34002_35953__$1) {
case "compute":
var c__33618__auto___35955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35951,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = ((function (__35951,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function (state_34015){
var state_val_34016 = (state_34015[(1)]);
if((state_val_34016 === (1))){
var state_34015__$1 = state_34015;
var statearr_34017_35959 = state_34015__$1;
(statearr_34017_35959[(2)] = null);

(statearr_34017_35959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (2))){
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34015__$1,(4),jobs);
} else {
if((state_val_34016 === (3))){
var inst_34013 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34015__$1,inst_34013);
} else {
if((state_val_34016 === (4))){
var inst_34005 = (state_34015[(2)]);
var inst_34006 = process__$1(inst_34005);
var state_34015__$1 = state_34015;
if(cljs.core.truth_(inst_34006)){
var statearr_34019_35960 = state_34015__$1;
(statearr_34019_35960[(1)] = (5));

} else {
var statearr_34020_35961 = state_34015__$1;
(statearr_34020_35961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (5))){
var state_34015__$1 = state_34015;
var statearr_34036_35962 = state_34015__$1;
(statearr_34036_35962[(2)] = null);

(statearr_34036_35962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (6))){
var state_34015__$1 = state_34015;
var statearr_34040_35963 = state_34015__$1;
(statearr_34040_35963[(2)] = null);

(statearr_34040_35963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (7))){
var inst_34011 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34042_35964 = state_34015__$1;
(statearr_34042_35964[(2)] = inst_34011);

(statearr_34042_35964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35951,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
;
return ((function (__35951,switch__33203__auto__,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34047 = [null,null,null,null,null,null,null];
(statearr_34047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34047[(1)] = (1));

return statearr_34047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34015){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34015);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34049){var ex__33207__auto__ = e34049;
var statearr_34054_35965 = state_34015;
(statearr_34054_35965[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34015[(4)]))){
var statearr_34062_35966 = state_34015;
(statearr_34062_35966[(1)] = cljs.core.first((state_34015[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35967 = state_34015;
state_34015 = G__35967;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
;})(__35951,switch__33203__auto__,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
})();
var state__33620__auto__ = (function (){var statearr_34068 = f__33619__auto__();
(statearr_34068[(6)] = c__33618__auto___35955);

return statearr_34068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
});})(__35951,c__33618__auto___35955,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
);


break;
case "async":
var c__33618__auto___35968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35951,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = ((function (__35951,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (1))){
var state_34081__$1 = state_34081;
var statearr_34083_35969 = state_34081__$1;
(statearr_34083_35969[(2)] = null);

(statearr_34083_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34081__$1,(4),jobs);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (4))){
var inst_34071 = (state_34081[(2)]);
var inst_34072 = async(inst_34071);
var state_34081__$1 = state_34081;
if(cljs.core.truth_(inst_34072)){
var statearr_34088_35970 = state_34081__$1;
(statearr_34088_35970[(1)] = (5));

} else {
var statearr_34089_35971 = state_34081__$1;
(statearr_34089_35971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (5))){
var state_34081__$1 = state_34081;
var statearr_34091_35972 = state_34081__$1;
(statearr_34091_35972[(2)] = null);

(statearr_34091_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (6))){
var state_34081__$1 = state_34081;
var statearr_34092_35973 = state_34081__$1;
(statearr_34092_35973[(2)] = null);

(statearr_34092_35973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (7))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34095_35974 = state_34081__$1;
(statearr_34095_35974[(2)] = inst_34077);

(statearr_34095_35974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35951,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
;
return ((function (__35951,switch__33203__auto__,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34099 = [null,null,null,null,null,null,null];
(statearr_34099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34099[(1)] = (1));

return statearr_34099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34081){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34081);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34100){var ex__33207__auto__ = e34100;
var statearr_34102_35975 = state_34081;
(statearr_34102_35975[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34081[(4)]))){
var statearr_34105_35977 = state_34081;
(statearr_34105_35977[(1)] = cljs.core.first((state_34081[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35979 = state_34081;
state_34081 = G__35979;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
;})(__35951,switch__33203__auto__,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
})();
var state__33620__auto__ = (function (){var statearr_34126 = f__33619__auto__();
(statearr_34126[(6)] = c__33618__auto___35968);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
});})(__35951,c__33618__auto___35968,G__34002_35952,G__34002_35953__$1,n__5636__auto___35950,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34002_35953__$1)].join('')));

}

var G__35980 = (__35951 + (1));
__35951 = G__35980;
continue;
} else {
}
break;
}

var c__33618__auto___35981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34152){
var state_val_34153 = (state_34152[(1)]);
if((state_val_34153 === (7))){
var inst_34148 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
var statearr_34158_35983 = state_34152__$1;
(statearr_34158_35983[(2)] = inst_34148);

(statearr_34158_35983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (1))){
var state_34152__$1 = state_34152;
var statearr_34159_35984 = state_34152__$1;
(statearr_34159_35984[(2)] = null);

(statearr_34159_35984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (4))){
var inst_34133 = (state_34152[(7)]);
var inst_34133__$1 = (state_34152[(2)]);
var inst_34134 = (inst_34133__$1 == null);
var state_34152__$1 = (function (){var statearr_34160 = state_34152;
(statearr_34160[(7)] = inst_34133__$1);

return statearr_34160;
})();
if(cljs.core.truth_(inst_34134)){
var statearr_34161_35985 = state_34152__$1;
(statearr_34161_35985[(1)] = (5));

} else {
var statearr_34162_35986 = state_34152__$1;
(statearr_34162_35986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (6))){
var inst_34138 = (state_34152[(8)]);
var inst_34133 = (state_34152[(7)]);
var inst_34138__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34140 = [inst_34133,inst_34138__$1];
var inst_34141 = (new cljs.core.PersistentVector(null,2,(5),inst_34139,inst_34140,null));
var state_34152__$1 = (function (){var statearr_34163 = state_34152;
(statearr_34163[(8)] = inst_34138__$1);

return statearr_34163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34152__$1,(8),jobs,inst_34141);
} else {
if((state_val_34153 === (3))){
var inst_34150 = (state_34152[(2)]);
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34152__$1,inst_34150);
} else {
if((state_val_34153 === (2))){
var state_34152__$1 = state_34152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34152__$1,(4),from);
} else {
if((state_val_34153 === (9))){
var inst_34145 = (state_34152[(2)]);
var state_34152__$1 = (function (){var statearr_34167 = state_34152;
(statearr_34167[(9)] = inst_34145);

return statearr_34167;
})();
var statearr_34169_35987 = state_34152__$1;
(statearr_34169_35987[(2)] = null);

(statearr_34169_35987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (5))){
var inst_34136 = cljs.core.async.close_BANG_(jobs);
var state_34152__$1 = state_34152;
var statearr_34171_35988 = state_34152__$1;
(statearr_34171_35988[(2)] = inst_34136);

(statearr_34171_35988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34153 === (8))){
var inst_34138 = (state_34152[(8)]);
var inst_34143 = (state_34152[(2)]);
var state_34152__$1 = (function (){var statearr_34172 = state_34152;
(statearr_34172[(10)] = inst_34143);

return statearr_34172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34152__$1,(9),results,inst_34138);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34152){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34152);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34174){var ex__33207__auto__ = e34174;
var statearr_34175_35990 = state_34152;
(statearr_34175_35990[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34152[(4)]))){
var statearr_34176_35992 = state_34152;
(statearr_34176_35992[(1)] = cljs.core.first((state_34152[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35993 = state_34152;
state_34152 = G__35993;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34177 = f__33619__auto__();
(statearr_34177[(6)] = c__33618__auto___35981);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


var c__33618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34215){
var state_val_34216 = (state_34215[(1)]);
if((state_val_34216 === (7))){
var inst_34211 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34217_35994 = state_34215__$1;
(statearr_34217_35994[(2)] = inst_34211);

(statearr_34217_35994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (20))){
var state_34215__$1 = state_34215;
var statearr_34218_35995 = state_34215__$1;
(statearr_34218_35995[(2)] = null);

(statearr_34218_35995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (1))){
var state_34215__$1 = state_34215;
var statearr_34219_35996 = state_34215__$1;
(statearr_34219_35996[(2)] = null);

(statearr_34219_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (4))){
var inst_34180 = (state_34215[(7)]);
var inst_34180__$1 = (state_34215[(2)]);
var inst_34181 = (inst_34180__$1 == null);
var state_34215__$1 = (function (){var statearr_34220 = state_34215;
(statearr_34220[(7)] = inst_34180__$1);

return statearr_34220;
})();
if(cljs.core.truth_(inst_34181)){
var statearr_34221_35997 = state_34215__$1;
(statearr_34221_35997[(1)] = (5));

} else {
var statearr_34222_35998 = state_34215__$1;
(statearr_34222_35998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (15))){
var inst_34193 = (state_34215[(8)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34215__$1,(18),to,inst_34193);
} else {
if((state_val_34216 === (21))){
var inst_34206 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34223_36001 = state_34215__$1;
(statearr_34223_36001[(2)] = inst_34206);

(statearr_34223_36001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (13))){
var inst_34208 = (state_34215[(2)]);
var state_34215__$1 = (function (){var statearr_34224 = state_34215;
(statearr_34224[(9)] = inst_34208);

return statearr_34224;
})();
var statearr_34225_36002 = state_34215__$1;
(statearr_34225_36002[(2)] = null);

(statearr_34225_36002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (6))){
var inst_34180 = (state_34215[(7)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34215__$1,(11),inst_34180);
} else {
if((state_val_34216 === (17))){
var inst_34201 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
if(cljs.core.truth_(inst_34201)){
var statearr_34226_36003 = state_34215__$1;
(statearr_34226_36003[(1)] = (19));

} else {
var statearr_34227_36004 = state_34215__$1;
(statearr_34227_36004[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (3))){
var inst_34213 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34215__$1,inst_34213);
} else {
if((state_val_34216 === (12))){
var inst_34190 = (state_34215[(10)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34215__$1,(14),inst_34190);
} else {
if((state_val_34216 === (2))){
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34215__$1,(4),results);
} else {
if((state_val_34216 === (19))){
var state_34215__$1 = state_34215;
var statearr_34228_36007 = state_34215__$1;
(statearr_34228_36007[(2)] = null);

(statearr_34228_36007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (11))){
var inst_34190 = (state_34215[(2)]);
var state_34215__$1 = (function (){var statearr_34229 = state_34215;
(statearr_34229[(10)] = inst_34190);

return statearr_34229;
})();
var statearr_34230_36008 = state_34215__$1;
(statearr_34230_36008[(2)] = null);

(statearr_34230_36008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (9))){
var state_34215__$1 = state_34215;
var statearr_34231_36009 = state_34215__$1;
(statearr_34231_36009[(2)] = null);

(statearr_34231_36009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (5))){
var state_34215__$1 = state_34215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34232_36010 = state_34215__$1;
(statearr_34232_36010[(1)] = (8));

} else {
var statearr_34233_36011 = state_34215__$1;
(statearr_34233_36011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (14))){
var inst_34193 = (state_34215[(8)]);
var inst_34195 = (state_34215[(11)]);
var inst_34193__$1 = (state_34215[(2)]);
var inst_34194 = (inst_34193__$1 == null);
var inst_34195__$1 = cljs.core.not(inst_34194);
var state_34215__$1 = (function (){var statearr_34234 = state_34215;
(statearr_34234[(8)] = inst_34193__$1);

(statearr_34234[(11)] = inst_34195__$1);

return statearr_34234;
})();
if(inst_34195__$1){
var statearr_34235_36012 = state_34215__$1;
(statearr_34235_36012[(1)] = (15));

} else {
var statearr_34236_36013 = state_34215__$1;
(statearr_34236_36013[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (16))){
var inst_34195 = (state_34215[(11)]);
var state_34215__$1 = state_34215;
var statearr_34237_36014 = state_34215__$1;
(statearr_34237_36014[(2)] = inst_34195);

(statearr_34237_36014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (10))){
var inst_34187 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34238_36015 = state_34215__$1;
(statearr_34238_36015[(2)] = inst_34187);

(statearr_34238_36015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (18))){
var inst_34198 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34239_36016 = state_34215__$1;
(statearr_34239_36016[(2)] = inst_34198);

(statearr_34239_36016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (8))){
var inst_34184 = cljs.core.async.close_BANG_(to);
var state_34215__$1 = state_34215;
var statearr_34240_36017 = state_34215__$1;
(statearr_34240_36017[(2)] = inst_34184);

(statearr_34240_36017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1 = (function (state_34215){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34215);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34242){var ex__33207__auto__ = e34242;
var statearr_34243_36018 = state_34215;
(statearr_34243_36018[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34215[(4)]))){
var statearr_34244_36019 = state_34215;
(statearr_34244_36019[(1)] = cljs.core.first((state_34215[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36020 = state_34215;
state_34215 = G__36020;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34245 = f__33619__auto__();
(statearr_34245[(6)] = c__33618__auto__);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

return c__33618__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34249 = arguments.length;
switch (G__34249) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34259 = arguments.length;
switch (G__34259) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34266 = arguments.length;
switch (G__34266) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33618__auto___36027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (7))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34302_36028 = state_34300__$1;
(statearr_34302_36028[(2)] = inst_34296);

(statearr_34302_36028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (1))){
var state_34300__$1 = state_34300;
var statearr_34306_36029 = state_34300__$1;
(statearr_34306_36029[(2)] = null);

(statearr_34306_36029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (4))){
var inst_34273 = (state_34300[(7)]);
var inst_34273__$1 = (state_34300[(2)]);
var inst_34274 = (inst_34273__$1 == null);
var state_34300__$1 = (function (){var statearr_34308 = state_34300;
(statearr_34308[(7)] = inst_34273__$1);

return statearr_34308;
})();
if(cljs.core.truth_(inst_34274)){
var statearr_34309_36030 = state_34300__$1;
(statearr_34309_36030[(1)] = (5));

} else {
var statearr_34310_36031 = state_34300__$1;
(statearr_34310_36031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (13))){
var state_34300__$1 = state_34300;
var statearr_34311_36032 = state_34300__$1;
(statearr_34311_36032[(2)] = null);

(statearr_34311_36032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var inst_34273 = (state_34300[(7)]);
var inst_34282 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34273) : p.call(null,inst_34273));
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34282)){
var statearr_34312_36033 = state_34300__$1;
(statearr_34312_36033[(1)] = (9));

} else {
var statearr_34313_36034 = state_34300__$1;
(statearr_34313_36034[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (3))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (12))){
var state_34300__$1 = state_34300;
var statearr_34317_36035 = state_34300__$1;
(statearr_34317_36035[(2)] = null);

(statearr_34317_36035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (2))){
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34300__$1,(4),ch);
} else {
if((state_val_34301 === (11))){
var inst_34273 = (state_34300[(7)]);
var inst_34286 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34300__$1,(8),inst_34286,inst_34273);
} else {
if((state_val_34301 === (9))){
var state_34300__$1 = state_34300;
var statearr_34319_36036 = state_34300__$1;
(statearr_34319_36036[(2)] = tc);

(statearr_34319_36036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var inst_34279 = cljs.core.async.close_BANG_(tc);
var inst_34280 = cljs.core.async.close_BANG_(fc);
var state_34300__$1 = (function (){var statearr_34321 = state_34300;
(statearr_34321[(8)] = inst_34279);

return statearr_34321;
})();
var statearr_34322_36037 = state_34300__$1;
(statearr_34322_36037[(2)] = inst_34280);

(statearr_34322_36037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (14))){
var inst_34294 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34323_36038 = state_34300__$1;
(statearr_34323_36038[(2)] = inst_34294);

(statearr_34323_36038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (10))){
var state_34300__$1 = state_34300;
var statearr_34328_36039 = state_34300__$1;
(statearr_34328_36039[(2)] = fc);

(statearr_34328_36039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (8))){
var inst_34288 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34288)){
var statearr_34332_36040 = state_34300__$1;
(statearr_34332_36040[(1)] = (12));

} else {
var statearr_34333_36041 = state_34300__$1;
(statearr_34333_36041[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_34335 = [null,null,null,null,null,null,null,null,null];
(statearr_34335[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_34335[(1)] = (1));

return statearr_34335;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_34300){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34300);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34340){var ex__33207__auto__ = e34340;
var statearr_34341_36042 = state_34300;
(statearr_34341_36042[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34300[(4)]))){
var statearr_34342_36043 = state_34300;
(statearr_34342_36043[(1)] = cljs.core.first((state_34300[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36044 = state_34300;
state_34300 = G__36044;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34347 = f__33619__auto__();
(statearr_34347[(6)] = c__33618__auto___36027);

return statearr_34347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34381){
var state_val_34382 = (state_34381[(1)]);
if((state_val_34382 === (7))){
var inst_34377 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34388_36045 = state_34381__$1;
(statearr_34388_36045[(2)] = inst_34377);

(statearr_34388_36045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (1))){
var inst_34353 = init;
var inst_34354 = inst_34353;
var state_34381__$1 = (function (){var statearr_34389 = state_34381;
(statearr_34389[(7)] = inst_34354);

return statearr_34389;
})();
var statearr_34390_36046 = state_34381__$1;
(statearr_34390_36046[(2)] = null);

(statearr_34390_36046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (4))){
var inst_34361 = (state_34381[(8)]);
var inst_34361__$1 = (state_34381[(2)]);
var inst_34362 = (inst_34361__$1 == null);
var state_34381__$1 = (function (){var statearr_34391 = state_34381;
(statearr_34391[(8)] = inst_34361__$1);

return statearr_34391;
})();
if(cljs.core.truth_(inst_34362)){
var statearr_34392_36047 = state_34381__$1;
(statearr_34392_36047[(1)] = (5));

} else {
var statearr_34393_36048 = state_34381__$1;
(statearr_34393_36048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (6))){
var inst_34354 = (state_34381[(7)]);
var inst_34361 = (state_34381[(8)]);
var inst_34365 = (state_34381[(9)]);
var inst_34365__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34354,inst_34361) : f.call(null,inst_34354,inst_34361));
var inst_34366 = cljs.core.reduced_QMARK_(inst_34365__$1);
var state_34381__$1 = (function (){var statearr_34394 = state_34381;
(statearr_34394[(9)] = inst_34365__$1);

return statearr_34394;
})();
if(inst_34366){
var statearr_34398_36049 = state_34381__$1;
(statearr_34398_36049[(1)] = (8));

} else {
var statearr_34400_36050 = state_34381__$1;
(statearr_34400_36050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (3))){
var inst_34379 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34381__$1,inst_34379);
} else {
if((state_val_34382 === (2))){
var state_34381__$1 = state_34381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34381__$1,(4),ch);
} else {
if((state_val_34382 === (9))){
var inst_34365 = (state_34381[(9)]);
var inst_34354 = inst_34365;
var state_34381__$1 = (function (){var statearr_34405 = state_34381;
(statearr_34405[(7)] = inst_34354);

return statearr_34405;
})();
var statearr_34406_36051 = state_34381__$1;
(statearr_34406_36051[(2)] = null);

(statearr_34406_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (5))){
var inst_34354 = (state_34381[(7)]);
var state_34381__$1 = state_34381;
var statearr_34407_36052 = state_34381__$1;
(statearr_34407_36052[(2)] = inst_34354);

(statearr_34407_36052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (10))){
var inst_34375 = (state_34381[(2)]);
var state_34381__$1 = state_34381;
var statearr_34409_36053 = state_34381__$1;
(statearr_34409_36053[(2)] = inst_34375);

(statearr_34409_36053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34382 === (8))){
var inst_34365 = (state_34381[(9)]);
var inst_34371 = cljs.core.deref(inst_34365);
var state_34381__$1 = state_34381;
var statearr_34410_36054 = state_34381__$1;
(statearr_34410_36054[(2)] = inst_34371);

(statearr_34410_36054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33204__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33204__auto____0 = (function (){
var statearr_34418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34418[(0)] = cljs$core$async$reduce_$_state_machine__33204__auto__);

(statearr_34418[(1)] = (1));

return statearr_34418;
});
var cljs$core$async$reduce_$_state_machine__33204__auto____1 = (function (state_34381){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34381);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34420){var ex__33207__auto__ = e34420;
var statearr_34421_36055 = state_34381;
(statearr_34421_36055[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34381[(4)]))){
var statearr_34422_36056 = state_34381;
(statearr_34422_36056[(1)] = cljs.core.first((state_34381[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36057 = state_34381;
state_34381 = G__36057;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33204__auto__ = function(state_34381){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33204__auto____1.call(this,state_34381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33204__auto____0;
cljs$core$async$reduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33204__auto____1;
return cljs$core$async$reduce_$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34423 = f__33619__auto__();
(statearr_34423[(6)] = c__33618__auto__);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

return c__33618__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34441){
var state_val_34442 = (state_34441[(1)]);
if((state_val_34442 === (1))){
var inst_34436 = cljs.core.async.reduce(f__$1,init,ch);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34441__$1,(2),inst_34436);
} else {
if((state_val_34442 === (2))){
var inst_34438 = (state_34441[(2)]);
var inst_34439 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34438) : f__$1.call(null,inst_34438));
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34441__$1,inst_34439);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33204__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33204__auto____0 = (function (){
var statearr_34443 = [null,null,null,null,null,null,null];
(statearr_34443[(0)] = cljs$core$async$transduce_$_state_machine__33204__auto__);

(statearr_34443[(1)] = (1));

return statearr_34443;
});
var cljs$core$async$transduce_$_state_machine__33204__auto____1 = (function (state_34441){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34441);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34444){var ex__33207__auto__ = e34444;
var statearr_34445_36059 = state_34441;
(statearr_34445_36059[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34441[(4)]))){
var statearr_34446_36060 = state_34441;
(statearr_34446_36060[(1)] = cljs.core.first((state_34441[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36061 = state_34441;
state_34441 = G__36061;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33204__auto__ = function(state_34441){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33204__auto____1.call(this,state_34441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33204__auto____0;
cljs$core$async$transduce_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33204__auto____1;
return cljs$core$async$transduce_$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34451 = f__33619__auto__();
(statearr_34451[(6)] = c__33618__auto__);

return statearr_34451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

return c__33618__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34453 = arguments.length;
switch (G__34453) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34479){
var state_val_34480 = (state_34479[(1)]);
if((state_val_34480 === (7))){
var inst_34461 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34481_36063 = state_34479__$1;
(statearr_34481_36063[(2)] = inst_34461);

(statearr_34481_36063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (1))){
var inst_34455 = cljs.core.seq(coll);
var inst_34456 = inst_34455;
var state_34479__$1 = (function (){var statearr_34482 = state_34479;
(statearr_34482[(7)] = inst_34456);

return statearr_34482;
})();
var statearr_34483_36064 = state_34479__$1;
(statearr_34483_36064[(2)] = null);

(statearr_34483_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (4))){
var inst_34456 = (state_34479[(7)]);
var inst_34459 = cljs.core.first(inst_34456);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34479__$1,(7),ch,inst_34459);
} else {
if((state_val_34480 === (13))){
var inst_34473 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34485_36065 = state_34479__$1;
(statearr_34485_36065[(2)] = inst_34473);

(statearr_34485_36065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (6))){
var inst_34464 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
if(cljs.core.truth_(inst_34464)){
var statearr_34487_36066 = state_34479__$1;
(statearr_34487_36066[(1)] = (8));

} else {
var statearr_34488_36067 = state_34479__$1;
(statearr_34488_36067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (3))){
var inst_34477 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34479__$1,inst_34477);
} else {
if((state_val_34480 === (12))){
var state_34479__$1 = state_34479;
var statearr_34489_36068 = state_34479__$1;
(statearr_34489_36068[(2)] = null);

(statearr_34489_36068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (2))){
var inst_34456 = (state_34479[(7)]);
var state_34479__$1 = state_34479;
if(cljs.core.truth_(inst_34456)){
var statearr_34490_36069 = state_34479__$1;
(statearr_34490_36069[(1)] = (4));

} else {
var statearr_34491_36070 = state_34479__$1;
(statearr_34491_36070[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (11))){
var inst_34470 = cljs.core.async.close_BANG_(ch);
var state_34479__$1 = state_34479;
var statearr_34492_36071 = state_34479__$1;
(statearr_34492_36071[(2)] = inst_34470);

(statearr_34492_36071[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (9))){
var state_34479__$1 = state_34479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34493_36072 = state_34479__$1;
(statearr_34493_36072[(1)] = (11));

} else {
var statearr_34494_36073 = state_34479__$1;
(statearr_34494_36073[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (5))){
var inst_34456 = (state_34479[(7)]);
var state_34479__$1 = state_34479;
var statearr_34495_36074 = state_34479__$1;
(statearr_34495_36074[(2)] = inst_34456);

(statearr_34495_36074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (10))){
var inst_34475 = (state_34479[(2)]);
var state_34479__$1 = state_34479;
var statearr_34496_36075 = state_34479__$1;
(statearr_34496_36075[(2)] = inst_34475);

(statearr_34496_36075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34480 === (8))){
var inst_34456 = (state_34479[(7)]);
var inst_34466 = cljs.core.next(inst_34456);
var inst_34456__$1 = inst_34466;
var state_34479__$1 = (function (){var statearr_34497 = state_34479;
(statearr_34497[(7)] = inst_34456__$1);

return statearr_34497;
})();
var statearr_34498_36076 = state_34479__$1;
(statearr_34498_36076[(2)] = null);

(statearr_34498_36076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_34479){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34479);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34500){var ex__33207__auto__ = e34500;
var statearr_34501_36082 = state_34479;
(statearr_34501_36082[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34479[(4)]))){
var statearr_34502_36083 = state_34479;
(statearr_34502_36083[(1)] = cljs.core.first((state_34479[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36084 = state_34479;
state_34479 = G__36084;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_34479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_34479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34503 = f__33619__auto__();
(statearr_34503[(6)] = c__33618__auto__);

return statearr_34503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

return c__33618__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34505 = arguments.length;
switch (G__34505) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36086 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36086(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36087 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36087(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36088 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36088(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36089 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36089(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34508 = (function (ch,cs,meta34509){
this.ch = ch;
this.cs = cs;
this.meta34509 = meta34509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34510,meta34509__$1){
var self__ = this;
var _34510__$1 = this;
return (new cljs.core.async.t_cljs$core$async34508(self__.ch,self__.cs,meta34509__$1));
}));

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34510){
var self__ = this;
var _34510__$1 = this;
return self__.meta34509;
}));

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34508.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34509","meta34509",-65411086,null)], null);
}));

(cljs.core.async.t_cljs$core$async34508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34508");

(cljs.core.async.t_cljs$core$async34508.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34508.
 */
cljs.core.async.__GT_t_cljs$core$async34508 = (function cljs$core$async$__GT_t_cljs$core$async34508(ch,cs,meta34509){
return (new cljs.core.async.t_cljs$core$async34508(ch,cs,meta34509));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34508(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33618__auto___36091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34656){
var state_val_34657 = (state_34656[(1)]);
if((state_val_34657 === (7))){
var inst_34652 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34663_36092 = state_34656__$1;
(statearr_34663_36092[(2)] = inst_34652);

(statearr_34663_36092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (20))){
var inst_34549 = (state_34656[(7)]);
var inst_34566 = cljs.core.first(inst_34549);
var inst_34567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34566,(0),null);
var inst_34568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34566,(1),null);
var state_34656__$1 = (function (){var statearr_34664 = state_34656;
(statearr_34664[(8)] = inst_34567);

return statearr_34664;
})();
if(cljs.core.truth_(inst_34568)){
var statearr_34665_36093 = state_34656__$1;
(statearr_34665_36093[(1)] = (22));

} else {
var statearr_34666_36094 = state_34656__$1;
(statearr_34666_36094[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (27))){
var inst_34603 = (state_34656[(9)]);
var inst_34598 = (state_34656[(10)]);
var inst_34596 = (state_34656[(11)]);
var inst_34517 = (state_34656[(12)]);
var inst_34603__$1 = cljs.core._nth(inst_34596,inst_34598);
var inst_34604 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34603__$1,inst_34517,done);
var state_34656__$1 = (function (){var statearr_34667 = state_34656;
(statearr_34667[(9)] = inst_34603__$1);

return statearr_34667;
})();
if(cljs.core.truth_(inst_34604)){
var statearr_34668_36097 = state_34656__$1;
(statearr_34668_36097[(1)] = (30));

} else {
var statearr_34669_36098 = state_34656__$1;
(statearr_34669_36098[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (1))){
var state_34656__$1 = state_34656;
var statearr_34670_36099 = state_34656__$1;
(statearr_34670_36099[(2)] = null);

(statearr_34670_36099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (24))){
var inst_34549 = (state_34656[(7)]);
var inst_34573 = (state_34656[(2)]);
var inst_34574 = cljs.core.next(inst_34549);
var inst_34526 = inst_34574;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34656__$1 = (function (){var statearr_34671 = state_34656;
(statearr_34671[(13)] = inst_34529);

(statearr_34671[(14)] = inst_34527);

(statearr_34671[(15)] = inst_34526);

(statearr_34671[(16)] = inst_34528);

(statearr_34671[(17)] = inst_34573);

return statearr_34671;
})();
var statearr_34672_36100 = state_34656__$1;
(statearr_34672_36100[(2)] = null);

(statearr_34672_36100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (39))){
var state_34656__$1 = state_34656;
var statearr_34682_36101 = state_34656__$1;
(statearr_34682_36101[(2)] = null);

(statearr_34682_36101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (4))){
var inst_34517 = (state_34656[(12)]);
var inst_34517__$1 = (state_34656[(2)]);
var inst_34518 = (inst_34517__$1 == null);
var state_34656__$1 = (function (){var statearr_34684 = state_34656;
(statearr_34684[(12)] = inst_34517__$1);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34518)){
var statearr_34685_36103 = state_34656__$1;
(statearr_34685_36103[(1)] = (5));

} else {
var statearr_34686_36104 = state_34656__$1;
(statearr_34686_36104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (15))){
var inst_34529 = (state_34656[(13)]);
var inst_34527 = (state_34656[(14)]);
var inst_34526 = (state_34656[(15)]);
var inst_34528 = (state_34656[(16)]);
var inst_34544 = (state_34656[(2)]);
var inst_34545 = (inst_34529 + (1));
var tmp34673 = inst_34527;
var tmp34674 = inst_34526;
var tmp34675 = inst_34528;
var inst_34526__$1 = tmp34674;
var inst_34527__$1 = tmp34673;
var inst_34528__$1 = tmp34675;
var inst_34529__$1 = inst_34545;
var state_34656__$1 = (function (){var statearr_34693 = state_34656;
(statearr_34693[(13)] = inst_34529__$1);

(statearr_34693[(14)] = inst_34527__$1);

(statearr_34693[(18)] = inst_34544);

(statearr_34693[(15)] = inst_34526__$1);

(statearr_34693[(16)] = inst_34528__$1);

return statearr_34693;
})();
var statearr_34694_36109 = state_34656__$1;
(statearr_34694_36109[(2)] = null);

(statearr_34694_36109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (21))){
var inst_34577 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34698_36110 = state_34656__$1;
(statearr_34698_36110[(2)] = inst_34577);

(statearr_34698_36110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (31))){
var inst_34603 = (state_34656[(9)]);
var inst_34607 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34603);
var state_34656__$1 = state_34656;
var statearr_34699_36111 = state_34656__$1;
(statearr_34699_36111[(2)] = inst_34607);

(statearr_34699_36111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (32))){
var inst_34595 = (state_34656[(19)]);
var inst_34598 = (state_34656[(10)]);
var inst_34596 = (state_34656[(11)]);
var inst_34597 = (state_34656[(20)]);
var inst_34609 = (state_34656[(2)]);
var inst_34610 = (inst_34598 + (1));
var tmp34695 = inst_34595;
var tmp34696 = inst_34596;
var tmp34697 = inst_34597;
var inst_34595__$1 = tmp34695;
var inst_34596__$1 = tmp34696;
var inst_34597__$1 = tmp34697;
var inst_34598__$1 = inst_34610;
var state_34656__$1 = (function (){var statearr_34700 = state_34656;
(statearr_34700[(19)] = inst_34595__$1);

(statearr_34700[(10)] = inst_34598__$1);

(statearr_34700[(11)] = inst_34596__$1);

(statearr_34700[(20)] = inst_34597__$1);

(statearr_34700[(21)] = inst_34609);

return statearr_34700;
})();
var statearr_34701_36114 = state_34656__$1;
(statearr_34701_36114[(2)] = null);

(statearr_34701_36114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (40))){
var inst_34625 = (state_34656[(22)]);
var inst_34629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34625);
var state_34656__$1 = state_34656;
var statearr_34702_36115 = state_34656__$1;
(statearr_34702_36115[(2)] = inst_34629);

(statearr_34702_36115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (33))){
var inst_34613 = (state_34656[(23)]);
var inst_34615 = cljs.core.chunked_seq_QMARK_(inst_34613);
var state_34656__$1 = state_34656;
if(inst_34615){
var statearr_34709_36116 = state_34656__$1;
(statearr_34709_36116[(1)] = (36));

} else {
var statearr_34710_36117 = state_34656__$1;
(statearr_34710_36117[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (13))){
var inst_34538 = (state_34656[(24)]);
var inst_34541 = cljs.core.async.close_BANG_(inst_34538);
var state_34656__$1 = state_34656;
var statearr_34711_36118 = state_34656__$1;
(statearr_34711_36118[(2)] = inst_34541);

(statearr_34711_36118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (22))){
var inst_34567 = (state_34656[(8)]);
var inst_34570 = cljs.core.async.close_BANG_(inst_34567);
var state_34656__$1 = state_34656;
var statearr_34712_36119 = state_34656__$1;
(statearr_34712_36119[(2)] = inst_34570);

(statearr_34712_36119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (36))){
var inst_34613 = (state_34656[(23)]);
var inst_34619 = cljs.core.chunk_first(inst_34613);
var inst_34620 = cljs.core.chunk_rest(inst_34613);
var inst_34621 = cljs.core.count(inst_34619);
var inst_34595 = inst_34620;
var inst_34596 = inst_34619;
var inst_34597 = inst_34621;
var inst_34598 = (0);
var state_34656__$1 = (function (){var statearr_34713 = state_34656;
(statearr_34713[(19)] = inst_34595);

(statearr_34713[(10)] = inst_34598);

(statearr_34713[(11)] = inst_34596);

(statearr_34713[(20)] = inst_34597);

return statearr_34713;
})();
var statearr_34714_36120 = state_34656__$1;
(statearr_34714_36120[(2)] = null);

(statearr_34714_36120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (41))){
var inst_34613 = (state_34656[(23)]);
var inst_34631 = (state_34656[(2)]);
var inst_34632 = cljs.core.next(inst_34613);
var inst_34595 = inst_34632;
var inst_34596 = null;
var inst_34597 = (0);
var inst_34598 = (0);
var state_34656__$1 = (function (){var statearr_34715 = state_34656;
(statearr_34715[(19)] = inst_34595);

(statearr_34715[(25)] = inst_34631);

(statearr_34715[(10)] = inst_34598);

(statearr_34715[(11)] = inst_34596);

(statearr_34715[(20)] = inst_34597);

return statearr_34715;
})();
var statearr_34716_36123 = state_34656__$1;
(statearr_34716_36123[(2)] = null);

(statearr_34716_36123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (43))){
var state_34656__$1 = state_34656;
var statearr_34717_36124 = state_34656__$1;
(statearr_34717_36124[(2)] = null);

(statearr_34717_36124[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (29))){
var inst_34640 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34718_36125 = state_34656__$1;
(statearr_34718_36125[(2)] = inst_34640);

(statearr_34718_36125[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (44))){
var inst_34649 = (state_34656[(2)]);
var state_34656__$1 = (function (){var statearr_34719 = state_34656;
(statearr_34719[(26)] = inst_34649);

return statearr_34719;
})();
var statearr_34720_36126 = state_34656__$1;
(statearr_34720_36126[(2)] = null);

(statearr_34720_36126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (6))){
var inst_34587 = (state_34656[(27)]);
var inst_34586 = cljs.core.deref(cs);
var inst_34587__$1 = cljs.core.keys(inst_34586);
var inst_34588 = cljs.core.count(inst_34587__$1);
var inst_34589 = cljs.core.reset_BANG_(dctr,inst_34588);
var inst_34594 = cljs.core.seq(inst_34587__$1);
var inst_34595 = inst_34594;
var inst_34596 = null;
var inst_34597 = (0);
var inst_34598 = (0);
var state_34656__$1 = (function (){var statearr_34721 = state_34656;
(statearr_34721[(19)] = inst_34595);

(statearr_34721[(28)] = inst_34589);

(statearr_34721[(10)] = inst_34598);

(statearr_34721[(11)] = inst_34596);

(statearr_34721[(20)] = inst_34597);

(statearr_34721[(27)] = inst_34587__$1);

return statearr_34721;
})();
var statearr_34722_36127 = state_34656__$1;
(statearr_34722_36127[(2)] = null);

(statearr_34722_36127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (28))){
var inst_34595 = (state_34656[(19)]);
var inst_34613 = (state_34656[(23)]);
var inst_34613__$1 = cljs.core.seq(inst_34595);
var state_34656__$1 = (function (){var statearr_34723 = state_34656;
(statearr_34723[(23)] = inst_34613__$1);

return statearr_34723;
})();
if(inst_34613__$1){
var statearr_34724_36128 = state_34656__$1;
(statearr_34724_36128[(1)] = (33));

} else {
var statearr_34725_36129 = state_34656__$1;
(statearr_34725_36129[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (25))){
var inst_34598 = (state_34656[(10)]);
var inst_34597 = (state_34656[(20)]);
var inst_34600 = (inst_34598 < inst_34597);
var inst_34601 = inst_34600;
var state_34656__$1 = state_34656;
if(cljs.core.truth_(inst_34601)){
var statearr_34726_36130 = state_34656__$1;
(statearr_34726_36130[(1)] = (27));

} else {
var statearr_34727_36131 = state_34656__$1;
(statearr_34727_36131[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (34))){
var state_34656__$1 = state_34656;
var statearr_34731_36132 = state_34656__$1;
(statearr_34731_36132[(2)] = null);

(statearr_34731_36132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (17))){
var state_34656__$1 = state_34656;
var statearr_34733_36133 = state_34656__$1;
(statearr_34733_36133[(2)] = null);

(statearr_34733_36133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (3))){
var inst_34654 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34656__$1,inst_34654);
} else {
if((state_val_34657 === (12))){
var inst_34582 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34740_36134 = state_34656__$1;
(statearr_34740_36134[(2)] = inst_34582);

(statearr_34740_36134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (2))){
var state_34656__$1 = state_34656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34656__$1,(4),ch);
} else {
if((state_val_34657 === (23))){
var state_34656__$1 = state_34656;
var statearr_34741_36135 = state_34656__$1;
(statearr_34741_36135[(2)] = null);

(statearr_34741_36135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (35))){
var inst_34638 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34742_36136 = state_34656__$1;
(statearr_34742_36136[(2)] = inst_34638);

(statearr_34742_36136[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (19))){
var inst_34549 = (state_34656[(7)]);
var inst_34553 = cljs.core.chunk_first(inst_34549);
var inst_34554 = cljs.core.chunk_rest(inst_34549);
var inst_34555 = cljs.core.count(inst_34553);
var inst_34526 = inst_34554;
var inst_34527 = inst_34553;
var inst_34528 = inst_34555;
var inst_34529 = (0);
var state_34656__$1 = (function (){var statearr_34743 = state_34656;
(statearr_34743[(13)] = inst_34529);

(statearr_34743[(14)] = inst_34527);

(statearr_34743[(15)] = inst_34526);

(statearr_34743[(16)] = inst_34528);

return statearr_34743;
})();
var statearr_34744_36137 = state_34656__$1;
(statearr_34744_36137[(2)] = null);

(statearr_34744_36137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (11))){
var inst_34526 = (state_34656[(15)]);
var inst_34549 = (state_34656[(7)]);
var inst_34549__$1 = cljs.core.seq(inst_34526);
var state_34656__$1 = (function (){var statearr_34745 = state_34656;
(statearr_34745[(7)] = inst_34549__$1);

return statearr_34745;
})();
if(inst_34549__$1){
var statearr_34746_36138 = state_34656__$1;
(statearr_34746_36138[(1)] = (16));

} else {
var statearr_34747_36139 = state_34656__$1;
(statearr_34747_36139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (9))){
var inst_34584 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34748_36140 = state_34656__$1;
(statearr_34748_36140[(2)] = inst_34584);

(statearr_34748_36140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (5))){
var inst_34524 = cljs.core.deref(cs);
var inst_34525 = cljs.core.seq(inst_34524);
var inst_34526 = inst_34525;
var inst_34527 = null;
var inst_34528 = (0);
var inst_34529 = (0);
var state_34656__$1 = (function (){var statearr_34752 = state_34656;
(statearr_34752[(13)] = inst_34529);

(statearr_34752[(14)] = inst_34527);

(statearr_34752[(15)] = inst_34526);

(statearr_34752[(16)] = inst_34528);

return statearr_34752;
})();
var statearr_34753_36142 = state_34656__$1;
(statearr_34753_36142[(2)] = null);

(statearr_34753_36142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (14))){
var state_34656__$1 = state_34656;
var statearr_34754_36144 = state_34656__$1;
(statearr_34754_36144[(2)] = null);

(statearr_34754_36144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (45))){
var inst_34646 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34755_36145 = state_34656__$1;
(statearr_34755_36145[(2)] = inst_34646);

(statearr_34755_36145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (26))){
var inst_34587 = (state_34656[(27)]);
var inst_34642 = (state_34656[(2)]);
var inst_34643 = cljs.core.seq(inst_34587);
var state_34656__$1 = (function (){var statearr_34756 = state_34656;
(statearr_34756[(29)] = inst_34642);

return statearr_34756;
})();
if(inst_34643){
var statearr_34757_36146 = state_34656__$1;
(statearr_34757_36146[(1)] = (42));

} else {
var statearr_34758_36147 = state_34656__$1;
(statearr_34758_36147[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (16))){
var inst_34549 = (state_34656[(7)]);
var inst_34551 = cljs.core.chunked_seq_QMARK_(inst_34549);
var state_34656__$1 = state_34656;
if(inst_34551){
var statearr_34759_36148 = state_34656__$1;
(statearr_34759_36148[(1)] = (19));

} else {
var statearr_34760_36149 = state_34656__$1;
(statearr_34760_36149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (38))){
var inst_34635 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34761_36150 = state_34656__$1;
(statearr_34761_36150[(2)] = inst_34635);

(statearr_34761_36150[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (30))){
var state_34656__$1 = state_34656;
var statearr_34762_36151 = state_34656__$1;
(statearr_34762_36151[(2)] = null);

(statearr_34762_36151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (10))){
var inst_34529 = (state_34656[(13)]);
var inst_34527 = (state_34656[(14)]);
var inst_34537 = cljs.core._nth(inst_34527,inst_34529);
var inst_34538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34537,(0),null);
var inst_34539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34537,(1),null);
var state_34656__$1 = (function (){var statearr_34763 = state_34656;
(statearr_34763[(24)] = inst_34538);

return statearr_34763;
})();
if(cljs.core.truth_(inst_34539)){
var statearr_34764_36152 = state_34656__$1;
(statearr_34764_36152[(1)] = (13));

} else {
var statearr_34765_36153 = state_34656__$1;
(statearr_34765_36153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (18))){
var inst_34580 = (state_34656[(2)]);
var state_34656__$1 = state_34656;
var statearr_34766_36154 = state_34656__$1;
(statearr_34766_36154[(2)] = inst_34580);

(statearr_34766_36154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (42))){
var state_34656__$1 = state_34656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34656__$1,(45),dchan);
} else {
if((state_val_34657 === (37))){
var inst_34625 = (state_34656[(22)]);
var inst_34613 = (state_34656[(23)]);
var inst_34517 = (state_34656[(12)]);
var inst_34625__$1 = cljs.core.first(inst_34613);
var inst_34626 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34625__$1,inst_34517,done);
var state_34656__$1 = (function (){var statearr_34767 = state_34656;
(statearr_34767[(22)] = inst_34625__$1);

return statearr_34767;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34768_36155 = state_34656__$1;
(statearr_34768_36155[(1)] = (39));

} else {
var statearr_34769_36156 = state_34656__$1;
(statearr_34769_36156[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34657 === (8))){
var inst_34529 = (state_34656[(13)]);
var inst_34528 = (state_34656[(16)]);
var inst_34531 = (inst_34529 < inst_34528);
var inst_34532 = inst_34531;
var state_34656__$1 = state_34656;
if(cljs.core.truth_(inst_34532)){
var statearr_34770_36157 = state_34656__$1;
(statearr_34770_36157[(1)] = (10));

} else {
var statearr_34771_36158 = state_34656__$1;
(statearr_34771_36158[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33204__auto__ = null;
var cljs$core$async$mult_$_state_machine__33204__auto____0 = (function (){
var statearr_34772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34772[(0)] = cljs$core$async$mult_$_state_machine__33204__auto__);

(statearr_34772[(1)] = (1));

return statearr_34772;
});
var cljs$core$async$mult_$_state_machine__33204__auto____1 = (function (state_34656){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34656);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34777){var ex__33207__auto__ = e34777;
var statearr_34778_36160 = state_34656;
(statearr_34778_36160[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34656[(4)]))){
var statearr_34779_36162 = state_34656;
(statearr_34779_36162[(1)] = cljs.core.first((state_34656[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36163 = state_34656;
state_34656 = G__36163;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33204__auto__ = function(state_34656){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33204__auto____1.call(this,state_34656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33204__auto____0;
cljs$core$async$mult_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33204__auto____1;
return cljs$core$async$mult_$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34780 = f__33619__auto__();
(statearr_34780[(6)] = c__33618__auto___36091);

return statearr_34780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34788 = arguments.length;
switch (G__34788) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36169 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36169(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36174 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36174(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36176 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36176(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36177 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36177(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36178 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36178(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36179 = arguments.length;
var i__5770__auto___36180 = (0);
while(true){
if((i__5770__auto___36180 < len__5769__auto___36179)){
args__5775__auto__.push((arguments[i__5770__auto___36180]));

var G__36181 = (i__5770__auto___36180 + (1));
i__5770__auto___36180 = G__36181;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34807){
var map__34808 = p__34807;
var map__34808__$1 = cljs.core.__destructure_map(map__34808);
var opts = map__34808__$1;
var statearr_34809_36186 = state;
(statearr_34809_36186[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34811_36187 = state;
(statearr_34811_36187[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34813_36188 = state;
(statearr_34813_36188[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34798){
var G__34799 = cljs.core.first(seq34798);
var seq34798__$1 = cljs.core.next(seq34798);
var G__34800 = cljs.core.first(seq34798__$1);
var seq34798__$2 = cljs.core.next(seq34798__$1);
var G__34801 = cljs.core.first(seq34798__$2);
var seq34798__$3 = cljs.core.next(seq34798__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34799,G__34800,G__34801,seq34798__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34814 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34815){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34815 = meta34815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34816,meta34815__$1){
var self__ = this;
var _34816__$1 = this;
return (new cljs.core.async.t_cljs$core$async34814(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34815__$1));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34816){
var self__ = this;
var _34816__$1 = this;
return self__.meta34815;
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34814.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34815","meta34815",817768174,null)], null);
}));

(cljs.core.async.t_cljs$core$async34814.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34814");

(cljs.core.async.t_cljs$core$async34814.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34814");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34814.
 */
cljs.core.async.__GT_t_cljs$core$async34814 = (function cljs$core$async$__GT_t_cljs$core$async34814(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34815){
return (new cljs.core.async.t_cljs$core$async34814(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34815));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34814(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33618__auto___36191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_34897){
var state_val_34898 = (state_34897[(1)]);
if((state_val_34898 === (7))){
var inst_34853 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
if(cljs.core.truth_(inst_34853)){
var statearr_34899_36192 = state_34897__$1;
(statearr_34899_36192[(1)] = (8));

} else {
var statearr_34900_36193 = state_34897__$1;
(statearr_34900_36193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (20))){
var inst_34846 = (state_34897[(7)]);
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34897__$1,(23),out,inst_34846);
} else {
if((state_val_34898 === (1))){
var inst_34829 = calc_state();
var inst_34830 = cljs.core.__destructure_map(inst_34829);
var inst_34831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34834 = inst_34829;
var state_34897__$1 = (function (){var statearr_34901 = state_34897;
(statearr_34901[(8)] = inst_34831);

(statearr_34901[(9)] = inst_34833);

(statearr_34901[(10)] = inst_34834);

(statearr_34901[(11)] = inst_34832);

return statearr_34901;
})();
var statearr_34902_36194 = state_34897__$1;
(statearr_34902_36194[(2)] = null);

(statearr_34902_36194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (24))){
var inst_34837 = (state_34897[(12)]);
var inst_34834 = inst_34837;
var state_34897__$1 = (function (){var statearr_34903 = state_34897;
(statearr_34903[(10)] = inst_34834);

return statearr_34903;
})();
var statearr_34904_36195 = state_34897__$1;
(statearr_34904_36195[(2)] = null);

(statearr_34904_36195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (4))){
var inst_34848 = (state_34897[(13)]);
var inst_34846 = (state_34897[(7)]);
var inst_34845 = (state_34897[(2)]);
var inst_34846__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34845,(0),null);
var inst_34847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34845,(1),null);
var inst_34848__$1 = (inst_34846__$1 == null);
var state_34897__$1 = (function (){var statearr_34905 = state_34897;
(statearr_34905[(13)] = inst_34848__$1);

(statearr_34905[(7)] = inst_34846__$1);

(statearr_34905[(14)] = inst_34847);

return statearr_34905;
})();
if(cljs.core.truth_(inst_34848__$1)){
var statearr_34906_36196 = state_34897__$1;
(statearr_34906_36196[(1)] = (5));

} else {
var statearr_34907_36197 = state_34897__$1;
(statearr_34907_36197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (15))){
var inst_34868 = (state_34897[(15)]);
var inst_34838 = (state_34897[(16)]);
var inst_34868__$1 = cljs.core.empty_QMARK_(inst_34838);
var state_34897__$1 = (function (){var statearr_34909 = state_34897;
(statearr_34909[(15)] = inst_34868__$1);

return statearr_34909;
})();
if(inst_34868__$1){
var statearr_34910_36199 = state_34897__$1;
(statearr_34910_36199[(1)] = (17));

} else {
var statearr_34911_36200 = state_34897__$1;
(statearr_34911_36200[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (21))){
var inst_34837 = (state_34897[(12)]);
var inst_34834 = inst_34837;
var state_34897__$1 = (function (){var statearr_34913 = state_34897;
(statearr_34913[(10)] = inst_34834);

return statearr_34913;
})();
var statearr_34914_36201 = state_34897__$1;
(statearr_34914_36201[(2)] = null);

(statearr_34914_36201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (13))){
var inst_34860 = (state_34897[(2)]);
var inst_34861 = calc_state();
var inst_34834 = inst_34861;
var state_34897__$1 = (function (){var statearr_34915 = state_34897;
(statearr_34915[(10)] = inst_34834);

(statearr_34915[(17)] = inst_34860);

return statearr_34915;
})();
var statearr_34916_36202 = state_34897__$1;
(statearr_34916_36202[(2)] = null);

(statearr_34916_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (22))){
var inst_34891 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34917_36203 = state_34897__$1;
(statearr_34917_36203[(2)] = inst_34891);

(statearr_34917_36203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (6))){
var inst_34847 = (state_34897[(14)]);
var inst_34851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34847,change);
var state_34897__$1 = state_34897;
var statearr_34918_36204 = state_34897__$1;
(statearr_34918_36204[(2)] = inst_34851);

(statearr_34918_36204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (25))){
var state_34897__$1 = state_34897;
var statearr_34919_36205 = state_34897__$1;
(statearr_34919_36205[(2)] = null);

(statearr_34919_36205[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (17))){
var inst_34839 = (state_34897[(18)]);
var inst_34847 = (state_34897[(14)]);
var inst_34873 = (inst_34839.cljs$core$IFn$_invoke$arity$1 ? inst_34839.cljs$core$IFn$_invoke$arity$1(inst_34847) : inst_34839.call(null,inst_34847));
var inst_34874 = cljs.core.not(inst_34873);
var state_34897__$1 = state_34897;
var statearr_34920_36206 = state_34897__$1;
(statearr_34920_36206[(2)] = inst_34874);

(statearr_34920_36206[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (3))){
var inst_34895 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34897__$1,inst_34895);
} else {
if((state_val_34898 === (12))){
var state_34897__$1 = state_34897;
var statearr_34921_36207 = state_34897__$1;
(statearr_34921_36207[(2)] = null);

(statearr_34921_36207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (2))){
var inst_34837 = (state_34897[(12)]);
var inst_34834 = (state_34897[(10)]);
var inst_34837__$1 = cljs.core.__destructure_map(inst_34834);
var inst_34838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34837__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34837__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34837__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34897__$1 = (function (){var statearr_34925 = state_34897;
(statearr_34925[(12)] = inst_34837__$1);

(statearr_34925[(16)] = inst_34838);

(statearr_34925[(18)] = inst_34839);

return statearr_34925;
})();
return cljs.core.async.ioc_alts_BANG_(state_34897__$1,(4),inst_34840);
} else {
if((state_val_34898 === (23))){
var inst_34882 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
if(cljs.core.truth_(inst_34882)){
var statearr_34926_36208 = state_34897__$1;
(statearr_34926_36208[(1)] = (24));

} else {
var statearr_34927_36209 = state_34897__$1;
(statearr_34927_36209[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (19))){
var inst_34877 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34928_36210 = state_34897__$1;
(statearr_34928_36210[(2)] = inst_34877);

(statearr_34928_36210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (11))){
var inst_34847 = (state_34897[(14)]);
var inst_34857 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34847);
var state_34897__$1 = state_34897;
var statearr_34929_36215 = state_34897__$1;
(statearr_34929_36215[(2)] = inst_34857);

(statearr_34929_36215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (9))){
var inst_34864 = (state_34897[(19)]);
var inst_34838 = (state_34897[(16)]);
var inst_34847 = (state_34897[(14)]);
var inst_34864__$1 = (inst_34838.cljs$core$IFn$_invoke$arity$1 ? inst_34838.cljs$core$IFn$_invoke$arity$1(inst_34847) : inst_34838.call(null,inst_34847));
var state_34897__$1 = (function (){var statearr_34930 = state_34897;
(statearr_34930[(19)] = inst_34864__$1);

return statearr_34930;
})();
if(cljs.core.truth_(inst_34864__$1)){
var statearr_34931_36216 = state_34897__$1;
(statearr_34931_36216[(1)] = (14));

} else {
var statearr_34932_36217 = state_34897__$1;
(statearr_34932_36217[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (5))){
var inst_34848 = (state_34897[(13)]);
var state_34897__$1 = state_34897;
var statearr_34933_36221 = state_34897__$1;
(statearr_34933_36221[(2)] = inst_34848);

(statearr_34933_36221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (14))){
var inst_34864 = (state_34897[(19)]);
var state_34897__$1 = state_34897;
var statearr_34934_36222 = state_34897__$1;
(statearr_34934_36222[(2)] = inst_34864);

(statearr_34934_36222[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (26))){
var inst_34887 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34935_36223 = state_34897__$1;
(statearr_34935_36223[(2)] = inst_34887);

(statearr_34935_36223[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (16))){
var inst_34879 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
if(cljs.core.truth_(inst_34879)){
var statearr_34936_36224 = state_34897__$1;
(statearr_34936_36224[(1)] = (20));

} else {
var statearr_34937_36225 = state_34897__$1;
(statearr_34937_36225[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (10))){
var inst_34893 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
var statearr_34938_36226 = state_34897__$1;
(statearr_34938_36226[(2)] = inst_34893);

(statearr_34938_36226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (18))){
var inst_34868 = (state_34897[(15)]);
var state_34897__$1 = state_34897;
var statearr_34939_36227 = state_34897__$1;
(statearr_34939_36227[(2)] = inst_34868);

(statearr_34939_36227[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (8))){
var inst_34846 = (state_34897[(7)]);
var inst_34855 = (inst_34846 == null);
var state_34897__$1 = state_34897;
if(cljs.core.truth_(inst_34855)){
var statearr_34940_36228 = state_34897__$1;
(statearr_34940_36228[(1)] = (11));

} else {
var statearr_34941_36229 = state_34897__$1;
(statearr_34941_36229[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33204__auto__ = null;
var cljs$core$async$mix_$_state_machine__33204__auto____0 = (function (){
var statearr_34942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34942[(0)] = cljs$core$async$mix_$_state_machine__33204__auto__);

(statearr_34942[(1)] = (1));

return statearr_34942;
});
var cljs$core$async$mix_$_state_machine__33204__auto____1 = (function (state_34897){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_34897);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e34943){var ex__33207__auto__ = e34943;
var statearr_34944_36233 = state_34897;
(statearr_34944_36233[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_34897[(4)]))){
var statearr_34945_36234 = state_34897;
(statearr_34945_36234[(1)] = cljs.core.first((state_34897[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36235 = state_34897;
state_34897 = G__36235;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33204__auto__ = function(state_34897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33204__auto____1.call(this,state_34897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33204__auto____0;
cljs$core$async$mix_$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33204__auto____1;
return cljs$core$async$mix_$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_34946 = f__33619__auto__();
(statearr_34946[(6)] = c__33618__auto___36191);

return statearr_34946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36266 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36266(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36268 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36268(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36278 = (function() {
var G__36279 = null;
var G__36279__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36279__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36279 = function(p,v){
switch(arguments.length){
case 1:
return G__36279__1.call(this,p);
case 2:
return G__36279__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36279.cljs$core$IFn$_invoke$arity$1 = G__36279__1;
G__36279.cljs$core$IFn$_invoke$arity$2 = G__36279__2;
return G__36279;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34952 = arguments.length;
switch (G__34952) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36278(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36278(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34961 = meta34961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34962,meta34961__$1){
var self__ = this;
var _34962__$1 = this;
return (new cljs.core.async.t_cljs$core$async34960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34961__$1));
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34962){
var self__ = this;
var _34962__$1 = this;
return self__.meta34961;
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34961","meta34961",435776540,null)], null);
}));

(cljs.core.async.t_cljs$core$async34960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34960");

(cljs.core.async.t_cljs$core$async34960.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34960.
 */
cljs.core.async.__GT_t_cljs$core$async34960 = (function cljs$core$async$__GT_t_cljs$core$async34960(ch,topic_fn,buf_fn,mults,ensure_mult,meta34961){
return (new cljs.core.async.t_cljs$core$async34960(ch,topic_fn,buf_fn,mults,ensure_mult,meta34961));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34959 = arguments.length;
switch (G__34959) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34957_SHARP_){
if(cljs.core.truth_((p1__34957_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34957_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34957_SHARP_.call(null,topic)))){
return p1__34957_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34957_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33618__auto___36293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35080){
var state_val_35081 = (state_35080[(1)]);
if((state_val_35081 === (7))){
var inst_35076 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35082_36294 = state_35080__$1;
(statearr_35082_36294[(2)] = inst_35076);

(statearr_35082_36294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (20))){
var state_35080__$1 = state_35080;
var statearr_35083_36295 = state_35080__$1;
(statearr_35083_36295[(2)] = null);

(statearr_35083_36295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (1))){
var state_35080__$1 = state_35080;
var statearr_35084_36296 = state_35080__$1;
(statearr_35084_36296[(2)] = null);

(statearr_35084_36296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (24))){
var inst_35059 = (state_35080[(7)]);
var inst_35068 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35059);
var state_35080__$1 = state_35080;
var statearr_35085_36297 = state_35080__$1;
(statearr_35085_36297[(2)] = inst_35068);

(statearr_35085_36297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (4))){
var inst_35005 = (state_35080[(8)]);
var inst_35005__$1 = (state_35080[(2)]);
var inst_35006 = (inst_35005__$1 == null);
var state_35080__$1 = (function (){var statearr_35086 = state_35080;
(statearr_35086[(8)] = inst_35005__$1);

return statearr_35086;
})();
if(cljs.core.truth_(inst_35006)){
var statearr_35087_36298 = state_35080__$1;
(statearr_35087_36298[(1)] = (5));

} else {
var statearr_35088_36299 = state_35080__$1;
(statearr_35088_36299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (15))){
var inst_35053 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35089_36301 = state_35080__$1;
(statearr_35089_36301[(2)] = inst_35053);

(statearr_35089_36301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (21))){
var inst_35073 = (state_35080[(2)]);
var state_35080__$1 = (function (){var statearr_35090 = state_35080;
(statearr_35090[(9)] = inst_35073);

return statearr_35090;
})();
var statearr_35091_36303 = state_35080__$1;
(statearr_35091_36303[(2)] = null);

(statearr_35091_36303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (13))){
var inst_35032 = (state_35080[(10)]);
var inst_35037 = cljs.core.chunked_seq_QMARK_(inst_35032);
var state_35080__$1 = state_35080;
if(inst_35037){
var statearr_35092_36308 = state_35080__$1;
(statearr_35092_36308[(1)] = (16));

} else {
var statearr_35093_36309 = state_35080__$1;
(statearr_35093_36309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (22))){
var inst_35065 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
if(cljs.core.truth_(inst_35065)){
var statearr_35094_36310 = state_35080__$1;
(statearr_35094_36310[(1)] = (23));

} else {
var statearr_35095_36312 = state_35080__$1;
(statearr_35095_36312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (6))){
var inst_35061 = (state_35080[(11)]);
var inst_35005 = (state_35080[(8)]);
var inst_35059 = (state_35080[(7)]);
var inst_35059__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35005) : topic_fn.call(null,inst_35005));
var inst_35060 = cljs.core.deref(mults);
var inst_35061__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35060,inst_35059__$1);
var state_35080__$1 = (function (){var statearr_35096 = state_35080;
(statearr_35096[(11)] = inst_35061__$1);

(statearr_35096[(7)] = inst_35059__$1);

return statearr_35096;
})();
if(cljs.core.truth_(inst_35061__$1)){
var statearr_35097_36313 = state_35080__$1;
(statearr_35097_36313[(1)] = (19));

} else {
var statearr_35098_36314 = state_35080__$1;
(statearr_35098_36314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (25))){
var inst_35070 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35099_36315 = state_35080__$1;
(statearr_35099_36315[(2)] = inst_35070);

(statearr_35099_36315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (17))){
var inst_35032 = (state_35080[(10)]);
var inst_35044 = cljs.core.first(inst_35032);
var inst_35045 = cljs.core.async.muxch_STAR_(inst_35044);
var inst_35046 = cljs.core.async.close_BANG_(inst_35045);
var inst_35047 = cljs.core.next(inst_35032);
var inst_35016 = inst_35047;
var inst_35017 = null;
var inst_35018 = (0);
var inst_35019 = (0);
var state_35080__$1 = (function (){var statearr_35100 = state_35080;
(statearr_35100[(12)] = inst_35018);

(statearr_35100[(13)] = inst_35017);

(statearr_35100[(14)] = inst_35016);

(statearr_35100[(15)] = inst_35046);

(statearr_35100[(16)] = inst_35019);

return statearr_35100;
})();
var statearr_35101_36320 = state_35080__$1;
(statearr_35101_36320[(2)] = null);

(statearr_35101_36320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (3))){
var inst_35078 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35080__$1,inst_35078);
} else {
if((state_val_35081 === (12))){
var inst_35055 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35102_36321 = state_35080__$1;
(statearr_35102_36321[(2)] = inst_35055);

(statearr_35102_36321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (2))){
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35080__$1,(4),ch);
} else {
if((state_val_35081 === (23))){
var state_35080__$1 = state_35080;
var statearr_35103_36322 = state_35080__$1;
(statearr_35103_36322[(2)] = null);

(statearr_35103_36322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (19))){
var inst_35061 = (state_35080[(11)]);
var inst_35005 = (state_35080[(8)]);
var inst_35063 = cljs.core.async.muxch_STAR_(inst_35061);
var state_35080__$1 = state_35080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35080__$1,(22),inst_35063,inst_35005);
} else {
if((state_val_35081 === (11))){
var inst_35032 = (state_35080[(10)]);
var inst_35016 = (state_35080[(14)]);
var inst_35032__$1 = cljs.core.seq(inst_35016);
var state_35080__$1 = (function (){var statearr_35104 = state_35080;
(statearr_35104[(10)] = inst_35032__$1);

return statearr_35104;
})();
if(inst_35032__$1){
var statearr_35105_36324 = state_35080__$1;
(statearr_35105_36324[(1)] = (13));

} else {
var statearr_35106_36325 = state_35080__$1;
(statearr_35106_36325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (9))){
var inst_35057 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35107_36327 = state_35080__$1;
(statearr_35107_36327[(2)] = inst_35057);

(statearr_35107_36327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (5))){
var inst_35012 = cljs.core.deref(mults);
var inst_35013 = cljs.core.vals(inst_35012);
var inst_35014 = cljs.core.seq(inst_35013);
var inst_35016 = inst_35014;
var inst_35017 = null;
var inst_35018 = (0);
var inst_35019 = (0);
var state_35080__$1 = (function (){var statearr_35108 = state_35080;
(statearr_35108[(12)] = inst_35018);

(statearr_35108[(13)] = inst_35017);

(statearr_35108[(14)] = inst_35016);

(statearr_35108[(16)] = inst_35019);

return statearr_35108;
})();
var statearr_35109_36328 = state_35080__$1;
(statearr_35109_36328[(2)] = null);

(statearr_35109_36328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (14))){
var state_35080__$1 = state_35080;
var statearr_35115_36329 = state_35080__$1;
(statearr_35115_36329[(2)] = null);

(statearr_35115_36329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (16))){
var inst_35032 = (state_35080[(10)]);
var inst_35039 = cljs.core.chunk_first(inst_35032);
var inst_35040 = cljs.core.chunk_rest(inst_35032);
var inst_35041 = cljs.core.count(inst_35039);
var inst_35016 = inst_35040;
var inst_35017 = inst_35039;
var inst_35018 = inst_35041;
var inst_35019 = (0);
var state_35080__$1 = (function (){var statearr_35122 = state_35080;
(statearr_35122[(12)] = inst_35018);

(statearr_35122[(13)] = inst_35017);

(statearr_35122[(14)] = inst_35016);

(statearr_35122[(16)] = inst_35019);

return statearr_35122;
})();
var statearr_35123_36330 = state_35080__$1;
(statearr_35123_36330[(2)] = null);

(statearr_35123_36330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (10))){
var inst_35018 = (state_35080[(12)]);
var inst_35017 = (state_35080[(13)]);
var inst_35016 = (state_35080[(14)]);
var inst_35019 = (state_35080[(16)]);
var inst_35025 = cljs.core._nth(inst_35017,inst_35019);
var inst_35026 = cljs.core.async.muxch_STAR_(inst_35025);
var inst_35027 = cljs.core.async.close_BANG_(inst_35026);
var inst_35028 = (inst_35019 + (1));
var tmp35112 = inst_35018;
var tmp35113 = inst_35017;
var tmp35114 = inst_35016;
var inst_35016__$1 = tmp35114;
var inst_35017__$1 = tmp35113;
var inst_35018__$1 = tmp35112;
var inst_35019__$1 = inst_35028;
var state_35080__$1 = (function (){var statearr_35124 = state_35080;
(statearr_35124[(12)] = inst_35018__$1);

(statearr_35124[(17)] = inst_35027);

(statearr_35124[(13)] = inst_35017__$1);

(statearr_35124[(14)] = inst_35016__$1);

(statearr_35124[(16)] = inst_35019__$1);

return statearr_35124;
})();
var statearr_35125_36331 = state_35080__$1;
(statearr_35125_36331[(2)] = null);

(statearr_35125_36331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (18))){
var inst_35050 = (state_35080[(2)]);
var state_35080__$1 = state_35080;
var statearr_35126_36332 = state_35080__$1;
(statearr_35126_36332[(2)] = inst_35050);

(statearr_35126_36332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35081 === (8))){
var inst_35018 = (state_35080[(12)]);
var inst_35019 = (state_35080[(16)]);
var inst_35022 = (inst_35019 < inst_35018);
var inst_35023 = inst_35022;
var state_35080__$1 = state_35080;
if(cljs.core.truth_(inst_35023)){
var statearr_35130_36333 = state_35080__$1;
(statearr_35130_36333[(1)] = (10));

} else {
var statearr_35131_36334 = state_35080__$1;
(statearr_35131_36334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35132[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35132[(1)] = (1));

return statearr_35132;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35080){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35080);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35133){var ex__33207__auto__ = e35133;
var statearr_35134_36335 = state_35080;
(statearr_35134_36335[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35080[(4)]))){
var statearr_35135_36336 = state_35080;
(statearr_35135_36336[(1)] = cljs.core.first((state_35080[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36337 = state_35080;
state_35080 = G__36337;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35136 = f__33619__auto__();
(statearr_35136[(6)] = c__33618__auto___36293);

return statearr_35136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35138 = arguments.length;
switch (G__35138) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35141 = arguments.length;
switch (G__35141) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35146 = arguments.length;
switch (G__35146) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33618__auto___36358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35193){
var state_val_35194 = (state_35193[(1)]);
if((state_val_35194 === (7))){
var state_35193__$1 = state_35193;
var statearr_35195_36366 = state_35193__$1;
(statearr_35195_36366[(2)] = null);

(statearr_35195_36366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (1))){
var state_35193__$1 = state_35193;
var statearr_35196_36367 = state_35193__$1;
(statearr_35196_36367[(2)] = null);

(statearr_35196_36367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (4))){
var inst_35151 = (state_35193[(7)]);
var inst_35150 = (state_35193[(8)]);
var inst_35153 = (inst_35151 < inst_35150);
var state_35193__$1 = state_35193;
if(cljs.core.truth_(inst_35153)){
var statearr_35197_36368 = state_35193__$1;
(statearr_35197_36368[(1)] = (6));

} else {
var statearr_35198_36369 = state_35193__$1;
(statearr_35198_36369[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (15))){
var inst_35179 = (state_35193[(9)]);
var inst_35184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35179);
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35193__$1,(17),out,inst_35184);
} else {
if((state_val_35194 === (13))){
var inst_35179 = (state_35193[(9)]);
var inst_35179__$1 = (state_35193[(2)]);
var inst_35180 = cljs.core.some(cljs.core.nil_QMARK_,inst_35179__$1);
var state_35193__$1 = (function (){var statearr_35199 = state_35193;
(statearr_35199[(9)] = inst_35179__$1);

return statearr_35199;
})();
if(cljs.core.truth_(inst_35180)){
var statearr_35200_36377 = state_35193__$1;
(statearr_35200_36377[(1)] = (14));

} else {
var statearr_35204_36385 = state_35193__$1;
(statearr_35204_36385[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (6))){
var state_35193__$1 = state_35193;
var statearr_35205_36395 = state_35193__$1;
(statearr_35205_36395[(2)] = null);

(statearr_35205_36395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (17))){
var inst_35186 = (state_35193[(2)]);
var state_35193__$1 = (function (){var statearr_35207 = state_35193;
(statearr_35207[(10)] = inst_35186);

return statearr_35207;
})();
var statearr_35208_36411 = state_35193__$1;
(statearr_35208_36411[(2)] = null);

(statearr_35208_36411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (3))){
var inst_35191 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35193__$1,inst_35191);
} else {
if((state_val_35194 === (12))){
var _ = (function (){var statearr_35212 = state_35193;
(statearr_35212[(4)] = cljs.core.rest((state_35193[(4)])));

return statearr_35212;
})();
var state_35193__$1 = state_35193;
var ex35206 = (state_35193__$1[(2)]);
var statearr_35213_36412 = state_35193__$1;
(statearr_35213_36412[(5)] = ex35206);


if((ex35206 instanceof Object)){
var statearr_35215_36413 = state_35193__$1;
(statearr_35215_36413[(1)] = (11));

(statearr_35215_36413[(5)] = null);

} else {
throw ex35206;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (2))){
var inst_35149 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35150 = cnt;
var inst_35151 = (0);
var state_35193__$1 = (function (){var statearr_35221 = state_35193;
(statearr_35221[(11)] = inst_35149);

(statearr_35221[(7)] = inst_35151);

(statearr_35221[(8)] = inst_35150);

return statearr_35221;
})();
var statearr_35223_36421 = state_35193__$1;
(statearr_35223_36421[(2)] = null);

(statearr_35223_36421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (11))){
var inst_35158 = (state_35193[(2)]);
var inst_35159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35193__$1 = (function (){var statearr_35227 = state_35193;
(statearr_35227[(12)] = inst_35158);

return statearr_35227;
})();
var statearr_35228_36422 = state_35193__$1;
(statearr_35228_36422[(2)] = inst_35159);

(statearr_35228_36422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (9))){
var inst_35151 = (state_35193[(7)]);
var _ = (function (){var statearr_35229 = state_35193;
(statearr_35229[(4)] = cljs.core.cons((12),(state_35193[(4)])));

return statearr_35229;
})();
var inst_35165 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35151) : chs__$1.call(null,inst_35151));
var inst_35166 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35151) : done.call(null,inst_35151));
var inst_35167 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35165,inst_35166);
var ___$1 = (function (){var statearr_35230 = state_35193;
(statearr_35230[(4)] = cljs.core.rest((state_35193[(4)])));

return statearr_35230;
})();
var state_35193__$1 = state_35193;
var statearr_35231_36437 = state_35193__$1;
(statearr_35231_36437[(2)] = inst_35167);

(statearr_35231_36437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (5))){
var inst_35177 = (state_35193[(2)]);
var state_35193__$1 = (function (){var statearr_35232 = state_35193;
(statearr_35232[(13)] = inst_35177);

return statearr_35232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35193__$1,(13),dchan);
} else {
if((state_val_35194 === (14))){
var inst_35182 = cljs.core.async.close_BANG_(out);
var state_35193__$1 = state_35193;
var statearr_35240_36446 = state_35193__$1;
(statearr_35240_36446[(2)] = inst_35182);

(statearr_35240_36446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (16))){
var inst_35189 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
var statearr_35244_36447 = state_35193__$1;
(statearr_35244_36447[(2)] = inst_35189);

(statearr_35244_36447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (10))){
var inst_35151 = (state_35193[(7)]);
var inst_35170 = (state_35193[(2)]);
var inst_35171 = (inst_35151 + (1));
var inst_35151__$1 = inst_35171;
var state_35193__$1 = (function (){var statearr_35245 = state_35193;
(statearr_35245[(7)] = inst_35151__$1);

(statearr_35245[(14)] = inst_35170);

return statearr_35245;
})();
var statearr_35246_36452 = state_35193__$1;
(statearr_35246_36452[(2)] = null);

(statearr_35246_36452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35194 === (8))){
var inst_35175 = (state_35193[(2)]);
var state_35193__$1 = state_35193;
var statearr_35247_36453 = state_35193__$1;
(statearr_35247_36453[(2)] = inst_35175);

(statearr_35247_36453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35248[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35248[(1)] = (1));

return statearr_35248;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35193){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35193);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35249){var ex__33207__auto__ = e35249;
var statearr_35250_36456 = state_35193;
(statearr_35250_36456[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35193[(4)]))){
var statearr_35251_36457 = state_35193;
(statearr_35251_36457[(1)] = cljs.core.first((state_35193[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36458 = state_35193;
state_35193 = G__36458;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35255 = f__33619__auto__();
(statearr_35255[(6)] = c__33618__auto___36358);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35272 = arguments.length;
switch (G__35272) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35306){
var state_val_35307 = (state_35306[(1)]);
if((state_val_35307 === (7))){
var inst_35286 = (state_35306[(7)]);
var inst_35285 = (state_35306[(8)]);
var inst_35285__$1 = (state_35306[(2)]);
var inst_35286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35285__$1,(0),null);
var inst_35287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35285__$1,(1),null);
var inst_35288 = (inst_35286__$1 == null);
var state_35306__$1 = (function (){var statearr_35308 = state_35306;
(statearr_35308[(7)] = inst_35286__$1);

(statearr_35308[(8)] = inst_35285__$1);

(statearr_35308[(9)] = inst_35287);

return statearr_35308;
})();
if(cljs.core.truth_(inst_35288)){
var statearr_35309_36467 = state_35306__$1;
(statearr_35309_36467[(1)] = (8));

} else {
var statearr_35310_36468 = state_35306__$1;
(statearr_35310_36468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (1))){
var inst_35275 = cljs.core.vec(chs);
var inst_35276 = inst_35275;
var state_35306__$1 = (function (){var statearr_35311 = state_35306;
(statearr_35311[(10)] = inst_35276);

return statearr_35311;
})();
var statearr_35312_36469 = state_35306__$1;
(statearr_35312_36469[(2)] = null);

(statearr_35312_36469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (4))){
var inst_35276 = (state_35306[(10)]);
var state_35306__$1 = state_35306;
return cljs.core.async.ioc_alts_BANG_(state_35306__$1,(7),inst_35276);
} else {
if((state_val_35307 === (6))){
var inst_35302 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35313_36470 = state_35306__$1;
(statearr_35313_36470[(2)] = inst_35302);

(statearr_35313_36470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (3))){
var inst_35304 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35306__$1,inst_35304);
} else {
if((state_val_35307 === (2))){
var inst_35276 = (state_35306[(10)]);
var inst_35278 = cljs.core.count(inst_35276);
var inst_35279 = (inst_35278 > (0));
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35279)){
var statearr_35315_36472 = state_35306__$1;
(statearr_35315_36472[(1)] = (4));

} else {
var statearr_35316_36473 = state_35306__$1;
(statearr_35316_36473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (11))){
var inst_35276 = (state_35306[(10)]);
var inst_35295 = (state_35306[(2)]);
var tmp35314 = inst_35276;
var inst_35276__$1 = tmp35314;
var state_35306__$1 = (function (){var statearr_35317 = state_35306;
(statearr_35317[(11)] = inst_35295);

(statearr_35317[(10)] = inst_35276__$1);

return statearr_35317;
})();
var statearr_35318_36474 = state_35306__$1;
(statearr_35318_36474[(2)] = null);

(statearr_35318_36474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (9))){
var inst_35286 = (state_35306[(7)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35306__$1,(11),out,inst_35286);
} else {
if((state_val_35307 === (5))){
var inst_35300 = cljs.core.async.close_BANG_(out);
var state_35306__$1 = state_35306;
var statearr_35321_36475 = state_35306__$1;
(statearr_35321_36475[(2)] = inst_35300);

(statearr_35321_36475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (10))){
var inst_35298 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35322_36476 = state_35306__$1;
(statearr_35322_36476[(2)] = inst_35298);

(statearr_35322_36476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (8))){
var inst_35286 = (state_35306[(7)]);
var inst_35285 = (state_35306[(8)]);
var inst_35287 = (state_35306[(9)]);
var inst_35276 = (state_35306[(10)]);
var inst_35290 = (function (){var cs = inst_35276;
var vec__35281 = inst_35285;
var v = inst_35286;
var c = inst_35287;
return (function (p1__35266_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35266_SHARP_);
});
})();
var inst_35291 = cljs.core.filterv(inst_35290,inst_35276);
var inst_35276__$1 = inst_35291;
var state_35306__$1 = (function (){var statearr_35323 = state_35306;
(statearr_35323[(10)] = inst_35276__$1);

return statearr_35323;
})();
var statearr_35324_36477 = state_35306__$1;
(statearr_35324_36477[(2)] = null);

(statearr_35324_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35327[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35327[(1)] = (1));

return statearr_35327;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35306){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35306);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35337){var ex__33207__auto__ = e35337;
var statearr_35338_36480 = state_35306;
(statearr_35338_36480[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35306[(4)]))){
var statearr_35339_36481 = state_35306;
(statearr_35339_36481[(1)] = cljs.core.first((state_35306[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36482 = state_35306;
state_35306 = G__36482;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35340 = f__33619__auto__();
(statearr_35340[(6)] = c__33618__auto___36462);

return statearr_35340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35343 = arguments.length;
switch (G__35343) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35368){
var state_val_35369 = (state_35368[(1)]);
if((state_val_35369 === (7))){
var inst_35350 = (state_35368[(7)]);
var inst_35350__$1 = (state_35368[(2)]);
var inst_35351 = (inst_35350__$1 == null);
var inst_35352 = cljs.core.not(inst_35351);
var state_35368__$1 = (function (){var statearr_35370 = state_35368;
(statearr_35370[(7)] = inst_35350__$1);

return statearr_35370;
})();
if(inst_35352){
var statearr_35371_36488 = state_35368__$1;
(statearr_35371_36488[(1)] = (8));

} else {
var statearr_35372_36490 = state_35368__$1;
(statearr_35372_36490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (1))){
var inst_35345 = (0);
var state_35368__$1 = (function (){var statearr_35373 = state_35368;
(statearr_35373[(8)] = inst_35345);

return statearr_35373;
})();
var statearr_35374_36491 = state_35368__$1;
(statearr_35374_36491[(2)] = null);

(statearr_35374_36491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (4))){
var state_35368__$1 = state_35368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35368__$1,(7),ch);
} else {
if((state_val_35369 === (6))){
var inst_35363 = (state_35368[(2)]);
var state_35368__$1 = state_35368;
var statearr_35375_36493 = state_35368__$1;
(statearr_35375_36493[(2)] = inst_35363);

(statearr_35375_36493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (3))){
var inst_35365 = (state_35368[(2)]);
var inst_35366 = cljs.core.async.close_BANG_(out);
var state_35368__$1 = (function (){var statearr_35376 = state_35368;
(statearr_35376[(9)] = inst_35365);

return statearr_35376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35368__$1,inst_35366);
} else {
if((state_val_35369 === (2))){
var inst_35345 = (state_35368[(8)]);
var inst_35347 = (inst_35345 < n);
var state_35368__$1 = state_35368;
if(cljs.core.truth_(inst_35347)){
var statearr_35377_36496 = state_35368__$1;
(statearr_35377_36496[(1)] = (4));

} else {
var statearr_35378_36497 = state_35368__$1;
(statearr_35378_36497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (11))){
var inst_35345 = (state_35368[(8)]);
var inst_35355 = (state_35368[(2)]);
var inst_35356 = (inst_35345 + (1));
var inst_35345__$1 = inst_35356;
var state_35368__$1 = (function (){var statearr_35379 = state_35368;
(statearr_35379[(10)] = inst_35355);

(statearr_35379[(8)] = inst_35345__$1);

return statearr_35379;
})();
var statearr_35380_36498 = state_35368__$1;
(statearr_35380_36498[(2)] = null);

(statearr_35380_36498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (9))){
var state_35368__$1 = state_35368;
var statearr_35381_36499 = state_35368__$1;
(statearr_35381_36499[(2)] = null);

(statearr_35381_36499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (5))){
var state_35368__$1 = state_35368;
var statearr_35383_36503 = state_35368__$1;
(statearr_35383_36503[(2)] = null);

(statearr_35383_36503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (10))){
var inst_35360 = (state_35368[(2)]);
var state_35368__$1 = state_35368;
var statearr_35385_36504 = state_35368__$1;
(statearr_35385_36504[(2)] = inst_35360);

(statearr_35385_36504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35369 === (8))){
var inst_35350 = (state_35368[(7)]);
var state_35368__$1 = state_35368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35368__$1,(11),out,inst_35350);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35386[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35386[(1)] = (1));

return statearr_35386;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35368){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35368);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35388){var ex__33207__auto__ = e35388;
var statearr_35389_36506 = state_35368;
(statearr_35389_36506[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35368[(4)]))){
var statearr_35390_36507 = state_35368;
(statearr_35390_36507[(1)] = cljs.core.first((state_35368[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36508 = state_35368;
state_35368 = G__36508;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35391 = f__33619__auto__();
(statearr_35391[(6)] = c__33618__auto___36486);

return statearr_35391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35406 = (function (f,ch,meta35394,_,fn1,meta35407){
this.f = f;
this.ch = ch;
this.meta35394 = meta35394;
this._ = _;
this.fn1 = fn1;
this.meta35407 = meta35407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35408,meta35407__$1){
var self__ = this;
var _35408__$1 = this;
return (new cljs.core.async.t_cljs$core$async35406(self__.f,self__.ch,self__.meta35394,self__._,self__.fn1,meta35407__$1));
}));

(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35408){
var self__ = this;
var _35408__$1 = this;
return self__.meta35407;
}));

(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35392_SHARP_){
var G__35409 = (((p1__35392_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35392_SHARP_) : self__.f.call(null,p1__35392_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35409) : f1.call(null,G__35409));
});
}));

(cljs.core.async.t_cljs$core$async35406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35394","meta35394",-767645904,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35393","cljs.core.async/t_cljs$core$async35393",405793736,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35407","meta35407",2103456320,null)], null);
}));

(cljs.core.async.t_cljs$core$async35406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35406");

(cljs.core.async.t_cljs$core$async35406.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35406.
 */
cljs.core.async.__GT_t_cljs$core$async35406 = (function cljs$core$async$__GT_t_cljs$core$async35406(f,ch,meta35394,_,fn1,meta35407){
return (new cljs.core.async.t_cljs$core$async35406(f,ch,meta35394,_,fn1,meta35407));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35393 = (function (f,ch,meta35394){
this.f = f;
this.ch = ch;
this.meta35394 = meta35394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35395,meta35394__$1){
var self__ = this;
var _35395__$1 = this;
return (new cljs.core.async.t_cljs$core$async35393(self__.f,self__.ch,meta35394__$1));
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35395){
var self__ = this;
var _35395__$1 = this;
return self__.meta35394;
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35406(self__.f,self__.ch,self__.meta35394,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35410 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35410) : self__.f.call(null,G__35410));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35394","meta35394",-767645904,null)], null);
}));

(cljs.core.async.t_cljs$core$async35393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35393");

(cljs.core.async.t_cljs$core$async35393.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35393.
 */
cljs.core.async.__GT_t_cljs$core$async35393 = (function cljs$core$async$__GT_t_cljs$core$async35393(f,ch,meta35394){
return (new cljs.core.async.t_cljs$core$async35393(f,ch,meta35394));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35393(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35413 = (function (f,ch,meta35414){
this.f = f;
this.ch = ch;
this.meta35414 = meta35414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35415,meta35414__$1){
var self__ = this;
var _35415__$1 = this;
return (new cljs.core.async.t_cljs$core$async35413(self__.f,self__.ch,meta35414__$1));
}));

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35415){
var self__ = this;
var _35415__$1 = this;
return self__.meta35414;
}));

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35414","meta35414",-2054366535,null)], null);
}));

(cljs.core.async.t_cljs$core$async35413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35413");

(cljs.core.async.t_cljs$core$async35413.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35413.
 */
cljs.core.async.__GT_t_cljs$core$async35413 = (function cljs$core$async$__GT_t_cljs$core$async35413(f,ch,meta35414){
return (new cljs.core.async.t_cljs$core$async35413(f,ch,meta35414));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35413(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35418 = (function (p,ch,meta35419){
this.p = p;
this.ch = ch;
this.meta35419 = meta35419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35420,meta35419__$1){
var self__ = this;
var _35420__$1 = this;
return (new cljs.core.async.t_cljs$core$async35418(self__.p,self__.ch,meta35419__$1));
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35420){
var self__ = this;
var _35420__$1 = this;
return self__.meta35419;
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35419","meta35419",-169025107,null)], null);
}));

(cljs.core.async.t_cljs$core$async35418.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35418");

(cljs.core.async.t_cljs$core$async35418.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35418");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35418.
 */
cljs.core.async.__GT_t_cljs$core$async35418 = (function cljs$core$async$__GT_t_cljs$core$async35418(p,ch,meta35419){
return (new cljs.core.async.t_cljs$core$async35418(p,ch,meta35419));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35418(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35422 = arguments.length;
switch (G__35422) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35443){
var state_val_35444 = (state_35443[(1)]);
if((state_val_35444 === (7))){
var inst_35439 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35445_36532 = state_35443__$1;
(statearr_35445_36532[(2)] = inst_35439);

(statearr_35445_36532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (1))){
var state_35443__$1 = state_35443;
var statearr_35446_36533 = state_35443__$1;
(statearr_35446_36533[(2)] = null);

(statearr_35446_36533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (4))){
var inst_35425 = (state_35443[(7)]);
var inst_35425__$1 = (state_35443[(2)]);
var inst_35426 = (inst_35425__$1 == null);
var state_35443__$1 = (function (){var statearr_35447 = state_35443;
(statearr_35447[(7)] = inst_35425__$1);

return statearr_35447;
})();
if(cljs.core.truth_(inst_35426)){
var statearr_35448_36538 = state_35443__$1;
(statearr_35448_36538[(1)] = (5));

} else {
var statearr_35449_36539 = state_35443__$1;
(statearr_35449_36539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (6))){
var inst_35425 = (state_35443[(7)]);
var inst_35430 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35425) : p.call(null,inst_35425));
var state_35443__$1 = state_35443;
if(cljs.core.truth_(inst_35430)){
var statearr_35450_36540 = state_35443__$1;
(statearr_35450_36540[(1)] = (8));

} else {
var statearr_35451_36541 = state_35443__$1;
(statearr_35451_36541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (3))){
var inst_35441 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35443__$1,inst_35441);
} else {
if((state_val_35444 === (2))){
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35443__$1,(4),ch);
} else {
if((state_val_35444 === (11))){
var inst_35433 = (state_35443[(2)]);
var state_35443__$1 = state_35443;
var statearr_35452_36542 = state_35443__$1;
(statearr_35452_36542[(2)] = inst_35433);

(statearr_35452_36542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (9))){
var state_35443__$1 = state_35443;
var statearr_35453_36543 = state_35443__$1;
(statearr_35453_36543[(2)] = null);

(statearr_35453_36543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (5))){
var inst_35428 = cljs.core.async.close_BANG_(out);
var state_35443__$1 = state_35443;
var statearr_35454_36544 = state_35443__$1;
(statearr_35454_36544[(2)] = inst_35428);

(statearr_35454_36544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (10))){
var inst_35436 = (state_35443[(2)]);
var state_35443__$1 = (function (){var statearr_35455 = state_35443;
(statearr_35455[(8)] = inst_35436);

return statearr_35455;
})();
var statearr_35456_36547 = state_35443__$1;
(statearr_35456_36547[(2)] = null);

(statearr_35456_36547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35444 === (8))){
var inst_35425 = (state_35443[(7)]);
var state_35443__$1 = state_35443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35443__$1,(11),out,inst_35425);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35457 = [null,null,null,null,null,null,null,null,null];
(statearr_35457[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35457[(1)] = (1));

return statearr_35457;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35443){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35443);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35458){var ex__33207__auto__ = e35458;
var statearr_35459_36548 = state_35443;
(statearr_35459_36548[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35443[(4)]))){
var statearr_35460_36552 = state_35443;
(statearr_35460_36552[(1)] = cljs.core.first((state_35443[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36553 = state_35443;
state_35443 = G__36553;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35461 = f__33619__auto__();
(statearr_35461[(6)] = c__33618__auto___36531);

return statearr_35461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35463 = arguments.length;
switch (G__35463) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33618__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35533){
var state_val_35534 = (state_35533[(1)]);
if((state_val_35534 === (7))){
var inst_35529 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35535_36563 = state_35533__$1;
(statearr_35535_36563[(2)] = inst_35529);

(statearr_35535_36563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (20))){
var inst_35498 = (state_35533[(7)]);
var inst_35510 = (state_35533[(2)]);
var inst_35511 = cljs.core.next(inst_35498);
var inst_35477 = inst_35511;
var inst_35478 = null;
var inst_35479 = (0);
var inst_35480 = (0);
var state_35533__$1 = (function (){var statearr_35545 = state_35533;
(statearr_35545[(8)] = inst_35480);

(statearr_35545[(9)] = inst_35510);

(statearr_35545[(10)] = inst_35477);

(statearr_35545[(11)] = inst_35478);

(statearr_35545[(12)] = inst_35479);

return statearr_35545;
})();
var statearr_35546_36566 = state_35533__$1;
(statearr_35546_36566[(2)] = null);

(statearr_35546_36566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (1))){
var state_35533__$1 = state_35533;
var statearr_35547_36568 = state_35533__$1;
(statearr_35547_36568[(2)] = null);

(statearr_35547_36568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (4))){
var inst_35466 = (state_35533[(13)]);
var inst_35466__$1 = (state_35533[(2)]);
var inst_35467 = (inst_35466__$1 == null);
var state_35533__$1 = (function (){var statearr_35548 = state_35533;
(statearr_35548[(13)] = inst_35466__$1);

return statearr_35548;
})();
if(cljs.core.truth_(inst_35467)){
var statearr_35549_36575 = state_35533__$1;
(statearr_35549_36575[(1)] = (5));

} else {
var statearr_35550_36576 = state_35533__$1;
(statearr_35550_36576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (15))){
var state_35533__$1 = state_35533;
var statearr_35554_36577 = state_35533__$1;
(statearr_35554_36577[(2)] = null);

(statearr_35554_36577[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (21))){
var state_35533__$1 = state_35533;
var statearr_35559_36578 = state_35533__$1;
(statearr_35559_36578[(2)] = null);

(statearr_35559_36578[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (13))){
var inst_35480 = (state_35533[(8)]);
var inst_35477 = (state_35533[(10)]);
var inst_35478 = (state_35533[(11)]);
var inst_35479 = (state_35533[(12)]);
var inst_35488 = (state_35533[(2)]);
var inst_35495 = (inst_35480 + (1));
var tmp35551 = inst_35477;
var tmp35552 = inst_35478;
var tmp35553 = inst_35479;
var inst_35477__$1 = tmp35551;
var inst_35478__$1 = tmp35552;
var inst_35479__$1 = tmp35553;
var inst_35480__$1 = inst_35495;
var state_35533__$1 = (function (){var statearr_35560 = state_35533;
(statearr_35560[(8)] = inst_35480__$1);

(statearr_35560[(10)] = inst_35477__$1);

(statearr_35560[(14)] = inst_35488);

(statearr_35560[(11)] = inst_35478__$1);

(statearr_35560[(12)] = inst_35479__$1);

return statearr_35560;
})();
var statearr_35561_36579 = state_35533__$1;
(statearr_35561_36579[(2)] = null);

(statearr_35561_36579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (22))){
var state_35533__$1 = state_35533;
var statearr_35562_36580 = state_35533__$1;
(statearr_35562_36580[(2)] = null);

(statearr_35562_36580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (6))){
var inst_35466 = (state_35533[(13)]);
var inst_35475 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35466) : f.call(null,inst_35466));
var inst_35476 = cljs.core.seq(inst_35475);
var inst_35477 = inst_35476;
var inst_35478 = null;
var inst_35479 = (0);
var inst_35480 = (0);
var state_35533__$1 = (function (){var statearr_35570 = state_35533;
(statearr_35570[(8)] = inst_35480);

(statearr_35570[(10)] = inst_35477);

(statearr_35570[(11)] = inst_35478);

(statearr_35570[(12)] = inst_35479);

return statearr_35570;
})();
var statearr_35571_36582 = state_35533__$1;
(statearr_35571_36582[(2)] = null);

(statearr_35571_36582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (17))){
var inst_35498 = (state_35533[(7)]);
var inst_35502 = cljs.core.chunk_first(inst_35498);
var inst_35504 = cljs.core.chunk_rest(inst_35498);
var inst_35505 = cljs.core.count(inst_35502);
var inst_35477 = inst_35504;
var inst_35478 = inst_35502;
var inst_35479 = inst_35505;
var inst_35480 = (0);
var state_35533__$1 = (function (){var statearr_35573 = state_35533;
(statearr_35573[(8)] = inst_35480);

(statearr_35573[(10)] = inst_35477);

(statearr_35573[(11)] = inst_35478);

(statearr_35573[(12)] = inst_35479);

return statearr_35573;
})();
var statearr_35574_36587 = state_35533__$1;
(statearr_35574_36587[(2)] = null);

(statearr_35574_36587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (3))){
var inst_35531 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35533__$1,inst_35531);
} else {
if((state_val_35534 === (12))){
var inst_35519 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35587_36592 = state_35533__$1;
(statearr_35587_36592[(2)] = inst_35519);

(statearr_35587_36592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (2))){
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35533__$1,(4),in$);
} else {
if((state_val_35534 === (23))){
var inst_35527 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35589_36593 = state_35533__$1;
(statearr_35589_36593[(2)] = inst_35527);

(statearr_35589_36593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (19))){
var inst_35514 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35590_36594 = state_35533__$1;
(statearr_35590_36594[(2)] = inst_35514);

(statearr_35590_36594[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (11))){
var inst_35477 = (state_35533[(10)]);
var inst_35498 = (state_35533[(7)]);
var inst_35498__$1 = cljs.core.seq(inst_35477);
var state_35533__$1 = (function (){var statearr_35598 = state_35533;
(statearr_35598[(7)] = inst_35498__$1);

return statearr_35598;
})();
if(inst_35498__$1){
var statearr_35599_36601 = state_35533__$1;
(statearr_35599_36601[(1)] = (14));

} else {
var statearr_35600_36602 = state_35533__$1;
(statearr_35600_36602[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (9))){
var inst_35521 = (state_35533[(2)]);
var inst_35522 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35533__$1 = (function (){var statearr_35601 = state_35533;
(statearr_35601[(15)] = inst_35521);

return statearr_35601;
})();
if(cljs.core.truth_(inst_35522)){
var statearr_35603_36603 = state_35533__$1;
(statearr_35603_36603[(1)] = (21));

} else {
var statearr_35604_36604 = state_35533__$1;
(statearr_35604_36604[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (5))){
var inst_35469 = cljs.core.async.close_BANG_(out);
var state_35533__$1 = state_35533;
var statearr_35605_36610 = state_35533__$1;
(statearr_35605_36610[(2)] = inst_35469);

(statearr_35605_36610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (14))){
var inst_35498 = (state_35533[(7)]);
var inst_35500 = cljs.core.chunked_seq_QMARK_(inst_35498);
var state_35533__$1 = state_35533;
if(inst_35500){
var statearr_35606_36616 = state_35533__$1;
(statearr_35606_36616[(1)] = (17));

} else {
var statearr_35607_36617 = state_35533__$1;
(statearr_35607_36617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (16))){
var inst_35517 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35608_36623 = state_35533__$1;
(statearr_35608_36623[(2)] = inst_35517);

(statearr_35608_36623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (10))){
var inst_35480 = (state_35533[(8)]);
var inst_35478 = (state_35533[(11)]);
var inst_35486 = cljs.core._nth(inst_35478,inst_35480);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35533__$1,(13),out,inst_35486);
} else {
if((state_val_35534 === (18))){
var inst_35498 = (state_35533[(7)]);
var inst_35508 = cljs.core.first(inst_35498);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35533__$1,(20),out,inst_35508);
} else {
if((state_val_35534 === (8))){
var inst_35480 = (state_35533[(8)]);
var inst_35479 = (state_35533[(12)]);
var inst_35482 = (inst_35480 < inst_35479);
var inst_35483 = inst_35482;
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35483)){
var statearr_35613_36633 = state_35533__$1;
(statearr_35613_36633[(1)] = (10));

} else {
var statearr_35614_36634 = state_35533__$1;
(statearr_35614_36634[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0 = (function (){
var statearr_35615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35615[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__);

(statearr_35615[(1)] = (1));

return statearr_35615;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1 = (function (state_35533){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35533);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35616){var ex__33207__auto__ = e35616;
var statearr_35617_36635 = state_35533;
(statearr_35617_36635[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35533[(4)]))){
var statearr_35618_36636 = state_35533;
(statearr_35618_36636[(1)] = cljs.core.first((state_35533[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36637 = state_35533;
state_35533 = G__36637;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__ = function(state_35533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1.call(this,state_35533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33204__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35620 = f__33619__auto__();
(statearr_35620[(6)] = c__33618__auto__);

return statearr_35620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));

return c__33618__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35623 = arguments.length;
switch (G__35623) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35625 = arguments.length;
switch (G__35625) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35632 = arguments.length;
switch (G__35632) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35693){
var state_val_35694 = (state_35693[(1)]);
if((state_val_35694 === (7))){
var inst_35688 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35702_36657 = state_35693__$1;
(statearr_35702_36657[(2)] = inst_35688);

(statearr_35702_36657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (1))){
var inst_35659 = null;
var state_35693__$1 = (function (){var statearr_35703 = state_35693;
(statearr_35703[(7)] = inst_35659);

return statearr_35703;
})();
var statearr_35704_36658 = state_35693__$1;
(statearr_35704_36658[(2)] = null);

(statearr_35704_36658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (4))){
var inst_35663 = (state_35693[(8)]);
var inst_35663__$1 = (state_35693[(2)]);
var inst_35674 = (inst_35663__$1 == null);
var inst_35675 = cljs.core.not(inst_35674);
var state_35693__$1 = (function (){var statearr_35705 = state_35693;
(statearr_35705[(8)] = inst_35663__$1);

return statearr_35705;
})();
if(inst_35675){
var statearr_35710_36659 = state_35693__$1;
(statearr_35710_36659[(1)] = (5));

} else {
var statearr_35711_36660 = state_35693__$1;
(statearr_35711_36660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (6))){
var state_35693__$1 = state_35693;
var statearr_35712_36661 = state_35693__$1;
(statearr_35712_36661[(2)] = null);

(statearr_35712_36661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (3))){
var inst_35690 = (state_35693[(2)]);
var inst_35691 = cljs.core.async.close_BANG_(out);
var state_35693__$1 = (function (){var statearr_35713 = state_35693;
(statearr_35713[(9)] = inst_35690);

return statearr_35713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35693__$1,inst_35691);
} else {
if((state_val_35694 === (2))){
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35693__$1,(4),ch);
} else {
if((state_val_35694 === (11))){
var inst_35663 = (state_35693[(8)]);
var inst_35682 = (state_35693[(2)]);
var inst_35659 = inst_35663;
var state_35693__$1 = (function (){var statearr_35721 = state_35693;
(statearr_35721[(7)] = inst_35659);

(statearr_35721[(10)] = inst_35682);

return statearr_35721;
})();
var statearr_35722_36667 = state_35693__$1;
(statearr_35722_36667[(2)] = null);

(statearr_35722_36667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (9))){
var inst_35663 = (state_35693[(8)]);
var state_35693__$1 = state_35693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35693__$1,(11),out,inst_35663);
} else {
if((state_val_35694 === (5))){
var inst_35659 = (state_35693[(7)]);
var inst_35663 = (state_35693[(8)]);
var inst_35677 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35663,inst_35659);
var state_35693__$1 = state_35693;
if(inst_35677){
var statearr_35727_36673 = state_35693__$1;
(statearr_35727_36673[(1)] = (8));

} else {
var statearr_35728_36675 = state_35693__$1;
(statearr_35728_36675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (10))){
var inst_35685 = (state_35693[(2)]);
var state_35693__$1 = state_35693;
var statearr_35729_36682 = state_35693__$1;
(statearr_35729_36682[(2)] = inst_35685);

(statearr_35729_36682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35694 === (8))){
var inst_35659 = (state_35693[(7)]);
var tmp35726 = inst_35659;
var inst_35659__$1 = tmp35726;
var state_35693__$1 = (function (){var statearr_35730 = state_35693;
(statearr_35730[(7)] = inst_35659__$1);

return statearr_35730;
})();
var statearr_35731_36695 = state_35693__$1;
(statearr_35731_36695[(2)] = null);

(statearr_35731_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35732[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35732[(1)] = (1));

return statearr_35732;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35693){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35693);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35733){var ex__33207__auto__ = e35733;
var statearr_35734_36696 = state_35693;
(statearr_35734_36696[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35693[(4)]))){
var statearr_35735_36697 = state_35693;
(statearr_35735_36697[(1)] = cljs.core.first((state_35693[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36702 = state_35693;
state_35693 = G__36702;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35739 = f__33619__auto__();
(statearr_35739[(6)] = c__33618__auto___36656);

return statearr_35739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35741 = arguments.length;
switch (G__35741) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35779){
var state_val_35780 = (state_35779[(1)]);
if((state_val_35780 === (7))){
var inst_35775 = (state_35779[(2)]);
var state_35779__$1 = state_35779;
var statearr_35781_36728 = state_35779__$1;
(statearr_35781_36728[(2)] = inst_35775);

(statearr_35781_36728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (1))){
var inst_35742 = (new Array(n));
var inst_35743 = inst_35742;
var inst_35744 = (0);
var state_35779__$1 = (function (){var statearr_35782 = state_35779;
(statearr_35782[(7)] = inst_35743);

(statearr_35782[(8)] = inst_35744);

return statearr_35782;
})();
var statearr_35783_36730 = state_35779__$1;
(statearr_35783_36730[(2)] = null);

(statearr_35783_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (4))){
var inst_35747 = (state_35779[(9)]);
var inst_35747__$1 = (state_35779[(2)]);
var inst_35748 = (inst_35747__$1 == null);
var inst_35749 = cljs.core.not(inst_35748);
var state_35779__$1 = (function (){var statearr_35784 = state_35779;
(statearr_35784[(9)] = inst_35747__$1);

return statearr_35784;
})();
if(inst_35749){
var statearr_35785_36735 = state_35779__$1;
(statearr_35785_36735[(1)] = (5));

} else {
var statearr_35786_36736 = state_35779__$1;
(statearr_35786_36736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (15))){
var inst_35769 = (state_35779[(2)]);
var state_35779__$1 = state_35779;
var statearr_35787_36738 = state_35779__$1;
(statearr_35787_36738[(2)] = inst_35769);

(statearr_35787_36738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (13))){
var state_35779__$1 = state_35779;
var statearr_35788_36744 = state_35779__$1;
(statearr_35788_36744[(2)] = null);

(statearr_35788_36744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (6))){
var inst_35744 = (state_35779[(8)]);
var inst_35765 = (inst_35744 > (0));
var state_35779__$1 = state_35779;
if(cljs.core.truth_(inst_35765)){
var statearr_35789_36749 = state_35779__$1;
(statearr_35789_36749[(1)] = (12));

} else {
var statearr_35790_36751 = state_35779__$1;
(statearr_35790_36751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (3))){
var inst_35777 = (state_35779[(2)]);
var state_35779__$1 = state_35779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35779__$1,inst_35777);
} else {
if((state_val_35780 === (12))){
var inst_35743 = (state_35779[(7)]);
var inst_35767 = cljs.core.vec(inst_35743);
var state_35779__$1 = state_35779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35779__$1,(15),out,inst_35767);
} else {
if((state_val_35780 === (2))){
var state_35779__$1 = state_35779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35779__$1,(4),ch);
} else {
if((state_val_35780 === (11))){
var inst_35759 = (state_35779[(2)]);
var inst_35760 = (new Array(n));
var inst_35743 = inst_35760;
var inst_35744 = (0);
var state_35779__$1 = (function (){var statearr_35791 = state_35779;
(statearr_35791[(10)] = inst_35759);

(statearr_35791[(7)] = inst_35743);

(statearr_35791[(8)] = inst_35744);

return statearr_35791;
})();
var statearr_35792_36758 = state_35779__$1;
(statearr_35792_36758[(2)] = null);

(statearr_35792_36758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (9))){
var inst_35743 = (state_35779[(7)]);
var inst_35757 = cljs.core.vec(inst_35743);
var state_35779__$1 = state_35779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35779__$1,(11),out,inst_35757);
} else {
if((state_val_35780 === (5))){
var inst_35743 = (state_35779[(7)]);
var inst_35744 = (state_35779[(8)]);
var inst_35752 = (state_35779[(11)]);
var inst_35747 = (state_35779[(9)]);
var inst_35751 = (inst_35743[inst_35744] = inst_35747);
var inst_35752__$1 = (inst_35744 + (1));
var inst_35753 = (inst_35752__$1 < n);
var state_35779__$1 = (function (){var statearr_35793 = state_35779;
(statearr_35793[(11)] = inst_35752__$1);

(statearr_35793[(12)] = inst_35751);

return statearr_35793;
})();
if(cljs.core.truth_(inst_35753)){
var statearr_35794_36759 = state_35779__$1;
(statearr_35794_36759[(1)] = (8));

} else {
var statearr_35795_36760 = state_35779__$1;
(statearr_35795_36760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (14))){
var inst_35772 = (state_35779[(2)]);
var inst_35773 = cljs.core.async.close_BANG_(out);
var state_35779__$1 = (function (){var statearr_35797 = state_35779;
(statearr_35797[(13)] = inst_35772);

return statearr_35797;
})();
var statearr_35798_36761 = state_35779__$1;
(statearr_35798_36761[(2)] = inst_35773);

(statearr_35798_36761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (10))){
var inst_35763 = (state_35779[(2)]);
var state_35779__$1 = state_35779;
var statearr_35799_36762 = state_35779__$1;
(statearr_35799_36762[(2)] = inst_35763);

(statearr_35799_36762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35780 === (8))){
var inst_35743 = (state_35779[(7)]);
var inst_35752 = (state_35779[(11)]);
var tmp35796 = inst_35743;
var inst_35743__$1 = tmp35796;
var inst_35744 = inst_35752;
var state_35779__$1 = (function (){var statearr_35800 = state_35779;
(statearr_35800[(7)] = inst_35743__$1);

(statearr_35800[(8)] = inst_35744);

return statearr_35800;
})();
var statearr_35801_36763 = state_35779__$1;
(statearr_35801_36763[(2)] = null);

(statearr_35801_36763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35803[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35803[(1)] = (1));

return statearr_35803;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35779){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35779);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35804){var ex__33207__auto__ = e35804;
var statearr_35805_36769 = state_35779;
(statearr_35805_36769[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35779[(4)]))){
var statearr_35806_36770 = state_35779;
(statearr_35806_36770[(1)] = cljs.core.first((state_35779[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36771 = state_35779;
state_35779 = G__36771;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35810 = f__33619__auto__();
(statearr_35810[(6)] = c__33618__auto___36716);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35812 = arguments.length;
switch (G__35812) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33618__auto___36781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33619__auto__ = (function (){var switch__33203__auto__ = (function (state_35860){
var state_val_35861 = (state_35860[(1)]);
if((state_val_35861 === (7))){
var inst_35856 = (state_35860[(2)]);
var state_35860__$1 = state_35860;
var statearr_35863_36782 = state_35860__$1;
(statearr_35863_36782[(2)] = inst_35856);

(statearr_35863_36782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (1))){
var inst_35816 = [];
var inst_35817 = inst_35816;
var inst_35818 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35860__$1 = (function (){var statearr_35864 = state_35860;
(statearr_35864[(7)] = inst_35817);

(statearr_35864[(8)] = inst_35818);

return statearr_35864;
})();
var statearr_35865_36784 = state_35860__$1;
(statearr_35865_36784[(2)] = null);

(statearr_35865_36784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (4))){
var inst_35821 = (state_35860[(9)]);
var inst_35821__$1 = (state_35860[(2)]);
var inst_35822 = (inst_35821__$1 == null);
var inst_35823 = cljs.core.not(inst_35822);
var state_35860__$1 = (function (){var statearr_35866 = state_35860;
(statearr_35866[(9)] = inst_35821__$1);

return statearr_35866;
})();
if(inst_35823){
var statearr_35867_36785 = state_35860__$1;
(statearr_35867_36785[(1)] = (5));

} else {
var statearr_35868_36786 = state_35860__$1;
(statearr_35868_36786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (15))){
var inst_35817 = (state_35860[(7)]);
var inst_35848 = cljs.core.vec(inst_35817);
var state_35860__$1 = state_35860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35860__$1,(18),out,inst_35848);
} else {
if((state_val_35861 === (13))){
var inst_35843 = (state_35860[(2)]);
var state_35860__$1 = state_35860;
var statearr_35869_36787 = state_35860__$1;
(statearr_35869_36787[(2)] = inst_35843);

(statearr_35869_36787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (6))){
var inst_35817 = (state_35860[(7)]);
var inst_35845 = inst_35817.length;
var inst_35846 = (inst_35845 > (0));
var state_35860__$1 = state_35860;
if(cljs.core.truth_(inst_35846)){
var statearr_35870_36788 = state_35860__$1;
(statearr_35870_36788[(1)] = (15));

} else {
var statearr_35871_36789 = state_35860__$1;
(statearr_35871_36789[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (17))){
var inst_35853 = (state_35860[(2)]);
var inst_35854 = cljs.core.async.close_BANG_(out);
var state_35860__$1 = (function (){var statearr_35872 = state_35860;
(statearr_35872[(10)] = inst_35853);

return statearr_35872;
})();
var statearr_35873_36790 = state_35860__$1;
(statearr_35873_36790[(2)] = inst_35854);

(statearr_35873_36790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (3))){
var inst_35858 = (state_35860[(2)]);
var state_35860__$1 = state_35860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35860__$1,inst_35858);
} else {
if((state_val_35861 === (12))){
var inst_35817 = (state_35860[(7)]);
var inst_35836 = cljs.core.vec(inst_35817);
var state_35860__$1 = state_35860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35860__$1,(14),out,inst_35836);
} else {
if((state_val_35861 === (2))){
var state_35860__$1 = state_35860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35860__$1,(4),ch);
} else {
if((state_val_35861 === (11))){
var inst_35817 = (state_35860[(7)]);
var inst_35821 = (state_35860[(9)]);
var inst_35825 = (state_35860[(11)]);
var inst_35833 = inst_35817.push(inst_35821);
var tmp35874 = inst_35817;
var inst_35817__$1 = tmp35874;
var inst_35818 = inst_35825;
var state_35860__$1 = (function (){var statearr_35879 = state_35860;
(statearr_35879[(7)] = inst_35817__$1);

(statearr_35879[(8)] = inst_35818);

(statearr_35879[(12)] = inst_35833);

return statearr_35879;
})();
var statearr_35880_36792 = state_35860__$1;
(statearr_35880_36792[(2)] = null);

(statearr_35880_36792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (9))){
var inst_35818 = (state_35860[(8)]);
var inst_35829 = cljs.core.keyword_identical_QMARK_(inst_35818,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35860__$1 = state_35860;
var statearr_35881_36793 = state_35860__$1;
(statearr_35881_36793[(2)] = inst_35829);

(statearr_35881_36793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (5))){
var inst_35821 = (state_35860[(9)]);
var inst_35818 = (state_35860[(8)]);
var inst_35826 = (state_35860[(13)]);
var inst_35825 = (state_35860[(11)]);
var inst_35825__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35821) : f.call(null,inst_35821));
var inst_35826__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35825__$1,inst_35818);
var state_35860__$1 = (function (){var statearr_35886 = state_35860;
(statearr_35886[(13)] = inst_35826__$1);

(statearr_35886[(11)] = inst_35825__$1);

return statearr_35886;
})();
if(inst_35826__$1){
var statearr_35887_36796 = state_35860__$1;
(statearr_35887_36796[(1)] = (8));

} else {
var statearr_35888_36797 = state_35860__$1;
(statearr_35888_36797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (14))){
var inst_35821 = (state_35860[(9)]);
var inst_35825 = (state_35860[(11)]);
var inst_35838 = (state_35860[(2)]);
var inst_35839 = [];
var inst_35840 = inst_35839.push(inst_35821);
var inst_35817 = inst_35839;
var inst_35818 = inst_35825;
var state_35860__$1 = (function (){var statearr_35889 = state_35860;
(statearr_35889[(7)] = inst_35817);

(statearr_35889[(14)] = inst_35838);

(statearr_35889[(8)] = inst_35818);

(statearr_35889[(15)] = inst_35840);

return statearr_35889;
})();
var statearr_35890_36798 = state_35860__$1;
(statearr_35890_36798[(2)] = null);

(statearr_35890_36798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (16))){
var state_35860__$1 = state_35860;
var statearr_35891_36799 = state_35860__$1;
(statearr_35891_36799[(2)] = null);

(statearr_35891_36799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (10))){
var inst_35831 = (state_35860[(2)]);
var state_35860__$1 = state_35860;
if(cljs.core.truth_(inst_35831)){
var statearr_35892_36800 = state_35860__$1;
(statearr_35892_36800[(1)] = (11));

} else {
var statearr_35893_36801 = state_35860__$1;
(statearr_35893_36801[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (18))){
var inst_35850 = (state_35860[(2)]);
var state_35860__$1 = state_35860;
var statearr_35894_36802 = state_35860__$1;
(statearr_35894_36802[(2)] = inst_35850);

(statearr_35894_36802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35861 === (8))){
var inst_35826 = (state_35860[(13)]);
var state_35860__$1 = state_35860;
var statearr_35895_36803 = state_35860__$1;
(statearr_35895_36803[(2)] = inst_35826);

(statearr_35895_36803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33204__auto__ = null;
var cljs$core$async$state_machine__33204__auto____0 = (function (){
var statearr_35896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35896[(0)] = cljs$core$async$state_machine__33204__auto__);

(statearr_35896[(1)] = (1));

return statearr_35896;
});
var cljs$core$async$state_machine__33204__auto____1 = (function (state_35860){
while(true){
var ret_value__33205__auto__ = (function (){try{while(true){
var result__33206__auto__ = switch__33203__auto__(state_35860);
if(cljs.core.keyword_identical_QMARK_(result__33206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33206__auto__;
}
break;
}
}catch (e35897){var ex__33207__auto__ = e35897;
var statearr_35898_36804 = state_35860;
(statearr_35898_36804[(2)] = ex__33207__auto__);


if(cljs.core.seq((state_35860[(4)]))){
var statearr_35899_36805 = state_35860;
(statearr_35899_36805[(1)] = cljs.core.first((state_35860[(4)])));

} else {
throw ex__33207__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36806 = state_35860;
state_35860 = G__36806;
continue;
} else {
return ret_value__33205__auto__;
}
break;
}
});
cljs$core$async$state_machine__33204__auto__ = function(state_35860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33204__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33204__auto____1.call(this,state_35860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33204__auto____0;
cljs$core$async$state_machine__33204__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33204__auto____1;
return cljs$core$async$state_machine__33204__auto__;
})()
})();
var state__33620__auto__ = (function (){var statearr_35901 = f__33619__auto__();
(statearr_35901[(6)] = c__33618__auto___36781);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33620__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
