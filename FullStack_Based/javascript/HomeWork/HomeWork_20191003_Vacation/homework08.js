//28.利用JavaScript编写程序，定义一个变量num并且赋值,
// 1)如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2)如果 num 能被 3 整除，返回字符串 fizz
// 3)如果 num 能被 5 整除，返回字符串 buzz
// 4)如果num不是 Number 类型，返回 false
// 5)其余情况，返回参数 num

function f(num){

    if(typeof num == "number"){

        if(num % 3 == 0 && num % 5 == 0){
            return "fizzbuzz";
        }else if(num % 3 == 0){
            return "fizz";
        }else if(num % 5 == 0){
            return "buzz";
        }else{
            return num;
        }
    
    }else{
        return false;
    }
}

var v = f(37);
console.log(v);



