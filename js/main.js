
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

new Vue({
    el: '#main',
    data: {},
    created: function () {
        document.getElementsByClassName('companylogo')[0].style.height = sysW*0.28+'px';
        document.getElementsByClassName('companylogo')[0].style.width = sysW*0.28+'px';
        document.getElementsByClassName('img-logo-4')[0].style.height = sysW*0.28+'px'; 
        
        document.getElementsByClassName('t-right')[0].style.height = sysW*0.30+'px';
        document.getElementsByClassName('t-right')[0].style.width = sysW*0.30+'px';

        // iframe小程序
        document.querySelectorAll('.v-center iframe')[0].style.height = sysW*0.48+'px';
        document.querySelectorAll('.v-center iframe')[0].style.width = sysW*0.446*992/1995+'px';
        
        // 边框图标
        document.querySelectorAll('.v-center .biankuang')[0].style.height = sysW*0.519+'px';
        document.querySelectorAll('.v-center .biankuang')[0].style.width = sysW*0.519*992/1995+'px';
        document.querySelectorAll('.v-center')[0].style.marginLeft = sysW*0.055+'px';
        
        document.getElementsByClassName('b-left')[0].style.width = sysW*0.36+'px';
        document.querySelectorAll('#youtube')[0].style.height = sysW*0.17+'px';
        document.querySelectorAll('#youtube')[0].style.width = sysW*0.17*16/9+'px';

        
        
        
        let imglogo4=document.querySelectorAll('.img-logo-4 img');
        for(let i =0;i<imglogo4.length;i++){
            imglogo4[i].style.width = sysW*0.06+'px';
            imglogo4[i].style.height = sysW*0.06+'px';
        };
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    methods: {
        reverseMessage: function () {

        }
    }
});
7