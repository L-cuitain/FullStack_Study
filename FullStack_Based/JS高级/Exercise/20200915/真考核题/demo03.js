console.log("阶乘结果为: "+getSum(9));


function getSum(num){
    let ji = 1;
    let sum = 0;

    for(let i = 1 ; i < num ; i++){
        ji *= i;
        console.log(ji);
        sum += ji;
    }

    return sum;
}