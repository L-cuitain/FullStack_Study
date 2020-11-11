//fs模块
//mkdir('文件夹路径',{tecursive: true},callback) 创建文件夹
//导入模块
const fs = require('fs');

//创建文件夹
fs.mkdir('./new',{tecursice: true},function(err){
    //判断err是否为空
    if(err != null){
        console.log('文件夹创建失败');
        return;
    }

    //成功打印
    console.log('文件夹创建成功');
});