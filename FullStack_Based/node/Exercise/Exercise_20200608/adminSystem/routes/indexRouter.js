//引入express框架
const express = require('express');

//使用express的方法创建路由
const indexRouter = express.Router();


//引入控制器
let { show,login,logout } = require('../controller/indexCtrl');

//创建路由
//浏览器默认跳转
indexRouter.get('/',show);

//登录
indexRouter.post('/api/login',login);

//退出登录
indexRouter.get('/api/logout',logout);

//导出方法
module.exports = indexRouter;