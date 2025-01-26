import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginSuccess, logout } from './slice';
import { AppDispatch } from '../store';
// import { AppDispatch, RootState } from '../store';

// Типи даних для реєстрації та авторизації
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

// Операція для реєстрації користувача
export const registerUser = createAsyncThunk<
  RegisterResponse,
  RegisterData,
  { rejectValue: string }
>('auth/registerUser', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(
        errorData.message || 'Registration failed. Please try again.'
      );
      return rejectWithValue(errorData.message || 'Unknown error');
    }

    const result: RegisterResponse = await response.json();
    dispatch(loginSuccess({ user: result.user, token: result.token }));
    toast.success('Registration successful! Welcome!');
    return result;
  } catch (error) {
    //     toast.error(
    //       'An error occurred during registration. Please try again later.'
    //     );
    //     return rejectWithValue('Registration failed');
    //   }
    // });
    console.error('Registration error:', error); // Вивід у консоль
    toast.error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred during registration.'
    );
    return rejectWithValue(
      error instanceof Error ? error.message : 'Registration failed'
    );
  }
});

// Операція для авторизації користувача
export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginData,
  { rejectValue: string }
>('auth/loginUser', async (credentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch('/api/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.message || 'Login failed. Please try again.');
      return rejectWithValue(errorData.message || 'Unknown error');
    }

    const result: LoginResponse = await response.json();
    dispatch(loginSuccess({ user: result.user, token: result.token }));
    toast.success('Login successful!');
    return result;
  } catch (error) {
    //     toast.error('An error occurred during login. Please try again later.');
    //     return rejectWithValue('Login failed');
    //   }
    // });
    console.error('Login error:', error); // Вивід у консоль
    toast.error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred during login.'
    );
    return rejectWithValue(
      error instanceof Error ? error.message : 'Login failed'
    );
  }
});

// Операція для виходу з облікового запису
export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(logout());
  localStorage.clear(); // Очищення локального сховища
  toast.success('Logout successful!');
};
