//运用promise依次读取 txt文件
const fs = require('fs');

function p1(){
    return new Promise((resolve,reject) => {
        fs.readFile('./data/01.txt','utf8',(err,data) => {
            if(err != null){
                reject(err)
            }else{
                resolve(data);
            }
        });
    })
}

function p2(){
    return new Promise((resolve,reject) => {
        fs.readFile('./data/01.txt','utf8',(err,data) => {
            if(err != null){
                reject(err)
            }else{
                resolve(data);
            }
        });
    })
}

p1().then(data => {
    console.log(data);
    return p2();
}).then(data => {
    console.log(data);
})

