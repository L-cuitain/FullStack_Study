import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//引入react-redux
import { Provider } from 'react-redux';
//引入reducers
import reducer from './redcuers';

//创建store
import { createStore , applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer,storeEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

