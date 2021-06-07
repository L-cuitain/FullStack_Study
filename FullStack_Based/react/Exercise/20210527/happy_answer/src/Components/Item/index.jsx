import React from 'react';

import styles from './item.moudle.css';

//题目列表
class Item extends React.Component {
    render() {
        return (
            <div classNameName={styles.home_container}>
                <section>
                    {/* <!-- 头部标签 --> */}
                    <header className={styles.top_tips}>
                        <span className={styles.num_tip}>题目</span>
                    </header>
                    {/* <!-- 题目内容 --> */}
                    <div className={styles.item_back, styles.item_container_style}>
                        <div className={styles.item_list_container} >
                            {/* <!-- 题干 --> */}
                            <header className={styles.item_title}></header>
                            {/* <!-- 选项 --> */}
                            <ul>
                                <li className={styles.item_list}>
                                    <span className={styles.option_style}></span>
                                    <span className={styles.option_detail}></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span className={styles.next_item, styles.button_style}></span>
                    {/* <!-- 提交按钮 --> */}
                    <span className={styles.submit_item, styles.button_style}></span>
                </section>
            </div>
        )
    }
}

export default Item;