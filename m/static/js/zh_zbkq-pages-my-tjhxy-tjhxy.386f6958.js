(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-tjhxy-tjhxy"],{"26bb":function(t,e,i){"use strict";i.r(e);var a=i("2c54"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2c54":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={data:function(){return{hxm:"",hxylist:""}},components:{},props:{},onLoad:function(t){var e=this,i=uni.getStorageSync("store_id");console.log(i),a.globalData.util.request({url:"entry/wxapp/StoreInfo",cachetime:"0",data:{store_id:i},success:function(t){console.log(t),a.globalData.util.request({url:"entry/wxapp/HxCode",cachetime:"0",data:{user_id:i},success:function(t){console.log(t),e.setData({hxm:t.data})}})}}),this.reLoad()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.reLoad(),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){},methods:{sc:function(t){var e=this;console.log(t.currentTarget.dataset.uid),uni.showModal({title:"提示",content:"确定删除此核销员吗？",success:function(i){i.confirm?(console.log("用户点击确定"),a.globalData.util.request({url:"entry/wxapp/DelVerification",cachetime:"0",data:{id:t.currentTarget.dataset.uid},success:function(t){console.log(t),1==t.data?(uni.showToast({title:"删除成功",icon:"success",duration:1e3}),setTimeout((function(){e.reLoad()}),1e3)):uni.showToast({title:"请重试",icon:"loading",duration:1e3})}})):i.cancel&&console.log("用户点击取消")}})},reLoad:function(){var t=this,e=uni.getStorageSync("store_id");a.globalData.util.request({url:"entry/wxapp/StoreInfo",cachetime:"0",data:{store_id:e},success:function(i){console.log(i),a.globalData.util.request({url:"entry/wxapp/HxList",cachetime:"0",data:{user_id:e},success:function(e){console.log(e),t.setData({hxylist:e.data})}})}})}}};e.default=n},"810a":function(t,e,i){"use strict";i.r(e);var a=i("86f3"),n=i("26bb");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9c88");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5b30edc2",null,!1,a["a"],s);e["default"]=r.exports},"86f3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"head-img"},[i("v-uni-image",{attrs:{src:"data:image/png;base64,"+t.hxm}})],1),i("v-uni-view",{staticClass:"head-name"},[t._v("扫一扫，添加核销员")])],1),0!=t.hxylist.length?i("v-uni-view",{staticClass:"hxy"},[t._v("核销员")]):t._e(),t._l(t.hxylist,(function(e,a){return i("v-uni-view",{key:a,staticClass:"hxylist"},[i("v-uni-image",{attrs:{src:e.img}}),i("v-uni-view",{staticClass:"hxy-bd"},[t._v(t._s(e.nickname))]),i("v-uni-view",{staticClass:"sc",attrs:{"data-uid":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sc.apply(void 0,arguments)}}},[t._v("删除")])],1)})),0==t.hxylist.length?i("v-uni-view",{staticClass:"hxy"},[t._v("暂未添加核销员")]):t._e()],2)},o=[]},"9c88":function(t,e,i){"use strict";var a=i("dd41"),n=i.n(a);n.a},b64d:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-5b30edc2]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.head[data-v-5b30edc2]{background:#f44444;height:%?450?%;position:relative}.head-img[data-v-5b30edc2]{box-sizing:border-box;position:absolute;top:%?70?%;left:50%;margin-left:%?-120?%;width:%?240?%;height:%?240?%}.head-img uni-image[data-v-5b30edc2]{width:100%;height:100%;box-sizing:border-box}.head-name[data-v-5b30edc2]{position:absolute;top:%?360?%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:%?30?%}.hxy[data-v-5b30edc2]{background:#fff;font-size:%?30?%;padding:%?20?% %?30?%}.hxylist[data-v-5b30edc2]{border-top:1px solid #d9d9d9;background:#fff;padding:%?10?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hxylist uni-image[data-v-5b30edc2]{width:%?80?%;height:%?80?%;border-radius:50%}.hxy-bd[data-v-5b30edc2]{margin-left:%?25?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#666}.sc[data-v-5b30edc2]{font-size:%?30?%;color:#fff;width:%?120?%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f44444;border-radius:%?30?%}body.?%PAGE?%[data-v-5b30edc2]{background:#efeff4}",""]),t.exports=e},dd41:function(t,e,i){var a=i("b64d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("86f64eca",a,!0,{sourceMap:!1,shadowMode:!1})}}]);