//18.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]


//分析:
//定义 最大值  和 最小值 
//定义 最大值索引  和 最小值索引

//循环遍历数组元素  获取最大值 和最大值索引
//再获取最小值和最小值索引

//通过创建一个中间值 将数组中最大的与第一个元素交换，最小的与最后一个元素交换





//步骤:
//定义数组 arr
var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]

//定义 最大值  max   
var max = arr[0];
//定义 最小值  min
var min = arr[0];

//最大值索引
var MaxIndex = 0;

//最小值索引
var MinIndex = 0;


//循环遍历数组
for(var i = 0 ; i < arr.length ; i++){

    //获取数组中最大值  和 数组中最小值
    max = max > arr[i] ? max : arr[i];
    min = min < arr[i] ? min : arr[i];

    //判断 找出最大值 的索引
    if(arr[i] == max){

        //获取最大值索引
        MaxIndex = i;
           
    }
    //找出 最小值 的索引
    if(arr[i] == min){

        //获取最小值索引
        MinIndex = i;
           
    }
}

//定义中间变量
var num  = 0;

//利用中间值将最大值和第一个值互换
num = arr[0];
arr[0] = arr[MaxIndex];
arr[MaxIndex] = num;

//利用中间值将最小值和最后一个值互换
num = arr[arr.length-1];
arr[arr.length-1] = arr[MinIndex];
arr[MinIndex] = num;


//打印数组
console.log(arr);


