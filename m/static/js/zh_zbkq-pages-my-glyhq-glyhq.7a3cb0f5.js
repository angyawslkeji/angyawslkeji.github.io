(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-glyhq-glyhq"],{"0566":function(t,e,i){"use strict";i.r(e);var a=i("6cbc"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"0925":function(t,e,i){var a=i("7899");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3fffac4e",a,!0,{sourceMap:!1,shadowMode:!1})},"1d87":function(t,e,i){"use strict";i.r(e);var a=i("89bb"),n=i("0566");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("cd72");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"75e06c9e",null);e["default"]=c.exports},"503a":function(t,e,i){"use strict";var a=i("288e");i("a481");var n=a(i("e814"));i("28a5"),i("6b54"),i("87b3");var o=function(t){var e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),n=t.getHours(),o=t.getMinutes(),c=t.getSeconds();return[e,i,a].map(s).join("/")+" "+[n,o,c].map(s).join(":")},s=function(t){return(t=t.toString())[1]?t:"0"+t};function c(t,e){var i=t.split("-"),a=e.split("-"),o=new Date((0,n.default)(i[0]),(0,n.default)(i[1])-1,(0,n.default)(i[2]),0,0,0),s=new Date((0,n.default)(a[0]),(0,n.default)(a[1])-1,(0,n.default)(a[2]),0,0,0);return!(o.getTime()>=s.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function l(t,e){var i=t.split("-"),a=e.split("-"),o=new Date((0,n.default)(i[0]),(0,n.default)(i[1])-1,(0,n.default)(i[2]),0,0,0),s=new Date((0,n.default)(a[0]),(0,n.default)(a[1])-1,(0,n.default)(a[2]),0,0,0);return!(o.getTime()>s.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function r(){for(var t=""+Math.round(1e6*Math.random());t.length<6;)t="0"+t;return console.info("randomNum is ========",t),t}function u(t,e){for(var i=0;i<e.length;i++)if(e[i]==t)return 1;return 2}function d(t,e,i,a){e=e||0,i=i||0,a=a||0;var n=(t=t||0)*Math.PI/180,o=i*Math.PI/180,s=n-o,c=e*Math.PI/180-a*Math.PI/180;return 12756274*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(n)*Math.cos(o)*Math.pow(Math.sin(c/2),2)))}function f(){var t=new Date,e=t.getMonth()+1,i=t.getDate();return 1<=e&&e<=9&&(e="0"+e),0<=i&&i<=9&&(i="0"+i),t.getFullYear()+"/"+e+"/"+i+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function h(t,e){var i=new Date(t.replace(/-/g,"/")),a=new Date(e),o=(0,n.default)((a.getTime()-i.getTime())/1e3),s=Math.floor(o/86400/365);o%=31536e3;var c=Math.floor(o/86400/30);o%=2592e3;var l=Math.floor(o/86400);o%=86400;var r=Math.floor(o/3600);o%=3600;var u=Math.floor(o/60),d=o%=60;console.log(s,c,l,r,u,d);var f={};return f.day=l,f.hour=r,f.minute=u,f}function v(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+i(e.getMonth()+1,2)+"-"+i(e.getDate(),2)+" "+i(e.getHours(),2)+":"+i(e.getMinutes(),2)+":"+i(e.getSeconds(),2);function i(t,e){for(var i=""+t,a=i.length,n="",o=e;o-- >a;)n+="0";return n+i}}function m(t){for(var e=0,i=0;i<t.length;i++){var a=t.charCodeAt(i);a>=1&&a<=126||65376<=a&&a<=65439?e++:e+=2}return e}t.exports={strlen:m,formatTime:o,getRandomNum:r,in_array:u,getDistance:d,validTime:c,validTime1:l,getNowFormatDate:f,xctsfm:h,ormatDate:v}},"6cbc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a"),i("7f7f"),i("a481");var a=getApp(),n=i("503a"),o={data:function(){return{tabs:["有效的","失效的"],activeIndex:0,items1:[],items:[],url:"",startX:"",startY:""}},components:{},props:{},onLoad:function(t){var e=getApp().imgurl;console.log(e),this.setData({url:e})},onReady:function(){},onShow:function(){this.reLoad()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{tabClick:function(t){this.setData({activeIndex:t.currentTarget.id})},cksj:function(t){var e=t.currentTarget.dataset.yhqid,i=t.currentTarget.dataset.sjid;uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"glyhqdl?yhqid="+e+"&sjid="+i})},reLoad:function(){var t=this,e=uni.getStorageSync("store_id"),i=n.formatTime(new Date).substring(0,10).replace(/\//g,"-");console.log(e,i),a.globalData.util.request({url:"entry/wxapp/ReleaseCoupons",cachetime:"0",data:{md_id:e},success:function(e){console.log(e.data);for(var a=e.data,o=0;o<a.length;o++)"通用券"==a[o].name&&(a[o].cost=a[o].cost);var s=[],c=[];for(o=0;o<a.length;o++)n.validTime1(i,a[o].end_time)&&"3"!=a[o].del?"2"==a[o].del&&s.push(a[o]):(a[o].isTouchMove=!1,c.push(a[o]));console.log(s,c),t.setData({items1:s,items:c})}})},touchstart1:function(t){this.items1.forEach(function(t,e){t.isTouchMove&&(t.isTouchMove=!1)}),this.setData({startX:t.changedTouches[0].clientX,startY:t.changedTouches[0].clientY,items1:this.items1})},touchmove1:function(t){var e=this,i=t.currentTarget.dataset.index,a=e.startX,n=e.startY,o=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,c=e.angle({X:a,Y:n},{X:o,Y:s});e.items1.forEach(function(t,e){t.isTouchMove=!1,30<Math.abs(c)||e==i&&(t.isTouchMove=!(a<o))}),e.setData({items1:e.items1})},touchstart:function(t){this.items.forEach(function(t,e){t.isTouchMove&&(t.isTouchMove=!1)}),this.setData({startX:t.changedTouches[0].clientX,startY:t.changedTouches[0].clientY,items:this.items})},touchmove:function(t){var e=this,i=t.currentTarget.dataset.index,a=e.startX,n=e.startY,o=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,c=e.angle({X:a,Y:n},{X:o,Y:s});e.items.forEach(function(t,e){t.isTouchMove=!1,30<Math.abs(c)||e==i&&(t.isTouchMove=!(a<o))}),e.setData({items:e.items})},angle:function(t,e){var i=e.X-t.X,a=e.Y-t.Y;return 360*Math.atan(a/i)/(2*Math.PI)},del:function(t){var e=this,i=t.currentTarget.dataset.yhqid;console.log(t,i),uni.showModal({title:"提示",content:"确认删除此券吗？删除后将失效",success:function(t){t.confirm?(console.log("用户点击确定"),a.globalData.util.request({url:"entry/wxapp/DelCoupons",cachetime:"0",data:{coupons_id:i},success:function(t){console.log(t.data),1==t.data&&(uni.showToast({title:"删除成功",icon:"success",duration:1e3}),setTimeout(function(){e.reLoad()},1e3))}})):t.cancel&&console.log("用户点击取消")}})},del2:function(t){var e=this,i=t.currentTarget.dataset.yhqid;console.log(t,i),uni.showModal({title:"提示",content:"确认删除此券吗？删除后将从你的记录中删除",success:function(t){t.confirm?(console.log("用户点击确定"),a.globalData.util.request({url:"entry/wxapp/DelCoupons2",cachetime:"0",data:{coupons_id:i},success:function(t){console.log(t.data),1==t.data&&(uni.showToast({title:"删除成功",icon:"success",duration:1e3}),setTimeout(function(){e.reLoad()},1e3))}})):t.cancel&&console.log("用户点击取消")}})}}};e.default=o},7899:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-75e06c9e]{background:#efeff4;overflow-x:hidden;width:100%}.list[data-v-75e06c9e]{margin-bottom:%?10?%;border-top:%?1?% solid #eee}.list_header[data-v-75e06c9e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%;height:%?80?%;background-color:#fff;line-height:%?80?%;margin-bottom:%?10?%}.list_border[data-v-75e06c9e]{width:%?200?%;height:%?5?%;margin-top:%?-5?%;background:#f44444}.selsect[data-v-75e06c9e]{color:#999}.default[data-v-75e06c9e]{color:#f44444;font-weight:700}.list_title[data-v-75e06c9e]{width:50%;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.list_imgbk[data-v-75e06c9e]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-75e06c9e]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-75e06c9e]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.yhq[data-v-75e06c9e]{width:100%;height:%?180?%;position:relative;margin-top:%?20?%;margin-bottom:%?20?%;margin-right:0;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);-ms-transform:translateX(90px);transform:translateX(90px);margin-left:%?-180?%}.yhq uni-image[data-v-75e06c9e]{width:94%;height:%?180?%;position:absolute;left:3%}.yhq-lt[data-v-75e06c9e]{position:absolute;left:%?50?%;top:%?50?%}.yhq-lt uni-image[data-v-75e06c9e]{width:%?80?%;height:%?80?%;border-radius:50%}.yhq-bd[data-v-75e06c9e]{width:%?400?%;height:%?160?%;position:absolute;left:%?160?%;top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.yhq-bd uni-text[data-v-75e06c9e]:first-child{font-size:%?25?%;color:#999}.yhq-bd uni-text[data-v-75e06c9e]:nth-child(2){font-weight:700}.yhq-bd uni-text[data-v-75e06c9e]:nth-child(3){font-size:%?25?%;color:#999}.yhq-rt[data-v-75e06c9e]{line-height:%?40?%;position:absolute;right:%?40?%;font-size:%?28?%;height:%?40?%;background:#f44444;color:#fff;top:%?70?%;border-radius:10px;padding:0 5px}.yhq1[data-v-75e06c9e]{width:100%;height:%?180?%;position:relative;margin-top:%?20?%;margin-bottom:%?20?%;margin-right:0;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);-ms-transform:translateX(90px);transform:translateX(90px);margin-left:%?-180?%}.yhq1 uni-image[data-v-75e06c9e]{width:94%;height:%?180?%;position:absolute;left:3%}.yhq1-lt[data-v-75e06c9e]{position:absolute;left:%?50?%;top:%?50?%}.yhq1-lt uni-image[data-v-75e06c9e]{width:%?80?%;height:%?80?%;border-radius:50%}.yhq1-bd[data-v-75e06c9e]{width:%?400?%;height:%?160?%;position:absolute;left:%?160?%;top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.yhq1-bd uni-text[data-v-75e06c9e]:first-child{font-size:%?25?%;color:#999}.yhq1-bd uni-text[data-v-75e06c9e]:nth-child(2){font-weight:700}.yhq1-bd uni-text[data-v-75e06c9e]:nth-child(3){font-size:%?25?%;color:#999}.yhq1-rt[data-v-75e06c9e]{line-height:%?40?%;position:absolute;right:%?40?%;font-size:%?28?%;height:%?40?%;background:#f44444;color:#fff;top:%?70?%;border-radius:10px;padding:0 5px}.touch-item[data-v-75e06c9e]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;overflow:hidden}.content[data-v-75e06c9e]{width:100%;padding:10px;line-height:22px;margin-right:0;-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);-ms-transform:translateX(90px);transform:translateX(90px);margin-left:-90px}.del[data-v-75e06c9e]{margin-top:%?20?%;margin-bottom:%?20?%;background-color:#f44444;width:%?180?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff;-webkit-transform:translateX(90px);-ms-transform:translateX(90px);transform:translateX(90px);-webkit-transition:all .4s;-o-transition:all .4s;transition:all .4s}.touch-move-active .del[data-v-75e06c9e],.touch-move-active .yhq1[data-v-75e06c9e]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.yhsc[data-v-75e06c9e]{font-size:%?28?%;color:#999;text-align:center}body.?%PAGE?%[data-v-75e06c9e]{background:#efeff4}",""])},"89bb":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"list_header"},t._l(t.tabs,function(e,a){return i("v-uni-view",{key:a,class:"list_title "+(t.activeIndex==a?"default":"selsect"),attrs:{id:a},on:{click:function(e){e=t.$handleEvent(e),t.tabClick(e)}}},[i("v-uni-view",[t._v(t._s(e))]),!t.activeIndex!=a?i("v-uni-view",{staticClass:"list_border"}):t._e()],1)}),1),0!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.items1.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3",staticStyle:{"margin-top":"-20rpx"}},[t._v("您暂无有效的券哦！")])],1):t._e(),0!=t.items1.length?t._l(t.items1,function(e,a){return i("v-uni-view",{key:a,staticClass:"touch-item"},[i("v-uni-view",{staticClass:"yhq"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhg1.png"}}),i("v-uni-navigator",{attrs:{url:"../../index/sjdl?sjid="+e.md_id}},[i("v-uni-view",{staticClass:"yhq-lt"},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"http://spb2u1.ihogu.com/attachment/"+e.md_logo}})],1),i("v-uni-view",{staticClass:"yhq-bd"},[i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.conditions))]),"代金券 CASH COUPON"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"就餐券 Meal Voucher"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"折扣券 Discount coupon"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("%OFF")])],1):t._e(),"通用券 VOUCHER"==e.name?i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v(t._s(e.kq_name))])],1):t._e(),i("v-uni-text",[t._v("有效期："+t._s(e.start_time)+"至"+t._s(e.end_time))])],1)],1),i("v-uni-view",{staticClass:"yhq-rt",staticStyle:{top:"30rpx"},attrs:{"data-sjid":e.md_id,"data-yhqid":e.id},on:{click:function(e){e=t.$handleEvent(e),t.cksj(e)}}},[t._v("查看数据")]),i("v-uni-navigator",{staticClass:"yhq-rt",staticStyle:{top:"110rpx",background:"#0099CC"},attrs:{url:"upyhq?yhqid="+e.id}},[t._v("编辑卡券")])],1)],1)}):t._e()],2):t._e(),1!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.items.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3",staticStyle:{"margin-top":"-20rpx"}},[t._v("您暂无失效的券哦！")])],1):t._e(),0!=t.items.length?[i("v-uni-view",{staticClass:"yhsc"},[t._v("小提示：按住券右滑可删除券哦~")]),t._l(t.items,function(e,a){return i("v-uni-view",{key:a,class:"touch-item "+(e.isTouchMove?"touch-move-active":""),attrs:{"data-index":a},on:{touchmove:function(e){e=t.$handleEvent(e),t.touchmove(e)},touchstart:function(e){e=t.$handleEvent(e),t.touchstart(e)}}},[i("v-uni-view",{staticClass:"yhq1"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhg1.png"}}),i("v-uni-navigator",{attrs:{url:"glyhqdl?yhqid="+e.id+"&sjid="+e.md_id}},[i("v-uni-view",{staticClass:"yhq1-lt"},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"http://spb2u1.ihogu.com/attachment/"+e.md_logo}})],1),i("v-uni-view",{staticClass:"yhq1-bd"},[i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.conditions))]),"代金券 CASH COUPON"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"就餐券 Meal Voucher"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"折扣券 Discount coupon"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("%OFF")])],1):t._e(),"通用券 VOUCHER"==e.name?i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v(t._s(e.kq_name))])],1):t._e(),i("v-uni-text",[t._v("有效期："+t._s(e.start_time)+"至"+t._s(e.end_time))])],1)],1),"3"==e.del?i("v-uni-view",{staticClass:"yhq1-rt",staticStyle:{background:"#d5d5d5"},attrs:{"data-yhqid":e.id}},[t._v("已经删除")]):i("v-uni-view",{staticClass:"yhq1-rt",staticStyle:{background:"#d5d5d5"},attrs:{"data-yhqid":e.id}},[t._v("过期失效")])],1),i("v-uni-view",{staticClass:"del",attrs:{"data-yhqid":e.id},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.del2(e)}}},[t._v("删除")])],1)})]:t._e()],2):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},cd72:function(t,e,i){"use strict";var a=i("0925"),n=i.n(a);n.a}}]);