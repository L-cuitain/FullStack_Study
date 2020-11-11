//2.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    f1: function () {
      console.log(this.user); // 二狗子
    }
  }
a.f1();


//创建 对象 a  调用 对象a 的属性 f1
//因为 f1 为函数  在f1函数中打印 this.user  而这里的this作为对象的方法所调用 会调用 对象 a 的user属性
//所以打印值为 二狗子