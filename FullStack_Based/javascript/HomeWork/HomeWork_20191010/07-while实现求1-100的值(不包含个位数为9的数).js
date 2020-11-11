//7.  求1到100之间的累加值，其中不包含个位数为9的数字（while实现）

//定义变量 sum  求累加值 初始值为0
var sum = 0;

//定义while循环初始表达式 i  初始值为1
var i = 1;

//创建while循环 当 i 小于等于 100 时
while(i <= 100){
    
    //判断 如果 i 余 10 不等于 9 
    if(i % 10 != 9){
        //将 i 赋值给 sum
        sum += i;
        console.log(i);
    }

    
    //步进表达式 i++
    i++;
}

//打印sum
console.log(sum);