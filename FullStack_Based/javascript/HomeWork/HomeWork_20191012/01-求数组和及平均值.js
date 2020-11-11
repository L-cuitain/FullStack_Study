//1.求数组 [5,19,23,6,14,8] 里面所有元素的和以及平均值。


//分析
//创建变量sum 统计 数组元素的和
//循环遍历数组  将数组元素赋值给sum
//创建平均值 avg  求平均值: sum 除 数组长度


//步骤:
//声明变量sum 求数组元素的和
var sum = 0;

//创建数组
var arr = [5,19,23,6,14,8];

//循环遍历数组
for(var i = 0 ; i < arr.length ; i++){
    sum += arr[i];
}

//声明变量 avg 求平均值
var avg = sum / arr.length;

//打印sum  和  avg
console.log("和为: "+sum);
console.log("平均值为: "+avg);