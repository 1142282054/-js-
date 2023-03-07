window.addEventListener('load', function () {
    // 选择对象
    console.log('1');
    var focus = document.querySelector('.pic .focus');
    var smallPos = focus.querySelector('.pic_position');
    var detail = focus.querySelector('.detail');
    var bigpos = detail.querySelector('img');

    // 事件监听 进入（经过） 退出
    focus.addEventListener('mouseover', function () {
        console.log('2');
        smallPos.style.display = 'block';
        detail.style.display = 'block';
    })
    focus.addEventListener('mouseout', function () {
        console.log(3);
        smallPos.style.display = 'none';
        detail.style.display = 'none';
    })
    focus.addEventListener('mousemove', function (e) {
        //计算xy坐标、比例
        var x = e.pageX - focus.offsetLeft;
        var y = e.pageY - focus.offsetTop;
        var k = (bigpos.offsetWidth - detail.offsetWidth) / (focus.offsetWidth - smallPos.offsetWidth);
        // 修改smallPos样式
        if (x < smallPos.offsetWidth / 2) {
            x = smallPos.offsetWidth / 2;
        }
        if (x > focus.offsetWidth - smallPos.offsetWidth / 2) {
            x = focus.offsetWidth - smallPos.offsetWidth / 2;
        }
        if (y < smallPos.offsetWidth / 2) {
            y = smallPos.offsetWidth / 2;
        }
        if (y > focus.offsetWidth - smallPos.offsetWidth / 2) {
            y = focus.offsetWidth - smallPos.offsetWidth / 2;
        }
        // console.log('x = ' + x);
        // console.log('y = ' + y);
        smallPos.style.top = y - smallPos.offsetWidth / 2 + 'px';
        smallPos.style.left = x - smallPos.offsetWidth / 2 + 'px';
        // 修改bigPos样式
        var X = (x - smallPos.offsetWidth / 2) * k;
        var Y = (y - smallPos.offsetWidth / 2) * k;
        // console.log('xx = ' + X);
        // console.log('yy = ' + Y);
        bigpos.style.top = '-' + Y + 'px';
        bigpos.style.left = '-' + X + 'px';
    })
})