(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-sjzx-wdkh"],{"1c86":function(e,t,n){"use strict";n.r(t);var a=n("6d73"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"1f61":function(e,t,n){"use strict";n.r(t);var a=n("54f5"),i=n("1c86");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("45d7");var c,r=n("f0c5"),s=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"15cb8fae",null,!1,a["a"],c);t["default"]=s.exports},"45d7":function(e,t,n){"use strict";var a=n("c38d"),i=n.n(a);i.a},"54f5":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},e._l(e.wdkh,(function(t,a){return n("v-uni-view",{key:a,staticClass:"weui-cell"},[n("v-uni-view",{staticClass:"weui-cell__hd"},[n("v-uni-image",{staticClass:"himg",attrs:{src:t.img}})],1),n("v-uni-view",{staticClass:"weui-cell__bd"},[n("v-uni-view",[e._v(e._s(t.nickname))]),n("v-uni-view",{staticClass:"sj"},[e._v("注册时间："+e._s(t.join_time))])],1),n("v-uni-view",{staticClass:"weui-cell__ft",attrs:{"data-tel":t.lq_tel},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tel.apply(void 0,arguments)}}},[e._v(e._s(t.lq_tel))])],1)})),1),0==!e.yj.length?n("v-uni-view",{staticClass:"kong"},[n("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),n("v-uni-view",[e._v("没有更多了")])],1):e._e()],1)},o=[]},"6d73":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=getApp(),i=n("66c3"),o={data:function(){return{wdkh:""}},components:{},props:{},onLoad:function(e){var t=this;a.globalData.util.request({url:"entry/wxapp/StoreKhinfo",cachetime:"0",data:{md_id:uni.getStorageSync("store_id")},success:function(e){console.log(e);for(var n=0;n<e.data.length;n++)e.data[n].join_time=i.ormatDate(e.data[n].join_time);t.setData({wdkh:e.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{tel:function(e){uni.makePhoneCall({phoneNumber:e.currentTarget.dataset.tel})}}};t.default=o},"99dd":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-15cb8fae]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.kong[data-v-15cb8fae]{height:%?110?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#666}.kong uni-image[data-v-15cb8fae]{width:%?80?%;height:%?80?%;margin-right:%?30?%}.weui-cells[data-v-15cb8fae]{font-size:%?30?%}.weui-cells[data-v-15cb8fae]::after{border:none}.weui-cells[data-v-15cb8fae]::before{border:none}.weui-cell__ft[data-v-15cb8fae]{font-size:%?26?%;color:#f44444}.himg[data-v-15cb8fae]{width:%?80?%;height:%?80?%;margin-right:%?30?%;vertical-align:middle;border-radius:50%}.sj[data-v-15cb8fae]{margin-top:%?10?%;font-size:%?26?%;color:#999}body.?%PAGE?%[data-v-15cb8fae]{background:#efeff4}",""]),e.exports=t},c38d:function(e,t,n){var a=n("99dd");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("762a8b48",a,!0,{sourceMap:!1,shadowMode:!1})}}]);