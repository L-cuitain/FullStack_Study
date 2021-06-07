import React from 'react';

//引入样式
import styles from './home.moudle.css';

import { NavLink } from 'react-router-dom';

//主页面
class Home extends React.Component {
    render() {
        return (
            <div className={styles.home_container}>
                <section>
                    {/* <!-- 头部标签 --> */}
                    <header className={styles.top_tips}>
                        <span className={styles.num_tip}></span>
                    </header>
                    {/* <!-- 首页内容 --> */}
                    <div>
                        <div className={styles.home_logo, styles.item_container_style}></div>
                        <NavLink to="/item" className={styles.start, styles.button_style}></NavLink>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;