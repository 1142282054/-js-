window.addEventListener('load', function () {
    // 1. 获取元素 所有的小li 
    var lis = document.querySelectorAll('.main_nav li i');
    for (var i = 0; i < 3; i++) {
        // 让索引号 乘以 44 就是每个li 的背景y坐标  index就是我们的y坐标
        var indexY = 15 + 70 * i;
        for (var j = 0; j < 4; j++) {
            var indexX = j * 62 + 19;
            console.log(indexX + '  ' + indexY);
            lis[4 * i + j].style.backgroundPosition = '-' + indexX + 'px -' + indexY + 'px';
        }
    }
    console.log(lis.length);
    for (var i = 0; i < lis.length; i++) {
        console.log(lis[i].style.backgroundPosition);
    }

    //获取元素
    var sidebar = document.querySelector('.sidebar');
    var main = this.document.querySelector('.main');
    var flag = 1;//可以添加节点标志
    var newNode = document.createElement('li');
    //添加scroll事件
    document.addEventListener('scroll', function () {
        var mainTop = main.offsetTop;
        // console.log('mainTop= ' + mainTop);
        // console.log('scrollTop= ' +  window.pageYOffset);
        // var fixedTop = sidebar.offsetTop - mainTop;
        // console.log(fixedTop); 
        if (window.pageYOffset > mainTop) {
            sidebar.style.position = 'fixed';
            sidebar.style.top = '150px';
            if (flag == 1) {
                flag = 0;
                //添加元素
                newNode.innerHTML = '<a>返回顶部</a>';
                // 回到顶部动画
                newNode.addEventListener('click',function(){
                    console.log('click');
                    verticalMove(document,0);
                })
                console.log(sidebar.firstElementChild.children[2]);
                sidebar.firstElementChild.insertBefore(newNode, sidebar.firstElementChild.children[2]);
            }
        } else {
            sidebar.style.position = 'absolute';
            sidebar.style.top = '345px';
            if (flag == 0) {
                flag = 1;
                sidebar.firstElementChild.removeChild(newNode);
            }
        }
        // 缓慢回到顶部
        function verticalMove(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - window.pageYOffset) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                if (window.pageYOffset == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // 回调函数写到定时器结束里面
                    // if (callback) {
                    //     // 调用函数
                    //     callback();
                    // }
                    callback && callback();
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                window.scroll(0, window.pageYOffset + step);

            }, 15);
        }
    })

    //轮播图\
    // 获取对象
    var focus = document.querySelector(".focus");
    var buttons = focus.querySelectorAll("div");
    // 绑定事件，进入显示元素,离开隐藏元素
    focus.addEventListener('mouseover', function () {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'block';
        }
        // 停止自动播放定时器
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = 'none';
        }
        // 打开自动播放定时器
        // buttons[1].click();
        timer = setInterval(function () {
            // 手动调用
            buttons[1].click();
        }, 2000);
    })

    //初始化
    var pot = document.querySelector('.pot');
    var pics = document.querySelector('.pics');
    var imgs = pics.querySelectorAll('img');
    // 1、小圆圈
    for (var i = 0; i < imgs.length; i++) {
        //创建节点
        var node = document.createElement("li");
        console.log(node);
        node.setAttribute('index', i);
        // 添加节点
        pot.appendChild(node);
        if(i == 0){
            node.className = 'current';
        }
    }
    // 2、拷贝
    var cloneNode = pics.children[0].cloneNode(true);
    console.log(cloneNode);
    pics.appendChild(cloneNode);

    //跳转功能
    // 对象
    var num = 0;//记录张数信息
    // 绑定事件
    buttons[1].addEventListener('click', function () {
        // 判断
        if (num == imgs.length) {
            pics.style.left = '0px';
            num = 0;
        }
        // 右移
        num++;
        animate(pics, -num * 721);
        // 
        circle++;
        circle = circle > imgs.length - 1 ? 0 : circle;
        circleChange();
    })
    buttons[0].addEventListener('click', function () {
        // 判断
        if (num == 0) {
            pics.style.left = -(imgs.length) * 721 + 'px';
            num = imgs.length;
        }
        // 左移
        num--;
        animate(pics, -num * 721);
        // 圈圈变化
        circle--;
        circle = circle < 0 ? imgs.length - 1 : circle;
        circleChange();
    })

    // 小圆圈 排他思想
    //  获取对象
    var dots = document.querySelectorAll(".pot li");
    console.log(dots);
    var circle = 0;//记录小圈的张数信息
    for (var i = 0; i < dots.length; i++) {
        // 绑定事件
        dots[i].addEventListener('click', function () {
            for (var j = 0; j < dots.length; j++) {
                dots[j].className = '';
            }
            this.className = "current";

            // 
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(pics, -num * 721);
        })
    }

    function circleChange() {
        for (var j = 0; j < dots.length; j++) {
            dots[j].className = '';
        }
        dots[circle].className = "current";
    }

    // 定时播放
    var timer = this.setInterval(function () {
        // 手动调用
        buttons[1].click();
    }, 2000);

})