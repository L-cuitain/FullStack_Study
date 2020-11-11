//49.控制台输出：求1 x 2 x 3 x 4 x ... x 19 x 20的结果

var sum = 1;

for(var i = 1 ; i <= 20 ; i++){
    sum *= i;
}

console.log(sum);