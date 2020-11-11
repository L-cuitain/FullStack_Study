//引入框架模块
const express = require('express');
//引入path模块
const path = require('path');

const data = require('./data');

//引入multer模块
const multer = require('multer');

//创建服务
const app = express();

//设置静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置中间价
app.use(express.urlencoded({extended : false}));

//设置multer
let uploader = multer({
    storage : multer.diskStorage({
        //指定上传的文件位置 cb : callback
        destination : (req,file,cb) => {
            cb(null,path.join(__dirname,'public','upload'));
        },
        //确定上传文件后的文件名
        fileName: (req,file,cb) => {
            cb(null,file.originalname);
        }
    })
})

//接收请求  
//获取所有数据  步骤:
//前端:  页面引入jquery  模板引擎  main.js
//main.js中在页面加载完毕后  创建ajax 发送请求
//后台: index.js 导入json文件 获取到json中的数据  将json中的数据通过 module.exports中的get属性对应的函数 导出 
//app.js通过引入 index.js 获取到module.exports 对象中的 get属性 并获取到get属性返回的 backup.json 中的数据
//判断 data.get() 是否获取到数据   获取到数据 返回 将状态码和 对象(包含:状态码code 获取信息msg 数据 data) 发送 给前端  
app.get('/api/getAll' , (req,res) => {  
    //判断 data.get() 获取到的数据是否为空
    if(!data.get()){
     return res.status(500).send({
            code : 500,
            msg : '数据获取错误',
            data : null
        })
    }

    return res.status(200).send({
        code : 200,
        msg : '数据获取成功',
        data : data.get(),
    })
});


//主页面点击其中一条数据 显示 这条数据的所有信息
//步骤:
//前端: 在主页面加载模板字符串时在 内容为view的a标签的href属性添加 /detail.html?id=当前数据的id  作为跳转页面的条件并把id传入
//在detail.js 通过 URLSearchParams(localtion.search)获取到这个数据的id ajax请求将id发送给后台
//后台: 接收前端传入的id 通过index.js查找 backup.json中 获取这条数据的所有属性  再将这条数据在app.js响应给客户端  如果id没有获取到 则返回404状态码
//前端: 获取到服务器响应回的数据 将数据通过模板引擎拼接到页面中 
app.get('/api/getDetail' , (req,res) => {

    //判断id是否获取到
    if(!req.query.id){
        res.status(404).send({
            code: 404,
            msg : 'id传入失败',
            data : null
        })
    }

    //通过调用index.js的getId来获取到json中的数据
    let member = data.getId(parseInt(req.query.id));

    //响应给浏览器数据
    res.status(200).send({
        code : 200,
        msg : '数据发送成功',
        data : member
    })
})




//添加数据 步骤:
//通过用户点击主页面中的New member 跳转到add.html
//前端: add.html引入jquery  add.js
//add.js在页面加载完毕后   
//1.将图片上传后在指定区域中可以预览上传的图片  步骤: 通过URL.createObjectURL(指定的文件对象.file[0]) 获取到 文件的路径 将路径添加到指定预览区域中的img标签属性中
//2.将上传的图片和文本框中的信息通过ajax请求发送到后台  步骤: 通过FormData对象 用键值对的形式 存储文本框的信息 将对象通过ajax的data设置发送的数据给后台
//后台: 引入multer模块(主要用于处理上传文件)
//设置multer multer({ storage : multer.diskStorage({ destination : (req,file.cb) => {cb(null,...)} })})
//在接收添加数据请求的回调函数中 添加 uploader.single('与file文件的') 创建对象 member(id,name,avatar,bio,created) 
//将对象通过 index.js操作json数据 将member添加到json文件中
//向服务器响应请求
//前端: 判断发送回来的状态码是否为200 
//如果为200 则跳转页面到主页面中
//在点击事件的最后添加 return false 阻止操作

app.post('/api/add',uploader.single('avatar'), (req,res) => {
    //创建member对象
    let member = {
        id : +new Date(),
        name : req.body.name,
        avatar : `/upload/${req.file.filename}`,
        bio: req.body.bio,
        created: new Date()
    };

    //将创建的对象通过调用index.js的add属性传入
    data.add(member);

    //向浏览器响应请求
    res.status(200).send({
        code: 200,
        msg : '添加成功',
        data : null
    })
})


//删除数据
//步骤:
//前端: 给删除标签添加data-id属性 在class属性中添加 delete-btn 
//给delete的按钮添加鼠标点击事件  在回调函数中执行 取消事件的默认动作 
//询问是否要删除  如果是的话  通过 获取元素的data标签获取到数据的ID
//获取到后发送ajax请求 将ID传入后台
//后台: 将传入到后台的 id 传入index.js的deleteItem属性对应的函数中 
//在函数中 遍历json对象 是否存在这个id
//如果有 则通过数组的方法splice将数组中的这个id对应的对象删除
//删除后重新覆盖backup.json文件
//如果删除后返回ok 则将200响应给前端
app.get('/api/delete' , (req,res) => {
    //获取ajax发送来的数据
    let id = req.query.id;
    
    //调用data的属性 将id传入
    let datastatus = data.deleteItem(parseInt(id));

    //判断datastatus是否返回ok
    if(datastatus == 'ok'){
        //将状态码为200的响应发送给前端
        res.status(200).send({
            code : 200,
            msg : '数据删除成功',
            data : null
        })
    }
})


//分页查询
//步骤: 在页面加载完毕后 创建页面的滚动事件  获取三种高度  一种为页面整体高度  一种为页2面顶部到可视区域的高度  一种为页面可视区域的高度
//将页面整体高度 - 页面顶部到可视区域的高度 - 页面可视区域的高度 得出 到达页面底部的高度  
//随后 进行判断 如果 到达页面底部的高度 小于 指定的范围  则开始继续加载后面的几条数据
//前端:
//在页面加载完毕后 发送一次ajax请求  加载json文件中开头的几条数据
//创建scroll滚动事件  获取页面整体高度 $(document).height();   获取页面顶部到可视区的高度 $(window).height();  获取页面可视区的高度  $(document).scrollTop();
//判断 到达页面底部的高度 是否 小于 一个指定范围  
//如果小于 则将每次显示 最后一条数据的id 和 要显示多少条数据 作为参数 通过 ajax 发送请求给后台
//后台:
//获取到ajax请求发送的的参数后  在index.js中创建属性 getByPage(每次显示最后一条数据的id , 要显示多少条数据)
//在getByPage对应的函数中 遍历database数组  获取到和ajax传入的id相同id的对象  
//进行三元判断  如果 这个id存在  则返回这个id的对象所对应的索引  如果没有这个id 则返回 -1
//最后将 指定数量的新的数据  从三元判断所获取的索引数 + 1 得到 下一条数据 到 下一条数据的后指定数量的数据 返回
//在app.js获取到 新获取到的数据  最后将这几条数据响应给 前端  
//前端 得到 新的数据后  通过模板引擎 加载到页面中
app.get('/api/pagetion' , (req,res) => {
    //将请求发送的数据传入data的属性中
    let limitData = data.getByPage(parseInt(req.query.last),parseInt(req.query.limit));

    //获取到数据后 给前端响应
    res.status(200).send({
        code : 200,
        msg : '数据获取成功',
        data : limitData,
    })
})


//监听指定端口  开启服务
app.listen(80,() => {
    console.log('请打开http://localhost');
});