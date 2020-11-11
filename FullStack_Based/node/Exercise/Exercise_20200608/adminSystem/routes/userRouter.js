//引入exprss框架
const express = require('express');


//使用express的方法 创建路由
const userRouter = express.Router();

//引入userCtrl.js
let { showUser , editUser , findUsers , deleteUser , addUser , getUser , modifyUser } = require('../controller/userCtrl');

//接收请求
userRouter.get('/',showUser);

//分页查询
userRouter.get('/findAll',findUsers)

//修改
userRouter.get('/edit',editUser);

//删除
userRouter.get('/delete',deleteUser);

//添加
userRouter.post('/addUser',addUser)

//回显
userRouter.get('/getUser',getUser);

//修改
userRouter.put('/modifyUser',modifyUser);

//导出方法
module.exports = userRouter;