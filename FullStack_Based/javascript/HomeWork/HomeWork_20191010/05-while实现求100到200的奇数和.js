//5.  求100到200之间所有的奇数的和（while实现）


//定义变量 sum  求奇数和 初始值为0
var sum = 0;


//定义while循环初始表达式 i  初始值为100
var i = 100;

//创建while循环 当 i 小于等于 200 时
while(i <= 200){

    //判断 如果 i 余 3 等于 0时
    if(i % 3 == 0){
        //将 i 赋值给 sum
        sum += i;
    }
    //步进表达式 i++
    i++;
}

//打印 sum
console.log(sum);