import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, refreshUser } from './operations';
import { AuthState, User } from './auth.types';

const initialState: AuthState = {
  user: null,
  token: null,
  isSignedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Refresh User
      .addCase(refreshUser.pending, state => {
        state.loading = true;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isSignedIn = true;
          state.loading = false;
        }
      )
      .addCase(refreshUser.rejected, state => {
        state.loading = false;
        state.token = null;
        state.user = null;
        state.isSignedIn = false;
      })
      // Register
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: User }>) => {
          const { user } = action.payload;
          state.user = user;
          state.isSignedIn = false;
          state.loading = false;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || 'An error occurred during registration.';
      })
      // Login
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          const { user, token } = action.payload;
          if (token) {
            localStorage.setItem('token', token);
            state.user = user;
            state.token = token;
            state.isSignedIn = true;
          }
          state.loading = false;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred during login.';
        state.loading = false;
      })
      // logout
      .addCase(logoutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, () => {
        localStorage.removeItem('token');
        return initialState;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred while logging out.';
      });
  },
});
export const authReducer = authSlice.reducer;
