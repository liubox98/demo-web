(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"0e46":function(e,t,n){"use strict";var a=n("2d88"),c=n.n(a);c.a},"178b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},c=[]},"188b":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n("2eee")),o=a(n("c973")),r="usemall-member-address",i={data:function(){return{env:{},is_mp:!1,platform:"",platform_name:"",platform_icon:"",source:0,addressDatas:[]}},onLoad:function(e){var t=this;this.$api.get_env((function(e){t.env=e,t.is_mp=t.env.is_mp,t.platform=t.env.platform,t.platform_icon=t.env.platform_icon,t.platform_name=t.env.platform_name})),this.source=e.source||0},onShow:function(){this.loadData()},methods:{loadData:function(){var e=this;this.$db[r].where("create_uid == $cloudEnv_uid").tolist({orderby:"is_default desc"}).then((function(t){200!==t.code?e.$api.msg(t.msg):e.addressDatas=t.datas}))},importAddr:function(){var t=this;e.chooseAddress({success:function(e){var n={is_default:"否"};n.consignee=e.userName,n.mobile=e.telNumber,n.addr_detail=e.detailInfo,n.province_name=e.provinceName,n.city_name=e.cityName,n.area_name=e.countyName||"",n.address="".concat(n.province_name,"-").concat(n.city_name,"-").concat(n.area_name),n.addr_source=t.$env.platform,n.mobile?(console.log("uni chooseAddress",n),t.$db[r].add(n).then((function(e){if(200===e.code)return t.$api.msg("导入成功"),void t.loadData();t.$api.msg(e.msg)}))):t.$api.msg("收货人手机不存在")},fail:function(n){-1!==n.errMsg.indexOf("cancel")?t.$api.msg("已取消"):e.showModal({content:"打开授权",success:function(t){t.confirm&&e.openSetting({})}})}})},setDefault:function(t){var n=this;e.showModal({title:"提示",content:"设为默认",success:function(){var e=(0,o.default)(c.default.mark((function e(a){return c.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=7;break}return e.next=3,n.$db[r].where('create_uid == $env.uid && is_default == "是"').update({is_default:"否"}).then((function(e){}));case 3:return e.next=5,n.$db[r].update(t._id,{is_default:"是"}).then((function(e){200===e.code&&n.loadData()}));case 5:e.next=8;break;case 7:a.cancel&&console.log("用户点击取消");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},selectAddr:function(t){1==this.source&&(e.$emit("__event_choice_address",t),e.navigateBack())},addAddr:function(t,n){n=n||{id:0},e.navigateTo({url:"/pages/user/address/address-edit?type=".concat(t,"&id=").concat(n._id)})},removeAddr:function(t){var n=this;e.showModal({title:"提示",content:"删除收货人",success:function(){var e=(0,o.default)(c.default.mark((function e(a){return c.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=5;break}return e.next=3,n.$db[r].remove(t._id).then((function(e){200===e.code&&n.loadData()}));case 3:e.next=6;break;case 5:a.cancel&&console.log("用户点击取消");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}}};t.default=i}).call(this,n("543d")["default"])},"1c63":function(e,t,n){"use strict";n.r(t);var a=n("178b"),c=n("b260");for(var o in c)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(o);n("0e46");var r=n("f0c5"),i=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=i.exports},"2d88":function(e,t,n){},b260:function(e,t,n){"use strict";n.r(t);var a=n("188b"),c=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=c.a},ef83:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("cd95"),n("a9ff");a(n("66fd"));var c=a(n("1c63"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["ef83","common/runtime","common/vendor"]]]);