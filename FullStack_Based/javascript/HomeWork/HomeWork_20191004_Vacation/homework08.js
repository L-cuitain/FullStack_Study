//38.使用for循环语句计算3+6+9+12+……+99的结果

var sum = 0;

for(i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0){
        sum += i;
    }
}

console.log(sum);