//引入express模块
const express = require('express');
//引入path模块
const path = require('path');
//引入data文件
const database = require('./data/database');

//创建服务
const app = express();

//设置中间价
app.use(express.urlencoded({
    extend: false
}));

//设置静态目录
app.use(express.static(path.join(__dirname, 'public')));

//接收get请求
app.get('/list', (req, res) => {
    //后台获取数据库的数据
    database.getAll(function (result) {
        res.status(200).send({
            code: 200,
            msg: '数据获取成功',
            data: result
        })
    })
})



//分页查询
app.use('/getPage', (req, res) => {
    //获取到前端传递的  页数  和  每页显示的条数
    database.page(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function (data) {
        //判断是否获取到数据
        if (data) {
            //将请求响应回去
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: data
            })
        }
    });
});



//接收post请求
app.post('/delete', (req, res) => {
    // console.log(req.body.id);
    //删除数据库中相同id的数据
    let finalData = database.del(req.body.id);

    //判断是否为ok
    if (finalData == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '数据删除成功',
            data: null
        })
    }
})


app.post('/add', (req, res) => {
    // console.log(req.body);

    //创建对象
    let manager = {
        name: req.body.name,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }
    //将数据添加到数据库中
    let finalData = database.add(manager);

    if (finalData == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '数据添加成功',
            data: null
        })
    }
})

app.post('/show', function (req, res) {
    //获取前端传入的id
    let userid = req.body.id;
    //从数据库中查找该数据
    database.show(userid, function (manager) {
        if (manager) {
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: manager
            })
        }
    });
})


//修改
app.post('/edit',function(req,res){
    
    //将前端获取到的id 和 对象
    database.edit(req.body.id,req.body,function(data){
        if(data){
            res.status(200).send({
                code : 200,
                msg : '数据修改成功',
                data : data
            })
        }
    });
    
})




//监听指定端口  开启服务
app.listen(80, () => {
    console.log('请打开http://localhost');
})