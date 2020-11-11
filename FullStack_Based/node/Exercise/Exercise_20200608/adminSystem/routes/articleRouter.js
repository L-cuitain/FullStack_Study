//引入express框架
const express = require('express');
//引入multer
const multer = require('multer');
//引入md5
const md5 = require('md5');
//引入path
const path = require('path');

//使用exprss的方法 
const articleRouter = express.Router();

let { showArticle , editArticle , findArticleByPage , delArticle , showAddArticle , addArticle , showArt , modifyArticle} = require('../controller/articleCtrl');

//接收请求
//显示article页面
articleRouter.get('/',showArticle);
//显示 article-add页面
articleRouter.get('/add',showAddArticle);
//显示 article-edit页面
articleRouter.get('/edit',editArticle);
//分页查询
articleRouter.get('/findArticleByPage',findArticleByPage);
//删除
articleRouter.get('/delArticle',delArticle);

//设置磁盘储存引擎
let uploader = multer({
    storage : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname,"../",'public','upload'))
          },
          filename: function (req, file, cb) {
            cb(null, md5(file.originalname + new Date()) + '.' + file.mimetype.substring(6));
          }
    })  
})

//添加
articleRouter.post('/addArticle',uploader.single('cover'),addArticle);

//回显
articleRouter.get('/showArt',showArt);

//修改
articleRouter.post('/modifyArticle',uploader.single('cover'),modifyArticle)

//导出
module.exports = articleRouter;