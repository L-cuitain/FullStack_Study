//引入http模块
const http = require('http');
//引入url模块
const url = require('url');

//创建服务
let app = http.createServer();

//监听浏览器的request事件 处理请求和响应内容
app.on('request',(req,res) => {
    //解决乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=uft8'
    });

    //当url中参杂参数 必须使用pathname
    let pathname = url.parse(req.url).pathname;

    //判断首页
    if(pathname == '/' || pathname == '/index'){
        res.end('首页');
    }

    //登录页
    if(pathname == '/login'){

        console.log(url.parse(req.url,true).query);
        
        res.end('登录页面');
    }
})

//监听指定端口 开启服务
app.listen(3000,() => {
    console.log('请打开 http://127.0.0.1:3000');
})

