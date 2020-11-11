let objJson = '{"name":"张三","age":18}';

//上面数据的本质  是字符串 我们能操作的变量 数组 对象
//如果要把json字符串变成js对象  用的方法: JSON.parse(字符串)

console.log(typeof objJson);
console.log(objJson);
console.log("-------------------");
let obj = JSON.parse(objJson);
console.log(obj);


let arrJson = '["a","b","c"]'

let arr = JSON.parse(arrJson);
console.log(Array.isArray(arr));