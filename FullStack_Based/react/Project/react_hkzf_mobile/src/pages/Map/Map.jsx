import React , { useEffect } from 'react';

import './Map.css';

import {useHistory} from 'react-router-dom';

import { NavBar } from 'antd-mobile';

function Map(){

    useEffect(() => {
        getMap();
    });

    const getMap = () => {
        //创建地图实例
        let map = new window.BMap.Map("container",{
            //指定输入输出的坐标类型 , 3为gcj02坐标 , 5为bd0ll坐标
            coordsType: 5
        })

        //创建点坐标
        let point = new window.BMap.Point(118.2754, 33.9619);
        map.centerAndZoom(point,15);


    }


    const history = useHistory();

    return(
        <div className="map">
            {/* navbar */}
            <div className="citylist_nav">
                <NavBar
                    mode="light"
                    style={{backgroundColor: '#f6f5f6'}}
                    icon={<i className="iconfont icon-back" style={{color: '#333'}}></i>}
                    onLeftClick={() => history.goBack()}
                >地图找房</NavBar>
            </div>

            <div id="container">

            </div>
        </div>
    )
}

export default Map;