//引入express框架
const express = require('express');

//创建服务
const app = express();

//接收请求
app.get('/',(req,res) => {
    res.send('这是首页');
})

app.get('/:id/:name',(req,res) => {
    res.send(req.params);
})

app.listen('80');