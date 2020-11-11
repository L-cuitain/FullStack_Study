//12.利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
// *                      *********
// ***                   *******
// *****                *****
// *******             ***      
// *********          *  



for(var i = 0 ; i < 5 ; i++){

    var str = "";
   for(var j = 0 ; j <= (2*i-1)+1 ; j++){
        str+="*"
   }
   console.log(str);
}

console.log("\n");

for(var i = 4 ; i >= 0 ; i--){

    var str = "";
    for(var j = 0 ; j <= (2*i-1)+1 ; j++){
        str+="*"
   }
   console.log(str);

}