(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-distribution-txmx"],{"0b9c":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"list_header"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,class:"list_title "+(t.activeIndex==a?"default":"selsect"),attrs:{id:a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(e))]),!t.activeIndex!=a?i("v-uni-view",{staticClass:"list_border",staticStyle:{"background-color":"#f44444"}}):t._e()],1)})),1),0!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.dsh.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/list.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您暂时没有待审核的明细哦！")])],1):t._e(),t._l(t.dsh,(function(e,a){return i("v-uni-view",{key:a,staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("申请时间："+t._s(e.cerated_time))]),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#999"}},[t._v("等待审核")])],1),i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__hd"},["1"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zfb.png"}}):t._e(),"2"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/weixin.png"}}):t._e(),"3"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhk.png"}}):t._e()],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",[t._v("提现金额："+t._s(e.tx_cost)+"元")])],1),i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v("预计到账金额："+t._s(e.sj_cost))])],1),i("v-uni-view",{staticClass:"weui-cell"},["1"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("支付宝帐号："+t._s(e.account))]):t._e(),"2"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("微信帐号："+t._s(e.account))]):t._e(),"3"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("银行卡号："+t._s(e.account))]):t._e(),i("v-uni-navigator",{attrs:{"open-type":"redirect",url:"../kfzx"}},[i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{"font-size":"26rpx",color:"#f44444",border:"1rpx solid #f44444",padding:"6rpx 15rpx","border-radius":"30rpx"}},[t._v("联系客服")])],1)],1)],1)})),0==!t.dsh.length?i("v-uni-view",{staticClass:"kong"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",[t._v("没有更多了")])],1):t._e()],2):t._e(),1!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.ytg.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/list.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您暂时没有已通过的明细哦！")])],1):t._e(),t._l(t.ytg,(function(e,a){return i("v-uni-view",{key:a,staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("通过时间："+t._s(e.time))]),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#f44444"}},[t._v("提现成功")])],1),i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__hd"},["1"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zfb.png"}}):t._e(),"2"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/weixin.png"}}):t._e(),"3"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhk.png"}}):t._e()],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",[t._v("提现金额："+t._s(e.tx_cost)+"元")])],1),i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v("预计到账金额："+t._s(e.sj_cost))])],1),i("v-uni-view",{staticClass:"weui-cell"},["1"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("支付宝帐号："+t._s(e.account))]):t._e(),"2"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("微信帐号："+t._s(e.account))]):t._e(),"3"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("银行卡号："+t._s(e.account))]):t._e(),i("v-uni-navigator",{attrs:{"open-type":"redirect",url:"../kfzx"}},[i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{"font-size":"26rpx",color:"#f44444",border:"1rpx solid #f44444",padding:"6rpx 15rpx","border-radius":"30rpx"}},[t._v("联系客服")])],1)],1)],1)})),0==!t.ytg.length?i("v-uni-view",{staticClass:"kong"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",[t._v("没有更多了")])],1):t._e()],2):t._e(),2!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.yjj.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/list.png"}}),i("v-uni-view",{staticClass:"list_imgbk3"},[t._v("您暂时没有已拒绝的明细哦！")])],1):t._e(),t._l(t.yjj,(function(e,a){return i("v-uni-view",{key:a,staticClass:"weui-cells weui-cells_after-title"},[i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("审核时间："+t._s(e.time))]),i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{color:"#ff6161"}},[t._v("已被拒绝")])],1),i("v-uni-view",{staticClass:"weui-cell"},[i("v-uni-view",{staticClass:"weui-cell__hd"},["1"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zfb.png"}}):t._e(),"2"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/weixin.png"}}):t._e(),"3"==e.tx_type?i("v-uni-image",{staticClass:"himg",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhk.png"}}):t._e()],1),i("v-uni-view",{staticClass:"weui-cell__bd"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",[t._v("提现金额："+t._s(e.tx_cost)+"元")])],1),i("v-uni-view",{staticClass:"weui-cell__ft"},[t._v("预计到账金额："+t._s(e.sj_cost))])],1),i("v-uni-view",{staticClass:"weui-cell"},["1"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("支付宝帐号："+t._s(e.account))]):t._e(),"2"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("微信帐号："+t._s(e.account))]):t._e(),"3"==e.tx_type?i("v-uni-view",{staticClass:"weui-cell__bd"},[t._v("银行卡号："+t._s(e.account))]):t._e(),i("v-uni-navigator",{attrs:{"open-type":"redirect",url:"../kfzx"}},[i("v-uni-view",{staticClass:"weui-cell__ft",staticStyle:{"font-size":"26rpx",color:"#f44444",border:"1rpx solid #f44444",padding:"6rpx 15rpx","border-radius":"30rpx"}},[t._v("联系客服")])],1)],1)],1)})),0==!t.yjj.length?i("v-uni-view",{staticClass:"kong"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",[t._v("没有更多了")])],1):t._e()],2):t._e()],1)},n=[]},1102:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-4e964fb8]{background-color:#f5f5f5}.list_imgbk[data-v-4e964fb8]{width:%?260?%;height:%?260?%;margin-bottom:%?80?%}.list_imgbk2[data-v-4e964fb8]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?700?%}.list_imgbk3[data-v-4e964fb8]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.list_header[data-v-4e964fb8]{position:fixed;top:0;left:0;z-index:999;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?30?%;height:%?80?%;background-color:#fff;line-height:%?80?%}.list_title[data-v-4e964fb8]{width:33.33%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list_border[data-v-4e964fb8]{width:%?120?%;height:%?7?%;margin-top:%?-5?%}.selsect[data-v-4e964fb8]{color:#333}.default[data-v-4e964fb8]{color:#f44444}.kong[data-v-4e964fb8]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#666}.kong uni-image[data-v-4e964fb8]{width:%?80?%;height:%?80?%;margin-right:%?30?%}.list[data-v-4e964fb8]{margin-top:%?110?%}.weui-cells[data-v-4e964fb8]{font-size:%?30?%;color:#333;margin-top:%?20?%}.weui-cell__ft[data-v-4e964fb8]{color:#f44444}.weui-cell__bd[data-v-4e964fb8]{font-size:%?26?%}.weui-cell__bd uni-view[data-v-4e964fb8]{height:%?60?%;line-height:%?60?%}.himg[data-v-4e964fb8]{width:%?70?%;height:%?70?%;margin-right:%?30?%;vertical-align:middle}body.?%PAGE?%[data-v-4e964fb8]{background-color:#f5f5f5}",""]),t.exports=e},"5c03":function(t,e,i){"use strict";i.r(e);var a=i("779b"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"779b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),s=(i("8416"),{data:function(){return{tabs:["待审核","已通过","已拒绝"],activeIndex:0,dsh:"",ytg:"",yjj:""}},components:{},props:{},onLoad:function(t){this.reLoad()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.reLoad()},onReachBottom:function(){},methods:{tabClick:function(t){this.setData({activeIndex:t.currentTarget.id})},reLoad:function(){var t=this,e=uni.getStorageSync("UserData").id;a.globalData.util.request({url:"entry/wxapp/YjtxList",cachetime:"0",data:{user_id:e},success:function(e){console.log(e.data);for(var i=[],a=[],s=[],n=0;n<e.data.length;n++)"1"==e.data[n].status&&i.push(e.data[n]),"2"==e.data[n].status&&a.push(e.data[n]),"3"==e.data[n].status&&s.push(e.data[n]);console.log(i,a,s),t.setData({dsh:i,ytg:a,yjj:s})}})}}});e.default=s},"811d":function(t,e,i){var a=i("1102");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("02910e87",a,!0,{sourceMap:!1,shadowMode:!1})},8416:function(t,e,i){i("a15b"),i("d81d"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),i("1276");var a=function(t){var e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),n=t.getHours(),c=t.getMinutes(),o=t.getSeconds();return[e,i,a].map(s).join("/")+" "+[n,c,o].map(s).join(":")},s=function(t){return(t=t.toString())[1]?t:"0"+t};function n(t,e){var i=t.split("-"),a=e.split("-"),s=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0),n=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0);return!(s.getTime()>=n.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function c(t,e){var i=t.split("-"),a=e.split("-"),s=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0),n=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0);return!(s.getTime()>n.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function o(){for(var t=""+Math.round(1e6*Math.random());t.length<6;)t="0"+t;return console.info("randomNum is ========",t),t}function l(t,e){for(var i=0;i<e.length;i++)if(e[i]==t)return 1;return 2}function u(t,e,i,a){e=e||0,i=i||0,a=a||0;var s=(t=t||0)*Math.PI/180,n=i*Math.PI/180,c=s-n,o=e*Math.PI/180-a*Math.PI/180;return 12756274*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(s)*Math.cos(n)*Math.pow(Math.sin(o/2),2)))}function r(){var t=new Date,e=t.getMonth()+1,i=t.getDate();return 1<=e&&e<=9&&(e="0"+e),0<=i&&i<=9&&(i="0"+i),t.getFullYear()+"/"+e+"/"+i+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function p(t,e){var i=new Date(t.replace(/-/g,"/")),a=new Date(e),s=parseInt((a.getTime()-i.getTime())/1e3),n=Math.floor(s/86400/365);s%=31536e3;var c=Math.floor(s/86400/30);s%=2592e3;var o=Math.floor(s/86400);s%=86400;var l=Math.floor(s/3600);s%=3600;var u=Math.floor(s/60),r=s%=60;console.log(n,c,o,l,u,r);var p={};return p.day=o,p.hour=l,p.minute=u,p}function v(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+i(e.getMonth()+1,2)+"-"+i(e.getDate(),2)+" "+i(e.getHours(),2)+":"+i(e.getMinutes(),2)+":"+i(e.getSeconds(),2);function i(t,e){for(var i=""+t,a=i.length,s="",n=e;n-- >a;)s+="0";return s+i}}function w(t){for(var e=0,i=0;i<t.length;i++){var a=t.charCodeAt(i);a>=1&&a<=126||65376<=a&&a<=65439?e++:e+=2}return e}t.exports={strlen:w,formatTime:a,getRandomNum:o,in_array:l,getDistance:u,validTime:n,validTime1:c,getNowFormatDate:r,xctsfm:p,ormatDate:v}},"8c95":function(t,e,i){"use strict";var a=i("811d"),s=i.n(a);s.a},b4f6:function(t,e,i){"use strict";i.r(e);var a=i("0b9c"),s=i("5c03");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("8c95");var c,o=i("f0c5"),l=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"4e964fb8",null,!1,a["a"],c);e["default"]=l.exports}}]);