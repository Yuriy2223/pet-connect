import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchNewsApi } from '../../services/newsApi';
import { NewsParams, GetNewsResponse } from '../../App.types';

export const fetchNews = createAsyncThunk<
  GetNewsResponse,
  NewsParams,
  { rejectValue: string }
>('news/fetchNews', async (params, thunkAPI) => {
  try {
    return await fetchNewsApi(params);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});
