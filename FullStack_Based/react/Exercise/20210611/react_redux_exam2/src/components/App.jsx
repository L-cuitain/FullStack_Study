import React, { Component } from 'react';
import "./App.css";
//引入connect
import { connect } from 'react-redux';
import { getNum ,loadNum} from '../action';


class App extends Component {

  render() {
    const { globalState , changeNum } = this.props;
    return (
      <div className="App">
        <button onClick={changeNum}>获取随机码</button>
        <h1 className={globalState.color ? "color" : "num"}>{globalState.num}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({globalState : state})
const mapDispatchToProps = (dispatch) => {
  return {
    changeNum(){
          dispatch(loadNum);
          dispatch(getNum);
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);