import React, { Component } from 'react';

//引入connect
import { connect } from 'react-redux';

import { readAction } from '../action';
class AppGrSon extends Component {
    render() {
        const { globalState , isRead } = this.props;
        const newMessageList = globalState.messageList.filter(item => !item.isRead)
        return (
            <div className="App-gr-son">
                <h3>AppGrSon--待读信息</h3>
                <ul>
                    {/* <li>默认信息111——<button>点击已读</button></li>
                    <li>默认信息333——<button>点击已读</button></li> */}
                    {   
                        newMessageList.map(item => (<li key={item.mid}>{item.content}——<button onClick={() => {isRead(item.mid)}}>点击已读</button></li>))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({globalState : state})
const mapDispatchToProps = (dispatch) => {
    return {
        isRead(mid){
            dispatch(readAction(mid));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AppGrSon);