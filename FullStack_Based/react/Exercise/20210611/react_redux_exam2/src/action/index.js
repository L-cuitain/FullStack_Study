const loadNumAction = () => {
    console.log('load');

    return {
        type: 'LOAD_NUM'
    }
}

const setNum = (num) => {
    return {
        type: 'SET_NUM',
        num : num
    }
}


export const loadNum = (dispatch) => {
    dispatch(loadNumAction());
}

export const getNum = (dispatch) => {    
    fetch(`http://localhost:8080/getNum`)
    .then(response => response.json())
    .then(json => dispatch(setNum(json.num)))
}