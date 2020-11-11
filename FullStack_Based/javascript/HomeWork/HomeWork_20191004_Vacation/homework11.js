//1. 转字符串类型的时候，有哪些限制？

//.toString()转换字符串要排除null 和 undefined
// String()转字符串没法转进制字符串





// 2. 关于变量命名的规则有哪些

//变量名区分大小写，允许包含字母、数字、美元符号($)和下划线，第一个字符不允许是数字，不允许包含空格和其他标点符号。
//禁止使用JavaScript关键词





// 3. Console.log(true&&false||true)和console.log(false || true&&false)的结果分别是什么，并解释为什么

//console.log(true&&false||true)   结果为 true       
// 先计算true&&false 因为 与  的规则是 有false则false 所以结果 为 false  
// 再计算false||true 的结果   因为 或 的规则是 有true则true  结果为true  
// 所以最后结果为 true

//console.log(false || true&&false)     结果为false 
// 先计算false||true 的结果   因为 或 的规则是 有true则true  结果为true
// 再计算true&&false 因为 与  的规则是 有false则false 所以结果 为 false  
// 所以最后结果为 false




// 4. 将一行字符串分多行显示，有几种写法，分别是什么
// 两种
// 第一种
// console.log("line1\line2\line3");
// 第二种
// console.log('line1
//               line2
//               line3');


