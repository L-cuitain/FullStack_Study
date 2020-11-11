//引入express框架
const express = require('express');

//引入path模块
const path = require('path');

//引入路由
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const articleRouter = require('./routes/articleRouter');

//引入exprss-session
const expressSession = require('express-session');

//创建服务
const app = express();


//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间件
app.use(express.urlencoded( {extended : false} ));

//连接数据库
require('./model/dbContent');

//设置后台模板引擎
app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');

//设置express-session
app.use(expressSession({
    // secret 密匙 这里表示签名
    secret : 'keyboard cat',
    //cookie 设置cookie
    //maxAge 设置cookie在浏览器的存活时间  单位是毫秒
    cookie : {maxAge: 60000000 * 30}
}))


//处理请求
app.use(indexRouter);
app.use('/user',userRouter);
app.use('/article',articleRouter);


//监听指定端口  开启服务
app.listen('3000',function(){
    console.log('请打开http://localhost:3000');
});