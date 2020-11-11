let arr = [1,2,3,4];

console.log(...arr);

//作用1 : 扩展运算符链接数组

let arr1 = [1,3,2];
let arr2 = [2,4,6];

let arr3 = [...arr1,...arr2];
console.log(arr3);

