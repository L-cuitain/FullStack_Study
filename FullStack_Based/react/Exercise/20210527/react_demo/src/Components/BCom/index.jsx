import React from 'react';

//引入路由
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


// 装饰器
function zsq(target) {
    console.log(target);
  }

class BCom extends React.Component{
    state = {
        //父组件路由
        pathname: this.props.location.pathname
    }

    //在页面初始化时执行
    // componentDidMount(){
    //     console.log(this.props.location.pathname);
    // }

    render(){
        return (
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
        )
    }
}


function GoCom(props){
    const param = new URLSearchParams(props.location.search);

    return (
        <div>{param.get('name')}---{param.get('age')}</div>
    );
}

function RustCom(props){
    const param = new URLSearchParams(props.location.search);

    return (
        <div>{param.get('name')}----{param.get('age')}</div>
    )
}

export {BCom , GoCom , RustCom};