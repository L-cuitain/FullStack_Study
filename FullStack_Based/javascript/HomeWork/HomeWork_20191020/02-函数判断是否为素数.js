//2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)

//分析:
//创建方法  将变量传入方法中
//创建循环  从 2 开始 到 变量 结束
//如果其中有一个能 整除 num的数
//就返回 false
//如果这其中没有能 整除 num的数
//就返回  true



//步骤:
//定义变量 num
var num = 3;

//调用方法
console.log(Snum(num));


//创建方法  将 num 当作参数
function Snum(num){

    //创建循环 到num
    for(var i = 2 ; i < num ; i++){
        //判断如果有 能整除 num 的 元素  就返回false
        if(num % i == 0){
            return false;
        }
    }
    //否则 返回 true
    return true;

}