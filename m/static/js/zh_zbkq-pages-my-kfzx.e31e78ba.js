(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-kfzx"],{"000c":function(t,n,a){var e=a("b468");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("a1b12792",e,!0,{sourceMap:!1,shadowMode:!1})},2846:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"tixing-sj"},[a("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{"max-height":"600rpx"},attrs:{"scroll-y":!0}},[a("v-uni-rich-text",{attrs:{nodes:t.xtxx.shangjia_tixing}})],1)],1),a("v-uni-button",{staticClass:"kf",attrs:{"open-type":"contact"}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/lxdh.png"}}),a("v-uni-view",[t._v("在线客服 Chat Now")])],1),a("v-uni-button",{staticClass:"kf",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.telFun.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zxkf.png"}}),a("v-uni-view",[t._v("电邮联系 via Email")])],1)],1)},i=[]},"829b":function(t,n,a){"use strict";a.r(n);var e=a("851a"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"851a":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),o={data:function(){return{tel:"",xtxx:""}},components:{},props:{},onLoad:function(t){var n=this;t.back_delta&&t.back_delta>0&&uni.setStorageSync("back_delta",1),console.log(this),e.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t.data),n.setData({tel:t.data.link_tel,xtxx:t.data})}})},onReady:function(){},onShow:function(){uni.getStorageSync("back_delta")>=2&&uni.setStorage({data:0,key:"back_delta",success:function(){uni.navigateBack({delta:uni.getStorageSync("back_delta")})}})},onHide:function(){uni.setStorageSync("back_delta",uni.getStorageSync("back_delta")+1)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{telFun:function(){uni.showModal({title:"Email",content:"zaozaobuy@outlook.com",showCancel:!1,confirmText:"Copy",success:function(){uni.setClipboardData({data:"zaozaobuy@outlook.com"})}})}}};n.default=o},"88bc":function(t,n,a){"use strict";var e=a("000c"),o=a.n(e);o.a},b468:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-1df15640]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kf[data-v-1df15640]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:%?30?%;margin:%?30?% auto %?0?%;background:#fff;height:%?200?%;width:%?500?%;box-sizing:border-box;border-radius:%?20?%}.kf uni-image[data-v-1df15640]{width:%?80?%;height:%?80?%;margin-right:%?30?%}body.?%PAGE?%[data-v-1df15640]{background:#efeff4}",""]),t.exports=n},e576:function(t,n,a){"use strict";a.r(n);var e=a("2846"),o=a("829b");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("88bc");var c,u=a("f0c5"),s=Object(u["a"])(o["default"],e["b"],e["c"],!1,null,"1df15640",null,!1,e["a"],c);n["default"]=s.exports}}]);