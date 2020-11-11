# 简答题

1. 请简述ajax请求的时候get 和post方式的区别?
```js
//get请求不需要添加请求头  post请求需要添加请求头
//get请求在请求地址直接获取请求参数  post请求需要中间价来获取post请求的参数
```

2. ajax都有哪些优点和缺点？

```js
//优点:异步请求响应快 页面无刷新 数据局部更新 按需取数据 减少冗余请求和服务器负担
//缺点:异步回调问题 this指向问题 对搜索引擎的支持比较弱
```
3. 简述ajax的工作原理?

```js
//ajax相当于在用户和服务器之间加一个中间层 使用户操作与服务器响应异步化 只有确定需要从服务器读取新数据时由ajax向服务器提交请求
```
4. readyState的值有哪些,分别代表什么意思?
```js
//0:初始化 XMLHttpRequest对象还没有完成初始化
//1:载入 XMLHttpRequest对象开始发送请求
//2:载入完成 XMLHttpRequest对象的请求发送完成
//3:解析 XMLHttpRequest对象开始读取服务器的响应
//4:完成 XMLHttpRequest对象读取服务器响应结束
```

# 编程题

1题: 实现看笑话功能

```js

- 请求地址：https://autumnfish.cn/api/joke
- 请求方法：get

1. 点击页面中的"点我看笑话"按钮,`.joke-text`盒子中就会出现获取到的笑话

```

2题: 实现用户注册功能
```js

用户验证
- 请求地址：https://autumnfish.cn/api/user/check
- 请求方法：post
- 请求参数：username

1. 文本框失去焦点事件
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变为: 验证中...
4. 调用用户验证接口
5. 数据返回之后设置内容到类名为.info的盒子内

用户注册
- 请求地址：https://autumnfish.cn/api/user/register
- 请求方法：post
- 请求参数：username

1. 点击注册按钮
2. 获取文本框的value值
3. 类名为.info的盒子内容就会变成: 注册中...
4. 调用用户注册接口
5. 数据返回之后设置内容到类名为.info的盒子内

```