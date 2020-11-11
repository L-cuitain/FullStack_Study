//7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {
    console.log(b);  // function c
    var s = b();
    console.log(s)  // 123
  }
a(c);
function c() { return 123 }


//首先创建 函数 a  参数为 b
//然后 调用 函数 a  将 函数 c 作为 参数 传递到方法中
//在 函数 a 中  打印 函数 c  会打印出  function c
//将 调用函数 c  返回 123  将 123 赋值给 局部变量 s
//在 函数a 中 打印 局部变量 s  值为 123
