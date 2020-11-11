console.log(getNum(120));

function getNum(num) {

    let numArr = num.toString().split('');

    let newNum = '-'
    if(numArr[0] == '-'){
        numArr.shift();
    }else{
        newNum = '';
    }

    for (let i = numArr.length - 1; i >= 0; i--) {

        if (numArr[i] != '0') {
            newNum += numArr[i];
        }
    }

    return newNum;
}