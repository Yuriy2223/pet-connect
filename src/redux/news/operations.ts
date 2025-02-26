import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchNewsApi } from '../../services/newsApi';
import { GetNewsResponse } from '../../App.types';

export const fetchNews = createAsyncThunk<
  GetNewsResponse,
  { page: number; keyword: string; perPage: number },
  { rejectValue: string }
>('news/fetchNews', async ({ page, keyword, perPage }, thunkAPI) => {
  try {
    return await fetchNewsApi(page, keyword, perPage);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});
