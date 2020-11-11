//创建提交的点击事件
$('input[value="提交"]').on('click',() => {
    //获取form表单的数据
    let formData = $('#form').serialize();
    console.log(formData);

    //调用addStudent函数
    addStudent(formData);
})


//创建addStudent函数 向后台发送请求并将用户数据传入后台
function addStudent(formData){
    //创建ajax
    $.ajax({
        type : 'POST',
        url : '/addStudent',
        data : formData,
        success : (data) => {
            window.location.href = '/list.html';
        }
    })
}