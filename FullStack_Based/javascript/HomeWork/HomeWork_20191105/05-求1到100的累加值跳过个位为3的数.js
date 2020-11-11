//5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】

//定义变量 sum  保存累加值
var sum = 0;

//遍历1到100
for(let i = 1 ; i <= 100 ; i++){
    //求出个位数
    var ge = i % 10 ;

    //判断个位数 是否为3
    if(ge == 3){
        //是  就跳过
        continue;
    }else{
        //不是 sum累加和
        sum += i;
    }
}

//打印sum
console.log(sum);
