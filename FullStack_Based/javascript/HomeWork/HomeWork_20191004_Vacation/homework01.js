//30.	 求200到300之间所有奇数的和

var sum = 0;

for(var i = 200 ; i <= 300 ; i++){
    if(i % 3 == 0){
        sum+=i;
    }
}

console.log(sum);