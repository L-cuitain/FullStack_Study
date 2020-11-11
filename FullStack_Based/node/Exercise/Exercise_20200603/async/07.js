const fs = require('fs');

//async  可以将一个函数变成异步函数
async function p1(){
    return 'p1';
}

// console.log(p1());
console.log(Promise.prototype);


async function p2(){
    return 'p2';
}

async function p3(){
    return 'p3';
}

async function run(){
    //如果函数为异步函数  用async时 需要用await
    //等待一个执行完毕  再执行下一个
    let r1 = p1();
    let r2 = await p2();
    let r3 = await p3();

    console.log(r1,r2,r3);
}

//被async修饰为异步函数
run();
console.log(Promise.length);
console.log(Promise);



