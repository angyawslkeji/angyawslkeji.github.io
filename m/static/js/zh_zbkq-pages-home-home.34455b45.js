(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zh_zbkq-pages-home-home"],{"0b73":function(t,e,a){"use strict";var i=a("9cdb"),n=a.n(i);n.a},"0f28":function(t,e,a){"use strict";a("99af"),a("a9e3"),a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),n=(a("dc2c"),a("f4ae")),o={data:function(){return{luntext:["全部","最新","离我最近"],activeIndex:0,sliderOffset:0,select:1,xspl:!0,qqsj:!1,pagenum:1,mygd:!1,jzgd:!0,zxlist:[],headinfo:"",url:"",ptxx:"",mdinfo:"",acitiveid:"",zantext:"",plzxid:""}},components:{},props:{},onLoad:function(t){i.globalData.pageOnLoad(this);var e=this;console.log(this),i.globalData.util.request({url:"entry/wxapp/Attachurl",cachetime:"0",success:function(t){console.log(t.data),e.setData({url:t.data}),e.reLoad(),e.onShowzx(1)}}),i.globalData.util.request({url:"entry/wxapp/GetPlatform",cachetime:"0",success:function(t){console.log(t.data),e.setData({ptxx:t.data})}});var a=uni.getStorageSync("UserData").id;i.globalData.util.request({url:"entry/wxapp/GetMdid",cachetime:"0",data:{user_id:a},success:function(t){console.log(t),e.setData({mdinfo:t.data})}})},onReady:function(){},onShow:function(){console.log("onshow()")},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.onShowzx(1),this.setData({activeIndex:0,qqsj:!1}),uni.stopPullDownRefresh()},onReachBottom:function(){console.log("上拉加载",this.pagenum,this.activeIndex);var t=this,e=this.activeIndex;!this.mygd&&this.jzgd&&(this.setData({jzgd:!1}),0==e&&this.onShowzx(1),1==e&&this.onShowzx(2),2==e&&uni.getLocation({success:function(e){console.log(e),t.onShowzx(3,e.latitude,e.longitude)}}))},methods:{ckwz:function(t){console.log(t.currentTarget.dataset.lat,t.currentTarget.dataset.lng,t.currentTarget.dataset.address),uni.openLocation({latitude:Number(t.currentTarget.dataset.lat),longitude:Number(t.currentTarget.dataset.lng),address:t.currentTarget.dataset.address})},reLoad:function(){var t=this;i.globalData.util.request({url:"entry/wxapp/GetZxInfo",cachetime:"0",success:function(e){console.log(e.data),t.setData({headinfo:e.data}),uni.setNavigationBarTitle({title:e.data.db_title})}})},tabClick:function(t){var e=this;console.log(t.currentTarget.id),this.setData({pagenum:1,zxlist:[],mygd:!1,jzgd:!0,activeIndex:t.currentTarget.id,qqsj:!1}),0==t.currentTarget.id&&this.onShowzx(1),1==t.currentTarget.id&&this.onShowzx(2),2==t.currentTarget.id&&uni.getLocation({success:function(t){console.log(t),e.onShowzx(3,t.latitude,t.longitude)}})},tzfb:function(){uni.showLoading({title:"Loading..."}),uni.navigateTo({url:"fabu"})},ycpl:function(){this.setData({select:1}),console.log("ycpl")},plxy:function(){this.setData({xspl:!0})},toggle:function(t){var e=this,a=uni.getStorageSync("UserData").id,n=t.currentTarget.id;console.log("用户id",a,"资讯id",n),this.setData({acitiveid:t.currentTarget.id}),i.globalData.util.request({url:"entry/wxapp/IsMyCollect",cachetime:"0",data:{user_id:a,zx_id:n},success:function(t){console.log(t.data),1==t.data?e.setData({zantext:"取消"}):e.setData({zantext:"赞"})}}),1==(e=this).data.select?e.setData({select:0}):e.setData({select:1})},zan:function(t){var e=this,a=uni.getStorageSync("UserData").id,n=t.currentTarget.id;console.log("用户id",a,"资讯id",n),i.globalData.util.request({url:"entry/wxapp/SaveZxCollect",cachetime:"0",data:{user_id:a,zx_id:n},success:function(t){console.log(t.data),1==t.data&&e.setData({select:1}),0==e.activeIndex&&e.onShowzx(1),1==e.activeIndex&&e.onShowzx(2),2==e.activeIndex&&uni.getLocation({success:function(t){console.log(t),e.onShowzx(3,t.latitude,t.longitude)}})}})},pl:function(t){var e=uni.getStorageSync("UserData").id,a=t.currentTarget.id;console.log("用户id",e,"资讯id",a),this.setData({xspl:!1,select:1,plzxid:a})},fspl:function(t){var e=this,a=uni.getStorageSync("UserData").id,n=this.plzxid;console.log("用户id",a,"资讯id",n,"评论内容",t.detail.value),i.globalData.util.request({url:"entry/wxapp/SaveZxAssess",cachetime:"0",data:{user_id:a,zx_id:n,content:t.detail.value},success:function(t){console.log(t.data),1==t.data&&e.setData({xspl:!0}),0==e.activeIndex&&e.onShowzx(1),1==e.activeIndex&&e.onShowzx(2),2==e.activeIndex&&uni.getLocation({success:function(t){console.log(t),e.onShowzx(3,t.latitude,t.longitude)}})}})},deleteFun:function(t){var e=this,a=t.currentTarget.id;console.log("资讯id",a),uni.showModal({title:"提示",content:"确定删除此条资讯吗？",confirmColor:"#f44444",success:function(t){t.confirm?(console.log("用户点击确定"),i.globalData.util.request({url:"entry/wxapp/DelZx",cachetime:"0",data:{zx_id:a},success:function(t){console.log(t.data),1==t.data?(uni.showToast({title:"删除成功",duration:1e3}),setTimeout((function(){0==e.activeIndex&&e.onShowzx(1),1==e.activeIndex&&e.onShowzx(2),2==e.activeIndex&&uni.getLocation({success:function(t){console.log(t),e.onShowzx(3,t.latitude,t.longitude)}})}),1e3)):uni.showToast({title:"删除失败"})}})):t.cancel&&console.log("用户点击取消")}})},tel:function(t){console.log(t.currentTarget.dataset.tel),uni.makePhoneCall({phoneNumber:t.currentTarget.dataset.tel})},previewImage:function(t){console.log(t.currentTarget.dataset.imgarr,t.currentTarget.dataset.src),uni.previewImage({current:t.currentTarget.dataset.src,urls:t.currentTarget.dataset.imgarr})},tzxq:function(){console.log("跳转详情")},onShowzx:function(t,e,a){var o=this,s=this.url;console.log(s);var r=n.getNowFormatDate();console.log(r),i.globalData.util.request({url:"entry/wxapp/ZxList",cachetime:"0",data:{type:t,lat:e,lng:a,page:o.pagenum,pagesize:10},success:function(t){console.log(t.data),t.data.length<10?o.setData({mygd:!0,jzgd:!0}):o.setData({jzgd:!0,pagenum:o.pagenum+1}),console.log(t.data),o.setData({qqsj:!0});for(var e=o.zxlist.concat(t.data),a=0;a<e.length;a++){var i=e[a].imgs.split(",");console.log(n.xctsfm(e[a].time,r)),e[a].xctime=n.xctsfm(e[a].time,r);for(var l=0;l<i.length;l++)i[l]=s+i[l];e[a].imgarr=i}console.log(e),o.setData({zxlist:e})}})}}};e.default=o},"3bfd":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'uni-page-body[data-v-3af7845e]{background-color:#f5f5f5}.home[data-v-3af7845e]{width:100%;overflow-x:hidden}.header[data-v-3af7845e]{width:100%;height:%?300?%;position:relative;overflow:hidden}.headerimg[data-v-3af7845e]{width:100%;height:%?300?%;position:absolute;z-index:2}.headerbox[data-v-3af7845e]{width:100%;height:%?300?%;position:absolute;z-index:3;color:#fff;text-align:center}.htitle[data-v-3af7845e]{font-size:%?36?%;margin-top:%?110?%}.hbetweer[data-v-3af7845e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.hlist[data-v-3af7845e]{font-size:%?28?%;margin-top:%?50?%}.hlist>uni-view[data-v-3af7845e]{width:33.3%}.marry[data-v-3af7845e]{width:100%;overflow-x:hidden;height:auto;background-color:#fff;font-size:%?28?%;border-bottom:%?1?% solid #eee;text-align:center;margin-top:%?20?%}.luntext[data-v-3af7845e]{height:auto;display:-webkit-flex;display:flex;display:-webkit-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.lunitem[data-v-3af7845e]{padding:%?1?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%}.baritem[data-v-3af7845e]{width:33.33%;padding:%?15?% 0;position:relative}.baritem.itemon[data-v-3af7845e]{color:#ff4544;position:relative}.zheline.block[data-v-3af7845e]{display:block;background-color:#ff4544}.weuinavbarslider[data-v-3af7845e]{width:%?120?%;height:%?3?%;margin-top:%?10?%}.weui-navbar[data-v-3af7845e]{background-color:#fff;border-bottom:none}.weuitabcontent[data-v-3af7845e]{padding-top:0}.weuicells[data-v-3af7845e]{margin-top:%?20?%}.zheline[data-v-3af7845e]{background-color:#eb414a;height:%?5?%;width:70%;position:absolute;bottom:%?0?%;left:15%;display:none}.content[data-v-3af7845e]{background-color:#fff}.conlist[data-v-3af7845e]{border-bottom:%?1?% solid #eee;padding:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.touxiang[data-v-3af7845e]{width:%?90?%;height:%?90?%;margin-right:%?15?%}.contitle[data-v-3af7845e]{font-size:%?32?%;color:#667494;display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.conritbox[data-v-3af7845e]{width:%?590?%}.conlistright[data-v-3af7845e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:%?590?%}.zhiding[data-v-3af7845e]{font-size:%?22?%;color:#fff;background-color:#ff4544;width:%?100?%;height:%?40?%;text-align:center;line-height:%?40?%;border-radius:%?6?%;margin-left:%?10?%}.lianxi[data-v-3af7845e]{font-size:%?22?%;border:%?2?% solid #667494;color:#667494;width:%?110?%;height:%?40?%;line-height:%?40?%;margin-left:%?60?%;border-radius:%?8?%;text-align:center}.ckxq[data-v-3af7845e]{font-size:%?22?%;border:%?2?% solid #667494;color:#667494;width:%?110?%;height:%?40?%;line-height:%?40?%;border-radius:%?8?%;text-align:center;margin:%?15?% 0}.contentname[data-v-3af7845e]{max-width:%?300?%}.contentext[data-v-3af7845e]{margin-top:%?5?%;font-size:%?30?%;max-height:%?180?%;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-box-orient:vertical;-webkit-line-clamp:4}.contentimg[data-v-3af7845e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.contentimg>uni-image[data-v-3af7845e]{width:%?160?%;height:%?160?%;margin-right:%?10?%;margin-top:%?10?%}.address[data-v-3af7845e]{margin-top:%?10?%;font-size:%?26?%;color:#667494;margin-bottom:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address uni-image[data-v-3af7845e]{width:%?40?%;height:%?30?%;margin-right:%?10?%}.hremark[data-v-3af7845e]{width:100%;position:relative;margin-top:%?7?%;font-size:%?26?%;color:#999;padding:0;height:%?55?%}.watch[data-v-3af7845e]{width:%?34?%;height:%?20?%;margin-left:%?50?%;margin-right:%?10?%}.talkbox[data-v-3af7845e]{width:%?55?%;height:%?50?%;position:absolute;right:0;top:0;z-index:999}.flex_item[data-v-3af7845e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;left:0;top:0}.shanc[data-v-3af7845e]{color:#667494;margin-left:%?50?%}.zanbox[data-v-3af7845e]{background-color:#f6f6f6;width:100%;margin-top:%?15?%;border-radius:%?4?%;position:relative}.infozan[data-v-3af7845e]{padding:%?15?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-bottom:%?2?% solid #ccc}.aixin[data-v-3af7845e]{width:%?40?%;height:%?40?%;margin-top:%?5?%;margin-right:%?10?%}.infotou[data-v-3af7845e]{width:%?45?%;height:%?45?%;margin-right:%?10?%;border-radius:%?10?%}.userbox[data-v-3af7845e]{padding:%?0?% %?20?% %?0?%}.comment[data-v-3af7845e]{font-size:%?27?%;color:#333;margin-top:%?5?%}.comment>uni-text[data-v-3af7845e]:nth-child(1){color:#667494;margin-right:%?6?%}.kuang[data-v-3af7845e]{position:absolute;content:"";border-width:%?15?%;border-style:solid;border-color:transparent transparent #f6f6f6 #f6f6f6;-webkit-transform:rotate(135deg);transform:rotate(135deg);left:%?60?%;top:%?-10?%;z-index:1}.addbox[data-v-3af7845e]{width:%?100?%;height:%?100?%;border-radius:50%;position:fixed;right:%?30?%;bottom:10%;z-index:1000;box-shadow:%?0?% %?0?% %?15?% #ccc;background-color:#fff}.addbox>uni-image[data-v-3af7845e]{width:80%;height:80%;margin:10% 10%}.plbox[data-v-3af7845e]{padding:%?10?%;position:absolute;right:%?80?%;top:%?-7?%;background:#707070;z-index:999;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex}.pl[data-v-3af7845e]{width:%?150?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pl uni-image[data-v-3af7845e]{width:%?40?%;height:%?40?%}.pltext[data-v-3af7845e]{font-size:%?30?%;color:#fff;margin-left:%?20?%}.sx[data-v-3af7845e]{width:2px;background:#515151;height:%?50?%}.show_one[data-v-3af7845e]{right:%?80?%;-webkit-transition:.3s;transition:.3s}.show_two[data-v-3af7845e]{right:%?-380?%;-webkit-transition:.3s;transition:.3s}.zhezhao[data-v-3af7845e]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:998;overflow:hidden}.plzhezhao[data-v-3af7845e]{width:100%;height:90%;position:fixed;top:0;left:0;background:#000;opacity:.5;z-index:1002;overflow:hidden}.srkb[data-v-3af7845e]{z-index:1002;width:100%;box-sizing:border-box;position:fixed;bottom:%?115?%;background:#f5f5f5}.srk[data-v-3af7845e]{font-size:%?30?%;margin:%?20?%}.jzz[data-v-3af7845e]{height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#666;background:#fff}.jzz uni-image[data-v-3af7845e]{width:%?60?%;height:%?60?%;margin-right:%?30?%}@-webkit-keyframes rotation-data-v-3af7845e{from{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}.Rotation[data-v-3af7845e]{-webkit-transform:rotate(1turn);-webkit-animation:rotation-data-v-3af7845e 1s linear infinite;animation:rotation-data-v-3af7845e 1s linear infinite}.kong[data-v-3af7845e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#999}.kong uni-image[data-v-3af7845e]{margin:%?30?% 0;width:%?100?%;height:%?100?%}body.?%PAGE?%[data-v-3af7845e]{background-color:#f5f5f5}',""]),t.exports=e},"9cdb":function(t,e,a){var i=a("3bfd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("be23acf0",i,!0,{sourceMap:!1,shadowMode:!1})},a029:function(t,e,a){"use strict";a.r(e);var i=a("0f28"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},af9f:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[[a("v-uni-view",{staticClass:"navbar flex-row"},[a("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/index/index"}},[a("v-uni-view",{staticClass:"navbar-text "},[a("v-uni-view",[t._v("HOME")]),a("v-uni-view",[t._v("我的首页")])],1)],1),a("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/wdq/wdq"}},[a("v-uni-view",{staticClass:"navbar-text "},[a("v-uni-view",[t._v("COUPON")]),a("v-uni-view",[t._v("我的礼券")])],1)],1),a("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center",attrs:{"open-type":"redirect",url:"/zh_zbkq/pages/my/my"}},[a("v-uni-view",{staticClass:"navbar-text "},[a("v-uni-view",[t._v("LOGIN")]),a("v-uni-view",[t._v("我的登陆")])],1)],1),a("v-uni-navigator",{staticClass:"flex-grow-1 flex-y-center"},[a("v-uni-button",{staticClass:" kf-btn",attrs:{"open-type":"contact"}},[a("v-uni-view",{staticClass:"navbar-text "},[a("v-uni-view",[t._v("PUBLISH")]),a("v-uni-view",[t._v("发券合作")])],1)],1)],1)],1)],a("v-uni-view",{staticClass:"home",staticStyle:{"padding-bottom":"115rpx",height:"auto"}},[a("v-uni-view",{staticClass:"header"},[a("v-uni-image",{staticClass:"headerimg",attrs:{src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+t.headinfo.bg_logo}}),a("v-uni-view",{staticClass:"headerbox"},[a("v-uni-view",{staticClass:"htitle"},[t._v(t._s(t.headinfo.name))]),a("v-uni-view",{staticClass:"hbetweer hlist"},[a("v-uni-view",[t._v("人气："+t._s(t.headinfo.rq_num))]),a("v-uni-view",[t._v("成员："+t._s(t.headinfo.cy_num))])],1)],1)],1),a("v-uni-view",{staticClass:"marry"},t._l(t.luntext,(function(e,i){return a("v-uni-view",{key:i,class:"baritem "+(t.activeIndex==i?"itemon":""),staticStyle:{display:"inline-block"},attrs:{id:i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"lunitem"},[t._v(t._s(e))]),a("v-uni-view",{class:"zheline "+(t.activeIndex==i?"block":""),attrs:{id:i}})],1)})),1),t.qqsj?t._e():a("v-uni-view",{staticClass:"jzz"},[a("v-uni-image",{staticClass:"Rotation",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/jzz.png"}}),a("v-uni-view",[t._v("加载中...")])],1),t.qqsj?[t._l(t.zxlist,(function(e,i){return 0!=t.zxlist.length?a("v-uni-view",{key:i,staticClass:"content"},[a("v-uni-view",{staticClass:"conlist"},["0"!=e.user_id?a("v-uni-image",{staticClass:"touxiang",attrs:{src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+e.md_logo}}):a("v-uni-image",{staticClass:"touxiang",attrs:{src:"https://we-pon-com-1251903635.coshk.myqcloud.com/"+t.ptxx.logo}}),a("v-uni-view",{staticClass:"conritbox"},[a("v-uni-view",{staticClass:"conlistright"},[a("v-uni-view",{staticClass:"contitle"},["0"!=e.user_id?a("v-uni-view",{staticClass:"contentname gobyndsingle"},[t._v(t._s(e.md_name))]):a("v-uni-view",{staticClass:"contentname gobyndsingle"},[t._v(t._s(t.ptxx.name))]),"1"==e.is_zd?a("v-uni-view",{staticClass:"zhiding"},[t._v("置顶")]):t._e()],1),a("v-uni-navigator",{staticClass:"lianxi",attrs:{"data-tel":e.tel,url:"/zh_zbkq/pages/index/sjdl?sjid="+e.storeId}},[t._v("进入本店")])],1),a("v-uni-view",{staticClass:"contentext"},[a("v-uni-view",{},[t._v(t._s(e.content))])],1),""!=e.imgs?a("v-uni-view",{staticClass:"contentimg"},t._l(e.imgarr,(function(i,n){return a("v-uni-image",{key:n,attrs:{"data-imgarr":e.imgarr,"data-src":i,mode:"aspectFill",src:i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}})})),1):t._e(),a("v-uni-navigator",{staticClass:"ckxq",attrs:{url:"homeinfo?zxid="+e.id}},[t._v("查看详情")]),a("v-uni-view",{staticClass:"address",attrs:{"data-address":e.address,"data-lat":e.lat,"data-lng":e.lng},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ckwz.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/dianji.png"}}),t._v(t._s(e.address))],1),a("v-uni-view",{staticClass:"hremark"},[a("v-uni-view",{staticClass:"flex_item"},[0!=e.xctime.day?a("v-uni-view",[t._v(t._s(e.xctime.day)+"天前")]):t._e(),0==e.xctime.day&&0!=e.xctime.hour?a("v-uni-view",[t._v(t._s(e.xctime.hour)+"小时前")]):t._e(),0==e.xctime.day&&0==e.xctime.hour&&0!=e.xctime.minut?a("v-uni-view",[t._v(t._s(e.xctime.minute)+"分钟前")]):t._e(),0==e.xctime.day&&0==e.xctime.hour&&0==e.xctime.minut?a("v-uni-view",[t._v("刚刚")]):t._e(),a("v-uni-image",{staticClass:"watch",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/view.png"}}),a("v-uni-view",[t._v(t._s(e.yd_num))]),t.mdinfo.id==e.user_id?a("v-uni-view",{staticClass:"shanc",attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteFun.apply(void 0,arguments)}}},[t._v("删除")]):t._e()],1),a("v-uni-image",{staticClass:"talkbox",attrs:{id:e.id,src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/fangduihua.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}}),t.acitiveid==e.id?a("v-uni-view",{class:"plbox "+(0==t.select?"show_one":"show_two")},[a("v-uni-view",{staticClass:"pl",attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zan.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/zan.png"}}),a("v-uni-view",{staticClass:"pltext"},[t._v(t._s(t.zantext))])],1),a("v-uni-view",{staticClass:"sx"}),a("v-uni-view",{staticClass:"pl",attrs:{id:e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pl.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/pl2.png"}}),a("v-uni-view",{staticClass:"pltext"},[t._v("评论")])],1)],1):t._e()],1),0!=e.collect.length||0!=e.assess.length?a("v-uni-view",{staticClass:"zanbox"},[a("v-uni-view",{staticClass:"kuang"}),a("v-uni-view",{staticClass:"infozan"},[a("v-uni-image",{staticClass:"aixin",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/aixin.png"}}),t._l(e.collect,(function(t,e){return a("v-uni-image",{key:e,staticClass:"infotou",attrs:{src:t.img}})}))],2),t._l(e.assess,(function(i,n){return 0!=e.assess.length?a("v-uni-view",{key:n,staticClass:"userbox"},[a("v-uni-view",{staticClass:"comment"},[a("v-uni-text",[t._v(t._s(i.nickname)+":")]),a("v-uni-text",[t._v(t._s(i.content))])],1)],1):t._e()}))],2):t._e()],1)],1)],1):t._e()})),t.jzgd?t._e():a("v-uni-view",{staticClass:"jzz"},[a("v-uni-image",{staticClass:"Rotation",attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/jzz.png"}}),a("v-uni-view",[t._v("加载更多...")])],1),t.mygd?a("v-uni-view",{staticClass:"jzwb"},[a("v-uni-view",{staticClass:"hx"}),a("v-uni-view",{staticClass:"wz"},[t._v("加载完毕")]),a("v-uni-view",{staticClass:"hx"})],1):t._e(),0==t.zxlist.length?a("v-uni-view",{staticClass:"kong"},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/wsj.png"}}),a("v-uni-view",[t._v("暂无资讯...")])],1):t._e()]:t._e(),a("v-uni-view",{staticClass:"addbox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tzfb.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"https://temp-customs-1251903635.cos.ap-chengdu.myqcloud.com/Spb2u.net%20NewZealand/spb2u%20wxapp/zaozao%20kuaigou/new_wxapp/add.png"}})],1)],2),0==t.select?a("v-uni-view",{staticClass:"zhezhao",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.ycpl.apply(void 0,arguments)}}}):t._e(),t.xspl?t._e():a("v-uni-view",{staticClass:"plzhezhao",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.plxy.apply(void 0,arguments)}}}),t.xspl?t._e():a("v-uni-view",{staticClass:"srkb"},[a("v-uni-view",{staticClass:"weui-cells weui-cells_after-title srk"},[a("v-uni-view",{staticClass:"weui-cell weui-cell_input"},[a("v-uni-view",{staticClass:"weui-cell__bd"},[a("v-uni-input",{staticClass:"weui-input",attrs:{confirmType:"send",cursorSpacing:"20rpx",focus:!t.xspl,placeholder:"请输入评论内容"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.fspl.apply(void 0,arguments)}}})],1)],1)],1)],1)],2)},o=[]},cafb:function(t,e,a){"use strict";a.r(e);var i=a("af9f"),n=a("a029");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("0b73");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3af7845e",null,!1,i["a"],s);e["default"]=l.exports},dc2c:function(t,e,a){a("4de4"),a("ac1f"),a("1276");var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}();function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o={KEY_ERR:311,KEY_ERR_MSG:"key格式错误",PARAM_ERR:310,PARAM_ERR_MSG:"请求参数信息有误",SYSTEM_ERR:600,SYSTEM_ERR_MSG:"系统错误",WX_ERR_CODE:1e3,WX_OK_CODE:200},s="https://apis.map.qq.com/ws/",r=s+"place/v1/search",l=s+"place/v1/suggestion",c=s+"geocoder/v1/",u=s+"district/v1/list",d=s+"district/v1/getchildren",f=s+"distance/v1/",g={location2query:function(t){if("string"==typeof t)return t;for(var e="",a=0;a<t.length;a++){var i=t[a];e&&(e+=";"),i.location&&(e=e+i.location.lat+","+i.location.lng),i.latitude&&i.longitude&&(e=e+i.latitude+","+i.longitude)}return e},getWXLocation:function(t,e,a){uni.getLocation({type:"gcj02",success:t,fail:e,complete:a})},getLocationParam:function(t){return"string"==typeof t&&(t=2===t.split(",").length?{latitude:t.split(",")[0],longitude:t.split(",")[1]}:{}),t},polyfillParam:function(t){t.success=t.success||function(){},t.fail=t.fail||function(){},t.complete=t.complete||function(){}},checkParamKeyEmpty:function(t,e){if(!t[e]){var a=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+e+"参数格式有误");return t.fail(a),t.complete(a),!0}return!1},checkKeyword:function(t){return!this.checkParamKeyEmpty(t,"keyword")},checkLocation:function(t){var e=this.getLocationParam(t.location);if(!e||!e.latitude||!e.longitude){var a=this.buildErrorConfig(o.PARAM_ERR,o.PARAM_ERR_MSG+" location参数格式有误");return t.fail(a),t.complete(a),!1}return!0},buildErrorConfig:function(t,e){return{status:t,message:e}},buildWxRequestConfig:function(t,e){var a=this;return e.header={"content-type":"application/json"},e.method="GET",e.success=function(e){var a=e.data;0===a.status?t.success(a):t.fail(a)},e.fail=function(e){e.statusCode=o.WX_ERR_CODE,t.fail(a.buildErrorConfig(o.WX_ERR_CODE,result.errMsg))},e.complete=function(e){switch(+e.statusCode){case o.WX_ERR_CODE:t.complete(a.buildErrorConfig(o.WX_ERR_CODE,e.errMsg));break;case o.WX_OK_CODE:var i=e.data;0===i.status?t.complete(i):t.complete(a.buildErrorConfig(i.status,i.message));break;default:t.complete(a.buildErrorConfig(o.SYSTEM_ERR,o.SYSTEM_ERR_MSG))}},e},locationProcess:function(t,e,a,i){var n=this;a=a||function(e){e.statusCode=o.WX_ERR_CODE,t.fail(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},i=i||function(e){e.statusCode==o.WX_ERR_CODE&&t.complete(n.buildErrorConfig(o.WX_ERR_CODE,e.errMsg))},t.location?n.checkLocation(t)&&e(g.getLocationParam(t.location)):n.getWXLocation(e,a,i)}},v=function(){function t(e){if(n(this,t),!e.key)throw Error("key值不能为空");this.key=e.key}return i(t,[{key:"search",value:function(t){if(t=t||{},g.polyfillParam(t),g.checkKeyword(t)){var e={keyword:t.keyword,orderby:t.orderby||"_distance",page_size:t.page_size||10,page_index:t.page_index||1,output:"json",key:this.key};t.address_format&&(e.address_format=t.address_format),t.filter&&(e.filter=t.filter);var a=t.distance||"1000",i=t.auto_extend||1;g.locationProcess(t,(function(n){e.boundary="nearby("+n.latitude+","+n.longitude+","+a+","+i+")",uni.request(g.buildWxRequestConfig(t,{url:r,data:e}))}))}}},{key:"getSuggestion",value:function(t){if(t=t||{},g.polyfillParam(t),g.checkKeyword(t)){var e={keyword:t.keyword,region:t.region||"全国",region_fix:t.region_fix||0,policy:t.policy||0,output:"json",key:this.key};uni.request(g.buildWxRequestConfig(t,{url:l,data:e}))}}},{key:"reverseGeocoder",value:function(t){t=t||{},g.polyfillParam(t);var e={coord_type:t.coord_type||5,get_poi:t.get_poi||0,output:"json",key:this.key};t.poi_options&&(e.poi_options=t.poi_options),g.locationProcess(t,(function(a){e.location=a.latitude+","+a.longitude,uni.request(g.buildWxRequestConfig(t,{url:c,data:e}))}))}},{key:"geocoder",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"address")){var e={address:t.address,output:"json",key:this.key};uni.request(g.buildWxRequestConfig(t,{url:c,data:e}))}}},{key:"getCityList",value:function(t){t=t||{},g.polyfillParam(t);var e={output:"json",key:this.key};uni.request(g.buildWxRequestConfig(t,{url:u,data:e}))}},{key:"getDistrictByCityId",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"id")){var e={id:t.id||"",output:"json",key:this.key};uni.request(g.buildWxRequestConfig(t,{url:d,data:e}))}}},{key:"calculateDistance",value:function(t){if(t=t||{},g.polyfillParam(t),!g.checkParamKeyEmpty(t,"to")){var e={mode:t.mode||"walking",to:g.location2query(t.to),output:"json",key:this.key};t.from&&(t.location=t.from),g.locationProcess(t,(function(a){e.from=a.latitude+","+a.longitude,uni.request(g.buildWxRequestConfig(t,{url:f,data:e}))}))}}}]),t}();t.exports=v},f4ae:function(t,e,a){a("a15b"),a("d81d"),a("d3b7"),a("e25e"),a("ac1f"),a("25f0"),a("5319"),a("1276");var i=function(t){var e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),o=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return[e,a,i].map(n).join("/")+" "+[o,s,r].map(n).join(":")},n=function(t){return(t=t.toString())[1]?t:"0"+t};function o(t,e){var a=t.split("-"),i=e.split("-"),n=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0),o=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0);return!(n.getTime()>=o.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function s(t,e){var a=t.split("-"),i=e.split("-"),n=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]),0,0,0),o=new Date(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]),0,0,0);return!(n.getTime()>o.getTime())||(console.log("结束日期不能小于开始日期",this),!1)}function r(){for(var t=""+Math.round(1e6*Math.random());t.length<6;)t="0"+t;return console.info("randomNum is ========",t),t}function l(t,e){for(var a=0;a<e.length;a++)if(e[a]==t)return 1;return 2}function c(t,e,a,i){e=e||0,a=a||0,i=i||0;var n=(t=t||0)*Math.PI/180,o=a*Math.PI/180,s=n-o,r=e*Math.PI/180-i*Math.PI/180;return 12756274*Math.asin(Math.sqrt(Math.pow(Math.sin(s/2),2)+Math.cos(n)*Math.cos(o)*Math.pow(Math.sin(r/2),2)))}function u(){var t=new Date,e=t.getMonth()+1,a=t.getDate();return 1<=e&&e<=9&&(e="0"+e),0<=a&&a<=9&&(a="0"+a),t.getFullYear()+"/"+e+"/"+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}function d(t,e){var a=new Date(t.replace(/-/g,"/")),i=new Date(e),n=parseInt((i.getTime()-a.getTime())/1e3),o=Math.floor(n/86400/365);n%=31536e3;var s=Math.floor(n/86400/30);n%=2592e3;var r=Math.floor(n/86400);n%=86400;var l=Math.floor(n/3600);n%=3600;var c=Math.floor(n/60),u=n%=60;console.log(o,s,r,l,c,u);var d={};return d.day=r,d.hour=l,d.minute=c,d}function f(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+a(e.getMonth()+1,2)+"-"+a(e.getDate(),2)+" "+a(e.getHours(),2)+":"+a(e.getMinutes(),2)+":"+a(e.getSeconds(),2);function a(t,e){for(var a=""+t,i=a.length,n="",o=e;o-- >i;)n+="0";return n+a}}function g(t){for(var e=0,a=0;a<t.length;a++){var i=t.charCodeAt(a);i>=1&&i<=126||65376<=i&&i<=65439?e++:e+=2}return e}t.exports={strlen:g,formatTime:i,getRandomNum:r,in_array:l,getDistance:c,validTime:o,validTime1:s,getNowFormatDate:u,xctsfm:d,ormatDate:f}}}]);