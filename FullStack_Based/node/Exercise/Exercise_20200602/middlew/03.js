//引入express框架
const express = require('express');

//使用框架创建web服务器
const app = express();

app.use('/admin',(req,res,next) => {
    let login = false;
    if(login){
        next();
    }else{
        res.send('登录失败');
    }
})

app.get('/admin',(req,res,next) => {
    res.send('登录成功');
})

app.use((req,res) => {
    res.redirect(302, 'https://hotdot.pro/en/404/');  
})


//监听指定端口
app.listen(80);