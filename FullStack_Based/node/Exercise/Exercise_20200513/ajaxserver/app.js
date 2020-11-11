//引入框架模块
const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

//创建服务
const app = express();

//设置静态目录
app.use('/public',express.static(path.join(__dirname,'public')));

//设置中间价 获取post请求参数
// app.use(bodyParser.json());

//接收get请求
app.get('/simple', (req,res) => {
    console.log(req.query);
    
    res.send(req.query);
})

//接收post请求
app.post('/postParam', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})


//监听指定端口  开启服务
app.listen(80);