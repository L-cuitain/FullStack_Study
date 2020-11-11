//1. 字符串连接用加号
console.log("hello" + "javaSprict");


//2. 数字转换为字符串: String()   字符串转成整数: parseInt(字符串变量)
var num = String(12);
var str = parseInt("13");

console.log(num);
console.log(str);


//3. i++指先赋值再计算  ++i指先计算在赋值


//4. *=是指赋值运算符  指 将 变量 a 乘 等号 右边的值 并把最终结果赋值给左边变量a  
//   a *= 2 --> a = a*2


//5. 求余用:%号


//6. == 代表相等于 (自动转换类型 再比较值) , === 代表完全相等(值与类型 必须完全相等)


//7. NaN 是 not a number 非数字类型


//8. NaN == NaN 结果为 false 
//   NaN与所有值包括自己 都不相等


//9. 输出 a 对象中的 name 属性
var a = {
    name : "张三"
}

console.log(a.name);


//10. 删除一个对象中的属性
var person = {
    name : "王五",
    age : 12
}

delete person.name


//11. 打印 数组 a 第2个元素的第4个元素
var arr = ["张三","万物",["李四","赵六","田七","疯八","小九"]]

console.log(arr[2][4]);


//12. 使用.  在对 使用对象的属性值进行调用或操作时 会使用.来获取该对象的属性值


//13. 计算 1~100 之间所有能够整除5的数的和

var sum = 0;

for(var i = 1 ; i <= 100 ; i++){
    if(i % 5 == 0){
        sum+=i;
    }
}

console.log("和为: "+sum);


//14. 分支有三种结构  
//    分别为:
//    单向分支 : if(...){...}
//    双向分支 : if(...)else{...}
//    多向分支 : if(...)else if(...){...}else if(...){...}else{...}


//15. 查看一个变量的类型
var num = 2
console.log(typeof num);


//16. 1 == '1' 相等  0 == '0' 相等
console.log(1 == '1');
console.log(0 == '0');


//17.并且用  ||  符号表示


//18. 定义一个对象保存姓名和年龄? 然后判断如果年龄大于等于18就显示 xxx 已成年 , 否则显示 xxx 未成年
var zhangsan = {
    name : "张三",
    age : 12
}

if(zhangsan.age >= 18){
    console.log(zhangsan.name+" 已成年");
}else{
    console.log(zhangsan.name+" 未成年");
}


//19. 与 , 或 , 非的特点 用哪个符号表示
//   与: &&  如果两个值都是true , 那么结果就是true , 否则为false
//   或: ||  如果两个值有一个值为 true , 那么结果就为 true , 否则为false
//   非: !   如果值为 true , 那么结果为 false , 如果值为 false , 那么结果为 true


//20. 三种执行 JS 代码的方法
//    第一种: 网页执行
//    第二种: node执行
//    第三种: vsCode调试执行


//21. 定义一个对象  变量 变量名 = 值


//22. 打印对象中的一个属性
var lisi = {
    name : "李四",
    sex : "妖"
}
console.log(lisi.sex);


//23. 定义一个数组 打印数组中第一个元素
var arr1 = ["张三","李四","王五","赵六"]
console.log("数组中第一个元素为: "+arr1[0]);


//24.计算 1 ~ 100 之间所有奇数和

var sum1 = 0;

for(var i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0){
        sum1+=i;
    }
}

console.log("所有奇数和为: "+sum1);


//25. 定义变量保存学生的分数 , 根据分类打印 优 良 , 及格 , 不及格
var group = 72;

if(group < 59){
    console.log("不及格");
}else if(group >= 60 && group < 69){
    console.log("及格");
}else if(group >= 70 && group < 79){
    console.log("良");
}else if(group >= 80){
    console.log("优");
}


//26. true && false && true & false 结果 为 false  (&& 有false 则false 否则返回最后结果值判断)
console.log(true && false && true & false);


//27.false || false || false || true 结果 为 true  (|| 有 true 则true 否则根据最后结果值判断)
console.log(false || false || false || true);


//28. !false && !true && !false  --> true && false && true 结果为 false (&& 有false 则false 否则返回最后结果值判断)
console.log(!false && !true && !false);


//29. 把数字转换成布尔
console.log(Boolean(3));