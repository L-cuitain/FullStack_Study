//3.将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割

//分析:
//方法一:
//join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，括号内是连接符。
//方法二:
//创建字符串 将数组元素转换为字符串
//循环遍历数组  为每个元素后面都添加 |


//步骤:
//方法一:
//创建数组
var arr = ['red', 'green', 'blue', 'pink'];

//用.join()方法 打印格式
console.log(arr.join("|"));



//方法二:

//创建字符串
var str = "";

//循环遍历数组元素
for(var i = 0 ; i < arr.length ; i++){
    //如果 i 不为 最后一个元素的索引
    if(i != arr.length-1){
        //将加 | 连接符的数组元素添加给str
        str += arr[i]+"|";
    }else{
        //将 数组元素添加给str
        str += arr[i];
    }
}

console.log(str);