// 需求: 使用for循环语句计算3+6+9+12+……+99的结果

//定义 变量 sum 初始值为0
var sum = 0;

//for 循环遍历 i 从 1-99
for(var i = 1 ; i < 100 ; i++){

    //判断 如果 i 余 3 等于0
    if(i % 3 == 0){
        //将 i 赋值 给 sum
        sum += i;
    }
}

//打印 sum
console.log(sum);