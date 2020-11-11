//创建登录的点击事件
$(function(){
    //校验表单
    $('#form').validate({
        rules : {
            email : {
                required: true,
                email : true
            },
            password : {
                required: true,
            }
        },

        messages : {
            email : {
                required : '邮箱不能为空',
                email : "请输入正确格式的邮箱",
            },
            password : {
                required : '请输入密码',
            }
        },

        //验证通过发送ajax
        submitHandler : function(form){
            //获取表单数据
            let formData = $(form).serialize();
            console.log(formData);
            
            //发送ajax请求
            $.ajax({
                type : 'POST',
                url : 'api/login',
                data : formData,
                success : function(result){
                    //获取到后台校验后的数据
                    //判断状态码
                    if(result.code == 200){
                        //跳转页面
                        location.href = '/user';
                    }
                },
                error : function(err){
                    //获取报错信息
                    // console.log(err);
                    let errText = JSON.parse(err.responseText);
                    
                    //判断状态码
                    if(errText.code == 400){
                        alert(errText.msg);
                        //重置表单
                        $(form).find('input').val('');
                    }
                }
            })            
        }
    })
})
