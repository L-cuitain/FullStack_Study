//44.定义一个人的对象，有name,age,gender,height等属性，
// 要求：1)获取name的值
// 2)	通过2种方式给对象添加一个新的属性weight,值自己写
// 3)	删除属性名height

var person = {
    name : "张三",
    age : 12,
    gender : "男",
    height : 152
}

console.log(person.name);



// person.weight = 110;

// console.log(person.weight);

person["weight"] = 110;

console.log(person.weight);




delete person.height;

console.log(person.height);
