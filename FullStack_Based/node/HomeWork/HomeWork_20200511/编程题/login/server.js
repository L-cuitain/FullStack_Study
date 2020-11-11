//引入 express 模块
const express = require('express');

//引入 fs 模块
const fs = require('fs');

//引入 path 模块
const path = require('path');


//使用框架模块创建服务
let app = express();

//获取根目录下的public文件夹  将public 作为静态目录
// console.log(path.join(__dirname));
app.use('/public',express.static(path.join(__dirname,'public')));      //http://localhost/login.html
// app.use('/public',express.static('public'));    //http://localhost/login.html

//使用 express的中间件
app.use(express.urlencoded());

//使用get请求 监听请求响应内容
app.get('/login',(req,res) => {
    
    //获取data.json
    let file = path.join(__dirname,'/data.json');

    //创建变量  储存获取的数据  使用 fs 模块 读取文件
    let finalData = JSON.parse(fs.readFileSync(file));   
    
    //判断 用户填写的用户名和密码 与 后台的 用户名和密码 是否匹配
    if(req.query.username == finalData.username && req.query.password == finalData.password){
        res.send('登录成功');
    }else{
        console.log(finalData.username);
        res.send('用户名或密码错误, 请重新登录!');
    }
})


//指定服务端口号  启动服务
app.listen(80, () => {
    console.log('请打开 http://localhost');
})