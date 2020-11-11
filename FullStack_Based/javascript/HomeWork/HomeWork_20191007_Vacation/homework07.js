//67.计算1+1/4+1/9+….+1/400，并且在控制台输出结果

var sum = 1;
for(var i = 1 ; i <= 20 ; i++){

    sum += 1/(i*i); 
}

console.log(sum);