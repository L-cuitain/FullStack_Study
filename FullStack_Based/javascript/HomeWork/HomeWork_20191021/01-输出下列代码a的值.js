
    // 1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
    var a = 25;

    function abc() {
      console.log(a); // undefined
      var a = 10;
    }
    abc();
    console.log(a) // 25


 //创建 全局变量 a 初始值为 25
 //调用 函数abc
 //创建函数 abc 先重新定义变量 a  并将之前的 全局变量 a 覆盖  打印 a 会为undefined
 //打印变量 a  因为 局部变量 不能访问  所以会获取全局变量 a  所以会打印 a 为 25