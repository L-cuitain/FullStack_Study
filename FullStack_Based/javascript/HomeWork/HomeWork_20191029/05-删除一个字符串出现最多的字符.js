//5.删除一个字符串中出现最多的字符, var str="assdfscfwssseee"

var str="assdfscfwssseee";

var obj = {};

//遍历字符串  找出所有字符的个数 并存入对象中
for(var i = 0 ; i < str.length ; i++){
    if(obj[str[i]]){
        obj[str[i]]++;
    }else{
        obj[str[i]] = 1;
    }
}
//定义变量max  存放字符最多的个数
var max = 0;

//遍历对象  统计字符最多的个数
for(var key in obj){
    
    max = max > obj[key] ? max : obj[key];
}

//定义变量maxChar  保存个数最多的字符
var maxChar = "";

//遍历对象  找出个数最多的字符
for(var key in obj){
    if(max == obj[key]){
        maxChar += key;
    }
}

//遍历字符串  删除这个字符
for(var i = 0 ; i < str.length ; i++){

    str = str.replace(maxChar,"")
}

console.log(str);






