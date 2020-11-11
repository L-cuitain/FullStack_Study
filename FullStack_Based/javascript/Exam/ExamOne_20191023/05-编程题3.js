//3、定义一个四位数，按逆序打印出各位数字。例如原数字为5678，应输出8765。


//步骤:

//定义 变量 num
var num = "5678";
//定义 空字符串
var str = "";
//倒序遍历  num 变量  获取每个字符
for(var i = num.length-1 ; i > 0 ; i--){
    //将字符拼装到 str 字符串中
    str += num[i];
}
//打印新字符串
console.log(parseInt(str));
