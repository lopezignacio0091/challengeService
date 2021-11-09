import http from "../helpers/axiosInstance";
import axios from 'axios';
import {devUrl} from '../actions/types';
import JWT from "./JWT";
const seccion = 'cars';

const getAll = () => {
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.get(`${devUrl}/api/${seccion}`);
  };

  const create = data =>{
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.post(`${devUrl}/api/${seccion}`,data);
  }

  const deleteCar  = id =>{
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.delete(`${devUrl}/api/${seccion}/${id}`);
  }
const CarsService = {
    getAll,
    create,
    deleteCar
};

export default CarsService;