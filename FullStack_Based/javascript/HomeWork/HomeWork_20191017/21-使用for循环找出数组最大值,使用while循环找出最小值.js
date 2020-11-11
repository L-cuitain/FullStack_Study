//21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?


//分析:
//定义最大 最小值   
//运用for循环遍历数组元素 
//三元运算符找到最大值

//运用while循环遍历数组元素
//三元运算符找到最小值



//步骤:
var arr = [10, 5, 34, 59, 98];
//定义最大值 初始值为数组的第一个元素
var max = arr[0];
//定义最小值 初始值为数组的第二个元素
var min = arr[0];

//最大值
for(var i = 0 ; i < arr.length ; i++){
    //运用三元运算符找出最大值
    max = max > arr[i] ? max : arr[i];
}

//最小值
//初始表达式
var i = 0;

//while循环遍历数组  范围在数组的长度内
while(i < arr.length){
    //运用三元运算符找出最小值
    min = min < arr[i] ? min : arr[i];
    //步进表达式
    i++;
}

//打印
console.log("最大值为: "+max);
console.log("最小值为: "+min);
