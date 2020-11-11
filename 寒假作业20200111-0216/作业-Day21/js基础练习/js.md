
## js简答题

1. 说一说你知道的Math对象（至少5个，不包括随机数）

    答:
    Math.floor()    //对数进行下舍入
    Math.round()   //把数四舍五入为最接近的整数
    Math.abs()      //返回数的绝对值
    Math.max(a,b)    //返回 a 和 b 中的最高值
    Math.sqrt()      //返回数的平方根


2. 随机数的默认输出范围是多少？

    答:
    0 到 1


3. 根据所学，写两个公式分别表示【两个数之间的随机数，不含最大值】【两个数之间的随机数，含最大值】

    答:

    生成 [min,max]的随机数

    不含最大值:
    Math.ceil(Math.random()*(max-min)+min);

    含最大值:
    Math.ceil(Math.random()*(max-min+1)+min);


4. 根据所学，写两个不同的公式都表示【两个数之间的随机整数，包括最大值】

    答:
    1)
    Math.ceil(Math.random()*(max-min+1)+min);

    2)
    min+Math.ceil(Math.random()*(max-min)+1);

## js编程题

1. 求 30 到 50 之间的随机整数 [包括30 和 50]
```js
// 答:
var num = Math.ceil(Math.random()*(50-30+1)+30);

alert(num);

```


2. 随机产生一个十六进制的颜色值 ,格式：#9ab353
```js

// 答:
function getColor(){

    var arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var str = "#";

    for(var i = 0 ; i < 6 ; i++){

        str += arr[Math.floor(Math.random()*16)];
    }

    return str;
}


console.log(getColor());

```


3. 产生5个20到30之间的随机整数[包括20和30]，并且通过Math方法，求出这5个数中的最大值和最小值
```js
// 答:
var num1 = Math.ceil(Math.random()*(30-20)+20);
var num2 = Math.ceil(Math.random()*(30-20)+20);
var num3 = Math.ceil(Math.random()*(30-20)+20);
var num4 = Math.ceil(Math.random()*(30-20)+20);
var num5 = Math.ceil(Math.random()*(30-20)+20);

console.log(Math.max(num1,num2,num3,num4,num5));

```


4. 判断任意三个数组成的是否是直角三角形，(组成直角三角形的条件是，最大边的平方 = 其他2个边的平方的和),要求使用Math.pow()求出某个数的平方
```js
// 答:

var num1 = parseInt(prompt("请输入三角形第一条边"));
var num2 = parseInt(prompt("请输入三角形第二条边"));
var num3 = parseInt(prompt("请输入三角形第三条边"));

alert(getSquare(num1,num2,num3));


function getSquare(num1,num2,num3){

    var num1s = Math.pow(num1,2);
    var num2s = Math.pow(num2,2);
    var num3s = Math.pow(num3,2);

    //判断 三角形两边之和大于第三边
    if(num1s+num2s == num3s || num1s+num3s == num2s || num2s+num3s == num1s){
        return "可以构成直角三角形"
    }else{
        return "不能构成直角三角形"
    }
}
```