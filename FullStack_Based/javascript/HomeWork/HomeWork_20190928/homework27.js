//27.求1!+2!+3!+...+10!的和

var sum = 1;
var func = 1;

for (let index = 2; index < 10; index++) {
    func = func*index;
    sum += func;    
}

console.log(sum);