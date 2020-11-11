//将开启数据库单独提出  存放在dbContent

//引入mongoose模块
const mongoose = require('mongoose');

//使用mongoose的connect方法 创建数据库
mongoose.connect('mongodb://localhost/zm_dbuser',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => {console.log('数据库创建成功');})
 .catch(err => {console.log(err);})
