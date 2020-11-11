//6. 写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】

//分析:
//获取 年份
//创建方法  将 年份值 传入方法中
//在方法中 判断 年份值  是否能被4整除且不能被100整除，或者能被400整
//如果能  则返回字符串  是闰年
//如果不能  则返回字符串  不是闰年
//调用方法  获取字符串  打印



//步骤:

//获取年份
var date = new Date();
var year = Number(date.getFullYear());


//调用方法
console.log(getRunYear(year));



//创建方法  传递 year 到方法中
function getRunYear(year){

    //判断 year 能被4整除且不能被100整除，或者能被400整除
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        //如果能 则返回 是闰年
        return "是闰年";
    }else{
        //如果不能 则返回  不是闰年
        return "不是闰年";
    }
}  
