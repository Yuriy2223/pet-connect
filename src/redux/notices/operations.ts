import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchNoticesApi,
  fetchNoticesCategoriesApi,
  fetchNoticesSexesApi,
  fetchNoticesSpeciesApi,
  addNoticesFavoriteApi,
  removeNoticesFavoriteApi,
  fetchNoticesNoticeByIdApi,
} from '../../services/noticesApi';
import { Notice } from './types';

// Get all notices
export const fetchNotices = createAsyncThunk<
  Notice[],
  void,
  { rejectValue: string }
>('notices/fetchNotices', async (_, { rejectWithValue }) => {
  try {
    return await fetchNoticesApi();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to fetch notices.'
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

// Add a notice to favorites
export const addNoticesFavorite = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('notices/addFavorite', async (noticeId, { rejectWithValue }) => {
  try {
    await addNoticesFavoriteApi(noticeId);
    return noticeId;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to add favorite notice.'
    );
  }
});

// Remove a notice from favorites
export const removeNoticesFavorite = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('notices/removeFavorite', async (noticeId, { rejectWithValue }) => {
  try {
    await removeNoticesFavoriteApi(noticeId);
    return noticeId;
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
