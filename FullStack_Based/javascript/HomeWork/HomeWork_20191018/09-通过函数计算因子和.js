//9. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）


//分析:
//创建方法 将变量存入 方法中
//定义变量  获取因子和  遍历循环  从 1 到 方法传递的参数
//判断有多少能被整除的数 赋值给因子和变量
//返回因子和
//打印




//步骤:

//创建变量 num
var num = 6;

//调用方法
console.log(num+"的因子和为: "+getNum(num));



//创建方法
function getNum(num){

    //创建sum 记录因子和 
    var sum = 0;

    //创建for 循环  1 到 num
    for(var i = 1 ; i <= num ; i++){
        //如果 num 能被  i 整除
        if(num % i == 0){

            console.log(i);
            

            //将 i 赋值给 sum
            sum += i;   
            
        }
    }

    return sum;
}