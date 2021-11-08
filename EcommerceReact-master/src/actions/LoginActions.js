import {
    SET_ERROR,
    SET_LOADING,
    GET_USER_LOGIN,
    LOGOUT,
} from './types';
import { Dispatch } from 'redux';
import JWT from '../service/JWT';
import LoginService from '../service/loginService';
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


export const getLoginUser = (values) => async dispatch => {
    try {
        dispatch(setLoading());
        const { data } = await LoginService.login(values);
        JWT.Init(data.token);
        localStorage.setItem("USER_DASHBOARD", JSON.stringify(data));
        JWT.Init(data);
        dispatch({
            type: GET_USER_LOGIN,
            payload: values
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const logout = () => dispatch => {
    localStorage.removeItem("USER_DASHBOARD");
    dispatch({
        type: LOGOUT,
    });

}


export const userIsLogIn = (data) => dispatch => {
    localStorage.setItem("USER_DASHBOARD", JSON.stringify(data));
    JWT.Init(data.token);
    dispatch({
        type: GET_USER_LOGIN,
        payload: data
    });
}
