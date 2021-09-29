import { SEND_MESSAGE_VALUE, GET_MESSAGES_START, GET_MESSAGES_ERROR } from './types'
export function sendMessageValue(message, roomId) {
    return {
        type: SEND_MESSAGE_VALUE,
        payload: { message, roomId },
    }
};
export function getMsgStart() {
    return {
        type: GET_MESSAGES_START,
    }
};
export function getMsgError(error) {
    return {
        type: GET_MESSAGES_ERROR,
        payload: error,
    }
}