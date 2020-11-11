//在页面加载完毕后
$(function(){
    //调用showPage方法
    showPage();

    //点击下一页
    $('.page').on('click','a',function(){
        //获取页数
        let pagenum = $(this).data('pagenum');
        //调用showPage分页
        showPage(pagenum);
    })
})


//分页查询
//创建函数showPage 
function showPage(pageNum,pageSize){
    //发送ajax请求
    $.ajax({
        type : 'GET',
        url : '/api/article',
        data : {
            pageNum : pageNum || 1,
            pageSize : pageSize || 6
        },
        success: function(result){

            // console.log(result.data[0].publishDate);
            //遍历日期  将日期转换格式化
            for(let i = 0 ; i < result.data.length ; i++){
                // console.log(moment().format('LTS'));
                //转换中文格式时间
                moment.locale('zh-cn'); 

                //使用momentjs将日期格式化
                result.data[i].publishDate = moment(result.data[i].publishDate).format('LL');
            }


            //拼接字符串
            let listData = template('list_templ',{
                records : result.data.records
            })

            $('.list').html(listData);
            

            //拼接字符串
            let pageData = template('pagenaction_templ',{
                display: result.data.display,
                page : result.data.page,
                pages : result.data.pages
            })
            console.log(result.data.page);
            
            $('.page').html(pageData);
        }
    })
}