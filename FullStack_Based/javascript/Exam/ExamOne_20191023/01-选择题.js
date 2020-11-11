// 一、选择题


// 1、不属于js的基本数据类型的是(B)
// A、null   B、float   C、string     D、number



// 2、以下哪个值放在if中被隐式类转换后不会变成false(A)
// A、数字-1   B、数字0    C、null   D、空字符串



// 3、以下程序运行结果正确的是(D)
// var i =10;
// i++;
// console.log(i);
// var y = i++;
// console.log(y);
// y = ++i;
// console.log(y)
// y += 10;
// console.log(y)
// A、10 11 13 23 
// B、11 11 13 23 
// C、10 12 13 23  
// D、11 12 13 23



// 4、以下程序运行结束正确的是(B)：
//   var a = 3;
//   var b = 4;
//    var c = 5;
//   console.log(a>b&&c>b||a<c);
// A.1  B.true  C.false   D.报错




// 5、以下程序运行结束正确的是(C)：
//   var a = 3;
//    var b = 4;
//   var c = 5;
//   console.log(a>b?a:c);
// A.3  B.4   C.5   D.报错




// 6、以下程序运行结束正确的是(B)：
// var str1 = null;
// var str2 = false;
// console.log(str1 === str2?"相等":"不相等");
// A.相等   B.不相等  C.true   D.false




// 7、以下对方法的解释错误的是 B
// A、 pop：数组尾部删除
// B、 unshift：数组头部删除
// C、 push：数组后面添加元素
// D、 join：将数组转成字符串




// 8、以下代码运行结果输出(B)
// var a = [1,2,3]
// alert(a.join())
// A、123    B、1,2,3   C、 1  2  3    D、[1,2,3]





// 9、在JS中，‘1555‘+3的运行结果是（C）
// A、1558    B、1552     C、15553     D、1553




// 10、if…else语句的if和else两个句子里的代码同时被执行吗?(B)
//  A、可以，因为条件是并立的
//  B、不可以，因为两个条件不同




// 11、表达式‘200’===200的值为（B）
// A、true   B、false   C、 0      D、1





// 12、关于JavaScript变量的生命周期，下面说法是错误的是（B）
// A、JavaScript的变量的生命周期都是从其声明开始
// B、全局变量和局部变量的声明周期是一样长的
// C、局部变量在函数执行完成后就会被删除
// D、全局变量在脚本执行完成后（页面关闭）会被删除 





// 13、下列语句中，（A）语句是根据表达式的值进行匹配，然后执行其中的一个语句块。如果找不到匹配项，则执行默认语句块
// A、switch   B、if-else   C、for    D、字符串运算符





// 14、增加一个新值到数组的最后，下面哪一个选项是正确的？（C）
// A、arr[value] = length;    B、arr[arr.length()] = value;
// C、arr[arr.length] = value  D、arr.lenght = value;





// 15、数组var arr = [‘a’,’b’,’c’,’d’,’e’];arr.slice(2,4);alert(arr)，弹框应弹出（D）
// A、b,d,c   B、c,d   C、c,d,e    D、a,b,c,d,e





// 16、下列JavaScript的循环语句中,正确的是(D)
// A、if(i<10;i++)      B、for(i=0;i<10)
// C、for i=1 to 10     D、for(i=0;i<=10;i++)




// 17、for(x=0;x<5;x++) {
// var y= x*x;
// console.log(y)
// }
// 输出的结果为(B)
// A、 0,1,2,3,4           B、0,1,4,9,16
// C、0,1,9,4,16           D、以上答案都不对





// 18、数组下标出界，将返回（D）
// A、缺省值，如0          B、给浏览器回报错误
// C、数组中第一个数或最后一个数     D、undefined




// 19、看以下JavaScript程序
// var num;
// num=5+true;
// 问：执行以上程序，number的值为（D）
//  A、true     B、false
// C、5         D、6




// 20、在JavaScript中运行下面的代码后的返回值是（A）
// var num = 10;
// num = 20;
// function getOK(num)
// {
//  var num = 30;
//  alert(num);

// }
// alert(num);
// getOK();
// A、20,30  B、10,30  C、 20,40    D、 10,40 
