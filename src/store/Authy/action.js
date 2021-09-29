import { GET_SESSION_START, GET_SESSION, GET_SESSION_ERROR } from "./types"
export function getSessionStart() {
    return {
        type: GET_SESSION_START,
    }
};
export function getSession(user) {
    return {
        type: GET_SESSION,
        payload: user,
    }
};
export function getSessionError(error) {
    return {
        type: GET_SESSION_ERROR,
        payload: error,
    }
};