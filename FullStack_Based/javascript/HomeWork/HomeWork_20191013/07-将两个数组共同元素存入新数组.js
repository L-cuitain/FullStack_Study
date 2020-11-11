//17. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
// var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组


//分析:
//循环遍历 arr1  并在循环内创建内循环 遍历 arr2
//创建新数组
//判断如果 arr1数组的元素  与 arr2数组的元素全等
//将这个元素添加到arr3数组中



//步骤:
//定义 arr1数组
var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//定义 arr2数组
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
//定义 arr3数组
var arr3 = [];

//循环遍历 arr1元素
for(var i = 0 ; i < arr1.length ; i++){
    
    //内循环遍历 arr2元素
    for(var j = 0 ; j < arr2.length ; j++){
        //判断两个数组中元素是否相等
        if(arr1[i] === arr2[j]){
            //如果相等  将值添加到arr3中
            arr3[arr3.length] = arr1[i];
        }
    }
}


console.log(arr3);