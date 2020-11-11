//12.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];
//遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]

//分析:
//逆序遍历数组arrA中元素  将值存入arrB中
//循环遍历arrB数组  将元素输出




//步骤:
//定义数组arrA 和 arrB
var arrA = ["a","b","c","d","e"];

var arrB = [];

//逆序遍历arrA中所有元素
for(var i = arrA.length - 1 ; i >= 0 ; i--){
    arrB[arrB.length] = arrA[i];
}

//按arrB下标增长顺序在控制台数除arrB所有元素
for(var i = 0 ; i < arrB.length ; i++){
    console.log(arrB[i]);
}