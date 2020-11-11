//当页面加载完毕后
$(document).ready(() => {
    //调用getlist函数
    getlist();
})


//创建getlist函数
function getlist() {
    //创建ajax
    $.ajax({
        type: 'GET',
        url: '/showlist',
        data: null,
        success: (data) => {
            //创建新的字符串
            let htmlStr = `
            <caption>学员信息</caption>
		<tr>
			<th>姓名</th>
			<th>年龄</th>
			<th>性别</th>
			<th>邮箱地址</th>
			<th>爱好</th>
			<th>所属学院</th>
			<th>入学时间</th>
		</tr>
            `;

            //遍历后台接收的数据
            for (let i in data) {
                
                let sexData = data[i].sex == 0 ? '男' : '女';
                
                let hobbyData = '';
                
                for(let param in data[i].hobby){
                    hobbyData += data[i].hobby[param]+' ';
                }

                let message = template('message', {
                    username: data[i].username,
                    age: data[i].age,
                    sex: sexData,
                    email: data[i].email,
                    hobby: hobbyData,
                    school: data[i].school,
                    date: data[i].date
                })
                htmlStr += message;
            }
            //添加到table中
            $('table').html(htmlStr);
        }
    })
}