//创建页面加载完毕事件
$(function () {
    //进行前端表单校验
    $('#add-form').validate({
        rules: {
            username: {
                required: true,
                maxlength: 20,
                minlength: 3
            },
            email: {
                email: true,
                required: true,
            },
            password: {
                required: true,
                maxlength: 20,
                minlength: 3
            },
            role: {
                required: true
            }
        },

        messages: {
            username: {
                required: "用户名必须填写",
                minlength: "用户名在6-18位之间",
                maxlength: "用户名在6-18位之间"
            },
            password: {
                required: "密码必须填写",
                minlength: "用户名在6-12位之间",
                maxlength: "用户名在6-12位之间"
              },
              email: {
                required: "邮箱必须填写",
                email: "邮箱格式不正确"
              },
              role: {
                required: "角色必须选择"
              }
        },

        submitHandler : function(form) {
            //获取表单数据
            let formData = $(form).serialize();
            
            //发送ajax
            $.ajax({
                type : 'POST',
                url : '/user/addUser',
                data : formData,
                success : function(result){
                    //判断状态码
                    if(result.code == 400){ 
                        $('.title .tips').html(result.msg).addClass('error');
                    }
                    
                    if(result.code == 200){
                        //跳转到主页面
                        location.href = '/user';
                    }
                }
            })
        }
    })
})