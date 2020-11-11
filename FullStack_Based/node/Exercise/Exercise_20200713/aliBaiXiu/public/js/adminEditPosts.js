//在页面加载完成后
$(function(){
    //图片预览
    $('#feature').on('change',function(){
        //获取图片路径
        let src = URL.createObjectURL($(this)[0].files[0]);
        $(this).before(`<img src="${src}" class='help-block thumbnail'>`);
    })
    
    //#region 更新文章
    $('#editPostForm').bootstrapValidator({
        //校验
        live : 'enbled',
        //反馈图标
        feedbackIcons : {
            // 合法的
            valid: 'glyphicon glyphicon-ok',
            // 不合法的
            invalid: 'glyphicon glyphicon-remove',
            // 校验中
            validating: 'glyphicon glyphicon-refresh'
        },
        //提交按钮
        submitButtons : "#editPostBtn",
        fields : {
            title : {
                //关于email的校验器
                validators : {
                    //不能为空
                    notEmpty : {
                        message : '文章标题不能为空'
                    },
                    // email的长度
                stringLength: {
                    min: "1",
                    max: "30",
                    message: "标题长度最短为1,最长为30"
                    }
                }
            },
            content : {
                // 关于password的校验器
                validators: {
                  notEmpty: {
                    message: '内容不能为空！'
                 }
               }
            }
        }
    })
    //当校验成功后 发起ajax请求
    .on('success.form.bv' , function(e){
        //阻止默认提交
        e.preventDefault();
        //form表单
        var $form = $(e.target);
        let formData = new FormData($form[0]);
        
        //发送ajax请求
        $.ajax({
            type : 'POST',
            url : '/admin/posts/edit',
            data : formData,
            //发送给服务器的信息类型(不提供文件信息)
            contentType : false,
            //不序列化
            processData : false,
            success : function(results){
                if(results.code == 200){
                    location.href = '/admin/posts'
                }
            }
        })
    });
    //#endregion
});

