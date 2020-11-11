// 12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
// 要求：
// 1.	输出第二个对象里面的属性name的值
// 2.	将第一个对象里面的属性gender的值修改成数字18
// 3.	算出2个对象里面属性是age的和

var person1 = {
    name : "张三",
    age : 13,
    gender : "男",
    studentId : "a01"
}

var person2 = {
    name : "李四",
    age : 15,
    gender : "女",
    studentId : "a02" 
}

var arr = [person1,person2];

console.log("第二个对象里面的属性name的值为: "+arr[1].name);

person1.gender = 18;
console.log(person1.gender);

var sum = arr[0].age + arr[1].age;
console.log("2个对象里面属性是age的和为: "+sum);