//引入框架模块
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./data/db.json');

//开启服务
const app = express();

//设置静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间件获取post参数
app.use(express.urlencoded({ extended: false }));

//获取get请求
app.get('/findGet', (req,res) => {
    res.status(200).send(db);
})

//获取post请求
app.post('/addGuest', (req,res) => {
    // console.log(req.body);
    //创建对象 拼接数据
    let reqData = {
        name : req.body.name,
        content : req.body.content,
        created : new Date().toLocaleString()
    };
    
    //将对象添加到db.json中
    db.unshift(reqData);

    //将db数据重新写入到json文件中
    fs.writeFile(path.join(__dirname,'data','db.json'),JSON.stringify(db),(err) => {
        if(err != null){
            console.log(err);
        }

        //status(200)代表浏览器的状态码
        res.status(200).json({
            //返回给前端的状态码
            code : 200,
            msg : '数据添加成功'
        })
    })
});

//监听指定端口  开启服务
app.listen(80 , () => {
    console.log('请打开 http://localhost');
});