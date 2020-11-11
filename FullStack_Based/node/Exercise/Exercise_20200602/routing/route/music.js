//引入express框架
const express = require('express');

//创建路由
const  music = express.Router();

//接收请求
music.get('/',(req,res) => {
    res.send('这是音乐首页');
})

music.get('/a',(req,res) => {
    res.send('这是音乐a');
})

//导出
module.exports = music;