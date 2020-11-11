//1. 1-100之间所有数的总和 与 平均值(while实现)

//定义while循环初始表达式 i  初始值为1
var i = 1;

////定义变量 sum 求总和 初始值为0
var sum = 0;

//创建 while循环  当 i 满足 小于等于 100时
while(i <= 100){

    //将 i 赋值给 sum
    sum += i;
    ////步进表达式 i++
    i++;

}
//求平均值 avg
var avg = sum / 100;

//打印
console.log("总和为: "+sum);
console.log("平均值为: "+avg);