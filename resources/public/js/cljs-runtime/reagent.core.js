goog.provide('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var G__38951 = arguments.length;
switch (G__38951) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___39379 = arguments.length;
var i__5770__auto___39380 = (0);
while(true){
if((i__5770__auto___39380 < len__5769__auto___39379)){
args_arr__5794__auto__.push((arguments[i__5770__auto___39380]));

var G__39381 = (i__5770__auto___39380 + (1));
i__5770__auto___39380 = G__39381;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
}));

/** @this {Function} */
(reagent.core.create_element.cljs$lang$applyTo = (function (seq38924){
var G__38925 = cljs.core.first(seq38924);
var seq38924__$1 = cljs.core.next(seq38924);
var G__38948 = cljs.core.first(seq38924__$1);
var seq38924__$2 = cljs.core.next(seq38924__$1);
var G__38950 = cljs.core.first(seq38924__$2);
var seq38924__$3 = cljs.core.next(seq38924__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38925,G__38948,G__38950,seq38924__$3);
}));

(reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(var_args){
var G__38982 = arguments.length;
switch (G__38982) {
case 1:
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return reagent.impl.protocols.as_element(reagent.impl.template._STAR_current_default_compiler_STAR_,form);
}));

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return reagent.impl.protocols.as_element(compiler,form);
}));

(reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(var_args){
var G__39010 = arguments.length;
switch (G__39010) {
case 1:
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2(c,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.component.reactify_component(c,compiler);
}));

(reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.core.create_class = (function reagent$core$create_class(var_args){
var G__39021 = arguments.length;
switch (G__39021) {
case 1:
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return reagent.impl.component.create_class(spec,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return reagent.impl.component.create_class(spec,compiler);
}));

(reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var G__39035 = arguments.length;
switch (G__39035) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
}));

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_();

reagent.impl.util.force_update(this$,deep);

return reagent.impl.batching.flush_after_render();
}));

(reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_argv(this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
reagent.core.class_names = (function reagent$core$class_names(var_args){
var G__39041 = arguments.length;
switch (G__39041) {
case 0:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___39387 = arguments.length;
var i__5770__auto___39388 = (0);
while(true){
if((i__5770__auto___39388 < len__5769__auto___39387)){
args_arr__5794__auto__.push((arguments[i__5770__auto___39388]));

var G__39389 = (i__5770__auto___39388 + (1));
i__5770__auto___39388 = G__39389;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class1,class2);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(reagent.core.class_names.cljs$lang$applyTo = (function (seq39038){
var G__39039 = cljs.core.first(seq39038);
var seq39038__$1 = cljs.core.next(seq39038);
var G__39040 = cljs.core.first(seq39038__$1);
var seq39038__$2 = cljs.core.next(seq39038__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39039,G__39040,seq39038__$2);
}));

(reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
reagent.core.merge_props = (function reagent$core$merge_props(var_args){
var G__39054 = arguments.length;
switch (G__39054) {
case 0:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___39391 = arguments.length;
var i__5770__auto___39392 = (0);
while(true){
if((i__5770__auto___39392 < len__5769__auto___39391)){
args_arr__5794__auto__.push((arguments[i__5770__auto___39392]));

var G__39393 = (i__5770__auto___39392 + (1));
i__5770__auto___39392 = G__39393;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1(defaults);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(defaults,props);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(reagent.core.merge_props.cljs$lang$applyTo = (function (seq39051){
var G__39052 = cljs.core.first(seq39051);
var seq39051__$1 = cljs.core.next(seq39051);
var G__39053 = cljs.core.first(seq39051__$1);
var seq39051__$2 = cljs.core.next(seq39051__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39052,G__39053,seq39051__$2);
}));

(reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var G__39064 = arguments.length;
switch (G__39064) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___39395 = arguments.length;
var i__5770__auto___39396 = (0);
while(true){
if((i__5770__auto___39396 < len__5769__auto___39395)){
args_arr__5794__auto__.push((arguments[i__5770__auto___39396]));

var G__39397 = (i__5770__auto___39396 + (1));
i__5770__auto___39396 = G__39397;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
}));

(reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(reagent.core.atom.cljs$lang$applyTo = (function (seq39062){
var G__39063 = cljs.core.first(seq39062);
var seq39062__$1 = cljs.core.next(seq39062);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39063,seq39062__$1);
}));

(reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39398 = arguments.length;
var i__5770__auto___39399 = (0);
while(true){
if((i__5770__auto___39399 < len__5769__auto___39398)){
args__5775__auto__.push((arguments[i__5770__auto___39399]));

var G__39400 = (i__5770__auto___39399 + (1));
i__5770__auto___39399 = G__39400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track(f,args);
}));

(reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track.cljs$lang$applyTo = (function (seq39069){
var G__39070 = cljs.core.first(seq39069);
var seq39069__$1 = cljs.core.next(seq39069);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39070,seq39069__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39401 = arguments.length;
var i__5770__auto___39402 = (0);
while(true){
if((i__5770__auto___39402 < len__5769__auto___39401)){
args__5775__auto__.push((arguments[i__5770__auto___39402]));

var G__39403 = (i__5770__auto___39402 + (1));
i__5770__auto___39402 = G__39403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_(f,args);
}));

(reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq39074){
var G__39075 = cljs.core.first(seq39074);
var seq39074__$1 = cljs.core.next(seq39074);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39075,seq39074__$1);
}));

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39404 = arguments.length;
var i__5770__auto___39405 = (0);
while(true){
if((i__5770__auto___39405 < len__5769__auto___39404)){
args__5775__auto__.push((arguments[i__5770__auto___39405]));

var G__39406 = (i__5770__auto___39405 + (1));
i__5770__auto___39405 = G__39406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return reagent.ratom.make_wrapper(value,reset_fn,args);
}));

(reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.wrap.cljs$lang$applyTo = (function (seq39104){
var G__39105 = cljs.core.first(seq39104);
var seq39104__$1 = cljs.core.next(seq39104);
var G__39106 = cljs.core.first(seq39104__$1);
var seq39104__$2 = cljs.core.next(seq39104__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39105,G__39106,seq39104__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39407 = arguments.length;
var i__5770__auto___39408 = (0);
while(true){
if((i__5770__auto___39408 < len__5769__auto___39407)){
args__5775__auto__.push((arguments[i__5770__auto___39408]));

var G__39409 = (i__5770__auto___39408 + (1));
i__5770__auto___39408 = G__39409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__5045__auto__ = a.rswapfs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__39143_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__39143_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5806__auto__ = (function (){var G__39229 = a;
var G__39229__$1 = (((G__39229 == null))?null:G__39229.rswapfs);
if((G__39229__$1 == null)){
return null;
} else {
return G__39229__$1.shift();
}
})();
if((temp__5806__auto__ == null)){
return s;
} else {
var sf = temp__5806__auto__;
var G__39410 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__39410;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq39151){
var G__39152 = cljs.core.first(seq39151);
var seq39151__$1 = cljs.core.next(seq39151);
var G__39153 = cljs.core.first(seq39151__$1);
var seq39151__$2 = cljs.core.next(seq39151__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39152,G__39153,seq39151__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39411 = arguments.length;
var i__5770__auto___39412 = (0);
while(true){
if((i__5770__auto___39412 < len__5769__auto___39411)){
args__5775__auto__.push((arguments[i__5770__auto___39412]));

var G__39413 = (i__5770__auto___39412 + (1));
i__5770__auto___39412 = G__39413;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn(f,args);
}));

(reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.partial.cljs$lang$applyTo = (function (seq39288){
var G__39289 = cljs.core.first(seq39288);
var seq39288__$1 = cljs.core.next(seq39288);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39289,seq39288__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
reagent.core.create_compiler = (function reagent$core$create_compiler(opts){
return reagent.impl.template.create_compiler(opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
reagent.core.set_default_compiler_BANG_ = (function reagent$core$set_default_compiler_BANG_(compiler){
return reagent.impl.template.set_default_compiler_BANG_((((compiler == null))?reagent.impl.template.class_compiler:compiler));
});
reagent.core.render = (function reagent$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39414 = arguments.length;
var i__5770__auto___39415 = (0);
while(true){
if((i__5770__auto___39415 < len__5769__auto___39414)){
args__5775__auto__.push((arguments[i__5770__auto___39415]));

var G__39416 = (i__5770__auto___39415 + (1));
i__5770__auto___39415 = G__39416;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to reagent.dom namespace in Reagent v1.0."));
}));

(reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent.core.render.cljs$lang$applyTo = (function (seq39369){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39369));
}));


//# sourceMappingURL=reagent.core.js.map
