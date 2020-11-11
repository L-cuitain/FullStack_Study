// 需求: 你要做的是统计出100到200之间的整数一共有多少个3。 解释：例如101中没有3；103中有一个3；133中有两个3。

//定义 变量count  充当计数器
var count = 0;

//循环遍历 i 
for(var i = 100 ; i <= 200 ; i++){
    
    //获取 i 的 个位数
    var ge = i % 10;
    //获取 i 的 十位数
    var shi =parseInt(i /10 % 10);
    //获取 i 的 百位数
    var bai = parseInt(i / 100);

    //判断 这个数  个位  十位  百位  是否等于3
    if(ge == 3 || shi == 3 || bai == 3){
        //如果有  count 自增
        count++;
    }
}

//打印count数
console.log(count);