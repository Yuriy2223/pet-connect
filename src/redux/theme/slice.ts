import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'light' | 'dark' | 'sky' | 'rose' | 'peach';

const getInitialTheme = (): ThemeType => {
  return (localStorage.getItem('theme') as ThemeType) || 'light';
};

// const initialState: ThemeType = getInitialTheme();
const initialState = { theme: getInitialTheme() };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     setTheme: (state, action: PayloadAction<ThemeType>) => {
//       localStorage.setItem('theme', action.payload);
//       return action.payload;
//     },
//   },
// });
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      localStorage.setItem('theme', action.payload);
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
