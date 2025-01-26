import axios from 'axios';

const API_URL = 'https://petlove.b.goit.study';

// Створення екземпляра axios
export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Ключ токена в localStorage
const TOKEN_KEY = 'token';

// Встановлення токена в інстанс axios і localStorage
export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem(TOKEN_KEY, token);
};

// Очищення токена з інстансу axios і localStorage
export const clearToken = (): void => {
  delete instance.defaults.headers.common.Authorization;
  localStorage.removeItem(TOKEN_KEY);
};

// Інтерсептор для автоматичного додавання токена
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Інтерсептор для обробки помилок
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      clearToken();
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
