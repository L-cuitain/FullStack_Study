# 练习

## 1.简单描述一下箭头函数中this指向以及与普通函数中this的区别
```js
//普通函数中的this:
//普通函数下的this总是代表它的直接调用者
//默认情况下 , this指向window
//严格模式下 , 没有直接调用者 的this指向为undefined
//使用 call , apply , bind(ES5新增) 绑定时 this指绑定对象


//箭头函数下的this:
//箭头函数本身没有自己的this , 它的this是继承而来
//默认情况下 this指向定义时所处的对象(宿主对象)


```

## 2.React中key作用是什么
```js
//key是react用于追踪哪个列表元素被修改 添加或删除的辅助标识 , 在开发过程中需要保证某一元素的key在同级具有唯一性
```


## 3.类组件(Class component)和函数式组件(Functional component)怎么定义 使用代码描述
```js
import React from 'react';
import ReactDOM from 'react-dom';

//类组件
class ACom extends React.Component{
    render(){
        return(
            <div>asdafd</div>
        )
    }
}


//函数式组件
function ACom(props){
    return(
        <div>dagdas</div>
    )
}


ReactDOM.render(
    <ACom/>,
    document.getElementById('root')
)

```


## 4.react绑定 this 又几种方式 请用代码描述
```js
//1.使用bind绑定
<h3 onClick={this.btnClick.bind(this,'asd')}></h3>

//2.使用箭头函数绑定
<h3 onClick={
    (e) => {this.btnClick('dasd',e)}
}></h3>

//3.使用构造函数中bind绑定
constructor(){
    super();

    this.btnClick = this.btnClick.bind(this,'dasf');
}
```


## 5.请描述Diff算法的执行过程
```js
//1) 初次渲染时 , react根据初始state(Model) , 创建一个虚拟DOM对象(树)

//2) 虚拟DOM 生成 真正DOM , 渲染到页面中

//3) 当页面数据发生变化时(setState()) , 重新根据新的数据 , 创建一个新的虚拟DOM对象(树)

//4) 对比上一次的虚拟DOM , 使用Diff算法对比 , 得到需要更新的数据

//5) 最终 ,react只将需要变化的数据更新(patch)到DOM中 , 重新渲染页面

```


## 6.React中请说明纯组件起到什么作用? 并使用代码描述
```js
//作用: 根据纯组件的 内部执行 比较 两次 props 和 state的值 , 再决定是否需要重新渲染页面
class ACom extends React.PureComponent{
    render(){
        return(
            <div>纯组件</div>
        )
    }
}
```


## 7.手动路由跳转的写法(hash模式和history模式)两种
```js
//hash模式
window.location.hash = 'hash值';

//history
this.props.history.push("地址值");

```


## 8.路由Switch组件的使用
```js
import { Switch , Route } from 'react-router-dom';

<Switch>
    <Route exact to="/" component={Home}/>
    <Route to="/about" component={About}/>
    <Route path="/:user" component={User}>
    <Route compoent={NoMatch} />
</Switch>
```

## 9.写出常见路由组件(如Link...)
```js
import { BorwserRouter , HashRouter , NavLink , Link , useRouteMatch , Redirect , Switch } from 'react-router-dom';
```

## 10.路由Redirect怎么使用 使用代码说明
```js
<Redirect to="/path">
```




# React样式

## Moudle.css
```js
//1.在 [自定义名称].moudle.css 书写样式
.btn_css{}

//2.在组件中 引入
import styles from './index.moudle.css';

//3.在挂载样式中 调用
render(){
    return (
        <div className={styles.btn_css}></div>
    )
}

```

# React路由

## react-router-config路由设置重定向
```js
import { Redirect } from 'react-router-config';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />
    },
    {
        path: '/home',
        component: Home,
    }
]
```

## react-router-config子路由传参
```js
//1.创建子路由
//2.在Routes引入路由
{
    path: '/about',
    component: BCom,
    routes: [
        {
            path: '/about/gocom',
            exact: true,
            component: GoCom
        },
        {
            path: '/about/rustcom',
            exact: true,
            component: RustCom
        }
    ]
}


//3.在组件中显示路由
<div>
    <h1>BCom</h1>
    <ul>
        <li>
            <NavLink to={`${this.state.pathname}/gocom?name=张三&age=12`}>子路由:GoCom</NavLink>
        </li>
        <li>
            <NavLink to={`${this.state.pathname}/rustcom?name=里斯&age=29`}>子路由:RustCom</NavLink>
        </li>
    </ul>
                
    <div>
        {renderRoutes(this.props.route.routes)}
    </div>
</div>


//4.子路由中通过 URLSearchParams 获取路由参数5
function GoCom(props){
    const param = new URLSearchParams(props.location.search);

    return (
        <div>{param.get('name')}---{param.get('age')}</div>
    );
}
```