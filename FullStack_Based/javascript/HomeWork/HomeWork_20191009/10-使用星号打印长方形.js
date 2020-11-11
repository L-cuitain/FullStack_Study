
//创建 for 循环 外循环遍历 i  从 0 - 5
for(var i = 0 ; i < 5 ; i++){

    //创建空字符串  保存 * 号
    var str = "";
    //创建 内循环 j 从 0 - 5
    for(var j = 0 ; j < 5 ; j++){
        //字符串 添加 * 号
        str += "*";
    }
    //打印*号
    console.log(str);
}