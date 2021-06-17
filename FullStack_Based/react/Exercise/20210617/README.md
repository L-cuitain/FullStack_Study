# React-Hook

## 额外Hook

### 相关参考
```
https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext
https://juejin.cn/post/6844904001998176263
```

### useReducer
```js
//通过 hook 提供的 useReducer 来实现React状态管理 是useState的替代方案

//接收参数 reducer函数 , initalState(默认状态值)
const [state , dispatch] = useReducer(reducer,initalState);

return (
    <div className="App">
      <h1>{state.count}</h1> 
      <button onClick={() => {dispatch({type: 'increment'})}}>+</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>-</button>
    </div>
  );
```

### useContext
```js
//接收一个context对象(React.createContext的返回值)并返回该context的当前值
//当组件上层<Mycontext.Provider>更新时 , 该Hook会触发重渲染,并使用最新传递给MyContext provider的context value值
//即使祖先使用React.memo 或 shouldComponentUpdate , 也会在组件本身使用 useContext 时重新渲染
const value = useContext(myContext);

//根组件中
//1.通过React.createContext创建新的context对象
const ThemeContext = React.createContext(themes);
//2.通过此对象的Provider 传递 一个通用的value值
<ThemeContext.Provider value={themes.light}>
    <Children />
</ThemeContext.Provider>


//子组件中
//1.通过react的 useContext 传入创建的context对象 来返回此对象的value值
const theme = useContext(ThemeContext);
//在组件中调用value对象的值来显示
return (
    <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
    </button>
)
```

### useCallback
```js
//在 a , b 的变量值不变的情况下 , memoizedCallback的引用不变
//useCallback的第一个入参函数会被缓存 从而达到渲染性能优化的目的
//把内联的回调函数 及 依赖项数组作为参数传入 useCallback
const memoizedCallback = useCallback(
    () => {
        doSomething(a,b)
    },
    [a,b]
)


//useCallback(fn,deps) 相当于 useMemo(() => fn , deps)
```

### useMemo
```js
//在 a 和 b 的变量值不变的情况下 , memoizedValue的值不变
//useMemo函数的第一个入参函数不会被执行 , 从而达到节省计算量的目的
//如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值
const memoizedValue = useMemo(
    () => example(a,b),
    [a , b]
    )
```

#### useCallback 与 useMemo的区别
```js
//useCallback 是根据依赖(deps)缓存第一个入参的(callback)
//useMemo是根据依赖(deps)缓存第一个入参的(callback)执行后的值

//useCallback部分源码
function updateCallback(callback, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  hook.memoizedState = [callback, nextDeps];
  return callback;
}

//useMemo部分源码
function updateMemo(nextCreate, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const prevState = hook.memoizedState;
  if (prevState !== null) {
    if (nextDeps !== null) {
      const prevDeps = prevState[1];
      if (areHookInputsEqual(nextDeps, prevDeps)) {
        return prevState[0];
      }
    }
  }
  const nextValue = nextCreate(); // 🤩
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

```

### useRef
```js
//useRef 返回一个可变的 ref 对象 ,其 .current 属性被初始化为传入的参数
//返回的 ref 对象在组件的整个生命周期内保持不变
const refContainer = useRef(initalValue);

//给DOM元素绑定
<input type='text' ref={refContainer}/>

//通过 .current 获取DOM元素的事件
refContainer.current.focus();
```
