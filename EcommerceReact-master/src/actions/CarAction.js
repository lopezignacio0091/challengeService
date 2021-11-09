import { STATUS_FORMULARIO_AUTO, GET_CARS, ERROR_CARS } from './types';
import { Dispatch } from 'redux';
import UserService from '../service/userService';
import CarsService from '../service/carService';

export const abrirFormularioAuto = (status) => dispatch => {
  dispatch({
    type: STATUS_FORMULARIO_AUTO,
    payload: status,
  });
};


export const getAutos = () => async dispatch => {
  try {
    const dataUsers = await UserService.getAll();
    const dataCars = await CarsService.getAll();

    dispatch({
      type: GET_CARS,
      payload: { 'users': dataUsers.data, 'cars': dataCars.data }
    });

  } catch (error) {
    dispatch({
      type: ERROR_CARS,
    });
  }
}