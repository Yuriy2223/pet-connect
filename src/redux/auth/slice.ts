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
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ user: User }>) => {
          state.user = action.payload.user;
          state.isSignedIn = false;
          state.loading = false;
        }
      )
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<{ user: User; token: string }>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isSignedIn = true;
          state.loading = false;
        }
      )
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isSignedIn = false;
        state.loading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { registerUser, loginUser, logoutUser, refreshUser } from './operations';
// import { AuthState, User } from './auth.types';
// import { setToken, clearToken, TOKEN_KEY } from '../../services/Api';

// const initialState: AuthState = {
//   user: null,
//   token: localStorage.getItem(TOKEN_KEY),
//   isSignedIn: !!localStorage.getItem(TOKEN_KEY),
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       //  Refresh User
//       .addCase(refreshUser.pending, state => {
//         state.loading = true;
//       })
//       .addCase(
//         refreshUser.fulfilled,
//         (state, action: PayloadAction<{ user: User; token: string }>) => {
//           state.user = action.payload.user;
//           state.token = action.payload.token;
//           state.isSignedIn = true;
//           state.loading = false;
//           setToken(action.payload.token);
//         }
//       )
//       .addCase(refreshUser.rejected, state => {
//         state.loading = false;
//         state.token = null;
//         state.user = null;
//         state.isSignedIn = false;
//         clearToken();
//       })

//       //  Register
//       .addCase(registerUser.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         registerUser.fulfilled,
//         (state, action: PayloadAction<{ user: User }>) => {
//           state.user = action.payload.user;
//           state.isSignedIn = false;
//           state.loading = false;
//         }
//       )
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error =
//           action.payload || 'An error occurred during registration.';
//       })

//       //  Login
//       .addCase(loginUser.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         loginUser.fulfilled,
//         (state, action: PayloadAction<{ user: User; token: string }>) => {
//           const { user, token } = action.payload;
//           state.user = user;
//           state.token = token;
//           state.isSignedIn = true;
//           state.loading = false;
//           setToken(token);
//         }
//       )
//       .addCase(loginUser.rejected, (state, action) => {
//         state.error = action.payload || 'An error occurred during login.';
//         state.loading = false;
//       })

//       //  Logout
//       .addCase(logoutUser.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(logoutUser.fulfilled, () => {
//         clearToken();
//         return initialState;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'An error occurred while logging out.';
//       });
//   },
// });
