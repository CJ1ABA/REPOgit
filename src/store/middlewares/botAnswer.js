import { SEND_MESSAGE_VALUE } from '../message/types';
import { clearMessageValue } from '../../store/conversations/action';
import { sendMessageValue } from '../../store/message/action';
export const botSendMessage = (store) => (next) => (action) => {
    if (action.type === SEND_MESSAGE_VALUE &&
        action.payload.message.author === 'Слава') {
        setTimeout(() => {
            let Time = new Date();
            let msgTime = `${Time.getHours()} : ${Time.getMinutes()}`
            store.dispatch(sendMessageValue({ author: 'Bot', message: 'Hello from bot', moment: msgTime }, action.payload.roomId))
            store.dispatch(clearMessageValue(action.payload.roomId))
        }, 500)
    }
    return next(action)
}