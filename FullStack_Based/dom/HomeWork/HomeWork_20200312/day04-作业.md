# 选择题

1. 下列关于传统自定义属性的操作说法错误的是(D)

   A、元素.setAttribute("属性名","值")无返回值，可以实现给元素添加自定义属性

   B、元素.removeAttribute("属性名")会将自定义属性删除

   C、元素.getAttribute("属性名")的返回值是自定义属性的值

   D、元素.setAttribute("属性名","值")只可以实现自定义属性的添加，不能实现自定义属性的修改

2. 关于属性值的获取或设置说法错误的是(C)

    A、 document.getElementById(id).属性=新值

    B、 document.getAttribute(‘属性名’)

    C、 setAttribute()不允许对属性节点值做修改

    D、 document.setAttribute(‘属性名’,'值')

3. 下列通过H5自定义属性获取`my-index`的值正确的写法是(D)
```html
 <div id="dv" data-my-index = "1">我是盒子</div>
 <script>
     var dvObj = document.querySelector('div')

 </script>
```
   A、dvObj.dataset.my-index

   B、dvObj.dataset["my-index"]

   C、dvObj.dataset[myIndex]

   D、dvObj.dataset.myIndex


4. 下列通过H5自定义属性说法不正确的是( A )

  A、元素.dataset.自定义属性名= "值"只能给元素添加一个自定义属性，不能修改自定义属性

  B、delete 元素.dataset.自定义属性名是将对应的自定义属性删除

  C、元素.dataset可以获取某个标签上面的所有自定义属性，返回值是一个对象

  D、元素.dataset.自定义属性，在获取自定义属性的时候需要采用驼峰命名法获取

5. 补充代码，当失去焦点清空input中的value值（B）
```html
  <input type="text" id="search" value="在Google中搜索，或输入网址">
    <script>
    var oInput = document.querySelector('#search');
    oInput.onfocus = function() {
    1.补充代码
    }
    oInput.onblur = function() {
    if (this.value.length == 0) {
    this.value = "在Google中搜索，或输入网址";
    }
    }
    </script>
```

A、 value = "";	 

B、 this.value = "";	 
C、 this.value == "";	 
D、 value =="";	

# 简答题

第1题. 请简述一下排他思想的核心？
```js
// 先清除其他样式  在其中一个样式需要显示时  将这个样式设置显示
```
第2题. 请简述传统自定义属性的相关操作(增加、删除、修改、获取)？
```js
// 增加
// 元素.setAttribute('自定义属性名','属性值')

// 删除
// 元素.removeAttribute('自定义属性名')

// 修改
// 元素.setAttribute('自定义属性名','属性值')

//获取
// 元素.getAttribute('自定义属性名')
```
第3题. 请简述H5自定义属性的语法，和相关的操作(增加、删除、修改、获取)？
```js
// 增加
// 元素.dataset.自定义属性名 = 值

// 删除
// delete 元素.dataset.自定义属性名

// 修改
// 元素.dataset.自定义属性名 = 值

// 获取
// let 变量名 = 元素.dataset.自定义属性名
```


# 编程题

需求1. 突出显示效果实现(素材在附件中):
-  布局和功能都需要自己完成
-  当鼠标移入对应的小方格图片上面，当前的图片高亮显示，其余的图片变暗
-  当鼠标离开整个大方格内，所有的图片都变亮
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            background-color: #000;
        }

        ul {
            margin: 0 auto;
            padding: 0;
            list-style: none;
        }


        ul {
            margin-top: 100px;
            width: 470px;
            height: 256px;
            border: 1px solid #fff;
        }

        li {
            float: left;
            width: 150px;
            height: 120px;
            padding: 5px 0 0 5px;
        }

        li img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<script>
    window.onload = function () {

        //获取ul
        let oUl = document.querySelector('ul');

        //获取 li
        let aLi = oUl.querySelectorAll("li");

        // 给 ul 添加鼠标移入事件
        oUl.onmouseover = function () {

            //获取 li 的集合
            for (let i = 0; i < aLi.length; i++) {

                //为所有 li 设置鼠标移入事件
                aLi[i].onmouseover = function () {

                    //获取 li 的集合
                    for (let j = 0; j < aLi.length; j++) {

                        //获取 每个 li 中的图片  设置图片透明度为 0.5
                        let oImg = aLi[j].querySelector('img');
                        oImg.style.opacity = '0.5';
                    }

                    //获取 每个 li 中的图片  设置图片透明度为 1
                    let oImg = aLi[i].querySelector('img');
                    oImg.style.opacity = '1';
                }

                //为所有 li 设置鼠标移出事件
                aLi[i].onmouseout = function () {
                    //设置图片透明度为 0.5
                    oImg.style.opacity = '0.5';
                }
            }
        }

        //给 ul 添加鼠标移出事件
        oUl.onmouseout = function () {
            //获取 li 的集合
            for (let i = 0; i < aLi.length; i++) {
                
                //获取 li 的集合
                for (let i = 0; i < aLi.length; i++) {

                    //获取 每个 li 中的图片  设置图片透明度为 1
                    let oImg = aLi[i].querySelector('img');
                    oImg.style.opacity = '1';
                }
            }
        }
    }
</script>

<body>
    <ul>
        <li>
            <img src="./images/01.jpg" alt="">
        </li>
        <li>
            <img src="./images/02.jpg" alt="">
        </li>
        <li>
            <img src="./images/03.jpg" alt="">
        </li>
        <li>
            <img src="./images/04.jpg" alt="">
        </li>
        <li>
            <img src="./images/05.jpg" alt="">
        </li>
        <li>
            <img src="./images/06.jpg" alt="">
        </li>
    </ul>

</body>

</html>
```

需求2. 全选、反选、取消全选效果实现(素材在案例中):
- 布局已经给了，直接完成功能就可以
- 勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
- 点击全选按钮，列表中的选项都被选中
- 点击取消全选按钮，列表中的选项都被取消选中
- 点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）
- 点击列表中的复选框(备注：中间那四个复选框)，当列表中的复选框全部选中，上面的全选复选框也选中，反之不选中
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Untitled Document</title>


    <style type="text/css">
        .one {
            background-color: #9bf7d5;
        }

        .two {
            background-color: #f3e99a;
        }

        .over {
            background-color: #ef7125;
        }

        table {
            border: #249bdb 1px solid;
            width: 500px;
            border-collapse: collapse;
        }

        table td {
            border: #249bdb 1px solid;
            padding: 10px;
        }

        table th {
            border: #249bdb 1px solid;
            padding: 10px;
            background-color: rgb(200, 200, 200);
        }
    </style>
</head>

<body>

    <table id="mailtable">
        <tr>
            <th>
                <input type="checkbox" name="all" />全选
            </th>
            <th>
                发件人
            </th>
            <th>
                邮件名称
            </th>
            <th>
                邮件附属信息
            </th>
        </tr>

        <tr class="one">
            <td>
                <input type="checkbox" name="mail" />
            </td>
            <td>
                张三11
            </td>
            <td>
                我是邮件11
            </td>
            <td>
                我是附属信息11
            </td>
        </tr>
        <tr class="two">
            <td>
                <input type="checkbox" name="mail" />
            </td>
            <td>
                张三22
            </td>
            <td>
                我是邮件22
            </td>
            <td>
                我是附属信息22
            </td>
        </tr>
        <tr class="one">
            <td>
                <input type="checkbox" name="mail" />
            </td>
            <td>
                张三33
            </td>
            <td>
                我是邮件33
            </td>
            <td>
                我是附属信息33
            </td>
        </tr>
        <tr class="two">
            <td>
                <input type="checkbox" name="mail" />
            </td>
            <td>
                张三44
            </td>
            <td>
                我是邮件44
            </td>
            <td>
                我是附属信息44
            </td>
        </tr>

        <tr>
            <th>

            </th>
            <th colspan="3" id="chooseBtn">
                <input type="button" value="全选" />
                <input type="button" value="取消全选" />
                <input type="button" value="反选" />

            </th>
        </tr>
    </table>
    <script>
        // 1.勾选全选复选框，列表中的选项都被选中，取消全选复选框的勾选，列表中的选项都被取消选中
        // 2.点击全选按钮，列表中的选项都被选中
        // 3.点击取消全选按钮，列表中的选项都被取消选中
        // 4.点击反选按钮，列表中选项选结果呈相反选中结果（原来选择的都取消选择，原来未选择的都变为选择）

        //获取全选复选框
        let oCheck = document.getElementsByName('all')[0];

        //获取所有 按钮
        let aBtns = document.getElementById('chooseBtn').querySelectorAll('input');

        //获取所有单选框
        let oIpts = document.getElementsByName('mail');


        //为全选复选框添加鼠标点击事件
        oCheck.onclick = function () {

            //循环遍历 单选框 
            for (let i = 0; i < oIpts.length; i++) {

                //让所有单选框 变成 全选复选框状态
                oIpts[i].checked = oCheck.checked;
            }
        }


        //为全选按钮 添加鼠标点击事件
        aBtns[0].onclick = function () {
            //循环遍历 单选框 
            for (let i = 0; i < oIpts.length; i++) {

                //让所有单选框变为选中
                oIpts[i].checked = "true";
                oCheck.checked = "true";
            }
        }



        //为取消全选 添加鼠标点击事件
        aBtns[1].onclick = function () {
            //循环遍历 单选框 
            for (let i = 0; i < oIpts.length; i++) {

                //让所有单选框变为 不选
                oCheck.checked = "";
                oIpts[i].checked = oCheck.checked;
            }
        }



        //循环遍历 单选框 
        for (let i = 0; i < oIpts.length; i++) {

            //为所有单选框设置 鼠标点击事件
            oIpts[i].onclick = function () {

                //设置 flag 做判断
                let flag = true;

                //遍历 所有单选框
                for (let j = 0; j < oIpts.length; j++) {
                    //如果 有 单选框 没有选中
                    if (!oIpts[j].checked) {
                        //flag 为false 终止循环
                        flag = false;
                        break;
                    }
                }

                //如果 flag 在循环结束后 为true
                if (flag == true) {
                    //将 复选框 选中
                    oCheck.checked = "true";
                }


                //为反选 添加鼠标点击事件
                aBtns[2].onclick = function () {

                    // 遍历单选框
                    for (let j = 0; j < oIpts.length; j++) {

                        //三元 判断 反选
                        oIpts[j].checked = oIpts[j].checked ? "" : true;

                        //如果有单选框 没有选中
                        if (!oIpts[j].checked) {

                            // 将选中的复选框设为 取消选中
                            oCheck.checked = "";

                        } else {

                            // 如果 flag为 true
                            if (flag){
                                //将 复选框 选中
                                oCheck.checked = true;
                            }
                        }
                    }
                }
            }
        }
    </script>
</body>

</html>
```
