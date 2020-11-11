//23. 利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几
var day = 6

var time = 1000%7;

var now = time-6;

if(now <= 0){
    var time = now+7;
 
    if(time == 6){
        console.log("1000天后是星期六");
    }
    if(time == 7){
        console.log("1000天后是星期日");
    }
   
}else{
    console.log("1000天后是星期"+now);
}

