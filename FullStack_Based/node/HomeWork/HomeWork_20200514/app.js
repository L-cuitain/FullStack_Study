//引入框架模块
const express = require('express');
const path = require('path');
const db = require('./data/db.json');
const fs = require('fs');

//开启服务
const app = express();

//设置静态目录
app.use(express.static(path.join(__dirname, '/students')));

//设置中间价 获取post的参数
app.use(express.urlencoded({
    extended: false
}));

//接收get请求
app.get('/showlist', (req,res) => {
    res.status(200).send(db);
});


//接收post请求
app.post('/addStudent', (req, res) => {
    //将获取到的数据 存入新的对象中
    console.log(req.body);
    let reqData = {
        username: req.body.username,
        age: req.body.age,
        sex: req.body.sex,
        email: req.body.email,
        hobby: req.body.hobby,
        school: req.body.school,
        date: req.body.date
    }

    //遍历对象属性
    for (let index in reqData) {
        if (reqData[index] == null) {
            reqData = null;
            break;
        }
    }

    if (reqData != null) {
        //将对象存到db.json中
        db.push(reqData);

        //使用fs写入文件
        fs.writeFile(path.join(__dirname, 'data', 'db.json'),JSON.stringify(db) , (err) => {
            //判断是否有错误
            if(err != null){
                console.log('数据添加失败');
            }

            res.status(200).json({
                code : 200,
                msg : '数据添加成功'
            })
        })
    }else{
        res.send('数据添加失败');
    }
})

//监听指定端口  开启服务
app.listen(80, () => {
    console.log('请打开 http://localhost');
})