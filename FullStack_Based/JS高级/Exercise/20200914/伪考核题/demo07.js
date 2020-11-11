console.log(getHui(120));

function getHui(num){
    
    let newNum = '';

    for(let i = num.toString().length-1 ; i >= 0  ; i--){
        newNum += num.toString()[i];
    }

    if(newNum === num.toString()){
        return true;
    }

    return false;
}

