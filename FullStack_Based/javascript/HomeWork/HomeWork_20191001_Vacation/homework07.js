//7.求两个正数的最大公约数

var a = 12;
var b = 16;

var num = a>b ? a:b;

var bigger = 0;
for(var i = 1 ; i <= num ; i++){
    if(a % i == 0 && b % i == 0){
        bigger = i;
        bigger = bigger > i ? bigger : i
    }
}

console.log(bigger);