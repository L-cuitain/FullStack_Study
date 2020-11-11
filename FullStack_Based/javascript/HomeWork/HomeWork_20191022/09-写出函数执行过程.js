//9.下列代码控制台打印出的值是多少？
(function f (num) {
    function num () {};
    console.log(num); // function num
    var num =10
    console.log(num); // 10
}(100))



//这是自调用过程
// 语法:
// (function (形参, ...) {
//     函数体
// })(实参)

//所以将实参100传入 形参 num 中
//创建 函数num
//打印 num  因为 函数 优先级 比 变量大  所以会 打印num方法  输出结果为 funtion num
//定义 局部变量num  初始值为 10
//打印 num  为局部变量num  所以会输出 10