import React , { Fragment } from 'react';

//引入子组件
import Title from '../Components/Title';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

class App extends React.Component{

  state = {
    titleName : '火车王',
    list: [
      {
        id: 0,
        name: '滑稽',
        age: 12
      },
      {
        id: 1,
        name: '火车王',
        age: 16
      },
    ],
    footer: '地底的火车王'
  }

  handleClick = (msg) => {
    console.log(msg);
  }

  render(){
    return (
      <Fragment>
        <Title titleName={this.state.titleName}></Title>
        <Content contentList={this.state.list} handleClick={this.handleClick}></Content>
        <Footer footerName={this.state.footer}></Footer>
      </Fragment>
    )
  }
}

export default App;