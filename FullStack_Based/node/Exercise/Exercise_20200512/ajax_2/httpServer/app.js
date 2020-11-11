//引入框架模块
const express = require('express');

//使用框架模块 创建服务
const app = express();

//接收GET参数
app.get('/simple', (req,res) => {
    res.send(req.query);
})


//监听指定端口  开启服务
app.listen(80, () => {
    console.log('请打开 http://localhost');
})

