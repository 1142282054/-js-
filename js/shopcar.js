window.addEventListener('load', function () {
    var tbody = document.querySelector('.list_bd');
    var as = document.querySelectorAll('.list_bd a');
    for (var i = 0; i < as.length; i++) {
        as[i].onclick = function () {
            console.log('1');
            // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child)  
            tbody.removeChild(this.parentNode.parentNode);
        }
    }

    // 全选框
    // 获取对象
    var list_hd = this.document.querySelector('.list_hd .list_check input');
    var list_bd = this.document.querySelectorAll('.list_item .list_check input');
    // 全选功能，checked判断，修改item的checked属性
    list_hd.addEventListener('click',function(){
        for(var i = 0; i < list_bd.length; i++){
            list_bd[i].checked = list_hd.checked;
        }
    })
    // for循环item的checked，判断是否修改hd的 checked
    var flag = false;
    for(var i = 0; i < list_bd.length; i++){
        list_bd[i].addEventListener('click',function(){
            for(var j = 0; j < list_bd.length;j++){
                if(list_bd[j].checked == false){
                    flag = false;
                    break;
                }
                flag = true;
            }
            list_hd.checked = flag;
        })
    }
})