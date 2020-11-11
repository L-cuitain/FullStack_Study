//4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 

var num = 3.14;
var temp = parseInt(num);
if(temp == num){
    console.log('是整数');
}else{
    console.log('不是整数');
    
}