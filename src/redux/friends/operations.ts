import axios from 'axios';
import { AppDispatch } from '../store';
import {
  fetchFriendsStart,
  fetchFriendsSuccess,
  fetchFriendsFailure,
} from './slice';

import { toast } from 'react-toastify';

export interface WorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface Friend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: WorkDay[];
  phone: string;
  email: string;
}

export const fetchFriends = () => async (dispatch: AppDispatch) => {
  dispatch(fetchFriendsStart());
  try {
    const response = await axios.get<Friend[]>('/api/friends');

    if (response.status === 200) {
      dispatch(fetchFriendsSuccess(response.data));
    } else {
      console.error('Unexpected response status:', response.status);
      toast.error('Failed to fetch friends. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching friends:', error);
    toast.error('Something went wrong while loading friends.');
    // dispatch(fetchFriendsFailure(error.message || 'Failed to fetch friends'));
  }
};

/**************************************************** */

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { AppDispatch } from '../store';
// import {
//   fetchFriendsStart,
//   fetchFriendsSuccess,
//   fetchFriendsFailure,
// } from './slice';

// import { toast } from 'react-toastify';

// Інтерфейс для робочих днів
// export interface WorkDay {
//   _id: string;
//   isOpen: boolean;
//   from?: string;
//   to?: string;
// }

// // Інтерфейс для друга
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

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchFriennds = createAsyncThunk(
//   'friennds/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/api/friennds');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// Функція для отримання списку друзів
// export const fetchFriends = () => async (dispatch: AppDispatch) => {
//   dispatch(fetchFriendsStart());
//   try {
//     const response = await axios.get<Friend[]>('/api/friends'); // Запит до API

//     if (response.status === 200) {
//       dispatch(fetchFriendsSuccess(response.data)); // Зберігаємо отримані дані
//     } else {
//       console.error('Unexpected response status:', response.status);
//       toast.error('Failed to fetch friends. Please try again.');
//     }
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error('Axios error:', error.message);
//       toast.error(
//         error.response?.data?.message ||
//           'Something went wrong while loading friends.'
//       );
//     } else {
//       console.error('Unexpected error:', error);
//       toast.error('Something went wrong while loading friends.');
//     }
//     dispatch(fetchFriendsFailure('Failed to fetch friends'));
//   }
// };

/**************************************** */
