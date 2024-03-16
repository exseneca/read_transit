goog.provide('view_transit.home');
view_transit.home.edn = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
view_transit.home.reset_edn = (function view_transit$home$reset_edn(){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var out = cognitect.transit.read(reader,document.getElementById("transit").value);
return cljs.core.reset_BANG_(view_transit.home.edn,out);
});
view_transit.home.home = (function view_transit$home$home(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Read transit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"E.g"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"foo","foo",1268894036),"bar",new cljs.core.Keyword(null,"baz","baz",-1134894686),true,new cljs.core.Keyword(null,"why","why",448287271),true,new cljs.core.Keyword(null,"fooey","fooey",2075475460),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),false,new cljs.core.Keyword(null,"b","b",1482224470),"lorem ipsum"], null),new cljs.core.Keyword(null,"universal-answer","universal-answer",1616291743),(42)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"transit"], null),"Transit:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"id","id",-1388402092),"transit",new cljs.core.Keyword(null,"name","name",1843675177),"transit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Read",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.preventDefault();

return view_transit.home.reset_edn();
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref(view_transit.home.edn))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28223_28227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28224_28228 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28225_28229 = true;
var _STAR_print_fn_STAR__temp_val__28226_28230 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28225_28229);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28226_28230);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(view_transit.home.edn));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28224_28228);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28223_28227);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()], null):null)], null);
});
view_transit.home.init = (function view_transit$home$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_transit.home.home], null),document.getElementById("root"));
});

//# sourceMappingURL=view_transit.home.js.map
