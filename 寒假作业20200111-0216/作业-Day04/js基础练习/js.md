## js解答题

1. 请简述 `typeof` 的用途，`typeof` 的返回结果都是什么数据类型？

    答:
    typeof可以返回变量的类型
    typeof返回结果为string类型

2. 数据类型转换，转 Number类型有哪些方式？

    答:
    1) Number(变量)
    2) parseInt(变量)
    3) parseFloat(变量)

3. 数据类型转换，转 String类型有哪些方式？哪个方式存在什么限制？

    答:
    1) .toString()
    2) String(变量)
    3) "+"做隐式转换

    .toString()方法 null 和 undefined调用会报错


4. 数据类型转换，转 Boolean类型有哪些方式？

    答:
    1) Boolean(变量) 

5. 什么是隐式类型转换，有哪些是隐式类型转换？

    答:
    指自动类型转换 , 由系统自动完成的类型转换

    转成string类型：
    +(加法运算符，字符串拼接)

    转成number类型：
    ++ --(自增自减运算符) ,+ - * / %(算术运算符)
    > < >= <= == === != !==(关系、比较运算符)

    转成boolean类型：
    && || !(逻辑且或非运算符)


## js编程题

 1. 回答下面代码中的结果

    ```js
    console.log(typeof [])      //Object
    console.log(typeof [666])   //Object
    console.log(typeof [{age:18}])      //object
    console.log(typeof NaN)     //Number
    console.log(typeof 'true')      //String
    console.log(typeof typeof undefined)    //String
    ```

2. 说出下面元素转 Number类型的结果

    ```js
    1) ''       //0
    2) '666'    //666
    3) '88&'    //NaN
    4) true     //1
    5) false    //0
    6) null     //0
    7) undefined       //NaN
    8) { }      //NaN
    9) {name:"9",age:9}     //NaN
    10) []      //0
    11) [1]     //1
    12) [1,1]   //NaN
    13) [[]]    //0
    14) [[1]]   //1
    ```

3. 说出下面元素转 String类型的结果

    ```js
    1) 666      //666
    2) ''       //
    3) true     //true
    4) false    //false
    5) null     //null
    6) undefined       //undefined
    7) { }      //[object Object]
    8) {name:"9",age:9}     //[object Object]
    9) []       //
    10) [1,'A']     //1,A
    11) [8,{age:8},8]       //8,[object Object],8
    12) [1,[2,[3]]]     //1,2,3
    ```

4.  说出下面元素转 Boolean类型的结果

    ```js
    1) 0        //false
    2) 1        //true
    3) -1       //true
    4) ''       //false
    5) '0'      //true
    6) NaN      //false
    7) null     //false
    8) undefined        //false
    9) { }      //true
    10) {name:"9",age:9}        //true
    11) []      //true
    11) [0]     //true
    12) [false]     //true
    12) [null,undefined]        //true
    ```