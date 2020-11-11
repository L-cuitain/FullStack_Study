//7. 随机产生一个十六进制的颜色值 ,格式：#90E353


function getColor(){

    //定义数组 储存 0-9 A-F;
    var arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    //定义一个字符串变量
    var str = "#";

    //循环 0 - 6;
    for(var i = 0 ; i < 6 ; i++){

        str += arr[Math.floor(Math.random()*16)];
    }

    return str;
}


console.log(getColor());
