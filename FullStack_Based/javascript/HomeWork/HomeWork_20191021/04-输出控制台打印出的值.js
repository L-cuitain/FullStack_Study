//4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var color = "red";
function outer() {
    var anotherColor = "blue";
    function inner() {
        var tmpColor = color;   
        color = anotherColor; 
        anotherColor = tmpColor;  
        console.log(anotherColor);     // red
    }
    inner();
}
outer();
console.log(color);  // blue


//解析过程:
//创建 全局变量 color  初始值为 red
//创建 函数 outer  函数中 创建局部变量 anotherColor 初始值为 blue
//在 函数 outer 中 再创建一个函数 inner 
//在inner函数中  创建局部变量 tmpColor  将 成员变量 color的值 red 赋值给 局部变量 tmpColor
//再将 局部变量 anotherColor 的值 blue 赋值给 全局变量 color
//再将 局部变量 tmpColor 的值 red 赋值给 局部变量 anotherColor

//最终结果为
//局部变量 tmpColor = "red"
//全局变量 color = "blue"
//局部变量 anotherColor = "red"

//在外部调用 outer函数  执行outer函数体   在 outer 函数中调用 inner函数  执行inner的函数体  在 inner 函数内 打印 anotherColor  值为 red
//在外部 打印 全局变量 color  因为 在 inner 函数体中 color 的全局变量 的值 已经改变 为 blue  所以打印 color 的值为 blue
