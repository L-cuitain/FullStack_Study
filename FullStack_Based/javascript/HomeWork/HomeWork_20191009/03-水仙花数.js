// 需求: 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。

//创建 for 循环  遍历 三位数 i
for(var i = 100 ; i <= 1000 ; i++){

    //获取 i 的 个位数
    var ge = i % 10;
    //获取 i 的 十位数
    var shi =parseInt(i /10 % 10);
    //获取 i 的 百位数
    var bai = parseInt(i / 100);

    //如果 个位数的三次方  加上  十位数的三次方  加上  百位数的三次方 等于这个数
    if(ge * ge * ge + shi * shi * shi + bai * bai * bai == i){
        //打印这个数
        console.log(i);
    }
}