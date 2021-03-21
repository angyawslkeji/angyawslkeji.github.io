var sysW = '';
// 获取窗口宽度
if (window.innerWidth)
    sysW = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
    sysW = document.body.clientWidth;
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
    sysW = document.documentElement.clientWidth;
}

var that = new Vue({
    el: '#main',
    data: {
        platform: {}
    },
    created: function () {
        document.getElementsByClassName('companylogo')[0].style.height = sysW * 0.28 + 'px';
        document.getElementsByClassName('companylogo')[0].style.width = sysW * 0.28 + 'px';
        document.getElementsByClassName('img-logo-4')[0].style.height = sysW * 0.28 + 'px';

        document.getElementsByClassName('t-right')[0].style.height = sysW * 0.28 + 'px';
        document.getElementsByClassName('t-right')[0].style.width = sysW * 0.30 + 'px';

        // iframe小程序
        document.querySelectorAll('.v-center iframe')[0].style.height = sysW * 0.46 + 'px';
        document.querySelectorAll('.v-center iframe')[0].style.width = sysW * 0.52 * 992 / 1995 + 'px';
        document.querySelectorAll('.v-center iframe')[0].style.marginTop = sysW * 0.018 + 'px';
        document.querySelectorAll('.v-center iframe')[0].style.marginLeft =sysW * 0.004 + 'px';
        // document.querySelectorAll('.v-center iframe')[0].style.borderRadius = sysW * 0.01 + 'px';

        // 边框图标
        document.querySelectorAll('.v-center .biankuang')[0].style.height = sysW * 0.485 + 'px';
        document.querySelectorAll('.v-center .biankuang')[0].style.width = sysW * 0.5 * 992 / 1995 + 'px';
        document.querySelectorAll('.v-center')[0].style.marginLeft = sysW * 0.055 + 'px';

        document.getElementsByClassName('b-left')[0].style.width = sysW * 0.36 + 'px';
        document.querySelectorAll('#youtube')[0].style.height = sysW * 0.17 + 'px';
        document.querySelectorAll('#youtube')[0].style.width = sysW * 0.17 * 16 / 9 + 'px';

        let imglogo4 = document.querySelectorAll('.img-logo-4 img');
        for (let i = 0; i < imglogo4.length; i++) {
            imglogo4[i].style.width = sysW * 0.06 + 'px';
            imglogo4[i].style.height = sysW * 0.06 + 'px';
        };
    },
    methods: {
        init:function(){
            axios.post('https://spb2u1.ihogu.com/app/index.php?i=3&t=0&v=2&from=wxapp&c=entry&a=wxapp&do=GetPlatform&&m=zh_zbkq', {
                'sign': '311b6d0c26c93e5a771f2a06cdf23bbc',
            })
                .then(function (response) {
                    that.platform = response.data;
                    document.querySelectorAll('#youtube')[0].src = that.platform.youtube_url;
                    document.querySelectorAll('#content')[0].innerHTML = that.platform.pc_info_txt;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        reverseMessage: function () {

        }
    },
}); 


that.init();
window.onresize = function(){
    location.reload();

}