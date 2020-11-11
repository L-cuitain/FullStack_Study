//10. 利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成） （拔高题）

// ---*
// --***
// -*****
// *******
// -*****
// --***
// ---*

var row = 4;
for(var i = 1 ; i <= row ; i++){
    var str = "";
    for(var j = i ; j < row ; j++){
        str += "-";
    }
    for(var k = 1 ; k <= 2*i-1 ; k++){
        str += "*";
    }
    console.log(str);
}
for(var i = row-1 ; i > 0 ; i--){
    var str = "";
    for(var j = i ; j < row ; j++){
        str += "-"
    }
    for(var k = 1 ; k <= 2*i-1 ; k++){
        str += "*";
    }
    console.log(str);
}