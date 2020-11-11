//3.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    b: {
      user: '大傻子',
      f1: function () {
        console.log(this.user);  // 大傻子
      }
    }
  }
  a.b.f1();


//调用 对象 a 中的 b 对象 中的 函数f1
//在函数 f1 内 打印 this.user  因为 this可以作为某个对象方法的调用  所以会调用 上级 对象 b 的user属性
//最后会打印 大傻子