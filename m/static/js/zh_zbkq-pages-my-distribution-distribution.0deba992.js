(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-distribution-distribution"],{"0bf5":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.distribution[data-v-166bf950]{width:100%;overflow-x:hidden}.header[data-v-166bf950]{width:100%;height:%?220?%}.header>uni-image[data-v-166bf950]{width:100%;height:100%}.banner[data-v-166bf950]{margin-top:%?10?%;background-color:#fff;padding:%?0?% %?20?%;font-size:%?28?%}.huanying[data-v-166bf950]{font-size:%?30?%;padding:%?25?% %?0?%;border-bottom:%?2?% solid #eee}.huanying>uni-text[data-v-166bf950]{color:#f44444}.bannerbox[data-v-166bf950]{display:flex;align-items:center;height:%?80?%;border-bottom:%?2?% solid #eee;padding:%?0?% %?5?%}.bannerbox>uni-view[data-v-166bf950]{width:%?170?%;color:#666}.bannerbox>uni-input[data-v-166bf950]{border:none;outline:none}.disbox[data-v-166bf950]{background:#eee;padding:%?20?% %?30?%}.disbox>uni-button[data-v-166bf950]{border:none;outline:none;background-color:#34aaff;color:#fff;font-size:%?30?%;line-height:%?90?%}.section[data-v-166bf950]{border-bottom:%?2?% solid #eee;padding:%?15?% %?5?%;display:flex;align-items:center;font-size:%?28?%}.secimg[data-v-166bf950]{width:%?20?%;height:%?20?%;border-radius:50%;margin-right:%?30?%;background-color:#f44444}.read[data-v-166bf950]{display:flex;align-items:center;padding:%?20?% 0;color:#999}.readfont[data-v-166bf950]{color:#ff6161}.kcrzxy[data-v-166bf950]{width:70%;left:50%;top:15%;position:fixed;-webkit-transform:translate(-50%);transform:translate(-50%);background:#fff;border-radius:10px;z-index:999}.kcrzxyhd[data-v-166bf950]{text-align:center;font-size:%?30?%;background:#f44444;height:%?70?%;line-height:%?70?%;color:#fff;border-top-left-radius:10px;border-top-right-radius:10px}.kcrzxybd[data-v-166bf950]{font-size:%?28?%;padding:%?20?% %?30?%;box-sizing:border-box}.queren[data-v-166bf950]{position:relative;height:%?70?%;width:30%;left:35%;font-size:%?30?%;line-height:%?70?%;text-align:center;color:#fff;background:#f44444;border-radius:%?10?%;margin:5px 0}uni-button[data-v-166bf950]:active{color:hsla(0,0%,100%,.6);opacity:.6}.zhezhao[data-v-166bf950]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.6);z-index:998}uni-button[disabled][type="default"][data-v-166bf950],uni-button[disabled][data-v-166bf950]:not([type]){color:#fff}',""]),t.exports=e},"1a1c":function(t,e,a){"use strict";a.r(e);var i=a("69c6"),n=a("c204");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("3674");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"166bf950",null,!1,i["a"],s);e["default"]=l.exports},3674:function(t,e,a){"use strict";var i=a("9829"),n=a.n(i);n.a},"3bc5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),n={data:function(){return{fwxy:!0,disabled:!1,logintext:"申请",pt_name:"",url:"",img:"",fx_details:"",fxset:"",yqr:""}},components:{},props:{},onLoad:function(t){var e=this,a=uni.getStorageSync("UserData").id;i.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t),e.setData({pt_name:t.data.name,url:getApp().imgurl})}}),i.globalData.util.request({url:"entry/wxapp/FxSet",cachetime:"0",success:function(t){console.log(t.data),uni.setNavigationBarTitle({title:"申请"+t.data.fx_name}),e.setData({img:t.data.img2,fx_details:t.data.fx_details,fxset:t.data})}}),i.globalData.util.request({url:"entry/wxapp/MySx",cachetime:"0",data:{user_id:a},success:function(t){console.log(t.data),t.data?e.setData({yqr:t.data.nickname}):e.setData({yqr:"总店"})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{lookck:function(){this.setData({fwxy:!1})},queren:function(){this.setData({fwxy:!0})},formSubmit:function(t){console.log("form发生了submit事件，携带数据为：",t.detail.value);var e=this,a=uni.getStorageSync("UserData").id,n=t.detail.value.name,o=t.detail.value.tel,s=t.detail.value.checkbox.length;console.log(a,n,o,s);var r="",l=!0;""==n?r="请填写姓名！":""==o?r="请填写联系电话！":/^(\d{8}|\d{11})$/.test(o)?0==s?r="阅读并同意分销商申请协议":(e.setData({disabled:!0,logintext:"提交中..."}),l=!1,i.globalData.util.request({url:"entry/wxapp/Distribution",cachetime:"0",data:{user_id:a,user_name:n,user_tel:o},success:function(t){console.log(t),1==t.data?(uni.showToast({title:"提交成功"}),setTimeout((function(){uni.navigateBack({})}),1e3)):(uni.showToast({title:"请重试！",icon:"loading"}),e.setData({disabled:!1,logintext:"申请"}))}})):r="手机号错误！",1==l&&uni.showModal({title:"提示",content:r})}}};e.default=n},"69c6":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-form",{on:{reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)},submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"distribution"},[a("v-uni-view",{staticClass:"header"},[""!=t.img?a("v-uni-image",{attrs:{mode:"aspectFill",src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+t.img}}):t._e()],1),a("v-uni-view",{staticClass:"banner"},[a("v-uni-view",{staticClass:"huanying"},[t._v("欢迎加入"),a("v-uni-text",[t._v(t._s(t.pt_name))]),t._v("，请填写申请信息。")],1),a("v-uni-view",{staticClass:"bannerbox"},[a("v-uni-view",{},[t._v("邀请人")]),a("v-uni-input",{staticStyle:{color:"#f44444"},attrs:{disabled:"true",placeholderStyle:"color:#999;",type:"text",value:t.yqr}})],1),a("v-uni-view",{staticClass:"bannerbox"},[a("v-uni-view",{},[t._v("姓名")]),a("v-uni-input",{attrs:{name:"name",placeholder:"请填写真实姓名",placeholderStyle:"color:#999;",type:"text"}})],1),a("v-uni-view",{staticClass:"bannerbox"},[a("v-uni-view",{},[t._v("手机号")]),a("v-uni-input",{attrs:{name:"tel",placeholder:"请填写手机号码",placeholderStyle:"color:#999;",type:"number"}})],1),a("v-uni-view",{staticClass:"read"},[a("v-uni-checkbox-group",{attrs:{name:"checkbox"}},[a("v-uni-checkbox",{staticStyle:{zoom:"80%"},attrs:{color:"#ff6161",value:"1"}})],1),a("v-uni-view",[t._v("我已阅读并同意"),a("v-uni-text",{staticClass:"readfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lookck.apply(void 0,arguments)}}},[t._v("《"+t._s(t.fxset.fx_name)+"申请协议》")])],1)],1)],1),a("v-uni-view",{staticClass:"disbox"},[a("v-uni-button",{style:"background:"+(t.disabled?"#FF6A6A":"#f44444")+";",attrs:{disabled:t.disabled,"form-type":"submit"}},[t._v(t._s(t.logintext))])],1),a("v-uni-view",{staticClass:"banner"},[a("v-uni-view",{staticClass:"section"},[a("v-uni-image",{staticClass:"secimg"}),a("v-uni-view",[t._v(t._s(t.fxset.fx_name)+"优势")])],1),a("v-uni-view",{staticClass:"section"},[a("v-uni-rich-text",{staticStyle:{color:"#666"},attrs:{nodes:t.fxset.instructions}})],1)],1)],1)],1),t.fwxy?t._e():a("v-uni-view",{staticClass:"zhezhao"}),t.fwxy?t._e():a("v-uni-view",{staticClass:"kcrzxy"},[a("v-uni-view",{staticClass:"kcrzxyhd"},[t._v(t._s(t.fxset.fx_name)+"申请协议")]),a("v-uni-scroll-view",{staticClass:"kcrzxybd",staticStyle:{height:"600rpx"},attrs:{"scroll-y":!0}},[a("v-uni-rich-text",{attrs:{nodes:t.fx_details}})],1),a("v-uni-view",{staticClass:"queren",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.queren.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},o=[]},9829:function(t,e,a){var i=a("0bf5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("2d4a9703",i,!0,{sourceMap:!1,shadowMode:!1})},c204:function(t,e,a){"use strict";a.r(e);var i=a("3bc5"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);