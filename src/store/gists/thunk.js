import { gistsStart, gistsSuccess, gistsError } from './action';
const API_URL_PUBLIC = (page) => `https://api.github.com/gists/public?page=${page}`
export const getGists = (page = 1) => async (dispatch) => {
    dispatch(gistsStart())
    try {
        const responce = await fetch(API_URL_PUBLIC(page))
        const result = await responce.json()
        dispatch(gistsSuccess(result))
    } catch (e) {
        dispatch(gistsError(e))
    }
}