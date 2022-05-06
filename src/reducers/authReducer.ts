import * as Actions from '../actions/types'
import { Action } from '../global/Action'

interface IState {
    user: any,
    isAuthenticated: boolean
}

const initialState: IState = {
    user: undefined,
    isAuthenticated: false
}

export default function authReducer(state: IState = initialState, action: Action) {
    switch(action.type){
        case Actions.SET_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case Actions.CLEAR_AUTH_DATA:
            return initialState
        default:
            return state;
    }
}