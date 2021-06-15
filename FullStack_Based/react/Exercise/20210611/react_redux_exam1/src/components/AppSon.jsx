import React, { Component } from 'react';
// 导入AppGrSon
import AppGrSon from "./AppGrSon";

//引入connect
import { connect } from 'react-redux';

class AppSon extends Component {

    render() {
        const { globalState } = this.props;
        // console.log(globalState.messageList);
        return (
            <div className="App-son">
                <div className="container">
                    <h2>AppSon--记录信息</h2>
                    <ul>
                        {/* 提示：{时间}使用toLocaleString() */}
                        {/* 提示：{时间}使用toLocaleString() */}
                        {/* <li>2021/6/11下午14:30:00——默认信息111——未读</li>
                        <li>2021/6/11下午14:30:01——默认信息222——已读</li>
                        <li>2021/6/11下午14:30:02——默认信息111——未读</li> */}
                        {
                            globalState.messageList.map(item => (
                                <li key={item.mid}>{item.time}——{item.content}——{item.isRead ? '已读' : '未读'}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* AppGrSon */}
                <AppGrSon />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({globalState : state})
export default connect(mapStateToProps)(AppSon);