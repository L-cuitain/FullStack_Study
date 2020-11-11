//在页面加载完毕
$(function () {
    //调用分页方法
    showPage();

    //创建分页按钮的点击事件
    $('.pagination').on('click', function () {
        //判断按钮是否禁用
        if ($(this).hasClass('disabled')) {
            return false;
        }
        //获取页数
        let pageNum = $(this).data('page');

        //调用showPage函数
        showPage(pageNum);
    })

    //删除
    //创建删除按钮的点击事件
    $('tbody').on('click', 'i', function () {

        //将 按钮的 data-id属性 添加到html中
        $('html').attr('data-id', $(this).data('id'));
        //显示弹窗
        $('#del-modal').modal('show');
    })

    $('.delete-user').on('click', function () {

        let delId = $('html').data('id');

        //发送ajax
        $.ajax({
            type: 'GET',
            url: '/user/delete',
            data: {
                id: delId
            },
            success: function (result) {
                //判断删除是否成功
                if (result.code == 200) {

                    let pagenum = $('html').data('pagenum');

                    //隐藏删除框
                    $('#del-modal').modal('hide');

                    //调用分页函数
                    showPage(pagenum);
                }
            }
        })
    })

    //修改user对象数据
    //回显
    //创建修改图标的点击事件
    $('tbody').on('click', 'td a', function () {
        //获取id
        let id = $(this).data('id');
        
        //发送ajax
        $.ajax({
            type: 'GET',
            url: '/user/getUser',
            data: {
                id: id
            },
            success: function (result) {
                
                //判断后台响应状态码
                if (result.code == 200) {
                    
                    //拼接模板字符串
                    let modifyStr = template('modify_templ', result.data)
                    //覆盖到页面中
                    $('.edit-modal-content').html(modifyStr);
                    //显示弹窗
                    $('#edit-modal').modal('show');
                }
            }
        })
    })

    //创建修改保存按钮的点击事件
    $('#edit-modal').on('click','.save-btn',function(){
        //获取form表单的数据
        let fromData = $('#edit-form').serialize()+'&'+'_id='+$(this).data('id');

        //发送ajax
        $.ajax({
            type : 'PUT',
            url : '/user/modifyUser',
            data : fromData,
            success : function(result){
                //前台判断响应后的状态码
                if(result.code == 200){
                    alert('修改成功');
                    
                    //隐藏状态框
                    $('#edit-modal').modal('hide');

                    //获取html的data-pagenum
                    let pagenum = $('html').data('pagenum');

                    //调用showPage函数 
                    showPage(pagenum);
                }
            }
        })
    })
})


//创建分页函数
/**
 * 
 * @param {Number} pageNum  页数
 * @param {Number} pageSize  每页数据的条数
 */
function showPage(pageNum, pageSize) {
    //发送ajax
    $.ajax({
        type: 'GET',
        url: 'user/findAll',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 5
        },
        success: function (result) {

            //判断状态码
            if (result.code == 200) {
                //拼接模板字符串
                let userStr = template('list_templ', {
                    target: result.data.records
                })

                //渲染用户列表
                $('tbody').html(userStr);
                $('html').attr('data-page', result.data.page);

                //渲染分页
                let pageStr = template('page_templ', {
                    display: result.data.display,
                    page: result.data.page,
                    pages: result.data.pages
                });
                $('.pagination').html(pageStr);
            }
        }
    })
}


