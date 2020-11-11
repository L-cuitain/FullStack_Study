//8.求两个正数的最小公倍数

var a = 20;
var b = 40;

var num = a>b ? a:b;

var smaller = 0;
for(var i = 1 ; i <= num ; i++){
    if(a % i == 0 && b % i == 0){
        smaller = i;
        smaller = smaller < i ? smaller : i
    }
}

console.log(smaller);