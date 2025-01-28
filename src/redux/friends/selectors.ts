import { RootState } from '../store';

// Селектор для отримання списку друзів
export const selectFriends = (state: RootState) => state.friends.friends;

// Селектор для перевірки стану завантаження
export const selectLoading = (state: RootState) => state.friends.loading;

// Селектор для отримання помилки
export const selectError = (state: RootState) => state.friends.error;
