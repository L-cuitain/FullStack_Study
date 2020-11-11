console.log(getSum('(4->5->2)+(5->6->4)'));

function getSum(str){
    str = str.split('+');
        
    // console.log(str);

    let num1 = cutStr(str[0]);
    let num2 = cutStr(str[1]);

    let resNum = parseInt(num1)+parseInt(num2);

    let recNum = reciprocal(resNum);

    let s = '';
    for(let i = 0 ; i < recNum.length ; i++){
        s += recNum[i]+'->';
    }

    s = s.slice(0,-2);

    return s;
}


function cutStr(str){
    str = str.split('->');
    str[0] = str[0].replace('(','');
    str[str.length-1] = str[str.length-1].replace(')','');
    // console.log(str);

    let newStr = '';
    for(let i = str.length-1 ; i >= 0 ; i--){
        newStr += str[i];
    }

    return newStr;
}


function reciprocal(num){
    let newNum = '';

    for(let i = num.toString().length-1 ; i >= 0 ; i--){
        // console.log(resNum.toString()[i]);
        newNum += num.toString()[i];
    }

    return newNum;
}