(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-bzzx-kfzx"],{"19a3":function(n,t,e){"use strict";e.r(t);var o=e("3265"),i=e("ca05");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("9dfe");var r,c=e("f0c5"),f=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"0bdc3c92",null,!1,o["a"],r);t["default"]=f.exports},3265:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"main"},[e("v-uni-rich-text",{attrs:{nodes:n.answer}})],1)},a=[]},5424:function(n,t,e){var o=e("24fb");t=o(!1),t.push([n.i,"uni-page-body[data-v-0bdc3c92]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kf[data-v-0bdc3c92]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#333;font-size:%?30?%;margin:%?100?% auto %?0?%;background:#fff;height:%?200?%;width:%?500?%;box-sizing:border-box;border-radius:%?20?%}.kf uni-image[data-v-0bdc3c92]{width:%?80?%;height:%?80?%;margin-right:%?30?%}.main[data-v-0bdc3c92]{padding:%?20?% %?30?%;background:#fff;overflow-x:hidden;font-size:%?30?%}body.?%PAGE?%[data-v-0bdc3c92]{background:#efeff4}",""]),n.exports=t},"801f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;getApp();var o={data:function(){return{answer:""}},components:{},props:{},onLoad:function(n){console.log(uni.getStorageSync("answer")),this.setData({answer:uni.getStorageSync("answer")})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{tel:function(){uni.makePhoneCall({phoneNumber:this.tel})}}};t.default=o},"9dfe":function(n,t,e){"use strict";var o=e("bffa"),i=e.n(o);i.a},bffa:function(n,t,e){var o=e("5424");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var i=e("4f06").default;i("69f08591",o,!0,{sourceMap:!1,shadowMode:!1})},ca05:function(n,t,e){"use strict";e.r(t);var o=e("801f"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}}]);