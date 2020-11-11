//47.猴子偷桃  第一天吃一半+1个，第二天吃剩下的一半+1个，以后都吃剩下的一半+1个 到第10天只剩一个了 问第一天摘了多少桃子？

var lastNum = 1;
var total = 0;

for(var day = 10 ; day > 0 ; day--){
    lastNum = (lastNum+1)*2;
    total = lastNum;
}

console.log("第一天摘了"+total+"个");