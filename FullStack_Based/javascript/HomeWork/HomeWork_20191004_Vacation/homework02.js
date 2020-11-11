//31.	 for循环嵌套打印5行5列的正方形，如图所示(拔高题)

for(var i = 1 ; i <= 5 ; i++){
    
    var str = "";

    for(var j = 1 ; j <= 5 ; j++){

       str += "*  ";
    }
    console.log(str);
}