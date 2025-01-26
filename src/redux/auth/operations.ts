import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginSuccess, logout } from './slice';
import { AppDispatch } from '../store';
import { instance } from '../../services/Api';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterResponse {
  user: { id: string; name: string; email: string };
  token: string;
}

interface LoginResponse {
  user: { id: string; name: string; email: string };
  token: string;
}

// Реєстрація користувача
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: string }
>('auth/registerUser', async (data, { rejectWithValue, dispatch }) => {
  if (!data.name || !data.email || !data.password) {
    return rejectWithValue('All fields (name, email, password) are required.');
  }
  try {
    const response = await instance.post<RegisterResponse>(
      '/users/signup',
      data
    );

    const result = response.data;
    dispatch(loginSuccess({ user: result.user, token: result.token }));
    toast.success('Registration successful! Welcome!');
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMessage =
        error.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
    return rejectWithValue('An unexpected error occurred.');
  }
});

// Авторизація користувача
export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue, dispatch }) => {
  if (!credentials.email || !credentials.password) {
    return rejectWithValue('Email and password are required.');
  }

  try {
    const response = await instance.post<LoginResponse>(
      '/users/signin',
      credentials
    );

    const result = response.data;
    dispatch(loginSuccess({ user: result.user, token: result.token }));
    toast.success('Login successful!');
    return result;
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorMessage = error.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
    return rejectWithValue('An unexpected error occurred.');
  }
});

// Вихід з облікового запису
export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(logout());
  localStorage.clear();
  toast.success('Logout successful!');
};
