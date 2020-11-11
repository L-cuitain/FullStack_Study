//8. 去掉字符串两端和中间的空格，var str = '   ab  cd    ';

//定义字符串
var str = '   ab  cd    ';

//循环遍历字符串  删除空格
for(var i = 0 ; i < str.length ; i++){

    str = str.replace(" ","");
}

console.log(str);
