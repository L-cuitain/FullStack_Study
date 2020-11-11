//48.控制台输出：计算 1+1/2!+1/3!+1/4!+...1/20!的和

var sum = 0;
var num = 1;

var i = 1;
var n = 20;

while(i <= n){
    sum = sum + num;
        i = i+1;
        num = num*(1.0/i);
}

console.log(sum);