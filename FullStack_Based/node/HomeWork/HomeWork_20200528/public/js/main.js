//在页面加载完毕后
$(function(){
  //调用showPage函数
  showPage();

  //创建上下页点击事件
  $('.pager').on('click','li',function(){
    //判断是否为disabled
    if(!$(this).hasClass('disabled')){
      //获取pageNum
      let pageNum = $(this).data('pagenum');
      
      //调用函数
      showPage(pageNum);
    }
  })
})



//创建showPage函数
/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 */
function showPage(pageNum,pageSize){
  //发送ajax请求
  $.ajax({
    type : 'POST',
    url : 'showPage',
    data : {
      pageNum : pageNum || 1,
      pageSize : pageSize || 5
    },
    success : function(result){
      //判断状态码是否为200
      if(result.code == 200){
       //拼接字符串
       let pageStr = template('pagenaction_template',{
         pageNum : result.data.pageNum,
         pageSize : result.data.pageSize,
         pageTotal : Math.ceil(result.data.pageTotal / result.data.pageSize)
       })

       $('html').attr('data-pagenum',result.data.pageNum);
       $('.pager').html(pageStr);
       
        //拼接字符串
        let htmlStr = template('list_template',{
          target : result.data.obj
        })

        //覆盖到页面中
        $('tbody').html(htmlStr);
      }
    }
  })
}
