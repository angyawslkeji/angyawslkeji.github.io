(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-glyhq-upyhq"],{"221b":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-44d72f5a]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.weui-cells__title[data-v-44d72f5a]{margin-top:.4em;margin-bottom:.4em;font-size:%?30?%}.head .weui-cell[data-v-44d72f5a]{height:%?120?%}.weui-cell[data-v-44d72f5a]{font-size:%?30?%}.picker[data-v-44d72f5a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.picker uni-picker[data-v-44d72f5a]{width:%?200?%}.weui-btn-area[data-v-44d72f5a]{margin:1em 15px 1em}.weui-select[data-v-44d72f5a]{border-right:none}.weui-label uni-image[data-v-44d72f5a]{width:%?60?%;height:%?60?%}.weui-label[data-v-44d72f5a]{font-size:%?25?%}.sqzt[data-v-44d72f5a]{width:100%;height:100%;background:#fff;font-size:%?30?%;color:#666}.list_imgbk[data-v-44d72f5a]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-44d72f5a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-44d72f5a]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.button1[data-v-44d72f5a]{margin:%?80?%}.button1 uni-button[data-v-44d72f5a]{font-size:%?30?%}.weui-cell[data-v-44d72f5a]:before{border-top:%?1?% solid #e5e5e5}.weui-cell__bd[data-v-44d72f5a]{margin-left:14px;font-size:%?26?%}.xiaozi-tixing[data-v-44d72f5a]{font-size:xx-small;color:#999;\r\n    /* height: 120rpx; */overflow-y:scroll}.swiper-lb[data-v-44d72f5a]{width:100vw;height:50vw}.swiper-lb uni-image[data-v-44d72f5a]{width:100%;height:100%}.swiper-box[data-v-44d72f5a]{height:%?400?%;background:#fff}.swiper_tab[data-v-44d72f5a]{width:100%;height:%?40?%;background:#fff}.swiper-tab[data-v-44d72f5a]{width:%?40?%;margin:0 auto 0;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff}.swiper-tab uni-view[data-v-44d72f5a]:nth-child(2){margin-left:%?10?%}.swiper-tab-list[data-v-44d72f5a]{display:inline-block;width:%?15?%;height:%?15?%;-webkit-box-flex:2;-webkit-flex:2;flex:2;background:#efeff4;border-radius:50%}body.?%PAGE?%[data-v-44d72f5a]{background:#efeff4}",""]),t.exports=e},"3de3":function(t,e,i){"use strict";i.r(e);var a=i("7a46"),n=i("8a13");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("caac");var l,u=i("f0c5"),o=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"44d72f5a",null,!1,a["a"],l);e["default"]=o.exports},4779:function(t,e,i){"use strict";i("c975"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n=i("f4ae"),s={},l={data:function(){return{countries:["Cash 代金券","Discount 折价券","Offer 通用券","Meal 就餐券"],countryIndex:0,lqcountries:["付费领取+分享领取","仅限付费领取","仅限分享领取"],lqcountryIndex:0,cscountries:["用户可领取多次 MULTIPLE","用户仅可领取一次 Once Time"],cscountryIndex:0,jesz:!0,qssz:!0,yhqtype:"元",sysW:uni.getSystemInfoSync().windowWidth,start:"",timestart:"",url:"https://we-pon-com-1251903635.coshk.myqcloud.com/",timeend:"",issq:!1,is_check:"",zsnum:0,fwxy:!0,yhq:"",yhje_value:"",yhqid:"",sysl:"",mdid:"",mdinfo:"",is_couset:"",ptxx:"",lb:""}},components:{},props:{},onLoad:function(t){s=this,this.setData({yhqid:t.yhqid}),a.globalData.util.request({url:"entry/wxapp/CouponsInfo",cachetime:"0",data:{coupons_id:t.yhqid},success:function(t){console.log(t.data),uni.setNavigationBarTitle({title:"管理"+t.data.md_name+t.data.name}),i.setData({yhq:t.data,sysl:Number(t.data.number)-Number(t.data.lq_num)})}});var e=uni.getStorageSync("store_id"),i=this,l=n.formatTime(new Date).substring(0,10).replace(/\//g,"-");console.log(l.toString()),this.setData({start:l,timestart:l,timeend:l}),a.globalData.util.request({url:"entry/wxapp/StoreInfo",cachetime:"0",data:{store_id:e},success:function(t){console.log(t),""!=t.data?(i.setData({is_check:t.data.is_check,mdid:t.data.id,mdinfo:t.data}),"2"==t.data.is_check&&"1"==t.data.is_open&&i.setData({issq:!0}),t.data.is_rz):i.setData({issq:!1})}}),a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t),i.setData({is_couset:t.data.is_couset,ptxx:t.data}),"1"==t.data.is_fxlq?i.setData({lqcountries:["付费领取+分享领取","仅限付费领取","仅限分享领取"]}):i.setData({lqcountries:["仅限付费领取"],jesz:!0,qssz:!1})}}),a.globalData.util.request({url:"entry/wxapp/ad",bian_hao:uni.getStorageSync("select_city").bian_hao,cachetime:"0",success:function(t){s.setData({lb:t.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},jyfxsl:function(t){console.log(t.detail.value),"0"==t.detail.value&&uni.showToast({title:"数量不能为0",icon:"loading"})},bindTypeChange:function(t){console.log("picker type 发生选择改变，携带值为",t.detail.value),"0"==t.detail.value&&this.setData({countryIndex:t.detail.value,yhqtype:"元"}),"1"==t.detail.value&&this.setData({countryIndex:t.detail.value,yhqtype:"%OFF"}),"2"==t.detail.value&&this.setData({countryIndex:t.detail.value,yhqtype:""}),"3"==t.detail.value&&this.setData({countryIndex:t.detail.value,yhqtype:""})},bindTypeChange2:function(t){console.log("bindTypeChange2 发生选择改变，携带值为",t.detail.value),this.setData({cscountryIndex:t.detail.value})},bindTypeChange1:function(t){console.log("picker1 type 发生选择改变，携带值为",t.detail.value),"1"==this.ptxx.is_fxlq?("0"==t.detail.value&&this.setData({lqcountryIndex:t.detail.value,jesz:!0,qssz:!0}),"1"==t.detail.value&&this.setData({lqcountryIndex:t.detail.value,jesz:!0,qssz:!1}),"2"==t.detail.value&&this.setData({lqcountryIndex:t.detail.value,jesz:!1,qssz:!0})):this.setData({lqcountryIndex:t.detail.value,jesz:!0,qssz:!1})},bindTimeChange:function(t){var e=s.yhq;e["start_time"]=t.detail.value,this.setData({yhq:e})},bindTimeChange1:function(t){var e=s.yhq;e["end_time"]=t.detail.value,this.setData({yhq:e})},qwkt:function(){uni.redirectTo({url:"txzl"})},gongg:function(t){console.log(t.detail.value);var e=parseInt(t.detail.value.length);this.setData({zsnum:e})},yhje_input:function(t){if("%OFF"==this.yhqtype){if(parseInt(t.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").off_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"折扣劵数值最高为"+uni.getStorageSync("GetPlatform_S").off_max+" The number can not proceed "+uni.getStorageSync("GetPlatform_S").off_max});this.yhje_value=1-this.yhje_value}else if("1"!==uni.getStorageSync("UserData").is_vip&&parseInt(t.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").daijin_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"请升级VIP商户来激活更高数额 Please upgrade to VIP for a higher value."})},formSubmit:function(t){this.mdid,uni.getStorageSync("UserData").id,Number(this.cscountryIndex),this.countries[this.countryIndex],t.detail.value.yhje,t.detail.value.yhtj;var e=t.detail.value.ffsl,i=this.yhq.start_time,l=this.yhq.end_time,u=(t.detail.value.syxz,t.detail.value.lqje),o=(t.detail.value.fxsl,t.detail.value.tyqmc,this.is_couset),c=this.lqcountryIndex;if("2"==this.ptxx.is_fxlq&&(c="1"),console.log(o,c),"2"==o);"1"==o&&("0"==c&&1,"1"==c&&2);var d="",r=!0,v=36;n.strlen(t.detail.value.guan_jian_ci)>v?uni.showModal({title:"Tips",content:"Keywords "+v+" words at most,关键词最多"+v/2+"个字符"}):t.detail.value.guan_jian_ci.indexOf(".com")>-1?uni.showModal({title:"Tips",content:".com cannot be included 不能包含.com网址"}):"1"==o&&"1"==c&&""==u||(n.validTime(i,l)?(r=!1,a.globalData.util.request({url:"entry/wxapp/UpdateCoupons",cachetime:"0",data:{yhqid:s.yhqid,number:e,start_time:i,end_time:l,guan_jian_ci:t.detail.value.guan_jian_ci},success:function(t){"2"==t.data?uni.showModal({title:"提示",content:"更新失败 Fail Code:2021022701"}):(uni.showToast({title:"Success!",duration:2e3}),setTimeout((function(){uni.navigateBack()}),2e3))}})):d="有效日期的起始日期不能大于结束日期！",1==r&&uni.showModal({title:"提示",content:d}))}}};e.default=l},6151:function(t,e,i){var a=i("221b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0eb7bffa",a,!0,{sourceMap:!1,shadowMode:!1})},"7a46":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.issq?i("v-uni-form",{on:{reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)},submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[t._v("发放数量")]),i("v-uni-view",[t._v("QUANTITY")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{value:t.yhq.number,name:"ffsl",placeholder:"请输入数量 ENTER NUMBER",type:"number"}})],1),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"black"}},[t._v("张")])],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[t._v("剩余数量")]),i("v-uni-view",[t._v("ABLE NUMBER")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{value:t.sysl,disabled:"true",type:"number"}})],1),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"black"}},[t._v("张")])],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[t._v("有效日期")]),i("v-uni-view",[t._v("DUE DATE")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd picker"},[i("v-uni-picker",{attrs:{end:!0,mode:"date",start:t.start,value:t.timestart},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-input"},[t._v(t._s(t.yhq.start_time))])],1),i("v-uni-view",[t._v("至")]),i("v-uni-picker",{attrs:{end:!0,mode:"date",start:t.start,value:t.timeend},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTimeChange1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-input"},[t._v(t._s(t.yhq.end_time))])],1)],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[t._v("关键词搜索")]),i("v-uni-view",[t._v("Keyword search")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{value:t.yhq.guan_jian_ci,name:"guan_jian_ci",placeholder:"推荐'#+关键词'格式输入 '#+keyword'"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"weui-cells__title hide"},[i("v-uni-view",[t._v("使用须知")]),i("v-uni-view",[t._v("CONDITIONS")])],1),i("v-uni-view",{staticClass:"hide weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-textarea",{staticClass:"weui-textarea",staticStyle:{height:"4.5em"},attrs:{maxlength:"999",name:"syxz",placeholder:"说明 ADDITIONAL INFO"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.gongg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"weui-textarea-counter"},[i("v-uni-text",{staticStyle:{color:"#f44444"}},[t._v(t._s(t.zsnum))]),t._v("/999")],1)],1)],1)],1),i("v-uni-view",{staticClass:"xiaozi-tixing"},[t._v('所有购物券都会展示标准的条件与条款提示，内容为「此购物券条件限制，详细信息请联系发行商家咨询。且商家拥有最终解释权」\r\n            All coupons display the standard terms and conditions as 「Terms and Conditions Apply for this coupon. Please\r\n            contact the vendor for more information. The vendor reserves the right of final explanation."」')]),i("v-uni-view",{staticClass:"read"},[i("v-uni-radio",{staticStyle:{zoom:"80%"},attrs:{checked:"true",color:"#ff6161"}}),i("v-uni-view",[t._v("我已阅读并同意"),i("v-uni-text",{staticClass:"readfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookck.apply(void 0,arguments)}}},[t._v("《优惠券发布协议》")]),i("v-uni-view",[t._v("I HAVE READ AND AGREE TEAMS AND CONDITIONS.")])],1)],1),i("v-uni-view",{staticClass:"weui-btn-area"},[i("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{"form-type":"submit",type:"primary"}},[t._v("更新\r\n                UPDATE")])],1)],1)],1):i("v-uni-view",{staticClass:"sqzt"},["1"==t.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wx.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您的门店申请正在审核中,请耐心等待")])],1):t._e(),"2"==t.is_check&&"2"==t.mdinfo.is_open?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您的门店存在异常，请联系管理员")])],1):t._e(),"3"==t.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您的门店申请已被拒绝，成功开通门店方能发布券")])],1):t._e(),""==t.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您暂未开通门店，成功开通门店方能发布券")])],1):t._e(),""==t.is_check?i("v-uni-view",{staticClass:"button1"},[i("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qwkt.apply(void 0,arguments)}}},[t._v("前往开通")])],1):t._e()],1),t.fwxy?t._e():i("v-uni-view",{staticClass:"zhezhao"}),t.fwxy?t._e():i("v-uni-view",{staticClass:"kcrzxy"},[i("v-uni-view",{staticClass:"kcrzxyhd"},[t._v("优惠券发布协议")]),i("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[i("v-uni-rich-text",{attrs:{nodes:t.ptxx.kq_agreement}})],1),i("v-uni-view",{staticClass:"queren",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.queren.apply(void 0,arguments)}}},[t._v("确定")])],1),0!=t.lb.length?i("v-uni-swiper",{staticClass:"swiper-lb",style:"height:"+250*t.sysW/300+"px;",attrs:{autoplay:"true",circular:"true",duration:"300",indicatorActiveColor:"#f44444",indicatorColor:"#e5e5e5",indicatorDots:"true"}},t._l(t.lb,(function(e,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-image",{attrs:{"data-index":a,mode:"widthFix",src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+e.logo},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tzsj.apply(void 0,arguments)}}})],1)})),1):t._e()],1)},s=[]},"8a13":function(t,e,i){"use strict";i.r(e);var a=i("4779"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},caac:function(t,e,i){"use strict";var a=i("6151"),n=i.n(a);n.a}}]);