import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notice, UserProfile } from '../../App.types';
import {
  addNoticesFavoriteApi,
  removeNoticesFavoriteApi,
  fetchUserFullApi,
} from '../../services/noticesApi';

// Get notice to favorites
export const fetchFavorites = createAsyncThunk<
  Notice[],
  void,
  { rejectValue: string }
>('user/fetchFavorites', async (_, { rejectWithValue }) => {
  try {
    const userData: UserProfile = await fetchUserFullApi();
    return userData.noticesFavorites;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : 'Failed to fetch favorite notices.'
    );
  }
});

// Remove a notice from favorites
export const removeNoticesFavorite = createAsyncThunk<
  string[],
  string,
  { rejectValue: string }
>('notices/removeFavorite', async (noticeId, { rejectWithValue }) => {
  try {
    const deletedIds = await removeNoticesFavoriteApi(noticeId);
    return deletedIds;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : 'Failed to remove favorite notice.'
    );
  }
});

// Add a notice to favorites
export const addNoticesFavorite = createAsyncThunk<
  string[],
  string,
  { rejectValue: string }
>('notices/addFavorite', async (noticeId, { rejectWithValue }) => {
  try {
    const addedFavorites = await addNoticesFavoriteApi(noticeId);
    return addedFavorites;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to add favorite notice.'
    );
  }
});
