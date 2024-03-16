goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39071 = arguments.length;
var i__5770__auto___39072 = (0);
while(true){
if((i__5770__auto___39072 < len__5769__auto___39071)){
args__5775__auto__.push((arguments[i__5770__auto___39072]));

var G__39073 = (i__5770__auto___39072 + (1));
i__5770__auto___39072 = G__39073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38640){
var G__38641 = cljs.core.first(seq38640);
var seq38640__$1 = cljs.core.next(seq38640);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38641,seq38640__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38651 = cljs.core.seq(sources);
var chunk__38656 = null;
var count__38657 = (0);
var i__38658 = (0);
while(true){
if((i__38658 < count__38657)){
var map__38668 = chunk__38656.cljs$core$IIndexed$_nth$arity$2(null,i__38658);
var map__38668__$1 = cljs.core.__destructure_map(map__38668);
var src = map__38668__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38668__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38669){var e_39076 = e38669;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39076);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39076.message)].join('')));
}

var G__39077 = seq__38651;
var G__39078 = chunk__38656;
var G__39079 = count__38657;
var G__39080 = (i__38658 + (1));
seq__38651 = G__39077;
chunk__38656 = G__39078;
count__38657 = G__39079;
i__38658 = G__39080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38651);
if(temp__5804__auto__){
var seq__38651__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38651__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38651__$1);
var G__39081 = cljs.core.chunk_rest(seq__38651__$1);
var G__39082 = c__5568__auto__;
var G__39083 = cljs.core.count(c__5568__auto__);
var G__39084 = (0);
seq__38651 = G__39081;
chunk__38656 = G__39082;
count__38657 = G__39083;
i__38658 = G__39084;
continue;
} else {
var map__38670 = cljs.core.first(seq__38651__$1);
var map__38670__$1 = cljs.core.__destructure_map(map__38670);
var src = map__38670__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38671){var e_39085 = e38671;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39085);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39085.message)].join('')));
}

var G__39086 = cljs.core.next(seq__38651__$1);
var G__39087 = null;
var G__39088 = (0);
var G__39089 = (0);
seq__38651 = G__39086;
chunk__38656 = G__39087;
count__38657 = G__39088;
i__38658 = G__39089;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38675 = cljs.core.seq(js_requires);
var chunk__38676 = null;
var count__38677 = (0);
var i__38678 = (0);
while(true){
if((i__38678 < count__38677)){
var js_ns = chunk__38676.cljs$core$IIndexed$_nth$arity$2(null,i__38678);
var require_str_39090 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39090);


var G__39091 = seq__38675;
var G__39092 = chunk__38676;
var G__39093 = count__38677;
var G__39094 = (i__38678 + (1));
seq__38675 = G__39091;
chunk__38676 = G__39092;
count__38677 = G__39093;
i__38678 = G__39094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38675);
if(temp__5804__auto__){
var seq__38675__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38675__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38675__$1);
var G__39095 = cljs.core.chunk_rest(seq__38675__$1);
var G__39096 = c__5568__auto__;
var G__39097 = cljs.core.count(c__5568__auto__);
var G__39098 = (0);
seq__38675 = G__39095;
chunk__38676 = G__39096;
count__38677 = G__39097;
i__38678 = G__39098;
continue;
} else {
var js_ns = cljs.core.first(seq__38675__$1);
var require_str_39099 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39099);


var G__39100 = cljs.core.next(seq__38675__$1);
var G__39101 = null;
var G__39102 = (0);
var G__39103 = (0);
seq__38675 = G__39100;
chunk__38676 = G__39101;
count__38677 = G__39102;
i__38678 = G__39103;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38680){
var map__38681 = p__38680;
var map__38681__$1 = cljs.core.__destructure_map(map__38681);
var msg = map__38681__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38681__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38682(s__38683){
return (new cljs.core.LazySeq(null,(function (){
var s__38683__$1 = s__38683;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38683__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38688 = cljs.core.first(xs__6360__auto__);
var map__38688__$1 = cljs.core.__destructure_map(map__38688);
var src = map__38688__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38688__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38688__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38683__$1,map__38688,map__38688__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38681,map__38681__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38682_$_iter__38684(s__38685){
return (new cljs.core.LazySeq(null,((function (s__38683__$1,map__38688,map__38688__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38681,map__38681__$1,msg,info,reload_info){
return (function (){
var s__38685__$1 = s__38685;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38685__$1);
if(temp__5804__auto____$1){
var s__38685__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38685__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38685__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38687 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38686 = (0);
while(true){
if((i__38686 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38686);
cljs.core.chunk_append(b__38687,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39107 = (i__38686 + (1));
i__38686 = G__39107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38687),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38682_$_iter__38684(cljs.core.chunk_rest(s__38685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38687),null);
}
} else {
var warning = cljs.core.first(s__38685__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38682_$_iter__38684(cljs.core.rest(s__38685__$2)));
}
} else {
return null;
}
break;
}
});})(s__38683__$1,map__38688,map__38688__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38681,map__38681__$1,msg,info,reload_info))
,null,null));
});})(s__38683__$1,map__38688,map__38688__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38681,map__38681__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38682(cljs.core.rest(s__38683__$1)));
} else {
var G__39108 = cljs.core.rest(s__38683__$1);
s__38683__$1 = G__39108;
continue;
}
} else {
var G__39109 = cljs.core.rest(s__38683__$1);
s__38683__$1 = G__39109;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38689_39110 = cljs.core.seq(warnings);
var chunk__38690_39111 = null;
var count__38691_39112 = (0);
var i__38692_39113 = (0);
while(true){
if((i__38692_39113 < count__38691_39112)){
var map__38695_39114 = chunk__38690_39111.cljs$core$IIndexed$_nth$arity$2(null,i__38692_39113);
var map__38695_39115__$1 = cljs.core.__destructure_map(map__38695_39114);
var w_39116 = map__38695_39115__$1;
var msg_39117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38695_39115__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38695_39115__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38695_39115__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38695_39115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39120)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39118),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39119),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39117__$1)].join(''));


var G__39121 = seq__38689_39110;
var G__39122 = chunk__38690_39111;
var G__39123 = count__38691_39112;
var G__39124 = (i__38692_39113 + (1));
seq__38689_39110 = G__39121;
chunk__38690_39111 = G__39122;
count__38691_39112 = G__39123;
i__38692_39113 = G__39124;
continue;
} else {
var temp__5804__auto___39125 = cljs.core.seq(seq__38689_39110);
if(temp__5804__auto___39125){
var seq__38689_39126__$1 = temp__5804__auto___39125;
if(cljs.core.chunked_seq_QMARK_(seq__38689_39126__$1)){
var c__5568__auto___39127 = cljs.core.chunk_first(seq__38689_39126__$1);
var G__39128 = cljs.core.chunk_rest(seq__38689_39126__$1);
var G__39129 = c__5568__auto___39127;
var G__39130 = cljs.core.count(c__5568__auto___39127);
var G__39131 = (0);
seq__38689_39110 = G__39128;
chunk__38690_39111 = G__39129;
count__38691_39112 = G__39130;
i__38692_39113 = G__39131;
continue;
} else {
var map__38697_39132 = cljs.core.first(seq__38689_39126__$1);
var map__38697_39133__$1 = cljs.core.__destructure_map(map__38697_39132);
var w_39134 = map__38697_39133__$1;
var msg_39135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39133__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39133__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39133__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39138)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39136),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39137),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39135__$1)].join(''));


var G__39139 = cljs.core.next(seq__38689_39126__$1);
var G__39140 = null;
var G__39141 = (0);
var G__39142 = (0);
seq__38689_39110 = G__39139;
chunk__38690_39111 = G__39140;
count__38691_39112 = G__39141;
i__38692_39113 = G__39142;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38679_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38679_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38703){
var map__38704 = p__38703;
var map__38704__$1 = cljs.core.__destructure_map(map__38704);
var msg = map__38704__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38705 = cljs.core.seq(updates);
var chunk__38707 = null;
var count__38708 = (0);
var i__38709 = (0);
while(true){
if((i__38709 < count__38708)){
var path = chunk__38707.cljs$core$IIndexed$_nth$arity$2(null,i__38709);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38868_39144 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38872_39145 = null;
var count__38873_39146 = (0);
var i__38874_39147 = (0);
while(true){
if((i__38874_39147 < count__38873_39146)){
var node_39148 = chunk__38872_39145.cljs$core$IIndexed$_nth$arity$2(null,i__38874_39147);
if(cljs.core.not(node_39148.shadow$old)){
var path_match_39149 = shadow.cljs.devtools.client.browser.match_paths(node_39148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39149)){
var new_link_39150 = (function (){var G__38902 = node_39148.cloneNode(true);
G__38902.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38902;
})();
(node_39148.shadow$old = true);

(new_link_39150.onload = ((function (seq__38868_39144,chunk__38872_39145,count__38873_39146,i__38874_39147,seq__38705,chunk__38707,count__38708,i__38709,new_link_39150,path_match_39149,node_39148,path,map__38704,map__38704__$1,msg,updates,reload_info){
return (function (e){
var seq__38903_39154 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38905_39155 = null;
var count__38906_39156 = (0);
var i__38907_39157 = (0);
while(true){
if((i__38907_39157 < count__38906_39156)){
var map__38911_39158 = chunk__38905_39155.cljs$core$IIndexed$_nth$arity$2(null,i__38907_39157);
var map__38911_39159__$1 = cljs.core.__destructure_map(map__38911_39158);
var task_39160 = map__38911_39159__$1;
var fn_str_39161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911_39159__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911_39159__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39163 = goog.getObjectByName(fn_str_39161,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39162)].join(''));

(fn_obj_39163.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39163.cljs$core$IFn$_invoke$arity$2(path,new_link_39150) : fn_obj_39163.call(null,path,new_link_39150));


var G__39164 = seq__38903_39154;
var G__39165 = chunk__38905_39155;
var G__39166 = count__38906_39156;
var G__39167 = (i__38907_39157 + (1));
seq__38903_39154 = G__39164;
chunk__38905_39155 = G__39165;
count__38906_39156 = G__39166;
i__38907_39157 = G__39167;
continue;
} else {
var temp__5804__auto___39168 = cljs.core.seq(seq__38903_39154);
if(temp__5804__auto___39168){
var seq__38903_39169__$1 = temp__5804__auto___39168;
if(cljs.core.chunked_seq_QMARK_(seq__38903_39169__$1)){
var c__5568__auto___39170 = cljs.core.chunk_first(seq__38903_39169__$1);
var G__39171 = cljs.core.chunk_rest(seq__38903_39169__$1);
var G__39172 = c__5568__auto___39170;
var G__39173 = cljs.core.count(c__5568__auto___39170);
var G__39174 = (0);
seq__38903_39154 = G__39171;
chunk__38905_39155 = G__39172;
count__38906_39156 = G__39173;
i__38907_39157 = G__39174;
continue;
} else {
var map__38912_39175 = cljs.core.first(seq__38903_39169__$1);
var map__38912_39176__$1 = cljs.core.__destructure_map(map__38912_39175);
var task_39177 = map__38912_39176__$1;
var fn_str_39178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912_39176__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38912_39176__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39180 = goog.getObjectByName(fn_str_39178,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39179)].join(''));

(fn_obj_39180.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39180.cljs$core$IFn$_invoke$arity$2(path,new_link_39150) : fn_obj_39180.call(null,path,new_link_39150));


var G__39182 = cljs.core.next(seq__38903_39169__$1);
var G__39183 = null;
var G__39184 = (0);
var G__39185 = (0);
seq__38903_39154 = G__39182;
chunk__38905_39155 = G__39183;
count__38906_39156 = G__39184;
i__38907_39157 = G__39185;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39148);
});})(seq__38868_39144,chunk__38872_39145,count__38873_39146,i__38874_39147,seq__38705,chunk__38707,count__38708,i__38709,new_link_39150,path_match_39149,node_39148,path,map__38704,map__38704__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39149], 0));

goog.dom.insertSiblingAfter(new_link_39150,node_39148);


var G__39186 = seq__38868_39144;
var G__39187 = chunk__38872_39145;
var G__39188 = count__38873_39146;
var G__39189 = (i__38874_39147 + (1));
seq__38868_39144 = G__39186;
chunk__38872_39145 = G__39187;
count__38873_39146 = G__39188;
i__38874_39147 = G__39189;
continue;
} else {
var G__39190 = seq__38868_39144;
var G__39191 = chunk__38872_39145;
var G__39192 = count__38873_39146;
var G__39193 = (i__38874_39147 + (1));
seq__38868_39144 = G__39190;
chunk__38872_39145 = G__39191;
count__38873_39146 = G__39192;
i__38874_39147 = G__39193;
continue;
}
} else {
var G__39194 = seq__38868_39144;
var G__39195 = chunk__38872_39145;
var G__39196 = count__38873_39146;
var G__39197 = (i__38874_39147 + (1));
seq__38868_39144 = G__39194;
chunk__38872_39145 = G__39195;
count__38873_39146 = G__39196;
i__38874_39147 = G__39197;
continue;
}
} else {
var temp__5804__auto___39198 = cljs.core.seq(seq__38868_39144);
if(temp__5804__auto___39198){
var seq__38868_39199__$1 = temp__5804__auto___39198;
if(cljs.core.chunked_seq_QMARK_(seq__38868_39199__$1)){
var c__5568__auto___39200 = cljs.core.chunk_first(seq__38868_39199__$1);
var G__39201 = cljs.core.chunk_rest(seq__38868_39199__$1);
var G__39202 = c__5568__auto___39200;
var G__39203 = cljs.core.count(c__5568__auto___39200);
var G__39204 = (0);
seq__38868_39144 = G__39201;
chunk__38872_39145 = G__39202;
count__38873_39146 = G__39203;
i__38874_39147 = G__39204;
continue;
} else {
var node_39205 = cljs.core.first(seq__38868_39199__$1);
if(cljs.core.not(node_39205.shadow$old)){
var path_match_39206 = shadow.cljs.devtools.client.browser.match_paths(node_39205.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39206)){
var new_link_39207 = (function (){var G__38913 = node_39205.cloneNode(true);
G__38913.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39206),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38913;
})();
(node_39205.shadow$old = true);

(new_link_39207.onload = ((function (seq__38868_39144,chunk__38872_39145,count__38873_39146,i__38874_39147,seq__38705,chunk__38707,count__38708,i__38709,new_link_39207,path_match_39206,node_39205,seq__38868_39199__$1,temp__5804__auto___39198,path,map__38704,map__38704__$1,msg,updates,reload_info){
return (function (e){
var seq__38914_39208 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38916_39209 = null;
var count__38917_39210 = (0);
var i__38918_39211 = (0);
while(true){
if((i__38918_39211 < count__38917_39210)){
var map__38923_39212 = chunk__38916_39209.cljs$core$IIndexed$_nth$arity$2(null,i__38918_39211);
var map__38923_39213__$1 = cljs.core.__destructure_map(map__38923_39212);
var task_39214 = map__38923_39213__$1;
var fn_str_39215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38923_39213__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38923_39213__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39217 = goog.getObjectByName(fn_str_39215,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39216)].join(''));

(fn_obj_39217.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39217.cljs$core$IFn$_invoke$arity$2(path,new_link_39207) : fn_obj_39217.call(null,path,new_link_39207));


var G__39218 = seq__38914_39208;
var G__39219 = chunk__38916_39209;
var G__39220 = count__38917_39210;
var G__39221 = (i__38918_39211 + (1));
seq__38914_39208 = G__39218;
chunk__38916_39209 = G__39219;
count__38917_39210 = G__39220;
i__38918_39211 = G__39221;
continue;
} else {
var temp__5804__auto___39222__$1 = cljs.core.seq(seq__38914_39208);
if(temp__5804__auto___39222__$1){
var seq__38914_39223__$1 = temp__5804__auto___39222__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38914_39223__$1)){
var c__5568__auto___39224 = cljs.core.chunk_first(seq__38914_39223__$1);
var G__39225 = cljs.core.chunk_rest(seq__38914_39223__$1);
var G__39226 = c__5568__auto___39224;
var G__39227 = cljs.core.count(c__5568__auto___39224);
var G__39228 = (0);
seq__38914_39208 = G__39225;
chunk__38916_39209 = G__39226;
count__38917_39210 = G__39227;
i__38918_39211 = G__39228;
continue;
} else {
var map__38926_39230 = cljs.core.first(seq__38914_39223__$1);
var map__38926_39231__$1 = cljs.core.__destructure_map(map__38926_39230);
var task_39232 = map__38926_39231__$1;
var fn_str_39233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39231__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926_39231__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39235 = goog.getObjectByName(fn_str_39233,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39234)].join(''));

(fn_obj_39235.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39235.cljs$core$IFn$_invoke$arity$2(path,new_link_39207) : fn_obj_39235.call(null,path,new_link_39207));


var G__39236 = cljs.core.next(seq__38914_39223__$1);
var G__39237 = null;
var G__39238 = (0);
var G__39239 = (0);
seq__38914_39208 = G__39236;
chunk__38916_39209 = G__39237;
count__38917_39210 = G__39238;
i__38918_39211 = G__39239;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39205);
});})(seq__38868_39144,chunk__38872_39145,count__38873_39146,i__38874_39147,seq__38705,chunk__38707,count__38708,i__38709,new_link_39207,path_match_39206,node_39205,seq__38868_39199__$1,temp__5804__auto___39198,path,map__38704,map__38704__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39206], 0));

goog.dom.insertSiblingAfter(new_link_39207,node_39205);


var G__39240 = cljs.core.next(seq__38868_39199__$1);
var G__39241 = null;
var G__39242 = (0);
var G__39243 = (0);
seq__38868_39144 = G__39240;
chunk__38872_39145 = G__39241;
count__38873_39146 = G__39242;
i__38874_39147 = G__39243;
continue;
} else {
var G__39244 = cljs.core.next(seq__38868_39199__$1);
var G__39245 = null;
var G__39246 = (0);
var G__39247 = (0);
seq__38868_39144 = G__39244;
chunk__38872_39145 = G__39245;
count__38873_39146 = G__39246;
i__38874_39147 = G__39247;
continue;
}
} else {
var G__39248 = cljs.core.next(seq__38868_39199__$1);
var G__39249 = null;
var G__39250 = (0);
var G__39251 = (0);
seq__38868_39144 = G__39248;
chunk__38872_39145 = G__39249;
count__38873_39146 = G__39250;
i__38874_39147 = G__39251;
continue;
}
}
} else {
}
}
break;
}


var G__39252 = seq__38705;
var G__39253 = chunk__38707;
var G__39254 = count__38708;
var G__39255 = (i__38709 + (1));
seq__38705 = G__39252;
chunk__38707 = G__39253;
count__38708 = G__39254;
i__38709 = G__39255;
continue;
} else {
var G__39256 = seq__38705;
var G__39257 = chunk__38707;
var G__39258 = count__38708;
var G__39259 = (i__38709 + (1));
seq__38705 = G__39256;
chunk__38707 = G__39257;
count__38708 = G__39258;
i__38709 = G__39259;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38705);
if(temp__5804__auto__){
var seq__38705__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38705__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38705__$1);
var G__39260 = cljs.core.chunk_rest(seq__38705__$1);
var G__39261 = c__5568__auto__;
var G__39262 = cljs.core.count(c__5568__auto__);
var G__39263 = (0);
seq__38705 = G__39260;
chunk__38707 = G__39261;
count__38708 = G__39262;
i__38709 = G__39263;
continue;
} else {
var path = cljs.core.first(seq__38705__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38927_39264 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38931_39265 = null;
var count__38932_39266 = (0);
var i__38933_39267 = (0);
while(true){
if((i__38933_39267 < count__38932_39266)){
var node_39268 = chunk__38931_39265.cljs$core$IIndexed$_nth$arity$2(null,i__38933_39267);
if(cljs.core.not(node_39268.shadow$old)){
var path_match_39269 = shadow.cljs.devtools.client.browser.match_paths(node_39268.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39269)){
var new_link_39270 = (function (){var G__39011 = node_39268.cloneNode(true);
G__39011.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39269),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39011;
})();
(node_39268.shadow$old = true);

(new_link_39270.onload = ((function (seq__38927_39264,chunk__38931_39265,count__38932_39266,i__38933_39267,seq__38705,chunk__38707,count__38708,i__38709,new_link_39270,path_match_39269,node_39268,path,seq__38705__$1,temp__5804__auto__,map__38704,map__38704__$1,msg,updates,reload_info){
return (function (e){
var seq__39012_39271 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39014_39272 = null;
var count__39015_39273 = (0);
var i__39016_39274 = (0);
while(true){
if((i__39016_39274 < count__39015_39273)){
var map__39022_39275 = chunk__39014_39272.cljs$core$IIndexed$_nth$arity$2(null,i__39016_39274);
var map__39022_39276__$1 = cljs.core.__destructure_map(map__39022_39275);
var task_39277 = map__39022_39276__$1;
var fn_str_39278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022_39276__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39022_39276__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39280 = goog.getObjectByName(fn_str_39278,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39279)].join(''));

(fn_obj_39280.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39280.cljs$core$IFn$_invoke$arity$2(path,new_link_39270) : fn_obj_39280.call(null,path,new_link_39270));


var G__39281 = seq__39012_39271;
var G__39282 = chunk__39014_39272;
var G__39283 = count__39015_39273;
var G__39284 = (i__39016_39274 + (1));
seq__39012_39271 = G__39281;
chunk__39014_39272 = G__39282;
count__39015_39273 = G__39283;
i__39016_39274 = G__39284;
continue;
} else {
var temp__5804__auto___39285__$1 = cljs.core.seq(seq__39012_39271);
if(temp__5804__auto___39285__$1){
var seq__39012_39286__$1 = temp__5804__auto___39285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39012_39286__$1)){
var c__5568__auto___39287 = cljs.core.chunk_first(seq__39012_39286__$1);
var G__39290 = cljs.core.chunk_rest(seq__39012_39286__$1);
var G__39291 = c__5568__auto___39287;
var G__39292 = cljs.core.count(c__5568__auto___39287);
var G__39293 = (0);
seq__39012_39271 = G__39290;
chunk__39014_39272 = G__39291;
count__39015_39273 = G__39292;
i__39016_39274 = G__39293;
continue;
} else {
var map__39023_39294 = cljs.core.first(seq__39012_39286__$1);
var map__39023_39295__$1 = cljs.core.__destructure_map(map__39023_39294);
var task_39296 = map__39023_39295__$1;
var fn_str_39297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023_39295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39023_39295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39299 = goog.getObjectByName(fn_str_39297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39298)].join(''));

(fn_obj_39299.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39299.cljs$core$IFn$_invoke$arity$2(path,new_link_39270) : fn_obj_39299.call(null,path,new_link_39270));


var G__39300 = cljs.core.next(seq__39012_39286__$1);
var G__39301 = null;
var G__39302 = (0);
var G__39303 = (0);
seq__39012_39271 = G__39300;
chunk__39014_39272 = G__39301;
count__39015_39273 = G__39302;
i__39016_39274 = G__39303;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39268);
});})(seq__38927_39264,chunk__38931_39265,count__38932_39266,i__38933_39267,seq__38705,chunk__38707,count__38708,i__38709,new_link_39270,path_match_39269,node_39268,path,seq__38705__$1,temp__5804__auto__,map__38704,map__38704__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39269], 0));

goog.dom.insertSiblingAfter(new_link_39270,node_39268);


var G__39304 = seq__38927_39264;
var G__39305 = chunk__38931_39265;
var G__39306 = count__38932_39266;
var G__39307 = (i__38933_39267 + (1));
seq__38927_39264 = G__39304;
chunk__38931_39265 = G__39305;
count__38932_39266 = G__39306;
i__38933_39267 = G__39307;
continue;
} else {
var G__39308 = seq__38927_39264;
var G__39309 = chunk__38931_39265;
var G__39310 = count__38932_39266;
var G__39311 = (i__38933_39267 + (1));
seq__38927_39264 = G__39308;
chunk__38931_39265 = G__39309;
count__38932_39266 = G__39310;
i__38933_39267 = G__39311;
continue;
}
} else {
var G__39312 = seq__38927_39264;
var G__39313 = chunk__38931_39265;
var G__39314 = count__38932_39266;
var G__39315 = (i__38933_39267 + (1));
seq__38927_39264 = G__39312;
chunk__38931_39265 = G__39313;
count__38932_39266 = G__39314;
i__38933_39267 = G__39315;
continue;
}
} else {
var temp__5804__auto___39316__$1 = cljs.core.seq(seq__38927_39264);
if(temp__5804__auto___39316__$1){
var seq__38927_39317__$1 = temp__5804__auto___39316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38927_39317__$1)){
var c__5568__auto___39318 = cljs.core.chunk_first(seq__38927_39317__$1);
var G__39319 = cljs.core.chunk_rest(seq__38927_39317__$1);
var G__39320 = c__5568__auto___39318;
var G__39321 = cljs.core.count(c__5568__auto___39318);
var G__39322 = (0);
seq__38927_39264 = G__39319;
chunk__38931_39265 = G__39320;
count__38932_39266 = G__39321;
i__38933_39267 = G__39322;
continue;
} else {
var node_39323 = cljs.core.first(seq__38927_39317__$1);
if(cljs.core.not(node_39323.shadow$old)){
var path_match_39324 = shadow.cljs.devtools.client.browser.match_paths(node_39323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39324)){
var new_link_39325 = (function (){var G__39024 = node_39323.cloneNode(true);
G__39024.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39024;
})();
(node_39323.shadow$old = true);

(new_link_39325.onload = ((function (seq__38927_39264,chunk__38931_39265,count__38932_39266,i__38933_39267,seq__38705,chunk__38707,count__38708,i__38709,new_link_39325,path_match_39324,node_39323,seq__38927_39317__$1,temp__5804__auto___39316__$1,path,seq__38705__$1,temp__5804__auto__,map__38704,map__38704__$1,msg,updates,reload_info){
return (function (e){
var seq__39025_39326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__39027_39327 = null;
var count__39028_39328 = (0);
var i__39029_39329 = (0);
while(true){
if((i__39029_39329 < count__39028_39328)){
var map__39033_39330 = chunk__39027_39327.cljs$core$IIndexed$_nth$arity$2(null,i__39029_39329);
var map__39033_39331__$1 = cljs.core.__destructure_map(map__39033_39330);
var task_39332 = map__39033_39331__$1;
var fn_str_39333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033_39331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39033_39331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39335 = goog.getObjectByName(fn_str_39333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39334)].join(''));

(fn_obj_39335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39335.cljs$core$IFn$_invoke$arity$2(path,new_link_39325) : fn_obj_39335.call(null,path,new_link_39325));


var G__39336 = seq__39025_39326;
var G__39337 = chunk__39027_39327;
var G__39338 = count__39028_39328;
var G__39339 = (i__39029_39329 + (1));
seq__39025_39326 = G__39336;
chunk__39027_39327 = G__39337;
count__39028_39328 = G__39338;
i__39029_39329 = G__39339;
continue;
} else {
var temp__5804__auto___39340__$2 = cljs.core.seq(seq__39025_39326);
if(temp__5804__auto___39340__$2){
var seq__39025_39341__$1 = temp__5804__auto___39340__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39025_39341__$1)){
var c__5568__auto___39342 = cljs.core.chunk_first(seq__39025_39341__$1);
var G__39343 = cljs.core.chunk_rest(seq__39025_39341__$1);
var G__39344 = c__5568__auto___39342;
var G__39345 = cljs.core.count(c__5568__auto___39342);
var G__39346 = (0);
seq__39025_39326 = G__39343;
chunk__39027_39327 = G__39344;
count__39028_39328 = G__39345;
i__39029_39329 = G__39346;
continue;
} else {
var map__39036_39347 = cljs.core.first(seq__39025_39341__$1);
var map__39036_39348__$1 = cljs.core.__destructure_map(map__39036_39347);
var task_39349 = map__39036_39348__$1;
var fn_str_39350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39036_39348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39036_39348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39352 = goog.getObjectByName(fn_str_39350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39351)].join(''));

(fn_obj_39352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39352.cljs$core$IFn$_invoke$arity$2(path,new_link_39325) : fn_obj_39352.call(null,path,new_link_39325));


var G__39353 = cljs.core.next(seq__39025_39341__$1);
var G__39354 = null;
var G__39355 = (0);
var G__39356 = (0);
seq__39025_39326 = G__39353;
chunk__39027_39327 = G__39354;
count__39028_39328 = G__39355;
i__39029_39329 = G__39356;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39323);
});})(seq__38927_39264,chunk__38931_39265,count__38932_39266,i__38933_39267,seq__38705,chunk__38707,count__38708,i__38709,new_link_39325,path_match_39324,node_39323,seq__38927_39317__$1,temp__5804__auto___39316__$1,path,seq__38705__$1,temp__5804__auto__,map__38704,map__38704__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39324], 0));

goog.dom.insertSiblingAfter(new_link_39325,node_39323);


var G__39357 = cljs.core.next(seq__38927_39317__$1);
var G__39358 = null;
var G__39359 = (0);
var G__39360 = (0);
seq__38927_39264 = G__39357;
chunk__38931_39265 = G__39358;
count__38932_39266 = G__39359;
i__38933_39267 = G__39360;
continue;
} else {
var G__39361 = cljs.core.next(seq__38927_39317__$1);
var G__39362 = null;
var G__39363 = (0);
var G__39364 = (0);
seq__38927_39264 = G__39361;
chunk__38931_39265 = G__39362;
count__38932_39266 = G__39363;
i__38933_39267 = G__39364;
continue;
}
} else {
var G__39365 = cljs.core.next(seq__38927_39317__$1);
var G__39366 = null;
var G__39367 = (0);
var G__39368 = (0);
seq__38927_39264 = G__39365;
chunk__38931_39265 = G__39366;
count__38932_39266 = G__39367;
i__38933_39267 = G__39368;
continue;
}
}
} else {
}
}
break;
}


var G__39370 = cljs.core.next(seq__38705__$1);
var G__39371 = null;
var G__39372 = (0);
var G__39373 = (0);
seq__38705 = G__39370;
chunk__38707 = G__39371;
count__38708 = G__39372;
i__38709 = G__39373;
continue;
} else {
var G__39374 = cljs.core.next(seq__38705__$1);
var G__39375 = null;
var G__39376 = (0);
var G__39377 = (0);
seq__38705 = G__39374;
chunk__38707 = G__39375;
count__38708 = G__39376;
i__38709 = G__39377;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__39042){
var map__39043 = p__39042;
var map__39043__$1 = cljs.core.__destructure_map(map__39043);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39044,done,error){
var map__39045 = p__39044;
var map__39045__$1 = cljs.core.__destructure_map(map__39045);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39045__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39046,done,error){
var map__39047 = p__39046;
var map__39047__$1 = cljs.core.__destructure_map(map__39047);
var msg = map__39047__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39048){
var map__39049 = p__39048;
var map__39049__$1 = cljs.core.__destructure_map(map__39049);
var src = map__39049__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39049__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39055 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39055) : done.call(null,G__39055));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39056){
var map__39057 = p__39056;
var map__39057__$1 = cljs.core.__destructure_map(map__39057);
var msg__$1 = map__39057__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39057__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39058){var ex = e39058;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39059){
var map__39060 = p__39059;
var map__39060__$1 = cljs.core.__destructure_map(map__39060);
var env = map__39060__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39065){
var map__39066 = p__39065;
var map__39066__$1 = cljs.core.__destructure_map(map__39066);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39066__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39066__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39067){
var map__39068 = p__39067;
var map__39068__$1 = cljs.core.__destructure_map(map__39068);
var svc = map__39068__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39068__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
