//6.自定义一个对象：对象拥有年龄，学号，姓名，身高，体重，手机号等属性(这个代码敲三遍，创建3个不同的对象，非常重要)
// 要求：
// 1. 通过2种方式定义对象
// 2. 通过2种方式给对象添加一个属性 gender,值是"男"
// 3. 获取属性姓名和年龄的值
// 4. 删除属性体重


// 1. 通过2种方式定义对象
// var student = {
//     name : "张三",
//     age : 18,
//     id : "A001",
//     height : 185,
//     heavy : 110,
//     phoneNumber : "15843850965"
// }

var student = new Object({
    name : "张三",
    age : 18,
    id : "A001",
    height : 185,
    heavy : 110,
    phoneNumber : "15843850965"
})

// 2. 通过2种方式给对象添加一个属性 gender,值是"男"
// student.gender = "男"

var gender = "男"
student[gender] = 1


// 3. 获取属性姓名和年龄的值
console.log(student.name);
console.log(student.age);


// 4. 删除属性体重
delete student.heavy

console.log(student);



