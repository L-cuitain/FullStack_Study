import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//引入react-redux
import { Provider } from 'react-redux';
//创建store
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

