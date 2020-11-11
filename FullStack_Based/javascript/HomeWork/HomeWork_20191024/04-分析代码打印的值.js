// 4.下列代码控制台打印出的值分别是多少？
var a = {
    user: '二狗子',
    b: {
      f1: function () {
        console.log(this.user);  // undefined
      }
    }
  }
  a.b.f1(); 


//执行步骤:
//调用对象 a 的 对象 b 中的 函数 f1
//在 函数 f1 中 打印 this.user  因为 this 可以作为对象方法的调用  所以会调用 上级对象 b 的 user属性
//因为 对象 b 并没有定义 user属性  所以最终会打印undefined
