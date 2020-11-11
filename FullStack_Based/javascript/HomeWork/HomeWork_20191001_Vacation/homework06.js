//6.	写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“abcde”。

var arr = [];
    for (var i = 1; i <= 100; i ++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            arr.push('Fizz');
        }
        if (i % 3 !== 0 && i % 5 === 0) {
            arr.push('Buzz');
        }
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('abcde');
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            arr.push(i.toString());
        }
    } 
    
    for(var i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }