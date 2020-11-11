## js解答题
1. 如何判断一个变量是否是数字（需要通过输出true或false进行判断），输出的true或false分别代表着什么含义？

    答:
    var a = typeOf('hello');
    console.log(a);

    true代表是数字类型 false代表非数字类型

2. 100+100结果是200，那么100+‘100’结果是什么，为什么？

    答:
    100+'100' 结果为 100100
    因为字符串与数字类型相加会进行隐式转换为字符串类型

3. 请说说 `+` 号有几层含义，分别是什么？

    答:
    1) 运算符
    2) 连接符
    3) 隐式转换



4. 前--和后--的区别是什么？

    答:
    前-- 指先进行减法运算 再赋值
    后-- 指先赋值 再进行减法运算

## js编程题

1. 如何能够判断一个数字是小数还是整数？

   ```js
    var a = 1.3;

    if(parseInt(a) == a){
        console.log("是整数");
    }else{
        console.log("是小数");
    }
   ```

2. 探究题：详见下面代码

   ```js
    isNaN('') // false
    isNaN('1A') // true
    isNaN(true) // false
    isNaN({}) // true
    isNaN([1,1]) // true
    // 探究：根据isNaN的作用你是否能说明出现上面现象的原因

    //答:
    //isNaN()是判断某个数值是不是NaN
    //1) isNaN()将空字符串转换为数字 0 后 不为NaN 所以为false
    //2) isNaN()将字符串"1A" 转换为数字类型  后  为NaN 所以为true
    //3) isNaN()将true转换为数字 为 1  不为NaN 所以为false
    //4) isNaN()将{}转换为数字类型 为NaN 所以为true
    //5) isNaN()将[1,1]转换为数字类型 为NaN 所以为true
   ```

3. 打印下面的输出结果

   ```js
    var num1 = 12, num2 = '12', num3 = '', num4;
    console.log(num1 + num2);       //1212
    console.log(num1 + +num3);      //12
    console.log(num1 + +num4);      //NaN
    console.log(+num2 + !!num3);    //12
    console.log(!!num2 + !!num4);   //1
   ```

4. 打印下面的输出结果

   ```js
    1) var a = 10,
         b = ++a,
         c = a--,
         d = c++ + ++b + --a;
     console.log(a, b, c, d);

     //9 , 12 , 12 , 32
    
    2) var a = 100,
         b = --a,
         c = a-- + b++,
         d = a - b-- + ++c;
     console.log(a, b, c, d);

     //98 , 99 , 199 , 197
   ```
