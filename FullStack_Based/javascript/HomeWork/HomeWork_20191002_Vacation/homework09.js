//19.判断一个整数，属于哪个范围：大于0；小于0；等于0，如果输入的不是数字，则输出，“输入的数值有误”

var num = "123";

if(typeof num == "number"){

    if(num > 0){
        console.log("这个数大于0");
    }
    if(num < 0){
        console.log("这个数小于0");
    }
    if(num == 0){
        console.log("这个数等于0");
    }
}else{
    console.log("输入的数值有误");
}