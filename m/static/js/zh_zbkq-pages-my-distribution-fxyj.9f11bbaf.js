(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-distribution-fxyj"],{"130a":function(t,e,i){"use strict";i.r(e);var a=i("def1"),s=i("d413");for(var l in s)"default"!==l&&function(t){i.d(e,t,(function(){return s[t]}))}(l);i("8125");var n,c=i("f0c5"),o=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"122ddc02",null,!1,a["a"],n);e["default"]=o.exports},"626c":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),s={data:function(){return{open:!0,txtype:1,zhtext:"帐号",zhtstext:"请输入帐号",zhtype:"text",disabled:!1,logintext:"提现",fwxy:!0,fxset:"",userinfo:"",wdyj:""}},components:{},props:{},onLoad:function(t){var e=this,i=uni.getStorageSync("UserData").id;a.globalData.util.request({url:"entry/wxapp/FxSet",cachetime:"0",success:function(t){console.log(t.data),uni.setNavigationBarTitle({title:t.data.fx_name+"佣金"}),e.setData({fxset:t.data})}}),a.globalData.util.request({url:"entry/wxapp/GetUserInfo",cachetime:"0",data:{user_id:i},success:function(t){console.log(t),e.setData({userinfo:t.data})}}),a.globalData.util.request({url:"entry/wxapp/MyCommission",cachetime:"0",data:{user_id:i},success:function(t){console.log(t),e.setData({wdyj:t.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.onLoad()},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},tradeinfo:function(){this.setData({open:!this.open})},radioChange:function(t){console.log("radio发生change事件，携带value值为：",t.detail.value),"zfbtx"==t.detail.value&&this.setData({txtype:1,zhtext:"支付宝帐号",zhtstext:"请输入支付宝帐号",zhtype:"number"}),"wxtx"==t.detail.value&&this.setData({txtype:2,zhtext:"微信帐号",zhtstext:"请输入微信帐号",zhtype:"text"}),"yhktx"==t.detail.value&&this.setData({txtype:3,zhtext:"银行卡号",zhtstext:"请输入银行卡号",zhtype:"number"})},formSubmit:function(t){var e=this;console.log("form发生了submit事件，携带数据为：",t.detail.value);var i=uni.getStorageSync("UserData").id,s=Number(this.userinfo.money),l=this.fxset.tx_rate,n=Number(this.fxset.tx_money),c=t.detail.value.je,o=t.detail.value.name,u=t.detail.value.zh,d=t.detail.value.checkbox.length,r=t.detail.value.radiogroup;if(console.log(i,s,l,n,c,o,u,d,r),""!=r){if("zfbtx"==r)var v=1;"wxtx"==r&&(v=2),"yhktx"==r&&(v=3);var w=Number(t.detail.value.je)*(100-Number(l))/100;console.log(w);var f="",p=!0;s<n?f="佣金满"+n+"才能申请提现":""==c?f="请填写提现金额！":Number(c)<n?f="提现金额未满足提现要求":Number(c)>s?f="提现金额超出您的实际佣金":""==o?f="请填写姓名！":""==u?f="请填写帐号！":0==d?f="请阅读并同意分销商提现协议":(e.setData({disabled:!0,logintext:"提交中..."}),p=!1,a.globalData.util.request({url:"entry/wxapp/Yjtx",cachetime:"0",data:{user_id:i,tx_type:v,name:o,account:u,tx_cost:c,sj_cost:w},success:function(t){console.log(t),1==t.data?(uni.showToast({title:"提交成功"}),setTimeout((function(){uni.redirectTo({url:"txmx"})}),1e3)):(uni.showToast({title:"请重试！",icon:"loading"}),e.setData({disabled:!1,logintext:"提现"}))}})),1==p&&uni.showModal({title:"提示",content:f})}else uni.showModal({title:"提示",content:"请选择提现方式！"})}}};e.default=s},"652b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'uni-page-body[data-v-122ddc02]{background-color:#f5f5f5}.head[data-v-122ddc02]{width:100%;box-sizing:border-box;background-color:#f44444;padding:%?20?% %?20?% %?30?%}.head .text[data-v-122ddc02]{font-size:%?30?%;color:#fff;text-decoration:underline;text-align:right}.head uni-view[data-v-122ddc02]:nth-child(2){color:#fff;text-align:center}.head uni-view[data-v-122ddc02]:nth-child(3){font-size:%?30?%;color:#fff;text-align:center}.weui-cell[data-v-122ddc02]{padding:%?20?% %?30?%}.weui-cell[data-v-122ddc02]:before{left:15px;right:15px}.weui-cells[data-v-122ddc02]{font-size:%?30?%;margin-top:%?20?%;color:#666}.weui-cell__bd[data-v-122ddc02]{color:#666}.weui-cell__ft[data-v-122ddc02]{color:#333}.weui-cells__title[data-v-122ddc02]{font-size:%?30?%;padding:%?20?% %?30?%;background:#fff;color:#666;margin-top:%?20?%;margin-bottom:0}.list[data-v-122ddc02]{margin-top:%?20?%;background-color:#fff;padding:%?0?% %?30?%;height:%?90?%}.listimg[data-v-122ddc02]{width:%?40?%;height:%?40?%;margin-right:%?20?%}.trade[data-v-122ddc02]{font-size:%?28?%;color:#000}.addright[data-v-122ddc02]{width:%?20?%;height:%?30?%;margin-left:%?20?%}.czhd[data-v-122ddc02]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#666}.czhd uni-view[data-v-122ddc02]{line-height:%?90?%;text-align:right}.czhd uni-text[data-v-122ddc02]{color:#f44444;margin:0 %?10?%}.czhd1[data-v-122ddc02]{background:#fff;padding:%?20?% %?30?%;font-size:%?28?%;color:#666}.czhd1 uni-text[data-v-122ddc02]{color:#f44444;margin:0 %?10?%}.show[data-v-122ddc02]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.txbd .weui-cell[data-v-122ddc02]{padding:%?5?% %?30?%}.txbd .weui-cells[data-v-122ddc02]:after{border-bottom:none}.read[data-v-122ddc02]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?5?% %?30?%;color:#999;font-size:%?28?%}.readfont[data-v-122ddc02]{color:#ff6161}.kcrzxy[data-v-122ddc02]{width:70%;left:50%;top:15%;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);background:#fff;border-radius:10px;z-index:999}.kcrzxyhd[data-v-122ddc02]{text-align:center;font-size:%?30?%;background:#f44444;height:%?70?%;line-height:%?70?%;color:#fff;border-top-left-radius:10px;border-top-right-radius:10px}.kcrzxybd[data-v-122ddc02]{font-size:%?28?%;padding:%?20?% %?30?%;box-sizing:border-box}.queren[data-v-122ddc02]{position:relative;height:%?70?%;width:30%;left:35%;font-size:%?30?%;line-height:%?70?%;text-align:center;color:#fff;background:#f44444;border-radius:%?10?%;margin:5px 0}uni-button[data-v-122ddc02]:active{color:hsla(0,0%,100%,.6);opacity:.6}.zhezhao[data-v-122ddc02]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6);z-index:998}uni-button[disabled][type="default"][data-v-122ddc02],uni-button[disabled][data-v-122ddc02]:not([type]){color:#fff}body.?%PAGE?%[data-v-122ddc02]{background-color:#f5f5f5}',""]),t.exports=e},"69f6":function(t,e,i){var a=i("652b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("7f491e7d",a,!0,{sourceMap:!1,shadowMode:!1})},8125:function(t,e,i){"use strict";var a=i("69f6"),s=i.n(a);s.a},d413:function(t,e,i){"use strict";i.r(e);var a=i("626c"),s=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,(function(){return a[t]}))}(l);e["default"]=s.a},def1:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-form",{on:{reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)},submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"head"},[i("v-uni-navigator",{staticClass:"text",attrs:{"open-type":"redirect",url:"txmx"}},[t._v("提现明细")]),i("v-uni-view",[t._v(t._s(t.userinfo.money))]),i("v-uni-view",[t._v("现有佣金（元）")])],1),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("可提现佣金")]),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#f44444"}},[t._v(t._s(t.wdyj.ke)+"元")])],1)],1),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("累计佣金")]),null==t.wdyj.lei?i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#f44444"}},[t._v("0元")]):i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#f44444"}},[t._v(t._s(t.wdyj.lei)+"元")])],1),i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("已申请佣金")]),null==t.wdyj.sq?i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v("0元")]):i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v(t._s(t.wdyj.sq)+"元")])],1),i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("成功提现佣金")]),null==t.wdyj.cg?i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v("0元")]):i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v(t._s(t.wdyj.cg)+"元")])],1)],1),i("v-uni-view",{staticClass:"list flex-bet",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tradeinfo.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"flex-center trade"},[i("v-uni-view",{},[t._v("用户须知")])],1),i("v-uni-view",{staticClass:"czhd"},[i("v-uni-swiper",{staticStyle:{height:"90rpx",width:"70vw"},attrs:{autoplay:"true",circular:"true",duration:"500",interval:"2000",vertical:"true"}},[i("v-uni-swiper-item",[i("v-uni-view",[t._v("买家确认收货完成订单后，立即获得佣金")])],1),i("v-uni-swiper-item",[i("v-uni-view",[t._v("注意：可用佣金满"),i("v-uni-text",[t._v(t._s(t.fxset.tx_money)+"元")]),t._v("后才能申请提现")],1)],1)],1)],1),i("v-uni-image",{class:"addright "+(t.open?"show":""),attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/huise@2x.png"}})],1),t.open?i("v-uni-view",{staticClass:"czhd1"},[i("v-uni-view",[t._v("买家确认收货完成订单后，立即获得佣金")]),i("v-uni-view",[t._v("注意：可用佣金满"),i("v-uni-text",[t._v(t._s(t.fxset.tx_money)+"元")]),t._v("后才能申请提现")],1)],1):t._e(),i("v-uni-view",{staticClass:"weui-cells__title"},[t._v("提现方式")]),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-top":"0"}},[i("v-uni-radio-group",{staticClass:"radio-group",attrs:{name:"radiogroup"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},["1"==t.fxset.is_zfb?i("v-uni-label",[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"15rpx","vertical-align":"middle",width:"20px",height:"20px"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zfb.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("提现到支付宝")]),i("v-uni-view",{staticClass:"weui-cell__ft"},[i("v-uni-radio",{attrs:{checked:1==t.txtype,color:"#f44444",value:"zfbtx"}})],1)],1)],1):t._e(),"1"==t.fxset.is_wx?i("v-uni-label",[i("v-uni-view",{staticClass:"weui-cell",staticStyle:{"border-top":"1rpx solid #e6e6e6"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"15rpx","vertical-align":"middle",width:"20px",height:"20px"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/weixin.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("提现到微信")]),i("v-uni-view",{staticClass:"weui-cell__ft"},[i("v-uni-radio",{attrs:{checked:2==t.txtype,color:"#f44444",value:"wxtx"}})],1)],1)],1):t._e(),"1"==t.fxset.is_yhk?i("v-uni-label",[i("v-uni-view",{staticClass:"weui-cell",staticStyle:{"border-top":"1rpx solid #e6e6e6"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"15rpx","vertical-align":"middle",width:"20px",height:"20px"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhk.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("提现到银行卡")]),i("v-uni-view",{staticClass:"weui-cell__ft"},[i("v-uni-radio",{attrs:{checked:3==t.txtype,color:"#f44444",value:"yhktx"}})],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"txbd"},[i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-top":"0"}},[i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[t._v("提现金额")])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"je",placeholder:"请输入提现金额",type:"digit"}})],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[t._v("姓名")])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"name",placeholder:"请输入姓名"}})],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[t._v(t._s(t.zhtext))])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"zh",placeholder:t.zhtstext,type:t.zhtype}})],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"weui-cells__title",staticStyle:{"margin-top":"0","border-top":"1rpx solid #e6e6e6"}},[t._v("提现手续费为"+t._s(t.fxset.tx_rate)+"%")]),i("v-uni-view",{staticClass:"read"},[i("v-uni-checkbox-group",{attrs:{name:"checkbox"}},[i("v-uni-checkbox",{staticStyle:{zoom:"80%"},attrs:{color:"#ff6161",value:"1"}})],1),i("v-uni-view",[t._v("我已阅读并同意"),i("v-uni-text",{staticClass:"readfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookck.apply(void 0,arguments)}}},[t._v("《分销商提现协议》")])],1)],1),i("v-uni-view",{staticClass:"weui-btn-area"},[i("v-uni-button",{staticClass:"weui-btn",style:"background:"+(t.disabled?"#FF6A6A":"#f44444")+";",attrs:{disabled:t.disabled,"form-type":"submit",type:"primary"}},[t._v(t._s(t.logintext))])],1)],1),t.fwxy?t._e():i("v-uni-view",{staticClass:"zhezhao"}),t.fwxy?t._e():i("v-uni-view",{staticClass:"kcrzxy"},[i("v-uni-view",{staticClass:"kcrzxyhd"},[t._v("分销商提现协议")]),i("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[i("v-uni-rich-text",{attrs:{nodes:t.fxset.tx_details}})],1),i("v-uni-view",{staticClass:"queren",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.queren.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},l=[]}}]);