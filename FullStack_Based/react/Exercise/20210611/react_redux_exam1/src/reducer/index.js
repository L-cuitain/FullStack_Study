import { SEND_MESSAGE , READ_MESSAGE } from '../contants';

const initalState = {
    messageList: [
        {   
            mid: 0,
            time: new Date().toLocaleString(),
            content: '默认信息111',
            isRead: false
        },
        {
            mid: 1,
            time: new Date().toLocaleString(),
            content: '默认信息222',
            isRead: true
        },
        {   
            mid: 2,
            time: new Date().toLocaleString(),
            content: '默认信息333',
            isRead: false
        }
    ],
}

const reducer = (state=initalState , action) => {
    switch(action.type){
        //发送信息
        case SEND_MESSAGE:
            const mess = {
                mid: state.messageList.length,
                time: new Date().toLocaleString(),
                content: action.message,
                isRead: false
            }

            return {
                ...state,
                messageList: [...state.messageList,mess]
            }
        //点击已读    
        case READ_MESSAGE:
            const newMessageList = state.messageList;
            newMessageList.map(item => {
                if(item.mid === action.mid){
                    item.isRead = true
                }
            })
            return {
                ...state,
                messageList : newMessageList
            };
        default:
            return state;
    }
}

export default reducer;