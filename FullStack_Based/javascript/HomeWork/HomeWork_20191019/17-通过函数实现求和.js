//17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21

//分析:
//rest参数
//用于获取多余参数
//在方法中 创建变量  储存参数和值
//for - of 遍历循环 
//将 单个参数 赋值给 变量
//返回变量  打印


//步骤:


//调用方法  打印和值
console.log(add(1,4,2,5,2,4,2,5,3123123));



//创建 add 方法
// function add(...values){
//     //定义 sum  初始值为 0 保存和值
//     var sum = 0;
//     //for - of 循环  遍历values
//     for(var v of values){
//         //将单个元素  赋值给 sum
//         sum += v;
//     }
//     //返回 sum;
//     return sum;
// }


//创建 add 方法
function add(){
    
    var sum = 0;

    for(var i = 0 ; i <arguments.length ; i++){
        
        sum += arguments[i];
    }

    return sum;
}
