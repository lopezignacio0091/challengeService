
import { VIEW_OPERACION ,SET_LOADING} from "../actions/types";
const initialState = {
    loading: true,
    viewOperacion: {},
    error: false,
    mensajeError: ""
};
export default (state = initialState, action) => {
    switch (action.type) {

        case VIEW_OPERACION:
            return {
                ...state,
                loading: false,
                viewOperacion:action.payload
            };
            case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};