//引入 path 模块
const path = require('path');
//引入 fs 模块
const fs = require('fs');

//异步读取文件
let param = fs.readFile('./data/01.txt','utf8',(err,data) => {
    console.log(data);
});

//同步方法
let result = fs.readFileSync('./data/02.txt','utf8',(err,data) => {
    console.log(data); 
});


