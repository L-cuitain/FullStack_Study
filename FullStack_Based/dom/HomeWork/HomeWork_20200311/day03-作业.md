# 选择题

1. 下面关于获取表单的value值正确的写法是（C）
```html
 <input type="text" value="我是表单">
```
 A、document.querySelector('input').innerText

 B、document.querySelector('input').innerHTML

 C、document.querySelector('input').value

 D、document.querySelector('input').style.innerText

2. 在JavaScript中，下面关于表单的事件说法错误的是( C )

 A、onfocus是当获取到焦点时触发

 B、onblur是当表单失去焦点时触发

 C、onclick这个事件，表单元素是不具备的

 D、oninput是当用户在表单中输入值时触发


3. 要完成禁用按钮效果，补充1.处代码（C）

```js
<button id="btn">禁用文本框</button>

<input type="text" id="txt" value="你好">

<script>
var oBtn = document.getElementById('btn');

var oTxt = document.getElementById('txt');

oBtn.onclick = function () {

1.补充代码

}

</script>
```

A、oTxt.disabled = “”
B、oTxt.disabled = true	 
C、oTxt.disabled = "disabled" 
D、oTxt.disabled = false

4. 下面对于JavaScript中的复选框(checkbox)的说法不正确的是：(A)

A、如果需将一个复选框选中，可以将复选框的selected属性设为true

B、如果需将一个复选框选中，可以将复选框的checked属性设为true

C、如果需将一个复选框选中，可以将复选框的checked属性设为"true"

D、如果需将一个复选框选中，可以将复选框的checked属性设为checked


5. 	在JavaScript中，下面代码表示获取到文本框的值，则下列选项中验证文本框为空的条件表达式不正确的是 (  C  )
```js
var usrName = document.getElementById("txtName").value;
```

A、usrName ==""

B、usrName.length<=0

C、usrName=""

D、usrName.length==0


# 简答题

第1题. 操作表单元素常用属性有哪些，分别说明作用是什么？
```js
// value: 表单输入字段的初始值
// checked: 表单预选中选项
// type: 表单类型
// disabled: 规定是否禁止输入字段
// selected: 预定义选项
// readonly: 字段只读
```
第2题. 操作元素显示和隐藏的方式有哪些?
```js
// 元素.style.display = "block/none"
// 元素.style.visibility = "visible/hidden"
// 元素.style.width/height = "0"
```



# 编程题

需求1. 实现隔行变色的效果(效果在附件):
- 页面中有一个按钮和一个ul,ul里面有10个li元素
- 点击按钮，实现10个li的隔行变色效果，奇数行是红色，偶数行是黄色
- 鼠标经过li元素上面，当前的这个li就是绿色，鼠标离开这个li，这个li显示原来的颜色
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        window.onload = function () {

            let aLi = document.querySelector('ul').querySelectorAll('li');

            let oBtn = document.querySelector('button');

            oBtn.onclick = function () {
                for (let i = 0; i < aLi.length; i++) {

                    if (i % 2 == 0) {
                        aLi[i].style.backgroundColor = "yellow";

                        aLi[i].onmouseout = function () {
                            aLi[i].style.backgroundColor = "yellow";
                        }

                    } else {
                        aLi[i].style.backgroundColor = "red";

                        aLi[i].onmouseout = function () {
                            aLi[i].style.backgroundColor = "red";
                        }
                    }
                }
            }

            for (let i = 0; i < aLi.length; i++) {

                aLi[i].onmouseover = function () {
                    aLi[i].style.backgroundColor = "green";
                }

                aLi[i].onmouseout = function () {
                    aLi[i].style.backgroundColor = "";
                }
            }
        }
    </script>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <button>按钮</button>
</body>

</html>
```

需求2. 简单js表单校验效果(素材和效果在附件里面)：布局和功能都需要自己完成
- 具体需求请看word里面。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,body{
            width: 100%;
            height: 100%;
        }

        h2{
            float: left;
            margin: 0;
            padding: 2px 5px 0 0;
            font-size: 14px;
            font-weight: initial;
            font-family:fantasy;
        }

        input{
            width: 160px;
            height: 13px;
            font-size: 13px;
            color: #bebebe;
        }

        span{
            font-size: 13px;
            color: #a9b7cf;
        }

        .color1{
            color: red;
        }

        .color2{
            color: green;
        }

        .color3{
            border:1px solid red;
        }

        .color4{
            border:1px solid green;
        }

        
    </style>
</head>
<script>
    window.onload = function () {

        let oIpt = document.querySelector('input');
        let oSpan = document.querySelector('span');
        let oImg = document.querySelector('img');

        oIpt.onblur = function(){

            let num = Number(oIpt.value);

            if(num >= 0 && num <= 100){
                oImg.src = "./img/right.png";
                oIpt.className = "color4";
                oSpan.className = "color2";
                oSpan.innerHTML = "输入成绩正确";
                
            }else if(num > 100){
                oImg.src = "./img/error.png";
                oIpt.className = "color3";
                oSpan.className = "color1";
                oSpan.innerHTML = "成绩不能超出100";
            }else if(num < 0){
                oImg.src = "./img/error.png";
                oIpt.className = "color3";
                oSpan.className = "color1";
                oSpan.innerHTML = "成绩不能小于0";
            }else{
                oImg.src = "./img/error.png";
                oIpt.className = "color3";
                oSpan.className = "color1";
                oSpan.innerHTML = "请您输入数字";
            }
        }
    }
</script>
<body>
    <h2>您的成绩: </h2><input type="text" placeholder="请输入分数"> <img src="" alt=""><span>请输入您的成绩</span>
</body>

</html>
```

