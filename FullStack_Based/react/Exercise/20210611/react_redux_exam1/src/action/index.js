import { SEND_MESSAGE , READ_MESSAGE } from '../contants';

//发送信息
export const sendAction = (message) => {
    return {
        type: SEND_MESSAGE,
        message: message
    }
}

//点击已读
export const readAction = (id) => {
    return {
        type: READ_MESSAGE,
        mid : id
    }
}
