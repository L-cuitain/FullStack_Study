//1. 1-100之间所有数的总和 与 平均值

var sum = 0;

for(var i = 1 ; i <= 100 ; i++){
    sum += i;
}

//求平均值
var avg = sum/100;

console.log("总和为: "+sum);
console.log("平均值为: "+avg);