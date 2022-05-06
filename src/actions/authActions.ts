import { Action } from '../global/Action'
import { User } from '../global/User'
import * as Actions from './types'

// set Current User
export const setCurrentUser = (payload: User): Action => {
    return {
        type: Actions.SET_USER,
        payload
    }
}

// clear auth data
export const clearAuthData = (): Action => {
    return {
        type: Actions.CLEAR_AUTH_DATA
    }
}