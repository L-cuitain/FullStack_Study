//创建页面加载事件
$(document).ready(function(){
    //调用getAll() 函数
    getAll();
})



//创建getAll函数 获取后台的数据
function getAll(){
    //发送ajax请求
    $.ajax({
        type : 'GET',
        url : '/api/getAll',
        data : null,
        success : function(result){
            //将后台获取到的数据通过模板引擎拼接到页面中
            let htmlstr = template('list-templ' , {
                target : result.data
            })

            //将模板字符串添加到页面中
            $('#members').html(htmlstr);
        }
    })
}