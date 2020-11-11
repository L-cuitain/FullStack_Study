//2.打印闪电

//分析:
//打印一个高为三的正序三角形
//中间打印7个*号
//打印一个高为三的倒序三角形



//循环遍历 i 从 1-4  
for(var i = 1 ; i < 4 ; i++){

    //定义空字符串 str
    var str = "";
    //内循环遍历 j 范围在 1-i
    for(var j = 1 ; j <= i ; j++){
        //每遍历一次输出一个*号
        str += "*"
    }
    //打印str
    console.log(str);
}

console.log("*******");

//倒序循环遍历 i 从 3-1  
for(var i = 3 ; i > 0 ; i--){

    //定义字符串 str
    var str = " ";
    //内循环遍历 j 范围在 1-i
    for(var j = 1 ; j <= i ; j++){
        //每遍历一次输出一个*号
        str += "*";
    }
    //打印str
    console.log(str);
}



