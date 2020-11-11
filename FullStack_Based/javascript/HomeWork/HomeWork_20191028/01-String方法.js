//charAt(某个字母的索引) 返回的是字符
//语法: 字符串.charAt(某个字母的索引)

var str = "abckdgf";
console.log(str.charAt(2));


//charCodeAt()  获取指定位置处的Ascii码
//语法:字符串.charCodeAt(索引)

var str = "abckdgf";
console.log(str.charCodeAt(6));


//concat() 拼接字符串 , 等效于+ , +更常用
//语法: 字符串.concat(字符串2)


var str1 = "Hello ";
var str2 = "World" ;
console.log(str1.concat(str2));
console.log(str1 + str2);


//indexOf()  查找  某一个字符第一次在字符串内的索引  如果在  返回索引  如果不在 返回-1 空格也算一个字符(全角  半角)

var str = "nice to meet you";
console.log(str.indexOf(" "));


//trim()   去重字符串前后的空格
//语法:  字符串.trim();

var str = "   您好   ";
console.log(str);
console.log(str.trim);


//substr()  从某个位置开始  截取几个字符
//语法:  字符串.substr(索引 , 个数)

var str = "HelloworldSeeyou";
console.log(str.slice(10,16));


//替换字符 replace('被替换的字符','替换为的字符')  它只会替换第一个字符
var str = 'anyandy';
console.log(str.replace('a','b'));


//slice() 从 start 位置  截取到end位置
//语法: 字符串.slice(开始的索引 , 结束的索引)
var str = "Helloworldseeyou";
console.log(str.slice(10,16));





