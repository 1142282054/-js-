window.addEventListener('load', function () {
        var btn = document.querySelector('button');
        var time = 10;

        btn.addEventListener('click', function () {
            btn.disabled = true;
            var getCheck = function () {
                if (time == 0) {
                    clearInterval(Timer);
                    time = 10;
                    btn.disabled = false;
                    btn.innerHTML = '获取验证码';
                } else {
                    btn.innerHTML = time-- + '后重新发送';
                }
            }
            getCheck();
            var Timer = setInterval(getCheck, 1000);
        })
    })