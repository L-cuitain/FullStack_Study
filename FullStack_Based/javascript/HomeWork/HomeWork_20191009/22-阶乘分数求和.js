// 需求:控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和

//创建变量  获取每层阶乘
var num = 1;

//创建变量 sum 存入 阶乘的和
var sum = 0;

//创建循环  遍历 1 - 20
for(var i = 1 ; i <= 20 ; i++){
    //获取每层阶乘
    num = num * i;
    //将 1 / num 赋值 给 sum
    sum += 1 / num;
}

//打印sum
console.log(sum);