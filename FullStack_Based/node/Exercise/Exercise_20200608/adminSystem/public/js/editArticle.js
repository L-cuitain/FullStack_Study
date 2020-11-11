//在页面加载完毕后
$(function () {
    //获取页面id
    let id = new URLSearchParams(location.search).get('articleid');

    //调用showart函数
    showArt(id);

    //预览图片
    $('#article-modify-form').on('change', 'input[type="file"]', function () {
        //获取图片路径
        let imgSrc = URL.createObjectURL($(this)[0].files[0]);

        //将图片赋值给图片显示
        $('.img-thumbnail').attr('src', imgSrc);
    })


    //校验表单
    $('#article-modify-form').validate({
        rules: {
            title: {
                required: true,
                minlength: 1,
                maxlength: 20
            },

            publishDate: {
                required: true,
            },
            content: {
                required: true,
            }
        },
        messages: {
            title: {
                required: "标题必须填写",
                minlength: "标题必须在1-20个字符之间",
                maxlength: "标题必须在1-20个字符之间",
            },

            publishDate: {
                required: "发布日期必须选择",
            },

            content: {
                required: "文章内容必须填写",
            }
        },
        submitHandler: function (form) {            
            //获取数据
            let formdata = new FormData(form);
            console.log(formdata);
            
            //发送ajax
            $.ajax({
                type: 'POST',
                url: '/article/modifyArticle',
                data: formdata,
                contentType : false,
                processData : false,
                success: function (result) {
                    if(result.code == 200){
                        alert(result.msg);
                        location.href = '/article';
                    }
                }
            })
        }
    })
})


//创建showArt函数
function showArt(id) {

    //发送ajax
    $.ajax({
        type: 'GET',
        url: '/article/showArt',
        data: {
            id: id
        },
        success: function (result) {

            //判断状态码
            if (result.code == 200) {

                //将获取的日期转换
                result.data.publishDate = moment(result.data.publishDate).format('YYYY-MM-DD');
                result.data.cover = '/' + result.data.cover;

                //拼接模板字符串
                let editStr = template('modify_templ', result.data);

                //覆盖到页面中
                $('#article-modify-form').html(editStr);
            }
        }
    })
}