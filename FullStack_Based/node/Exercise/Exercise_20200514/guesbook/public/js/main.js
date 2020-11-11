//当页面加载完成
$(document).ready(() => {
  //调用函数  查找留言
  findGuest();
})

//创建提交的鼠标点击事件
$('.btn-primary').on('click', () => {
  //获取form表单的数据 格式:key=value&key1=value1
  //语法: $(form选择器).serialize();
  let formData = $('#form').serialize();  
  //调用函数
  setGuest(formData);
})


//创建findGuest函数  查找留言
function findGuest() {
  //创建ajax
  $.ajax({
    type: 'GET',
    url: '/findGet',
    data: null,
    success: (data) => {
      //创建变量 保存数据
      let guests = '';

      //循环遍历 data 数据
      for (let i in data) {
        guests += `
         <li class="media" data-time="${data[i].created}">
         <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
         <div class="media-body">
           <h4>${data[i].name}</h4>
           <p>${data[i].content}</p>
         </div>
       </li>
         `;
      }

      //将数据添加到容器中
      $('#messages').html(guests);
    }
  })
}



//创建setGuest函数 添加liuyan
function setGuest(param){  
  //创建ajax
  $.ajax({
    type: 'POST',
    url : '/addGuest',
    data : param,
    success: (data) => {
      if(data.code == 200){
        console.log(data.msg);
        findGuest();
      }
    } 
  })
}