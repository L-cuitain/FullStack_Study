//50.控制台输出：从100到500所有自然数中不含数字4的自然数共有多少个？

var count = 0;

for(var i = 100 ; i <= 500 ; i++){
    
    var ge = i % 10;
    var shi = i / 10 % 10;
    var bai = i /100 % 10;

    if(ge != 4 && shi != 4 && bai != 4){
        count ++;
    }
}

console.log(count);