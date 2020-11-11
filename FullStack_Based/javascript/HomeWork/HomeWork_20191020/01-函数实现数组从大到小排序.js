//1.用函数实现任意数组从小到大的排序，不允许使用sort 

//分析:
//创建方法  将需要排序的数组当作参数 传递给方法中
//在方法中使用冒泡排序
//最后将排序后的方法返回
//调用方法 打印数组



//步骤:

//定义数组
var arr = [31,42,73,53,13,63,131];


//调用方法
console.log(getSortArr(arr));



//创建方法 传递数组参数
function getSortArr(arr){

    //冒泡排序
    for(var i = 0 ; i < arr.length-1 ; i++){
        for(var j = 0 ; j < arr.length-1-i ; j++){
            if(arr[j] > arr[j+1]){
                var num = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = num;
            }
        }
    }
    //返回排序后的数组
    return arr;
}