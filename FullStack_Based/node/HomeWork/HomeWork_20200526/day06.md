## 简答题

1. 创建数据库quanzhan12
```js
//创建数据库
//引入mongoose包
const mongoose = require('mongoose');

//使用mongoose的connect方法连接数据库
mongoose.connect('mongodb://localhost/quanzhan12',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch(() => {
    console.log("数据库连接失败");
})
```
============================================class集合==============================
2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
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

//应用规则
let Class = new mongoose.model('Class',classSchema);
```
============================================增加操作===============================
3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
//添加表
Class.create({
    name : '张三',
    age : 22,
    sex : 0,
    hobby : ["draw","computer"]
},{
    name : 'jialala',
    age : 18,
    sex : 1,
    hobby : ["sing","draw","football"]   
},{
    name : 'yaoyao',
    age : 24,
    sex : 1,
    hobby : ["football","computer","running"]  
},{
    name : 'yangwenlin',
    age : 19,
    sex : 0,
    hobby : ["sing","computer"]  
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
```
============================================查询操作===============================
4. 查询所有人的信息
```js
Class.find()
    .then(data => {data.find((item,index) => {
        console.log(`第${index}条数据`);
        console.log(item.name);
        console.log(item.age);
        console.log(item.sex);
        console.log(item.hobby);
        console.log(`第${index}条数据结束`);
        console.log();
    })})
    .catch(err => console.log(err));
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
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

let Score = new mongoose.model('Score',scoreSchema);
```
============================================增加操作===============================
6. 在class的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
//添加score表
Score.create({
    name : 'zhangsan',
    match : 85,
    english : 90,
    chinese : 82
},{
    name : 'jialala',
    match : 84,
    english : 95,
    chinese : 81
},{
    name : 'yaoyao',
    match : 82,
    english : 95,
    chinese : 81
},{
    name : 'yangwenlin',
    match : 82,
    english : 95,
    chinese : 81
})
```
============================================查询操作===============================
7. 查询所有成绩
```js
//查询Score的数据
Score.find()
    .then(data => {data.find((item,index) => {
        console.log(`第${index}条数据`);
        console.log("姓名: "+item.name);
        console.log("数学成绩为:"+item.match);
        console.log("英语成绩为:"+item.english);
        console.log("语文成绩为:"+item.chinese);
        console.log(`第${index}条数据结束`);
        console.log();
    })})
    .catch(err => console.log(err));
```

============================================老师集合==============================
8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
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

let Teacher = new mongoose.model('Teacher',teacherSchema);
```
============================================增加操作===============================
9. 在class的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
//添加Teacher表
Teacher.create({
    name : '张三',
    sex : 0,
    age : 18,
    pay : 2000
},{
    name : 'jialala',
    sex : 1,
    age : 20,
    pay : 5000
},{
    name : 'yaoyao',
    sex : 0,
    age : 25,
    pay : 10000 
},{
    name : 'yangwenlin',
    sex : 1,
    age : 30,
    pay : 15000 
})
```
============================================查询操作===============================
10. 查询所有老师的信息
```js
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
```

