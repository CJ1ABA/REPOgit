import { GET_SESSION, GET_SESSION_START, GET_SESSION_ERROR } from "./types";
const initialState = {
    sessionWait: false,
    sessionErr: null,
    session: null,
};
export function sessionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SESSION_START:
            return {
                ...state,
                sessionWait: true,
            };
        case GET_SESSION:
            return {
                ...state,
                session: action.payload,
                sessionWait: false,
            };
        case GET_SESSION_ERROR:
            return {
                ...state,
                sessionErr: action.payload,
                sessionWait: false,
            };
        default:
            return state;
    }
};