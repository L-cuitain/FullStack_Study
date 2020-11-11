//在页面加载完毕后
$(document).ready(function() {
    //获取这条数据的id
    //localtion.search 返回地址中?后的部分内容
    //URL查询参数对象
    // URLSearchParams(localtion.search);
    
    //通过URL查询参数对象 获取到数据的id
    let id = new URLSearchParams(location.search).get('id');

    //创建ajax
    $.ajax({
        type : 'GET',
        url: '/api/getDetail',
        data : {
            id : id,
        },
        success : function(result){
                //拼接字符串
                let htmlstr = template('list-templ',result.data);
                //覆盖到页面中
                $('.jumbotron').html(htmlstr);
        },
        error : function(result){
            alert(result.msg);
        }
    })
})