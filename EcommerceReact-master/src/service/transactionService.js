import http from "../helpers/axiosInstance";
import axios from 'axios';
import {devUrl} from '../actions/types';
import JWT from "./JWT";
const seccion = 'transactions';

const getAll = () => {
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.get(`${devUrl}/api/${seccion}`);
  };

  const comprar = data =>{
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.post(`${devUrl}/api/${seccion}`,data);
  }

  const getById = id =>{
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.get(`${devUrl}/api/${seccion}/${id}`);
  }
const TransactionService = {
    getAll,
    comprar,
    getById
};

export default TransactionService;