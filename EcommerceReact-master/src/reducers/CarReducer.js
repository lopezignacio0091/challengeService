
import { STATUS_FORMULARIO_AUTO, GET_CARS, CLOSE_MENSAJE,ERROR_CARS, SELECT_EDIT_CAR, CREATE_CAR,DELETE_CAR } from "../actions/types";
import _ from 'lodash';
const initialState = {
    loading: true,
    openFormulario: false,
    error: false,
    mensajeError: "",
    autos: [],
    usuarios: [],
    autoEditar: {},
    abrirMensaje: false,
    mensaje: ''
};

export default (state = initialState, action) => {
    switch (action.type) {

        case STATUS_FORMULARIO_AUTO:
            return {
                ...state,
                openFormulario: action.payload,
                autoEditar: {}
            };
        case SELECT_EDIT_CAR:
            return {
                ...state,
                autoEditar: _.filter(state.autos, (elem) => elem._id === action.payload)[0],
                openFormulario: true,
            };
            case DELETE_CAR:
            return {
                ...state,
                autos: _.filter(state.autos, (elem) => elem._id !== action.payload)[0],
                abrirMensaje: true,
                mensaje:'Se elimino correctamente'
            };
            case CLOSE_MENSAJE:
            return {
                ...state,
                abrirMensaje: false,
                mensaje: ''
            };
        case CREATE_CAR:
            return {
                ...state,
                autos: [...state.autos, action.payload.car],
                usuarios: [...state.usuarios, action.payload.user],
                openFormulario: false,
                abrirMensaje: true,
                mensaje: 'Se creo con exito'
            };
        case GET_CARS:
            return {
                ...state,
                autos: action.payload.cars,
                usuarios: action.payload.users,
                loading: false
            };
        case ERROR_CARS:
            return {
                ...state,
                error: true,
                mensajeError: "Error a cargar la pagina por favor comuniquese con el administrador"
            };
        default:
            return state;
    }
};