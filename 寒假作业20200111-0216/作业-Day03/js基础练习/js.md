## js解答题

1. 如何通过字面量方式创建对象，对象都是有什么组成的？

   答:
   var person = {};

   对象由 属性和属性值组成

2. 如何使用new关键字创建对象?

    答:
    var person = new Object();


3. 说明对象的基本操作（读取，修改，添加，删除）

    答;
    例:
    var person = {
        name : "张三",
    };

    读取:console.log(person);
    修改:
    person.name = "李四";
    console.log(person);
    添加:
    person.age = 19;
    console.log(person);
    删除:
    delete person.name;



4. 创建对象有几种方式，分别是什么？写语法

    答:
    第一种：Object构造函数创建
    var Person = new Object();
    Person.name = 'Nike';
    Person.age = 29;

    第二种：使用对象字面量表示法
    var Person = {
     name:'Nike';
    age:29;  
    }

    第三种：使用工厂模式创建对象
    function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
    alert(this.name); 
    };
    return o; 
    }
    var person1 = createPerson('Nike',29,'teacher');
    var person2 = createPerson('Arvin',20,'student');


    第四种:使用构造函数创建对象
    function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
    alert(this.name);
    }; 
    }
    var person1 = new Person('Nike',29,'teacher');
    var person2 = new Person('Arvin',20,'student');


## js编程题

1. 字面量创建一个对象：【姓名:可乐 年龄:18 性别:你猜 爱好:Rush B】

   ```js
   var person = {
       name : "可乐",
       age : 18,
       sex : "你猜",
       hobby : "Rush B"
   };
   ```

2. 使用new关键字创建一个对象：【姓名:雪碧 年龄:19 性别:未知 爱好:Rush A】

    ```js
    var Person = new Object();
    Person.name = '闸总';
    Person.age = 19;
    Person.sex = "未知";
    Person.hobby = "我带你们打";
    ```

3. 根据步骤操作对象

    ```js
    1) 定义一个对象：【姓名:柠檬 年龄:17】
    2) 输出该对象的姓名
    3) 修改该对象年龄为：未成年
    4) 添加对象属性：性别为女，爱好为画画，职业为学生
    5) 输出该对象
    6) 删除该对象的姓名
    7) 输出该对象

    //答:
    var person = {
        name : "柠檬",
        age : 17,
    };

    console.log(person.name);
    person.age = "未成年";
    person.sex = "女";
    person.hobby = "画画";
    person.work = "学生";
    console.log(person);
    delete person.name;
    console.log(person);
    ```

4. 使用三种方式给对象var obj = {name:"杨"}添加属性age为30

    ```js
    `参考答案：
    1) obj.age = 30; 
    2) obj['age'] = 30; 
    3) var age = "age"; obj[age] = 30;`
    ```