//文章

//引入express框架
const express = require('express');
const multer  = require('multer');
const md5 = require('md5');
const path = require('path');

let uploader = multer({
    storage : multer.diskStorage({
        destination : (req,file,cb) => {
            cb(null , path.join(__dirname,'../','public','uploads'));
        },
        filename : (req,file,cb) => {
            cb(null , md5(file.originalname + new Date()) + '.' + file.mimetype.substring(6));
        }
    })
})

//创建路由
const adminPostsRouter = express.Router();
//引入控制器方法
const { postsPage , postsAddPage , postsEditPage , postsEdit , postsByFilter , postsDel , postsCategoryPage , postsFindCategory , postsAddCategory , postsDeleteCategory} = require('../controllers/adminPostsCtrl');

//创建具体路由
adminPostsRouter.get('/posts',postsPage);

adminPostsRouter.get('/posts/add',postsAddPage)

//通过筛选条件查询数据
adminPostsRouter.get('/posts/findsByFilter',postsByFilter);

//通过分页查询数据
adminPostsRouter.get('/posts/findsByPaging',postsByFilter);

//通过id删除文章
adminPostsRouter.put('/posts/delete',postsDel);

//回显文章
adminPostsRouter.get('/posts/edit/:id',postsEditPage);

//编辑文章
adminPostsRouter.post('/posts/edit',uploader.single('feature'),postsEdit);

//显示文章分类页面
adminPostsRouter.get('/posts/category', postsCategoryPage);

// 获取文章分类数据
adminPostsRouter.get('/posts/findCategory', postsFindCategory);

// 添加文章分类数据
adminPostsRouter.post('/posts/addCategory', postsAddCategory);

// 删除文章分类
adminPostsRouter.delete('/posts/deleteCategory', postsDeleteCategory)


//导出路由
module.exports = adminPostsRouter;