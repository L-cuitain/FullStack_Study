// 13.	定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，获取colors数组下标是1的值

var user = {
    price : 1299,
    num : 2,
    name : "张三",
    colors : [11,12,13,14]
}
var arr = [12,13,14,user,16,17]

console.log(arr[3].colors[1]);

// 1.把下标是3对应的元素获取到
console.log(arr[3]);
// 2.把数组第一个元素修改成数字666
arr[1] = 666;
user.colors[1] = 666;

console.log(arr[1]);
console.log(arr[3].colors[1]);
