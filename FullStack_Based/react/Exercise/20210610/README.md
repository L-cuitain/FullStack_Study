# Redux练习

## Redux
```js
//index.js
import { createStore } from 'redux';
import reducer from 'reducer';
const store = createStore(reducer);

//App.js
const store = getState();

//contants.js
export const ADD_ACTION = 'ADD_ACTION';

//action.js
export const addAction = () => {
    return {
        type: ADD_ACTION
    }
}


//reducer.js
const initalState = {};
const reducer = (state = initalState , action) => {
    switch(action.type){
        case ADD_ACTION:
            return {
                ...state,
                
            }
    }
}

export default reducer;

```

## React-Redux
```js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);

//index.js
<Provider store={store}>
    <App />
</Provider>

//App
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({globalState : state})
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)();
```

## Redux-Thunk
```js
import { createStore , applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
const storeEnhancer = applyMiddleware(thunkMiddleware);
import reducer from './reducer';

const store = createStore(reducer,storeEnhancer);
```