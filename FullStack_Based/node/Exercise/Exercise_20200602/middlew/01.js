//引入express框架
const express = require('express');

//使用框架创建web服务器
const app = express();

//当客户端以get方式访问/路由时
app.get('/request',(req,res , next) => {
    req.name = 'huaji';
    console.log(123);

    //当匹配到/request的时候 让数据流向下一个url相同中间件
    next();
})

app.get('/request',(req,res,next) => {
    req.name = 'gayluote';

    next();
})

app.get('/request',(req,res) => {
    console.log(111);
    res.send(req.name);
})

//监听指定端口
app.listen(80);