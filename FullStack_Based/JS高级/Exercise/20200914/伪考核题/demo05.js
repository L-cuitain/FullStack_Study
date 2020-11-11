console.log(getStr("We are happy"));

function getStr(s){
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] = ' '){
            s = s.replace(' ','%20');
        }
    }
    return s;
}