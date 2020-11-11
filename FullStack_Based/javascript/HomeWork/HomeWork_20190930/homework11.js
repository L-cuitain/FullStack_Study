//11.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
// 55555
// 4444
// 333
// 22
// 1
// 22
// 333
// 4444
// 55555


for(var i = 5 ; i > 1 ; i--){

    var str = "";
    for(var j = 1 ; j <= i ; j++){
        str += i;
       
    }
    console.log(str);
}
for(var i = 1 ; i <= 5 ; i++){

    var str = "";
    for(var j = 1 ; j <= i ; j++){
        str += i;
       
    }
    console.log(str);
}
