//引入 http 模块
const http = require('http');
//引入 querystring 模块
const querystring = require('querystring');
//创建服务
let app = http.createServer();
//使用 request 事件  监听请求和响应内容
app.on('request', (req,res) => {
    //防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })
    //创建变量 储存数据
    let postData = '';
    //使用 data 事件  获取数据
    req.on('data', (chunk) => {
        postData += chunk;
    })

    //使用 end 事件  拼接数据  判断是否匹配
    req.on('end',() => {
        let finalData = querystring.parse(postData);

        if(finalData.username == '张三' && finalData.password == '123'){
            res.end('欢迎'+finalData.username);
        }else{
            res.end('登录失败 没有'+finalData.username+'这个用户');
        }
    })
})

//监听指定端口  开启服务
app.listen(3000,() => {
    console.log('请打开 http://127.0.0.1:3000');
})


