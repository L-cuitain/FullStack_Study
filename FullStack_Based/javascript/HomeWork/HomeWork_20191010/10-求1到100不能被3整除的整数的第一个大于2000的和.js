//10. 求1到100所有不能被3整除的整数的第一个大于2000的和


//定义变量 sum  求和
var sum = 0;

//创建for循环 遍历 1-100
for(var i = 1 ; i <= 100 ; i++){

    //判断 如果 i 不能被3整除
    if(i % 3 != 0){
        //将 i 赋值 给 sum
        sum += i;
        //如果 sum 大于 2000
        if(sum > 2000){
            //打印 sum
            console.log(sum);
            //终止循环
            break;
        }
    }
}