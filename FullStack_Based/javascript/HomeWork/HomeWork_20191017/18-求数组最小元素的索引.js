//18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引，如果这样的元素个数大于1，则返回索引最小的数的索引


//分析:
//先求出数组的最小值
//再找出最小值的个数
//如果最小值个数大于1  就跳出循环
//如果最小值个数小于1  将打印索引





//步骤:
//1.定义数组
var arr = [1,2,4,5,10,100,2,-22];
//定义最小值 初始值为数组第一个元素
var min = arr[0];

//遍历数组元素 求出最小值
for(var i = 0 ; i < arr.length ; i++){
    //求出最小值
    min = min < arr[i] ? min : arr[i];

}


//定义计数器 记录数组最小元素的个数
var count = 0;
//定义最小索引
var indexMin = arr.length;

//遍历数组元素  判断最小元素有几个
for(var i = 0 ; i < arr.length ; i++){
    //如果数组元素与最小值相等
    if(arr[i] == min){
        //计数器自增
        count++;

        //判断count数是否大于1
        if(count > 1){
            //大于1终止
            break;
        }
        //将 i 的值赋值给 indexMin
        indexMin = i;

        
    }
}

//打印
console.log(indexMin);
