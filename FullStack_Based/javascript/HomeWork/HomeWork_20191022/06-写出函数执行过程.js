// 6.下列代码控制台打印出的值是多少？写出执行过程
function test(){
    let x = 31;
    if(true){
      let x = 71;
      console.log(x) // 71
   }
    console.log(x) // 31 
   }
   test()


//执行过程:
//第一步  调用函数 test  
//在函数 test 中 定义 let类型变量 x  初始值为 31
//在判断为true 时  又重新定义 let类型变量 x  初始值为 71
//在 if判断中 因为let只在当前的代码块中有效  所以 打印 x  x的值会为刚定义的let类型变量 x 的值 71
//而在 if判断外 打印x  会访问 函数 test中第一个声明的 let类型变量 x  打印出值为 31