import {STATUS_FORMULARIO_AUTO} from './types';
import { Dispatch } from 'redux';


export const abrirFormularioAuto = (status) => dispatch => {
    dispatch({
      type: STATUS_FORMULARIO_AUTO,
      payload: status,
    });
  };
  