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

/**************************************************** */
// import axios from 'axios';
// import { AppDispatch } from '../store';
// import {
//   fetchFriendsStart,
//   fetchFriendsSuccess,
//   fetchFriendsFailure,
// } from './slice';

// import { toast } from 'react-toastify';

// export interface WorkDay {
//   _id: string;
//   isOpen: boolean;
//   from?: string;
//   to?: string;
// }

// export interface Friend {
//   _id: string;
//   title: string;
//   url: string;
//   addressUrl: string;
//   imageUrl: string;
//   address: string;
//   workDays: WorkDay[];
//   phone: string;
//   email: string;
// }

// export const fetchFriends = () => async (dispatch: AppDispatch) => {
//   dispatch(fetchFriendsStart());
//   try {
//     const response = await axios.get<Friend[]>('/api/friends');

//     if (response.status === 200) {
//       dispatch(fetchFriendsSuccess(response.data));
//     } else {
//       console.error('Unexpected response status:', response.status);
//       toast.error('Failed to fetch friends. Please try again.');
//     }
//   } catch (error) {
//     console.error('Error fetching friends:', error);
//     toast.error('Something went wrong while loading friends.');
//     // dispatch(fetchFriendsFailure(error.message || 'Failed to fetch friends'));
//   }
// };
