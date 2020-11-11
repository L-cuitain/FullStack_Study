//创建页面加载完毕事件
$(function(){
    //创建域改变事件
    $("input[type='file']").on('change',function(){
        //获取图片的路径
        let imgSrc = URL.createObjectURL($(this)[0].files[0]);
   
        //将图片路径赋值到预览图片的路径中
        $('.img-thumbnail').attr('src',imgSrc);
    })


    //进行前端表单校验
    $('#from-article').validate({
        rules : {
            title : {
                required : true,
                minlength : 1,
                maxlength : 20               
            },
            author : {
                required : true,
            },
            publishDate : {
                required : true
            },
            content : {
                required : true
            }
        },

        messages : {
            title : {
                required : '标题不能为空',
                minlength : '标题不能小于1位数',
                maxlength : '标题不能超过20位数'
            },
            author : {
                required : '作者不能为空'
            },
            publishDate : {
                required : '日期不能为空'
            },
            content : {
                required : '内容不能为空'
            }
        },

        submitHandler : function(form){
            
            //获取表单数据
            let formdata = new FormData(form);
            
            //发送ajax
            $.ajax({
                type : 'POST',
                url : '/article/addArticle',
                contentType : false,
                processData : false,
                data : formdata,
                success : function(result){
                    //判断后台响应的状态码
                    if(result.code == 200){
                        alert(result.msg);
                        location.href = '/article';
                    }
                }
            })
        }
    })
})