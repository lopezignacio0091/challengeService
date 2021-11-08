import { SET_MENSAJE } from "../constants/types"

export const setMensaje = (status, mensaje, severity) => async dispatch => {
    dispatch({
        type: SET_MENSAJE,
        payload: { status, mensaje, severity }
    });
}