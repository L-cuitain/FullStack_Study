//2.求整数1～100的累加值，但要求跳过所有个位为4的数

//创建变量 sum 求累加值
var count = 0;

//遍历1到100
for(let i = 1 ; i <= 100 ; i++){

    //获取个位数
    var ge = i % 10;

    //判断个位数是否为4
    if(ge == 4){
        continue;
    }else{
        count += i;
    }
}

//打印count
console.log(count);
