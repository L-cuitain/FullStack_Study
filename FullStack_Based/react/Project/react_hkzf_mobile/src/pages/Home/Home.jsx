//引入react
import React from 'react';

//引入走马灯
import { Carousel, Flex } from 'antd-mobile';

//引入axios
import axios from 'axios';

//引入style
import Style from './Home.module.css';

// 导入导航菜单图片
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

function Home() {

  //轮播图设置参数
  const [swiperData, setSwiperData] = React.useState({
    // 是否自动切换
    autoplay: true,
    // 是否显示面板指示点
    dots: true,
    // 是否循环播放
    infinite: true,
    // 图片高度
    imgHeight: 212,
  })

  //是否显示轮播图
  const [isFinished , setIsFinished] = React.useState(false);

  //轮播图图片
  const [swiperImg, setSwiperImg] = React.useState([]);

  //在生命周期中使用方法
  React.useEffect(() => {
    //调用请求轮播图图片方法
    getSwiperImg();
  }, [])


  //nav数据
  const [navData, setNavData] = React.useState([
    {
      id: 1,
      navImg: Nav1,
      navTitle: "整租"
    },
    {
      id: 2,
      navImg: Nav2,
      navTitle: "合租"
    },
    {
      id: 3,
      navImg: Nav3,
      navTitle: "地图找房"
    },
    {
      id: 4,
      navImg: Nav4,
      navTitle: "去出租"
    },
  ]);


  //获取轮播图 图片列表
  const getSwiperImg = async () => {
    //发起请求 获取轮播图图片
    const result = await axios.get("http://localhost:8080/home/swiper");
    setSwiperImg(result.data.body);
    setIsFinished(true);
  }


  //渲染轮播图
  const applySwiper = () => {
    return swiperImg.map(item => (
      <a
        href="https://mobile.ant.design/components/carousel-cn/#components-carousel-demo-basic"
        key={item.id}
        style={{ display: 'inline-block', width: '100%', height: swiperData.imgHeight }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt={item.alt}
          style={{ width: '100%', height: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
      </a>
    ))
  }


  //渲染nav
  const applyNav = () => {
    return navData.map(item => (
      <Flex.Item key={item.id} style={{ textAlign: 'center' }}>
        <img src={item.navImg} alt="" />
        <h2>{item.navTitle}</h2>
      </Flex.Item>
    ))
  }

  return (
    <div>
      {/* 轮播图 */}
      {
        isFinished ? <Carousel
          // 是否自动切换
          autoplay={swiperData.autoplay}
          // 是否显示面板指示点
          dots={swiperData.dots}
          // 是否循环播放
          infinite={swiperData.infinite}
        >
        { applySwiper() }
      </Carousel> : ('')
      }



      {/* nav */}
      <Flex className={Style.nav}>
        { applyNav() }
      </Flex>

    </div>
  )
}

export default Home;