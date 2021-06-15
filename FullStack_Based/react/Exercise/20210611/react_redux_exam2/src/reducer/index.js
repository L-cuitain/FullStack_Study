const initalState = {
    num: 0,
    color: false
}

const reducer = (state=initalState,action) => {
    switch(action.type){
        case 'LOAD_NUM':
            console.log(111);
            return {
                ...state,
                num: '???',
                color: true
            }
            
        case 'SET_NUM':
            console.log(222);
            return {
                ...state,
                num : action.num,
                color: false
            }
        default: 
           return state;
    }
}

export default reducer;