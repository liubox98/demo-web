(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"4f5d":function(e,t,n){"use strict";(function(e,o){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("9523")),c=n("26cb");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.database();var i={computed:u({},(0,c.mapState)(["member"])),methods:u({},(0,c.mapMutations)(["token","loadToken"])),onLaunch:function(e){if(o.canIUse("getUpdateManager")){var t=o.getUpdateManager();t.onCheckForUpdate((function(e){console.log(e.hasUpdate),e.hasUpdate&&(t.onUpdateReady((function(e){o.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&t.applyUpdate()}})})),t.onUpdateFailed((function(e){})))}))}},onShow:function(e){console.log("App Show"),this.loadToken(),[1011,1012,1013].includes(e.scene)&&e.query&&o.setStorageSync("__scene_query_q",e.query.q);var t=o.getLaunchOptionsSync();console.log(e,t),t&&t.query&&t.query.share},onHide:function(){console.log("App Hide")}};t.default=i}).call(this,n("a9ff")["default"],n("543d")["default"])},"5a86":function(e,t,n){"use strict";n.r(t);var o=n("ffae");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("5e22");var a=n("f0c5"),c=Object(a["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=c.exports},"5e22":function(e,t,n){"use strict";var o=n("6427"),r=n.n(o);r.a},6427:function(e,t,n){},e9ff:function(e,t,n){"use strict";(function(e,t,o){var r=n("4ea4"),a=r(n("9523"));n("cd95"),n("a9ff");var c=r(n("66fd")),f=r(n("5a86")),u=r(n("5831")),i=r(n("0809")),d=r(n("d3a4")),l=r(n("99da")),p=r(n("39fa"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.__webpack_require_UNI_MP_PLUGIN__=n,u.default.debug=!1,u.default.debug||(console.log=function(){}),i.default.register_env((function(e){c.default.prototype.$env=e})),c.default.config.productionTip=!1,c.default.prototype.$config=u.default,c.default.prototype.$api=i.default,c.default.prototype.$db=d.default,c.default.prototype.$dbcmd=t.database().command,c.default.prototype.$func=l.default,c.default.prototype.$store=p.default,f.default.mpType="app";var b=new c.default(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},f.default));o(b).$mount()}).call(this,n("bc2e")["default"],n("a9ff")["default"],n("543d")["createApp"])},ffae:function(e,t,n){"use strict";n.r(t);var o=n("4f5d"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a}},[["e9ff","common/runtime","common/vendor"]]]);