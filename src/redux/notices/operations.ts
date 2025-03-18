import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  GetNoticesResponse,
  Notice,
  NoticesParams,
  UserProfile,
} from '../../App.types';
import {
  fetchNoticesApi,
  fetchNoticesCategoriesApi,
  fetchNoticesSexesApi,
  fetchNoticesSpeciesApi,
  addNoticesFavoriteApi,
  removeNoticesFavoriteApi,
  fetchNoticesNoticeByIdApi,
  fetchUserFullApi,
} from '../../services/noticesApi';

// Get all notices
export const fetchNotices = createAsyncThunk<
  GetNoticesResponse,
  NoticesParams,
  { rejectValue: string }
>('notices/fetchNotices', async (params, thunkAPI) => {
  try {
    return await fetchNoticesApi(params);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch notices.';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
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

// Get a notice by ID
export const fetchNoticesNoticeId = createAsyncThunk<
  Notice,
  string,
  { rejectValue: string }
>('notices/fetchNoticesNoticeId', async (noticeId, { rejectWithValue }) => {
  try {
    return await fetchNoticesNoticeByIdApi(noticeId);
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch notice by ID.'
    );
  }
});

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

// Get notice to views
export const fetchViews = createAsyncThunk<
  Notice[],
  void,
  { rejectValue: string }
>('user/fetchViews', async (_, { rejectWithValue }) => {
  try {
    const userData: UserProfile = await fetchUserFullApi();
    return userData.noticesViewed;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch views notices.'
    );
  }
});

// Get notice categories
export const fetchNoticesCategories = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>('notices/fetchNoticesCategories', async (_, { rejectWithValue }) => {
  try {
    return await fetchNoticesCategoriesApi();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error
        ? error.message
        : 'Failed to fetch notice categories.'
    );
  }
});

// Get notice sexes
export const fetchNoticesSexes = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>('notices/fetchNoticesSexes', async (_, { rejectWithValue }) => {
  try {
    return await fetchNoticesSexesApi();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch notice sexes.'
    );
  }
});

// Get notice species
export const fetchNoticesSpecies = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>('notices/fetchNoticesSpecies', async (_, { rejectWithValue }) => {
  try {
    return await fetchNoticesSpeciesApi();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch notice species.'
    );
  }
});
