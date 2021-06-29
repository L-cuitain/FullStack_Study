import React, { useState , useEffect } from 'react';

import {useHistory} from 'react-router-dom';

import { NavBar } from 'antd-mobile';

import cityFormat from '../../utils/CityFormat/CityFormat';

//引入axios
import axios from 'axios';

function CityList() {
    const history = useHistory();

    useEffect(() => {
        //调用获取城市列表
        getCityList();
    },[])

    //城市列表
    const [cityList , setCityList] = useState({});

    //城市列表索引
    const [cityIndex , setCityIndex] = useState({});

    //城市加载
    const [isFinish , setIsFinish] = useState(false);

    //获取城市列表
    const getCityList = async () => {
        // 发起请求
        const cityResult = await axios.get("http://localhost:8080/area/city",{params:{level:1}});

        //获取热门城市
        const hotResult = await axios.get("http://localhost:8080/area/hot");

        const citydata = cityResult.data.body;
        const hotcity = hotResult.data.body;

        //获取城市列表和索引
        const {cityList , cityIndex} = cityFormat(citydata,hotcity);

        //添加到状态
        setCityList(cityList);
        setCityIndex(cityIndex);

        //加载完毕 渲染到页面
        setIsFinish(true);
    }

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

                {isFinish ? (cityIndex.map(item => (
                    <span>{item}</span>
                ))) : ('')
                }
            </div>
        </div>
    )
}

export default CityList;