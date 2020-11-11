//4、求出1-1/4+1/3-1/16…..-1/100*100的和。


//步骤:
//定义变量sum  保存和
var sum = 0;
//定义变量flag  初始值为1
var flag = 1;

//循环遍历1到100
for(var i = 1 ; i <= 100 ; i++){
    //求出和
    sum += flag / parseInt(i*i);
    //没求一次和将计算改成减法
    flag = -flag;
}
//打印sum
console.log(sum);