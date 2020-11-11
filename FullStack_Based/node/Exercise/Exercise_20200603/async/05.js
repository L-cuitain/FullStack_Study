const fs = require('fs');

//Promise是ES(js)中的内置对象
/**
 * resolve 成功时的回调
 * reject 失败时的回调
 */
let promise = new Promise((resolve,reject) => {
    fs.readFile('./data/01.txt','utf8',(err,data) => {
        if(err != null){
            reject(err);
        }else{
            resolve(data);
        }
    })
})

//获取结果
promise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

