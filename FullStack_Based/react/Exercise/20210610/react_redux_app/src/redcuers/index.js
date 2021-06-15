import { ADD_ACTION } from '../contants';

//初始化数据
const initalState = {
    user: {}
}

const reducer = (state=initalState , action) => {
    switch(action.type){
        case ADD_ACTION:
            return {
                ...state,
                user : action.user
            }
        default:
            return state    
    }
}

export default reducer;