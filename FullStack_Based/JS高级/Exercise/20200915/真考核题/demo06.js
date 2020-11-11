let s = 'https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,';

console.log(getArr(s));

function getArr(s){
    let newStr = s.split('?');
    newStr = newStr[1].split('&');
    newStr[newStr.length-1] = newStr[newStr.length-1].slice(0,-1);


    let arr = [];
    let user = {};
    for(let i = 0 ; i < newStr.length ; i++){
        arr.push(newStr[i].split('='));
        user[arr[i][0]] = arr[i][1];
    }

    return user;
}

