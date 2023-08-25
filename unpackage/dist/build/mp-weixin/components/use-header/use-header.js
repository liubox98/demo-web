(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/use-header/use-header"],{"0fc8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{fixed:{type:[Number,Boolean],default:!1},placeholder:{type:[Number,Boolean],default:!0},searchAuto:{type:[Number,Boolean],default:!0},searchTip:{type:String,default:"搜索关键字"}},data:function(){return{}},methods:{search:function(){this.$emit("search",{type:"search"}),this.searchAuto&&e.navigateTo({url:"/pages/home/search/search"})}}};t.default=n}).call(this,n("543d")["default"])},"1d2c":function(e,t,n){},3441:function(e,t,n){"use strict";n.r(t);var a=n("bdcf"),u=n("9a2f");for(var r in u)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(r);n("89b0");var c=n("f0c5"),f=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=f.exports},"89b0":function(e,t,n){"use strict";var a=n("1d2c"),u=n.n(a);u.a},"9a2f":function(e,t,n){"use strict";n.r(t);var a=n("0fc8"),u=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=u.a},bdcf:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/use-header/use-header-create-component',
    {
        'components/use-header/use-header-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3441"))
        })
    },
    [['components/use-header/use-header-create-component']]
]);
