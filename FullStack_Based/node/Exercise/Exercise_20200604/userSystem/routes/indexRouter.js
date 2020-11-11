//将获取get post 请求单独提取 存放到 router/index.js中

//导入express
const express = require('express');
//创建路由
const router = express.Router();

//导入controller文件
const { getArticle , getDetail , getIndex , login , addComment} = require('../controller/indexCtrl');

//显示首页
router.get('/',getIndex);

router.get('/index.html',getIndex);

//登录
router.post('/api/login',login);

//接收get请求  并调用getArticle函数
router.get('/api/article',getArticle);

router.get('/api/detail',getDetail);

router.post('/api/comment',addComment);

//导出路由
module.exports = router;