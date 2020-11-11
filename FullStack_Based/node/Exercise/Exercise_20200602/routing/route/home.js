//引入express框架
const express = require('express');

//创建路由
const home = express.Router();

//接收请求
home.get('/',(req,res) => {
    res.send('这是推荐页面首页');
})

home.get('/recommend',(req,res) => {
    res.send('这是推荐页');
})

//导出
module.exports = home;