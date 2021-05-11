import React , { Fragment } from 'react';
import './index.css'


class Content extends React.Component{

    handleGetId(id){
        //调用父组件的方法 传递id给父组件
        this.props.handleClick(id);
    }

    render(){
        return(
            <Fragment>
                <ul className="content">
                    {
                        this.props.contentList.map(item => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <p>{item.age}</p>
                                <button onClick={() => this.handleGetId(item.id)}>点我获取id</button>
                            </li>
                        ))
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Content;