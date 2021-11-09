import {
  STATUS_FORMULARIO_AUTO,
  GET_CARS,
  ERROR_CARS,
  SELECT_EDIT_CAR,
  CREATE_CAR,
  CLOSE_MENSAJE,
  DELETE_CAR
} from './types';
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

export const editCar = id => dispatch => {
  dispatch({
    type: SELECT_EDIT_CAR,
    payload: id
  });

}

export const createCar = data => async dispatch => {

  try {

    const dataUser = await UserService.create({ 'name': data.nameUser, 'email': data.emailUser, 'password': data.passwordUser })
    const dataCar = await CarsService.create({
      'user': dataUser.data._id, 'name': data.modelo,'colour':data.color,
      'type': data.tipo, 'brand': data.marca, 'year': data.date, 'patent': data.patente
    });

    dispatch({
      type: CREATE_CAR,
      payload: { 'user': dataUser.data, 'car': dataCar.data }
    });

  } catch (error) {
    dispatch({
      type: ERROR_CARS,
    });
  }
}

export const cerrarMensaje =()=>dispatch=>{
  dispatch({
    type: CLOSE_MENSAJE,
  });
}

export const eliminarAuto = id => async dispatch => {

  try {

      const data = await CarsService.deleteCar(id);

    dispatch({
      type: DELETE_CAR,
      payload: id
    });

  } catch (error) {
    dispatch({
      type: ERROR_CARS,
    });
  }
}
