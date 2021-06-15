import { ADD_ACTION } from '../contants';

//同步
const GetAction = (userinfo) => {
    return {
        type: ADD_ACTION,
        user: userinfo
    }
}

//异步
export const AddAction = () => {
    return function(dispatch){
        fetch(``)
        .then(response => response.json())
        .then(json => dispatch(GetAction(json.userinfo)))
    }
}