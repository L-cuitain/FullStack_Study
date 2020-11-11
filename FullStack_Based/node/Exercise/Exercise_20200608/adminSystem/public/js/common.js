//创建退出登录的点击事件
$('#user-logout').on('click',function(){
    //调用logout函数
    logout();
})

//创建logout函数
function logout(){
    //发送ajax请求
    $.ajax({
        type : 'GET',
        url : 'api/logout',
        data : null,
        success : function(result){
            //判断状态码
            if(result.code == 200){
                alert(result.msg);
                //跳转页面
                location.href = '/';
            }
        }
    })
}