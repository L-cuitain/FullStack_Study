//4. var str= 'qweqweoeqweroqweqweodfsfdo'
// 1)查找字符串中所有字母 'o'出现的位置
// 2)把字符串中的所有字母'o'替换成 '-';

var str= 'qweqweoeqweroqweqweodfsfdo';

//遍历字符串  获取单个字符
for(var i = 0 ; i < str.length ; i++){
    //判断字符 是否为o
    if(str[i] == 'o'){
        //为o就打印索引
        console.log(i);
        //将 o 替换为 -
        str = str.replace('o','-');
    }
}

console.log(str);

