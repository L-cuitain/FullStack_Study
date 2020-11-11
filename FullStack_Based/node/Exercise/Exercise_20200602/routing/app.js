//引入express框架
const express = require('express');
const home = require('./route/home');
const music = require('./route/music');

//创建服务
const app = express();

app.use('/home',home);

app.use('/music',music);

//监听80端口
app.listen(80);