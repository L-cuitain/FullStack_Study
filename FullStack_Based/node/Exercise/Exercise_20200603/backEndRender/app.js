//引入express框架
const express = require('express');
const path = require('path');

//创建服务
const app = express();

//设置模板引擎
app.engine('html',require('express-art-template'));

//设置模板  模板存放目录为 views
app.set('views',path.join(__dirname,'views'));
app.set('views engine','html');

//传入值
app.locals.user = {
    name : '张三',
    age : 12
}

// app.get('/',(req,res) => {
//     let str = '首页';

//     res.sender({
//         title : str
//     })
// })

app.use('/',(req,res) => {
    res.send("111")
})



//监听端口
app.listen(80);