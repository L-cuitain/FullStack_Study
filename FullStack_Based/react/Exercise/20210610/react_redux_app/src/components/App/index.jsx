import React from 'react';

import { connect } from 'react-redux';
import { AddAction } from '../../actions';

class App extends React.Component{

  render(){
    const { globalState , addDiv} = this.props;
    return (
      <div>
        {globalState.user}
        <button onClick={addDiv}></button>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({globalState: state})
const mapDispatchToProps = (dispatch) => {
    return {
      addDiv: dispatch(AddAction)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
