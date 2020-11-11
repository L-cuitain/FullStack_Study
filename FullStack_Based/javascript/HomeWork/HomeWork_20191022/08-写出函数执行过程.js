//8.下列代码控制台打印出的值是多少？写出执行过程
function n() {
    if(2>1) {
        arr = 10;
        brr = 10;
        let arr;
        var brr;
        console.log(arr); // ？
        console.log(brr); // ？
    }
}
n(); 


//执行过程:
//调用函数 n 
//在函数中判断 true 执行
//
//定义全局变量  arr 赋值为 10 
//定义全局变量  brr 赋值为 10
//因为 变量 arr 已经定义  所以会报错(Cannot access 'arr' before initialization)


