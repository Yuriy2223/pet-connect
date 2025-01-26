import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from './operations';

// Типізація стану
interface AuthState {
  user: User | null;
  token: string | null;
  error: string | null; // Додаємо стан для помилок
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
  error: null, // ініціалізуємо як null
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
      state.error = null; // Очищаємо помилку при успішному вході
    },
    // Логаут
    logout: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload; // Встановлюємо помилку
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload || 'An error occurred during registration.'; // обробка помилки
    });
  },
});

export const { loginSuccess, logout, setError } = authSlice.actions;
export default authSlice.reducer;
