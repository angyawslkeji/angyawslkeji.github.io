(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-wdq-getdl"],{"17fa":function(e,t,n){"use strict";n.r(t);var i=n("3624"),o=n("d974");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("aae0");var r,d=n("f0c5"),c=Object(d["a"])(o["default"],i["b"],i["c"],!1,null,"4d7fd595",null,!1,i["a"],r);t["default"]=c.exports},3624:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"drawer_screen",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.yczz.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"drawer_box"},[n("v-uni-view",{staticClass:"drawer_title"},[e._v("需要您的授权")]),n("v-uni-view",{staticClass:"drawer_title1"},[e._v("为了提供更好的服务")]),n("v-uni-view",{staticClass:"drawer_title1"},[e._v("请在稍后的提示框中点击“允许”")]),n("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/sqimg.png"}}),n("v-uni-button",{staticClass:"btn_ok",attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.bindGetUserInfo.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.yczz.apply(void 0,arguments)}}},[e._v("我知道了")])],1)],1)},a=[]},"3ff1":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".head[data-v-4d7fd595]{height:%?350?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.head uni-image[data-v-4d7fd595]{width:%?120?%;height:%?120?%;z-index:999}.hydlqueren[data-v-4d7fd595]{height:%?80?%;width:80%;font-size:%?30?%;line-height:%?80?%;text-align:center;color:#fff;background:#09bb07;border-radius:%?10?%;margin-top:%?100?%}.drawer_screen[data-v-4d7fd595]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000;background:#000;opacity:.7;overflow:hidden}.drawer_box[data-v-4d7fd595]{width:80vw;overflow:hidden;position:fixed;top:20%;left:0;z-index:1001;background:#fafafa;margin:0 10vw 0 10vw;border-radius:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.drawer_box uni-image[data-v-4d7fd595]{margin:%?40?% 0 %?40?% %?40?%;width:%?430?%;height:%?364?%}.drawer_title[data-v-4d7fd595]{padding:%?40?%;font:%?30?%,microsoft yahei;font-weight:700;text-align:center;color:#333}.drawer_title1[data-v-4d7fd595]{padding:0 %?20?%;font:%?27?%,microsoft yahei;text-align:center;color:#666}.drawer_content[data-v-4d7fd595]{height:210px;overflow-y:scroll}.btn_ok[data-v-4d7fd595]{padding:%?25?%;font:%?30?%,microsoft yahei;text-align:center;margin:%?5?% 0 %?40?%;background:#f44444;width:55vw;border-radius:%?50?%;color:#fff}",""]),e.exports=t},6108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=getApp(),o={data:function(){return{color:"#09BB07",userinfo:""}},components:{},props:{},onLoad:function(e){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{bindGetUserInfo:function(e){console.log(e);var t=getCurrentPages();console.log(t),"getUserInfo:ok"==e.detail.errMsg&&(uni.showLoading({title:"登录中...",mask:!0}),uni.getUserInfo({success:function(e){console.log(e),i.globalData.userInfo=e.userInfo,i.globalData.util.request({url:"entry/wxapp/login",cachetime:"0",data:{openid:getApp().getOpenId,img:e.userInfo.avatarUrl,nickname:e.userInfo.nickName},header:{"content-type":"application/json"},dataType:"json",success:function(e){console.log("用户信息",e),1<t.length&&t[t.length-2].setData({userinfo:e.data}),setTimeout((function(){uni.navigateBack({})}),1e3)}})}}))}}};t.default=o},aae0:function(e,t,n){"use strict";var i=n("f2f8"),o=n.n(i);o.a},d974:function(e,t,n){"use strict";n.r(t);var i=n("6108"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},f2f8:function(e,t,n){var i=n("3ff1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("18d8790f",i,!0,{sourceMap:!1,shadowMode:!1})}}]);