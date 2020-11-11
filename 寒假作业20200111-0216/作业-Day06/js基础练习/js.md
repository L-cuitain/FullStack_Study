## js解答题

1. 算数运算符都有哪些？

    答:
    加(+)、减(-)、乘(*)、除(/)、求余(或称模运算，%)、自增(++)、自减(--)


2. NaN和任何值比较的结果都是什么？包括和自身比较吗？

    答:
    false

    包括自身

3. == 和 === 的区别在哪？

    答:
    == 号 在比较两个变量前会将变量转换 再比较值
    === 号 会比较两个变量的类型 与 值


4. 逻辑运算符有哪些, 逻辑运算的规则有哪些

    答:
    && 逻辑与  从左向右开始计算，当遇到为假的条件时停止计算，整个表达式为假；所有条件为真时表达式才为真

    ||  逻辑或  从左向右开始计算，当遇到为真的条件时停止计算，整个表达式为真；所有条件为假时表达式才为假

    ！ 逻辑非  从左向右开始计算，遇真则假 遇假则真




## js编程题

1. `typeof` 无法显示出的数据类型名称有什么？为什么？
   ```js
   typeof(null);  // object 历史遗留问题
   ```
    
    
2. 判断下面结果的布尔值

   ```js
    333 == '333'    //true
    666 == [666]    //true
    '999' == [999]  //true
    NaN == NaN      //false
    NaN === NaN     //false
    undefined == null   //true
    undefined === null      //false
    [] == []        //false
    [] === []       //false
    [] == 0         //false
    ![] == 0        //true
    [] == ![]       //true
   ```

3. 打印输出下面的结果

   ```js
    1) true && !true        //false
    2) false || !false      //true
    3) false || !true && !false     //false
    4) true && !false || false      //true
    5) undefined && true        //undefined
    6) 2+2 > 5 || 3-3 <=0 && !undefined     //true
   ```

4. 打印输出下面的结果

   ```js
    var a = 10;     
    var b = a++;
    console.log(b>=a);
    var c = b + 'a';
    console.log(c);
    console.log(c == ('a' + b))


    //答:
    // false
    // 10a
    // false
   ```