//70.计算下列表达式的结果：，并写出详细步骤
 
var a = 10;         // a = 10
 var b = 2;         // b = 2
 a %=b;             // a %= b  --> a = a%b --> a = 10 % 2 --> a = 0 
console.log(a);     //0
console.log(b++);   //b++    先打印 b 为 2   再++  b = 3  
