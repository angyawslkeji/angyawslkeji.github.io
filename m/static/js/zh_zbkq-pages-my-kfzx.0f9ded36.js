(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-kfzx"],{"9e40":function(t,e,a){"use strict";var n=a("cfc9"),o=a.n(n);o.a},a1ec:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"tixing-sj"},[a("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{"max-height":"600rpx"},attrs:{"scroll-y":!0}},[a("v-uni-rich-text",{attrs:{nodes:t.xtxx.shangjia_tixing}})],1)],1),a("v-uni-button",{staticClass:"kf",attrs:{"open-type":"contact"}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/lxdh.png"}}),a("v-uni-view",[t._v("在线客服 Chat Now")])],1),a("v-uni-button",{staticClass:"kf",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.telFun.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zxkf.png"}}),a("v-uni-view",[t._v("电邮联系 via Email")])],1)],1)},i=[]},a354:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),o={data:function(){return{tel:"",xtxx:""}},components:{},props:{},onLoad:function(t){var e=this;t.back_delta&&t.back_delta>0&&uni.setStorageSync("back_delta",1),console.log(this),n.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t.data),e.setData({tel:t.data.link_tel,xtxx:t.data})}})},onReady:function(){},onShow:function(){uni.getStorageSync("back_delta")>=2&&uni.setStorage({data:0,key:"back_delta",success:function(){uni.navigateBack({delta:uni.getStorageSync("back_delta")})}})},onHide:function(){uni.setStorageSync("back_delta",uni.getStorageSync("back_delta")+1)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{telFun:function(){uni.showModal({title:"Email",content:"zaozaobuy@outlook.com",showCancel:!1,confirmText:"Copy",success:function(){uni.setClipboardData({data:"zaozaobuy@outlook.com"})}})}}};e.default=o},a416:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-1df15640]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kf[data-v-1df15640]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:%?30?%;margin:%?30?% auto %?0?%;background:#fff;height:%?200?%;width:%?500?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?20?%}.kf uni-image[data-v-1df15640]{width:%?80?%;height:%?80?%;margin-right:%?30?%}body.?%PAGE?%[data-v-1df15640]{background:#efeff4}",""]),t.exports=e},bfd9:function(t,e,a){"use strict";a.r(e);var n=a("a1ec"),o=a("e794");for(var i in o)"default"!==i&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("9e40");var c,u=a("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"1df15640",null,!1,n["a"],c);e["default"]=s.exports},cfc9:function(t,e,a){var n=a("a416");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("e855ca08",n,!0,{sourceMap:!1,shadowMode:!1})},e794:function(t,e,a){"use strict";a.r(e);var n=a("a354"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);