//创建页面加载完毕事件
$(function(){
    //调用分页查询函数
    showPage();

    //创建左右分页按钮的点击事件
    $('.pagination').on('click','li',function(){
        //判断此按钮是否 被禁用
        if(!$(this).hasClass('disabled')){
            //获取当前按钮的页数
            let pagenum = $(this).data('pagenum');
            
            //调用showPage函数
            showPage(pagenum);
        }
    })


    //创建删除按钮的点击事件
    $('tbody').on('click','tr i',function(){
        //获取id
        let id = $(this).data('id');
        console.log(id);
        
        //存入html的id中
        $('html').attr('data-id',id);

        //打开弹窗
        $('.modal-delArticle').modal('show');
    })

    $('.del-btn').on('click',function(){
        //发送ajax
        $.ajax({
            type : 'GET',
            url : 'article/delArticle',
            data : {
                id : $('html').data('id')
            },
            success : function(result){
                //判断状态码
                if(result.code == 200){
                    //隐藏弹窗
                    $('.modal-delArticle').modal('hide');
                    //获取html的pagenum
                    let pagenum = $('html').data('pagenum');
                    //调用函数
                    showPage(pagenum);
                }
            }
        })
    })
})


//创建分页查询函数
/**
 * 
 * @param {Number} pageNum  页数 
 * @param {Number} pageSize  一页显示的条数
 */
function showPage(pageNum,pageSize){
    //发送ajax
    $.ajax({
        type : 'GET',
        url : '/article/findArticleByPage',
        data : {
            pageNum : pageNum || 1,
            pageSize : pageSize || 5
        },
        success : function(result){
            //判断后台传递的状态码
            if(result.code == 200){
                // console.log(result.data);
                //拼接文章字符串
                let listStr = template('list_templ',{
                    records : result.data.records
                })
                //将字符串覆盖到页面中
                $('tbody').html(listStr);

                //拼接分页字符串
                let pageStr = template('page_templ',{
                    page : result.data.page,
                    pages : result.data.pages,
                    display : result.data.display
                });

                //将字符串覆盖到页面中
                $('.pagination').html(pageStr);
                $('html').attr('data-pagenum',result.data.page);
            }
        }
    })
}

