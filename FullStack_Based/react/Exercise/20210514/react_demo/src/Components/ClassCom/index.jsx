import React from 'react';

class ClassCom extends React.Component{
    
    state = {
        iptValue: ''
    } 

    //this指向方法一: 利用箭头函数
    handleClick = () => {
        console.log("滑稽");
    } 
    
    handleChange = (e) => {
        this.setState({
            iptValue : e.target.value
        })

        console.log(this.state.iptValue);
    }

    render(){
        return(
            <div>
                <div>fasdfasdf</div>
                <input type="text" value={this.state.iptValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick.bind(this)}>点我</button>
            </div>
        )
    }
}

export default ClassCom;