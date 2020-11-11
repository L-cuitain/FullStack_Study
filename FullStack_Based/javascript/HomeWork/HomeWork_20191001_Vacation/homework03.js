//3.	读程序，写结果：

//(1)
var v1 = "abc"  //v1 = "abc"
var v2 = v1;    //v1 = "abc"   v2 = "abc"
var v2 = "123"+v2   // v1 = "abc"   v2 = "123abc"


//(2)
var a = {name:"张三",age:22};
var b = a;  //b = {name:"张三",age:22}
//b.age = 22;

b.age = 23;
//b.age = 23;
