# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
//POST请求 : 发送的数据在请求体中 相对比较安全
//GET请求 : 发送的数据在地址栏显示  不安全
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
//GET请求
//实例化XMLHttpRequest对象
let xhr = new XMLHttpRequest();
//设置请求方式 请求地址
xhr.open('GET','/请求地址?key=value&key1=value1');
//发送请求数据
xhr.send(null);
//监听并处理响应
xhr.onreadystatechange = () => {
    //判断状态码
    if(xhr.status == 4 && xhr.readyState == 200){
        //处理响应后的内容
    }
}

//POST请求
//实例化XMLHttpRequest对象
let xhr = new XMLHttpRequest();
//设置请求方式 请求地址
xhr.open('GET','/请求地址');
//设置请求头
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//发送请求数据
xhr.send(data);
//监听并处理响应
xhr.onreadystatechange = () => {
    //判断状态码
    if(xhr.status == 4 && xhr.readyState == 200){
        //处理响应后的内容
    }
}

```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
$.ajax({
    //设置请求方式
    type : 'GET' || 'POST',
    //设置请求地址
    url : '/地址',
    //设置请求发送的数据
    data : '数据',
    //设置请求成功后的回调函数
    success : () => {
        //请求成功后需要处理的内容
    }
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
//引入art-template模板
//设置新的js标签 
//<javascript type="text/template" id="">
//    <标签>{{想要添加内容的变量名}}</标签>
//</javascript>

//在其他js标签中
//let 变量名 = template('template设置的id',{
//  想要添加内容的变量名 : 变量值
//})
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
//输出 {{value}}
//判断 {{if value}} {{/if}}
//循环 {{each tartget}}{{/each}}
```

6. 客户端和服务端的通信过程是怎么样的？
```js
//客户端获取到用户所填写的数据 
//通过ajax将请求 地址 和 数据 发送给后台
//后台接收到ajax发送的请求 并对数据进行处理
//处理完毕 后台将处理结果响应给ajax
//ajax接收到响应后将结果进行进一步处理 并在客户端显示 
```

7. express怎么开放静态资源?
```js
//通过 express.static('浏览器地址栏进一步输入的地址',path.join(__dirname,'静态资源目录'))
```

8. express怎么读文件和写文件?
```js
//通过fs模块的方法
//读文件
//fs.readFile('/路径','编码格式',回调函数);
//写文件
//fs.writeFile('/路径','写入的内容',回调函数)
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
//JSON字符串转换JSON对象
//通过语法: JSON.parse(要转换的字符串)
//JSON对象转换JSON字符串
//通过语法: JSON.stringify(要转换的对象);
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
//action 请求发送的路径
//method 请求方式
//target 页面打开的方式
```

11. form表单怎么序列化获取值表单的值？
```js
//将表单的input标签中添加name属性
//在Javascript标签中通过 document.querySelector('form标签选择器').serialize(); 获取
```

12. form表单怎么阻止默认的提交行为?
```js
//将表单中的input标签type=submit属性修改为button
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
//在login.html的Javascript标签中添加
window.localtion.href = '/index.html';
```