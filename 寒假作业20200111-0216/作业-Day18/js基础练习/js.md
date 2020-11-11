## js简答题

1. 若一个变量没有声明直接赋值，它会属于什么变量？根据所学知识说说它会有什么特性

   答:
   全局变量
   作用在全局作用域  无论在代码块中都可以调用

2. 请解释一下什么是作用域链？

   答:
   作用域一层一层直到全局作用域  这种一层层的关系叫作用域链


3. 同名函数和变量是怎么解析的？

   答:
   函数声明 替换 变量声明
   后面的函数声明替换前面的函数声明
   后面的变量声明无效


4. 函数表达式预解析属于变量的预解析还是函数的预解析？为什么？

   答:
   变量的预解析
   函数表达式创建函数，会执行变量提升，此时接收函数的变量名无法正确的调用


## js编程题
1. 输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // undefined
   var a = 10;
 }
abc();
alert(a)  // 25

```
2.输出下列代码a的值分别是多少？
```js
var a = 25;
 function abc() {
   alert(a);   // 25
   a = 10;
 }
abc();
alert(a)  // 10

```
3. 输出下列代码name3的值分别是多少？
```js
var name3 = "zs";
function f3() {
    var name3 = "ls";
    function f4() {
        name3 = "ww";
    }
    f4();
    console.log(name3);   // ww
}
f3();
console.log(name3); // zs
```

4.下列代码控制台打印出的值分别是多少？
```js
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
```

5. 下列代码控制台打印出的值分别是多少？
```js
function f1() {
  var a = b = c = 9;
  console.log(a);    // 9
  console.log(b);    // 9
  console.log(c);    // 9
}
 f1();
 console.log(a);    // a is not defined
 console.log(b);     // 9
 console.log(c);     // 9
```