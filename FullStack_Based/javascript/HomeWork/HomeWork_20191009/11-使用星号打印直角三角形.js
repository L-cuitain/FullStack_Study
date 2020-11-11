
//创建 for 循环 外循环  遍历 0 - 5
for(var i = 0 ; i < 5 ; i++){
    
    //创建空字符串
    var str = "";
    //创建 for 循环  内循环 遍历 0 - i
    for(var j = 0 ; j < i ; j++){
        //字符串str 添加 * 号
        str += "*";
    }
    //打印str
    console.log(str);
}