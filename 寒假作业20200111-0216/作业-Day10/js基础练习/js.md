## js简答题

1. 简述三种循环？

    答:
    for循环
    while循环
    do while循环

2. 试着说说你会如何合适使用三种循环？

    答:
    for循环  正常需要将一个语句执行几次时使用
    while循环 在需要满足某个表达式后才执行语句时使用
    do while循环  在满足某个表达式之前会执行一次语句时使用

3. 什么是死循环？列举一个死循环？

    答:
    不停的执行循环体 无法跳出循环

    例:
    while(true){
        console.log("滑稽");
    }

4. while循环和do...while的区别是什么？

    答:
    while语句的特点是先判断表达式后，执行循环体。
    do while语句先执行循环体，然后判断循环条件是否成立。


## js编程题

1. 使用一个for循环按顺序打印出：`10，8，6，4，2，0，-2`

    ```js
    var num = 10;

    for(var i = 0 ; i< 7 ; i++){
        console.log(num);
        num -= 2;
    }
    ```

2. 使用一个while循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

    ```js
    var num = 2;
    var i = 1;

    while(i <= 7){
        console.log(num);
        num -= 2;
        i++;
    }
    ```

3. 使用一个do...while循环打印出：`100`

    ```js
    var num = 100;

    do{
        console.log(num);
    }while(false);
    ```

4. 使用一个for循环实现：1-100之间所有偶数的打印
    要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

    ```js
     for(var i = 0 ; i <= 100 ; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }

    for(var i = 0 ; i <= 100 ; i++){
        if(i % 2 != 0){
            continue;
        }
        console.log(i);    
    }
    ```