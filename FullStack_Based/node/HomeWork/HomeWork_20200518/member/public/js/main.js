//index页面所引入的js文件
//在页面加载完毕后
$(document).ready(() => {
    //查询所有内容 调用getAll()函数
    // getAll();


    //在页面载入完毕后 调用getPage()函数 参数id不传值 默认为第一条 一次显示6条数据
    getPage(null,6);

    //创建页面滚动事件
    $(document).scroll(function() {
        //获取文档的高度
        let docHeight = $(document).height();
        //获取卷曲的高度
        let winHeight = $(window).height();
        //获取可视区的高度
        let scrollTop = $(document).scrollTop();

        //判断 如果下滑到底部 则记录最后一个元素的id 调用getPage函数
        if(docHeight - winHeight - scrollTop < 50){
            let last = $('html').attr('last');
            getPage(last,6);
        }
    })
})


//点击删除按钮 删除某一条数据
//给delete添加鼠标点击事件
$('#members').on('click' , '.delete-btn' , function(e){    
    //取消事件的默认动作
    e.preventDefault();
    //询问是否删除
    if(!confirm('确定要删除吗?')){
        return false;
    }

    //获取数据的ID
    let id = $(this).data('id');
    
    //发起ajax请求 让服务器处理数据
    deleteItem(id);
})



//查询所有
function getAll() {
    //发起ajax请求
    $.ajax({
        type: 'GET',
        url: '/api/getAll',
        data: null,
        success: (result) => {
            //打印从后台获取到的数据
            // console.log(result);
            //拼接模板字符串
            let htmlstr = template('template-list', {
                list: result.data
            })

            //将模板覆盖到指定区域中
            $('#members').html(htmlstr);
        }
    })
}

//删除数据
function deleteItem(id) {
    //创建ajax
    $.ajax({
        type : 'GET',
        url : '/api/delete',
        data : {
            id : id,
        },
        success : function(result){
            //判断返回的状态码是否为200
            if(result.code == 200){
                //重新调用getAll函数
                getAll();
            }
        }
    })
}


//分页查询函数
/**
 * 
 * @param {String} last   取过来数据数组的最后一个元素的id
 * @param {Number} limit  每次取数据的数量 
 */
function getPage(last,limit){
    //发送ajax请求
    $.ajax({
        type : 'GET',
        url : '/api/pagetion',
        data : {
            last : last,
            limit : limit,
        },
        success : function(result){
            //获取到返回数据的最后一个id 将这个id赋值给html的last属性
            let last = result.data[result.data.length-1].id;
            $('html').attr('last',last);

            //拼接字符串
            let htmlStr = template('template-list', {
                list : result.data
            });

            //加载到页面中
            $('#members').append(htmlStr);
        }
    })
}