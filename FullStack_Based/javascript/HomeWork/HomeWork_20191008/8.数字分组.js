//8.	有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？有多少个，有哪些三位数？


//定义三个变量  初始值都为0
var num1 = 0;
var num2 = 0;
var num3 = 0;

//定义 计数器  统计有多少个三位数
var count = 0;

//遍历三层循环  范围在1-4内
for(num1 = 1 ; num1 < 5 ; num1++){
    for(num2 = 1 ; num2 < 5 ; num2++){
        for(num3 = 1 ; num3 < 5 ; num3++){
            //判断如果 num1 不等于 num2  并且 num1 不等于 num3 并且 num2 不等于 num3
            if((num1 != num2) && (num1 != num3) && (num2 != num3)){
                //打印这个三位数
                console.log(num1+""+num2+""+num3);
                //计数器自增
                count++;
            } 
        }
    }
}

console.log("有"+count+"个三位数");