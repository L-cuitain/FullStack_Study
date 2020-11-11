//31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3

var count = 0;

for(var i = 101 ; i < 200 ; i++){

    var ge = i % 10;
    var shi = i / 10 % 10;
    var bai = i / 100 % 10;

    var gee = parseInt(ge);
    var shii = parseInt(shi);
    var baii = parseInt(bai);

    if(gee == 3){
        count++;
    }
    if(shii == 3){
        count++;
    }
    if(baii == 3){
        count++;
    }
}

console.log(count);