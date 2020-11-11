//9.已知字符串："this is a test of java"
// (1) 取出子字符串"test"
// (2) 将'java'替换为'JAVASE'


//定义字符串
var str = "this is a test of java";

//找出test的索引
var count = str.indexOf("test");


//定义字符串变量  取出子字符串 test
var sonStr = str.substr(count,4);

console.log(sonStr);


//将 str 字符串内容替换
str = str.replace("java","JAVA");

console.log(str);


