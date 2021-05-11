import React , {Fragment} from 'react';
import './index.css';


class Title extends React.Component{
    render(){
        return(
            <Fragment>
                <h1 className='title'>我是{this.props.titleName}</h1>
            </Fragment>
        )
    }
}

export default Title;