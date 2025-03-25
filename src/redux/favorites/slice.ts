import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notice } from '../../App.types';
import {
  addNoticesFavorite,
  fetchFavorites,
  removeNoticesFavorite,
} from './operations';

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
    addFavorite: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach(id => {
        const existing = state.favorites.find(fav => fav._id === id);
        if (!existing) {
          state.favorites.push({ _id: id } as Notice);
        }
      });
    },
    removeFavorite: (state, action: PayloadAction<string | string[]>) => {
      const idsToRemove = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.favorites = state.favorites.filter(
        fav => !idsToRemove.includes(fav._id)
      );
    },
    resetFavorites: state => {
      state.favorites = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Get notice to favorites
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
      })

      // Add a notice to user favorites
      .addCase(addNoticesFavorite.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addNoticesFavorite.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          action.payload.forEach(id => {
            const notice = state.favorites.find(n => n._id === id);
            if (
              notice &&
              !state.favorites.some(fav => fav._id === notice._id)
            ) {
              state.favorites.push(notice);
            }
          });
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(addNoticesFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Remove a notice from user favorites
      .addCase(removeNoticesFavorite.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeNoticesFavorite.fulfilled,
        (state, action: PayloadAction<string | string[]>) => {
          const idsToRemove = Array.isArray(action.payload)
            ? action.payload
            : action.payload
            ? [action.payload]
            : [];

          state.favorites = state.favorites.filter(
            notice => !idsToRemove.includes(notice._id)
          );
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(removeNoticesFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setFavorites, addFavorite, removeFavorite, resetFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
