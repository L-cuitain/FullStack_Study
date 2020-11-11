//引入http模块
const http = require('http');

//使用http模块创建服务
let app = http.createServer();

//监听浏览器request事件 
app.on('request',(req,res) => {
    //req.method 获取请求的方法
    console.log(req.method);
    
    //req.url  获取请求的地址
    console.log(req.url);
    
    //req.headers 获取请求头
    console.log(req.headers);

    //res.wirteHead(响应状态码,响应头)
    res.writeHead(302,{
        'Content-Type':'text/html;charset=utf8'
    })
    res.end('你好');
})

//监听指定的端口  启动服务
app.listen(3000,() => {
    console.log('请打开 http://127.0.0.1:3000');
})