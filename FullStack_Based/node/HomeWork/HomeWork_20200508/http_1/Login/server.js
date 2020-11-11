//引入http模块
const http = require('http');
//引入url模块
const url = require('url');

//使用http模块创建服务
let app = http.createServer();

//监听浏览器的request事件 处理请求并响应内容
app.on('request', (req,res) => {
    //设置响应头  解决乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })

    //获取对象形式的数据
    let param = url.parse(req.url,true);

    //判断数据是否匹配
    if(param.query.username == '张三' && param.query.password == '123'){
        res.write('欢迎你'+param.query.username);
    }else{
        res.write('错误');
    }

    res.end();
})

//监听端口 启动服务
app.listen(3000,() => {
    console.log('请打开 http://127.0.0.1:3000');
})