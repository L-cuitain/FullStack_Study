//创建提交按钮的点击事件
$('#add-btn').on('click',function(){
  //表单校验
  
  //获取表单的内容
  let formData = $('#form').serialize();
  
  //发送ajax请求
  $.ajax({
    type : 'POST',
    url : '/add',
    data : formData,
    success : function(result){
      //判断状态码是否为200
      if(result.code == 200){
        //弹窗提示
        alert(`用户 ${result.data.name} 添加成功`);
        //跳转页面
        location.href = '/';
      }
    }
  })
})