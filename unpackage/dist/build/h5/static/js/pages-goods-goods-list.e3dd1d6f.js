(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-list"],{"14b0":function(t,e,a){var n=a("8c92");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7cbc9176",n,!0,{sourceMap:!1,shadowMode:!1})},"14c8":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("159b"),a("14d9"),a("99af");var i=n(a("c7eb")),o=n(a("2909")),s=n(a("1da1")),r={data:function(){return{empty:!1,headerPosition:"fixed",filterIndex:0,priceOrder:0,goodsDatas:[],loadmoreType:"more",reqdata:{page:1,rows:8,sidx:"sort",sord:"asc"},scrollTop:0}},watch:{goodsDatas:function(t){var e=0===t.length;this.empty!==e&&(this.empty=e)}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute",this.$refs.usetop.change(t.scrollTop)},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},onLoad:function(t){var e="搜索列表";for(var a in t&&t.hot?e="热门推荐":t&&t.limited&&(e="限时精选"),uni.setNavigationBarTitle({title:e}),t)this.reqdata[a]=decodeURIComponent(t[a]);this.loadData()},methods:{loadData:function(){var t=arguments,e=this;return(0,s.default)((0,i.default)().mark((function a(){var n,s;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:"add",s=t.length>1?t[1]:void 0,"loading"!==e.loadmoreType){a.next=4;break}return a.abrupt("return");case 4:if(1!=s&&"refresh"!=n||(e.reqdata.page=1),"add"!==n){a.next=11;break}if("nomore"!==e.loadmoreType){a.next=8;break}return a.abrupt("return");case 8:e.loadmoreType="loading",a.next=12;break;case 11:e.loadmoreType="more";case 12:e.$func.usemall.call("goods/list",e.reqdata).then((function(t){if(200===t.code)if(t.datas&&t.datas.goods.length>0){1!=s&&"refresh"!=n||(e.goodsDatas=[]);var a=[];t.datas.goods.forEach((function(t){"销售中"===t.state&&a.push(t)})),e.goodsDatas=[].concat((0,o.default)(e.goodsDatas),a),t.datas.goods.length>=e.reqdata.rows?(e.reqdata.page++,e.loadmoreType="more"):e.loadmoreType="nomore"}else e.loadmoreType="nomore";0===e.goodsDatas.length&&(e.empty=!0),1==s?uni.hideLoading():"refresh"==n&&uni.stopPullDownRefresh()}));case 13:case"end":return a.stop()}}),a)})))()},navbarClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.priceOrder=2===t?1===this.priceOrder?2:1:0,0==this.filterIndex?(this.reqdata.sidx="sort",this.reqdata.sord="asc"):1==this.filterIndex?(this.reqdata.sidx="sale_cnt",this.reqdata.sord="desc"):2==this.filterIndex&&(this.reqdata.sidx="price",1==this.priceOrder?this.reqdata.sord="desc":2==this.priceOrder&&(this.reqdata.sord="asc")),uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},tosearch:function(){this.$api.pages().length>1?uni.navigateBack():this.$api.tosearch()},togoods:function(t){this.$api.togoods({id:t._id})}}};e.default=r},"3cfc":function(t,e,a){"use strict";a.r(e);var n=a("14c8"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"5a2e":function(t,e,a){var n=a("bc22");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1840cccc",n,!0,{sourceMap:!1,shadowMode:!1})},"61fe":function(t,e,a){"use strict";a.r(e);var n=a("89d6"),i=a("ef21");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("be0b");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"74bbadd3",null,!1,n["a"],void 0);e["default"]=r.exports},"80c0":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7db0"),a("d3b7");var n={props:{eStyle:{type:String,default:"square"},eType:{type:String,default:"other"},tip:{type:String,default:"暂无数据"},btnTip:{type:String,default:"去逛逛"},btnGoto:{type:String,default:"/pages/tabbar/home"},auto:{type:Boolean,default:!0},height:{type:String,default:"100vh"}},computed:{dtype:{get:function(){var t=this;console.log("get dtype",arguments);var e=this.imgs.find((function(e){return e.type==t.eType}));return this.imgurl=e?e.url:this.imgurl_dft,this.eType},set:function(t){console.log("set dtype",arguments)}}},data:function(){return{imgurl_dft:"/static/images/empty/empty.jpg",imgurl:"",imgs:[{type:"cart",url:"/static/images/empty/cart.jpg"},{type:"search",url:"/static/images/empty/search.jpg"},{type:"other",url:"/static/images/empty/empty.jpg"}]}},methods:{to:function(){this.$emit("goto",{type:"goto"}),this.auto&&uni.switchTab({url:this.btnGoto})}}};e.default=n},"835c":function(t,e,a){var n=a("e89f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("c5e69b4c",n,!0,{sourceMap:!1,shadowMode:!1})},"89d6":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"use-totop fixed-top animated",class:t.visible?"fade-in":"dn",style:{bottom:t.bottom+"rpx",right:t.right+"rpx"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.totop.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont iconzhiding"})],1)},i=[]},"8c92":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-47c9a0e9]{background-color:#f5f5f5}body.?%PAGE?%[data-v-47c9a0e9]{background-color:#f5f5f5}.navbar[data-v-47c9a0e9]{top:var(--window-top);left:0;height:%?100?%;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-47c9a0e9]{color:#303133;font-size:%?30?%}.navbar .nav-item.active[data-v-47c9a0e9]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #ff6a6c}.navbar .iconfont[data-v-47c9a0e9]{width:%?30?%;height:%?14?%;font-size:%?20?%;line-height:1;margin-left:%?4?%}.goods-list .list[data-v-47c9a0e9]{padding:0 3vw %?20?%}.goods-list .item[data-v-47c9a0e9]{width:46vw;overflow:hidden;margin-top:2vw}.goods-list .item[data-v-47c9a0e9]:nth-child(2n){margin-left:1vw}.goods-list .item[data-v-47c9a0e9]:nth-child(2n + 1){margin-right:1vw}.goods-list .image-wrapper[data-v-47c9a0e9]{width:100%;height:%?300?%;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-47c9a0e9]{width:100%;height:100%;opacity:1}',""]),t.exports=e},9338:function(t,e,a){"use strict";var n=a("835c"),i=a.n(n);i.a},"9a20":function(t,e,a){"use strict";a.r(e);var n=a("80c0"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"9d4a":function(t,e,a){"use strict";a.r(e);var n=a("d510"),i=a("c3b7");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("f1e7");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"fb8b119e",null,!1,n["a"],void 0);e["default"]=r.exports},a3a3:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:{type:String,default:"more"},tip:{type:String,default:""},defaults:{type:Object,default:function(){return{more:"上拉显示更多",loading:"用云 · 让开发更简单",nomore:"已经到底了"}}}},data:function(){return{}},computed:{},methods:{}};e.default=n},b0af:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{top:{type:Number,default:100},right:{type:String,default:"30"},bottom:{type:String,default:"30"},duration:{type:Number,default:120},scrollTop:{type:Number,default:0}},watch:{scrollTop:function(t,e){this.s_top=t,this.change()}},data:function(){return{s_top:0,visible:!1}},methods:{totop:function(){uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("to",{type:"to",scrollTop:this.s_top})},change:function(t){this.s_top=t,this.s_top>this.top?this.visible||(this.visible=!0):this.visible&&(this.visible=!1)}}};e.default=n},b498:function(t,e,a){"use strict";a.r(e);var n=a("d675"),i=a("3cfc");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("fe2c");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"47c9a0e9",null,!1,n["a"],void 0);e["default"]=r.exports},bc22:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},bc98:function(t,e,a){var n=a("c578");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("718bbecc",n,!0,{sourceMap:!1,shadowMode:!1})},be0b:function(t,e,a){"use strict";var n=a("bc98"),i=a.n(n);i.a},c276:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"use-empty-container tac",class:"round"==t.eStyle?"padding-sm":"",style:{height:t.height}},[a("v-uni-view",{staticClass:"use-empty h-full dflex-c dflex-flow-c",class:"round"==t.eStyle?"round border-radius bg-main":""},[t.imgurl?a("v-uni-image",{attrs:{src:t.imgurl}}):t._e(),t.tip?a("v-uni-view",{staticClass:"title padding-sm"},[t._v(t._s(t.tip))]):t._e(),a("v-uni-button",{staticClass:"no-border use-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to.apply(void 0,arguments)}}},[t._v(t._s(t.btnTip))])],1)],1)},i=[]},c3b7:function(t,e,a){"use strict";a.r(e);var n=a("a3a3"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},c578:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */',""]),t.exports=e},d510:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"use-loadmore padding-tb-sm dflex-c"},["nomore"!==this.type?e("v-uni-view",{staticClass:"iconfont iconxiangqing animated rotate margin-right-sm ft-base"}):this._e(),e("v-uni-text",{staticClass:"ft-dark"},[this._v(this._s(this.tip||this.defaults[this.type]))])],1)},i=[]},d675:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={useEmpty:a("fdd1").default,useLoadmore:a("9d4a").default,useTotop:a("61fe").default,useHotGoods:a("e3bf").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:t.empty?"":"padding-top-big"},[t.empty?a("use-empty",{attrs:{"e-style":"round","e-type":"search",tip:"搜索数据为空","btn-tip":"重新搜索",height:"70vh",auto:!1},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.tosearch.apply(void 0,arguments)}}}):a("v-uni-view",[a("v-uni-view",{staticClass:"navbar pos-f w-full dflex bg-main",style:{position:t.headerPosition}},[a("v-uni-view",{staticClass:"nav-item dflex-c flex1 pos-r h-full",class:{active:0===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navbarClick(0)}}},[t._v("综合排序")]),a("v-uni-view",{staticClass:"nav-item dflex-c flex1 pos-r h-full",class:{active:1===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navbarClick(1)}}},[t._v("销量优先")]),a("v-uni-view",{staticClass:"nav-item dflex-c flex1 pos-r h-full",class:{active:2===t.filterIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navbarClick(2)}}},[a("v-uni-text",[t._v("价格")]),a("v-uni-view",{},[a("v-uni-view",{staticClass:"iconfont iconjiantou02 ft-dark dflex-c",class:{active:1===t.priceOrder&&2===t.filterIndex}}),a("v-uni-view",{staticClass:"iconfont iconjiantou ft-dark dflex-c",class:{active:2===t.priceOrder&&2===t.filterIndex}})],1)],1)],1),a("v-uni-view",{staticClass:"goods-list"},[a("v-uni-view",{staticClass:"list dflex-b dflex dflex-wrap-w w-full"},t._l(t.goodsDatas,(function(e,n){return a("v-uni-view",{key:n,staticClass:"item bg-main border-radius-sm padding-bottom-sm",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.togoods(e)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{attrs:{mode:"aspectFill","lazy-load":!0,src:e.img}})],1),a("v-uni-text",{staticClass:"title clamp padding-sm"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"padding-left-sm dflex-b"},[a("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price/100))]),a("v-uni-text",{staticClass:"ft-dark margin-right-sm fs-xs"},[t._v("已售 "+t._s(e.sale_cnt))])],1)],1)})),1)],1),a("use-loadmore",{attrs:{type:t.loadmoreType}})],1),a("use-totop",{ref:"usetop"}),t.empty?a("use-hot-goods",{attrs:{"title-type":"round",title:"猜你想要"}}):t._e()],1)},o=[]},e89f:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.use-empty-container .use-empty .round[data-v-66eeddfb]{padding:25% %?50?%}.use-empty-container .use-empty .round uni-button[data-v-66eeddfb]{width:%?220?%}.use-empty-container .use-empty uni-image[data-v-66eeddfb]{width:%?160?%;height:%?160?%}.use-empty-container .use-empty .title[data-v-66eeddfb]{color:silver}.use-empty-container .use-empty .use-btn[data-v-66eeddfb]{font-size:%?30?%;display:inline-block}',""]),t.exports=e},ef21:function(t,e,a){"use strict";a.r(e);var n=a("b0af"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},f1e7:function(t,e,a){"use strict";var n=a("5a2e"),i=a.n(n);i.a},fdd1:function(t,e,a){"use strict";a.r(e);var n=a("c276"),i=a("9a20");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("9338");var s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"66eeddfb",null,!1,n["a"],void 0);e["default"]=r.exports},fe2c:function(t,e,a){"use strict";var n=a("14b0"),i=a.n(n);i.a}}]);