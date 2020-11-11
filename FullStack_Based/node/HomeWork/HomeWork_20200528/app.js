//引入express模块
const express = require('express');
//引入path模块
const path = require('path');
//引入database文件
const database = require('./data/database');

//创建服务
const app = express();

//引入静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间价
app.use(express.urlencoded({ extended : false }));

//添加
app.post('/add',function(req,res){
    console.log(req.body);
    //创建对象  将数据添加到数据库中
    let manager = {
        name : req.body.name,
        password : req.body.password,
        age : req.body.age,
        email : req.body.email,
        hobbies : req.body.hobbies
    }

    //调用database的属性
    database.add(manager,function(data){
        //判断data是否为空
        if(data){
            res.status(200).send({
                code : 200,
                msg : '数据添加成功',
                data : data
            })
        }
    })
}) 

//分页查询
app.post('/showPage',function(req,res){
    //调用database的属性
    database.getPage(parseInt(req.body.pageNum) , parseInt(req.body.pageSize) ,function(data){
        //响应浏览器
        res.status(200).send({
            code : 200,
            msg : '数据获取成功',
            data : data,
        })
    })
})


//监听指定端口  开启服务
app.listen('80',function(){
    console.log('请打开http://localhost');
})