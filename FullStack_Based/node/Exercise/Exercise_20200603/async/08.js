//运用promise 读取 txt 文件
const fs = require('fs');

//这个方法可以返回promise对象
const promisify = require('util').promisify;

//
const readFile = promisify(fs.readFile);

async function run(){
    let r1 = await readFile('./data/01.txt','utf8');
    let r2 = await readFile('./data/02.txt','utf8');

    console.log(r1,r2);
}

run();
