(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-bzzx-kfzx"],{"0292":function(n,t,e){"use strict";e.r(t);var o=e("4808"),a=e("4e01");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("4213");var r,c=e("f0c5"),f=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"0bdc3c92",null,!1,o["a"],r);t["default"]=f.exports},"11df":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;getApp();var o={data:function(){return{answer:""}},components:{},props:{},onLoad:function(n){console.log(uni.getStorageSync("answer")),this.setData({answer:uni.getStorageSync("answer")})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{tel:function(){uni.makePhoneCall({phoneNumber:this.tel})}}};t.default=o},4213:function(n,t,e){"use strict";var o=e("b77b"),a=e.n(o);a.a},4808:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"main"},[e("v-uni-rich-text",{attrs:{nodes:n.answer}})],1)},i=[]},"4e01":function(n,t,e){"use strict";e.r(t);var o=e("11df"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a},b77b:function(n,t,e){var o=e("d0dc");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=e("4f06").default;a("8c642bc0",o,!0,{sourceMap:!1,shadowMode:!1})},d0dc:function(n,t,e){var o=e("24fb");t=o(!1),t.push([n.i,"uni-page-body[data-v-0bdc3c92]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kf[data-v-0bdc3c92]{display:flex;flex-direction:row;justify-content:center;align-items:center;color:#333;font-size:%?30?%;margin:%?100?% auto %?0?%;background:#fff;height:%?200?%;width:%?500?%;box-sizing:border-box;border-radius:%?20?%}.kf uni-image[data-v-0bdc3c92]{width:%?80?%;height:%?80?%;margin-right:%?30?%}.main[data-v-0bdc3c92]{padding:%?20?% %?30?%;background:#fff;overflow-x:hidden;font-size:%?30?%}body.?%PAGE?%[data-v-0bdc3c92]{background:#efeff4}",""]),n.exports=t}}]);