import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './operations';

interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      state.error = null;
    },
    logout: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.rejected, (state, action) => {
        state.error =
          action.payload || 'An error occurred during registration.';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred during login.';
      });
  },
});
export const { loginSuccess, logout, setError } = authSlice.actions;
export default authSlice.reducer;
