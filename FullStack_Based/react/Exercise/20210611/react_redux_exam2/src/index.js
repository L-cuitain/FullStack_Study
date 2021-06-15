import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//引入react-redux
import { Provider } from 'react-redux';
//创建store
import { createStore , applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const storeEnhercer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer , storeEnhercer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

