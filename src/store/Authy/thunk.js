import { getSessionStart, getSessionError, getSession } from "./action";
import { firebaseApp } from '../../api/firebase';
export const getSessionDB = () => (dispatch) => {
    dispatch(getSessionStart())
    try {
        function getUser(user) {
            if (user) {
                dispatch(getSession(user))
            } else {
                dispatch(getSession(null))
            }
        }
        firebaseApp.auth().onAuthStateChanged(getUser)
        console.log(firebaseApp)
    } catch (error) {
        dispatch(getSessionError(error))
    }
}