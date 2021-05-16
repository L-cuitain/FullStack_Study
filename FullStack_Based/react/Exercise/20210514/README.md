# React练习

## 函数式组件(无状态组件)

## 类组件(有状态组件)
```js
//函数式组件 和 类组件 区别
//类组件 负责 更新UI 函数式组件 负责展示静态内容
```

## 事件对象 Event

## 有状态组件的 修改 state
```js
//setState两个作用:
//修改状态
//更新UI
```

## this指向
```js
//方法一: 利用箭头函数
funcitonA = () => {}
//方法二: bind属性
onClick={this.functionA.bind(this)}
//方法三: 利用箭头函数的实例方法
onClick={(e) => {this.functionA(e)}}
```

## 受控组件
```js
//受到React控制的组件为受控组件
```

## 非受控组件
```js
// 通过ref操作原生DOM元素
// ref作用: 获取DOM或组件

//在constructor定义一个 变量A 储存 React.createRef()
//在标签添加ref属性绑定 变量A
//方法中操作 变量A
```

## 函数式组件通信

## 父传子

## 子传父

## 兄弟组件互传

## 组件默认值
```js
// 函数中 方法名.defaultProps = {属性: 属性值}
// 类中 static defaultProps = {属性:属性值}
```

## 组件传入值类型
```js
//组件中引入 prop-types

// 函数中 方法名.propTypes = {属性: propTypes.类型}
// 类中 static propTypes = {属性:  propTypes.类型}
```

## Context(跨组件传值)
```js
// 将Context抽成文件
// const { Provider , Consumer } = React.createContext();

// 父组件
// <Provider value="值">子组件</Provider>

// 子组件
// <Consumer>{(data) => (标签)}</Consumer>
```

## React生命周期
```js
//挂载
//执行顺序: constructor -> New props / setState({}) / forceUpdate()  -> componentDidMount(){}


//更新
//执行顺序: New props / setState({}) / forceUpdate()

//卸载
```

