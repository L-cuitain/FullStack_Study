//引用http模块
const http = require('http');
//引入querystring模块
const querystring = require('querystring');

//使用http模块创建服务
let app = http.createServer();

//接收服务器请求和响应
app.on('request', (req,res) => {
    //创建响应头 防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })

    //创建变量 存储数据
    let postData = '';

    //创建data事件 监听数据传输
    req.on('data', (chunk) => {
        //拼接数据
        postData += chunk;
    })

    //end事件
    req.on('end', () => {
        //将数据变成对象
        let finalData = querystring.parse(postData);

        //判断finalData的对象属性
        if(finalData.username == '张三' && finalData.password == '123'){
            res.end('成功');
        }else{
            res.end('失败');
        }
    })
})

//监听指定的端口 启动服务
app.listen(3000,() => {
    console.log('请打开 http://127.0.0.1:3000');    
})

