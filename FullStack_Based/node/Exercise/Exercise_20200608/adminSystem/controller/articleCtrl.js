//导入Article数据库
const Article = require('../model/article');

//导入分页查询模块
const mongooseSexPage = require('mongoose-sex-page');

const articleRouter = require('../routes/articleRouter');


//导出
module.exports.showArticle = (req, res) => {
    // res.render('article',{
    //     username : req.session.username
    // });
    //判断如果session中是否存在用户名
    if (!req.session.username) {
        //不存在则跳转到登录页
        res.redirect('/');
    } else {
        res.render('article');
    }
}

module.exports.editArticle = (req, res) => {
    if (!req.session.username) {
        res.redirect('/');
    } else {
        res.render('article-edit');
    }
}


//分页查询
module.exports.findArticleByPage = async (req, res) => {
    //获取前台传递的 pageNum pageSize
    let {
        pageNum,
        pageSize
    } = req.query;

    //通过分页查询模块 查询数据库数据
    let articles = await mongooseSexPage(Article)
        .page(pageNum)
        .size(pageSize)
        .display(5)
        .populate('author')
        .find()
        .exec();

    //响应给前端
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: articles
    })
}

//删除
module.exports.delArticle = async (req, res) => {
    //获取前台传递的id
    let {
        id
    } = req.query;

    //查询数据库
    let result = await Article.findOneAndDelete({
        _id: id
    });

    //判断id
    if (result._id) {
        //发送状态码
        res.status(200).send({
            code: 200,
            msg: '数据删除成功',
        })
    }
}

//显示文章添加页面
module.exports.showAddArticle = (req, res) => {
    if (!req.session.username) {
        res.redirect('/');
    } else {
        res.render('article-add');
    }
}


//添加
module.exports.addArticle = async (req, res) => {
    //获取form表单传递的参数
    console.log(req.file);

    //创建article对象
    let article = {
        cover: `upload/${req.file.filename}`,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        publishDate: req.body.publishDate
    };

    //调用数据库创建表
    let result = await Article.create(article);
    //发送响应
    res.status(200).send({
        code: 200,
        msg: 'article添加成功',
        data: result
    })
}

// 回显
module.exports.showArt = async (req, res) => {
    //接受前端传入的id
    let {
        id
    } = req.query;

    //获取数据库中的数据
    let article = await Article.findOne({
        _id: id
    });

    //将article传入前台
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: article
    })
}

//修改
module.exports.modifyArticle = async (req, res) => {
    console.log(req.body);

    //创建对象  存储前端修改对象的属性值
    let articleInfo = {
        title: req.body.title,
        author: req.body.author,
        publishDate: req.body.publishDate,
        content: req.body.content
    };

    //判断是否存在file文件
    if(req.file){
        articleInfo.cover = `http://localhost:3000/upload/${req.file.filename}`
    }
    
    //修改数据库对象
    let result = await Article.findOneAndUpdate({_id : req.body.id},articleInfo);
    
    //发送响应
    res.status(200).send({
        code : 200,
        msg : '数据修改成功',
        data : result
    })
}