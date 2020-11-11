//fs模块
//writeFile('文件路径',要写入的内容,callback)  写入文件
//导入模块
const fs = require('fs');
//编写内容
let content = '这个故事，便是从“青云门”开始的。';

//写入文件中
fs.writeFile('./get.txt',content,function(err,data){
    if(err != null){
        console.log(111);
        return;
    }

    console.log('成功');
});

