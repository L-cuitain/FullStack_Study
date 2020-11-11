## js简答题

1. 函数的形参是局部变量吗？谈谈你的理解

    答:
    是
    局部变量是指在程序中，只在特定过程或函数中可以访问的变量,而函数的形参符合这一项


2. 函数内部可以调用其他函数吗？谈谈你的理解

    答:
    可以
    在一个函数中调用其他函数可以适当减少代码量 方便执行


3. 函数的return是必须要添加的吗？函数如果调用的时候，没有返回值，输出的结果是什么？举例说明

    答:
    是必须添加
    没有返回值 输出的结果为undefined
    例:
    function getSum(a,b){
        var sum = a+b;
    }

    console.log(getSum(1,2));//undefined


4. 函数调用的时候传递了实参，但是没有形参接收，怎么在函数内部获取实参传递的个数

    答:
    函数名.length


## js编程题

1. 定义一个函数，用户输入任意两个不同数字,返回最后的最大值

```js
// 答:

var num1 = parseInt(prompt("请输入第一个数字"));
var num2 = parseInt(prompt("请输入第二个数字"));

alert(getMax(num1,num2));

function getMax(num1, num2){
    var max = 0;
    max = num1 > num2 ? num1 : num2;
    return max; 
}

```


2. 定义一个函数 function add(){}，求函数任意参数的和
 - 1) add(1,2,3)
 - 2) add(1,2,3,4,5)

```js
// 答:
    function add(){
    
        var sum = 0;

        for(var i = 0 ; i < arguments.length ; i++){
            sum += arguments[i];
        }

        return sum;
    }


    console.log(getSum(1,2,3));
    console.log(getSum(1,2,3,4,5));
```

3. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】

```js
// 答:
var year = parseInt(prompt("请输入年份"));

alert(getYear(year));

function getYear(year){
    if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
        return "是闰年";
    }else{
        return "不是闰年";
    }
}

```

4. 写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
```js
// 答:
var arr = [18, 45, 0, 58, 32,59]

console.log(getMax(arr));

function getMax(arr){
    
    var max = arr[0];

    for(var i = 0 ; i < arr.length ; i++){
        max = arr[i] > max ? arr[i] : max;
    }

    return max;
}
```