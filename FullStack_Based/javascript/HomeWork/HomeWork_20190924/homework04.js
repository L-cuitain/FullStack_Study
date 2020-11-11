//4.声明两个变量,第一个变量为num1,值为123,第二个变量为num2,值为456,实现两个变量值的交换,即让num1为456,让num2为123;
//要求，用2种方式实现

var num1 = 123;
var num2 = 456;

//第一种
var a = 0;
a = num1;
num1 = num2;
num2 = a;

console.log("num1为: "+num1);
console.log("num2为: "+num2);



var num1 = 123;
var num2 = 456;

//第二种
var arr1 = [num1,num2];
arr1[2] = num1;
arr1[0] = arr1[1];
arr1[1] = arr1[2];

console.log("num1为: "+arr1[0]);
console.log("num2为: "+arr1[1]);

