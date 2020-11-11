
# 选择题

1. 有关DOM操作的说法正确的是(C)

   A、children、firstElementChild、lastElementChild都是包含元素节点以及文本节点的

   B、innerHTML获取的仅仅是文本内容

   C、可以使用nodeType属性来判断节点的类型

   D、nodeType属性返回值是一个字符串

2. 下面的HTML代码中，如果已经获取到p元素，其DOM对象名为obj，则有关DOM遍历的说法正确的是(A)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div></div>
    <div></div>
    <p><span><span></p>
    <strong></strong>
</body>
</html>
```

  A、 如果只想获取p的父元素节点，可以使用obj.parentNode

  B、 如果只想获取p的上一个兄弟元素节点，可以使用obj.previousSibling

  C、 如果只想获取p的下一个兄弟元素节点，可以使用obj.nextSibling

  D、 如果只想获取p的所有子元素节点，可以使用obj.childNodes


3. 下面的HTML代码中,只获取ul里面的所有li元素，其中ul已经获取到，下面说法不正确的是(C)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <ul>
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     <li>5</li>
   </ul>
    <script>
     var ulobj = document.querySelector('ul')
  </script>
</body>
</html>
```

  A、ulobj.getElementsByTagName('li')

  B、ulobj.children

  C、ulobj.childNodes

  C、ulobj.querySelectorAll('li')


4. A.appendChild(B)这一句代码表示（  D  ）

	A、把A插入到B的内部开始
 
	B、把A插入到B的内部末尾
 
	C、把B插入到A的内部开始
 
	D、把B插入到A的内部末尾
 

5. 下面关于DOM节点操作说法不正确的是(D)

 A、document.creatElement("A")是创建一个名为A的新元素节点

 B、ANode.appendChlid(BNode)是把B节点追加到A节点的子元素的末尾 
 
 C、ANode.removeChild(BNode)是删除A节点下的子节点B

 D、PNode.insertBefore(ANode,BNode)是在PNode的父盒子中将A节点插到B节点之后 


# 简答题

第1题. js的节点创建有几种方式，分别是什么？

```js
//1. 元素.innerHTML

//2. document.write()

//3. document.createElement()
``` 

第2题. 在js中查找节点的操作有哪些？

```js
//查找 所有子节点
//1. 元素.childNodes  可以获取元素的所有节点
//2. 元素.children   可以获取元素的节点

//查找 第一个子节点
//1. 元素.firstChild   获取第一个节点
//2. 元素.firstElementChild   获取元素节点
//3. 元素.children[0]

//查找 最后一个子节点
//1. 元素.lastChild  获取最后一个节点
//2. 元素.lastElementChild  获取元素节点
//3. 元素.children[元素.children.length-1]


//查找 兄弟节点
//查找 上一个兄弟节点
//1. 元素.previousElementSibling
//2. 元素.previouSibing

//查找 下一个兄弟节点
//1. 元素.nextElementSibling
//2. 元素.nextSibling
```

第3题. 在js中操作DOM的节点的方式有哪些，语法分别是什么(节点的创建，插入，删除，获取，题换，复制)？

```js

// 节点创建
//1. 元素.innerHTML
//2. document.write()
//3. document.createElement()



//节点插入
//1. 父元素.appendChild()
//2. 父元素.insertBefore(newChild,refChild)



//节点删除
// 父元素.removeChild(子节点)



//节点获取
//获取 所有子节点
//1. 元素.childNodes  可以获取元素的所有节点
//2. 元素.children   可以获取元素的节点

//获取 第一个子节点
//1. 元素.firstChild   获取第一个节点
//2. 元素.firstElementChild   获取元素节点
//3. 元素.children[0]

//获取 最后一个子节点
//1. 元素.lastChild  获取最后一个节点
//2. 元素.lastElementChild  获取元素节点
//3. 元素.children[元素.children.length-1]

//获取 兄弟节点
//获取 上一个兄弟节点
//1. 元素.previousElementSibling
//2. 元素.previouSibing

//获取 下一个兄弟节点
//1. 元素.nextElementSibling
//2. 元素.nextSibling



//节点替换
// 父元素.replaceChild(新元素,旧元素);



//节点复制
//自身元素.cloneNode()
```

# 编程题

需求1. 实现qq留言板的效果(附件:qq留言板和gif):
- 只需要完成功能，页面已经给定
- 用户在留言框内输入内容，点击发表，就会在留言区域内添加一条留言的内容
- 留言的内容格式在“留言区”已经给定，发表留言的格式请根据这个创建
- 如果留言框的内容为空，那么弹出“您还没有输入任何内容”，就不会添加空的内容在留言区
- 注意:“留言区”的时间是当前的日期时间

需求2. 实现许愿墙效果(附件:许愿墙和gif):
- 只需要完成功能，页面已经给定
- 功能一：根据给定的数据，在页面中创建对应的许愿签，(页面中已经给定一个许愿签的格式，参照那个格式创建许愿签)，参照完之后将页面的这个许愿签删除了
- 功能二：许愿签的位置是随机的
- 功能三：点击右上角的小x，会将对应的这个许愿签关闭
- 功能四：双击许愿签的头部，也会将对应的这个许愿签关闭