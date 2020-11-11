//2.求1-100之间所有偶数的和，以及偶数的个数

//定义变量 sum  保存1到100的偶数和
var sum = 0;

//定义变量 count  保存1到100之间偶数的个数
var count = 0;

//遍历1到100
for(let i = 1 ; i <= 100 ; i++){
    if(i % 2 == 0){
        sum += i;
        count++;
    }
}

//打印sum 与 count
console.log("1到100之间偶数的和为: "+sum);
console.log("1到100之间偶数的个数为: "+count);

