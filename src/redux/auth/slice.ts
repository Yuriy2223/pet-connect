import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';
import { AuthState, User } from './types';

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
      // Register
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: User }>) => {
          const { user } = action.payload;
          state.user = user;
          state.isSignedIn = false;
          state.loading = false;
        }
      )
      .addCase(registerUser.pending, state => {
        state.loading = true; // Додано обробку стану `pending`    ??? додав блок 
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error =
          action.payload || 'An error occurred during registration.';
        state.loading = false;
      })
      // Login
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
      .addCase(loginUser.pending, state => {
        state.loading = true; // Додано обробку стану `pending`   ??? додав блок 
        state.error = null;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred during login.';
        state.loading = false;
      })
      // logout
      .addCase(logoutUser.fulfilled, () => {
        localStorage.removeItem('token');
        return initialState;
      });
  },
});
export const authReducer = authSlice.reducer;
