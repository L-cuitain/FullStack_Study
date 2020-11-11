## js简答题

1. 函数的基本声明及调用格式是什么？其作用是什么？

    答:
    function 函数名(参数){
        return 返回值
    }


    调用:函数名(参数)

    将一段可重复使用的代码封装到一个函数内 以方便使用以及减少代码量


2. 说说你对函数形参和实参的理解，形参个数和实参必须相等吗？

    答:
    
    例:
    function add(a,b) {
        return a + b
    };
    
    add(1,2);

    声明函数add时，a，b就是形参。调用函数add(1,2)  1，2就是实参

    必须相等


3. 函数为什么需要return返回值？

    答:
    如果需要将函数执行过后得到一个值时,就需要一个返回值
    没有返回值会出现undefined

4. 函数表达式和函数声明式有什么区别？

    答:
    函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用
    而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用




## js编程题


1. 编写一个函数：判断任意三个数中的最大值和最小值

    ```js
    // 答:
    function getMax(num1,num2,num3){
    var max = 0;

    max = num1 > num2 ? num1 : num2;
    max = num3 > max ? num3 : max;

    return max;
    }

    console.log(getMax(1,2,3));


    ```

2. 编写一个函数：实现对 `n` 到 `m` 之间所有偶数的求和

    ```js
    // 答:
    function getSum(num1,num2){
    var sum = 0;

    for(var i = num1 ; i <= num2 ; i++){
        sum += i;
    }

    return sum;
    }

    console.log(getSum(10,20));
    ```

3. 编写一个函数：实现对传入的数组从小到大进行冒泡排序

    ```js
    // 答:
    function getArr(arr){
    
    for(var i = 0 ; i < arr.length-1 ; i++){
        for(var j = 0 ; j < arr.length-1-i ; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
    }


    var arr = [4,3,1,2];

    console.log(getArr(arr));
    ```

4. 编写一个函数：传入任意个数字，计算所有数之和

    ```js
    // 答:
    function getSum(){
    
   var sum = 0;

   for(var i = 0 ; i < arguments.length ; i++){
        sum += arguments[i];
   }

   return sum;
    }


    console.log(getSum(1,4,2,5,12,5,76,3));
    ```
