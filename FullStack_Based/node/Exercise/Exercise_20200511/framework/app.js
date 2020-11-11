//express 相对简化服务的创建
//引入 express 模块
const express = require('express');

//创建服务
const app = express();

//请求的时候  返回数据
app.use((req,res) => {
    res.send('滑稽');
})

//指定端口号 启动服务
app.listen(80, () => {
    console.log('请打开 http://localhost');
})