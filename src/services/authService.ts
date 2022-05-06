
import { v4 as uuidv4 } from 'uuid';
import { clearAuthData, setCurrentUser } from "../actions/authActions";
import { clearHomeData } from '../actions/homeActions';
import { deleteLocalUser, setLocalUser } from "../utils/localStorageHelpers";

/**
 * @desc login
 * @param obj 
 * @returns 
 */
export const login = (obj: any) => async (dispatch: any) => {
    try {
        obj.token = uuidv4();
        dispatch(setCurrentUser(obj));
        setLocalUser(obj);
        return true;
    } catch (e) {
        return false
    } finally {
    }
}

/**
 * @desc logout 
 * @returns 
 */
export const logout = () => (dispatch: any) => {
    try {
        //delete local data
        deleteLocalUser();
        // clear all redux
        dispatch(clearAuthData())
        dispatch(clearHomeData())
    } catch (e) {
        return false
    } finally {

    }
}