//引入 http 模块
const http = require('http');

//引入 querystring 模块
const querystring = require('querystring');

//创建服务
let app = http.createServer();

//创建request事件 监听请求和响应内容
app.on('request', (req,res) => {
    //防止乱码
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf8'
    })

    //创建变量 储存数据
    let postData = '';

    //创建data事件  拼接数据
    req.on('data', (chunk) => {
        postData += chunk;
    })

    //创建end事件
    req.on('end', () => {
        //将数据转换为对象
        let finalData = querystring.parse(postData);

        //判断对象的属性值是否匹配
        if(finalData.username == '张三' && finalData.password == '123'){
            res.end('成功');
        }else{
            res.end('失败');
        }
    })
})

//监听指定端口  开启服务
app.listen(3000, () => {
    console.log('请打开 http://127.0.0.1:3000');
});

