
var that = new Vue({
    el: '#main',
    data: {
        platform: {}
    },
    created: function () {
    },
    methods: {
        init: function () {
            // axios.post('https://spb2u1.ihogu.com/app/index.php?i=3&t=0&v=2&from=wxapp&c=entry&a=wxapp&do=GetPlatform&&m=zh_zbkq', {
            //     'sign': '311b6d0c26c93e5a771f2a06cdf23bbc',
            // })
            //     .then(function (response) {
            //         that.platform = response.data;
            //         document.querySelectorAll('#youtube')[0].src = that.platform.youtube_url;
            //         document.querySelectorAll('#content')[0].innerHTML = that.platform.pc_info_txt;
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
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
            let rbr = document.querySelectorAll('.r-b-r');
            let img41 = document.querySelectorAll('.img41');
            let img81 = document.querySelectorAll('.img81');

            let baseW= sysW*0.18;
            if (sysW <= 1366) {
                sysW = 1366;
                baseW= sysW*0.18;
                document.querySelectorAll('.left')[0].style.display='none';
                document.querySelectorAll('.right')[0].style.width='100%';
                let rightDiv = document.querySelectorAll('.right>div');
                let right2 =document.querySelectorAll('.right2')[0];
                for(let i=0;i<rightDiv.length;i++){
                    rightDiv[i].style.width='unset';
                }
                right2.style.marginLeft=(baseW*0.66)+'px';
                // document.querySelectorAll('#main')[0].style.width = sysW + 'px';
            }

            // iframe小程序
            // document.querySelectorAll('.v-center')[0].style.left = sysW * 0.35 + 'px';
            for(let i =0;i<img41.length;i++){
                img41[i].style.width=baseW+'px';
                img41[i].style.height=baseW+'px';
                img41[i].style.marginBottom=baseW*0.15+'px';
                img41[i].style.marginRight=baseW*0.15+'px';
            }
            for(let i =0;i<img81.length;i++){
                img81[i].style.width=baseW*0.4+'px';
                img81[i].style.height=baseW*0.4+'px';
                img81[i].style.marginRight=baseW*0.1+'px';
                // img81[i].style.marginBottom=baseW*0.5+'px';
            }
            rbr[0].style.marginLeft='-'+(baseW*0.2)+'px';
            rbr[0].style.marginTop= '-'+(baseW*0.14)+'px';

            let rbrT = document.querySelectorAll('.r-b-r-bt');
            let rbrTCoom = document.querySelectorAll('.r-b-r-bt-common');
            rbrT[0].style.marginBottom='-'+(baseW*0.25)+'px';
            // rbrT[0].style.marginTop=(baseW*0.15)+'px'; 

            rbrTCoom[0].style.marginLeft=(baseW*0.01)+'px';
            rbrTCoom[1].style.marginLeft=(baseW*0.01)+'px';
            

        }
    },
});

that.init();
that.reset();

window.onresize = function () {
    location.reload();
    that.reset();
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