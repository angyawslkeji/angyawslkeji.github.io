(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-kfzx"],{"0207":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),o={data:function(){return{tel:"",xtxx:""}},components:{},props:{},onLoad:function(t){var n=this;t.back_delta&&t.back_delta>0&&uni.setStorageSync("back_delta",1),console.log(this),a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t.data),n.setData({tel:t.data.link_tel,xtxx:t.data})}})},onReady:function(){},onShow:function(){uni.getStorageSync("back_delta")>=2&&uni.setStorage({data:0,key:"back_delta",success:function(){uni.navigateBack({delta:uni.getStorageSync("back_delta")})}})},onHide:function(){uni.setStorageSync("back_delta",uni.getStorageSync("back_delta")+1)},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{telFun:function(){uni.showModal({title:"Email",content:"zaozaobuy@outlook.com",showCancel:!1,confirmText:"Copy",success:function(){uni.setClipboardData({data:"zaozaobuy@outlook.com"})}})}}};n.default=o},"03b1":function(t,n,e){"use strict";e.r(n);var a=e("52a8"),o=e("6122");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("f354");var c,u=e("f0c5"),s=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"1df15640",null,!1,a["a"],c);n["default"]=s.exports},"46fe":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-page-body[data-v-1df15640]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kf[data-v-1df15640]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:%?30?%;margin:%?30?% auto %?0?%;background:#fff;height:%?200?%;width:%?500?%;box-sizing:border-box;border-radius:%?20?%}.kf uni-image[data-v-1df15640]{width:%?80?%;height:%?80?%;margin-right:%?30?%}body.?%PAGE?%[data-v-1df15640]{background:#efeff4}",""]),t.exports=n},"52a8":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"tixing-sj"},[e("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{"max-height":"600rpx"},attrs:{"scroll-y":!0}},[e("v-uni-rich-text",{attrs:{nodes:t.xtxx.shangjia_tixing}})],1)],1),e("v-uni-button",{staticClass:"kf",attrs:{"open-type":"contact"}},[e("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/lxdh.png"}}),e("v-uni-view",[t._v("在线客服 Chat Now")])],1),e("v-uni-button",{staticClass:"kf",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.telFun.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zxkf.png"}}),e("v-uni-view",[t._v("电邮联系 via Email")])],1)],1)},i=[]},6122:function(t,n,e){"use strict";e.r(n);var a=e("0207"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},6716:function(t,n,e){var a=e("46fe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("5f73d56b",a,!0,{sourceMap:!1,shadowMode:!1})},f354:function(t,n,e){"use strict";var a=e("6716"),o=e.n(a);o.a}}]);