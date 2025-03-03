import axios from 'axios';
import { store } from '../redux/store';
import { logoutUser } from '../redux/auth/operations';

export const API_URL = 'https://petlove.b.goit.study';
export const TOKEN_KEY = 'token-love-pet';

// Публічний інстанс
export const publicInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Приватний інстанс
export const instance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Функція для встановлення токену
export const setToken = (token: string | null) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem(TOKEN_KEY);
  }
};

// Якщо є збережений токен — підставляємо його одразу
const savedToken = localStorage.getItem(TOKEN_KEY);
if (savedToken) {
  setToken(savedToken);
}

// Інтерсептор для автоматичного додавання актуального токену
instance.interceptors.request.use(config => {
  const token = store.getState().auth.user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Інтерсептор для обробки 401
instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      store.dispatch(logoutUser());
      setToken(null);
      localStorage.removeItem(TOKEN_KEY);
    }
    return Promise.reject(error);
  }
);
