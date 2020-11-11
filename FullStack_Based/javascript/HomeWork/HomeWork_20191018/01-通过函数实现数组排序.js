//1. 写一个函数，实现对任意数组的排序

//分析:
//创建方法  将定义的数组传入方法中
//调用 数组的 sort() 方法  对数组排序
//返回 排序后 的数组
//调用方法  打印数组



//步骤:
//定义数组 arr
var arr = [18, 45, 0, 128, 32,532];


//调用方法  打印数组
console.log(sortArr(arr));


//创建方法 传递数组  实现对数组的排序
function sortArr(arr){
    //调用数组的sort()方法  对数组排序
    arr.sort( function (a , b){return a - b})
    //返回数组 arr
    return arr;
}



