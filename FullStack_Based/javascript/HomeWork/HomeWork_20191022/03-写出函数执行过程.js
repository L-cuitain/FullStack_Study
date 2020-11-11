//3.下列代码控制台打印出的值是多少？写出执行过程
function test(){  
    b();  
    var a=1;
   function b(){
        console.log(a);  // undefined
        var a=2;
    }
}
test();


//执行过程:
//第一步 调用 函数 test 
//第二步 先定义局部变量 a 赋值为 1
//第三步 调用 函数 b  在函数 b 中先定义局部变量 b
//第四步 打印 局部变量 a 结果为 undefined  