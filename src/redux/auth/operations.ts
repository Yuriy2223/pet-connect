import { AppDispatch } from '../store';
import { loginSuccess, logout } from './slice';
import { toast } from 'react-toastify';

export const login = (credentials: { email: string; password: string }) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(loginSuccess({ user: data.user, token: data.token }));
    } else {
      console.error('Login error:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(logout());
  localStorage.clear(); // Очищення локального сховища
  toast.success('Logout successful!');
};
