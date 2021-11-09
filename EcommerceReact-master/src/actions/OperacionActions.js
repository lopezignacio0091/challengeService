import {VIEW_OPERACION,SET_LOADING,SET_ERROR} from './types';

import TransctionService from '../service/transactionService';

export const viewTransaction = data => async dispatch => {
    try {
            const dataView = await TransctionService.getById(data);
            dispatch({
                type: VIEW_OPERACION,
                payload: dataView.data
            });
    }
    catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });
    }
}

export const setLoading = () => dispatch=> {
    dispatch({
        type: SET_LOADING,
    });
}
