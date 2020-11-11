//2.求数组[5,19,23,6,14,8]中的最大值

//分析
//创建 变量max  找出最大值
//循环遍历数组  用三元运算符找出最大值


//步骤:
//声明变量 max
var max = 0;

//创建数组
var arr = [5,19,23,6,14,8];

//循环遍历数组元素
for(var i = 0 ; i < arr.length ; i++){

    max = max > arr[i] ? max : arr[i];
}

//打印max
console.log("数组元素最大值为: "+max);
