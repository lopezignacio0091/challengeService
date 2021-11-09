
import { STATUS_FORMULARIO_AUTO, GET_CARS, ERROR_CARS } from "../actions/types";
const initialState = {
    loading: true,
    openFormulario: false,
    error: false,
    mensajeError: "",
    autos: [],
    usuarios: [],
};

export default (state = initialState, action) => {
    switch (action.type) {

        case STATUS_FORMULARIO_AUTO:
            return {
                ...state,
                openFormulario: action.payload
            };
        case GET_CARS:
            return {
                ...state,
                autos: action.payload.cars,
                usuarios: action.payload.users
            };
        case ERROR_CARS:
            return {
                ...state,
                error: true,
                mensajeError:"Error a cargar la pagina por favor comuniquese con el administrador"
            };

        default:
            return state;
    }
};