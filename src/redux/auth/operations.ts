import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken, TOKEN_KEY } from '../../services/Api';
import { UserAuth } from '../../App.types';
import { resetNoticesState } from '../notices/slice';
import {
  registerUserApi,
  loginUserApi,
  currentUserApi,
  RegisterData,
  logoutApi,
  LoginData,
} from '../../services/authApi';

// Сurrent User
export const currentUser = createAsyncThunk<
  { user: UserAuth | null; token: string | null },
  void,
  { rejectValue: string }
>('auth/currentUser', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return rejectWithValue('No token found');
  }

  setToken(token);
  try {
    const user = await currentUserApi();
    return { user: user ?? null, token };
  } catch (error) {
    setToken(null);
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to refresh user'
    );
  }
});

// Register User
export const registerUser = createAsyncThunk<
  UserAuth,
  RegisterData,
  { rejectValue: string }
>('auth/registerUser', async (data, { rejectWithValue }) => {
  try {
    const response = await registerUserApi(data);
    setToken(response.token);
    return response;
  } catch (error) {
    let message = 'Registration failed.';

    if (axios.isAxiosError(error)) {
      if (error.response?.data) {
        message =
          typeof error.response.data === 'string'
            ? error.response.data
            : error.response.data.message || 'Registration failed.';
      }
    }
    return rejectWithValue(message);
  }
});

// Login User
export const loginUser = createAsyncThunk<
  UserAuth,
  LoginData,
  { rejectValue: string }
>('auth/loginUser', async (data, { rejectWithValue }) => {
  try {
    const response = await loginUserApi(data);
    setToken(response.token);
    return response;
  } catch (error) {
    let message = 'Login failed. Please try again.';

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message?.trim() || message;
    }

    return rejectWithValue(message);
  }
});

// Logout
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logOut',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logoutApi();
      setToken(null);
      dispatch(resetNoticesState());
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Logout failed. Please try again.';
      return rejectWithValue(message);
    }
  }
);
