import axios from 'axios';

const API_URL = 'https://petlove.b.goit.study';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// export const setToken = token => {
//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearToken = () => {
//   delete instance.defaults.headers.common.Authorization;
// };

// instance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );