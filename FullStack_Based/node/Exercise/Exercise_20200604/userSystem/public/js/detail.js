//在页面加载完毕
$(function(){
    
    //获取id
    let id = new URLSearchParams(location.search).get('id');
    //调用函数getDetail
    getDetail(id);
})

//创建函数 发送ajax请求
function getDetail(id){
    //发送get请求
    //格式: $.get(url,param,callback())
   $.get(`/api/detail?id=${id}`,null,function(result){
       
       //修改时间
       moment.locale('zh-cn'); 
       result.data.publishDate = moment(result.data.publishDate).format('LL');
    
       //拼接字符串
       let detailStr = template('list_templ',result.data);

       //添加到页面中
       $('.container').prepend(detailStr);
    })
}