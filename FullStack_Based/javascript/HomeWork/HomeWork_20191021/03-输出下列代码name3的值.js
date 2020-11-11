//3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
var name3 = "zs";
function f3() {
    var name3 = "ls";
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ww
}
f3();
console.log(name3); // zs


//解析过程:
//首先 创建一个全局变量 name3  值为 zs
//在函数 f3 中又创建一个局部变量 name3 值为 ls
//在函数 f3 中又创建一个函数 f4  并在f4函数中 将name3 重新赋值为 ww
//在函数 f3 中调用 f4 函数  打印name3  得出局部变量  重新赋值后的值  为 ww
//在函数 f3 外  调用 f3 方法  打印 name3  但函数外访问不到 函数内的局部变量 name3  所以 打印全局变量 name3