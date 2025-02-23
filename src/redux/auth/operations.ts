import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  registerUserApi,
  loginUserApi,
  logOutApi,
  refreshUserApi,
} from '../../services/authApi';
import {
  RegisterData,
  LoginData,
  RegisterResponse,
  LoginResponse,
  User,
} from './auth.types';
import { setToken, TOKEN_KEY } from '../../services/Api';

// Refresh User
export const refreshUser = createAsyncThunk<
  { user: User; token: string },
  void,
  { rejectValue: string }
>('auth/refreshUser', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return rejectWithValue('No token found');

  setToken(token);

  try {
    const user = await refreshUserApi();
    return { user, token };
  } catch (error) {
    setToken(null);
    return rejectWithValue(
      error instanceof Error ? error.message : 'Failed to refresh user'
    );
  }
});

// Register
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: string }
>('auth/registerUser', async (data, { rejectWithValue }) => {
  try {
    return await registerUserApi(data);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Registration failed.';
    toast.error(message);
    return rejectWithValue(message);
  }
});

// Login
export const loginUser = createAsyncThunk<
  LoginResponse,
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
      await logOutApi();
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
