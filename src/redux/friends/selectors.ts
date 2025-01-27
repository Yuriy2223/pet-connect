import { RootState } from '../store';

// Селектор для отримання списку друзів
export const selectFriends = (state: RootState) => state.friends.friends;

// Селектор для перевірки стану завантаження
export const selectFriendsLoading = (state: RootState) =>
  state.friends.isLoading;

// Селектор для отримання помилки
export const selectFriendsError = (state: RootState) => state.friends.error;
