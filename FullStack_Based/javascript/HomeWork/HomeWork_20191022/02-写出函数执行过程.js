//2.下列代码控制台打印出的值是多少？写出执行过程
function fn(){
    console.log("我们是全局的fn");
}
function fn2(){
    console.log(fn);  // function fn
    fn = 3;
    return ;
    function fn(){
        console.log("我是fn2里面的");
    }
}
fn2();  


//执行过程:
//首先调用 函数 fn2  在fn2函数中  
//第一步 打印fn   因为fn为函数  所以会打印 function fn
//第二步 将全局变量 fn  赋值为 3
//第三步返回函数

