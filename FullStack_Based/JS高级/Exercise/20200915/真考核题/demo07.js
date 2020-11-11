let date = new Date();
let hour = date.getHours();
console.log();
console.log(getMessage(hour));

function getMessage(hour){
    if(hour >= 8 && hour < 12){
        return '早上好 , 欢迎登录系统';
    }else if(hour >= 12 && hour < 14){
        return '中午好 , 该休息了';
    }else if(hour >= 14 && hour < 18){
        return '下午好 ! 欢迎登录系统';
    }else if(hour >= 19 && hour < 23){
        return '晚上好 , 该休息了';
    }else{
        return '时间错误';
    }
}
