## js解答题

1. Date对象的语法格式是什么

   答:
   var date = new Date(); 

2. 如何使用Date对象获取当前的 年 月 日  小时 分钟 秒

   答:
   var date = new Date(); 

   console.log(date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒");


3. 请举例说明Date对象自带的8个方法，并且说明方法的作用

   答:
   1)
   getDate(): 从 Date 对象返回一个月中的某一天 (1 ~ 31)

   2)
   getDay(): 从 Date 对象返回一周中的某一天 (0 ~ 6)

   3)
   getMonth(): 从 Date 对象返回月份 (0 ~ 11)

   4)
   getFullYear(): 从 Date 对象以四位数字返回年份

   5)
   getHours(): 返回 Date 对象的小时 (0 ~ 23)

   6)
   getMinutes(): 返回 Date 对象的分钟 (0 ~ 59)

   7)
   getSeconds(): 返回 Date 对象的秒数 (0 ~ 59)

   8)
   getTime(): 返回 1970 年 1 月 1 日至今的毫秒数



## js编程题

1. 将通过new Date() 获取到的时间格式成为`xxx年xxx月xxx日 xx时xx分xx秒`，例如: 2000年1月10日  08时:22分:32秒
```js
// 答:
var date = new Date(); 

console.log(date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日  "+date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒");

```

2. 编写function parseDatetime(var datetime)方法
   功能描述：传入参数的日期对象与当前日期比较：
    - 参数日期比当前日期大，返回”日期不符合要求”。
    - 参数日期比当前日期小，范围小于1分钟：返回“刚刚”；
    - 参数日期比当前日期小，差值范围大于等于1分钟：返回“x分钟之前”；x代表分钟数，
    - 参数日期比当前日期小，差值范围大于等于1小时：返回“x小时之前”；x代表小时数，
    - 参数日期比当前日期小，差值范围大于等于1天：返回“x天之前”；
    - 参数日期比当前日期小，差值范围大于等于7天：返回“x周之前”；
    - 参数日期比当前日期小，差值范围大于等于30天：返回“x月之前”；
    - 参数日期比当前日期小，差值范围大于等于365天：返回“很久之前”。

```js
// 答:

var year = parseInt(prompt("请输入年份"));
var month = parseInt(prompt("请输入月份"));
var day = parseInt(prompt("请输入天数"));
var hour = parseInt(prompt("请输入小时"));
var minutes = parseInt(prompt("请输入分钟"));
var seconds = parseInt(prompt("请输入秒"));

var datetime = new Date(year,month,day,hour,minutes,seconds);


console.log(parseDatetime(datetime));

function parseDatetime(datetime){

    var date = new Date();

   if(datetime.getSeconds() - date.getSeconds() < 60){
       
        return "刚刚";
   
   }else if(datetime.getMinutes() - date.getMinutes() >= 1){

        var nowMinutes = parseInt((datetime.getMinutes() - date.getMinutes()));
    
        return nowMinutes+"分钟之前";
   
   }else if(datetime.getHours() - date.getHours() >= 1){

        var nowHour = parseInt((datetime.getHours() - date.getHours()));
    
        return nowHour+"小时之前";
   
   }else if(datetime.getDate() - date.getDate() >= 1){

        var nowDay = parseInt((datetime.getDate() - date.getDate()));
        
        return nowDay+"天之前";
   
   }else if(datetime.getDate() - date.getDate() >= 7){

        var nowWeek = parseInt((datetime.getDate() - date.getDate()) / 7);
        
        return nowWeek+"周之前";
   
   }else if(datetime.getMonth() - date.getMonth() >= 1){

        var nowMonth = parseInt((datetime.getMonth() - date.getMonth()));
        
        return nowMonth+"月之前";
   
   }else if(datetime.getFullYear() - date.getFullYear() >= 1){
        
        return "很久以前";
   }else if(datetime > date){

       return "日期不符合要求";
   } 
}
```


3. 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。
```js
// 答:
for(var i = 100 ; i < 1000 ; i++){

    var ge = parseInt(i % 10);
    var shi = parseInt(i / 10 % 10);
    var bai = parseInt(i / 100 % 10);

    if(ge*ge*ge + shi*shi*shi + bai*bai*bai == i){
        console.log(i);
    }
} 
 
 ```

4.定义一个1到10之间的数字，让用户猜，用户有3次机会，猜中弹出恭喜并结束程序，猜错重新弹出输入框让用户输入，直到3次机会都用完弹出遗憾并结束程序。

```html
// 答:

var num = Math.ceil(Math.random()*(10-1)+1);

var count = 3;

while(true){

    var getNum = parseInt(prompt("请输入数字"));

    if(getNum != num){
        
        if(count == 0){
            alert("输入错误 您没有机会了");
            break;
        }
     
        alert("输入错误 还有"+count+"次机会");

        count--;
    }else{
        alert("恭喜 输入成功");
        break;
    }
}

    
```