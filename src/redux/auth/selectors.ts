import { RootState } from '../store';

// Селектор для отримання інформації про користувача
export const selectCurrentUser = (state: RootState) => state.auth.user;

// Селектор для отримання токена
export const selectAuthToken = (state: RootState) => state.auth.token;

// Селектор для перевірки, чи користувач залогінений
export const selectIsLoggedIn = (state: RootState) => !!state.auth.token;
