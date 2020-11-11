//引入mongoose模块
const mongoose = require('mongoose');

//使用mongoose的connect方法创建数据库
mongoose.connect('mongodb://localhost/manager_system',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {console.log('数据库开启成功');})
.catch(err => {console.log(err);});


//应用约束
const User = new mongoose.model('User',mongoose.Schema({
    //用户名
    name : {
        type : String,
        required : [true,''],
    },
    //密码
    password : {
        type : String,
        required : [true,'']
    },
    //年龄
    age : {
        type : Number,
        required : [true,'']
    },
    //邮箱
    email : {
        type : String,
        required : [true,'']
    },
    //爱好
    hobbies : {
        type : [String],
        enum : ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
    }
}))


//导出
module.exports = {
    add : function(manager,fn){
        User.create(manager)
            .then(data => {fn(data)})
            .catch(err => {console.log(err);})
    },

    getPage : function(pageNum,pageSize,fn){
        User.find().skip((pageNum-1) * pageSize).limit(pageSize).then((data) =>{
            //获取数据库的数据条数
            User.countDocuments().then(count => {
                //调用函数
                fn({
                    pageNum : pageNum,
                    pageSize : pageSize,
                    pageTotal : count,
                    obj : data,
                })
            })
        })
    }
}