(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-sjvip"],{1915:function(t,e,i){"use strict";i("acd8"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={data:function(){return{sysW:uni.getSystemInfoSync().windowWidth,radioItem:[{name:"一周0.01元",value:"0",checked:!0},{name:"一月1.00元",value:"1"},{name:"半年仅5.00元",value:"2"},{name:"一年仅10.00元",value:"3"}],radioItems:[],fwxy:!0,hyflck:"第三方萨芬撒旦法守法撒发射方式送达方式第三方萨芬撒旦法守法撒发射方式送达方式第三方萨芬撒旦法守法撒发射方式送达方式",zfmoney:"",zfts:"",lb:"",url:"",vip:""}},components:{},props:{},onLoad:function(t){var e=this,i=this,n=getApp().imgurl;a.globalData.util.request({url:"entry/wxapp/ad",bian_hao:uni.getStorageSync("select_city").bian_hao,cachetime:"0",success:function(t){i.setData({lb:t})}}),a.globalData.util.request({url:"entry/wxapp/GetVip",cachetime:"0",success:function(t){console.log(t.data),e.setData({url:n,vip:t.data})}}),a.globalData.util.request({url:"entry/wxapp/GetVipSet",cachetime:"0",success:function(t){console.log(t.data),e.setData({radioItems:t.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},radioChange:function(t){console.log("radio发生change事件，携带value值为：",t.detail.value);for(var e=this.radioItems,i=0,a=e.length;i<a;++i)e[i].checked=e[i].id==t.detail.value,e[i].checked&&this.setData({zfmoney:e[i].money,zfts:e[i].days});this.setData({radioItems:e})},formSubmit:function(t){uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"/zh_zbkq/pages/my/sjvip_form"})}}};e.default=n},"607a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-d39feae6]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.container1[data-v-d39feae6]{margin-bottom:%?122?%}.swiper-lb[data-v-d39feae6]{width:100vw;height:50vw}.swiper-lb uni-image[data-v-d39feae6]{width:100%;height:100%}.swiper-box[data-v-d39feae6]{height:%?400?%;background:#fff}.swiper_tab[data-v-d39feae6]{width:100%;height:%?40?%;background:#fff}.swiper-tab[data-v-d39feae6]{width:%?40?%;margin:0 auto 0;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff}.swiper-tab uni-view[data-v-d39feae6]:nth-child(2){margin-left:%?10?%}.swiper-tab-list[data-v-d39feae6]{display:inline-block;width:%?15?%;height:%?15?%;-webkit-box-flex:2;-webkit-flex:2;flex:2;background:#efeff4;border-radius:50%}.head-img[data-v-d39feae6]{display:none;width:100vw;height:50vw}.head-img uni-image[data-v-d39feae6]{width:100%;height:100%}.zxtq[data-v-d39feae6]{color:#595959;background:#fff;width:100%;margin-top:%?2?%;font-size:%?27?%;border-top:%?1?% solid #f44444;padding-bottom:%?20?%}.zxtq1[data-v-d39feae6]{width:%?300?%;height:%?70?%;font-size:%?30?%;line-height:%?70?%;color:#fff;background:#f44444;margin:0 auto;text-align:center;border-bottom-left-radius:%?10?%;border-bottom-right-radius:%?10?%}.zxtq2[data-v-d39feae6]{margin:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.zxtq2 uni-image[data-v-d39feae6]{width:%?50?%;height:%?50?%;margin:0 %?20?%}.gm[data-v-d39feae6]{color:#595959;background:#fff;width:100%;margin-top:%?20?%;font-size:%?27?%;border-top:%?1?% solid #f44444}.gm1[data-v-d39feae6]{width:%?300?%;height:%?70?%;font-size:%?30?%;line-height:%?70?%;color:#fff;background:#f44444;margin:0 auto;text-align:center;border-bottom-left-radius:%?10?%;border-bottom-right-radius:%?10?%}.weui-cell[data-v-d39feae6]:before{left:0}.weui-cell[data-v-d39feae6]{font-size:%?28?%}.gm2[data-v-d39feae6]{height:%?70?%;line-height:%?70?%;text-align:center;color:#999}.gm2 uni-text[data-v-d39feae6]{color:#f44444;margin-left:%?5?%;border-bottom:%?1?% solid #f44444}.kcrzxy[data-v-d39feae6]{width:70%;left:50%;top:25%;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);background:#fff;border-radius:10px;z-index:999}.kcrzxyhd[data-v-d39feae6]{text-align:center;font-size:%?30?%;background:#f44444;height:%?70?%;line-height:%?70?%;color:#fff;border-top-left-radius:10px;border-top-right-radius:10px}.kcrzxybd[data-v-d39feae6]{font-size:%?28?%;padding:%?20?% %?30?%;box-sizing:border-box}.queren[data-v-d39feae6]{position:relative;height:%?70?%;width:30%;left:35%;font-size:%?35?%;line-height:%?70?%;text-align:center;color:#fff;background:#f44444;border-radius:%?10?%;margin:5px 0}.queren[data-v-d39feae6]:active{color:hsla(0,0%,100%,.6);opacity:.6}.zhezhao[data-v-d39feae6]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6);z-index:998}.foot[data-v-d39feae6]{border-top:%?1?% solid #d9d9d9;width:100%;position:fixed;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;font-size:%?30?%}.foot1[data-v-d39feae6]{width:20%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333}.foot1 uni-image[data-v-d39feae6]{width:%?50?%;height:%?50?%}.foot uni-button[data-v-d39feae6]{color:#fff;font-size:%?30?%;background:#f44444;display:block;width:60%}.foot uni-button[data-v-d39feae6]:active{color:hsla(0,0%,100%,.6);opacity:.6}body.?%PAGE?%[data-v-d39feae6]{background:#efeff4}",""]),t.exports=e},"6a2d":function(t,e,i){var a=i("607a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("847c2116",a,!0,{sourceMap:!1,shadowMode:!1})},"95a6":function(t,e,i){"use strict";i.r(e);var a=i("1915"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},e674:function(t,e,i){"use strict";i.r(e);var a=i("ef41"),n=i("95a6");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("fe03");var r,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"d39feae6",null,!1,a["a"],r);e["default"]=d.exports},ef41:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-form",{on:{reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)},submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"container1"},[i("v-uni-view",{staticClass:"head-img hide"},[i("v-uni-image",{attrs:{src:"http://spb2u1.ihogu.com/attachment/"+t.vip.img}})],1),0!=t.lb.length?i("v-uni-swiper",{staticClass:"swiper-lb",style:"height:"+250*t.sysW/300+"px;",attrs:{autoplay:"true",circular:"true",duration:"300",indicatorActiveColor:"#f44444",indicatorColor:"#e5e5e5",indicatorDots:"true"}},t._l(t.lb,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-image",{attrs:{"data-index":a,mode:"widthFix",src:"http://spb2u1.ihogu.com/attachment/"+e.logo},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tzsj.apply(void 0,arguments)}}})],1)})),1):t._e(),i("v-uni-view",{staticClass:"zxtq"},[i("v-uni-view",{staticClass:"zxtq1"},[t._v("vip会员专享特权")]),i("v-uni-view",{staticClass:"zxtq2"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/VIP.png"}}),i("v-uni-view",[t._v(t._s(t.vip.content))])],1)],1),i("v-uni-view",{staticClass:"gm hide"},[i("v-uni-view",{staticClass:"gm1"},[t._v("直接购买")]),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-radio-group",{attrs:{name:"radiogroup"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.radioItems,(function(e,a){return i("v-uni-label",{key:a,staticClass:"weui-cell weui-check__label"},[i("v-uni-radio",{staticClass:"weui-check",attrs:{checked:e.checked,value:e.id}}),i("v-uni-view",{staticClass:"weui-cell__hd weui-check__hd_in-checkbox"},[e.checked?t._e():i("v-uni-icon",{staticClass:"weui-icon-checkbox_circle",attrs:{color:"#f44444",size:"23",type:"circle"}}),e.checked?i("v-uni-icon",{staticClass:"weui-icon-checkbox_success",attrs:{color:"#f44444",size:"23",type:"success"}}):t._e()],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v(t._s(e.money)+"元,购买"+t._s(e.days)+"天会员")])],1)})),1)],1),i("v-uni-view",{staticClass:"read"},[i("v-uni-radio",{staticStyle:{zoom:"80%"},attrs:{checked:"true",color:"#ff6161"}}),i("v-uni-view",[t._v("我已阅读并同意"),i("v-uni-text",{staticClass:"readfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookck.apply(void 0,arguments)}}},[t._v("《开通用户VIP协议》")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"foot"},[i("v-uni-navigator",{staticClass:"foot1",attrs:{"open-type":"reLaunch",url:"../index/index"}},[i("v-uni-text",[t._v("HOME")]),i("v-uni-text",[t._v("首页")])],1),i("v-uni-button",{attrs:{"form-type":"submit"}},[t._v("立即开通 APPLY")]),i("v-uni-navigator",{staticClass:"foot1",attrs:{"open-type":"reLaunch",url:"my"}},[i("v-uni-text",[t._v("SERVICE")]),i("v-uni-text",[t._v("我的")])],1)],1)],1),i("v-uni-view"),t.fwxy?t._e():i("v-uni-view",{staticClass:"zhezhao"}),t.fwxy?t._e():i("v-uni-view",{staticClass:"kcrzxy"},[i("v-uni-view",{staticClass:"kcrzxyhd"},[t._v("开通用户VIP协议")]),i("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"500rpx"},attrs:{"scroll-y":!0}},[i("v-uni-rich-text",{attrs:{nodes:t.vip.info}})],1),i("v-uni-view",{staticClass:"queren",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.queren.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[]},fe03:function(t,e,i){"use strict";var a=i("6a2d"),n=i.n(a);n.a}}]);