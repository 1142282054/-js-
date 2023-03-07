window.addEventListener('load', function () {
    var lis = document.querySelectorAll('.login .others span:nth-child(odd)');
    var tips = document.querySelectorAll('.tips span:nth-child(odd)');
    for(var i = 0; i<tips.length ;i++){
        var index = i * 27;
        console.log(index);
        tips[i].style.backgroundPosition = '-' + index + 'px 0px';
    }
    for(var i = 0; i<lis.length ;i++){
        var index = i * 19;
        console.log(index);
        lis[i].style.backgroundPosition = '-' + index + 'px 0px';
    }
    //选取list和content对象
    var list = document.querySelectorAll('.tab_list div');
    var content = document.querySelectorAll('.tab_content_item');
    //list 赋值属性data-index，添加事件
    for(var i = 0;i < list.length;i++){
        list[i].setAttribute('data-index',i);
        list[i].onclick = function(){
            // 修改自身属性
            for(var j = 0; j< list.length;j++){
                list[j].style.color = '#000';
            }
            this.style.color = '#e93854';
             //修改content的display属性（排他思想）
             for(var j = 0;j < content.length; j++){
                content[j].style.display = 'none';
             }
             content[this.getAttribute('data-index')].style.display = 'block';
        }
    }
})