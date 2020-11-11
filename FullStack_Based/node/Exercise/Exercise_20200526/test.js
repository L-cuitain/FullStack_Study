//使用 mongoose这个包 连接数据库

//引入mongoose模块
const mongoose = require('mongoose');

//使用mongoose的包的connect方法来连接数据库
mongoose.connect('mongodb://localhost/my_database_1' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch((err) => {
    console.log(err);
});

//创建数据集合规则
//创建学生信息的约束
let userSchema = new mongoose.Schema({
    //字段:数据类型
    username : String,
    password : String,
    address : String,
    hobbies : Array
})

//应用规则
let User = new mongoose.model('user',userSchema);

//添加表数据
User.create({
    username : '比利王',
    password : '123',
    address : '滑稽',
    hobbies : ['搞大为']
})

//保存数据
user.save();


