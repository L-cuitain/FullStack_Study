## js简答题

1. 常量的命名规则和变量是否一样？常量命名中的字母一般采用什么形式的？

   答:
   变量名使用大小写混合的格式
   常量使用由全部大写的多个字组成的说明型名称

   常量命名中字母一般采用大写形式

2. 常量和变量的区别是什么

   答:
   常量值固定不变
   变量值是可以改变的


3. 说出你目前学过的数据类型有哪些（中英文）

   答:
   Number(数字类型)
   boolean(布尔类型)
   string(字符串类型)
   undefined(未定义类型)
   null(空类型)
   object(对象类)
   symbol(原始数据类型)

4. 反斜杠 `\` 和反引号 ` 的作用分别是什么，有什么共同点？

   答:
   反斜杠 `\`可以转换为字面上的字符串
   反引号 `可以当作普通字符串使用 也可以用来定义多行字符串 或者在字符串中嵌入变量

   操作类型都是字符串


## js编程题
1. 请将变量a与变量b的变量值互换位置

   ```js
   var a = 10, b = 20; // 互换使得b=10，a=20
   
   var num = a;
   a = b;
   b = num;
   console.log(a);
   console.log(b);

   ```



2. 根据要求完成下面填空

   ```js
    1) var yinhao = `'""`; 
       console.log(yinhao); // 输出结果为【'""】
    2) var yinhao = /'""/;
      console.log(yinhao); // 输出结果为【'""】
    3) var num = 99;
      console.log(`就差`+num+`分我就满分了`)； // 利用num变量完完成填空


   ```

3. 分别使用反斜杠和反引号使下面结果成功输出且三行显示

   ```js
   //使用反斜杠：
   console.log("古体诗是诗歌体裁。\r从诗句的字数看，有所谓四言诗、五言诗和七言诗等。\r四言是四个字一句，五言是五个字一句，七言是七个字一句。")
   //使用反引号：
   console.log(`古体诗是诗歌体裁。
   从诗句的字数看，有所谓四言诗、五言诗和七言诗等。
   四言是四个字一句，五言是五个字一句，七言是七个字一句。`)
   ```

4. 请利用代码证明你所说的遇到undefined的情况

   ```js
   1) var num;
      console.log(num);

   2) var person = {};

      console.log(person.name);
         
   3) var arr = [1,2,3];
      
      console.log(arr[4]);     
   
   4) function getSum(a,b){
        var sum = a+b;
   }

      console.log(getSum(1,2));
   ```