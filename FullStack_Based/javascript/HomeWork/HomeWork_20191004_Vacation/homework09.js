//39.输出1加到100（去掉3的倍数）的和

var sum = 0;

for(var i = 1 ; i <= 100 ; i++){
     if(i % 3 != 0){
        sum += i;
     }
}

console.log(sum);