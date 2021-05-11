import React , { Fragment } from 'react';

import './index.css';

class Footer extends React.Component{
    render(){
        return(
            <Fragment>
                <h1 className="footer">{this.props.footerName}</h1>
            </Fragment>
        )
    }
}


export default Footer;