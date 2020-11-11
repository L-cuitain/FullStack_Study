//引入框架模块
const express = require('express');

//使用框架模块创建服务
let app = express();

//将文件夹作为静态目录
app.use(express.static('bb'));

//指定服务端口号  并启动服务
app.listen(80);