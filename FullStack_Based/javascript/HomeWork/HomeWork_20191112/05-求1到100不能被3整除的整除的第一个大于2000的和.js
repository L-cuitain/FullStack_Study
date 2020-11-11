//5.求1到100所有不能被3整除的整数的第一个大于2000的和

//定义变量sum 储存和
var sum = 0;

//遍历1到100
for(let i = 1 ; i <= 100 ; i++){
    //获取 i 余3 不为 0的数 
    if(i % 3 != 0){
        //sum 加 i
        sum += i;
        //如果sum大于2000
        if(sum >= 2000){
            //打印sum
            console.log(sum);
            //终止循环
            break;
        }
    }
}