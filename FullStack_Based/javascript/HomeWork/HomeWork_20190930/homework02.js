//2. 1-100之间所有偶数的和

var sum = 0;

for(var i = 1 ; i <= 100 ; i++){
    if(i % 2 == 0){
        sum+=i;
    }
}

console.log("所有偶数的和为: "+sum);