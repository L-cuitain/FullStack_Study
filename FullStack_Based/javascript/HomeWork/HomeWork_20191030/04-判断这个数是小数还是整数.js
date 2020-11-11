//4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 

var a = 3.14;

//用parseInt转换
var newNum = parseInt(a);
//判断转换后 的数字与 原数字是否相等
if(a == newNum){
    //相等 为整数
    console.log(a+"为整数");
}else{
    //不相等  为小数
    console.log(a+"为小数");
}