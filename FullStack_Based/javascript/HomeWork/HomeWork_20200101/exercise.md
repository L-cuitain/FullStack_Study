# 一、选择题
## 1、分析下段代码输出结果是（B）
var arr = [2, 3, 4, 5, 6];
var sum = 0;
for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

A．20     B．18     C．14     D．12  

## 1、以下关于 Function函数对象的说法不正确的是（ D ）
A．函数可有可无返回值 
B．B．调用函数时传递的参数是实参 
C．函数调用时候，可以用一个变量来接收函数返回值 
D．函数必须要有形式参数 
 
## 2、以下代码运行的结果是输出( B )
var a = b = 10;
(function () {
    var a = b = 20
})(); 
console.log(b); 

A．10     B．20     C．报错     D．undefined  

## 3、以下代码运行后的结果是输出(  A  )
var a = new Object();
a.name = "admin";
console.log(a.name); 

A．admin  B．a    C．“admin”     D．[a] 
B．
## 4、在 JS 中，’1555’+3 的运行结果是(  C  )

 A．1558     B．1552     C．15553     D．1553 
 
## 5、以下代码运行后弹出的结果是(  B  )
var a = 888;
++a;
console.log(a++);
 
A．888     B．889     C．890     D．891  

## 6、关于变量的命名规则，下列说法正确的是（  ABCDE  ） 

A．首字符必须是大写或小写的字母，下划线（_）或美元符（$） 
B．除首字母的字符可以是字母，数字，下划线或美元符 
C．变量名称不能是保留字 
D．长度是任意的 
E．区分大小写  

## 7、下列的哪一个表达式将返回值为假（  B  ） 

A．!(3<=1) 
B．(4>=4)&&(5<=2) 
C．(“a”==“a”)&&(“c”!=“d”) 
D．(2<3)||(3<2)  

## 8、下面代码，k的运行结果是（  B  ）
var i = 0, j = 0;
for (i < 10; j < 6; i++ , j++) {
    k = i + j;
}

A．16     B．10     C．6     D．12  

## 9、下面代码的输出结果为（ D ）
var x = 1;
function fn(n) {
    n = n + 1;
};
y = fn(x);
console.log(y);

 A．2     B．1     C．3     D．undefined 
 
## 10、
[1, 2, 3, 4].join("0").split("");
的执行结果是（ C  ）
A．"1,2,3,4"
B．[1,2,3,4]   
C．[“1”,“0”,“2”,“0”,“3”,“0”,“4”]
D．”1,0,2,0,3,0,4" 



## 11、下面代码的运行结果是（ C  ）
function fn1() {
    alert(1);
}
console.log(fn1);

A．1
B．alert(1);      
C．function fn1() { alert(1); } 
D．Undefined

## 12、以下代码运行后，结果为（ B  ）
fn1();
var fn1 = function (a) {
    console.log(a);
} 

A．1     B．程序报错     C．alert(1);     D．undefined  

## 13、
var n = "miao wei ke tang".indexOf("wei", 6);
n的值为：（ A   ） 
A．-1     
B．5     
C．程序报错     
D．-10  

## 14、下面对 substring() 方法描述不正确的是（  C  ） 

A．一共有两个参数，省略第二个参数表示从参数开始位置提、截取到字符串结束。
B．提取之前会比较两个参数的大小，并根据大小调整位置。
C．可以接收负数参数，负数表示从后往前数字符位置。
D．如果没有设置参数，直接返回整个字符串。

## 15、回答以下代码，alert的值输出分别是多少?( B )
 
A、100 ，10  B、undefined，10    C、10，10     D、报错

## 17、 回答以下代码，alert的值输出分别是多少？( A )
<script>
  var a = 100;
  function test() {
    alert(a);
    a = 10;
    alert(a);
  }
  test();
  alert(a);
</script>

A.100  10  10          B. 10  100  10   
C .10  10  100         D.100  100  100

## 18、以下程序运行结束正确的是（ B ）
var i = 10;
i++;    
console.log(i);  
var y = i++;    
console.log(y);   
y = ++i;      
console.log(y);
y += 10;    
console.log(y);

A.10 11 13 23      B. 11 11 13 23
C.10 12 13 23      D.11 12 13 23

## 19. 下列代码的执结果是(  A  )
function funcSwitch(sFlag) { 
  switch (sFlag) 
  { 
    case 'Test1': alert('Test1'); break; 
    case 'Test2': alert('Test2'); break;
     default: ;
   } 
  }
    
    
funcSwitch('Test2');

A. Test2      B. Test1        C.undefined      D. null


## 20.下列代码的运行结果是( A )
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 2, len = cars.length;
for (; i < len; i++) {
  console.log(cars[i]);
}
A、SaabFord        B、 SaabVolvo
C、 VolvoBMW      D、FordBMW


# 二、简答题
## 1.	js数据类型有哪些，怎么判断一个变量的数据类型？

        数字类型  Number
        字符串类型 String
        布尔类型 boolean
        空类型 null
        未定义 undefined
        对象 Object (数组(Array) 函数(Function))
        原始数据类型  Symbol



## 2.	列举数组中常用的5个方法，并说明各自的作用？

        (1)join():分隔符 ,可以将数组的元素组成一个字符串
        (2)push():可以将接收的参数添加到数组的末尾,并返回修改后数组的长度
        (3)pop():可以将数组末尾的项移除 , 减少数组的length值
        (4)shift():可以删除原数组第一项,并返回删除元素的值;如果数组为空则返回undefined
        (5)unshift():可以将接收参数添加到数组的开头,并返回数组的长度 
        (6)sort():按升序排列数组项
        (7)reverse():反转数组项的顺序
        (8)indexof():查找接收参数的值,可以接收两个参数:要查找的项和查找起点位置的索引
        (9)concat():将参数添加到原数组中,并返回新数组
        (10)slice():返回从原数组中指定开始下标到结束下标之间的项 组成新数组
        (11)splice(): 可以实现 删除 , 插入 , 替换 用法
                      删除:可以删除任意数量的项 ,需要指定两个参数:要删除的项数
                      插入:可以向指定位置插入任意数量的项 需要提供三个参数: 起始位置 , 要删除的项数 , 要插入的项数
                      替换:可以向指定位置插入任意数量的项 且同时删除任意数量的项 需要指定三个参数: 起始位置 , 要删除的项数  , 要插入任意数量的项

## 3.	javascript中的循环有哪些，while循环和do...while的区别是什么？

        for循环
        while循环
        do while循环

        while循环需要在判断条件符合才会执行循环 , do while 无论条件是否符合都会执行一次循环


## 4.	javascript中的‘+’有几层含义，分别是什么？

        +含义:
        连接符
        运算符


## 5.	js中break 和 continue 的区别是什么？

        break是跳出循环
        continue是跳出本次循环  执行下一次循环

## 6.	列举目前你遇到undefined的情况？

        (1)变量只声明未定义
        (2)函数定义没有返回值
        (3)函数定义形参不传值
        (4)对象没有属性名
        (5)数组find方法未找到情况下为undefined



## 7.	产生一个10-50的随机数(包含10也包含50)?

    答:
        //创建num变量 将随机数赋值给num
        var num = (Math.random()*(50-10)+10);
        //弹窗显示不保留小数的num
        alert(num.toFixed(0));


## 8.	列举5个字符串的方法，并说明各自的作用？

        (1)substr(start,length):表示从start位置开始,截取length长度的字符串
        (2)split():使用一个指定的分隔符把一个字符串分割储存到数组中
        (3)join():使用接收的分隔符将一个数组合并为一个字符串
        (4)substring(start,end):表示截取字符串 从start到end之间的字符串,包括start位置的字符但不包括end位置的字符
        (5)indexof():返回字符串中匹配字串的第一个字符的下标

## 9.	join()和split()的区别是什么？

        join()方法是将数组转换成字符串
        split()方法将字符串是切割成数组的形式


## 10.定义一个人的对象，属性有：名字，年龄，性别，方法是：吃饭，把人的名字在控制台打印出来，将人的性别这个属性进行删除？

        答:
        var person = {
            name:"张三",
            age: 12,
            sex: "男",
            eat: function(){
                console.log("吃饭");
            }
        }

        console.log(person.name);

        delete person.sex;

        console.log(person.sex);
