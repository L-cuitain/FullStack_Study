//创建数据库
//引入mongoose包
const mongoose = require('mongoose');

//使用mongoose的connect方法连接数据库
mongoose.connect('mongodb://localhost/quanzhan12',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//数据库连接
.then(() => {
    console.log("数据库连接成功");
})
.catch((err) => {
    console.log(err);
})

//创建集合class
//创建约束
let classSchema = new mongoose.Schema({
    //字段: 数据类型
    //性名: 字符串类型
    name : String,
    //年龄: 数字类型
    age : String,
    //性别: 数字类型
    sex : Number,
    //业务爱好: 数组类型
    hobby : Array,
})

let scoreSchema = new mongoose.Schema({
    //姓名: 字符串类型
    name : String,
    //数学成绩: 数字类型
    match : Number,
    //英语成绩: 数字类型
    english : Number,
    //语文成绩: 数学类型
    chinese : Number
})

let teacherSchema = new mongoose.Schema({
    //姓名: 字符串类型
    name : String,
    //性别: 数字类型
    sex : Number,
    //年龄: 数字类型
    age : Number,
    //薪资: 数学类型
    pay : Number
})


//应用规则
let Class = new mongoose.model('Class',classSchema);

let Score = new mongoose.model('Score',scoreSchema);

let Teacher = new mongoose.model('Teacher',teacherSchema);

//添加表
// Class.create({
//     name : '张三',
//     age : 22,
//     sex : 0,
//     hobby : ["draw","computer"]
// },{
//     name : 'jialala',
//     age : 18,
//     sex : 1,
//     hobby : ["sing","draw","football"]   
// },{
//     name : 'yaoyao',
//     age : 24,
//     sex : 1,
//     hobby : ["football","computer","running"]  
// },{
//     name : 'yangwenlin',
//     age : 19,
//     sex : 0,
//     hobby : ["sing","computer"]  
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


// //查询Class的数据
// Class.find()
//     .then(data => {data.find((item,index) => {
//         console.log(`第${index}条数据`);
//         console.log(item.name);
//         console.log(item.age);
//         console.log(item.sex);
//         console.log(item.hobby);
//         console.log(`第${index}条数据结束`);
//         console.log();
//     })})
//     .catch(err => console.log(err));


//添加score表
// Score.create({
//     name : 'zhangsan',
//     match : 85,
//     english : 90,
//     chinese : 82
// },{
//     name : 'jialala',
//     match : 84,
//     english : 95,
//     chinese : 81
// },{
//     name : 'yaoyao',
//     match : 82,
//     english : 95,
//     chinese : 81
// },{
//     name : 'yangwenlin',
//     match : 82,
//     english : 95,
//     chinese : 81
// })

//查询Score的数据
// Score.find()
//     .then(data => {data.find((item,index) => {
//         console.log(`第${index}条数据`);
//         console.log("姓名: "+item.name);
//         console.log("数学成绩为:"+item.match);
//         console.log("英语成绩为:"+item.english);
//         console.log("语文成绩为:"+item.chinese);
//         console.log(`第${index}条数据结束`);
//         console.log();
//     })})
//     .catch(err => console.log(err));


//添加Teacher表
// Teacher.create({
//     name : '张三',
//     sex : 0,
//     age : 18,
//     pay : 2000
// },{
//     name : 'jialala',
//     sex : 1,
//     age : 20,
//     pay : 5000
// },{
//     name : 'yaoyao',
//     sex : 0,
//     age : 25,
//     pay : 10000 
// },{
//     name : 'yangwenlin',
//     sex : 1,
//     age : 30,
//     pay : 15000 
// })

// 查询Teacher的数据
Teacher.find()
    .then(data => {data.find((item,index) => {
        console.log(`第${index}条数据`);
        console.log("姓名: "+item.name);
        console.log("性别: "+item.sex);
        console.log("年龄: "+item.age);
        console.log("薪资: "+item.pay);
        console.log(`第${index}条数据结束`);
        console.log();
    })})
    .catch(err => console.log(err));