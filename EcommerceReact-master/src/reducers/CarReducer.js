
import { STATUS_FORMULARIO_AUTO } from "../actions/types";
const initialState = {
    loading: false,
    openFormulario: false,
    error: false,
    mensajeError: ""
};

export default (state = initialState, action) => {
    switch (action.type) {

        case STATUS_FORMULARIO_AUTO:
            return {
                ...state,
                openFormulario: action.payload
            };
        default:
            return state;
    }
};