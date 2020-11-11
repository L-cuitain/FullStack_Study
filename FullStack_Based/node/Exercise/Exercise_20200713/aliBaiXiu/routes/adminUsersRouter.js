//用户

//引入express框架
const express = require('express');

//创建路由
const adminUsersRouter = express.Router();
//引入控制器方法
const { showUsers , addUser , delUser , showEditUser , editUser } = require('../controllers/adminUsersCtril');

//创建具体路由
adminUsersRouter.get('/users',showUsers);


adminUsersRouter.post('/users/add',addUser);

adminUsersRouter.get('/users/delete',delUser);

adminUsersRouter.get('/users/delete',delUser);

adminUsersRouter.get('/users/edit/:id',showEditUser);

adminUsersRouter.post('/users/update',editUser);

//导出路由
module.exports = adminUsersRouter;