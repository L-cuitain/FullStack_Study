//引入mongoose包
const mongoose = require('mongoose');

//通过mongoose的connect属性创建数据库
mongoose.connect('mongodb://localhost/fullstack2019',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {console.log('数据库启动成功');})
  .catch((err) => {console.log(err);})


  //创建约束
  let studentSchema = new mongoose.Schema({
      //姓名
      name : {
          //字段的数据类型
          type : String,
          //必传
          required : [true,'姓名不能为空'],
          //最小2个字符
          minlength : [2,'姓名的长度不能小于2'],
          //最大6个字符
          maxlength : [6,'姓名的长度不能大于6'],
          //去除字符串两边空格
          trim : true,
      },
      //年龄
      age : {
        //字段的数据类型  
        type : Number,
        //必传
        required : [true,'年龄不能为空'],
        //最大年龄不能超过25岁
        max : [25,'年龄不能大于25']
      },
      //性别:
      sex : {
          //字段的数据类型
          type : String,
          //必传
          required : [true,'性别不能为空'],
          //枚举
          enum : {
              values : ['男','女'],
              message : '您的性别传入出错'
          }
      },
      //业务爱好
      hobbies : [String]
  })


  let scoreSchema = new mongoose.Schema({
      //姓名
      name : {
          //字段的数据类型
          type : String,
          //必传
          required : [true,'姓名不能为空'],
          //长度最少2个字符
          minlength : [2,'姓名长度不能少于2个字符'],
          //长度最大6个字符
          maxlength : [6,'姓名长度不能大于6个字符'],
          //去除字符串两边空格
          trim : true,
      },
      //数学成绩
      math : {
          //字段的数据类型
          type : Number,
          //必传
          required : [true,'成绩不能为空'],
          //数字不能低于0
          min : [0,'成绩不能低于0'],
          //数组不能多于100
          max : [100,'成绩不能多余100'],
      },
      //英语成绩
      english : {
        //字段的数据类型
        type : Number,
        //必传
        required : [true,'成绩不能为空'],
        //数字不能低于0
        min : [0,'成绩不能低于0'],
        //数组不能多于100
        max : [100,'成绩不能多余100'],
    },
      //语文成绩
      chinese : {
        //字段的数据类型
        type : Number,
        //必传
        required : [true,'成绩不能为空'],
        //数字不能低于0
        min : [0,'成绩不能低于0'],
        //数组不能多于100
        max : [100,'成绩不能多余100'],
    }
  })


  //应用约束
  let Student = mongoose.model('student',studentSchema);

  let Score = mongoose.model('score',scoreSchema);

  //添加Student文档
//   Student.create({
//       name : '杨文林',
//       age : 19,
//       sex : '男',
//       hobbies : ['draw','computer']
//   },{
//       name : '贾拉拉',
//       age : 18,
//       sex :'女',
//       hobbies : ['sing','draw','football'],
//   },{
//     name : '姚姚',
//     age : 24,
//     sex :'女',
//     hobbies : ['football','computer','running'],
//   },{
//     name : '王凯',
//     age : 25,
//     sex :'男',
//     hobbies : ['sing','computer'],
//   })
//   .then(data => {console.log(data);})
//   .catch(err => {
//         for(let key in err.errors){
//           console.log('错误: ' + err.errors[key].properties.message);
//     }
// })

  //添加Score文档
//   Score.create({
//       name : '杨文林',
//       math : 99,
//       english : 88,
//       chinese : 80
//   },{
//     name : '贾拉拉',
//     math : 88,
//     english : 79,
//     chinese : 90
//   },{
//     name : '姚姚',
//     math : 90,
//     english : 90,
//     chinese : 90
//   },{
//     name : '王凯',
//     math : 90,
//     english : 98,
//     chinese : 99
//   })
//   .then(data => {console.log(data);})
//   .catch(err => {
//     for(let key in err.errors){
//       console.log('错误: ' + err.errors[key].properties.message);
//     }
// })

//6.查询所有学生信息
// Student.find().then((data) => {console.log(data);});

//7.查询年龄大于18岁小于24岁的学生的信息
// Student.find({age : {$gt: 18 , $lt : 24}}).then(data => {console.log(data);});

//8.查询年龄19岁并且喜欢计算机的男生的信息
// Student.find({age : 19 , hobbies : {$in : ['computer']}}).then(data => {console.log(data);});

//9.查询班级中年龄最大的学生的信息
// Student.find().sort('-age').limit(1).then(data => {console.log(data);})

//10.查询年龄是18岁的学生的姓名
// Student.find({age : 18}).select('name').then(data => {console.log(data);});

//11.查询总人数(提示count)
// Student.find().count().then(data => {console.log('总人数为: '+data);});

//12.查询显示第二页的数据，每页显示2条
// Student.find().skip(2).limit(2).then(data => {console.log(data);});

//13.查询业余爱好里面包含sing的学生的信息
// Student.find({hobbies : {$in : ['sing']}}).then(data => {console.log(data);});

//14.对数学成绩降序输出
// Score.find().select('math').sort('-math').then(data => {console.log(data);});

//15.查询姓名是王凯的各科成绩
// Score.find({name : '王凯'}).select('math english chinese').then(data => {console.log(data);});

//16.将姓名是姚姚的学生的年龄更改为23
// Student.updateOne({name : '姚姚'},{
//     age : 23
// }).then(data => {console.log(data);});

//17.将所有学生的年龄更改为18
// Student.updateMany({},{
//     age : 18
// }).then(data => {console.log(data);});

//18.将王凯的数学成绩更新为100分
// Score.updateOne({name : '王凯'},{
//     math : 100
// }).then(data => {console.log(data);});

//19.删除年龄小于20的学生的信息
// Student.deleteMany({age : {$lt: 20}}).then(data => {console.log(data);});

//20.删除姓名是贾拉拉的这条数据
// Score.deleteMany({name : '贾拉拉'}).then(data => {console.log(data);});


