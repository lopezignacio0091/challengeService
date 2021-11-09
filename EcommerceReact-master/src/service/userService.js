import http from "../helpers/axiosInstance";
import axios from 'axios';
import {devUrl} from '../actions/types';
import JWT from "./JWT";
const seccion = 'users';

const getAll = () => {
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.get(`${devUrl}/api/${seccion}`);
  };

  const create = data => {
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.post(`${devUrl}/api/${seccion}/create`,data);
  };
const UserService = {
    getAll,
    create
};

export default UserService;