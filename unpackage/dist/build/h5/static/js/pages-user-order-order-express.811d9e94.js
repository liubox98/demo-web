(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-order-express"],{"0a2d":function(t,e,a){var n=a("a7af");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("43a4d2e8",n,!0,{sourceMap:!1,shadowMode:!1})},"1c9f":function(t,e,a){"use strict";a.r(e);var n=a("cad8"),i=a("39e9");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("32f8");var o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"36d7706d",null,!1,n["a"],void 0);e["default"]=r.exports},"32f8":function(t,e,a){"use strict";var n=a("0a2d"),i=a.n(n);i.a},"39e9":function(t,e,a){"use strict";a.r(e);var n=a("453b"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"453b":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{empty:!1,order_id:"",expressData:{}}},watch:{expressData:function(t){var e=!(t&&t.data);this.empty!==e&&(this.empty=e)}},onPageScroll:function(t){this.$refs.usetop.change(t.scrollTop)},onLoad:function(t){this.order_id=t.order_id,this.order_id||this.$api.msg("订单号不存在"),this.loadData()},onShow:function(){},methods:{loadData:function(){var t=this;this.$func.usemall.call("order/express",{order_id:this.order_id}).then((function(e){200==e.code&&(t.expressData=e.datas)}))},copy:function(){uni.setClipboardData({data:this.expressData.nu,success:function(t){uni.getClipboardData({success:function(t){uni.showToast({title:"复制成功"})}})}})}}};e.default=n},"61fe":function(t,e,a){"use strict";a.r(e);var n=a("89d6"),i=a("ef21");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("be0b");var o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"74bbadd3",null,!1,n["a"],void 0);e["default"]=r.exports},"80c0":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7db0"),a("d3b7");var n={props:{eStyle:{type:String,default:"square"},eType:{type:String,default:"other"},tip:{type:String,default:"暂无数据"},btnTip:{type:String,default:"去逛逛"},btnGoto:{type:String,default:"/pages/tabbar/home"},auto:{type:Boolean,default:!0},height:{type:String,default:"100vh"}},computed:{dtype:{get:function(){var t=this;console.log("get dtype",arguments);var e=this.imgs.find((function(e){return e.type==t.eType}));return this.imgurl=e?e.url:this.imgurl_dft,this.eType},set:function(t){console.log("set dtype",arguments)}}},data:function(){return{imgurl_dft:"/static/images/empty/empty.jpg",imgurl:"",imgs:[{type:"cart",url:"/static/images/empty/cart.jpg"},{type:"search",url:"/static/images/empty/search.jpg"},{type:"other",url:"/static/images/empty/empty.jpg"}]}},methods:{to:function(){this.$emit("goto",{type:"goto"}),this.auto&&uni.switchTab({url:this.btnGoto})}}};e.default=n},"835c":function(t,e,a){var n=a("e89f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("c5e69b4c",n,!0,{sourceMap:!1,shadowMode:!1})},"89d6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"use-totop fixed-top animated",class:t.visible?"fade-in":"dn",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.totop.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconzhiding"})],1)},i=[]},9338:function(t,e,a){"use strict";var n=a("835c"),i=a.n(n);i.a},"9a20":function(t,e,a){"use strict";a.r(e);var n=a("80c0"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},a7af:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'.copy[data-v-36d7706d]{margin-left:%?30?%;padding:%?10?% %?40?%;background-color:#f1f1f1;border-radius:%?40?%;font-size:%?24?%}.item[data-v-36d7706d]{align-items:baseline}.item[data-v-36d7706d]:not(:last-child)::before{content:" ";border-left:1px solid #d3d3d3;position:absolute;bottom:%?-14?%;top:%?14?%;left:%?10?%;border-left-width:1px;border-left-style:solid;border-left-color:#d3d3d3}.item.active[data-v-36d7706d]::before{border-left:1px solid #ff6a6c}.circle[data-v-36d7706d]{width:%?20?%;height:%?20?%;position:absolute;background:#d3d3d3;border-radius:50%;top:%?14?%}.circle.active[data-v-36d7706d]{background:#ff6a6c!important;-webkit-transform:scale(1.1);transform:scale(1.1)}.circle.active[data-v-36d7706d]::after{content:" ";background:rgba(255,106,108,.5)!important;-webkit-transform:scale(1.6);transform:scale(1.6);width:%?20?%;height:%?20?%;position:absolute;border-radius:50%}',""]),t.exports=e},b0af:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{top:{type:Number,default:100},right:{type:String,default:"30"},bottom:{type:String,default:"30"},duration:{type:Number,default:120},scrollTop:{type:Number,default:0}},watch:{scrollTop:function(t,e){this.s_top=t,this.change()}},data:function(){return{s_top:0,visible:!1}},methods:{totop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("to",{type:"to",scrollTop:this.s_top})},change:function(t){this.s_top=t,this.s_top>this.top?this.visible||(this.visible=!0):this.visible&&(this.visible=!1)}}};e.default=n},bc98:function(t,e,a){var n=a("c578");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("718bbecc",n,!0,{sourceMap:!1,shadowMode:!1})},be0b:function(t,e,a){"use strict";var n=a("bc98"),i=a.n(n);i.a},c276:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"use-empty-container tac",class:"round"==t.eStyle?"padding-sm":"",style:{height:t.height}},[a("v-uni-view",{staticClass:"use-empty h-full dflex-c dflex-flow-c",class:"round"==t.eStyle?"round border-radius bg-main":""},[t.imgurl?a("v-uni-image",{attrs:{src:t.imgurl}}):t._e(),t.tip?a("v-uni-view",{staticClass:"title padding-sm"},[t._v(t._s(t.tip))]):t._e(),a("v-uni-button",{staticClass:"no-border use-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to.apply(void 0,arguments)}}},[t._v(t._s(t.btnTip))])],1)],1)},i=[]},c578:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},cad8:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={useEmpty:a("fdd1").default,useTotop:a("61fe").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bg-drak",class:[t.empty?"":"padding-tb"]},[t.empty?a("use-empty",{attrs:{"e-style":"round",tip:"无物流数据"}}):t._e(),t.expressData&&t.expressData.data?a("v-uni-view",{staticClass:"padding-lr"},[a("v-uni-view",{staticClass:"border-radius padding margin-bottom-sm bg-main"},[a("v-uni-view",{staticClass:"fs-lg fwb"},[t._v(t._s(t.expressData.company))]),a("v-uni-view",[t._v("运单号："+t._s(t.expressData.nu)),a("v-uni-text",{staticClass:"copy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v("复制")])],1)],1)],1):t._e(),t.expressData&&t.expressData.data?a("v-uni-view",{staticClass:"padding-lr"},[a("v-uni-view",{staticClass:"product border-radius padding margin-bottom-sm bg-main",staticStyle:{"padding-bottom":"15rpx"}},t._l(t.expressData.data,(function(e,n){return a("v-uni-view",{key:n,staticClass:"dflex item pos-r",class:{active:0==n,fwb:0==n}},[a("v-uni-view",{staticClass:"circle",class:{active:0==n}}),a("v-uni-view",{staticClass:"margin-left-lg pos-r w-full margin-bottom",class:{"ft-dark":n>0}},[a("v-uni-view",[t._v(t._s(e.context))]),a("v-uni-view",{staticClass:"margin-top-xs fs-xs"},[t._v(t._s(e.time))])],1)],1)})),1)],1):t._e(),a("use-totop",{ref:"usetop"})],1)},s=[]},e89f:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.use-empty-container .use-empty .round[data-v-66eeddfb]{padding:25% %?50?%}.use-empty-container .use-empty .round uni-button[data-v-66eeddfb]{width:%?220?%}.use-empty-container .use-empty uni-image[data-v-66eeddfb]{width:%?160?%;height:%?160?%}.use-empty-container .use-empty .title[data-v-66eeddfb]{color:silver}.use-empty-container .use-empty .use-btn[data-v-66eeddfb]{font-size:%?30?%;display:inline-block}',""]),t.exports=e},ef21:function(t,e,a){"use strict";a.r(e);var n=a("b0af"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},fdd1:function(t,e,a){"use strict";a.r(e);var n=a("c276"),i=a("9a20");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("9338");var o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"66eeddfb",null,!1,n["a"],void 0);e["default"]=r.exports}}]);