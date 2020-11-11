//15. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]

//分析:
//创建变量 max 初始值为数组第一个元素值
//创建变量 min 初始值为数组第一个元素值

//循环遍历数组元素 
//用三元判断 最大  最小值
//打印




//步骤:
var arr =  [11,32,55,47,79,23]

//创建变量 max  用来统计最大值
var max = arr[0];
//创建变量 min  用来统计最小值
var min = arr[0];

//遍历数组元素
for(var i = 0 ; i < arr.length ; i++){
    //三元判断最大最小值
    max = max > arr[i] ? max : arr[i];
    min = min < arr[i] ? min : arr[i];
}

//打印
console.log("最大值为: "+max);
console.log("最小值为: "+min);