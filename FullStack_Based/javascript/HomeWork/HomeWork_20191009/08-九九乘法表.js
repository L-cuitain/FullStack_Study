// 需求: 利用JavaScript完成如下九九乘法表



//创建 双层for循环  外层 遍历 1-10
for(var i = 1 ; i < 10 ; i++){

    //创建空字符串 str
    var str = "";
    // 内层 循环 遍历 1-i
    for(var j = 1 ; j <= i ; j++){
        //str字符串 添加 字符串格式
        str += i + " * " + j + " = " + i*j +' ';
        
    }
    //打印str字符串
    console.log(str);
}