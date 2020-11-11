var str = "yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";

console.log(getLong(str));

function getLong(str){
    str = str.split(' ');

    let max = str[0].length;
    for(let i = 0 ; i < str.length ; i++){
        max = str[0].length > str[i].length ? str[0].length : str[i].length;
    }

    let maxStr = '';
    for(let j = 0 ; j < str.length ; j++){
        if(str[j].length == max){
            maxStr = str[j];
        }
    }
    return `最多的字符串为 ${maxStr}  有${max}个字符`;
}