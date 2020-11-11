//引入mongoose模块
const mongoose = require('mongoose');

//创建User表数据

//创建并应用约束
const User = new mongoose.model('User',mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : String,
    },
    email : {
        type : String
    },
    //状态
    status : {
        type : Boolean,
        required : true
    },
    //角色
    role : {
        type : String,
        required : true
    }
}))


//导出
module.exports = User;