import {
    SET_ERROR,
    SET_LOADING,
    GET_TRANSACTION,
    SET_PROPIETARIO,
    SET_SERVICIO,
    SET_AUTO,
    COMPRAR,
    CLEAR
} from './types';
import TransctionService from '../service/transactionService';
import ServicesService from '../service/servicesService';
import UserService from '../service/userService';
import CarsService from '../service/carService';
import {useHistory} from 'react-router-dom';
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}


export const getTransactions = () => async (dispatch) => {
    try {
        const data = await TransctionService.getAll();
        const dataServices = await ServicesService.getAll();
        const dataUsers = await UserService.getAll();
        const dataCars = await CarsService.getAll();

        dispatch({
            type: GET_TRANSACTION,
            payload: {
                'transacciones': data.data,
                'servicios': dataServices.data,
                'usuarios': dataUsers.data,
                'autos': dataCars.data
            }
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });

    }
}

export const setPropietario = (name, value) => dispatch => {

    dispatch({
        type: SET_PROPIETARIO,
        payload: { name, value }
    });

}

export const setServicio = (name, value) => dispatch => {

    dispatch({
        type: SET_SERVICIO,
        payload: { name, value }
    });

}

export const setAuto = (name, value) => dispatch => {

    dispatch({
        type: SET_AUTO,
        payload: { name, value }
    });

}

export const comprar = data => async dispatch => {

    const history = useHistory();
    try {
        const dataComprar = {
            'total': data.total,
            'user': data.propietario._id,
            'service': data.serviceSelect._id,
            'car': data.autoSelect._id
        }
        const dataPost = await TransctionService.comprar(dataComprar);
        history.push(`/app/common/Viewtransaction/${dataPost.data._id}`)
        dispatch({
            type: COMPRAR,
            payload: dataPost.data
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error
        });
    }
}


export const clear = () => dispatch=> {
    dispatch({
        type: CLEAR,
    });
}

