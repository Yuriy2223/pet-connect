import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, currentUser } from './operations';
import { UserAuth } from '../../App.types';

export interface AuthState {
  user: UserAuth | null;
  isSignedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
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
      // Current User
      .addCase(currentUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        currentUser.fulfilled,
        (state, action: PayloadAction<{ user: UserAuth | null }>) => {
          if (action.payload.user) {
            state.user = action.payload.user;
            state.isSignedIn = true;
          } else {
            state.user = null;
            state.isSignedIn = false;
          }
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(currentUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isSignedIn = false;
        state.error = action.error.message || 'Failed to refresh user';
      })
      // Registration User
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<UserAuth>) => {
          state.user = action.payload;
          state.isSignedIn = true;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Registration failed';
      })
      // Login User
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<UserAuth>) => {
          state.user = action.payload;
          state.isSignedIn = true;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      // Logout User
      .addCase(logoutUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.isSignedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Logout failed';
      });
  },
});

export const authReducer = authSlice.reducer;
