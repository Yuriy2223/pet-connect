import axios from 'axios';
import { store } from '../redux/store';
import { logoutUser } from '../redux/auth/operations';

export const API_URL = 'https://petlove.b.goit.study';
export const TOKEN_KEY = 'token-love-pet';

export const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const setToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem(TOKEN_KEY);
  }
};

instance.interceptors.request.use(config => {
  const token = store.getState().auth.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      store.dispatch(logoutUser());
    }
    return Promise.reject(error);
  }
);
