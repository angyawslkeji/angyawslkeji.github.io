(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-sqrz"],{"00d9":function(e,i,t){"use strict";t("99af"),t("a434"),t("acd8"),t("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),s=t("66c3"),n=[],l=[],o="",c={data:function(){return{mdid:"",issq:!1,isbj:!1,isyz:!0,isbd:!1,url1:"",url2:"",VerifyCode:"验证",bdsjhtext:"验证微信手机号",lxr:"",sjh:"",yzm:"",jwd:"",mdmc:"",mdgg:"",zsnum:0,hy:[],checkbox:[],qyIndex:0,hyIndex:0,timestart:"06:00",timeend:"22:00",weizhi:"",checkboxItems:[{name:"WIFI",value:"WIFI"},{name:"停车位 PARKING",value:"停车位"},{name:"支付宝 ALIPAY",value:"支付宝支付"},{name:"微信支付 WECHAT PAY",value:"微信支付"},{name:"信用卡 VISA",value:"VISA"},{name:"PAYWAVE",value:"PAYWAVE"},{name:"24小时营业",value:"hours24"}],logo:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/logo.png",images:[],lbimages:[],uploadedImages:[],fwxy:!0,UserData:uni.getStorageSync("UserData"),hyid:"",zfmoney:"",zfts:"",radioItems:"",isdx:"",ptxx:"",qy:"",is_check:""}},components:{},props:{},onLoad:function(e){n=[],l=[],o="";var i=uni.getStorageSync("UserData").id,t=this;console.log(getApp().globalData.imglink,getApp().globalData.getuniacid),a.globalData.util.request({url:"entry/wxapp/IsSms",cachetime:"0",success:function(e){console.log(e.data),"1"==e.data.is_sms&&(console.log("关闭了短信"),t.setData({isdx:!1})),"2"==e.data.is_sms&&(console.log("开启了短信"),t.setData({isdx:!0}))}}),a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(e){console.log(e),t.setData({ptxx:e.data})}}),a.globalData.util.request({url:"entry/wxapp/city",cachetime:"0",success:function(e){console.log(e),t.setData({qy:e.data})}}),a.globalData.util.request({url:"entry/wxapp/Type",cachetime:"0",success:function(e){console.log(e.data),t.setData({hy:e.data,hyid:e.data[0].id})}}),a.globalData.util.request({url:"entry/wxapp/GetMdid",cachetime:"0",data:{user_id:i},success:function(e){console.log(e),""!=e.data?(t.setData({is_check:e.data.is_check,mdid:e.data.id}),("2"==e.data.is_check&&"1"!=e.data.is_rz||"2"==e.data.is_check)&&(t.setData({issq:!0,isbj:!0}),uni.showModal({title:"提示",content:"您的微信账户已经开通早早商铺。如需注册其他商铺，请使用其他微信账户。This WeChat Account already registered ZaoZao Vendor. If you need additional ZaoZao vendor, please use alternative WeChat Account.",success:function(e){uni.navigateBack({})}}))):t.setData({issq:!0,isbj:!1})}}),a.globalData.util.request({url:"entry/wxapp/RzSet",cachetime:"0",success:function(e){console.log(e.data),t.setData({radioItems:e.data})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},hqsjh:function(e){console.log(e.detail.value),this.setData({sjh:e.detail.value}),""!=e.detail.value?this.setData({isyz:!1}):this.setData({isyz:!0})},setVerify:function(){var e=s.getRandomNum();this.setData({yzm:e});var i=this.sjh;console.log(i),console.log(e);return/^(\d{8}|\d{11})$/.test(i),uni.showToast({title:"手机号错误",duration:1e3}),!1},dw:function(){var e=this;uni.chooseLocation({success:function(i){console.log(i),e.setData({weizhi:i.address,jwd:i.latitude+","+i.longitude})}})},bindTimeChange:function(e){console.log(e.detail.value),this.setData({timestart:e.detail.value})},bindTimeChange1:function(e){console.log(e.detail.value),this.setData({timeend:e.detail.value})},bindquyuChange:function(e){console.log("picker type 发生选择改变，携带值为",e.detail.value),this.setData({qyIndex:e.detail.value})},bindTypeChange:function(e){console.log("picker type 发生选择改变，携带值为",e.detail.value,this.hy[e.detail.value].id),this.setData({hyIndex:e.detail.value,hyid:this.hy[e.detail.value].id})},checkboxChange:function(e){console.log("checkbox发生change事件，携带value值为：",e.detail.value),this.setData({checkbox:e.detail.value}),console.log(s.in_array("WIFI",e.detail.value));for(var i=this.checkboxItems,t=e.detail.value,a=0,n=i.length;a<n;++a){i[a].checked=!1;for(var l=0,o=t.length;l<o;++l)if(i[a].value==t[l]){i[a].checked=!0;break}}this.setData({checkboxItems:i})},chooseLogo:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(i){uni.showToast({icon:"loading",title:"正在上传"});var t=i.tempFilePaths;console.log(t),uni.uploadFile({url:"https://spb2u1.ihogu.com/app/index.php?i=3&c=entry&a=wxapp&do=upload&m=zh_zbkq",filePath:i.tempFilePaths[0],name:"upfile",success:function(i){console.log(i),o=i.data,""!=i.data?(e.isbj&&e.setData({url1:""}),e.setData({logo:t[0]})):uni.showModal({title:"提示",content:"上传失败",showCancel:!1})},fail:function(e){console.log(e),uni.showModal({title:"提示",content:"上传失败",showCancel:!1})},complete:function(){uni.hideToast()}})}})},chooseImage:function(){var e=this,i=this.images;n=[],uni.chooseImage({count:5-i.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){uni.showToast({icon:"loading",title:"正在上传"});var a=t.tempFilePaths;console.log(a);var s=t.tempFilePaths;i=i.concat(s),console.log(i),e.uploadimg({url:"https://spb2u1.ihogu.com/app/index.php?i=3&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:i})}})},lbchooseImage:function(){var e=this,i=this.lbimages;l=[],uni.chooseImage({count:3-i.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){uni.showToast({icon:"loading",title:"正在上传"});var a=t.tempFilePaths;console.log(a);var s=t.tempFilePaths;i=i.concat(s),console.log(i),e.lbuploadimg({url:"https://spb2u1.ihogu.com/app/index.php?i=3&c=entry&a=wxapp&do=upload&m=zh_zbkq",path:i})}})},previewImage:function(){uni.previewImage({urls:this.images})},uploadimg:function(e){var i=this,t=e.i?e.i:0,a=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[t],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),a++,n.push(e.data),console.log(t),console.log("开通门店时候提交的图片数组",n)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+t+"fail:"+s)},complete:function(){console.log(t),++t==e.path.length?(i.setData({images:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+a+" 失败："+s)):(console.log(t),e.i=t,e.success=a,e.fail=s,i.uploadimg(e))}})},lbuploadimg:function(e){var i=this,t=e.i?e.i:0,a=e.success?e.success:0,s=e.fail?e.fail:0;uni.uploadFile({url:e.url,filePath:e.path[t],name:"upfile",formData:null,success:function(e){""!=e.data?(console.log(e),a++,l.push(e.data),console.log(t),console.log("开通门店时候提交的轮播图片数组",l)):uni.showToast({icon:"loading",title:"请重试"})},fail:function(e){s++,console.log("fail:"+t+"fail:"+s)},complete:function(){console.log(t),++t==e.path.length?(i.setData({lbimages:e.path}),uni.hideToast(),console.log("执行完毕"),console.log("成功："+a+" 失败："+s)):(console.log(t),e.i=t,e.success=a,e.fail=s,i.lbuploadimg(e))}})},deleteFun:function(e){var i=e.currentTarget.dataset.index,t=this.images;t.splice(i,1),n.splice(i,1),console.log("删除images里的图片后剩余的图片",n),this.setData({images:t})},lbdelete:function(e){var i=e.currentTarget.dataset.index,t=this.lbimages;t.splice(i,1),l.splice(i,1),console.log("删除lbimages里的图片后剩余的图片",l),this.setData({lbimages:t})},radioChange:function(e){console.log("radio发生change事件，携带value值为：",e.detail.value);for(var i=this.radioItems,t=0,a=i.length;t<a;++t)i[t].checked=i[t].id==e.detail.value,i[t].checked&&this.setData({zfmoney:i[t].money,zfts:i[t].days});this.setData({radioItems:i})},formSubmit:function(e){console.log(n,123);var i=this,t=parseFloat(this.zfmoney),c=this.zfts;t=0,c=36500;var u=e.detail.value.radiogroup;u=1;var d=n,r=l,v=this.mdid,h=uni.getStorageSync("UserData").id;if(null!=e.detail.value.mdqy){var p=this.qy[e.detail.value.mdqy].name;p=e.detail.value.mdqy}else p="";var g=o,f=this.yzm;if(console.log("随机生成的验证码",f),e.detail.value.weizhi_street)if(e.detail.value.weizhi_city)if(e.detail.value.weizhi_country){var w=e.detail.value.lxr,m=e.detail.value.sjh,_=e.detail.value.yanzm,y=e.detail.value.weizhi_street+","+e.detail.value.weizhi_city+","+e.detail.value.weizhi_country,b=this.jwd,x=e.detail.value.mdmc,C=e.detail.value.mddh,k=e.detail.value.mdgg,z=e.detail.value.email;console.log(w,m,_,y,C,b,x,k);var D=this.timestart,q=this.timeend,S=this.hyid,I=this.checkbox,P=s.in_array("WIFI",this.checkbox),T=s.in_array("停车位",this.checkbox),j=s.in_array("支付宝支付",this.checkbox),E=s.in_array("微信支付",this.checkbox),F=s.in_array("PAYWAVE",this.checkbox),A=s.in_array("hours24",this.checkbox),$=s.in_array("VISA",this.checkbox);console.log(D,q,S,I,P,T,j,E);var M="",N=!0;""==w?M="请填写联系人！Please upload the business logo!":""==m?M="请填写手机号！Please fill in the mobile number!        ":(/^(\d{8}|\d{11})$/.test(m),""==_&&i.isdx?M="请填写您收到的验证码！Please fill in the verification code you received!":_!=f&&i.isdx?M="验证码不正确！Incorrect verification code!":""==y?M="请填写门店位置Please fill in the location of the store":""==x?M="请填写门店名称Please fill in the store name":""==C?M="请填写门店电话Please fill in the store phone number":0==I.length?M="请选择店内设施Please select in store facilities":""==k?M="请填写门店简介Please fill in the shop info":(d.length,r.length,""==u?M="请选择入驻期限Please select the entry period":""==z?M="请输入邮箱Please input email":(N=!1,t<=0?a.globalData.util.request({url:"entry/wxapp/SaveMd",cachetime:"0",data:{md_id:v,user_id:h,link_name:w,yz_tel:m,address:y,md_name:x,md_logo:g,start_time:D,end_time:q,form_id:e.detail.formId,type_id:S,WiFi:P,park:T,apy:j,VISA:$,PAYWAVE:F,hours24:A,wei:E,notice:k,imgs:d,lb_imgs:r,coordinates:b,link_tel:C,day:c,email:z,city_name:p},success:function(e){console.log(e.data);var s=e.data;"入驻失败"!=s&&(uni.showModal({title:"Tips",content:"入驻成功！后台正在建立账户，请耐心等待....Success ! Your Account will be ready shortly.... ",showCancel:!1,success:function(){uni.navigateBack()}}),a.globalData.util.request({url:"entry/wxapp/RzOrder",cachetime:"0",data:{user_id:h,store_id:s,day:c,money:t},success:function(e){console.log(e)}}),i.isdx&&a.globalData.util.request({url:"entry/wxapp/Sms",cachetime:"0",success:function(e){console.log(e)}})),"入驻失败"==e.data&&uni.showToast({title:"提交失败请重试",icon:"loading",duration:1e3}),"该门店已存在"==e.data&&uni.showModal({title:"提示",content:"本门店名称已存在，请重新填写 This name already exists, please pick another one."})}}):a.globalData.util.request({url:"entry/wxapp/pay",cachetime:"0",method:"GET",data:{openid:getApp().getOpenId,money:t},success:function(e){uni.requestPayment({timeStamp:e.data.timeStamp,nonceStr:e.data.nonceStr,package:e.data.package,signType:e.data.signType,paySign:e.data.paySign,success:function(e){console.log(e),a.globalData.util.request({url:"entry/wxapp/SaveFxMoney",cachetime:"0",data:{user_id:h,money:t},dataType:"json",success:function(e){}}),a.globalData.util.request({url:"entry/wxapp/SaveMd",cachetime:"0",data:{md_id:v,user_id:h,link_name:w,yz_tel:m,address:y,md_name:x,md_logo:g,start_time:D,end_time:q,type_id:S,WiFi:P,park:T,apy:j,wei:E,notice:k,imgs:d,lb_imgs:r,coordinates:b,link_tel:C,day:c,city_name:p},success:function(e){var s=e.data;"入驻失败"!=s&&(uni.showModal({title:"Tips",content:"提交成功"}),a.globalData.util.request({url:"entry/wxapp/RzOrder",cachetime:"0",data:{user_id:h,store_id:s,day:c,money:t},success:function(e){console.log(e)}}),i.isdx&&a.globalData.util.request({url:"entry/wxapp/Sms",cachetime:"0",success:function(e){console.log(e)}}),setTimeout((function(){uni.navigateBack({})}),1e3)),"入驻失败"==e.data&&uni.showToast({title:"提交失败请重试",icon:"loading",duration:1e3}),"该门店已存在"==e.data&&uni.showModal({title:"提示",content:"本门店名称已存在，请重新填写 This name already exists, please pick another one."})}})},complete:function(e){console.log(e.errMsg),uni.showToast({title:"取消支付",icon:"loading",duration:1e3})}})}})))),1==N&&uni.showModal({title:"提示",content:M})}else uni.showModal({title:"Tip",content:"Please input country"});else uni.showModal({title:"Tip",content:"Please input city"});else uni.showModal({title:"Tip",content:"Please input street"})},cxkt:function(){this.setData({issq:!0})},gongg:function(e){console.log(e.detail.value);var i=parseInt(e.detail.value.length);this.setData({zsnum:i})},getPhoneNumber:function(e){var i=this;console.log(e),console.log(e.detail.iv),console.log(e.detail.encryptedData),"getPhoneNumber:fail user deny"==e.detail.errMsg?uni.showModal({title:"提示",showCancel:!1,content:"您未授权获取您的手机号",success:function(e){}}):a.globalData.util.request({url:"entry/wxapp/Jiemi",cachetime:"0",data:{sessionKey:getApp().getSK,data:e.detail.encryptedData,iv:e.detail.iv},success:function(e){console.log("解密后的数据",e),null!=e.data.phoneNumber&&i.setData({sjh:e.data.phoneNumber,isbd:!0,bdsjhtext:"验证成功"})}})}}};i.default=c},"515d":function(e,i,t){"use strict";var a=t("ea57"),s=t.n(a);s.a},"5a12":function(e,i,t){"use strict";var a;t.d(i,"b",(function(){return s})),t.d(i,"c",(function(){return n})),t.d(i,"a",(function(){return a}));var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[e.issq?t("v-uni-view",[t("v-uni-form",{attrs:{reportSubmit:"true"},on:{reset:function(i){arguments[0]=i=e.$handleEvent(i),e.formReset.apply(void 0,arguments)},submit:function(i){arguments[0]=i=e.$handleEvent(i),e.formSubmit.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"head"},[t("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseLogo.apply(void 0,arguments)}}},[t("v-uni-image",{staticClass:"img",attrs:{mode:"aspectFill",src:e.url1+""+e.logo}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input top-head-fei-gonggong"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-text",[e._v("请输入店联系人 Enter contact persion")]),t("v-uni-input",{staticClass:"weui-input",attrs:{name:"lxr",placeholder:"非公共展示内容 / NOT for Public Display",value:e.lxr}})],1)],1),t("v-uni-view",{staticClass:"weui-cell weui-cell_input top-head-fei-gonggong"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-text",[e._v("请输入手机号码 Mobile Number")]),t("v-uni-input",{staticClass:"weui-input",attrs:{maxlength:"11",name:"sjh",placeholder:"非公共展示内容 / NOT for Public Display",type:"number",value:e.sjh},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.hqsjh.apply(void 0,arguments)}}}),t("v-uni-input",{staticClass:"weui-input hide",attrs:{disabled:"true",maxlength:"11",name:"sjh",type:"number",value:e.sjh}})],1),t("v-uni-view",{staticClass:"weui-cell__ft hide"},[e.isdx?t("v-uni-button",{class:"yanz "+(e.isyz?"":"yanz-on"),attrs:{disabled:e.isyz},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setVerify.apply(void 0,arguments)}}},[e._v(e._s(e.VerifyCode))]):t("v-uni-button",{class:"yanz yanz "+(e.isbd?"":"yanz-on"),attrs:{disabled:e.isbd,"open-type":"getPhoneNumber"},on:{getphonenumber:function(i){arguments[0]=i=e.$handleEvent(i),e.getPhoneNumber.apply(void 0,arguments)}}},[e._v(e._s(e.bdsjhtext))])],1)],1)],1)],1),e.isdx?t("v-uni-view",{staticClass:"yzm"},[t("v-uni-view",{staticClass:"left"},[e._v("验证码")]),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{maxlength:"6",name:"yanzm",placeholder:"请输入短信验证码",type:"number"}})],1)],1)],1)],1):e._e(),t("v-uni-view",{staticClass:"bottom address-view hide"},[t("v-uni-view",[t("v-uni-view",[e._v("门店位置")]),t("v-uni-view",[e._v("Locationz")])],1),t("v-uni-textarea",{attrs:{name:"mdwz",placeholder:"公共展示内容 For Public Display",value:e.weizhi}}),1==e.UserData.is_vip?t("v-uni-view",{staticClass:"dw",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.dw.apply(void 0,arguments)}}},[t("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/hqwz.png"}}),t("v-uni-view",[e._v("定位")])],1):e._e()],1),t("v-uni-view",{staticClass:"main"},[t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店街道")]),t("v-uni-view",[e._v("Street Address")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"weizhi_street",placeholder:"公共展示内容 For Public Display",value:e.weizhi_street}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店城市")]),t("v-uni-view",[e._v("City/Town")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"weizhi_city",placeholder:"公共展示内容 For Public Display",value:e.weizhi_city}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("国家")]),t("v-uni-view",[e._v("Country")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"weizhi_country",placeholder:"公共展示内容 For Public Display",value:e.weizhi_country}})],1)],1)],1)],1),"1"==e.ptxx.is_qy&&e.qy.length>0?t("v-uni-view",{staticClass:"bd hide"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店区域")]),t("v-uni-view",[e._v("City/Town")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-picker",{attrs:{name:"mdqy",range:e.qy,rangeKey:"name",value:e.qyIndex},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindquyuChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"weui-select weui-select_in-select-after",staticStyle:{"border-right":"none"}},[e._v(e._s(e.qy[e.qyIndex].name))])],1)],1)],1)],1)],1):e._e(),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店名称")]),t("v-uni-view",[e._v("Store Name")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"mdmc",placeholder:"公共展示内容 For Public Display",value:e.mdmc}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店电话")]),t("v-uni-view",[e._v("Phone")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"mddh",placeholder:"公共展示内容 For Public Display",type:"number",value:e.mddh}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[e._v("Email:")]),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-input",{staticClass:"weui-input",attrs:{name:"email",placeholder:"公共展示内容 For Public Display",value:e.email}})],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("营业时间")]),t("v-uni-view",[e._v("Time")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[t("v-uni-view",{staticClass:"weui-cell__bd picker"},[t("v-uni-picker",{attrs:{end:"23:59",mode:"time",start:"00:01",value:e.timestart},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindTimeChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timestart))])],1),t("v-uni-view",[e._v("至")]),t("v-uni-picker",{attrs:{end:"23:59",mode:"time",start:"00:01",value:e.timeend},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindTimeChange1.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"weui-input"},[e._v(e._s(e.timeend))])],1)],1)],1)],1)],1),t("v-uni-view",{staticClass:"bd"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("所属行业")]),t("v-uni-view",[e._v("Class")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell weui-cell_input",staticStyle:{border:"none"}},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-picker",{attrs:{range:e.hy,rangeKey:"name",value:e.hyIndex},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.bindTypeChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"weui-select weui-select_in-select-after",staticStyle:{"border-right":"none"}},[e._v(e._s(e.hy[e.hyIndex].name))])],1)],1)],1)],1)],1)],1),t("v-uni-view",{staticClass:"dnss",staticStyle:{"flex-direction":"column"}},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("店内设施 Structure")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-checkbox-group",{on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.checkboxItems,(function(i,a){return t("v-uni-label",{key:a,staticClass:"weui-cell weui-check__label"},[t("v-uni-checkbox",{staticClass:"weui-check",attrs:{value:i.value}}),t("v-uni-view",{staticClass:"weui-cell__hd weui-check__hd_in-checkbox"},[i.checked?e._e():t("v-uni-icon",{staticClass:"weui-icon-checkbox_circle",attrs:{color:"#f44444",size:"23",type:"circle"}}),i.checked?t("v-uni-icon",{staticClass:"weui-icon-checkbox_success",attrs:{color:"#f44444",size:"23",type:"success"}}):e._e()],1),t("v-uni-view",{staticClass:"weui-cell__bd"},[e._v(e._s(i.name))])],1)})),1)],1)],1),t("v-uni-view",{staticClass:"gg"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店简介")]),t("v-uni-view",[e._v("Shop Info")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"weui-cell"},[t("v-uni-view",{staticClass:"weui-cell__bd"},[t("v-uni-textarea",{staticClass:"weui-textarea",staticStyle:{height:"4.5em"},attrs:{maxlength:"100",name:"mdgg",placeholder:"公共展示内容 For Public Display",value:e.mdgg},on:{input:function(i){arguments[0]=i=e.$handleEvent(i),e.gongg.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"weui-textarea-counter"},[t("v-uni-text",{staticStyle:{color:"#f44444"}},[e._v(e._s(e.zsnum))]),e._v("/100个字")],1)],1)],1)],1)],1),t("v-uni-view",{staticClass:"mdtp hide"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("轮播图片")]),t("v-uni-view",[e._v("Pic Slies")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"tpjy"},[e._v("上传3张图片 Up to 3 photos")])],1)],1),t("v-uni-view",{staticClass:"mdtp1 hide",staticStyle:{"margin-bottom":"15rpx"}},[t("v-uni-view",{staticClass:"weui-uploader__bd"},[t("v-uni-view",{staticClass:"weui-uploader__files",attrs:{id:"uploaderFiles"}},e._l(e.lbimages,(function(i,a){return t("v-uni-view",{key:a,staticClass:"weui-uploader__file"},[t("v-uni-view",{staticClass:"x",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.lbdelete.apply(void 0,arguments)}}},[t("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),t("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:e.url2+""+i},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.previewImage.apply(void 0,arguments)}}})],1)})),1),e.lbimages.length<3?t("v-uni-view",{staticClass:"weui-uploader__input-box"},[e.isbj?e._e():t("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.lbchooseImage.apply(void 0,arguments)}}})],1):e._e()],1),e.isbj?e._e():t("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.lbimages.length)+"/3")])],1),t("v-uni-view",{staticClass:"mdtp"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("门店图片")]),t("v-uni-view",[e._v("Main Photo")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"tpjy"},[e._v("1-5张照片 1-5 picture")])],1)],1),t("v-uni-view",{staticClass:"mdtp1",staticStyle:{"margin-bottom":"15rpx"}},[t("v-uni-view",{staticClass:"weui-uploader__bd"},[t("v-uni-view",{staticClass:"weui-uploader__files",attrs:{id:"uploaderFiles"}},e._l(e.images,(function(i,a){return t("v-uni-view",{key:a,staticClass:"weui-uploader__file"},[t("v-uni-view",{staticClass:"x",attrs:{"data-index":a},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deleteFun.apply(void 0,arguments)}}},[t("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/x.png"}})],1),t("v-uni-image",{staticClass:"weui-uploader__img",attrs:{mode:"aspectFill",src:e.url2+""+i},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.previewImage.apply(void 0,arguments)}}})],1)})),1),e.images.length<9?t("v-uni-view",{staticClass:"weui-uploader__input-box"},[e.isbj?e._e():t("v-uni-view",{staticClass:"weui-uploader__input",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseImage.apply(void 0,arguments)}}})],1):e._e()],1),e.isbj?e._e():t("v-uni-view",{staticClass:"tpsl"},[e._v(e._s(e.images.length)+"/5")])],1),t("v-uni-view",{staticClass:"mdtp hide "},[t("v-uni-view",{staticClass:"left"},[t("v-uni-view",[e._v("入驻期限")]),t("v-uni-view",[e._v("Duration")])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"tpjy"},[e._v("（入驻期限到期后，需续费）")])],1)],1),t("v-uni-view",{staticClass:"hide weui-cells weui-cells_after-title",staticStyle:{padding:"20rpx 30rpx"}},[t("v-uni-radio-group",{attrs:{name:"radiogroup"},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.radioChange.apply(void 0,arguments)}}},e._l(e.radioItems,(function(i,a){return t("v-uni-label",{key:a,staticClass:"weui-cell weui-check__label"},[t("v-uni-radio",{staticClass:"weui-check",attrs:{checked:i.checked,value:i.id}}),t("v-uni-view",{staticClass:"weui-cell__hd weui-check__hd_in-checkbox"},[i.checked?e._e():t("v-uni-icon",{staticClass:"weui-icon-checkbox_circle",attrs:{color:"#f44444",size:"23",type:"circle"}}),i.checked?t("v-uni-icon",{staticClass:"weui-icon-checkbox_success",attrs:{color:"#f44444",size:"23",type:"success"}}):e._e()],1),t("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("入驻"+e._s(i.days)+"天，收费"+e._s(i.money)+"元")])],1)})),1)],1),t("v-uni-view",{staticClass:"read"},[t("v-uni-radio",{staticStyle:{zoom:"80%"},attrs:{checked:"true",color:"#ff6161"}}),t("v-uni-view",[e._v("我已阅读并同意"),t("v-uni-text",{staticClass:"readfont",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.lookck.apply(void 0,arguments)}}},[e._v("《平台入驻协议》")])],1)],1),t("v-uni-view",{staticClass:"read"},[e._v("I have read and agree the term and condition on vendor registration.")]),t("v-uni-view",{staticClass:"button"},[e.isbj?e._e():t("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{"form-type":"submit",type:"primary"}},[e._v("开通门店 Apply Shop")])],1)],1)],1)],1):t("v-uni-view",{staticClass:"sqzt"},["1"==e.is_check?t("v-uni-view",{staticClass:"list_imgbk2"},[t("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wx.png"}}),t("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的申请正在审核中,请耐心等待")])],1):e._e(),"3"==e.is_check?t("v-uni-view",{staticClass:"list_imgbk2"},[t("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),t("v-uni-view",{staticClass:"list_imgbk3"},[e._v("您的申请已被拒绝，点击重新开通再次开通门店")])],1):e._e(),"3"==e.is_check?t("v-uni-view",{staticClass:"button1"},[t("v-uni-button",{staticClass:"weui-btn",staticStyle:{"background-color":"#f44444"},attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.cxkt.apply(void 0,arguments)}}},[e._v("重新开通")])],1):e._e()],1),e.fwxy?e._e():t("v-uni-view",{staticClass:"zhezhao"}),e.fwxy?e._e():t("v-uni-view",{staticClass:"kcrzxy"},[t("v-uni-view",{staticClass:"kcrzxyhd"},[e._v("平台入驻协议")]),t("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[t("v-uni-rich-text",{attrs:{nodes:e.ptxx.rz_agreement}})],1),t("v-uni-view",{staticClass:"queren",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.queren.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)},n=[]},a016:function(e,i,t){var a=t("24fb");i=a(!1),i.push([e.i,"uni-page-body[data-v-608fe628]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.weui-input[data-v-608fe628]{font-size:%?27?%}.weui-cell[data-v-608fe628]{padding:10px 20px;font-size:%?30?%}.weui-cell_input[data-v-608fe628]{height:1.7em}.head[data-v-608fe628]{background:#fff;padding:%?15?% 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.head .left[data-v-608fe628]{width:%?150?%;height:%?150?%;margin:0 0 0 15px}.head .right[data-v-608fe628]{flex:1}.yanz[data-v-608fe628]{font-size:%?28?%;color:#999;line-height:2;margin-top:%?15?%;padding:%?5?% %?40?%;background:#fff}.yanz-on[data-v-608fe628]{background:#f44444;color:#fff}.yzm[data-v-608fe628]{border-top:%?1?% solid #d9d9d9;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.yzm .left[data-v-608fe628]{width:%?150?%;margin:0 0 0 15px;font-size:%?30?%;height:%?80?%;line-height:%?80?%}.yzm .right[data-v-608fe628]{flex:1;font-size:%?30?%}.main[data-v-608fe628]{margin-top:%?0?%;padding:%?15?% 0}.bd .weui-cell[data-v-608fe628]{border-bottom:%?1?% solid #d9d9d9}.bd[data-v-608fe628]{background:#fff;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.bd .left[data-v-608fe628]{font-size:%?27?%;margin:%?12?%;width:%?180?%}.bd .right[data-v-608fe628]{flex:1}.picker[data-v-608fe628]{display:flex;justify-content:space-between;align-items:center}.picker uni-picker[data-v-608fe628]{width:%?160?%}.dnss[data-v-608fe628]{margin-bottom:%?15?%;padding:%?20?% %?0?% %?20?% 0;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.dnss .left[data-v-608fe628]{font-size:%?30?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.dnss .right[data-v-608fe628]{flex:1;font-size:%?30?%}.dnss .right uni-checkbox-group[data-v-608fe628]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap}.dnss .weui-cell[data-v-608fe628]:before{border-top:none}.dnss .weui-cell[data-v-608fe628]{width:%?220?%;padding:%?15?% %?5?%}.weui-check__hd_in-checkbox[data-v-608fe628]{padding-right:0}.gg[data-v-608fe628]{margin-bottom:%?15?%;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.gg .left[data-v-608fe628]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.gg .right[data-v-608fe628]{flex:1;font-size:%?30?%}.mdtp[data-v-608fe628]{background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;overflow-x:hidden}.mdtp .left[data-v-608fe628]{font-size:%?30?%;width:%?150?%;height:%?80?%;line-height:%?80?%;margin:0 0 0 %?40?%}.mdtp .right[data-v-608fe628]{flex:1;font-size:%?30?%}.mdtp .right .tpjy[data-v-608fe628]{color:#999;height:%?80?%;line-height:%?80?%}.tpsl[data-v-608fe628]{background:#fff;font-size:%?30?%;text-align:right;padding:%?10?% %?40?%}.mdtp1[data-v-608fe628]{overflow-x:hidden}.weui-uploader__bd[data-v-608fe628]{background:#fff;padding:0 0 0 %?40?%}.weui-uploader__file[data-v-608fe628]{margin-right:%?20?%;margin-bottom:%?20?%}.weui-uploader__img[data-v-608fe628]{margin-top:%?20?%;width:%?160?%;height:%?160?%}.weui-uploader__input-box[data-v-608fe628]{margin-top:%?20?%;margin-right:%?30?%;margin-bottom:%?30?%;width:%?160?%;height:%?160?%}.x[data-v-608fe628]{float:right;width:%?40?%;height:%?40?%;margin-left:%?10?%;z-index:999}.x uni-image[data-v-608fe628]{width:100%;height:100%}.bottom[data-v-608fe628]{padding:%?15?% %?40?%;font-size:%?30?%;margin-top:%?15?%;background:#fff;background:#fff;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.bottom uni-textarea[data-v-608fe628]{white-space:pre-wrap;text-align:center;width:100%;color:#333;margin:%?10?% 0;height:%?90?%}.dw[data-v-608fe628]{padding:4px 12px;color:#3cc51f;border:1px solid #3cc51f;border-radius:5px;display:flex;flex-direction:row;justify-content:center;align-items:center}.dw uni-image[data-v-608fe628]{width:%?50?%;height:%?50?%}.qdsc[data-v-608fe628]{padding:0 %?5?%;width:%?100?%;background:#f44444;color:#fff;font-size:%?30?%;line-height:2}.button[data-v-608fe628]{margin:%?40?%}.sqzt[data-v-608fe628]{width:100%;height:100%;background:#fff;font-size:%?30?%;color:#666}.list_imgbk[data-v-608fe628]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-608fe628]{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-608fe628]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.button1[data-v-608fe628]{margin:%?80?%}.button1 uni-button[data-v-608fe628]{font-size:%?30?%}.address-view[data-v-608fe628]{flex-direction:row}.address-view uni-textarea[data-v-608fe628]{text-align:left;padding-left:%?32?%}.bd .weui-cell[data-v-608fe628]{padding:10px 5px}.top-head-fei-gonggong[data-v-608fe628]{height:auto;color:#999}body.?%PAGE?%[data-v-608fe628]{background:#efeff4}",""]),e.exports=i},adb2:function(e,i,t){"use strict";t.r(i);var a=t("5a12"),s=t("b2d1");for(var n in s)"default"!==n&&function(e){t.d(i,e,(function(){return s[e]}))}(n);t("515d");var l,o=t("f0c5"),c=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"608fe628",null,!1,a["a"],l);i["default"]=c.exports},b2d1:function(e,i,t){"use strict";t.r(i);var a=t("00d9"),s=t.n(a);for(var n in a)"default"!==n&&function(e){t.d(i,e,(function(){return a[e]}))}(n);i["default"]=s.a},ea57:function(e,i,t){var a=t("a016");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=t("4f06").default;s("08c49080",a,!0,{sourceMap:!1,shadowMode:!1})}}]);