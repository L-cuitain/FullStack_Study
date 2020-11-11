// 需求: 声明一个三位数，按逆序打印出各位数字。例如原数字为312，应输出213。


//定义一个变量 
var num = "312";

var numm = "" ;
//倒序遍历  变量num  
for(var i = num.length-1 ; i >= 0 ; i--){
    //赋值给numm
    numm += num[i];
}
//打印numm
console.log(numm);