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

//对象转json
//JSON.stringify(对象或数组)

let objJson = JSON.stringify(obj);
console.log(objJson);


let arr = ['a','b','c'];

console.log(JSON.stringify(arr));