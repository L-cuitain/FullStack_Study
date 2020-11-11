//fs模块
//readFile('./文件名','编码格式',callback) 读取文件内容
//导入模块
const fs = require('fs');

fs.readFile('./read.txt','utf8',function(err,data){
    //err表示错误对象  没有错误值为null
    console.log(err);
    //data表示数据对象 没有错误值为读取文件的内容
    console.log(data);
})

