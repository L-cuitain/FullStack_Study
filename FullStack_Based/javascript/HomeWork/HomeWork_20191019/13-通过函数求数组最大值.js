//13.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]

//分析:
//创建方法 将数组传入方法中
//定义变量 max  遍历数组元素
//运用三元运算符 找出最大值
//返回最大值
//调用方法  打印最大值



//步骤:
//定义数组
var arr = [18, 45, 0, 58, 32,59];

//调用方法
console.log("最大值为: "+getMaxNum(arr));


//创建方法
function getMaxNum(arr){

    //创建变量 max  求出数组最大值
    var max = arr[0];
    //循环遍历数组元素
    for(var i = 0 ; i < arr.length ; i++){
        //运用三元运算符 得到最大值
        max = max > arr[i] ? max : arr[i];
    }

    //返回最大值
    return max;

}



