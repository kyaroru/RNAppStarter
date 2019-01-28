import CONFIG from 'react-native-config';
import _ from 'lodash';
import axios from 'axios';
import Selectors from 'selectors';
import { getStore } from 'store/configureStore';
import { getWhitelistURL } from './whitelistUrl';

export const fullUrlFrom = (endpoint) => {
  const baseUrl = CONFIG.SERVER_URL;
  const fullUrl = baseUrl + endpoint;
  return fullUrl;
};

export const configureInterceptor = () => {
  axios.interceptors.request.use((config) => {
    const defaultConfig = config;
    const store = getStore();
    const state = store.getState();
    const token = Selectors.getToken(state);
    const whitelistUrl = getWhitelistURL();
    if (token !== null && !_.includes(whitelistUrl, config.url)) {
      defaultConfig.headers.Authorization = `Bearer ${token}`;
      return defaultConfig;
    }
    return defaultConfig;
  }, error => Promise.reject(error));

  axios.interceptors.response.use(response => response, (error) => {
    if (error.response) {
      return Promise.reject(error.response);
    }
    return Promise.reject('Please check your internet connection or try again later');
  });
};

const fetchUrl = (method, endpoint, params = {}) => {
  if (_.toUpper(method) === 'GET') {
    return axios({
      method,
      params,
      url: fullUrlFrom(endpoint),
    });
  }
  return axios({
    method,
    data: params,
    url: fullUrlFrom(endpoint),
  });
};

const api = {
  get(endpoint, params) {
    return fetchUrl('get', endpoint, params);
  },
  post(endpoint, params) {
    return fetchUrl('post', endpoint, params);
  },
  put(endpoint, params) {
    return fetchUrl('put', endpoint, params);
  },
  patch(endpoint, params) {
    return fetchUrl('patch', endpoint, params);
  },
  delete(endpoint, params) {
    return fetchUrl('delete', endpoint, params);
  },
};

export default api;
