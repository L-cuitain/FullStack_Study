//52. 求出100-1000中，各个数字之和是12,这样的三位数有多少个，在控制台打印出来

var count = 0;

for(var i = 100 ; i <= 1000 ; i++){

    var ge = i % 10;
    var shi = i / 10 % 10;
    var bai = i / 100 % 10;

    if(parseInt(ge+shi+bai) == 12){
        count++;
        console.log(i);
    }
}

console.log("这样的三位数有: "+count+"个");