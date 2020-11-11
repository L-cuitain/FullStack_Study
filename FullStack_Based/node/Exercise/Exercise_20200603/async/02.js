//同步API
// console.log('before');
// console.log('after');


//异步API
//异步有: 定时器 回调函数 事件  ajax  fs.readFile writeFile
console.log('before');
setTimeout(() => {
    console.log('last');
},2000);
console.log('after');



