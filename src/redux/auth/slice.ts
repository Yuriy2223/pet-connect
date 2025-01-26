import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типізація стану
interface AuthState {
  user: User | null;
  token: string | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

// Початковий стан
const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Логін успішний
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    // Логаут
    logout: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
