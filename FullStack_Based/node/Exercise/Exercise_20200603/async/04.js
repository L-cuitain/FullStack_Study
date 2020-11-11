//依次读取 txt文件
const fs = require('fs');

//读取文件
//回调嵌套
fs.readFile('./data/01.txt','utf8',(err,data) => {
    console.log(data);
    fs.readFile('./data/02.txt','utf8',(err,data) => {
        console.log(data);
        //...
    });
});