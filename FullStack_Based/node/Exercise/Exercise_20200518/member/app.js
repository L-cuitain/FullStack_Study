//引入express模块
const express = require('express');
const path = require('path');

//引入index.js
const data = require('./data/index');

const multer = require('multer');

//创建服务
const app = express();

//引入静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置路径
let uploader = multer({
    storage : multer.diskStorage({
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname,'public','upload'));
        },
        filename : (req,file,cb) => {
            cb(null,file.originalname);
        }
    })
})


//获取浏览器发送的请求
//查询所有
app.get('/api/getAll' , (req,res) => {
    //调用 index.js中的get属性
    let jsonData = data.get();

    //判断是否获取到数据
    if(!jsonData){
        res.status(500).send({
            code : 500,
            msg : '数据获取失败',
            data : null,
        })
    }

    //将jsonData返回给浏览器
    res.status(200).send({
        code : 200,
        msg : '数据获取成功',
        data : jsonData,
    })
})


//添加数据
app.post('/api/add', uploader.single('avatar') , (req,res) => {

    //创建member对象
    let member = {
        id : +new Date(),
        name : req.body.name,
        avatar : `/upload/${req.file.filename}`,
        bio : req.body.bio,
        created : new Date(),
    }

    //调用data的add属性
    let finalData = data.add(member);

    //判断是否成功
    if(!finalData){
        res.status(500).send({
            code : 500,
            msg : '添加失败',
            data : null,
        })
    }

    res.status(200).send({
        code : 200,
        msg : '添加成功',
        data : null,
    })
});


//根据id获取数据
app.get('/api/getDetail' , (req,res) => {
    console.log(res.query.id);
    
    //调用data的getId对象 将id传入 获取到指定member对象
    let finalData = data.getMember(parseInt(req.query.id));
    
    res.status(200).send({
        code : 200,
        msg : '数据获取成功',
        data : finalData
    })    
})


//开启服务
app.listen(80, () => {
    console.log('请打开 http://localtion');
})