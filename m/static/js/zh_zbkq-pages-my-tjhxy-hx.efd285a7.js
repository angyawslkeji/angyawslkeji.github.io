(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-tjhxy-hx"],{"2e0e":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"head"},[e("v-uni-icon",{attrs:{size:"93",type:"info"}})],1),e("v-uni-view",{staticClass:"text"},[t._v("是否进行核销")]),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.hx.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},a=[]},"7a82":function(t,n,e){"use strict";e("ac1f"),e("1276"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=getApp(),i={data:function(){return{yhqid:"",yhquid:""}},components:{},props:{},onLoad:function(t){console.log(t);var n=decodeURIComponent(t.scene).split(",");console.log(n);var e=n[0],i=n[1];this.setData({yhqid:e,yhquid:i}),o.globalData.getUserInfo((function(t){console.log(o.globalData.globalData),o.globalData.userlogin((function(t){console.log(t)}))}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{hx:function(){var t=uni.getStorageSync("UserData").id,n=this.yhqid,e=this.yhquid;console.log("扫码人的id",t,"优惠券id",n,"优惠券所有者id",e),o.globalData.util.request({url:"entry/wxapp/IsHx",cachetime:"0",data:{user_id:t,coupons_id:n},success:function(t){console.log(t),1==t.data?uni.showModal({title:"提示",content:"确定核销此券吗？",success:function(t){t.confirm?(console.log("用户点击确定"),o.globalData.util.request({url:"entry/wxapp/hxCoupons",cachetime:"0",data:{coupons_id:n,user_id:e},success:function(t){console.log(t),1==t.data?(uni.showToast({title:"核销成功",icon:"success",duration:1e3}),setTimeout((function(){uni.reLaunch({url:"../../index/index"})}),1e3)):"已经核销过了"==t.data?uni.showModal({title:"提示",content:"此码已经核销过了"}):uni.showToast({title:"请重试",icon:"loading",duration:1e3})}})):t.cancel&&(console.log("用户点击取消"),uni.reLaunch({url:"../../index/index"}))}}):(uni.showModal({title:"提示",content:"您没有核销权限哦"}),setTimeout((function(){uni.reLaunch({url:"../../index/index"})}),2e3))}})}}};n.default=i},"869b":function(t,n,e){"use strict";e.r(n);var o=e("7a82"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},b072:function(t,n,e){"use strict";e.r(n);var o=e("2e0e"),i=e("869b");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("cbd5");var c,u=e("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"2b768a2f",null,!1,o["a"],c);n["default"]=s.exports},cbd5:function(t,n,e){"use strict";var o=e("eedd"),i=e.n(o);i.a},dbf8:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".container[data-v-2b768a2f]{overflow-y:hidden}.head[data-v-2b768a2f]{margin-top:%?50?%;height:%?300?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.text[data-v-2b768a2f]{text-align:center;font-size:%?30?%;color:#666}.btn[data-v-2b768a2f]{margin-top:%?150?%;width:70%;margin-left:15%}",""]),t.exports=n},eedd:function(t,n,e){var o=e("dbf8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("f3713050",o,!0,{sourceMap:!1,shadowMode:!1})}}]);