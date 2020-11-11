 //引入http模块
 const http = require('http');
//引入url模块
const url = require('url');

 //创建服务
 let app = http.createServer();

 //使用request事件 监听请求和响应内容
app.on('request', (req,res) => {
    //防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    });

    //获取数据对象
    let finalData = url.parse(req.url,true);

    //判断数据对象的属性值是否匹配
    if(finalData.query.username == '张三' && finalData.query.password == '123'){
        res.write('欢迎'+finalData.query.username);
    }else{
        res.write('登录失败');
    }

    //结束
    res.end();
})

//监听指定端口  开启服务
app.listen(3000, () => {
    console.log('请打开 http://127.0.0.1:3000');
})

