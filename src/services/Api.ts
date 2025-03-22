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

// Ініціалізація токену
const savedToken = localStorage.getItem(TOKEN_KEY);
if (savedToken) {
  setToken(savedToken);
}

// Інтерсептор для автоматичного додавання токену
instance.interceptors.request.use(config => {
  const token =
    store.getState().auth.user?.token || localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isLoggingOut = false;

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;

      if (originalRequest?.url?.includes('/signin')) {
        return Promise.reject(error);
      }

      if (!isLoggingOut) {
        isLoggingOut = true;
        setToken(null);
        await store.dispatch(logoutUser());
        isLoggingOut = false;
      }
    }

    return Promise.reject(error);
  }
);
