import { db } from '../../api';
import { GET_MESSAGES } from './types'
import { getMsgError, getMsgStart, sendMessageValue } from './action'
import { clearMessageValue } from '../conversations/action'

export const getMessagesDB = () => async (dispatch) => {
    try {
        dispatch(getMsgStart())
        const responce = await db.ref('messages').get();
        const messages = {};
        responce.forEach((snap) => {
            messages[snap.key] = Object.values(snap.val())
        })
        dispatch({ type: GET_MESSAGES, payload: messages })
    } catch (error) {
        dispatch(getMsgError(error))
    }
}
export const sendMessageToDB = ({ author, message }, roomId) => (dispatch) => {
    let Time = new Date();
    let msgTime = `${Time.getHours()} : ${Time.getMinutes()}`
    db.ref('messages').child(roomId).push({ author, message, moment: msgTime })
    dispatch(sendMessageValue({ author, message, moment: msgTime }, roomId))
    dispatch(clearMessageValue(roomId))
}