import React from 'react';

const FaCom = (props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

FaCom.defaultProps = {
    name: '花季旺'
}

FaCom.propTypes = {
    name: String
}

export default FaCom;