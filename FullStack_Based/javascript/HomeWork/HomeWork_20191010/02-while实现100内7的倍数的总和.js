//2. 100以内7的倍数的总和(while实现)


//定义while循环初始表达式 i  初始值为1
var i = 1;
//定义变量 sum 求总和 初始值为0
var sum = 0;

//创建 while循环  当 i 满足 小于等于 100时
while(i <= 100){
    
    //判断 如果 i 余 7 等于0 的时候
    if(i % 7 == 0){
        //将 i 赋值给 sum
        sum += i;
    }
    //步进表达式 i++
    i++;
}

//打印sum
console.log(sum);