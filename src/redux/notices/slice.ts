import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notice {
  id: string;
  title: string;
  description: string;
  favorite: boolean;
}

interface NoticesState {
  notices: Notice[];
  favorites: string[];
}

const initialState: NoticesState = {
  notices: [],
  favorites: [],
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setNotices: (state, action: PayloadAction<Notice[]>) => {
      state.notices = action.payload;
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
});

export const { setNotices, addFavorite, removeFavorite } = noticesSlice.actions;
export default noticesSlice.reducer;
