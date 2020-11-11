//5.求1!+2!+3!+...+20!的和

//定义变量 num  计算阶乘
var num = 1;

//定义变量 sum  计算阶乘和
var sum = 0;

//循环遍历 1 到 20
for(let i = 1 ; i <= 20 ; i++){
    num *= i;
    sum += num;
}

//打印sum
console.log(sum);
