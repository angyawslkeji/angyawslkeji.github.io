(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-bzzx-bzzx"],{1828:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,"uni-page-body[data-v-56d6b5b9]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif;font-size:%?30?%}.page__hd[data-v-56d6b5b9]{padding:15px}.page__bd[data-v-56d6b5b9]{padding-bottom:40px}.page__bd_spacing[data-v-56d6b5b9]{padding-left:15px;padding-right:15px}.page__ft[data-v-56d6b5b9]{padding-bottom:10px;text-align:center}.page__title[data-v-56d6b5b9]{text-align:left;font-size:20px;font-weight:400}.page__desc[data-v-56d6b5b9]{margin-top:5px;color:#333;text-align:center;font-size:%?30?%}.weui-flex[data-v-56d6b5b9]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cells[data-v-56d6b5b9]{border-top:%?1?% solid #d5d5d5;padding:10px 15px;font-size:%?30?%;margin-top:0;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:.3s;transition:.3s}.weui-cells[data-v-56d6b5b9]:after,.weui-cells[data-v-56d6b5b9]:before{display:none}.weui-cells_show[data-v-56d6b5b9]{opacity:1;-webkit-transform:rotateX(1turn);transform:rotateX(1turn);-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}.weui-cell[data-v-56d6b5b9]:before{right:15px}.kind-list__item[data-v-56d6b5b9]{margin:10px 0;background-color:#fff;-webkit-border-radius:5px;border-radius:5px;overflow:hidden;font-size:%?30?%;color:#333}.kind-list__item[data-v-56d6b5b9]:first-child{margin-top:0}.kind-list__img[data-v-56d6b5b9]{width:%?40?%;height:%?40?%}.kind-list__item-hd[data-v-56d6b5b9]{padding:%?20?%;-webkit-transition:opacity .3s;transition:opacity .3s}.kind-list__item-hd_show[data-v-56d6b5b9]{opacity:.3}.kind-list__item-bd[data-v-56d6b5b9]{height:0;overflow:hidden}.kind-list__item-bd_show[data-v-56d6b5b9]{height:auto}body.?%PAGE?%[data-v-56d6b5b9]{background:#efeff4}",""]),t.exports=i},1984:function(t,i,n){var e=n("1828");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("7a3d3ca8",e,!0,{sourceMap:!1,shadowMode:!1})},"46d8":function(t,i,n){"use strict";n.r(i);var e=n("9838"),a=n("c928");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("9c34");var s,d=n("f0c5"),r=Object(d["a"])(a["default"],e["b"],e["c"],!1,null,"56d6b5b9",null,!1,e["a"],s);i["default"]=r.exports},6804:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=getApp(),a={data:function(){return{list:[{id:"form",name:"优惠券的帮助中心",open:!1,pages:"优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"},{id:"form",name:"优惠券的帮助中心",open:!1,pages:"优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"},{id:"form",name:"优惠券的帮助中心",open:!1,pages:"优惠券的帮助中心主要显示用户可能回碰到的问题,正在开发中，敬请期待"}]}},components:{},props:{},onLoad:function(t){var i=this;console.log(this),e.globalData.util.request({url:"entry/wxapp/GetHelp",cachetime:"0",success:function(t){console.log(t.data),i.setData({list:t.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{kindToggle:function(t){var i=t.currentTarget.id,n=this.list;console.log(i);for(var e=0,a=n.length;e<a;++e)n[e].open=e==i&&!n[e].open;this.setData({list:n})},tzxq:function(t){uni.showLoading({title:"Loading..."}),uni.setStorageSync("answer",t.currentTarget.dataset.answer),uni.navigateTo({url:"kfzx"})}}};i.default=a},9838:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"page__hd"}),n("v-uni-view",{staticClass:"page__bd page__bd_spacing"},[n("v-uni-view",{staticClass:"kind-list"},t._l(t.list,(function(i,e){return n("v-uni-view",{key:e,staticClass:"kind-list__item"},[n("v-uni-view",{class:"weui-flex kind-list__item-hd "+(i.open?"kind-list__item-hd_show":""),attrs:{"data-answer":i.answer,id:e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tzxq.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"weui-flex__item"},[t._v(t._s(i.question))]),n("v-uni-image",{staticClass:"kind-list__img",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/icon_nav_form.png"}})],1),n("v-uni-view",{class:"kind-list__item-bd "+(i.open?"kind-list__item-bd_show":"")},[n("v-uni-view",{class:"weui-cells "+(i.open?"weui-cells_show":"")},[n("v-uni-view",{staticClass:"weui-cell__bd"},[t._v(t._s(i.answer))])],1)],1)],1)})),1)],1)],1)},o=[]},"9c34":function(t,i,n){"use strict";var e=n("1984"),a=n.n(e);a.a},c928:function(t,i,n){"use strict";n.r(i);var e=n("6804"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a}}]);