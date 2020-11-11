//2. 写一个函数，求任意数组的所有元素的和

//分析:
//创建方法  将数组传递到方法中 
//方法中进行遍历数组 并将数组元素 赋值给 一个变量
//最后把这个变量返回



//步骤:
//定义数组
var arr = [18,45,333,5,6,1,5];


//调用方法  
console.log("和为: "+getSum(arr));


//创建方法  传递 arr 参数  求出数组元素和  返回 一个和值
function getSum(arr){
    //定义变量 sum  计算数组和值
    var sum = 0;
    //遍历数组元素
    for(var i = 0 ; i < arr.length ; i++){
        //将 数组元素 赋值给 sum
        sum += arr[i];
    }
    //返回sum
    return sum;
}


