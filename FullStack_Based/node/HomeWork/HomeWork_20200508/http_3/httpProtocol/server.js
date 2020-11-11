//引入http模块
const http = require('http');

//使用http模块 创建服务
let app = http.createServer();

//创建request事件  监听请求和响应的内容
app.on('request', (req,res) => {
    //防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    });

    //打印请求方式
    console.log(req.method);
    
    //打印请求地址
    console.log(req.url);

    //打印请求头
    console.log(req.header);
    
    //响应内容
    res.write('滑稽');
    
    //结束请求
    res.end();
})

//监听指定端口 开启服务
app.listen(3000, () => {
    console.log('请打开 http://127.0.0.1:3000');
});

