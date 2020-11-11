## js解答题

1. 系统构造函数创建对象的格式

    答:
    var person = new Person();
    person.name = "张三";
    person.age = 18;
    person.sex = "男";

     


2. 工厂函数创建对象的格式

    答:
    function Student(name,sex,grade){                                                         
    var o = new Object();
    o.name = name;
    o.sex = sex;
    o.grade = grade;

    return o;
}

    var s1 = Student('Claiyre','famale',1);



3. 自定义构造函数创建对象的格式

    答:
    function Person(name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
    }

    var person = Person();

4. 构造函数创建对象有什么好处？

    答:
    可以多次调用函数创建 简化代码


## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 要求分别使用 `4` 种方式创建下面要求的对象
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得 `年龄` 这个属性删除
 - 将对象的 `身高` 的值题换成"180cm"
 - 给对象添加属性 `学号` ，通过两种方式

 ```js
 // 答:
 1)
 var person = new Person();
 person.name = "张三";
 person.age = 18;
 person.sex = "男";
 person.height = "180cm";
 person.eat = function(){
     console.log("吃饭");
 }
 person.run = function(){
     console.log("跑步");
 }


 2)
 var person = {
    name : "张三",
    age : 18,
    sex : "男",
    height : "180cm",
    eat : function(){
        console.log("吃饭");
    },
    run : function(){
        console.log("跑步");
    }
 }

 3)
 function Person(name,age,sex,height){                                                         
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sex = sex;
    o.height = height;
    o.eat = function(){
        console.log("吃饭");
    };
    o.run = function(){
        console.log("跑步");
    };

    return o;
}

    var s1 = Person('张三',18,'男',"180cm");


 4)
 function Person(name,age,age,height){
        this.name=name;
        this.age=age;
        this.age=age;
        this.height=height;
        this.eat=function(){
            console.log("吃饭");
        };
        this.run=function(){
            console.log("吃饭");
        };
    }

    var person = Person();


  for(var index in person){
      consle.log(index+""+person[index]);
  }

  console.log(person);

  delete person.age;

  person.height = "180cm";

 1)
  person.id = "001";

 2)
  function Person(id) {
	   this.id = id;
  }

  var person = new Person("001");

 ````

 2. 编写一个程序，让用户输入一个5位数，判断该 五位数是否为 `回文数`。（判断第一位和第五位是否一样，第二位和第四位是否一样）如果用户输入的不是5位数提示错误并继续输入直到用户输入一个5位数

    ```js
    // 答:
    var b = true;

    while(b){

        var num = prompt("请输入一个5位数");

        if(num[0] == num[num.length-1] && num[1] == num[num.length-2]){
            alert("是回文数");
            b = false;
        }else{
            alert("不是回文数 请重新输入");
        }
    }

    ```

3. 求10! 的结果（提示：10! = 1x2x3x4x5x6x7x8x9x10）

    ```js
    // 答:
    var sum = 1;

    for(var i = 1 ; i <= 10 ; i++){
        sum *= i;
    }

    console.log(sum);

    ```

4. 操作数组 var arr = [2,3,4,5,6] 

    ```js
    1) 将1放到数组中2的前面
    2) 删除数组中的6
    3) 将数组的所有剩余元素求和
    4) 在 3) 的基础上通过length求出数组元素和的平均值
    5) 用方法判断数组中是否有6这个元素，有返回索引，无则返回false

    // 答:
    1)
    arr.unshift(1);

    2)
    arr.pop();

    3)
    var sum = 0;

    for(var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }

    console.log(sum);

    4)
    var sum = 0;

    for(var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }

    var avg = parseInt(sum / arr.length);

    console.log(avg);

    console.log(sum);

    5)
    function getIndex(arr){

        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i] == 6){
                return i;
            }
        }

        return false;
    }

    console.log(getIndex(arr));

    ```