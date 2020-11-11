//导入模块
const fs = require('fs');
const path = require('path');

//获取当前路径
console.log(__dirname);

//获取根目录下的文件
let finalPath = path.join(__dirname,'read.txt');

//读取文件
fs.readFile(finalPath,'utf8',function(err,data){

    // console.log(err);

    console.log(data);
    
});