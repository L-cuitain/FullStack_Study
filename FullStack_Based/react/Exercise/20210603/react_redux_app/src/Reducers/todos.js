const todos = (state = [] , action) => {
    console.log(action);
    //switch 判断 参数action的属性
    switch(action.type){
        //判断ADD_TODO 返回 state添加新的对象
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            //判断TOGGLE_TODO 返回 : 判断state中的元素 找到需要修改的对象 修改其中completed的值
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ? {...todo , completed: !todo.completed} : todo    
            )
        default: 
            return state
    }
}

export default todos;