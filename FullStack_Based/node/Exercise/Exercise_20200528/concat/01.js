//引入mongoose包
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/db_blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch((err) => {
        console.log(err);
    })


//创建约束


//应用约束 
const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: [true, '姓名不能为空']
    },
}));

//创建User文档
// User.create({
//     name: '滑稽'
// })


const Post = mongoose.model('Post', new mongoose.Schema({
    //文章标题
    title: {
        type: String,
    },
    //文章作者
    author: {
        //用户id
        type: mongoose.Schema.Types.ObjectId,
        // author的id引用自 User集合
        ref: 'User'
    }
}));

//创建Post文档
Post.create({
    titile : '1234556',
    author : '5ecf82144f4f361f80da1e14'
})


//多表查询
Post.find().populate('author').then((result) => {console.log(result);})


// const user = new mongoose.model('User',mongoose.Schema({
//     //用户名
//     name : {
//         type : String,
//         required : [true,'用户名不能为空'],
//         //长度最少2个字符
//         minlength : [2,'姓名长度不能少于2个字符'],
//         //长度最大6个字符
//         maxlength : [6,'姓名长度不能大于6个字符'],
//     },

//     //密码
//     password : {
//         type : String,
//         required : [true,'密码不能为空']
//     },

//     //年龄
//     age : {
//         type : Number,
//         required : [true,'年龄不能为空'],
//         min : [0,'年龄不能低于0'],
//         max : [100,'年龄不能多余100'],
//     },
//     //邮箱
//     email : {
//         type : String,
//         required : [true,'邮箱不能为空'],
//     },
//     //爱好
//     hobbies : {
//         type : Array,
//         enum: {
//             values : ['足球','篮球','橄榄球','敲代码','抽烟','喝酒','烫头'],
//         }
//     }
// }))
