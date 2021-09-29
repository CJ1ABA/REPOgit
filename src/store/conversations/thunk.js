import { getConversStart, getConvrsErr } from '.';
import { db } from '../../api';
import { GET_CONVERSATIONS } from './types';

export const getConversationFB = () => async (dispatch) => {
    try {
        dispatch(getConversStart())
        const responce = await db.ref('conversations').get();
        const conversation = [];
        responce.forEach((snap) => {
            conversation.push(snap.val())
        })
        dispatch({ type: GET_CONVERSATIONS, payload: conversation })
    } catch (error) {
        dispatch(getConvrsErr(error))
    }
}
