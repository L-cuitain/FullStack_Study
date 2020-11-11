//在页面加载完毕后
$(document).ready(function(){
    //创建URLSearchParams对象  获取地址栏中的id  
    let memberId = new URLSearchParams(location.search).get('id');
    
    //发送ajax请求
    // $.ajax({
    //     type : 'GET',
    //     url : '/api/getDetail',
    //     data : {
    //         id : memberId
    //     },
    //     success : function(result){
    //         if(result.code == 200){
    //             //拼接模板字符串
    //             let htmlstr = template('list-templ',{
    //                 id : result.id,
    //                 name : result.name,
    //                 bio : result.bio,
    //                 avatar : result.avatar
    //             })

    //             $('.member-getid').html(htmlstr);
    //         }
    //     }
    // })

    $.ajax({
        type: 'get',
        url: '/api/getDetail',
        data: {
          id: memberId
        },
        success: function (result) {
          // console.log(data);
          let htmlStr = template('detail_templ', result.data);
    
          $('.jumbotron').html(htmlStr);
        }
      })
})