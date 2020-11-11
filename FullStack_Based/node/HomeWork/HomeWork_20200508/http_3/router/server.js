//引入 http 模块
const http = require('http');

//引入 url 模块
const url = require('url');

//创建服务
let app = http.createServer();

//使用 request事件  监听请求和响应内容
app.on('request', (req,res) => {
    //防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })

    //当url参杂参数 必须使用pathname
    let pathname = url.parse(req.url).pathname;

    //判断首页
    if(pathname == '/' || pathname == '/index'){
        res.write('首页');
    }

    //判断登录页面
    if(pathname == '/login'){
        console.log(url.parse(req.url,true).query);

        res.write('登录页面');
    }

    res.end();
})

//监听指定端口  开启服务
app.listen(3000, () => {
    console.log('请打开 http://127.0.0.1:3000');
})