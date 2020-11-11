## js解答题

1. 字符串的特性是什么？
   
    答:
    不可变性，字符串的值是不可变的


2. 使用字符串方法返回指定下标(索引) 对应的字符和不使用字符串方法返回字符的方式分别是什么？

    答:
    字符串方法:
    var num = str.indexOf('s');

    不使用字符串方法:
    function getIndex(str){

        for(var i = 0 ; i < str.length ; i++){
            if(str[i] === 's'){
                return i;
            }
        }

        return 0;
    }

    var num = getIndex(str);


3. 查看某个字符串是否存在于字符串中的某个方法是？其返回值为-1或者0分别代表的是什么？

    答:
    indexOf()

    返回值为-1指字符串中没有指定的字符串
    返回值为0指字符串中指定字符串的第一个字符位置为0


4. 截取字符的三种方法是什么，分别有什么不同？

    答:
    1)
    slice() :用于提取字符串的某个部分

    2)
    substring() :方法从 from 位置截取到 to 位置，to 可选，没有设置时默认到末尾

    3)
    substr(): 在字符串中截取从开始下标开始的指定数目的字符



## js编程题

1. 将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
```js
// 答:
var str="abcdefgh";

var s = ""

for(var i = str.length-1 ; i >= 0 ; i--){
    s += str[i];
}

console.log(s);

```

2. 截取字符串 “我爱中华人民共和国” 中 '中华' 输出到控制台中
```js
var str = "我爱中华人民共和国";

var s = str.subString(2,4);

console.log(s);
```

3. 获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}
```js
// 答:
var s = "https://www.test.com/login?name=zs&pwd=123";

    var obj = {};

    var str = s.split("?")[1].split("&");

    for(var i = 0 ; i < str.length ; i++){
        var message = str[i].split("=");

        obj[message[0]] = message[1];
    }

    console.log(obj);
```

4. var str= 'qweqweoeqweroqweqweodfsfdo' 1)查找字符串中所有字母 'o'出现的位置 2)把字符串中的所有字母'o'替换成 '-';
```js
// 答:
var str= "qweqweoeqweroqweqweodfsfdo";

for(var i = 0 ; i < str.length ; i++){
    if(str[i] === 'o'){
        console.log(i);
        str = str.replace('o','-');
    }
}

console.log(str);

```
