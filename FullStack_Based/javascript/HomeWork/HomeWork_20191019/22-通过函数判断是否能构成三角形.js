//22.写一个函数， 传入3 个正数，判断能否构成一个三角形


//分析:
//创建方法  方法中判断 三角形两边之和大于第三边

//步骤:

//创建三个变量  作为三条边
var num1 = 3;
var num2 = 4;
var num3 = 5;


//调用方法
console.log( getSquare(num1,num2,num3));



//创建方法
function getSquare(num1,num2,num3){

    //判断 三角形两边之和大于第三边
    if(num1+num2 > num3 || num1+num3 > num2 || num2+num3 > num1){
        return "可以构成三角形"
    }else{
        return "不能构成三角形"
    }
}
