import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Friend } from './types';
import { fetchFriendsApi } from '../../services/friendsApi';

export const fetchFriends = createAsyncThunk<
  Friend[],
  void,
  { rejectValue: string }
>('friends/fetchAll', async (_, thunkAPI) => {
  try {
    return await fetchFriendsApi();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected error occurred';
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});
