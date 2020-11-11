//14.给下面的对象添加一个属性color,值是一个数组['red','black','white'], 在添加一个属性bark,值是一个方法
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
  }

  //添加一个属性color  值为一个数组
  myDog.color = ['red','black','white'];
  //添加一个bark  值是一个方法
  myDog.bark = function(){console.log("不知道打印啥");}


  console.log(myDog);
  