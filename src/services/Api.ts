import axios from 'axios';

const API_URL = 'https://petlove.b.goit.study';

// Створення екземпляра axios
export const instance = axios.create({
  baseURL: API_URL,
});

// Функція для встановлення токена
export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

// Функція для очищення токена
export const clearToken = () => {
  delete instance.defaults.headers.common.Authorization;
  localStorage.removeItem('token');
};

// Інтерсептор для додавання токена
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Інтерсептор для обробки помилок
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      clearToken();
      window.location.href = '/login'; // Перенаправлення при помилці авторизації
    }
    return Promise.reject(error);
  }
);
