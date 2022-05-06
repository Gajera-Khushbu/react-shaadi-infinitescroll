import { Action } from '../global/Action'
import * as Actions from './types'

// set home loading
export const setHomeLoading = (payload: boolean): Action => {
    return {
        type: Actions.SET_HOME_LOADER,
        payload
    }
}

// set user list
export const setUserList = (payload: any[]): Action => {
    return {
        type: Actions.SET_USER_LIST,
        payload
    }
}

// set response Error
export const setResponseError = (payload: string): Action => {
    return {
        type: Actions.SET_RES_ERROR,
        payload
    }
}

// set response success
export const setResponseSuccess = (payload: string): Action => {
    return {
        type: Actions.SET_RES_SUCCESS,
        payload
    }
}

// clear home data
export const clearHomeData = (): Action => {
    return {
        type: Actions.CLEAR_HOME_DATA
    }
}