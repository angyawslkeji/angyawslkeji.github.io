(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-txzl"],{"235a":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[e.issq?a("v-uni-view",[a("v-uni-form",{attrs:{reportSubmit:"true"},on:{reset:function(t){arguments[0]=t=e.$handleEvent(t),e.formReset.apply(void 0,arguments)},submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"head"},[a("v-uni-view",{staticClass:"left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseLogo.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{mode:"aspectFill",src:e.url1+""+e.logo}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-input",{staticClass:"weui-input",attrs:{name:"lxr",placeholder:"请输入店联系人",value:e.lxr}})],1)],1),a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[e.isdx?a("v-uni-input",{staticClass:"weui-input",attrs:{maxlength:"11",name:"sjh",placeholder:"请输入手机号码",type:"number",value:e.sjh},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.hqsjh.apply(void 0,arguments)}}}):a("v-uni-input",{staticClass:"weui-input",attrs:{disabled:"true",maxlength:"11",name:"sjh",type:"number",value:e.sjh}})],1),a("v-uni-view",{staticClass:"weui-cell__ft hide"},[e.isdx?a("v-uni-button",{class:"yanz "+(e.isyz?"":"yanz-on"),attrs:{disabled:e.isyz},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setVerify.apply(void 0,arguments)}}},[e._v(e._s(e.VerifyCode))]):a("v-uni-button",{class:"yanz yanz "+(e.isbd?"":"yanz-on"),attrs:{disabled:e.isbd,"open-type":"getPhoneNumber"},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getPhoneNumber.apply(void 0,arguments)}}},[e._v(e._s(e.bdsjhtext))])],1)],1)],1)],1),e.isdx?a("v-uni-view",{staticClass:"yzm"},[a("v-uni-view",{staticClass:"left"},[e._v("验证码：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-input",{staticClass:"weui-input",attrs:{maxlength:"6",name:"yanzm",placeholder:"请输入短信验证码",type:"number"}})],1)],1)],1)],1):e._e(),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-text",[e._v("门店位置:请联系早早乐购客服部门更改门店地址")])],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"bd"},[a("v-uni-view",{staticClass:"left"},[e._v("门店名称：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-input",{staticClass:"weui-input",attrs:{name:"mdmc",placeholder:"请输入店铺名称",disabled:!0,value:e.mdmc}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"bd"},[a("v-uni-view",{staticClass:"left"},[e._v("门店电话：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-input",{staticClass:"weui-input",attrs:{name:"mddh",placeholder:"请输入店铺电话",type:"number",value:e.mddh}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"bd"},[a("v-uni-view",{staticClass:"left"},[e._v("营业时间：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd picker"},[a("v-uni-picker",{attrs:{end:"23:59",mode:"time",start:"00:01",value:e.timestart},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTimeChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timestart))])],1),a("v-uni-view",[e._v("至")]),a("v-uni-picker",{attrs:{end:"23:59",mode:"time",start:"00:01",value:e.timeend},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTimeChange1.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timeend))])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"bd"},[a("v-uni-view",{staticClass:"left"},[e._v("所属行业：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input",staticStyle:{border:"none"}},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-picker",{attrs:{range:e.hy,rangeKey:"name",value:e.hyIndex},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindTypeChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"weui-select weui-select_in-select-after",staticStyle:{"border-right":"none"}},[e._v(e._s(e.hy[e.hyIndex].name))])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"dnss",staticStyle:{"flex-direction":"column"}},[a("v-uni-view",{staticClass:"left"},[e._v("店内设施：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,(function(t,i){return a("v-uni-label",{key:i,staticClass:"weui-cell weui-check__label"},[a("v-uni-checkbox",{staticClass:"weui-check",attrs:{value:t.value}}),a("v-uni-view",{staticClass:"weui-cell__hd weui-check__hd_in-checkbox"},[t.checked?e._e():a("v-uni-icon",{staticClass:"weui-icon-checkbox_circle",attrs:{color:"#f44444",size:"23",type:"circle"}}),t.checked?a("v-uni-icon",{staticClass:"weui-icon-checkbox_success",attrs:{color:"#f44444",size:"23",type:"success"}}):e._e()],1),a("v-uni-view",{staticClass:"weui-cell__bd"},[e._v(e._s(t.name))])],1)})),1)],1)],1),a("v-uni-view",{staticClass:"gg"},[a("v-uni-view",{staticClass:"left"},[e._v("门店简介：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"weui-cell"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-textarea",{staticClass:"weui-textarea",staticStyle:{height:"4.5em"},attrs:{maxlength:"100",name:"mdgg",placeholder:"请输入文本",value:e.mdgg},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.gongg.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"weui-textarea-counter"},[a("v-uni-text",{staticStyle:{color:"#f44444"}},[e._v(e._s(e.zsnum))]),e._v("/100个字")],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"mdtp hide"},[a("v-uni-view",{staticClass:"left"},[e._v("轮播图片：")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"tpjy"},[e._v("上传3张图片")])],1)],1),a("v-uni-view",{staticClass:"mdtp1 hide",staticStyle:{"margin-bottom":"15rpx"}},[a("v-uni-view",{staticClass:"weui-uploader__bd"},[a("v-uni-view",{staticClass:"weui-uploader__files",attrs:{id:"uploaderFiles"}},[e._l(e.lbimages,(function(t,i){return a("v-uni-view",{key:i,staticClass:"weui-uploader__file"},[a("v-uni-view",{staticClass:"x",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lbdelete.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),a("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:e.url2+""+t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)})),e._l(e.lbimages1,(function(t,i){return a("v-uni-view",{key:i,staticClass:"weui-uploader__file"},[a("v-uni-view",{staticClass:"x",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lbdelete1.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),a("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)}))],2),e.lbimages.length+e.lbimages1.length<3?a("v-uni-view",{staticClass:"weui-uploader__input-box"},[e.isbj?a("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lbchooseImage1.apply(void 0,arguments)}}}):e._e(),e.isbj?e._e():a("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lbchooseImage.apply(void 0,arguments)}}})],1):e._e()],1),e.isbj?a("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.lbimages.length+e.lbimages1.length)+"/3")]):e._e(),e.isbj?e._e():a("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.lbimages.length)+"/3")])],1),a("v-uni-view",{staticClass:"mdtp"},[a("v-uni-view",{staticClass:"left lunbotu"},[a("v-uni-image",{staticStyle:{width:"45rpx",height:"45rpx","flex-shrink":"0","margin-top":"3rpx","margin-right":"5rpx","z-index":"5"},attrs:{mode:"widthFix",src:"https://we-pon-com-1251903635.cos.ap-hongkong.myqcloud.com/wxapp/img/vip3.png"}}),e._v("了解更多：")],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"tpjy"},[e._v("为保证显示效果，建议至少上传3张图片")])],1)],1),a("v-uni-view",{staticClass:"mdtp1"},[a("v-uni-view",{staticClass:"weui-uploader__bd"},[a("v-uni-view",{staticClass:"weui-uploader__files",attrs:{id:"uploaderFiles"}},[e._l(e.images,(function(t,i){return a("v-uni-view",{key:i,staticClass:"weui-uploader__file"},[a("v-uni-view",{staticClass:"x",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteFun.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),a("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:e.url2+""+t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)})),e._l(e.images1,(function(t,i){return a("v-uni-view",{key:i,staticClass:"weui-uploader__file"},[a("v-uni-view",{staticClass:"x",attrs:{"data-index":i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delete1.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),a("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:t},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}})],1)}))],2),e.images.length+e.images1.length<9?a("v-uni-view",{staticClass:"weui-uploader__input-box"},[e.isbj?a("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage1.apply(void 0,arguments)}}}):e._e(),e.isbj?e._e():a("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}})],1):e._e()],1),e.isbj?a("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.images.length+e.images1.length)+"/5")]):e._e(),e.isbj?e._e():a("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.images.length)+"/5")])],1),a("v-uni-view",{staticClass:"read"},[a("v-uni-radio",{staticStyle:{zoom:"80%"},attrs:{checked:"true",color:"#ff6161"}}),a("v-uni-view",[e._v("我已阅读并同意"),a("v-uni-text",{staticClass:"readfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookck.apply(void 0,arguments)}}},[e._v("《平台入驻协议》")])],1)],1),a("v-uni-view",{staticClass:"read"},[e._v("I have read and agree the term and condition on vendor registration.")]),a("v-uni-view",{staticClass:"button"},[e.isbj?e._e():a("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{"form-type":"submit",type:"primary"}},[e._v("开通门店")]),e.isbj?a("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{"form-type":"submit",type:"primary"}},[e._v("重新提交")]):e._e()],1)],1)],1)],1):a("v-uni-view",{staticClass:"sqzt"},["1"==e.is_check?a("v-uni-view",{staticClass:"list_imgbk2"},[a("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wx.png"}}),a("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的申请正在审核中,请耐心等待")])],1):e._e(),"3"==e.is_check?a("v-uni-view",{staticClass:"list_imgbk2"},[a("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),a("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的申请已被拒绝，点击重新开通再次开通门店")])],1):e._e(),"3"==e.is_check?a("v-uni-view",{staticClass:"button1"},[a("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cxkt.apply(void 0,arguments)}}},[e._v("重新开通")])],1):e._e()],1),e.fwxy?e._e():a("v-uni-view",{staticClass:"zhezhao"}),e.fwxy?e._e():a("v-uni-view",{staticClass:"kcrzxy"},[a("v-uni-view",{staticClass:"kcrzxyhd"},[e._v("平台入驻协议")]),a("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[a("v-uni-rich-text",{attrs:{nodes:e.ptxx.rz_agreement}})],1),a("v-uni-view",{staticClass:"queren",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.queren.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)},n=[]},"635d":function(e,t,a){"use strict";a.r(t);var i=a("6c7e"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},"6c7e":function(e,t,a){"use strict";a("99af"),a("a434"),a("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=getApp(),s=a("66c3"),n=[],l=[],o=[],c=[],u="",d={data:function(){return{mdid:"",issq:!1,isbj:!1,isyz:!0,isbd:!1,url1:"",url2:"",VerifyCode:"验证",bdsjhtext:"验证微信手机号",lxr:"",sjh:"",yzm:"",jwd:"",mdmc:"",mdgg:"",zsnum:0,hy:[],checkbox:[],hyIndex:0,timestart:"06:00",timeend:"22:00",weizhi:"",checkboxItems:[{name:"WIFI",value:"WIFI"},{name:"停车位 PARKING",value:"停车位"},{name:"支付宝 ALIPAY",value:"支付宝支付"},{name:"微信支付 WECHAT PAY",value:"微信支付"},{name:"信用卡 VISA",value:"VISA"},{name:"PAYWAVE",value:"PAYWAVE"},{name:"24小时营业",value:"hours24"}],logo:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/logo.png",images:[],images1:[],lbimages:[],lbimages1:[],uploadedImages:[],fwxy:!0,hyid:"",isdx:"",ptxx:"",is_check:"",mddh:""}},components:{},props:{},onLoad:function(e){n=[],l=[],o=[],c=[];var t=uni.getStorageSync("UserData").id,a=uni.getStorageSync("store_id"),s=this;console.log(getApp().globalData.imglink,getApp().globalData.getuniacid,t,a),i.globalData.util.request({url:"entry/wxapp/IsSms",cachetime:"0",success:function(e){console.log(e.data),"1"==e.data.is_sms&&(console.log("关闭了短信"),s.setData({isdx:!1})),"2"==e.data.is_sms&&(console.log("开启了短信"),s.setData({isdx:!0}))}}),i.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(e){console.log(e),s.setData({ptxx:e.data})}}),i.globalData.util.request({url:"entry/wxapp/Type",cachetime:"0",success:function(e){console.log(e.data),s.setData({hy:e.data,hyid:e.data[0].id})}}),i.globalData.util.request({url:"entry/wxapp/StoreInfo",cachetime:"0",data:{store_id:a},success:function(e){console.log(e),""!=e.data?(s.setData({is_check:e.data.is_check,mdid:e.data.id}),"2"==e.data.is_check&&(u=e.data.md_logo,n=e.data.newimg,o=e.data.lb_newimg,i.globalData.util.request({url:"entry/wxapp/Attachurl",cachetime:"0",success:function(e){console.log(e.data),s.setData({url1:e.data,url2:e.data})}}),s.setData({issq:!0,isbj:!0,isyz:!1,logo:e.data.md_logo,lxr:e.data.link_name,sjh:e.data.yz_tel,weizhi:e.data.address,jwd:e.data.coordinates,mdmc:e.data.md_name,mddh:e.data.link_tel,timestart:e.data.start_time,is_vip:e.data.is_vip,timeend:e.data.end_time,mdgg:e.data.notice,zsnum:parseInt(e.data.notice.length),images:e.data.newimg,lbimages:e.data.lb_newimg}),console.log("imgArray",n,"imgArray1",l,"images",s.images,"images1",s.images1,"lbimgArray",o,"lbimgArray1",c,"lbimages",s.lbimages,"lbimages1",s.lbimages1))):s.setData({issq:!0,isbj:!1})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},hqsjh:function(e){console.log(e.detail.value),this.setData({sjh:e.detail.value}),""!=e.detail.value?this.setData({isyz:!1}):this.setData({isyz:!0})},setVerify:function(){var e=s.getRandomNum();this.setData({yzm:e});var t=this.sjh;console.log(t),console.log(e);var a=60,n=this;if(!/^(\d{8}|\d{11})$/.test(t))return uni.showToast({title:"手机号错误",duration:1e3}),!1;var l=setInterval((function(){0<--a?n.setData({VerifyCode:a+" 秒",isyz:!0}):(n.setData({VerifyCode:"验证",isyz:!1}),clearInterval(l))}),1e3);i.globalData.util.request({url:"entry/wxapp/sms2",cachetime:"0",headers:{"Content-Type":"application/json"},data:{tel:t,code:e},success:function(e){console.log("111111111"),console.log(e),"操作成功"==e.data.reason&&uni.showToast({title:"发送成功",icon:"success",duration:1e3})},fail:function(e){console.log("error res="),console.log(e.data)}})},dw:function(){var e=this;uni.chooseLocation({success:function(t){console.log(t),e.setData({weizhi:t.address,jwd:t.latitude+","+t.longitude})}})},bindTimeChange:function(e){console.log(e.detail.value),this.setData({timestart:e.detail.value})},bindTimeChange1:function(e){console.log(e.detail.value),this.setData({timeend:e.detail.value})},bindTypeChange:function(e){console.log("picker type 发生选择改变，携带值为",e.detail.value,this.hy[e.detail.value].id),this.setData({hyIndex:e.detail.value,hyid:this.hy[e.detail.value].id})},checkboxChange:function(e){console.log("checkbox发生change事件，携带value值为：",e.detail.value),this.setData({checkbox:e.detail.value}),console.log(s.in_array("WIFI",e.detail.value));for(var t=this.checkboxItems,a=e.detail.value,i=0,n=t.length;i<n;++i){t[i].checked=!1;for(var l=0,o=a.length;l<o;++l)if(t[i].value==a[l]){t[i].checked=!0;break}}this.setData({checkboxItems:t})},chooseLogo:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){uni.showToast({icon:"loading",title:"正在上传"});var a=t.tempFilePaths;console.log(a),uni.uploadFile({url:getApp().globalData.imglink+"app/index.php?i="+getApp().globalData.getuniacid+"&c=entry&a=wxapp&do=upload&m=zh_zbkq",filePath:t.tempFilePaths[0],name:"upfile",success:function(t){console.log(t),u=t.data,""!=t.data?(e.isbj&&e.setData({url1:""}),e.setData({logo:a[0]})):uni.showModal({title:"提示",content:"上传失败",showCancel:!1})},fail:function(e){console.log(e),uni.showModal({title:"提示",content:"上传失败",showCancel:!1})},complete:function(){uni.hideToast()}})}})},chooseImage:function(){var e=this,t=this.images;n=[],uni.chooseImage({count:5-t.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){uni.showToast({icon:"loading",title:"正在上传"});var i=a.tempFilePaths;console.log(i);var s=a.tempFilePaths;t=t.concat(s),console.log(t),e.uploadimg({url:getApp().globalData.imglink+"app/index.php?i="+getApp().globalData.getuniacid+"&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:t})}})},lbchooseImage:function(){var e=this,t=this.lbimages;o=[],uni.chooseImage({count:3-t.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){uni.showToast({icon:"loading",title:"正在上传"});var i=a.tempFilePaths;console.log(i);var s=a.tempFilePaths;t=t.concat(s),console.log(t),e.lbuploadimg({url:getApp().globalData.imglink+"app/index.php?i="+getApp().globalData.getuniacid+"&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:t})}})},chooseImage1:function(){var e=this,t=this.images1;console.log(123,e.is_vip),"1"==e.is_vip?(l=[],uni.chooseImage({count:5-t.length-e.images.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){uni.showToast({icon:"loading",title:"正在上传"});var i=a.tempFilePaths;console.log(i);var s=a.tempFilePaths;t=t.concat(s),console.log(t),e.uploadimg1({url:getApp().globalData.imglink+"app/index.php?i="+getApp().globalData.getuniacid+"&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:t})}})):uni.showModal({title:"提示",content:"请升级VIP商户以使用改功能  Please upgrade to VIP use function."})},lbchooseImage1:function(){var e=this,t=this.lbimages1;c=[],uni.chooseImage({count:3-t.length-e.lbimages.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){uni.showToast({icon:"loading",title:"正在上传"});var i=a.tempFilePaths;console.log(i);var s=a.tempFilePaths;t=t.concat(s),console.log(t),e.lbuploadimg1({url:getApp().globalData.imglink+"app/index.php?i="+getApp().globalData.getuniacid+"&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:t})}})},previewImage:function(){uni.previewImage({urls:this.images})},uploadimg:function(e){var t=this,a=e.i?e.i:0,i=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[a],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),i++,n.push(e.data),console.log(a),console.log("开通门店时候提交的图片数组",n)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+a+"fail:"+s)},complete:function(){console.log(a),++a==e.path.length?(t.setData({images:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+i+" 失败："+s)):(console.log(a),e.i=a,e.success=i,e.fail=s,t.uploadimg(e))}})},lbuploadimg:function(e){var t=this,a=e.i?e.i:0,i=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[a],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),i++,o.push(e.data),console.log(a),console.log("开通门店时候提交的轮播图片数组",o)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+a+"fail:"+s)},complete:function(){console.log(a),++a==e.path.length?(t.setData({lbimages:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+i+" 失败："+s)):(console.log(a),e.i=a,e.success=i,e.fail=s,t.lbuploadimg(e))}})},uploadimg1:function(e){var t=this,a=e.i?e.i:0,i=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[a],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),i++,l.push(e.data),console.log(a),console.log("编辑信息时候提交的图片数组",l)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+a+"fail:"+s)},complete:function(){console.log(a),++a==e.path.length?(t.setData({images1:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+i+" 失败："+s)):(console.log(a),e.i=a,e.success=i,e.fail=s,t.uploadimg1(e))}})},lbuploadimg1:function(e){var t=this,a=e.i?e.i:0,i=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[a],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),i++,c.push(e.data),console.log(a),console.log("编辑信息时候提交的轮播图片数组",c)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+a+"fail:"+s)},complete:function(){console.log(a),++a==e.path.length?(t.setData({lbimages1:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+i+" 失败："+s)):(console.log(a),e.i=a,e.success=i,e.fail=s,t.lbuploadimg1(e))}})},deleteFun:function(e){var t=e.currentTarget.dataset.index,a=this.images;a.splice(t,1),n.splice(t,1),console.log("删除images里的图片后剩余的图片",n),this.setData({images:a})},delete1:function(e){var t=e.currentTarget.dataset.index,a=this.images1;a.splice(t,1),l.splice(t,1),console.log("删除images1里的图片后剩余的图片",l),this.setData({images1:a})},lbdelete:function(e){var t=e.currentTarget.dataset.index,a=this.lbimages;a.splice(t,1),o.splice(t,1),console.log("删除lbimages里的图片后剩余的图片",o),this.setData({lbimages:a})},lbdelete1:function(e){var t=e.currentTarget.dataset.index,a=this.lbimages1;a.splice(t,1),c.splice(t,1),console.log("删除lbimages1里的图片后剩余的图片",c),this.setData({lbimages1:a})},formSubmit:function(e){var t=this;if(console.log("imgArray",n,"imgArray1",l,"images",t.images,"images1",t.images1,"lbimgArray",o,"lbimgArray1",c,"lbimages",t.lbimages,"lbimages1",t.lbimages1),this.isbj){console.log("此提交是重新编辑");var a=n.concat(l),d=o.concat(c)}else console.log("此提交是开通门店"),a=n,d=o;var r=this.mdid,g=uni.getStorageSync("UserData").id;console.log(r,g),console.log("form发生了submit事件，携带数据为：",e.detail.value),console.log(u,n,l,a,d);var p=u,v=this.yzm;console.log("随机生成的验证码",v);var h=e.detail.value.lxr,m=e.detail.value.sjh,f=e.detail.value.yanzm,b=e.detail.value.mdwz,w=this.jwd,_=e.detail.value.mdmc,y=e.detail.value.mddh,x=e.detail.value.mdgg;console.log(h,m,f,b,y,w,_,x);var k=this.timestart,C=this.timeend,z=this.hyid,D=this.checkbox,j=s.in_array("WIFI",this.checkbox),I=s.in_array("停车位",this.checkbox),T=s.in_array("支付宝支付",this.checkbox),A=s.in_array("微信支付",this.checkbox),S=s.in_array("PAYWAVE",this.checkbox),q=s.in_array("hours24",this.checkbox),E=s.in_array("VISA",this.checkbox);console.log(k,C,z,D,j,I,T,A);var P="",F=!0;""==p?P="请上传商家Logo！":""==h?P="请填写联系人！":""==m?P="请填写手机号！":/^(\d{8}|\d{11})$/.test(m)?""==f&&t.isdx?P="请填写您收到的验证码！":f!=v&&t.isdx?P="验证码不正确！":""==b?P="请填写门店位置":""==_?P="请填写门店名称":""==y?P="请填写门店电话":0==D.length?P="请选择店内设施":""==x?P="请填写门店公告":0==a.length?P="请上传门店图片":(d.length,F=!1,i.globalData.util.request({url:"entry/wxapp/SaveMd",cachetime:"0",data:{md_id:r,link_name:h,yz_tel:m,address:b,md_name:_,md_logo:p,start_time:k,end_time:C,form_id:e.detail.formId,type_id:z,WiFi:j,park:I,apy:T,wei:A,VISA:E,PAYWAVE:S,notice:x,hours24:q,imgs:a,lb_imgs:d,coordinates:w,link_tel:y},success:function(e){console.log(e.data),1==e.data&&(uni.showToast({title:"提交成功",icon:"success",duration:1e3}),t.isdx&&i.globalData.util.request({url:"entry/wxapp/Sms",cachetime:"0",success:function(e){console.log(e)}}),setTimeout((function(){uni.navigateBack({})}),1e3)),2==e.data&&uni.showToast({title:"提交失败请重试",icon:"loading",duration:1e3}),"warning"==e.data&&uni.showModal({content:"联系人或门店名称或门店简介包含敏感内容,请删除重试,Contains prohibited content, please delete and try again",title:"提示"}),"该门店已存在"==e.data&&uni.showModal({title:"提示",content:"本门店名称已存在，请重新填写 This name already exists, please pick another one."})}})):P="手机号错误！",1==F&&uni.showModal({title:"提示",content:P})},cxkt:function(){this.setData({issq:!0})},gongg:function(e){console.log(e.detail.value);var t=parseInt(e.detail.value.length);this.setData({zsnum:t})},getPhoneNumber:function(e){var t=this;console.log(e),console.log(e.detail.iv),console.log(e.detail.encryptedData),"getPhoneNumber:fail user deny"==e.detail.errMsg?uni.showModal({title:"提示",showCancel:!1,content:"您未授权获取您的手机号",success:function(e){}}):i.globalData.util.request({url:"entry/wxapp/Jiemi",cachetime:"0",data:{sessionKey:getApp().getSK,data:e.detail.encryptedData,iv:e.detail.iv},success:function(e){console.log("解密后的数据",e),null!=e.data.phoneNumber&&t.setData({sjh:e.data.phoneNumber,isbd:!0,bdsjhtext:"验证成功"})}})}}};t.default=d},7131:function(e,t,a){"use strict";var i=a("fcb7"),s=a.n(i);s.a},9719:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-70bc4c2a]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.weui-cell[data-v-70bc4c2a]{padding:10px 20px;font-size:%?30?%}.weui-cell_input[data-v-70bc4c2a]{height:1.7em}.head[data-v-70bc4c2a]{background:#fff;padding:%?15?% 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.head .left[data-v-70bc4c2a]{width:%?150?%;height:%?150?%;margin:0 0 0 15px}.head .right[data-v-70bc4c2a]{flex:1}.yanz[data-v-70bc4c2a]{font-size:%?28?%;color:#999;line-height:2;margin-top:%?15?%;padding:%?5?% %?40?%;background:#fff}.yanz-on[data-v-70bc4c2a]{background:#f44444;color:#fff}.yzm[data-v-70bc4c2a]{border-top:%?1?% solid #d9d9d9;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.yzm .left[data-v-70bc4c2a]{width:%?150?%;margin:0 0 0 15px;font-size:%?30?%;height:%?80?%;line-height:%?80?%}.yzm .right[data-v-70bc4c2a]{flex:1;font-size:%?30?%}.main[data-v-70bc4c2a]{margin-top:%?0?%;padding:%?15?% 0}.bd .weui-cell[data-v-70bc4c2a]{border-bottom:%?1?% solid #d9d9d9}.bd[data-v-70bc4c2a]{background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.bd .left[data-v-70bc4c2a]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.bd .right[data-v-70bc4c2a]{flex:1}.picker[data-v-70bc4c2a]{display:flex;justify-content:space-between;align-items:center}.picker uni-picker[data-v-70bc4c2a]{width:%?160?%}.dnss[data-v-70bc4c2a]{margin-bottom:%?15?%;padding:%?20?% %?0?% %?20?% 0;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.dnss .left[data-v-70bc4c2a]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.dnss .right[data-v-70bc4c2a]{flex:1;font-size:%?30?%}.dnss .right uni-checkbox-group[data-v-70bc4c2a]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.dnss .weui-cell[data-v-70bc4c2a]:before{border-top:none}.dnss .weui-cell[data-v-70bc4c2a]{width:%?220?%;padding:%?15?% %?5?%}.weui-check__hd_in-checkbox[data-v-70bc4c2a]{padding-right:0}.gg[data-v-70bc4c2a]{margin-bottom:%?15?%;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.gg .left[data-v-70bc4c2a]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.gg .right[data-v-70bc4c2a]{flex:1;font-size:%?30?%}.mdtp[data-v-70bc4c2a]{background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;overflow-x:hidden}.mdtp .left[data-v-70bc4c2a]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?27?%}.mdtp .right[data-v-70bc4c2a]{flex:1;font-size:%?30?%}.mdtp .right .tpjy[data-v-70bc4c2a]{color:#999;height:%?80?%;line-height:%?80?%}.tpsl[data-v-70bc4c2a]{background:#fff;font-size:%?30?%;text-align:right;padding:%?10?% %?40?%}.mdtp1[data-v-70bc4c2a]{overflow-x:hidden}.weui-uploader__bd[data-v-70bc4c2a]{background:#fff;padding:0 0 0 %?40?%}.weui-uploader__file[data-v-70bc4c2a]{margin-right:%?20?%;margin-bottom:%?20?%}.weui-uploader__img[data-v-70bc4c2a]{margin-top:%?20?%;width:%?160?%;height:%?160?%}.weui-uploader__input-box[data-v-70bc4c2a]{margin-top:%?20?%;margin-right:%?30?%;margin-bottom:%?30?%;width:%?160?%;height:%?160?%}.x[data-v-70bc4c2a]{float:right;width:%?40?%;height:%?40?%;margin-left:%?10?%;z-index:999}.x uni-image[data-v-70bc4c2a]{width:100%;height:100%}.bottom[data-v-70bc4c2a]{padding:%?15?% %?40?%;font-size:%?30?%;margin-top:%?15?%;background:#fff;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.bottom uni-textarea[data-v-70bc4c2a]{white-space:pre-wrap;text-align:center;width:100%;color:#333;margin:%?10?% 0;height:%?90?%}.dw[data-v-70bc4c2a]{padding:4px 12px;color:#3cc51f;border:1px solid #3cc51f;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center}.dw uni-image[data-v-70bc4c2a]{width:%?50?%;height:%?50?%}.qdsc[data-v-70bc4c2a]{padding:0 %?5?%;width:%?100?%;background:#f44444;color:#fff;font-size:%?30?%;line-height:2}.button[data-v-70bc4c2a]{margin:%?40?%}.sqzt[data-v-70bc4c2a]{width:100%;height:100%;background:#fff;font-size:%?30?%;color:#666}.list_imgbk[data-v-70bc4c2a]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-70bc4c2a]{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-70bc4c2a]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.button1[data-v-70bc4c2a]{margin:%?80?%}.button1 uni-button[data-v-70bc4c2a]{font-size:%?30?%}.lunbotu[data-v-70bc4c2a]{display:flex;align-items:center;color:red;width:%?220?%!important}body.?%PAGE?%[data-v-70bc4c2a]{background:#efeff4}",""]),e.exports=t},c8b7:function(e,t,a){"use strict";a.r(t);var i=a("235a"),s=a("635d");for(var n in s)"default"!==n&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("7131");var l,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"70bc4c2a",null,!1,i["a"],l);t["default"]=c.exports},fcb7:function(e,t,a){var i=a("9719");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("0183f9ce",i,!0,{sourceMap:!1,shadowMode:!1})}}]);