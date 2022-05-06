import axios from "axios"
import { setHomeLoading, setResponseError, setUserList } from "../actions/homeActions"
import { API_URL, APP_ID } from "../global/constants"

/**
 * @desc get user list
 * @param page 
 * @param limit 
 * @returns 
 */
export const getUsers = (pageNo: number = 0, limit: number = 10) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setHomeLoading(true))
        const params = {
            page: pageNo,
            limit
        }
        const headers = {
            "app-id": APP_ID
        }
        const response: any = await axios.get(API_URL, {
            headers, params  
        })
        const { data, page, total } = response.data;

        const { home } = getState();
        const { nextPage } = home || {}

        if (pageNo === nextPage) {
            const obj: any = { userList: data, prevPage: page - 1, nextPage: page + 1, total }
            dispatch(setUserList(obj))
        }
        return true
    } catch (e:any) {
        dispatch(setResponseError(e.message))
        dispatch(setHomeLoading(false))
        return false
    } finally {
        dispatch(setHomeLoading(false))
    }
}