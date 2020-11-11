//7. 写一个函数,  求圆的面积：PI *r *r，圆的周长

//分析:
//创建方法  将 一个变量作为半径 传入 方法中
//在方法中 根据 圆的面积  和   周长公式  求出 圆的面积  和  周长
//返回字符串   打印这个字符串


//步骤:
//创建 变量 当作半径
var r = 10;

//调用方法
console.log(getCly(r));


//创建方法  将半径传入方法中 求圆的面积  和 周长
function getCly(r){

    //创建变量  Π
    const pi = Math.PI;

    //求出面积
    var area = pi * r * r;

    //周长
    var girth = 2 * pi * r;

    var str = "面积为: "+ area +"  周长为: "+girth;

    return str;
}
