(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-user"],{"082f":function(t,e,i){"use strict";i.r(e);var a=i("763e"),s=i("6470");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("361a");var o=i("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"08b5a734",null,!1,a["a"],void 0);e["default"]=r.exports},"0d47":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-08b5a734]{min-height:100%;background:#f5f5f5}body.?%PAGE?%[data-v-08b5a734]{background:#f5f5f5}.member-area uni-image[data-v-08b5a734]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff}.vip-card-area[data-v-08b5a734]{color:#f7d680;background:linear-gradient(270deg,rgba(0,0,0,.7),rgba(0,0,0,.8))}.stats-area .item[data-v-08b5a734]{padding:%?30?% 0}.stats-area .num[data-v-08b5a734]{font-size:%?32?%;color:#303133;margin-bottom:%?6?%}.order-area .iconfont[data-v-08b5a734]{position:relative;font-size:%?40?%}.order-area .iconfont .badge[data-v-08b5a734]{right:auto}.stats-area .item[data-v-08b5a734],\n.order-area .item[data-v-08b5a734]{position:relative;font-size:%?24?%;color:#75787d;flex:1}.browsing-area uni-image[data-v-08b5a734]{width:%?160?%;height:%?160?%}[data-v-08b5a734]::-webkit-scrollbar{width:0;height:0;color:transparent;display:none}.log-out-btn[data-v-08b5a734]{color:#75787d}',""]),t.exports=e},"151b":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9");var s=a(i("5530")),n=i("26cb"),o=t.database(),r={computed:(0,s.default)({},(0,n.mapState)(["islogin","member"])),data:function(){return{isreq:!1,historyDatas:{},stats:{},actionSheetShow:!1,actionSheetList:[],actionSheetTips:{text:"",color:"#9a9a9a",size:24},is_mp:!1,is_alipay:!1}},onLoad:function(){var t=this;this.$nextTick((function(){t.is_mp=t.$env.is_mp,t.is_alipay="alipay"==t.$env.platform}))},onShow:function(){this.islogin?this.loadData():this.$api.msg("账号未登录")},methods:(0,s.default)((0,s.default)({},(0,n.mapMutations)(["logout","putMember"])),{},{loadData:function(){var t=this;this.$func.usemall.call("member/data").then((function(e){200==e.code&&(t.putMember(e.datas.member),console.log("member/data",e),t.stats=e.datas.stats,t.stats.order_state={},t.stats.order.forEach((function(e){t.stats.order_state[e._id]=e.num})))}));var e=o.collection("usemall-goods").getTemp();o.collection("usemall-goods-history",e).where("create_uid == $env.uid").field("visit_cnt, last_modify_time, goods._id as goods_id, goods.img as goods_img, goods.state as goods_state").orderBy("last_modify_time desc").get().then((function(e){if(e&&e.result&&0===e.result.errCode){var i=[];e.result.data.forEach((function(t){t._id=t.goods_id[0],t.img=t.goods_img[0],t.state=t.goods_state[0],i.push(t)})),t.historyDatas=i}}))},openActionSheet:function(){var t=this;this.actionSheetShow=!0,this.$api.timerout((function(){t.actionSheetList=[{text:"退出登录",color:"#333"},{text:"切换账号",color:"#333"}]}),0)},actionSheetClose:function(){console.log(this.actionSheetShow)},actionSheetClick:function(t){var e=this;switch(t){case 0:this.$api.msg("退出成功"),this.logout(),this.$api.timerout((function(){e.$api.tohome()}),200);break;case 1:this.$api.tologin();break}},to:function(t){this.islogin?uni.navigateTo({url:t}):this.$api.tologin()},toOrder:function(t,e){this.islogin?uni.setStorage({key:"__order_state",data:e,success:function(t){console.log(t)},complete:function(){uni.navigateTo({url:t})}}):this.$api.tologin()},togoods:function(t){this.$api.togoods({id:t._id})}})};e.default=r}).call(this,i("a9ff")["default"])},"361a":function(t,e,i){"use strict";var a=i("fb22"),s=i.n(a);s.a},6470:function(t,e,i){"use strict";i.r(e);var a=i("151b"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"763e":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={useListTitle:i("0568").default,useActionSheet:i("af15").default,useCopyright:i("59ed5").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user-area"},[i("v-uni-view",{staticClass:"header-area padding-lr-sm",class:t.is_mp&&!t.is_alipay?"padding-top-big":"padding-top"},[i("v-uni-view",{staticClass:"dflex-b"},[i("v-uni-view",{staticClass:"member-area padding-top-sm margin-bottom dflex pos-r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/setting/personal")}}},[i("v-uni-view",[i("v-uni-image",{staticClass:"headimg border-radius-c",attrs:{src:t.member.member_headimg||"/static/images/user/default.png"}})],1),i("v-uni-view",{staticClass:"margin-left-sm"},[i("v-uni-view",{staticClass:"info-box"},[i("v-uni-text",{staticClass:"fs-lg"},[t._v(t._s(t.member.member_name||t.member.member_nickname||"用云"))])],1),t.member.member_city?i("v-uni-view",[i("v-uni-text",{staticClass:"fs-xxs"},[t._v(t._s(t.member.member_city))])],1):t._e()],1)],1),i("v-uni-view",{staticClass:"border-radius-big bg-base dflex-c padding-lr",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/integral/sign")}}},[i("v-uni-view",{staticClass:"iconfont fs-xl iconqiandao margin-right-xs"}),i("v-uni-view",[t._v("签到")])],1)],1),i("v-uni-view",{staticClass:"border-radius"},[i("v-uni-view",{staticClass:"vip-card-area pos-r padding-lr padding-tb-sm"},[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconhuiyuan"}),i("v-uni-text",{staticClass:"margin-left-sm"},[t._v("用云电商 会员")])],1)],1),i("v-uni-view",{staticClass:"stats-area dflex-c bg-main"},[i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","全部")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.member.member_monetary/100||0))]),i("v-uni-text",[t._v("累计消费")]),i("v-uni-view",{staticClass:"vertical-line"})],1),i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/coupon/coupon")}}},[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.member.member_coupon_cnt||6))]),i("v-uni-text",[t._v("优惠券")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"container-area padding-lr-sm padding-bottom-sm"},[i("v-uni-view",{staticClass:"border-radius margin-top-sm bg-main"},[i("use-list-title",{attrs:{title:"我的订单",iconfont:"icondingdan",color:"#ff6a6c",fwt:"600",tip:"查看全部订单"},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","全部")}}}),i("v-uni-view",{staticClass:"order-area padding-bottom-sm padding-lr dflex-c"},[i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","待付款")}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v(""),t.stats&&t.stats.order_state&&t.stats.order_state["待付款"]>0?i("v-uni-view",{staticClass:"badge badge-small"},[t._v(t._s(t.stats.order_state["待付款"]))]):t._e()],1),i("v-uni-text",[t._v("待付款")])],1),i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","待发货")}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v(""),t.stats&&t.stats.order_state&&t.stats.order_state["待发货"]>0?i("v-uni-view",{staticClass:"badge badge-small"},[t._v(t._s(t.stats.order_state["待发货"]))]):t._e()],1),i("v-uni-text",[t._v("待发货")])],1),i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","待收货")}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v(""),t.stats&&t.stats.order_state&&t.stats.order_state["待收货"]>0?i("v-uni-view",{staticClass:"badge badge-small"},[t._v(t._s(t.stats.order_state["待收货"]))]):t._e()],1),i("v-uni-text",[t._v("待收货")])],1),i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","待评价")}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v(""),t.stats&&t.stats.order_state&&t.stats.order_state["待评价"]>0?i("v-uni-view",{staticClass:"badge badge-small"},[t._v(t._s(t.stats.order_state["待评价"]))]):t._e()],1),i("v-uni-text",[t._v("待评价")])],1),i("v-uni-view",{staticClass:"item dflex dflex-flow-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder("/pages/user/order/order","售后中")}}},[i("v-uni-view",{staticClass:"iconfont"},[t._v(""),t.stats&&t.stats.order_state&&t.stats.order_state["售后中"]>0?i("v-uni-view",{staticClass:"badge badge-small"},[t._v(t._s(t.stats.order_state["售后中"]))]):t._e()],1),i("v-uni-text",[t._v("售后/退款")])],1)],1)],1),i("v-uni-view",{staticClass:"border-radius margin-top-sm bg-main"},[i("use-list-title",{attrs:{title:"我的足迹",iconfont:"iconzuji",color:"#ffab6c",fwt:"600",tip:t.stats.browsing},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/browsing/browsing")}}}),i("v-uni-scroll-view",{staticClass:"browsing-area padding-lr",attrs:{"scroll-x":!0}},[i("v-uni-view",{staticClass:"dflex"},t._l(t.historyDatas,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-image",{staticClass:"border-radius-sm margin-right-sm",attrs:{src:e.img,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.togoods(e)}}})],1)})),1)],1),i("use-list-title",{attrs:{title:"我的收藏",iconfont:"iconshoucang-",color:"#ff6a6c",fwt:"600",tip:t.stats.collect},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/collect/collect")}}}),i("use-list-title",{attrs:{title:"分销中心",iconfont:"iconyixiaoshou",color:"#ffab6c",fwt:"600",tip:"分享赚钱"},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/distribution/distribution")}}}),i("use-list-title",{attrs:{title:"收货人",iconfont:"icondizhi-",color:"#5a9ded",fwt:"600"},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/address/address")}}}),i("use-list-title",{attrs:{title:"设置",iconfont:"iconshezhi-",color:"#58bc8a",fwt:"600"},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/user/setting/setting")}}})],1),t.islogin?i("v-uni-view",{staticClass:"border-radius margin-top-sm padding-sm dflex-c bg-main log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openActionSheet.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1):i("v-uni-view",{staticClass:"border-radius margin-top-sm padding-sm dflex-c bg-main log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.to("/pages/login/login")}}},[i("v-uni-text",{staticClass:"cell-tit"},[t._v("去登录")])],1),i("use-action-sheet",{attrs:{list:t.actionSheetList,tips:t.actionSheetTips},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetClick.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetClose.apply(void 0,arguments)}},model:{value:t.actionSheetShow,callback:function(e){t.actionSheetShow=e},expression:"actionSheetShow"}})],1),i("use-copyright")],1)},n=[]},fb22:function(t,e,i){var a=i("0d47");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("eb509496",a,!0,{sourceMap:!1,shadowMode:!1})}}]);