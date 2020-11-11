//1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"

//定义字符串
var str = "abcdefgh";

//定义新字符串  保存 反转后的字符串
var newStr = "";

//倒序遍历字符串  
for(var i = str.length - 1 ; i >= 0 ; i--){
    //将倒序遍历的字符 添加到新字符串中
    newStr += str[i];
}

//打印新字符串
console.log(newStr);
