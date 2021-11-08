import {VIEW_OPERACION} from './types';

import TransctionService from '../service/transactionService';

export const viewTransaction = data => async dispatch => {
    try {
            const data = await TransctionService.getById(data);
            dispatch({
                type: VIEW_OPERACION,
                payload: data
            });
    }
    catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });
    }
}