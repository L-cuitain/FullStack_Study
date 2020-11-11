//导入包
//导入express框架
const express = require('express');
//导入path模块
const path = require('path');
//导入路由模块
const router = require('./routes/indexRouter');

//导入express-session
const session = require('express-session');

//设置包
//使用express方法创建web服务
const app = express();

//导入后台模板引擎
app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间价
app.use(express.urlencoded({ extend : false}));

//设置session
app.use(session({
    secret : 'keyboard cat',
    cookie : { maxAge : 60000*30}
}))

//连接数据库
require('./models/dbContent');

//处理请求
app.use(router);

//监听指定端口  开启服务
app.listen(80);