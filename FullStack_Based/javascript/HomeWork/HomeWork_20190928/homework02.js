//2.求任意三个数字的最大值和最小值
var num1 = 10;
var num2 = 20;
var num3 = 30;

var max = (num1>num2)?num1:num2;
    max = (max>num3)?max:num3;

var min = (num1<num2)?num1:num2;
    min = (min<num3)?min:num3;    

console.log("这三个数的最大值为:"+max);    
console.log("这三个数的最小值为:"+min);    
