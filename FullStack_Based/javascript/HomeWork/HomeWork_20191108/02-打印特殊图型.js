//2、在控制台实现下列图形:

//步骤:

//创建循环嵌套  先倒序遍历 5 到 1  确定行数
for(var i = 5 ; i >= 1 ; i--){
    //定义字符串  保存样式
    var str = "";
    //内循环 对每行定义形状
    for(var j = 1 ; j <= i ; j++){
        str += i;
        
    }
    //打印形状
    console.log(str);  
}


//创建循环嵌套  先正序遍历 2 到 5  确定行数为4
for(var i = 2 ; i <= 5 ; i++){
    //定义字符串  保存样式
    var str = "";
    //内循环 对每行定义形状
    for(var j = 1 ; j <= i ; j++){
        str += i;
    }
    //打印形状
    console.log(str);
    
}