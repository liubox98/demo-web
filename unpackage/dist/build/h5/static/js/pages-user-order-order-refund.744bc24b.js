(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-order-refund"],{"2be7":function(t,e,i){var n=i("5b93");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0e2ecc6f",n,!0,{sourceMap:!1,shadowMode:!1})},"3ff4":function(t,e,i){"use strict";i.r(e);var n=i("b1a3"),a=i("6d35");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("d634");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"7b2349ba",null,!1,n["a"],void 0);e["default"]=r.exports},"42a8":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={useListTitle:i("0568").default,useUpload:i("3ff4").default,useCopyright:i("59ed5").default,useActionSheet:i("af15").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"padding margin-lr margin-tb-sm bg-main border-radius"},t._l(t.order_detail,(function(e,n){return i("v-uni-view",{key:n,staticClass:"goods-area"},[i("v-uni-view",{staticClass:"dflex"},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.goods_img}})],1),i("v-uni-view",{staticClass:"margin-left-sm"},[i("v-uni-text",{staticClass:"clamp-2"},[t._v(t._s(e.goods_name)+" "+t._s(e.goods_name_pw))]),i("v-uni-view",{staticClass:"ft-dark fs-xs padding-top-xs"},[i("v-uni-text",{staticClass:"margin-right"},[t._v("× "+t._s(e.goods_num))]),t._v(t._s(e.goods_sku_name||"  "))],1),i("v-uni-view",{staticClass:"margin-top-sm"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.goods_price/100))])],1)],1)],1)],1)})),1),i("v-uni-view",{staticClass:"padding-lr-xs padding-bottom-sm"},[i("use-list-title",{attrs:{title:"货物状态",type:"round",color:"#333",tip:t.goods_state,iconfont:" "},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.openActionSheet(1)}}})],1),i("v-uni-view",{staticClass:"padding-lr-xs"},[i("use-list-title",{attrs:{title:"退款原因",type:"round",color:"#333",tip:t.reason,iconfont:" "},on:{goto:function(e){arguments[0]=e=t.$handleEvent(e),t.openActionSheet(2)}}})],1),i("v-uni-view",{staticClass:"refund-area padding margin-lr margin-tb-sm bg-main border-radius"},[i("v-uni-view",{staticClass:"dflex-b"},[i("v-uni-text",{staticClass:"item margin-right-sm"},[t._v("退款金额：")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.refund_money/100))])],1)],1),i("v-uni-view",{staticClass:"padding margin-lr margin-tb-sm bg-main border-radius"},[i("v-uni-textarea",{staticClass:"ft-black w-full margin-0 padding-0 fs-sm",attrs:{placeholder:"请填写退款说明（选填）"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}}),i("use-upload",{staticClass:"pos-r",on:{upload:function(e){arguments[0]=e=t.$handleEvent(e),t.refundImgs.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"padding w-full margin-top"},[i("v-uni-view",{staticClass:"dflex-b border-radius-big"},[i("v-uni-view",{staticClass:"tac padding-tb-sm flex1 bg-base",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交申请")])],1)],1),i("use-copyright"),i("use-action-sheet",{attrs:{list:t.actionSheetList,tips:t.actionSheetTips},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetClick.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetClose.apply(void 0,arguments)}},model:{value:t.actionSheetShow,callback:function(e){t.actionSheetShow=e},expression:"actionSheetShow"}})],1)},s=[]},"4bc1":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9");var a=n(i("c7eb")),s=n(i("1da1")),o={data:function(){return{issubmit:!1,goods_state:"请选择",reason:"请选择",desc:"",order_id:"",refund_money:0,order_detail:[],order_data:{},postData:{order_id:"",goods_state:"",reason:"",desc:"",imgs:[],refund_money:0},actionSheetShow:!1,actionSheetList:[],actionSheetTips:{text:"退出登录 | 切换账号",color:"#9a9a9a",size:24}}},onUnload:function(){uni.$emit("__event_order","refresh")},onLoad:function(t){this.order_id=t.order_id,this.order_id||this.$api.msg("订单编号不存在"),this.loadData()},methods:{loadData:function(){var t=this;return(0,s.default)((0,a.default)().mark((function e(){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,e.next=3,t.$func.usemall.call("order/detail",{order_id:i.order_id}).then((function(t){200===t.code&&(i.order_data=t.datas.order,i.order_detail=t.datas.order_detail,i.refund_money=i.order_data.order_actural_paid)}));case 3:case"end":return e.stop()}}),e)})))()},refundImgs:function(t){var e=[];t.forEach((function(t){e.push(t.url)})),e.length>0&&(this.postData.imgs=e),console.log("refundImgs",this.postData.imgs)},submit:function(){if(this.postData.goods_state)if(this.postData.reason){if(!this.issubmit){this.issubmit=!0,this.postData.order_id=this.order_id,this.postData.refund_money=this.refund_money,this.postData.desc=this.desc;var t=this;uni.showModal({title:"提示",content:"申请退款",success:function(e){e.confirm?t.$func.usemall.call("order/refund",t.postData).then((function(e){if(200===e.code)return t.$api.msg("提交成功"),t.issubmit=!1,void uni.navigateBack({});t.$api.msg(e.msg),t.issubmit=!1})):e.cancel&&console.log("用户点击取消")}})}}else this.$api.msg("请选择退款原因");else this.$api.msg("请选择货物状态")},openActionSheet:function(t){var e="",i=[];switch(t){case 1:e="货物状态",this.actionSheetTips.text="请选择"+e,i=[{text:"已收到货",color:"#333",type:e},{text:"未收到货",color:"#333",type:e}];break;case 2:e="退款原因",this.actionSheetTips.text="请选择"+e,i=[{text:"未发货不要了",color:"#333",type:e},{text:"拍错了，重新下单",color:"#333",type:e},{text:"换一家，质量不好",color:"#333",type:e},{text:"其他",color:"#333",type:e}];break}this.actionSheetShow=!0,this.actionSheetList=i},actionSheetClose:function(){console.log(this.actionSheetShow)},actionSheetClick:function(t){var e=this.actionSheetList[t];switch(e.type){case"货物状态":this.goods_state=e.text,this.postData.goods_state=e.text;break;case"退款原因":this.reason=e.text,this.postData.reason=e.text;break}}}};e.default=o},"5b93":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3369e8f4]{background:#f5f5f5}body.?%PAGE?%[data-v-3369e8f4]{background:#f5f5f5}\n/* 商品区 */.goods-area[data-v-3369e8f4]:last-child{margin-bottom:0}.goods-area uni-image[data-v-3369e8f4]{width:%?180?%;height:%?180?%}\n/* 退款区 */.refund-area[data-v-3369e8f4]{line-height:%?60?%}.refund-area .desc[data-v-3369e8f4]{line-height:%?60?%}',""]),t.exports=e},6743:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.use-upload .item[data-v-7b2349ba]{width:23%;margin-right:2%;height:%?150?%;border:1px solid #f0f0f0}.use-upload .item uni-image[data-v-7b2349ba], .use-upload .item uni-video[data-v-7b2349ba]{width:100%;height:100%}.use-upload .del[data-v-7b2349ba]{top:%?-30?%;right:%?-10?%;width:%?50?%;height:%?50?%;z-index:99;box-shadow:0 3px 5px #f0f0f0}',""]),t.exports=e},"6d35":function(t,e,i){"use strict";i.r(e);var n=i("89fd"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6e2d":function(t,e,i){"use strict";var n=i("2be7"),a=i.n(n);a.a},"89fd":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("c7eb")),s=n(i("1da1"));i("a9e3"),i("14d9"),i("c975"),i("d81d"),i("4de4"),i("d3b7"),i("a434");var o={props:{limit:{type:Number,default:3}},data:function(){return{imgs:[]}},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:e.limit,sizeType:["original","compressed"],success:function(){var i=(0,s.default)((0,a.default)().mark((function i(n){var s;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:uni.showLoading({title:"上传中",mask:!0}),s=0;case 2:if(!(s<n.tempFilePaths.length)){i.next=9;break}return i.next=5,t.uploadFile({filePath:n.tempFilePaths[s],cloudPath:e.$api.getFileName(n.tempFilePaths[s]),onUploadProgress:function(t){Math.round(100*t.loaded/t.total)}}).then((function(t){console.log(t,n.tempFiles[s]),t.url=t.fileID,t.type=n.tempFiles[s].type||"",t.size=n.tempFiles[s].size,e.imgs.push(t),e.sendData()})).catch((function(t){console.log("use-upload",t)}));case 5:i.sent;case 6:s++,i.next=2;break;case 9:uni.hideLoading();case 10:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()})},preImage:function(t,e){if(-1===t.type.indexOf("video/")){var i=e.filter((function(t){return-1!==t.type.indexOf("image/")})).map((function(t){return t.url}));console.log(t,e),uni.previewImage({current:t.url,urls:i,longPressActions:{itemList:["发送给朋友","保存图片","收藏"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}})}},delImage:function(t){this.imgs.splice(t,1),this.sendData()},sendData:function(){this.$emit("upload",this.imgs)}}};e.default=o}).call(this,i("a9ff")["default"])},b1a3:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"use-upload dflex dflex-wrap-w"},[t._l(t.imgs,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item pos-r",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.preImage(e,t.imgs)}}},[-1!==e.type.indexOf("video/")?i("v-uni-video",{attrs:{src:e.url}}):i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"del pos-a bg-main dflex-c border-radius-c iconfont iconlajitong-01 ft-dark",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.delImage(n)}}})],1)})),t.imgs.length<t.limit?i("v-uni-view",{staticClass:"item dflex-c",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont iconxiangji-01 fs-big ft-dark"})],1):t._e()],2)},a=[]},d460:function(t,e,i){var n=i("6743");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("31186384",n,!0,{sourceMap:!1,shadowMode:!1})},d634:function(t,e,i){"use strict";var n=i("d460"),a=i.n(n);a.a},d646:function(t,e,i){"use strict";i.r(e);var n=i("42a8"),a=i("ebcb");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("6e2d");var o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"3369e8f4",null,!1,n["a"],void 0);e["default"]=r.exports},ebcb:function(t,e,i){"use strict";i.r(e);var n=i("4bc1"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);