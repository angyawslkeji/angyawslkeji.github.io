(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-fbyhq"],{"187f":function(e,t,i){"use strict";i.r(t);var a=i("2bc6"),n=i("ffd4");for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("c6fc");var l,u=i("f0c5"),c=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,"566c116a",null,!1,a["a"],l);t["default"]=c.exports},"2bc6":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.issq?i("v-uni-form",{on:{reset:function(t){arguments[0]=t=e.$handleEvent(t),e.formReset.apply(void 0,arguments)},submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell weui-cell_select"},[i("v-uni-view",{staticClass:"weui-cell__hd weui-cell__hd_in-select-after"},[i("v-uni-view",{staticClass:"weui-label"},[e._v("优惠券类型")]),i("v-uni-view",{staticClass:"weui-label"},[e._v("Coupon Type")])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-picker",{attrs:{range:e.countries,value:e.countryIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTypeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-select weui-select_in-select-after"},[e._v(e._s(e.countries[e.countryIndex]))])],1)],1)],1),2==e.countryIndex?i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[e._v("通用券名称")])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"tyqmc",placeholder:"请输入通用券名称"}})],1)],1):e._e(),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[2==e.countryIndex?i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("优惠内容")]),i("v-uni-view",[e._v("Preferential content")])],1):i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("优惠金额")]),i("v-uni-view",[e._v("AMOUNT")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[2==e.countryIndex?i("v-uni-textarea",{staticClass:"weui-textarea",staticStyle:{height:"3.2em"},attrs:{maxlength:"999",name:"yhje",placeholder:"输入优惠内容，如某种产品买一送一",value:e.yhje_value},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.yhje_input.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"weui-input",attrs:{name:"yhje",value:e.yhje_value,placeholder:"请输入优惠金额 HOW MUCH",type:"digit"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.yhje_input.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"black"}},[e._v(e._s(e.yhqtype))])],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("优惠编码")]),i("v-uni-view",[e._v("Offer Code")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"yhtj",placeholder:"如果允许在线使用 If can be used online"}})],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("发放数量")]),i("v-uni-view",[e._v("QUANTITY")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"ffsl",placeholder:"请输入数量 ENTER NUMBER",type:"number"}})],1),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"black"}},[e._v("张")])],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_select"},[i("v-uni-view",{staticClass:"weui-cell__hd weui-cell__hd_in-select-after"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("领取次数")]),i("v-uni-view",[e._v("COLLECT")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-picker",{attrs:{range:e.cscountries,value:e.cscountryIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTypeChange2.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-select weui-select_in-select-after"},[e._v(e._s(e.cscountries[e.cscountryIndex]))])],1)],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("有效日期")]),i("v-uni-view",[e._v("DUE DATE")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd picker"},[i("v-uni-picker",{attrs:{end:!0,mode:"date",start:e.start,value:e.timestart},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTimeChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timestart))])],1),i("v-uni-view",[e._v("至")]),i("v-uni-picker",{attrs:{end:!0,mode:"date",start:e.start,value:e.timeend},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTimeChange1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timeend))])],1)],1)],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-view",[e._v("关键词搜索")]),i("v-uni-view",[e._v("Keyword search")])],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"guan_jian_ci",placeholder:"关键词搜索 Keyword search"}})],1)],1)],1)],1),"1"==e.is_couset?i("v-uni-view",{staticClass:"head",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell weui-cell_select"},[i("v-uni-view",{staticClass:"weui-cell__hd weui-cell__hd_in-select-after"},[i("v-uni-view",{staticClass:"weui-label"},[e._v("领券设置")])],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-picker",{attrs:{range:e.lqcountries,value:e.lqcountryIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTypeChange1.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"weui-select weui-select_in-select-after"},[e._v(e._s(e.lqcountries[e.lqcountryIndex]))])],1)],1)],1),e.jesz?i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/lqje.png"}})],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"lqje",placeholder:"领取金额",type:"digit"}})],1)],1):e._e(),e.qssz?i("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-view",{staticClass:"weui-label"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/fxsl.png"}})],1)],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-input",{staticClass:"weui-input",attrs:{name:"fxsl",placeholder:"分享领取的分享数量",type:"number"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.jyfxsl.apply(void 0,arguments)}}})],1)],1):e._e()],1)],1):e._e(),i("v-uni-view",{staticClass:"weui-cells__title hide"},[i("v-uni-view",[e._v("使用须知")]),i("v-uni-view",[e._v("CONDITIONS")])],1),i("v-uni-view",{staticClass:"hide weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-textarea",{staticClass:"weui-textarea",staticStyle:{height:"4.5em"},attrs:{maxlength:"999",name:"syxz",placeholder:"说明 ADDITIONAL INFO"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.gongg.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"weui-textarea-counter"},[i("v-uni-text",{staticStyle:{color:"#f44444"}},[e._v(e._s(e.zsnum))]),e._v("/999")],1)],1)],1)],1),i("v-uni-view",{staticClass:"xiaozi-tixing"},[e._v('所有购物券都会展示标准的条件与条款提示，内容为「此购物券条件限制，详细信息请联系发行商家咨询。且商家拥有最终解释权」\r\n            All coupons display the standard terms and conditions as 「Terms and Conditions Apply for this coupon. Please\r\n            contact the vendor for more information. The vendor reserves the right of final explanation."」')]),i("v-uni-view",{staticClass:"read"},[i("v-uni-radio",{staticStyle:{zoom:"80%"},attrs:{checked:"true",color:"#ff6161"}}),i("v-uni-view",[e._v("我已阅读并同意"),i("v-uni-text",{staticClass:"readfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookck.apply(void 0,arguments)}}},[e._v("《优惠券发布协议》")]),i("v-uni-view",[e._v("I HAVE READ AND AGREE TEAMS AND CONDITIONS.")])],1)],1),i("v-uni-view",{staticClass:"weui-btn-area"},[i("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{"form-type":"submit",type:"primary"}},[e._v("发布\r\n                PUBLISH")])],1)],1)],1):i("v-uni-view",{staticClass:"sqzt"},["1"==e.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wx.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的门店申请正在审核中,请耐心等待")])],1):e._e(),"2"==e.is_check&&"2"==e.mdinfo.is_open?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的门店存在异常，请联系管理员")])],1):e._e(),"3"==e.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的门店申请已被拒绝，成功开通门店方能发布券")])],1):e._e(),""==e.is_check?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您暂未开通门店，成功开通门店方能发布券")])],1):e._e(),""==e.is_check?i("v-uni-view",{staticClass:"button1"},[i("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.qwkt.apply(void 0,arguments)}}},[e._v("前往开通")])],1):e._e()],1),e.fwxy?e._e():i("v-uni-view",{staticClass:"zhezhao"}),e.fwxy?e._e():i("v-uni-view",{staticClass:"kcrzxy"},[i("v-uni-view",{staticClass:"kcrzxyhd"},[e._v("优惠券发布协议")]),i("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[i("v-uni-rich-text",{attrs:{nodes:e.ptxx.kq_agreement}})],1),i("v-uni-view",{staticClass:"queren",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.queren.apply(void 0,arguments)}}},[e._v("确定")])],1),(e.lb.length,e._e())],1)},s=[]},"4ff3":function(e,t,i){i("a15b"),i("d81d"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),i("1276");var a=function(e){var t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),s=e.getHours(),l=e.getMinutes(),u=e.getSeconds();return[t,i,a].map(n).join("/")+" "+[s,l,u].map(n).join(":")},n=function(e){return(e=e.toString())[1]?e:"0"+e};function s(e,t){var i=e.split("-"),a=t.split("-"),n=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0),s=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0);return!(n.getTime()>=s.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function l(e,t){var i=e.split("-"),a=t.split("-"),n=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0),s=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0);return!(n.getTime()>s.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function u(){for(var e=""+Math.round(1e6*Math.random());e.length<6;)e="0"+e;return console.info("randomNum is ========",e),e}function c(e,t){for(var i=0;i<t.length;i++)if(t[i]==e)return 1;return 2}function o(e,t,i,a){t=t||0,i=i||0,a=a||0;var n=(e=e||0)*Math.PI/180,s=i*Math.PI/180,l=n-s,u=t*Math.PI/180-a*Math.PI/180;return 12756274*Math.asin(Math.sqrt(Math.pow(Math.sin(l/2),2)+Math.cos(n)*Math.cos(s)*Math.pow(Math.sin(u/2),2)))}function r(){var e=new Date,t=e.getMonth()+1,i=e.getDate();return 1<=t&&t<=9&&(t="0"+t),0<=i&&i<=9&&(i="0"+i),e.getFullYear()+"/"+t+"/"+i+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}function v(e,t){var i=new Date(e.replace(/-/g,"/")),a=new Date(t),n=parseInt((a.getTime()-i.getTime())/1e3),s=Math.floor(n/86400/365);n%=31536e3;var l=Math.floor(n/86400/30);n%=2592e3;var u=Math.floor(n/86400);n%=86400;var c=Math.floor(n/3600);n%=3600;var o=Math.floor(n/60),r=n%=60;console.log(s,l,u,c,o,r);var v={};return v.day=u,v.hour=c,v.minute=o,v}function d(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+i(t.getMonth()+1,2)+"-"+i(t.getDate(),2)+" "+i(t.getHours(),2)+":"+i(t.getMinutes(),2)+":"+i(t.getSeconds(),2);function i(e,t){for(var i=""+e,a=i.length,n="",s=t;s-- >a;)n+="0";return n+i}}function w(e){for(var t=0,i=0;i<e.length;i++){var a=e.charCodeAt(i);a>=1&&a<=126||65376<=a&&a<=65439?t++:t+=2}return t}e.exports={strlen:w,formatTime:a,getRandomNum:u,in_array:c,getDistance:o,validTime:s,validTime1:l,getNowFormatDate:r,xctsfm:v,ormatDate:d}},"67db":function(e,t,i){"use strict";i("c975"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=getApp(),n=i("4ff3"),s={},l={data:function(){return{countries:["代金券 CASH COUPON","折扣券 Discount coupon","通用券 VOUCHER","就餐券 Meal Voucher"],countryIndex:0,lqcountries:["付费领取+分享领取","仅限付费领取","仅限分享领取"],lqcountryIndex:0,cscountries:["用户可领取多次 MULTIPLE","用户仅可领取一次 Once Time"],cscountryIndex:0,jesz:!0,sysW:uni.getSystemInfoSync().windowWidth,qssz:!0,yhqtype:"元",start:"",timestart:"",url:"https://spb2u1.ihogu.com/attachment/",timeend:"",issq:!1,is_check:"",zsnum:0,fwxy:!0,yhje_value:"",mdid:"",mdinfo:"",is_couset:"",ptxx:"",lb:""}},components:{},props:{},onLoad:function(e){s=this;var t=uni.getStorageSync("store_id"),i=this,l=n.formatTime(new Date).substring(0,10).replace(/\//g,"-");console.log(l.toString()),this.setData({start:l,timestart:l,timeend:l}),a.globalData.util.request({url:"entry/wxapp/StoreInfo",cachetime:"0",data:{store_id:t},success:function(e){console.log(e),""!=e.data?(i.setData({is_check:e.data.is_check,mdid:e.data.id,mdinfo:e.data}),"2"==e.data.is_check&&"1"==e.data.is_open&&i.setData({issq:!0}),e.data.is_rz):i.setData({issq:!1})}}),a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(e){console.log(e),i.setData({is_couset:e.data.is_couset,ptxx:e.data}),"1"==e.data.is_fxlq?i.setData({lqcountries:["付费领取+分享领取","仅限付费领取","仅限分享领取"]}):i.setData({lqcountries:["仅限付费领取"],jesz:!0,qssz:!1})}}),a.globalData.util.request({url:"entry/wxapp/ad",bian_hao:uni.getStorageSync("select_city").bian_hao,cachetime:"0",success:function(e){s.setData({lb:e.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},jyfxsl:function(e){console.log(e.detail.value),"0"==e.detail.value&&uni.showToast({title:"数量不能为0",icon:"loading"})},bindTypeChange:function(e){console.log("picker type 发生选择改变，携带值为",e.detail.value),"0"==e.detail.value&&this.setData({countryIndex:e.detail.value,yhqtype:"元"}),"1"==e.detail.value&&this.setData({countryIndex:e.detail.value,yhqtype:"%OFF"}),"2"==e.detail.value&&this.setData({countryIndex:e.detail.value,yhqtype:""}),"3"==e.detail.value&&this.setData({countryIndex:e.detail.value,yhqtype:""})},bindTypeChange2:function(e){console.log("bindTypeChange2 发生选择改变，携带值为",e.detail.value),this.setData({cscountryIndex:e.detail.value})},bindTypeChange1:function(e){console.log("picker1 type 发生选择改变，携带值为",e.detail.value),"1"==this.ptxx.is_fxlq?("0"==e.detail.value&&this.setData({lqcountryIndex:e.detail.value,jesz:!0,qssz:!0}),"1"==e.detail.value&&this.setData({lqcountryIndex:e.detail.value,jesz:!0,qssz:!1}),"2"==e.detail.value&&this.setData({lqcountryIndex:e.detail.value,jesz:!1,qssz:!0})):this.setData({lqcountryIndex:e.detail.value,jesz:!0,qssz:!1})},bindTimeChange:function(e){console.log("picker 发生选择改变，携带值为",e.detail.value),this.setData({timestart:e.detail.value})},bindTimeChange1:function(e){console.log("picker  发生选择改变，携带值为",e.detail.value),this.setData({timeend:e.detail.value})},qwkt:function(){uni.redirectTo({url:"txzl"})},gongg:function(e){console.log(e.detail.value);var t=parseInt(e.detail.value.length);this.setData({zsnum:t})},yhje_input:function(e){if("%OFF"==this.yhqtype){if("1"!==uni.getStorageSync("UserData").is_vip&&parseInt(e.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").off_free_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"免费商户折扣劵数值最高为"+uni.getStorageSync("GetPlatform_S").off_free_max+"Normal account The number can not proceed "+uni.getStorageSync("GetPlatform_S").off_free_max});if(parseInt(e.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").off_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"折扣劵数值最高为"+uni.getStorageSync("GetPlatform_S").off_max+" The number can not proceed "+uni.getStorageSync("GetPlatform_S").off_max});this.yhje_value=1-this.yhje_value}else if(this.countries[s.countryIndex].indexOf("就餐券")>-1){if("1"!==uni.getStorageSync("UserData").is_vip&&parseInt(e.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").jiucan_num_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"Max:"+uni.getStorageSync("GetPlatform_S").jiucan_num_max+"请升级VIP商户来激活更高数额 Please upgrade to VIP for a higher value."})}else if(this.countries[s.countryIndex].indexOf("代金券")>-1&&"1"!==uni.getStorageSync("UserData").is_vip&&parseInt(e.detail.value)>parseInt(uni.getStorageSync("GetPlatform_S").daijin_max))return this.setData({yhje_value:""}),void uni.showModal({title:"提示",content:"Max:"+uni.getStorageSync("GetPlatform_S").jiucan_num_max+"请升级VIP商户来激活更高数额 Please upgrade to VIP for a higher value."})},formSubmit:function(e){var t=this.mdid,i=(uni.getStorageSync("UserData").id,Number(this.cscountryIndex)),s=this.countries[this.countryIndex],l=e.detail.value.yhje,u=e.detail.value.yhtj,c=e.detail.value.ffsl,o=this.timestart,r=this.timeend,v=e.detail.value.syxz,d=(v="使用说明",e.detail.value.lqje),w=e.detail.value.fxsl,p=e.detail.value.tyqmc;if(n.strlen(e.detail.value.guan_jian_ci)>12)uni.showModal({title:"Tips",content:"12 words at most,最多六个汉字,12个字母"});else if(e.detail.value.guan_jian_ci.indexOf(".com")>-1)uni.showModal({title:"Tips",content:".com cannot be included 不能包含.com网址"});else{if(null==d&&(d=""),null==w&&(w=""),null==p&&(p=""),"通用券"==s&&""==p)return uni.showModal({title:"提示",content:"您选择的通用券类型，请填写通用券名称"}),!1;var f=this.is_couset,h=this.lqcountryIndex;if("2"==this.ptxx.is_fxlq&&(h="1"),console.log(f,h),"2"==f)var _=0;"1"==f&&("0"==h&&(_=1),"1"==h&&(_=2),"2"==h&&(_=3));var g="",m=!0;if("1"==f&&"0"==h){if(""==d)return void uni.showModal({title:"提示",content:"请填写领券金额！"});if(""==w)return void uni.showModal({title:"提示",content:"请填写分享数量！"});if(10<Number(w))return void uni.showModal({title:"提示",content:"分享数量不能大于10"})}if("1"!=f||"1"!=h||""!=d){if("1"==f&&"2"==h){if(""==w)return void uni.showModal({title:"提示",content:"请填写分享数量！"});if(10<Number(w))return void uni.showModal({title:"提示",content:"分享数量不能大于10"})}""==l?g="请填写优惠金额！":""==c?g="请填写发放数量！":n.validTime(o,r)?""==v?g="请填写优惠券使用说明！":(m=!1,a.globalData.util.request({url:"entry/wxapp/AddCoupons",cachetime:"0",data:{md_id:t,name:s,cost:l,conditions:u,number:c,start_time:o,end_time:r,introduce:v,lq_money:d,zf_num:w,lq_mode:_,kq_name:p,guan_jian_ci:e.detail.value.guan_jian_ci,is_lqxz:i?"1":"2"},success:function(e){"xianzhi_xianshi"==e.data&&uni.showModal({title:"提示",content:"您需要升级为VIP后才能继续发布券 Please upgrade to VIP for more coupon publication",confirmText:"OK",showCancel:!1,success:function(e){e.confirm?(console.log("用户点击确定"),uni.redirectTo({url:"sjzx/sjvip"})):e.cancel}}),1==e.data?(uni.showToast({title:"提交成功",icon:"success",duration:1e3}),setTimeout((function(){uni.navigateBack({})}),1e3)):"不能发布"==e.data?uni.showModal({title:"提示",content:"您需要升级为VIP后才能继续发布券 Please upgrade to VIP for more coupon publication",showCancel:!1,confirmText:"OK",success:function(e){e.confirm?(console.log("用户点击确定"),uni.redirectTo({url:"sjzx/sjvip"})):e.cancel&&console.log("用户点击取消")}}):uni.showToast({title:"请重试",icon:"loading",duration:1e3})}})):g="有效日期的起始日期不能大于结束日期！",1==m&&uni.showModal({title:"提示",content:g})}else uni.showModal({title:"提示",content:"请填写领券金额！"})}}}};t.default=l},b5ac:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-566c116a]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.weui-cells__title[data-v-566c116a]{margin-top:.4em;margin-bottom:.4em;font-size:%?30?%}.head .weui-cell[data-v-566c116a]{height:%?120?%}.weui-cell[data-v-566c116a]{font-size:%?30?%}.picker[data-v-566c116a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.picker uni-picker[data-v-566c116a]{width:%?200?%}.weui-btn-area[data-v-566c116a]{margin:1em 15px 1em}.weui-select[data-v-566c116a]{border-right:none}.weui-label uni-image[data-v-566c116a]{width:%?60?%;height:%?60?%}.weui-label[data-v-566c116a]{font-size:%?25?%}.sqzt[data-v-566c116a]{width:100%;height:100%;background:#fff;font-size:%?30?%;color:#666}.list_imgbk[data-v-566c116a]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-566c116a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-566c116a]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.button1[data-v-566c116a]{margin:%?80?%}.button1 uni-button[data-v-566c116a]{font-size:%?30?%}.weui-cell[data-v-566c116a]:before{border-top:%?1?% solid #e5e5e5}.weui-cell__bd[data-v-566c116a]{margin-left:14px;font-size:%?26?%}.xiaozi-tixing[data-v-566c116a]{font-size:xx-small;color:#999;\r\n    /* height: 120rpx; */overflow-y:scroll}.swiper-lb[data-v-566c116a]{width:100vw;height:50vw}.swiper-lb uni-image[data-v-566c116a]{width:100%;height:100%}.swiper-box[data-v-566c116a]{height:%?400?%;background:#fff}.swiper_tab[data-v-566c116a]{width:100%;height:%?40?%;background:#fff}.swiper-tab[data-v-566c116a]{width:%?40?%;margin:0 auto 0;display:-webkit-box;display:-webkit-flex;display:flex;background:#fff}.swiper-tab uni-view[data-v-566c116a]:nth-child(2){margin-left:%?10?%}.swiper-tab-list[data-v-566c116a]{display:inline-block;width:%?15?%;height:%?15?%;-webkit-box-flex:2;-webkit-flex:2;flex:2;background:#efeff4;border-radius:50%}body.?%PAGE?%[data-v-566c116a]{background:#efeff4}",""]),e.exports=t},c6fc:function(e,t,i){"use strict";var a=i("e76e"),n=i.n(a);n.a},e76e:function(e,t,i){var a=i("b5ac");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1302fa1c",a,!0,{sourceMap:!1,shadowMode:!1})},ffd4:function(e,t,i){"use strict";i.r(t);var a=i("67db"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a}}]);