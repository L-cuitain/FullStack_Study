//43.用for循环求2+22+222+2222+22222的和

var num = 2
var str = "";
var sum = 0;

for(var i = 1 ; i <= 5 ; i++){
    str += num;     //""+"2" --> "2"        "2"+"2" --> "22"
    
    sum += parseInt(str);
}

console.log(sum);
