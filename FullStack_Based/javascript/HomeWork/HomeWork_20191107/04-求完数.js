//4.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出100以内的所有完数

//循环遍历 1 到 100
for (var index = 0; index <= 100; index++) {
    //定义变量 sum 
    var sum = 0;

    //创建内部循环  遍历 1到 index
    for(var j = 1; j<index; j++){
        //判断 如果 index 余 j 为0
        if(index % j == 0){
            //计算和
            sum += j;
        }
    }
    //如果这个和 与 index 相等
    if(sum == index){
        //打印这个数
        console.log(index);
    }
}