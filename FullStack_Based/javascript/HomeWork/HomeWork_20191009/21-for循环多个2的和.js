// 需求: 用for循环求2+22+222+2222+22222的和

//定义空字符串 str 
var str = "";

//定义变量 sum 保存和
var sum = 0;

//循环遍历 1 - 5
for(var i = 1 ; i <= 5 ; i++){

    //每次 循环  添加 i 次 2
    str += "2";

    //打印 str
    console.log(str);
    
    //将 转换为 number 类型的 str 赋值给 sum
    sum += parseInt(str);
}

//打印sum
console.log(sum);