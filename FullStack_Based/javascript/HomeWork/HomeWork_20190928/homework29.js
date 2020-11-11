//29.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出1000以内的所有完数。

for (var index = 0; index <= 1000; index++) {
    
    var sum = 0;

    for(var j = 1; j<index; j++){

        if(index % j == 0){
            sum += j;
        }
    }

    if(sum == index){
        console.log(index);
    }
}