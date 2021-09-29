import { CHANGE_MESSAGE_VALUE, GET_CONVERSATIONS_START } from './types';
import { CLEAR_MESSAGE_VALUE, GET_CONVERSATIONS_ERROR } from './types';
export function changeMessageValue(value, roomId) {
    return {
        type: CHANGE_MESSAGE_VALUE,
        payload: { value, roomId },
    }
}
export function clearMessageValue(roomId) {
    return {
        type: CLEAR_MESSAGE_VALUE,
        payload: roomId,
    }
}
export function getConversStart() {
    return {
        type: GET_CONVERSATIONS_START,
    }
}
export function getConvrsErr(error) {
    return {
        type: GET_CONVERSATIONS_ERROR,
        payload: error,
    }
}