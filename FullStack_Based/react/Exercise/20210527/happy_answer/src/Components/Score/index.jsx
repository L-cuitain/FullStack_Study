import React from 'react';

import styles from './score.moudle.css';

class Score extends React.Component {
    render() {
        return (
            <div className={styles.score_container}>
                {/* <!-- 分数和提示语 --> */}
                <div className={styles.your_scores_container}>
                    <header className={styles.your_scores}>
                        <span className={styles.score_num}></span>
                        <span className={styles.fenshu}>分!</span>
                    </header>
                    <div className={styles.result_tip}></div>
                </div>

                <div className={styles.share_button}></div>

                <div className={styles.share_code}>
                    <header className={styles.share_header}>关注葡萄之家,获取答案.</header>
                    <img src="./images/4-4.png" height="212" className={styles.code_img} alt="" />
                </div>

                <div className={styles.share_cover}>
                    <img className={styles.share_img} src="./images/5-2.png" alt="" />
                </div>
            </div>
        )
    }
}

export default Score;