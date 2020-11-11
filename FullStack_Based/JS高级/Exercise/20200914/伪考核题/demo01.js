let num = getNum(234);
console.log(num);

function getNum(n){

    let numArr = n.toString().split('');
    let max = 0;
    let rule = 1;
    for(let i = 1 ; i <= numArr.length ; i++){
        let num = numArr[numArr.length-i];
        // console.log(num);
        max += parseInt(num);
        rule *= parseInt(num);
    }

    let cha = rule-max;
    return cha;
}





