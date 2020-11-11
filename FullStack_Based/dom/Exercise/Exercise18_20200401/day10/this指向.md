# this指向
1.下列代码控制台打印出的值分别是多少？
```js
function f1(){
    var user = '二狗子';
    alert(this.user);  // undefined
    alert(this);   // window
  }

 f1();
```

2.下列代码控制台打印出的值分别是多少？
```js
var a = {
    user: '二狗子',
    f1: function () {
      alert(this.user); // 二狗子
    }
  }
a.f1();

```

3.下列代码控制台打印出的值分别是多少？
```js
var a = {
    user: '二狗子',
    b: {
      user: '大傻子',
      f1: function () {
        alert(this.user);  // 大傻子
      }
    }
  }
  a.b.f1();

```

4.下列代码控制台打印出的值分别是多少？
```js
var a = {
    user: '二狗子',
    b: {
      f1: function () {
        alert(this.user);  // undefined
      }
    }
  }
  a.b.f1(); 
```

5.下列代码控制台打印出的值分别是多少？
```js
function f1(){
    this.user = "二狗子";
  }
  var a = new f1();
  alert(a.user);  //二狗子
```

6. 下列代码控制台打印出的值分别是多少？
```js
var a=1;
function printA(){
  console.log(this.a);
}
var obj={
  a:2,
  foo:printA,
  bar:function(){
    printA();
  }
}
obj.foo(); //  2
obj.bar(); // 1

```

7. 下列代码控制台打印出的值分别是多少？
```js
var  color = ""green";
var test = {
 color:'blue',
 getColor:function(){
    var color = "red";
     console.log(this.color);
  }
}
var getColor = test.getColor;
getColor();  // red
test.getColor(); // blue

```

8. 下列代码控制台打印出的值分别是多少？
```js
var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
        this.x = this.x + x; 
        this.y = this.y + y;
        console.log(this.x); // 1
        console.log(this.y); // 1
    } 
}; 
point.moveTo(1, 1)


```