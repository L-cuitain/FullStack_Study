//6. var str="hello world 378nihao",分别统计出字符串中的英文字母、数字、空格的个数

//定义字符串
var str="hello world 378nihao"

//定义对象  
var obj = {};

//遍历字符串  找出所有字符
for(var i = 0 ; i < str.length ; i++){

    if(obj[str[i]]){
        obj[str[i]]++;
    }else{
        obj[str[i]] = 1;
    }
}

console.log(obj);
