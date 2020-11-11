//42.求出1-1/2+1/3-1/4…..-1/100的和（拔高题）

var sum = 0;
var flag = 1;

for(var i = 1 ; i <= 100 ; i++){
    sum += flag / i;
    flag = -flag;
}

console.log(sum);