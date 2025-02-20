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

// import axios from 'axios';
// import { store } from '../redux/store';

// const API_URL = 'https://petlove.b.goit.study';
// export const TOKEN_KEY = 'token-love-pet';

// // Створення екземпляра axios
// export const instance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });

// // Встановлення токена в axios + localStorage
// export const setToken = (token: string): void => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
//   localStorage.setItem(TOKEN_KEY, token);
// };

// // Очищення токена
// export const clearToken = (): void => {
//   delete instance.defaults.headers.common.Authorization;
//   localStorage.removeItem(TOKEN_KEY);
// };

// // Інтерсептор для додавання токена з Redux
// instance.interceptors.request.use(
//   config => {
//     const token =
//       store.getState().auth.token || localStorage.getItem(TOKEN_KEY);
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error)
// );

// // Інтерсептор для обробки 401-авторизації
// instance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response?.status === 401) {
//       clearToken();
//       if (window.location.pathname !== '/login') {
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );
