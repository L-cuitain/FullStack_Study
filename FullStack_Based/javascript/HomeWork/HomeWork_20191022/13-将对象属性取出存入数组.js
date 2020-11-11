//13.将下面对象的属性取出来存储到一个数组中
var person = {name:"one",age:12,sex:"男"};


//定义一个新数组
var arr = [];

//遍历对象属性
for(var key in person){
    //将对象属性添加到 arr数组中
    arr[arr.length] = key;
}
//打印数组
console.log(arr);
