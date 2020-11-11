//window js顶级对象
//global node的顶级对象

let count = 1;

globalThis.setTimeout(() => {
    console.log('滑稽');
}, 3000);

global.setInterval(() => {

    if(count == 100){
        global.clearInterval();
    }

    count++;
    console.log(count); 
},2000)

