
import { loginSuccess, logout } from './slice';
import { toast } from 'react-toastify';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';


// Типи для відповіді та запиту
interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  user: { id: string; name: string; email: string };
  token: string;
}

export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

// export const registerUser = (data: {
//   name: string;
//   email: string;
//   password: string;
// }) => async (dispatch: AppDispatch) => {
//   try {
//     const response = await fetch('/api/users/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

    const result = await response.json();

    if (response.ok) {
      dispatch(loginSuccess({ user: result.user, token: result.token }));
      toast.success('Registration successful! Welcome!');
    } else {
      toast.error(result.message || 'Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Registration error:', error);
    toast.error('An error occurred. Please try again later.');
  }
};

export const loginUser = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('/api/users/singin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      toast.success('Login successful!');
    } else {
      toast.error(data.message || 'Login failed. Please try again.');
      console.error('Login error:', data.message);
    }
  } catch (error) {
    toast.error('An error occurred during login. Please try again.');
    console.error('Login error:', error);
  }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(logout());
  localStorage.clear(); // Очищення локального сховища
  toast.success('Logout successful!');
};


