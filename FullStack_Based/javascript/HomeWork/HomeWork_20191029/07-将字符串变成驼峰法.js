//7.将字符串变成驼峰法var str = "get-element-by-id"， 结果是 "getElementById"

//定义字符串
var str = "get-element-by-id";
//定义数组  储存切割字符串后的多个字符串
var arr = str.split("-");

//循环遍历数组元素  将数组元素的打头字母大写
for(var i = 1 ; i < arr.length ; i++){

    var newStr = arr[i];

    arr[i] = newStr.replace(newStr[0],newStr[0].toUpperCase())

   
}

//重新将字符串 str 赋值
str = arr[0];

//遍历数组元素 将数组元素添加到字符串
for(var i = 1 ; i < arr.length ; i++){
    
    str += arr[i]
}

//打印字符串
console.log(str);






