//创建域改变事件
$('#input_avatar').on('change' , function(){
    //使用URL.createObjectURL() 获取上传图片的路径
    let imgSrc = URL.createObjectURL($(this)[0].files[0]);

    //将imgSrc 替换到图片标签中
    $('#avatar').attr('src',imgSrc);
})


//为save按钮添加鼠标点击事件
$('#btn_add').on('click' , function(){
    //创建FormData对象
    let formdata = new FormData();

    //将表单数据添加到formdata中
    formdata.append('name',$('#input_name').val());
    formdata.append('bio',$('#input_bio').val());
    formdata.append('avatar',$('#input_avatar')[0].files[0]);

    //发送ajax请求
    $.ajax({
        type : 'POST',
        url : 'api/add',
        data : formdata,
        processData : false,
        contentType : false,
        success : function(result){
            if(result.code == 200){
                location.href = '/';
            }
        },
        error : function(){
            alert('添加失败');
        }
    })

    return false;
})