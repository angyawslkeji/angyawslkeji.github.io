(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-my-glyhq-glyhq"],{"5a06":function(t,e,i){var a=i("d2d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e88483f8",a,!0,{sourceMap:!1,shadowMode:!1})},"6eef":function(t,e,i){"use strict";var a=i("5a06"),n=i.n(a);n.a},8001:function(t,e,i){"use strict";i.r(e);var a=i("bcd4"),n=i("af05");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("6eef");var s,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"a6762f3a",null,!1,a["a"],s);e["default"]=l.exports},a189:function(t,e,i){"use strict";i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n=i("8416"),o={data:function(){return{tabs:["有效的","失效的"],activeIndex:0,items1:[],items:[],url:"",startX:"",startY:""}},components:{},props:{},onLoad:function(t){var e=getApp().imgurl;console.log(e),this.setData({url:e})},onReady:function(){},onShow:function(){this.reLoad()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{tabClick:function(t){this.setData({activeIndex:t.currentTarget.id})},cksj:function(t){var e=t.currentTarget.dataset.yhqid,i=t.currentTarget.dataset.sjid;uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"glyhqdl?yhqid="+e+"&sjid="+i})},edit_kq:function(t){var e=t.currentTarget.dataset.yhqid;uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"upyhq?yhqid="+e})},reLoad:function(){var t=this,e=uni.getStorageSync("store_id"),i=n.formatTime(new Date).substring(0,10).replace(/\//g,"-");console.log(e,i),a.globalData.util.request({url:"entry/wxapp/ReleaseCoupons",cachetime:"0",data:{md_id:e},success:function(e){console.log(e.data);for(var a=e.data,o=0;o<a.length;o++)"通用券"==a[o].name&&(a[o].cost=a[o].cost);var s=[],c=[];for(o=0;o<a.length;o++)n.validTime1(i,a[o].end_time)&&"3"!=a[o].del?"2"==a[o].del&&s.push(a[o]):(a[o].isTouchMove=!1,c.push(a[o]));console.log(s,c),t.setData({items1:s,items:c})}})},touchstart1:function(t){this.items1.forEach((function(t,e){t.isTouchMove&&(t.isTouchMove=!1)})),this.setData({startX:t.changedTouches[0].clientX,startY:t.changedTouches[0].clientY,items1:this.items1})},touchmove1:function(t){var e=this,i=t.currentTarget.dataset.index,a=e.startX,n=e.startY,o=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,c=e.angle({X:a,Y:n},{X:o,Y:s});e.items1.forEach((function(t,e){t.isTouchMove=!1,30<Math.abs(c)||e==i&&(t.isTouchMove=!(a<o))})),e.setData({items1:e.items1})},touchstart:function(t){this.items.forEach((function(t,e){t.isTouchMove&&(t.isTouchMove=!1)})),this.setData({startX:t.changedTouches[0].clientX,startY:t.changedTouches[0].clientY,items:this.items})},touchmove:function(t){var e=this,i=t.currentTarget.dataset.index,a=e.startX,n=e.startY,o=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,c=e.angle({X:a,Y:n},{X:o,Y:s});e.items.forEach((function(t,e){t.isTouchMove=!1,30<Math.abs(c)||e==i&&(t.isTouchMove=!(a<o))})),e.setData({items:e.items})},angle:function(t,e){var i=e.X-t.X,a=e.Y-t.Y;return 360*Math.atan(a/i)/(2*Math.PI)},del:function(t){var e=this,i=t.currentTarget.dataset.yhqid;console.log(t,i),uni.showModal({title:"提示",content:"确认删除此券吗？删除后将失效",success:function(t){t.confirm?(console.log("用户点击确定"),a.globalData.util.request({url:"entry/wxapp/DelCoupons",cachetime:"0",data:{coupons_id:i},success:function(t){console.log(t.data),1==t.data&&(uni.showToast({title:"删除成功",icon:"success",duration:1e3}),setTimeout((function(){e.reLoad()}),1e3))}})):t.cancel&&console.log("用户点击取消")}})},del2:function(t){var e=this,i=t.currentTarget.dataset.yhqid;console.log(t,i),uni.showModal({title:"提示",content:"确认删除此券吗？删除后将从你的记录中删除",success:function(t){t.confirm?(console.log("用户点击确定"),a.globalData.util.request({url:"entry/wxapp/DelCoupons2",cachetime:"0",data:{coupons_id:i},success:function(t){console.log(t.data),1==t.data&&(uni.showToast({title:"删除成功",icon:"success",duration:1e3}),setTimeout((function(){e.reLoad()}),1e3))}})):t.cancel&&console.log("用户点击取消")}})}}};e.default=o},af05:function(t,e,i){"use strict";i.r(e);var a=i("a189"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},bcd4:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"list_header"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,class:"list_title "+(t.activeIndex==a?"default":"selsect"),attrs:{id:a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[i("v-uni-view",[t._v(t._s(e))]),!t.activeIndex!=a?i("v-uni-view",{staticClass:"list_border"}):t._e()],1)})),1),0!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.items1.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3",staticStyle:{"margin-top":"-20rpx"}},[t._v("您暂无有效的券哦！")])],1):t._e(),0!=t.items1.length?t._l(t.items1,(function(e,a){return i("v-uni-view",{key:a,staticClass:"touch-item"},[i("v-uni-view",{staticClass:"yhq"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhg1.png"}}),i("v-uni-navigator",{attrs:{url:"../../index/sjdl?sjid="+e.md_id}},[i("v-uni-view",{staticClass:"yhq-lt"},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+e.md_logo}})],1),i("v-uni-view",{staticClass:"yhq-bd"},[i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.conditions))]),"代金券 Cash"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"就餐券 Meal"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"折价券 Disc"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("%OFF")])],1):t._e(),"通用券 Offer"==e.name?i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v(t._s(e.kq_name))])],1):t._e(),i("v-uni-text",[t._v("有效期："+t._s(e.start_time)+"至"+t._s(e.end_time))])],1)],1),i("v-uni-view",{staticClass:"yhq-rt",staticStyle:{top:"30rpx"},attrs:{"data-sjid":e.md_id,"data-yhqid":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cksj.apply(void 0,arguments)}}},[t._v("查看数据")]),i("v-uni-view",{staticClass:"yhq-rt",staticStyle:{top:"110rpx",background:"#0099CC"},attrs:{"data-sjid":e.md_id,"data-yhqid":e.id,url:"upyhq?yhqid="+e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.edit_kq.apply(void 0,arguments)}}},[t._v("编辑卡券")])],1)],1)})):t._e()],2):t._e(),1!=!t.activeIndex?i("v-uni-view",{staticClass:"list"},[0!=!t.items.length?i("v-uni-view",{staticClass:"list_imgbk2"},[i("v-uni-image",{staticClass:"list_imgbk",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),i("v-uni-view",{staticClass:"list_imgbk3",staticStyle:{"margin-top":"-20rpx"}},[t._v("您暂无失效的券哦！")])],1):t._e(),0!=t.items.length?[i("v-uni-view",{staticClass:"yhsc"},[t._v("小提示：按住券右滑可删除券哦~")]),t._l(t.items,(function(e,a){return i("v-uni-view",{key:a,class:"touch-item "+(e.isTouchMove?"touch-move-active":""),attrs:{"data-index":a},on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"yhq1"},[i("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/yhg1.png"}}),i("v-uni-navigator",{attrs:{url:"glyhqdl?yhqid="+e.id+"&sjid="+e.md_id}},[i("v-uni-view",{staticClass:"yhq1-lt"},[i("v-uni-image",{attrs:{mode:"aspectFill",src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+e.md_logo}})],1),i("v-uni-view",{staticClass:"yhq1-bd"},[i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.conditions))]),"代金券 Cash"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"就餐券 Meal"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("元")])],1):t._e(),"折价券 Disc"==e.name?i("v-uni-text",[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v("%OFF")])],1):t._e(),"通用券 Offer"==e.name?i("v-uni-text",{staticClass:"gobyndsingle"},[t._v(t._s(e.cost)),i("v-uni-text",{staticStyle:{color:"#f44444","font-size":"30rpx","margin-left":"10rpx"}},[t._v(t._s(e.kq_name))])],1):t._e(),i("v-uni-text",[t._v("有效期："+t._s(e.start_time)+"至"+t._s(e.end_time))])],1)],1),"3"==e.del?i("v-uni-view",{staticClass:"yhq1-rt",staticStyle:{background:"#d5d5d5"},attrs:{"data-yhqid":e.id}},[t._v("已经删除")]):i("v-uni-view",{staticClass:"yhq1-rt",staticStyle:{background:"#d5d5d5"},attrs:{"data-yhqid":e.id}},[t._v("过期失效")])],1),i("v-uni-view",{staticClass:"del",attrs:{"data-yhqid":e.id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.del2.apply(void 0,arguments)}}},[t._v("删除")])],1)}))]:t._e()],2):t._e()],1)},o=[]},d2d0:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-a6762f3a]{background:#efeff4;overflow-x:hidden;width:100%}.list[data-v-a6762f3a]{margin-bottom:%?10?%;border-top:%?1?% solid #eee}.list_header[data-v-a6762f3a]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;height:%?80?%;background-color:#fff;line-height:%?80?%;margin-bottom:%?10?%}.list_border[data-v-a6762f3a]{width:%?200?%;height:%?5?%;margin-top:%?-5?%;background:#f44444}.selsect[data-v-a6762f3a]{color:#999}.default[data-v-a6762f3a]{color:#f44444;font-weight:700}.list_title[data-v-a6762f3a]{width:50%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list_imgbk[data-v-a6762f3a]{width:%?250?%;height:%?250?%;margin-bottom:%?30?%}.list_imgbk2[data-v-a6762f3a]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?500?%}.list_imgbk3[data-v-a6762f3a]{font-size:%?30?%;color:#999;text-align:center;line-height:%?30?%}.yhq[data-v-a6762f3a]{width:100%;height:%?180?%;position:relative;margin-top:%?20?%;margin-bottom:%?20?%;margin-right:0;-webkit-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);transform:translateX(90px);margin-left:%?-180?%}.yhq uni-image[data-v-a6762f3a]{width:94%;height:%?180?%;position:absolute;left:3%}.yhq-lt[data-v-a6762f3a]{position:absolute;left:%?50?%;top:%?50?%}.yhq-lt uni-image[data-v-a6762f3a]{width:%?80?%;height:%?80?%;border-radius:50%}.yhq-bd[data-v-a6762f3a]{width:%?400?%;height:%?160?%;position:absolute;left:%?160?%;top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.yhq-bd uni-text[data-v-a6762f3a]:nth-child(1){font-size:%?25?%;color:#999}.yhq-bd uni-text[data-v-a6762f3a]:nth-child(2){font-weight:700}.yhq-bd uni-text[data-v-a6762f3a]:nth-child(3){font-size:%?25?%;color:#999}.yhq-rt[data-v-a6762f3a]{line-height:%?40?%;position:absolute;right:%?40?%;font-size:%?28?%;height:%?40?%;background:#f44444;color:#fff;top:%?70?%;border-radius:10px;padding:0 5px}.yhq1[data-v-a6762f3a]{width:100%;height:%?180?%;position:relative;margin-top:%?20?%;margin-bottom:%?20?%;margin-right:0;-webkit-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);transform:translateX(90px);margin-left:%?-180?%}.yhq1 uni-image[data-v-a6762f3a]{width:94%;height:%?180?%;position:absolute;left:3%}.yhq1-lt[data-v-a6762f3a]{position:absolute;left:%?50?%;top:%?50?%}.yhq1-lt uni-image[data-v-a6762f3a]{width:%?80?%;height:%?80?%;border-radius:50%}.yhq1-bd[data-v-a6762f3a]{width:%?400?%;height:%?160?%;position:absolute;left:%?160?%;top:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;justify-content:space-around}.yhq1-bd uni-text[data-v-a6762f3a]:nth-child(1){font-size:%?25?%;color:#999}.yhq1-bd uni-text[data-v-a6762f3a]:nth-child(2){font-weight:700}.yhq1-bd uni-text[data-v-a6762f3a]:nth-child(3){font-size:%?25?%;color:#999}.yhq1-rt[data-v-a6762f3a]{line-height:%?40?%;position:absolute;right:%?40?%;font-size:%?28?%;height:%?40?%;background:#f44444;color:#fff;top:%?70?%;border-radius:10px;padding:0 5px}.touch-item[data-v-a6762f3a]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;overflow:hidden}.content[data-v-a6762f3a]{width:100%;padding:10px;line-height:22px;margin-right:0;-webkit-transition:all .4s;transition:all .4s;-webkit-transform:translateX(90px);transform:translateX(90px);margin-left:-90px}.del[data-v-a6762f3a]{margin-top:%?20?%;margin-bottom:%?20?%;background-color:#f44444;width:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;-webkit-transform:translateX(90px);transform:translateX(90px);-webkit-transition:all .4s;transition:all .4s}.touch-move-active .yhq1[data-v-a6762f3a],.touch-move-active .del[data-v-a6762f3a]{-webkit-transform:translateX(0);transform:translateX(0)}.yhsc[data-v-a6762f3a]{font-size:%?28?%;color:#999;text-align:center}body.?%PAGE?%[data-v-a6762f3a]{background:#efeff4}",""]),t.exports=e}}]);