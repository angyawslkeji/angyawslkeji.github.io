
var that = new Vue({
    el: '#main',
    data: {
        platform: {}
    },
    created: function () {
    },
    methods: {
        init: function () {
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
        reset: function () {
            let sysW = '';
            // 获取窗口宽度
            if (window.innerWidth)
                sysW = window.innerWidth;
            else if ((document.body) && (document.body.clientWidth))
                sysW = document.body.clientWidth;
            // 通过深入 Document 内部对 body 进行检测，获取窗口大小
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                sysW = document.documentElement.clientWidth;
            }

            if (sysW <= 1366) {
                sysW = 1366;
                document.querySelectorAll('#main')[0].style.width = sysW + 'px';
            }
            // iframe小程序
            // document.querySelectorAll('.v-center')[0].style.left = sysW * 0.35 + 'px';
            if(document.querySelectorAll('.v-center')){
                document.querySelectorAll('.v-center')[0].style.height = document.body.clientHeight + 'px';
            }

            // document.querySelectorAll('.v-center iframe')[0].style.height = sysW * 0.47 + 'px';
            // document.querySelectorAll('.v-center iframe')[0].style.width = sysW * 0.52 * 992 / 1995 + 'px';
            // document.querySelectorAll('.v-center iframe')[0].style.marginTop = sysW * 0.016 + 'px';
            // document.querySelectorAll('.v-center iframe')[0].style.marginLeft = sysW * 0.004 + 'px';
            // document.querySelectorAll('.v-center iframe')[0].style.borderRadius = sysW * 0.01 + 'px';


            // document.getElementsByClassName('companylogo')[0].style.height = sysW * 0.28 + 'px';
            // document.getElementsByClassName('companylogo')[0].style.width = sysW * 0.28 + 'px';
            // document.getElementsByClassName('img-logo-4')[0].style.height = sysW * 0.28 + 'px';

            // document.getElementsByClassName('t-right')[0].style.height = sysW * 0.28 + 'px';
            // document.getElementsByClassName('t-right')[0].style.width = sysW * 0.30 + 'px';
            // 边框图标
            // document.querySelectorAll('.v-center .biankuang')[0].style.height = sysW * 0.485 + 'px';
            // document.querySelectorAll('.v-center .biankuang')[0].style.width = sysW * 0.5 * 992 / 1995 + 'px';
            // document.querySelectorAll('.v-center')[0].style.marginLeft = sysW * 0.055 + 'px';

            // document.getElementsByClassName('b-left')[0].style.width = sysW * 0.36 + 'px';
            // document.querySelectorAll('#youtube')[0].style.height = sysW * 0.17 + 'px';
            // document.querySelectorAll('#youtube')[0].style.width = sysW * 0.17 * 16 / 9 + 'px';

            // let imglogo4 = document.querySelectorAll('.img-logo-4 img');
            // for (let i = 0; i < imglogo4.length; i++) {
            //     imglogo4[i].style.width = sysW * 0.06 + 'px';
            //     imglogo4[i].style.height = sysW * 0.06 + 'px';
            // };

        }
    },
});

that.init();
that.reset();

window.onresize = function () {
    location.reload();
    // that.reset();
    // document.querySelectorAll('.v-center iframe')[0].src = document.querySelectorAll('.v-center iframe')[0].src;
}


function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

if (!IsPC()) {
    location.href = '/m/index.html';
}