(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-my"],{"21e3":function(e,t,i){"use strict";var a=i("84f3"),n=i.n(a);n.a},"34dc":function(e,t,i){"use strict";i.r(t);var a=i("5dda"),n=i("c85d");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("21e3");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"2b83e297",null);t["default"]=l.exports},"5dda":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[[i("v-uni-view",{staticClass:"navbar flex-row"},[i("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/index/index"}},[i("v-uni-view",{staticClass:"navbar-text "},[i("v-uni-view",[e._v("HOME")]),i("v-uni-view",[e._v("我的首页")])],1)],1),i("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/wdq/wdq"}},[i("v-uni-view",{staticClass:"navbar-text "},[i("v-uni-view",[e._v("COUPON")]),i("v-uni-view",[e._v("我的礼券")])],1)],1),i("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/my/my"}},[i("v-uni-view",{staticClass:"navbar-text "},[i("v-uni-view",[e._v("SERVICE")]),i("v-uni-view",[e._v("我的应用")])],1)],1)],1)],i("v-uni-view",{staticClass:"container",staticStyle:{"padding-bottom":"115rpx",height:"auto"}},[0!=e.lb.length?i("v-uni-swiper",{staticClass:"swiper-lb",style:"height:"+250*e.sysW/300+"px;",attrs:{autoplay:"true",circular:"true",duration:"300",indicatorActiveColor:"#f44444",indicatorColor:"#e5e5e5",indicatorDots:"true"}},e._l(e.lb,function(t,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-image",{attrs:{"data-index":a,mode:"widthFix",src:"http://spb2u1.ihogu.com/attachment/"+t.logo},on:{click:function(t){t=e.$handleEvent(t),e.tzsj(t)}}})],1)}),1):e._e(),i("v-uni-view",{staticClass:"myhead"},[i("v-uni-view",{staticClass:"bgimg"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/background2.png"}})],1),i("v-uni-view",{staticClass:"head"},[e.btnshowModal?i("v-uni-view",{staticClass:"mrtxc"},[i("v-uni-image",{staticClass:"mrtxl",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/mtx.png"}}),i("v-uni-view",{staticClass:"mrtxr"},[i("v-uni-view",{staticClass:"wxyh"},[e._v("微信用户")]),i("v-uni-button",{staticClass:"djsq",style:"background:"+e.color,attrs:{"open-type":"getUserInfo"},on:{getuserinfo:function(t){t=e.$handleEvent(t),e.bindGetUserInfo(t)}}},[e._v("点击授权")])],1)],1):[i("v-uni-view",{staticClass:"head-img"},[i("v-uni-image",{attrs:{src:e.userinfo.img}}),i("v-uni-view",[i("v-uni-view",{staticClass:"head-name"},[e.isvip?i("v-uni-view",{staticStyle:{color:"#f4ea2a"}},[e._v(e._s(e.userinfo.nickname))]):i("v-uni-view",[e._v(e._s(e.userinfo.nickname))]),e.isvip?i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/VIP1.png"}}):e._e()],1),e.isvip?i("v-uni-view",{staticClass:"dqsj"},[e._v("会员到期时间："+e._s(e.userinfo.dq_time))]):e._e()],1)],1),!e.isvip&&e.kgvip?i("v-uni-view",{staticClass:"head-vip ",on:{click:function(t){t=e.$handleEvent(t),e.sjvip(t)}}},[i("v-uni-view",[e._v("去升级VIP")]),i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/jiantou.png"}})],1):e._e(),e.isvip&&e.kgvip?i("v-uni-view",{staticClass:"head-vip",on:{click:function(t){t=e.$handleEvent(t),e.sjvip(t)}}},[i("v-uni-view",[e._v("续费")]),i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/jiantou.png"}})],1):e._e()]],2)],1),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-top":"30rpx","margin-bottom":"30rpx"}},[i("v-uni-view",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active"},on:{click:function(t){t=e.$handleEvent(t),e.login(t)}}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wdmd.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("我的登录 My Login")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1)],1),i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-top":"30rpx","margin-bottom":"30rpx"}},["1"==e.bqxx.is_rz?i("v-uni-navigator",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active"},on:{click:function(t){t=e.$handleEvent(t),e.wyrz(t)}}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wdyhq.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("我要入驻 JOIN ZAOZAOBUY")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1):e._e(),"1"==e.bqxx.is_apply?i("v-uni-navigator",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:"distribution/sqcs"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/ruzhu@2x.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("增加城市 ADD NEW CITY")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1):e._e(),"1"==e.bqxx.is_rz?i("v-uni-view",{staticClass:"weui-cell weui-cell_access hide",attrs:{hoverClass:"weui-cell_active",url:"wyrz"},on:{click:function(t){t=e.$handleEvent(t),e.sjvip(t)}}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/vip@2x.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("升级VIP UPGRADE TO VIP")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1):e._e(),"1"==e.is_fx?i("v-uni-navigator",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:"distribution/yaoqing"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/fxzx.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v(e._s(e.fxset.fx_name))]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1):e._e(),i("v-uni-navigator",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:"xfjl"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wdxf.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("我的消费 COUPON HISTORY")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1)],1),1==e.GetPlatform_S.is_show_more?i("v-uni-view",{staticClass:"weui-cells weui-cells_after-title",staticStyle:{"margin-bottom":"30rpx"}},[i("v-uni-navigator",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:"/zh_zbkq/pages/my/kfzx"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/bzzx.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("帮助中心 HELP CENTER")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1),i("v-uni-view",{staticClass:"weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:""},on:{click:function(t){t=e.$handleEvent(t),e.xszz(t)}}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"15rpx","vertical-align":"middle",width:"45rpx",height:"45rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/gzwm.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("关注我们 ABOUT US")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1),i("v-uni-navigator",{staticClass:"hide weui-cell weui-cell_access",attrs:{hoverClass:"weui-cell_active",url:"kfzx"}},[i("v-uni-view",{staticClass:"weui-cell__hd"},[i("v-uni-image",{staticStyle:{"margin-right":"20rpx","vertical-align":"middle",width:"40rpx",height:"40rpx"},attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/kfzx.png"}})],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[e._v("客服中心")]),i("v-uni-view",{staticClass:"weui-cell__ft weui-cell__ft_in-access"})],1)],1):e._e(),e._l(e.zbllz,function(e,t){return i("v-uni-ad",{key:t,attrs:{unitId:e.src}})}),i("v-uni-view",{staticClass:"copyright"},[i("v-uni-view",{staticClass:"copyright_logo",attrs:{"data-appid":e.bqxx.tz_appid},on:{click:function(t){t=e.$handleEvent(t),e.tzxcx(t)}}},[e.bqxx.copy_logo?i("v-uni-image",{staticClass:"copyright_img",attrs:{mode:"aspectFill",src:"http://spb2u1.ihogu.com/attachment/"+e.bqxx.copy_logo}}):e._e(),i("v-uni-view",{staticClass:"copyright_text"},[e._v(e._s(e.bqxx.name))])],1),i("v-uni-view",{staticClass:"copyright_txt"},[e._v(e._s(e.bqxx.wz))])],1)],2),e.showModal?i("v-uni-view",{staticClass:"drawer_screen",on:{click:function(t){t=e.$handleEvent(t),e.yczz(t)}}}):e._e(),e.showModal?i("v-uni-view",{staticClass:"drawer_box1"},[i("v-uni-view",{staticClass:"drawer_title"},[e._v("保存二维码添加微信")]),i("v-uni-image",{attrs:{"data-img":e.url+""+e.bqxx.ewm_logo,mode:"aspectFit",src:"http://spb2u1.ihogu.com/attachment/"+e.bqxx.ewm_logo},on:{click:function(t){t=e.$handleEvent(t),e.previewImage(t)}}}),i("v-uni-view",{staticClass:"drawer_title1"},[e._v("点击图片预览保存图片")]),i("v-uni-view",{staticClass:"btn_ok",on:{click:function(t){t=e.$handleEvent(t),e.yczz(t)}}},[e._v("确定")])],1):e._e()],2)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"84f3":function(e,t,i){var a=i("c070");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("dd1e1faa",a,!0,{sourceMap:!1,shadowMode:!1})},c070:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-2b83e297]{background:#efeff4;font-family:微软雅黑,Helvetica,sans-serif}.myhead[data-v-2b83e297]{position:relative;height:%?250?%}.weui-cell[data-v-2b83e297]{padding:%?25?% %?30?%}.bgimg[data-v-2b83e297]{position:absolute;width:100%;height:%?250?%}.bgimg uni-image[data-v-2b83e297]{width:100%;height:100%}.head[data-v-2b83e297]{height:%?250?%;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;position:absolute;padding:30px 30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.vipimg[data-v-2b83e297]{position:fixed;top:0;left:15px;width:%?120?%;height:15px}.head-img[data-v-2b83e297]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.head-img uni-image[data-v-2b83e297]{border-radius:50%;width:%?120?%;height:%?120?%}.dqsj[data-v-2b83e297]{font-size:%?27?%;margin-left:15px;color:#fff;margin-top:%?20?%}.head-name[data-v-2b83e297]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;margin-left:15px;color:#fff}.head-name uni-image[data-v-2b83e297]{margin-left:%?10?%;width:%?40?%;height:%?40?%}.head-vip[data-v-2b83e297]{font-size:%?30?%;color:#f4ea2a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.head-vip uni-image[data-v-2b83e297]{margin-left:15px;width:%?30?%;height:%?30?%}.bd[data-v-2b83e297]{background:#fff;padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?30?%}.bd-view[data-v-2b83e297]{-webkit-box-sizing:border-box;box-sizing:border-box;width:25%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bd-view uni-image[data-v-2b83e297]{width:%?55?%;height:%?55?%}.bd-view uni-text[data-v-2b83e297]{margin-top:%?10?%;font-size:%?30?%}.weui-cells[data-v-2b83e297]:after{border-bottom:none}.weui-cells[data-v-2b83e297]:before{border-top:none}.weui-cell__bd[data-v-2b83e297]{font-size:%?30?%}.drawer_screen[data-v-2b83e297]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000;background:#000;opacity:.5;overflow:hidden}.drawer_box[data-v-2b83e297]{width:70vw;overflow:hidden;position:fixed;top:40%;left:0;z-index:1001;background:#fafafa;margin:0 15vw 0 15vw;border-radius:5px}.drawer_box1[data-v-2b83e297]{width:70vw;overflow:hidden;position:fixed;top:20%;left:0;z-index:1001;background:#fafafa;margin:0 15vw 0 15vw;border-radius:5px}.drawer_box uni-image[data-v-2b83e297]{margin:2vw 10vw 0;width:50vw;height:50vw}.drawer_box1 uni-image[data-v-2b83e297]{margin:2vw 10vw 0;width:50vw;height:50vw}.drawer_title[data-v-2b83e297]{padding:%?30?%;font:%?30?%,microsoft yahei;text-align:center;color:#333}.drawer_title1[data-v-2b83e297]{padding:%?20?%;font:%?27?%,microsoft yahei;text-align:center;color:#999}.drawer_content[data-v-2b83e297]{height:210px;overflow-y:scroll}.btn_ok[data-v-2b83e297]{padding:%?25?%;font:%?30?%,microsoft yahei;text-align:center;border-top:%?1?% solid #e8e8ea;color:#333}.copyright[data-v-2b83e297]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?50?%}.copyright_logo[data-v-2b83e297]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.copyright_img[data-v-2b83e297]{width:%?40?%;height:%?40?%;margin-right:%?20?%;border-radius:%?6?%}.copyright_text[data-v-2b83e297]{color:#999;font-size:%?30?%}.copyright_txt[data-v-2b83e297]{font-size:%?26?%;color:#999;margin-top:%?5?%}.swiper-lb[data-v-2b83e297]{width:100vw;height:50vw}.swiper-lb uni-image[data-v-2b83e297]{width:100%;height:100%}.swiper-box[data-v-2b83e297]{height:%?400?%;background:#fff}.swiper_tab[data-v-2b83e297]{width:100%;height:%?40?%;background:#fff}.swiper-tab[data-v-2b83e297]{width:%?40?%;margin:0 auto 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#fff}.swiper-tab uni-view[data-v-2b83e297]:nth-child(2){margin-left:%?10?%}.swiper-tab-list[data-v-2b83e297]{display:inline-block;width:%?15?%;height:%?15?%;-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;background:#efeff4;border-radius:50%}body.?%PAGE?%[data-v-2b83e297]{background:#efeff4}",""])},c85d:function(e,t,i){"use strict";i.r(t);var a=i("d03c"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},d03c:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=getApp(),n={},s={data:function(){return{issq:!1,showModal:!1,sysW:uni.getSystemInfoSync().windowWidth,kgvip:!1,isvip:!1,btnshowModal:!1,lb:"",zbllz:"",userinfo:"",bqxx:"",url:"",mdid:"",is_fx:"",fxset:"",GetPlatform_S:""}},components:{},props:{},onLoad:function(e){n=this,a.globalData.util.request({url:"entry/wxapp/ad",bian_hao:uni.getStorageSync("select_city").bian_hao,cachetime:"0",success:function(e){console.log(e.data),n.setData({lb:e.data})}}),a.globalData.pageOnLoad(this),a.globalData.util.request({url:"entry/wxapp/GetToken",cachetime:"0",success:function(e){console.log(e.data)}}),this.reLoad()},onReady:function(){},onShow:function(){var e=this,t=uni.getStorageSync("UserData").id;a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(e){n.setData({GetPlatform_S:e.data})}}),console.log(t),a.globalData.util.request({url:"entry/wxapp/GetUserInfo",cachetime:"0",data:{user_id:t},success:function(t){console.log(t.data),e.setData({userinfo:t.data}),"1"==t.data.is_vip?e.setData({isvip:!0}):e.setData({isvip:!1})}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.reLoad(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){},methods:{xszz:function(){this.setData({showModal:!0})},yczz:function(){this.setData({showModal:!1})},glkq:function(){uni.showModal({title:"提示",content:"此功能正在开发中，敬请期待"})},wyrz:function(){window.open("https://form.jotform.com/210547431518856")},sjvip:function(){uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"sjvip"})},tjhxy:function(){uni.showLoading({title:"Loading..."}),this.issq?uni.navigateTo({url:"tjhxy/tjhxy"}):uni.showModal({title:"温馨提示",content:"成功开通门店并且发布券后方能添加核销员"})},login:function(){uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"sjzx/bbaa",success:function(e){},fail:function(e){},complete:function(e){}})},tzxcx:function(e){console.log(e.currentTarget.dataset.appid),uni.navigateToMiniProgram({appId:e.currentTarget.dataset.appid,success:function(e){console.log(e)}})},previewImage:function(e){console.log(e.currentTarget.dataset.img),uni.previewImage({current:e.currentTarget.dataset.img,urls:[e.currentTarget.dataset.img]})},bindGetUserInfo:function(e){console.log(e),"getUserInfo:ok"==e.detail.errMsg&&(this.setData({btnshowModal:!1}),this.reLoad())},reLoad:function(){var e=this,t=uni.getStorageSync("UserData").id;console.log(t),a.globalData.util.request({url:"entry/wxapp/Llz",cachetime:"0",data:{type:"3"},success:function(t){console.log(t),e.setData({zbllz:t.data})}}),a.globalData.util.request({url:"entry/wxapp/GetUserInfo",cachetime:"0",data:{user_id:t},success:function(t){console.log(t.data);var i=t.data;"1"==t.data.is_vip?e.setData({isvip:!0}):e.setData({isvip:!1}),uni.getSetting({success:function(t){console.log(t),t.authSetting["scope.userInfo"]?uni.getUserInfo({success:function(t){console.log(t.userInfo),a.globalData.util.request({url:"entry/wxapp/login",cachetime:"0",data:{openid:i.openid,img:t.userInfo.avatarUrl,name:t.userInfo.nickName},header:{"content-type":"application/json"},dataType:"json",success:function(t){console.log("用户信息",t),e.setData({userinfo:t.data})}})}}):(console.log("未授权过"),e.setData({btnshowModal:!0}))}})}});var i=getApp().imgurl;a.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t.data),e.setData({bqxx:t.data,url:i})}}),console.log(e),a.globalData.util.request({url:"entry/wxapp/GetMdid",cachetime:"0",data:{user_id:t},success:function(t){console.log(t),""!=t.data&&(e.setData({mdid:t.data.id}),"2"==t.data.is_check&&e.setData({issq:!0}))}}),a.globalData.util.request({url:"entry/wxapp/GetVip",cachetime:"0",success:function(t){console.log(t.data),"1"==t.data.status?(console.log("关闭了vip"),e.setData({kgvip:!1})):(console.log("开启了vip"),e.setData({kgvip:!0}))}}),a.globalData.util.request({url:"entry/wxapp/FxSet",cachetime:"0",success:function(t){console.log(t.data),e.setData({is_fx:t.data.is_open,fxset:t.data})}})}}};t.default=s}}]);