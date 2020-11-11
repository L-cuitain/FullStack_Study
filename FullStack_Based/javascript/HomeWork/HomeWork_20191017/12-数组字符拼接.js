//12.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五


//步骤:
//方法一:
//创建数组
var arr = ['张三','李四','王五']

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