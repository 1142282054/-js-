function animate(obj, target, callback) {

    // c. 利用定时器不断调用这个函数
    obj.timer = setInterval(function () {

        // a. 获得当前盒子位置
        var leftPos = obj.offsetLeft;

        // d. 加一个结束条件
        if (leftPos == target) {
            clearInterval(obj.timer);
            callback && callback();
        }
        // b. 创建让盒子移动函数\
        var step = 5;
        obj.style.left = leftPos + step + "px";


    }, 15)





    // 注意：元素需要添加定位，才能element.style.left

}