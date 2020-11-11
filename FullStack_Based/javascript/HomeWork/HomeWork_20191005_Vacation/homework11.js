//1. 怎么将别的数据类型转换成字符串类型

//两种方式可以转换
//.toString()  
// String()   

// 2. 怎么定义一个对象，并且给获取对象的属性，给对象添加和删除属性


//定义对象
var user = {
    name : "张三",
    age : 12
}

//获取对象属性
user.age

//添加属性
user.type = "员工";

//删除属性
delete user.age;



// 3. == 和 === 的区别是什么？


// == 代表相等于 (自动转换类型 再比较值) , === 代表完全相等(值与类型 必须完全相等)


// console.log(1 == “1”)和console.log(1 === fasle)的结果是什么，并解释为什么

console.log(1 == "1")           //true    ==自动类型转换   只比较值是否相同 1 == 1 true
console.log(1 === false)        //false     === 需要比较类型  1 为number类型  false 是boolean类型  不匹配  结果为false



// 4. 前++ 后++的区别是什么

// 前++指先计算在赋值  后++指先赋值再计算
