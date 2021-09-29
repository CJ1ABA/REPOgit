import { CHANGE_MESSAGE_VALUE, CLEAR_MESSAGE_VALUE, GET_CONVERSATIONS, GET_CONVERSATIONS_START, GET_CONVERSATIONS_ERROR } from './types';
const initialState = {
    conversations: [
        // { title: 'room1', value: '' },
        // { title: 'room2', value: 'test value-2' },
    ],
    conversWait: false,
    conversErr: null,
};

export function conversationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                conversations: state.conversations.map((item) => {
                    return item.title === action.payload.roomId
                        ? { ...item, value: action.payload.value }
                        : item
                })
            }
        case CLEAR_MESSAGE_VALUE:
            return {
                ...state,
                conversations: state.conversations.map((item) => {
                    return item.title === action.payload
                        ? { ...item, value: "" }
                        : item
                })
            }
        case GET_CONVERSATIONS_START:
            return {
                ...state,
                conversWait: true,
            };
        case GET_CONVERSATIONS:
            return {
                ...state,
                conversations: action.payload,
                conversWait: false,
            };
        case GET_CONVERSATIONS_ERROR:
            return {
                ...state,
                conversErr: action.payload,
                conversWait: false,
            };
        default:
            return state;
    }

};