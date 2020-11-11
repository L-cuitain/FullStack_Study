//引入框架模块
const express = require('express');
const path = require('path');

//1.引入multer
//2.设置文件上传路径
//3.处理请求
const multer = require('multer');

//开启服务
const app = express();

//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));

//设置文件上传的路径
let uploader = multer({
    storage : multer.diskStorage({
        //确定上传文件位置 cb : callback
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname,'public','upload'));
        },
        //确定上传文件的名字
        filename : (req,file,cb) => {
            cb(null,file.originalname);
        }
    })
})

//处理请求并响应
app.post('/profile',uploader.single('avator'), (req,res) => {
    console.log(req.file);
    res.send(req.file);
})

app.post('/formdata',uploader.single('avator'), (req,res) => {
    res.send(req.body);
})

//监听指定端口  开启服务
app.listen(80,() => {
    console.log('请打开 http://localhost');
});