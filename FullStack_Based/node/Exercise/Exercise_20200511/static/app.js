//引入模块
//引入http模块
const http = require('http');

//引入url模块
const url = require('url');

//引入path模块
const path = require('path');

//引入fs模块
const fs = require('fs');

//引入mime模块
const mime = require('mime');

//创建服务
let app = http.createServer();

//监听客户端的request事件  处理请求并响应内容
app.on('request', (req, res) => {
    //获取地址栏中的url
    let pathname = url.parse(req.url).pathname;

    //获取路径
    let absolutePath = path.join(__dirname, pathname);
    console.log(absolutePath);

    //读取文件
    fs.readFile(absolutePath, (err, data) => {
        //判断路径 如果错误 返回not found
        if (err != null) {
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=utf8'
            })

            res.end("404 Not Found");
            return;
        }

        //获取文件类型
        let type = mime.getType(absolutePath);
        console.log(type);
        //如果路径正确  返回内容
        res.writeHead(200,{
            'Content-Type': type
        })
        res.end(data);
    });
})

app.listen(80, () => {
    console.log('请打开 http://localhost');
})