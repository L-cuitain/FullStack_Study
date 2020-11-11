//7.下列代码控制台打印出的值是多少？写出执行过程
function test(){
    var x = 31;
    if(true){
      var x = 71;
      console.log(x) // 71
   }
    console.log(x) // 71
   }
   test()


   //执行过程:
   //第一步  先调用 函数test 
   //在test 函数体中 声明 var类型 局部变量 x  初始值为 31
   //在if判断中  重新 声明 var类型 局部变量 x  初始值为 71
   //在if判断中 打印局部变量 x 将if判断内的局部变量 x 打印 值为 71
   //if判断外 打印局部变量 x   因为if判断中重新定义局部变量 x  所以打印的值为 71


