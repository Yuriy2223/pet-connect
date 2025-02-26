import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setToken, TOKEN_KEY } from '../../services/Api';
import { UserAuth } from '../../App.types';
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
>('auth/refreshUser', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return rejectWithValue('No token found');
  }
  // setToken(token);
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

// Register
export const registerUser = createAsyncThunk<
  UserAuth,
  RegisterData,
  { rejectValue: string }
>('auth/registerUser', async (data, { rejectWithValue }) => {
  try {
    const response = await registerUserApi(data);
    setToken(response.token);
    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Registration failed.';
    toast.error(message);
    return rejectWithValue(message);
  }
});

// Login
export const loginUser = createAsyncThunk<
  UserAuth,
  LoginData,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUserApi(credentials);
    setToken(response.token);
    return response;
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Login failed. Please try again.';
    toast.error(message);
    return rejectWithValue(message);
  }
});

// Logout
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
      setToken(null);
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Logout failed. Please try again.';
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);
