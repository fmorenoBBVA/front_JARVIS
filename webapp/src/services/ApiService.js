import axios from 'axios'
import { ENDPOINT } from '../utils/constants'

const BASE_ENDPOINT = ENDPOINT
console.log("BASE ENDPOINT: "+BASE_ENDPOINT)
const ApiInstance = axios.create({
  baseURL: BASE_ENDPOINT
});
console.log(BASE_ENDPOINT)

// Función para obtener el token
async function getToken() {
  try {
    const response = await fetch('/token');
    if (!response.ok) {
      throw new Error('Error al obtener el token');
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    throw error;
  }
}

// Interceptor para agregar el token a las solicitudes
ApiInstance.interceptors.request.use(async function(config) {
  try {
    //const token = await getToken(); // Espera a que se resuelva la promesa de getToken()
    //console.log(token)
    //config.headers.Authorization = 'Bearer ' + token; // Agrega el token a las cabeceras de la solicitud
    // Agregar cabecera CORS para permitir solicitudes desde el origen de la aplicación Vue
    //config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Content-Type'] = 'application/json';

  } catch (error) {
    // Manejar errores al obtener el token
    console.error('Error al obtener el token:', error);
  }
  return config;
});

/**
 * Method to call to the api and do a get call with params or without params
 * @param {*} endpoint the uri of the api
 * @param {*} params queryparams optional
 * @returns a list of objets
 */
export const getEntities = async (endpoint, params) => {
  let uri = endpoint
  if (params) {
    const queryParams = generateQueryParams(params)
    uri = endpoint + '?' + queryParams
  }
  return ApiInstance.get(uri)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}
export const insertEntity = async (endpoint, data) => {
  return ApiInstance.post(endpoint, data)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}
export const getEntityById = async (endpoint, data) => {
  return ApiInstance.get(endpoint + '/' + data)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}
export const editEntity = async (endpoint, data) => {
  return ApiInstance.post(endpoint, data)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}
export const patchEntity = async (endpoint, body) => {
  return ApiInstance.patch(endpoint, body)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}
export const deleteEntity = async (endpoint, data) => {
  return ApiInstance.delete(endpoint + '/' + data)
    .then((response) => {
      return response.data
    })
    .catch(err => {
      return err.message
    })
}

/**
 * Method to generate a query params string from json with all the parameters
 * @param {*} jsonData json with all the data from filter
 * @returns A query param string
 */
export const generateQueryParams = (jsonData) => {
  return new URLSearchParams(jsonData).toString()
}