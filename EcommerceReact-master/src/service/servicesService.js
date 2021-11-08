import http from "../helpers/axiosInstance";
import axios from 'axios';
import {devUrl} from '../actions/types';
import JWT from "./JWT";
const seccion = 'services';

const getAll = () => {
    axios.defaults.headers.common['x-auth-token'] = JWT.getTokken();
    return axios.get(`${devUrl}/api/${seccion}`);
  };
const ServicesService = {
    getAll
};

export default ServicesService;