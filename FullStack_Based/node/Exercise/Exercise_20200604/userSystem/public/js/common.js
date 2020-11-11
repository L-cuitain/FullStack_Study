$(function () {

    //创建登录 按钮的鼠标点击事件
    $('.header-login').on('click', function () {
        //获取form表单信息
        let formData = $('#login-form').serialize();

        //发送ajax
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: formData,
            success: function (result) {
                if (result.code == 200) {
                    alert('登录成功');
                    location.href = '/';
                }else{
                    alert(result.msg);
                }
            }
        })
    })
})