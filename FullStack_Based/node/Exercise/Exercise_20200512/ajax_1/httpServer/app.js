//引入框架模块
const express = require('express');

const path = require('path');

//使用框架模块 创建服务
const app = express();

//设置中间价获取post请求参数
app.use(express.urlencoded());

//将public作为静态资源目录
app.use(express.static(path.join(__dirname,'public')));

app.get('/simple', (req,res) => {
    res.send('Hello World');
})

app.get('/getParam',(req,res) => {
    res.send(req.query);
})

//接收post请求
app.post('/postParam', (req,res) => {
    res.send(req.body);
})

//监听指定端口  并开启服务
app.listen(80,() => {
    console.log('请输入 http://localhost');
})