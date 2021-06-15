import React, { Component } from 'react';
import "./App.css";
// 导入AppSon
import AppSon from "./AppSon";
//引入connect
import { connect } from 'react-redux';

//引入action
import { sendAction } from '../action';

class App extends Component {

  constructor(){
    super();
    this.iptRef = React.createRef();
  }

  sendMessage = () => {
    console.log(this.iptRef.current.value);
    this.props.dispatch(sendAction(this.iptRef.current.value));
    this.iptRef.current.value = ''
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>App--发送信息</h1>
          <div>
            <input type="text" placeholder="输入要发送的信息" ref={this.iptRef}/>
            <button onClick={this.sendMessage}>Send</button>
          </div>
        </div>
        {/* AppSon */}
        <AppSon />
      </div>
    );
  }
}

export default connect()(App);