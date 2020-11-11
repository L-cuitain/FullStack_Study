//导入http模块
const http = require('http');

//创建服务器
let app = http.createServer();

//监听浏览器发送的 请求 事件 并处理响应
app.on('request',function(req,res){
    //req: request 请求  
    //res: response 响应
    //添加响应头
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>滑稽</h1>`);

    res.end();
})

//监听端口 并启动服务
app.listen(80 , () => {
    console.log('请打开http://127.0.0.1');
});
