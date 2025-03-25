import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Notice } from '../../App.types';

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const selectFavoritesLoading = (state: RootState) =>
  state.favorites.loading;

export const selectFavoritesError = (state: RootState) => state.favorites.error;

export const selectIsFavorite = (noticeId: string) =>
  createSelector(selectFavorites, favorites =>
    favorites.some((notice: Notice) => notice._id === noticeId)
  );
