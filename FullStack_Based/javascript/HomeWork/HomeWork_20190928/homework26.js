//26. 100以内7的倍数的总和

var count = 0;

for (let index = 0; index <= 100; index++) {
    
    if(index % 7 == 0){
        count+=index;
    }
}

console.log(count);