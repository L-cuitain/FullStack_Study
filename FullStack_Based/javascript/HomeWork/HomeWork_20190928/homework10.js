//10. 获取当前时间，判断今年是否为闰年。两种方法判断 
//1）判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除

var date = new Date();

var year = date.getFullYear();

if(year % 400 == 0){
    console.log("是闰年");
}else if(year % 4 == 0 && !year % 100 == 0){
    console.log("是闰年");
}else{
    console.log("是平年");
}

