## js简答题

1. 对象组成都是采用键值对的形式，我们是否能把函数放到对象的属性值当中？该怎么做？

    答:
    能

    例:
    var person = {
        hoddy : function(){
            console.log("hoddy");
        }
    }


2. 能够使用什么方法遍历对象？如何遍历打印对象的属性名和属性值？

    答:
    使用for in 遍历

    例:
    for(var index in obj){
        console.log('key=', index, 'value=', obj[index]);
    }

3. 遍历对象的方法能否也拿来遍历数组？为什么？

    答:
    不能 遍历数组下标为数字  而遍历对象为字符串


4. 我们知道给对象添加属性有三种方式，那么删除对象的属性能否也有三种方式或者更多呢？请说说你认为删除对象属性的方式有哪些

    答:
    1)
    delete 对象名.属性

    2)
    delete 对象名[属性]


## js编程题

1. 定义一个人的对象, 属性有姓名，年龄，性别，身高，方法有：能吃饭，能跑步，
 - 遍历对象，将对象的属性和值输出来，并且调用其中的一个方法，将结果在控制台输出
 - 将对象得`年龄`这个属性删除
 - 将对象的`身高`的值题换成"180cm"
 - 给对象添加属性`学号`，通过两种方式

 ```js
 // 答:
 var person = {
     name : "张三",
     age: 12,
     sex: "男",
     height: 123,
     eat: function(){
         console.log("吃饭");
     },
     run: function(){
         console.log("跑步");
     }
 }

 for(var index in person){
     console.log(index+""+person[index]);
 }

 console.log(person.eat());

 delete person.age;

 person.height = "180cm";

 person.id = "001";


function Person(id) {
	this.id = id;
}

var person = new Person("001");

 ````


2. 定义一个车的对象，属性有颜色，大小，型号，方法有：能行驶
 - 获取对象的`颜色`，在控制台输出
 - 调用方法，在控制台输出格式要求`马路上正在行驶的是一辆xx色的xx型号的车`
 
 ```js
    // 答:   
    var car = {
     color : "黄色",
     size: 120,
     model: "宝马",
     run: function(){
         console.log("马路上正在行驶的是一辆"+car.color+"色的"+car.model+"型号的车");
     }
 }

 console.log(car.color);

 console.log(car.run());


 ```


 3. 【冒泡排序】对下面的数组进行从小到大排序，不允许使用sort

```js
    var arr = [4,2,7,5,3,1,6,9,8]

    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    console.log(arr);

 ```

4. 【冒泡排序】对下面的数组进行从大到小排序，不允许使用sort

```js
    var arr = [4,2,7,5,3,1,6,9,8]

    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    console.log(arr);
```