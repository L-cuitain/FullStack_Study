//5.打印九九乘法表

//创建循环嵌套
for(let i = 1 ; i <= 10 ; i++){
    
    //定义空字符串 str  保存九九乘法表格式
    var str = "";

    for(let j = 1 ; j <= i ; j++){
        str += i + " * " + j + " = " + i*j+"     ";
    }
    console.log(str);
}