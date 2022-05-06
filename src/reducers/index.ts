import { combineReducers } from "redux";
import authReducer from './authReducer'
import homeReducer from "./homeReducers";

const rootReducers = combineReducers({
    auth: authReducer,
    home: homeReducer
});

export default rootReducers