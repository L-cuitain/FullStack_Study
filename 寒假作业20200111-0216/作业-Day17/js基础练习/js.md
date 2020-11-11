## js简答题

1. 什么是全局作用域？什么是函数(局部)作用域？

   答:
   全局作用域:直接编写在 script 标签之中的JS代码，都是全局作用域
   函数(局部)作用域:在函数内部就是局部作用域，这个代码的名字只在函数的内部起作用

2. ES6新增了块级作用域，谈谈你对块级作用域的理解

   答:
   块作用域由 { } 包括，if语句和for语句里面的{ }也属于块作用域


3. 为什么需要 `let`定义变量，`let` 和 `const` 有什么共同点，`let` 和 `var` 有什么不同点

   答:

   1)
    使用let定义变量因为 let只在所在的代码块内有效 可以对一个范围内的代码块进行访问 而不会作用到全局

   2)let与const共同点:
    都是只在声明所在的块级作用域内有效

   3)let与var的不同点:
   使用未声明的变量
   重复声明同一个变量
   变量作用范围

4. 全局变量和全局作用域，局部变量和局部(函数)作用域是否有关系？有什么关系？

   答:
   有关系
   全局变量的作用域是全局性的 而在函数之内声明的变量 就只在函数体内部有定义 它们是局部变量 作用域是局部性的



## js编程题

1. 输出下面预解析的结果，并注释解题过程

    ```js
    1) var a = 10;
       function abc() {
         console.log(a); // undefined  a为局部为定义变量
         var a = 9;
       }
       abc();
       console.log(a) // 10  a为全局变量 在全局作用域中结果为10   
    
    2) var color = "red";
       function outer() {
         var anotherColor = "blue";
       
         function inner() {
           var tmpColor = color;  //color因为是全局变量所以为 red  tmpColor 被赋值为red 
           color = anotherColor;  //anotherColor为 blue   color被赋值为blue     
           anotherColor = tmpColor; //tmpColor为red  anotherColor被赋值为red
           console.log(anotherColor); // red  
         }
         inner(); //执行inner函数
       }
       outer();
       console.log(color); // blue  在执行outer函数时 全局变量的值被赋值为blue  color为blue
    
    3) var a = 10;
       function fn1() {
         var a = b = c = 9;
         console.log(a); // 9  fn1中的a为局部变量  b 与 c 为全局变量 三个值都为9  
         console.log(b); // 9 
         console.log(c); // 9 
       }
       fn1();
       console.log(a); // 10   打印全局变量a  全局作用域中a的值为10 
       console.log(b); // 9    打印在fn1函数中定义的全局变量 b 值为 9
       console.log(c); // 9    打印在fn1函数中定义的全局变量 c 值为 9
    
    4) function a(b) {
       console.log(b); // [Function: c]   调用函数a时传入的参数为 函数c 所以会打印函数c 
       var s = b();
       console.log(s) // 123   调用函数c 执行函数c中的语句  返回结果123
       }
       a(c);
      
       function c() {
         return 123
       }
    ```

2. 输出下面打印结果并说明理由

    ```js
    1) function test() {
       var x = 31; 
       if (true) {
         var x = 71; 
         console.log(x) // 71  if判断中定义局部变量x 值为71
         }
         console.log(x) // 71  代码从上向下执行 打印if判断中定义的局部变量x 值为71
       }
       test();
    
    2) function test() {
       let x = 31; 
       if (true) {
         let x = 71; 
         console.log(x) // 71  let只作用于当前代码块  打印出if判断中代码块 的变量x 值为 71
         }
         console.log(x) // 31    let只作用于当前代码块  打印出 函数test 中代码块 的变量x 值为 31
       }
       test();
    
    3) function fn() {
       if (2 > 1) {
         arr = 10;
         brr = 10;
         let arr; 
         var brr;
         console.log(arr); // (Cannot access 'arr' before initialization) 因为 变量 arr 已经定义  所以会  报错
         console.log(brr); // 10   全局变量  brr 值为 10   
         }
        }
    fn();
    
    4) var a = [];
       for (var i = 0; i < 10; i++) {
         a[i] = function () {
           console.log(i);
         };
       }
       a[6](); // 10  
       a[7](); // 10  
       a[8](); // 10  
       a[9](); // 10  
       //因为 var i 为全局变量  所以 在每次循环 时  打印的索引都会被覆盖 
    
    5) var a = [];
       for (let i = 0; i < 10; i++) {
         a[i] = function () {
           console.log(i); 
         };
         a[i]();
       }
       a[6](); // 01234567896  
       a[7](); // 01234567897  
       a[8](); // 01234567898  
       a[9](); // 01234567899  

       //因为 let 只在存在于块级作用域中  所以每次打印的值都为本次所遍历的索引
    ```