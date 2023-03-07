window.addEventListener('load',function(){
    // 选择对象
    var bigBox  = this.document.querySelector('.bigbox');
    var cycles = this.document.querySelector('.cycles');
    var index = 1;
    var Bwidth = bigBox.children[0].offsetWidth;
    // 初始化小圆点
    for(var i = 0; i < bigBox.children.length -2; i++){
        var cyucle = this.document.createElement('li');
        cycles.appendChild(cyucle);
    }
    cycles = this.document.querySelector('.cycles');
    // 添加定时器
    var timer = setInterval(function(){
        // 动画 transaction 与transition
        index++;
        var target = -index * Bwidth;
        console.log("target = " + target);
        bigBox.style.transition = "all .3s";
        bigBox.style.transform = 'translateX('+ target +'px';
    },2000);

    bigBox.addEventListener('transitionend', function() {
        if (index == bigBox.children.length - 1) {
            index = 1;
            bigBox.style.transition = 'none';
            var target = -index * Bwidth; 
            bigBox.style.transform = 'translateX('+ target +'px)';
        } else if(index == 0) {
            index = bigBox.children.length - 2;
            bigBox.style.transition = 'none';
            var target = -index * Bwidth; 
            bigBox.style.transform = 'translateX('+ target +'px)';
        }
        //3.小圆点跟随图片变化
        for(var i = 0; i < cycles.children.length;i++){
            cycles.children[i].className = "past";
        }
        cycles.children[index-1].className = "past current";
    })
    //4.手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    var flag = false;
    bigBox.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        //手指触摸的时候就停止定时器
        clearInterval(timer);
    })
    bigBox.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var target = -index * Bwidth + moveX; 
        //手指拖动的时候不需要动画效果，所以取消过渡效果
        bigBox.style.transition = 'none';
        bigBox.style.transform = 'translateX('+ target +'px)';
        flag = true;
        e.preventDefault();
    })
    bigBox.addEventListener('touchend', function() {
        //5.回弹效果，滑动距离大于70px才会切换下一张
        if (flag) {
            if (Math.abs(moveX) > 70) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                var target = -index * Bwidth;
                bigBox.style.transition = 'all .3s';
                bigBox.style.transform = 'translateX('+ target +'px)';
            } else {
                var target = -index * Bwidth;
                bigBox.style.transition = 'all .3s';
                bigBox.style.transform = 'translateX('+ target +'px)';
            }
            }
        //6.手指离开，恢复定时器  
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var target = -index * Bwidth;
            //使用CSS里的transform和transition属性实现图片滚动和过渡
            bigBox.style.transition = 'all .3s';
            bigBox.style.transform = 'translateX('+ target +'px)';
        }, 2000);
    })
})