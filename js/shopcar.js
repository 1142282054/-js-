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
    list_hd.addEventListener('click', function () {
        for (var i = 0; i < list_bd.length; i++) {
            list_bd[i].checked = list_hd.checked;
        }
    })
    // for循环item的checked，判断是否修改hd的 checked
    var flag = false;
    for (var i = 0; i < list_bd.length; i++) {
        list_bd[i].addEventListener('click', function () {
            for (var j = 0; j < list_bd.length; j++) {
                if (list_bd[j].checked == false) {
                    flag = false;
                    break;
                }
                flag = true;
            }
            list_hd.checked = flag;
        })
    }

    // jQuery 练习 商品数量调整
    var changeNum = function (obj) {
        var num = parseInt($(obj).siblings('.num_box_content').children('input').eq(0).val());
        console.log($(obj).siblings('.num_box_content').children('input'));
        var price = parseInt($(obj).parent().parent().siblings('.list_price').eq(0).text());
        var totalPrice = price * num;
        // console.log($(this).parent().parent().siblings('.list_total'));
        // console.log(totalPrice);
        $(obj).parent().parent().siblings('.list_total').eq(0).text(totalPrice);
        // console.log($(this).parent().parent().siblings('.list_total').eq(0));

        var totalNum = 0;
        $('.list_num input').each(function (index, element) {
            // if(index > 0){
            console.log(index + "" + $(element).text());
            totalNum += parseInt($(element).val());
            // }
        });
        console.log(totalNum);
        $('.cart_bar p i').eq(0).text(totalNum);
        // console.log($('.cart_bar p i').eq(0));

        var sum = 0;
        $('.list_total').each(function (index, element) {
            if (index > 0) {
                sum += parseInt($(element).text());
                console.log($(element).text());
            }
        })
        console.log(sum);
        $('.cart_bar span i').text(sum);
    }
    // 1、点击加减功能，商品数量、小计、总商品统计变化
    $('.num_box_left').click(function () {
        var num = parseInt(this.nextElementSibling.children[0].value);
        // console.log(this.nextElementSibling.children[0]);
        // console.log(num);
        num--;
        this.nextElementSibling.children[0].value = '' + num;
        changeNum(this);
    })
    $('.num_box_right').click(function () {
        console.log(this.prevElementSibling)
        var num = parseInt(this.previousElementSibling.children[0].value);
        // console.log(this.nextElementSibling.children[0]);
        // console.log(num);
        num++;
        this.previousElementSibling.children[0].value = '' + num;
        changeNum(this);
    })
    // 2、通过表单来改变
    $('.num_box_content input').change(function(){
        changeNum(this.parentNode.parentNode.children[0]);
    })

    // 第一次进入页面进行加载
    $('.num_box_left').each(function (index, element) {
        changeNum(element);
    });
})