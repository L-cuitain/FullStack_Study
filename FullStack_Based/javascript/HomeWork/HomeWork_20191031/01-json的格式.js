// json一共有两种环境  写在js中  写在json文件中


//1.js中 json是字符串

//1.1 对象形式的json

let obj = {
    name : "zhangsan",
    age : 18,
    bro : {
        g : 'a',
        d : 'b',
        j : 'c',
        m : 'd'
    }
}

//符合对象格式的字符串
//虽然json是对象格式的  但是键必须用双引号 如果值是字符串 也必须用双引号

let objJson = '{"name":"张三","age":18}'

//还是符合数组格式的字符串
//let arr = ['a','b','c'];

let arrJson = '["a","b","c"]';

