//将获取请求后的回调函数 单独提出  存放到 indexCtril.js

//用于响应请求

//引入article数据库文件
const Article = require('../models/article');


//引入分页模块
const mongooseSexPage = require('mongoose-sex-page');
//引入md5加密
const md5 = require('md5');

const User = require('../models/user')
const Comment = require('../models/comment');

//跳转主页
module.exports.getIndex = (req,res) => {
    res.render('index',{ aa : '欢迎'});
}

//登录
module.exports.login = async (req,res) => {
    //获取前端传入的数据
    let {email,password} = req.body;

    
    //做后端校验
    if(email.trim().length == 0 || password.trim().length == 0){
        return res.status(400).send({
            code : 400,
            msg : '邮箱或密码错误'
        })
    }

    //去数据库查询数据
    //通过email查询用户的所有信息
    let user = await User.findOne({email:email})

    //判断是否存在user
    if(user){
        //获取密码
        let isValid = ((md5(md5(md5(password)))) == user.password) && user.status;
        
        //判断密码是否正确
        if(isValid){
            //讲用户名和密码存到session
            req.session.username = user.username;
            //讲userInfo存到app.locals中
            req.app.locals.userInfo = user;

            //响应
            res.status(200).send({
                code : 200,
                msg : '登录成功'
            })
        }else{
            return res.status(400).send({ code : 400 , msg : '邮箱或密码错误'});
        }
    }else{
        return res.status(400).send({ code : 400 , msg : '邮箱或密码错误'});
    }
}

//分页查询
module.exports.getArticle = async (req,res) => {

    let pageNum = parseInt(req.query.pageNum);
    let pageSize = parseInt(req.query.pageSize);


    //page 代表当前页数
    //pages 代表总页数
    //size 代表每页数据的数量
    //display 代表显示页码数量
    //exec() 向数据库发送查询请求
    let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display().find().populate("author").exec();
    // console.log(result);
    
    //响应请求
    res.send({
        code : 200,
        msg : '数据获取成功',
        data : result
    })
}



//显示文章 和 评论
module.exports.getDetail = async (req,res) => {
    //获取前台传入的id
    let id = req.query.id;

    //获取用户信息
    let result = await Article.findOne({_id : id}).populate('author');
    
    //获取评论
    let commentList = await Comment.find({ aid : req.query.id }).populate('uid');

    //创建对象  保存数据
    let data = {
        id : result._id,
        title : result.title,
        author : result.author.username,
        content : result.content,
        publishDate : result.publishDate
    }

    //响应请求
    res.sender('article',{ commentList , data})
}


//添加文章
module.exports.addComment = async (req,res) => {
    //创建对象  保存评论信息
    let newComment = {
        uid : req.body.uid,
        aid : req.body.aid,
        time : new Date().toLocaleString(),
        content : req.body.content
    }

    //数据库新建数据
    let result = await Comment.create(newComment);

    if(result){
        res.render(`/article.html?id=${result.aid}`);
    }
}