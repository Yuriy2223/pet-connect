import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Notice, NoticesState } from './notices.types';
import {
  addNoticesFavorite,
  fetchNotices,
  fetchNoticesCategories,
  fetchNoticesNoticeId,
  fetchNoticesSexes,
  fetchNoticesSpecies,
  removeNoticesFavorite,
} from './operations';

const initialState: NoticesState = {
  notices: [],
  categories: [],
  species: [],
  sexes: [],
  favorites: [],
  loading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Get notices
      .addCase(fetchNotices.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNotices.fulfilled,
        (state, action: PayloadAction<Notice[]>) => {
          state.notices = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get notice categories
      .addCase(fetchNoticesCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNoticesCategories.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.categories = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchNoticesCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get notice sex
      .addCase(fetchNoticesSexes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNoticesSexes.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.sexes = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchNoticesSexes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get notice species
      .addCase(fetchNoticesSpecies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNoticesSpecies.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.species = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchNoticesSpecies.rejected, (state, action) => {
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
        (state, action: PayloadAction<string>) => {
          if (!state.favorites.includes(action.payload)) {
            state.favorites.push(action.payload);
          }
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
        (state, action: PayloadAction<string>) => {
          state.favorites = state.favorites.filter(id => id !== action.payload);
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(removeNoticesFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get a notice by id
      .addCase(fetchNoticesNoticeId.pending, state => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(
      //   fetchNoticesNoticeId.fulfilled,
      //   (state, action: PayloadAction<Notice>) => {
      //     state.notices = [action.payload];
      //     state.loading = false;
      //     state.error = null;
      //   }
      // )
      .addCase(
        fetchNoticesNoticeId.fulfilled,
        (state, action: PayloadAction<Notice | null>) => {
          state.notices = action.payload ? [action.payload] : [];
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchNoticesNoticeId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
