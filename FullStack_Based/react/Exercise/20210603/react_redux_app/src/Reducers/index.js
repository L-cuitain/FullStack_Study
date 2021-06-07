import { combineReducers } from 'redux';

//引入组件
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp;