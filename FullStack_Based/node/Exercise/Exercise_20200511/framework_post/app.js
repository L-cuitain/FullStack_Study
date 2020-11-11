// 引入框架模块
const express = require('express');

//使用框架模块 创建服务
let app = express();

//使用express的中间件
app.use(express.urlencoded());

//创建get请求
app.get('/', (req,res) => {
    res.send('首页');
})


//创建post请求
app.post('/login', (req,res) => {
    console.log(req.body);
    res.send('登录页');
})

//指定服务器端口  启动服务
app.listen(80)