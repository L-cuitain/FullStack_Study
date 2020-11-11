//34.求任意一个数字的约数有哪些

var num = 15;

for(var i = 1 ; i <= num ; i++){
    
    if(num % i == 0){
        console.log(i);
    }
}
