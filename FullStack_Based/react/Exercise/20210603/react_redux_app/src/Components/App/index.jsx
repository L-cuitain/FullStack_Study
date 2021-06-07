import React from 'react';
import Footer from '../Footer';
import AddTodo from '../../Container/AddTodo';
import VisibleTodoList from '../../Container/VisibleTodoList';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <AddTodo></AddTodo>
        <VisibleTodoList></VisibleTodoList>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
