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

// Refresh User
export const refreshUser = createAsyncThunk<
  { user: User; token: string },
  void,
  { rejectValue: string }
>('auth/refreshUser', async (_, { rejectWithValue }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return rejectWithValue('No token found');
  }

  try {
    const user = await refreshUserApi();
    return { user, token };
  } catch {
    return rejectWithValue('Failed to refresh user');
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
      error instanceof Error
        ? error.message
        : 'Registration failed. Please try again.';
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
    return await loginUserApi(credentials);
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : 'Login failed. Please try again.';
    toast.error(message);
    return rejectWithValue(message);
  }
});

// logout
export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      return await logOutApi();
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
