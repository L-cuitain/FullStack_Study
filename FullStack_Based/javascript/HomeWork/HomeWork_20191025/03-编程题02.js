//2、打印图形
// 55555
// 4444
// 333
// 22
// 1
// 22
// 333
// 4444
// 55555


//创建循环 从 5 - 1 倒序遍历
for(var i = 5 ; i >= 1 ; i--){
    
    var str = "";
    for(var j = 1 ; j <= i ; j++){
        str += i;
    }

    console.log(str);
}

//创建循环 从 2 - 5 正序遍历
for(var i = 2 ; i <= 5 ; i++){
    var str = "";
    for(var j = 1 ; j <= i ; j++){
        str += i;
    }

    console.log(str);
    
}