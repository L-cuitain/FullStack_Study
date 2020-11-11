// 需求: 计算1+1/4+1/9+….+1/400，并且在控制台输出结果

//创建变量sum 保存和值
var sum = 0;

//创建 for 循环  遍历 1 - 20 
for(var i = 1 ; i <= 20 ; i++){

    //将 1 / i的平方 的值 赋值给 sum
    sum += 1 / (i*i);
    
}

//打印 sum
console.log(sum);