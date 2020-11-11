//3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数

//分析:
//创建方法 将数组传入方法  在方法中定义计数器
//遍历数组  每有为3的元素  计数器自增
//将计数器返回
//打印



//步骤:
//定义数组
var arr = [3,4,3,5,7,9];


//调用方法 获取计数器值
console.log("数组中3的次数为: "+getCount(arr));


//创建方法  传递数组  在方法中遍历数组元素  将3的次数返回
function getCount(arr){

    //创建计数器 count
    var count = 0;

    //遍历数组元素
    for(var i = 0 ; i < arr.length ; i++){

        //判断数组元素中是否有 3 这个元素
        if(arr[i] == 3){
            count++;
        }
    }

    return count;
}



