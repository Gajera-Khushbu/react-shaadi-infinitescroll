import * as Actions from '../actions/types'
import { Action } from '../global/Action'

interface IState {
    loading: boolean,
    userList: any[],
    nextPage: number,
    prevPage: number,
    totalRecords: number,
    resError: string,
    resSuccess: string,
}

const initialState: IState = {
    loading: false,
    userList: [],
    nextPage: 0,
    prevPage: 0,
    totalRecords: 0,
    resError: '',
    resSuccess: '',
}

export default function homeReducer(state: IState = initialState, action: Action) {
    switch (action.type) {
        case Actions.SET_HOME_LOADER:
            return {
                ...state,
                loading: action.payload,
            }
        case Actions.SET_USER_LIST:
            let newList: any = [...state.userList];
            newList = newList.concat(...action.payload.userList)
            return {
                ...state,
                userList: newList,
                nextPage: action.payload.nextPage,
                prevPage: action.payload.prevPage,
                totalRecords: action.payload.total
            }
        case Actions.SET_RES_ERROR:
            return {
                ...state,
                resError: action.payload
            }
        case Actions.SET_RES_SUCCESS:
            return {
                ...state,
                resSuccess: action.payload
            }
        case Actions.CLEAR_HOME_DATA:
            return initialState
        default:
            return state;
    }
}