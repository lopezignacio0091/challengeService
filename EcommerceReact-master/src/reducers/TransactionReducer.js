
import {
    SET_ERROR,
    SET_LOADING,
    SET_PROPIETARIO,
    GET_TRANSACTION,
    SET_SERVICIO,
    SET_AUTO,
    COMPRAR,
    CLEAR
} from "../actions/types";
import _ from 'lodash';
const initialState = {
    loading: true,
    transacciones: [],
    error: false,
    mensajeError: "",
    propietario: {},
    autos: [],
    usuarios: [],
    servicios: [],
    serviceSelect: {},
    autosUser: [],
    autoSelect: {},
    total: 500,
    valorServicio: 0,
    compraOk: false,
    viewTransaccion: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR:
            return {
                ...state,
                viewTransaccion: {},
                serviceSelect: {},
                autosUser: [],
                autoSelect: {},
                total: 500,
                valorServicio: 0,
                compraOk: false,
                viewTransaccion: {},
                propietario:{}
            };
        case GET_TRANSACTION:
            return {
                ...state,
                loading: false,
                usuarios: action.payload.usuarios,
                transacciones: action.payload.transacciones,
                servicios: action.payload.servicios,
                autos: action.payload.autos
            };
        case SET_PROPIETARIO:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                autosUser: _.filter(state.autos, (elem) => elem.user === action.payload.value._id)
            };
        case SET_SERVICIO:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                total: action.payload.value.cost + 500,
                valorServicio: action.payload.value.cost
            };
        case SET_AUTO:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };

        case COMPRAR:
            return {
                ...state,
                compraOk: true
            };

        default:
            return state;
    }
};