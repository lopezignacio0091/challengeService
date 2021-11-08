import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import CarReducer from './CarReducer';
import TransactionReducer from "./TransactionReducer";
import OperacionReducer from "./OperacionReducer";
export default combineReducers({
    LoginReducer,
    CarReducer,
    TransactionReducer,
    OperacionReducer
});