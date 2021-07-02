import React , { useState , useEffect } from 'react';

import './Map.css';

import NavHeader from '../../components/NavHeader/navheader';

//引入CurrentCity方法
import CurrentCity from '../../utils/CurrentCity/CurrentCity';

//引入axios
import axios from 'axios';

const labelStyle = {
    cursor: 'pointer',
    border: '0px solid rgb(255, 0, 0)',
    padding: '0px',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center'
}


const BMap = window.BMap;
function Map(){

    const [navTitle , setNavTitle] = useState("地图找房");

    useEffect(() => {
        getMap();
    });

    const getMap = async () => {
        //创建地图实例
        let map = new BMap.Map("container");

        //创建点坐标
        let point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point,11);

        //获取当前定位城市
        const { label , value } = await CurrentCity();

        //创建地址解析器
        const mapGeo = new BMap.Geocoder();
        mapGeo.getPoint(label,async (point) => {
            if(point){
                map.centerAndZoom(point,11);
                map.addControl(new BMap.NavigationControl());
                map.addControl(new BMap.ScaleControl());

                //发起请求 获取房源数据
                const result = await axios.get("http://localhost:8080/area/map",{params:{id:value}});
                //遍历房源数据 
                result.data.body.forEach((item) => {
                    //获取房源的 横纵坐标 , 房源数量 , 地区名称
                    const { coord: { latitude , longitude } , count , label } = item;
                    
                    //遍历坐标 添加地图位置
                    const areaPoint = new BMap.Point(longitude , latitude);

                    //添加覆盖物(new BMap.Marker(point))
                    const opts = {
                        position: areaPoint,  // 指定文本标注所在的地理位置
                        offset: new BMap.Size(35 , -35)  // 设置文本偏移量
                    }

                    // 创建文本标注对象
                    const Label = new BMap.Label("",opts);

                    //设置显示内容
                    Label.setContent(`
                        <div class="bubble">
                            <p class="name">${label}</p>
                            <p>${count}套</p>
                        </div>
                    `);
                    //添加样式
                    Label.setStyle(labelStyle);
                    //设置点击后监听事件
                    Label.addEventListener("click",(e) => {
                        console.log("123",e);
                    })
                    //将Label内容显示到地图上
                    map.addOverlay(Label);
                });

            }
        },label);
    }

    return(
        <div className="map">
            {/* navbar */}
            <NavHeader navTitle={navTitle}/>

            <div id="container">

            </div>
        </div>
    )
}

export default Map;