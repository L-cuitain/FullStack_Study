var myVarVariable = 666
const myConstVariable = 2;
console.log(myVarVariable); // 666
console.log(myConstVariable); // 2
myVarVariable = 888;
myConstVariable = 5;  
console.log(myVarVariable); // 888
console.log(myConstVariable); // 报错 : 常量不能改值
