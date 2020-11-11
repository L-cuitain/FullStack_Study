## js简答题

1. 定义Map字典的语法格式是什么？

    答:
    var map = new Map();

2. 定义Set集合的语法格式是什么？

    答:
    var set = new Set();

3. Set集合的特点有哪些？

    答:
    存入集合的元素没有重复
    没有索引
    存入集合的顺序和取出集合的顺序不一致


4. Set集合的打印结果和Array的打印结果有什么不同？

    答:
    Set集合会将结果先进行去重 后 再打印出去重后的元素


5. 什么是 `json` ？作用是什么？优点有什么？

    答:
    使用ajax进行前后台数据交换
    移动端与服务端的数据交换

    在语法的层面上，JSON与其他格式的区别是在于分隔数据的字符 相对于XML，它更加易读

## js编程题

1. 使用Set集合对下面数组去重

    1) [1,1,2,2,3,3,4,4,5,5]
    2) [true,'66',null,true,66,null,88,'set',88]
    3) [1,[0],1,[0],1,[0]]
   
```js
// 答:

1)
var arr = [1,1,2,2,3,3,4,4,5,5];

var set = new Set(arr);

console.log(set);


2)
var arr = [true,'66',null,true,66,null,88,'set',88];

var set = new Set(arr);

console.log(set);

3)
var arr = [1,[0],1,[0],1,[0]];

var set = new Set(arr);

console.log(set);

```

2. 定义2个数组，let arrA = [1,2,3,3]; let arrB = [2,4,5,6]求2个数组的并集，交集
```js
// 答:
let arrA = [1,2,3,3];
let arrB = [2,4,5,6];

//并集
var arrC = arrA.concat(arrB);

//交集
let arrD = arrA.filter(v => arrB.includes(v));
console.log(arrD);
```


3. 操作字符串 let str = 'AaBbCcDdEe'
  
    1) 输出str字符串中所有的大写字母
    2) 查看字符串是否有'Ff'，有返回对应下标(索引)，没有返回false
    3) 使用两种方式截取字符串'bCcD'
```js
// 答:
1)
let str = 'AaBbCcDdEe';

for(var i = 0 ; i < str.length ; i++){
    if(str[i] == str[i].toUpperCase()){
        console.log(str[i]);
    }
}

2)
console.log(str.indexOf('Ff'));

3)
for(var i = 0 ; i < str.length ; i++){
    if(str[i] == 'b'){
        console.log(str.substr(i,4));
    }
}


for(var i = 0 ; i < str.length ; i++){
    if(str[i] == 'b'){
        console.log(str.slice(i,i+4));
    }
}


```

4. 操作字符串 let str = 'hello-word'
    1) 将str字符串中的h和w替换成对应的大写字母
    2) 在 1)的基础上使该字符串变成数组['Hello','Word']
    3) 再将 2)中的数组转成字符串'Hello_Word'
```js
// 答:
1)
let str = 'hello-word'
var s = str.replace('h',"H").replace('w','W');
console.log(s);

2)
var arr = s.split("-");
console.log(arr);

3)
var ss = arr.join('_');
console.log(ss);

```



