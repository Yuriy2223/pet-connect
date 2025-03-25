import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters, GetNoticesResponse, Notice } from '../../App.types';
import {
  addNoticesFavorite,
  fetchFavorites,
  fetchNotices,
  fetchNoticesCategories,
  fetchNoticesNoticeId,
  fetchNoticesSexes,
  fetchNoticesSpecies,
  fetchViews,
  removeNoticesFavorite,
} from './operations';

export interface NoticesState {
  notices: Notice[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  favorites: Notice[];
  views: Notice[];
  categories: string[];
  species: string[];
  sex: string[];
  filters: Filters;
}

const initialState: NoticesState = {
  notices: [],
  favorites: [],
  views: [],
  currentPage: 1,
  perPage: 6,
  totalPages: 1,
  loading: false,
  error: null,
  categories: [],
  species: [],
  sex: [],

  filters: {
    keyword: null,
    byPopularity: null,
    byPrice: null,
    locationId: null,
    byDate: null,
    category: null,
    species: null,
    sex: null,
  },
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    resetNoticesState(state) {
      return {
        ...state,
        favorites: [],
        views: [],
      };
    },

    resetFilters(state) {
      state.filters = initialState.filters;
      state.currentPage = 1;
    },
    setFilter(state, action: PayloadAction<Filters>) {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      // Get notices
      .addCase(fetchNotices.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNotices.fulfilled,
        (state, action: PayloadAction<GetNoticesResponse>) => {
          const { results, page, perPage, totalPages } = action.payload;
          state.notices = results;
          state.currentPage = page;
          state.perPage = perPage;
          state.totalPages = totalPages;
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
          state.sex = action.payload;
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
        (state, action: PayloadAction<string[]>) => {
          action.payload.forEach(id => {
            const notice = state.notices.find(n => n._id === id);
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
            : [action.payload];

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
      })

      // Get notice to views
      .addCase(fetchViews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchViews.fulfilled, (state, action) => {
        state.views = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchViews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

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

      // Get a notice by id
      .addCase(fetchNoticesNoticeId.pending, state => {
        state.loading = true;
        state.error = null;
      })
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

export const { resetNoticesState, resetFilters, setFilter } =
  noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
