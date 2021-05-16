import React from 'react';

class RefsCom extends React.Component{
    constructor(){
        super();
        this.state = {
            str : '滑稽'
        }
        this.dataValue = React.createRef();
    }
    
    handleClick = () => {
        this.dataValue.current.value = '滑稽';
        console.log(this.dataValue.current.value);
    }


    render(){
        return(
            <div>
                <button ref={this.dataValue} onClick={this.handleClick}>点我</button>
            </div>
        )
    }
}

export default RefsCom;