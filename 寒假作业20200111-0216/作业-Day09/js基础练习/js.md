## js编程题

 1. 根据要求完成下面操作

    ```js
    1) var a = 1, b = 1
       if (a > b) {
           console.log(a > b);
       } else {
           console.log(a > b);
       }
    // 将上述代码转换为三元运算符，并说明if和else里面的相同代码块有什么不同？

    //答:
    var a = 1 , b = 1
    var change = a > b ? console.log(a > b) : console.log(a > b) ;
    console.log(change);

    //if里面代码块只有在if语句条件成立后才会执行
    //else里面代码块在if条件不成立时执行

    2) var a = 10,
          b = 11,
          c = [0]
      if (a > b || c) {
          console.log(a > b || c);
      } else {
          console.log(false);
      }
    // 将上述代码转换为三元运算符，并解释说明打印结果

    //答:
    var a = 10,
          b = 11,
          c = [0]
    var change = a > b || c ? console.log(a > b || c) : console.log(false) ;
    console.log(change);

    //打印结果为
    //[ 0 ]  undefined
    

    ```

2. 使用 `if分支` 实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js

    var num =  parseInt(prompt("请输入成绩"));

    if(num >=  90){
        alert("A");
    }else if(num >= 80 && num < 90){
        alert("B");
    }else if(num >= 70 && num < 80){
        alert("C");
    }else if(num >= 60 && num < 70){
        alert("D");
    }else if(num < 60){
        alert("E");
    }
    ```

3. 使用 `switch` 分支实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js
    var score = parseInt(prompt("请输入成绩"));

    switch(score){

    case score >= 90:
        alert("A");

    case score >= 80 && score < 90:
        alert("B");

    case score >= 70 && score < 80:
        alert("C");
            
    case score >= 60 && score < 70:
        alert("D");

    case score < 60:
        alert("E");    

    }
    ```

4. 使用`if分支`通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），

    ```js
    var num =  parseInt(prompt("请输入年龄"));

    if(num >=  60){
        alert("老年");
    }else if(num >= 40 && num < 60){
        alert("中年");
    }else if(num >= 24 && num < 40){
        alert("青年");
    }else if(num >= 14 && num < 24){
        alert("青少年");
    }else if(num < 14){
        alert("儿童");
    }
    ```


5. 获取当前时间，判断今年是否为闰年(判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除)
   ```js
    var date  = new Date();

    var now = date.toLocaleDateString();

    if(now % 400 == 0 || now % 4 == 0 && now % 100 != 0){
        console.log("是闰年");
    }else{
        console.log("不是闰年");
    }

    ```