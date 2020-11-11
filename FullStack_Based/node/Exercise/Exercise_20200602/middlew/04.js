//引入express框架
const express = require('express');
const fs = require('fs');

//使用框架创建web服务器
const app = express();

//
app.get('/index', (req,res,next) => {
    fs.readFile('./01.text','utf8', (err,result) => {
        if(err != null){
            next(err)
        }else{
            res.send(result);
        }
    })
})