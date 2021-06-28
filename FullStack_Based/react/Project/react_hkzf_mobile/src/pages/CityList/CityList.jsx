import React from 'react';

import {useHistory} from 'react-router-dom';

import { NavBar } from 'antd-mobile';

function CityList() {
    const history = useHistory();

    return (
        <div className="citylist">
            {/* navbar */}
            <div className="citylist_nav">
                <NavBar
                    mode="light"
                    style={{backgroundColor: '#f6f5f6'}}
                    icon={<i className="iconfont icon-back" style={{color: '#333'}}></i>}
                    onLeftClick={() => history.goBack()}
                >城市选择</NavBar>
            </div>
        </div>
    )
}

export default CityList;