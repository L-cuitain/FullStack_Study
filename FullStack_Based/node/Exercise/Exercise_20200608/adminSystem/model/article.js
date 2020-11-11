//引入mongoose模块
const mongoose = require('mongoose');

//创建Article数据

 //应用约束
 const Article = new mongoose.model('Article',mongoose.Schema({
     //标题
     title : {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 1
     },
     //作者
     author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
     },
     //发布时间
     publishDate : {
         type : Date,
         default : Date.now
     },
     //封面图片
     cover : {
        type : String,
        default : null
     },
     //内容
     content : {
        type : String,
     }
 }))


//  Article.create({
//     title : 'b站未来有可能会倒闭,但绝不会变质1',
//     author: "5ed8c129c4205446cc0b62c3",
//     content: "这是道德的沦丧还是人性的泯灭",
//     cover : './upload/default.png'
//  },
//  {
//    title : 'b站未来有可能会倒闭,但绝不会变质2',
//    author: "5ed8c129c4205446cc0b62c3",
//    content: "这是道德的沦丧还是人性的泯灭",
//    cover : './upload/default.png'
// },
// {
//    title : 'b站未来有可能会倒闭,但绝不会变质3',
//    author: "5ed8c129c4205446cc0b62c3",
//    content: "这是道德的沦丧还是人性的泯灭",
//    cover : './upload/default.png'
// },
// {
//    title : 'b站未来有可能会倒闭,但绝不会变质4',
//    author: "5ed8c129c4205446cc0b62c3",
//    content: "这是道德的沦丧还是人性的泯灭",
//    cover : './upload/default.png'
// },
// {
//    title : 'b站未来有可能会倒闭,但绝不会变质5',
//    author: "5ed8c129c4205446cc0b62c3",
//    content: "这是道德的沦丧还是人性的泯灭",
//    cover : './upload/default.png'
// },
// {
//    title : 'b站未来有可能会倒闭,但绝不会变质6',
//    author: "5ed8c129c4205446cc0b62c3",
//    content: "这是道德的沦丧还是人性的泯灭",
//    cover : './upload/default.png'
// })

 module.exports = Article;