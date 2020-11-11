//在页面加载完毕后
$(function() {
    //给图片上传控件添加change事件  使用function格式   ()=>{}格式出现 Cannot read property '0' of undefined
    //function 和 箭头函数 () => {} 的区别: 使用function定义的函数 this指向随着环境的变化而变化  而箭头函数中this指向是固定不变的 
    $('#input_avatar').on('change', function() {
        //获取input中的文件对象  input[type='file']

        //创建URL.createObjectURL(oInput.files[0])
        let imgSrc = URL.createObjectURL($(this)[0].files[0]);

        //将上传的文件路径添加到图片显示区域中 让上传的图片在这个区域中显示
        $('#avatar').attr('src',imgSrc);
    })


    //给save按钮添加鼠标点击事件
    $('#btn_add').on('click', function() {
        //创建原生的FormData对象
        let formdata = new FormData();

        //收集需要通过ajax请求发送过去的数据
        formdata.append('name', $('#input_name').val());
        formdata.append('bio', $('#input_bio').val());
        formdata.append('avatar', $('#input_avatar')[0].files[0]);

        //发送ajax请求
        $.ajax({
            type: 'POST',
            url: '/api/add',
            data: formdata,
            processData : false,
            //禁止jquery自动添加content-type
            contentType: false,
            success: (result) => {
                //判断返回的状态码是否为200
                if (result.code == 200) {
                    console.log(111);
                    //跳转页面到主页面
                    location.href = '/';
                }
            },
            error: function(){
                alert('用户添加失败');
            }
        })

        //点击按钮后 不做任何操作
        //解决按钮重复点击的问题
        return false;
    })
})