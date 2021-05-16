import React from 'react';
import propTypes from 'prop-types';

import { Consumer } from '../../Utils/context';

class SonCom extends React.Component{

        static defaultProps = {
            name: '花季旺'
        }
    
        static propTypes = {
            name: propTypes.string
        }
    

    render(){
        return(
            <div>
                <p>{this.props.name}</p>
                <Consumer>{(data) => (<strong>{data}</strong>)}</Consumer>
            </div>
        )
    }
}

export default SonCom;