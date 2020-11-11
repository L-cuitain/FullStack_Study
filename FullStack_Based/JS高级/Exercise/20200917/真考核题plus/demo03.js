// 封装一个函数，把一个时间日期对象转成yyyy-mm-dd HH:mm:ss   
// 输出样式 2020-9-16 20:17:23
let date = new Date();

function getNow(date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

console.log(getNow(date));