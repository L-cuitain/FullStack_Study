//14.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
// 通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]

//分析:
//创建三个数组   
//遍历一维数组  将元素分组存放到三个新数组中
//再调用concat()方法 将三个新数组 存入到 二维数组中去





//步骤:
//定义一维数组
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

//定义一个空的二维数组
var newarr = [];

//定义三个新数组
var arr1 = [];
var arr2 = [];
var arr3 = [];


//循环遍历一维数组
for(var i = 0 ; i < arr.length ; i++){

    //判断 数组 的索引
    if(i < 6){
    
        arr1[arr1.length] = arr[i];
    }else if(i >= 6 && i < 12){
    
        arr2[arr2.length] = arr[i];
    }else if(i >= 12 && i < 18){
    
        arr3[arr3.length] = arr[i];
    }  
}

//调用concat()方法添加到二维数组中
var newarr = [].concat([arr1],[arr2],[arr3]);

//打印
console.log(newarr);


