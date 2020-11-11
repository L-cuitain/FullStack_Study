//62.把1-100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1-10的和为一组，输出来，11-20的和为一组输出来，依次类推

var count = 0;

var sum = 0;
for(var i = 1 ; i <= 100 ; i++){
    
    count++;

    sum += i;
    if(count == 10){

        console.log(sum);
        sum = 0;
        count = 0;
    }
}