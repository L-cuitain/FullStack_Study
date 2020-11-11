//68. 计算1-100能被3整除，但是不能被5整除的数，在控制台打印出来，并且统计出个数

var count = 0;

for(var i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0 && i % 5 != 0){
        count++;
        console.log(i);
    }
}

console.log("个数为: "+count);