import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notice } from '../../App.types';
import { fetchFavorites } from '../notices/operations';

interface FavoritesState {
  favorites: Notice[];
  loading: boolean;
  error: string | null;
}

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<Notice[]>) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Notice>) => {
      const existing = state.favorites.find(
        fav => fav._id === action.payload._id
      );
      if (!existing) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        fav => fav._id !== action.payload
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFavorites.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFavorites, addFavorite, removeFavorite } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
