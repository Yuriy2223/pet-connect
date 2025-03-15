import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, GetNoticesResponse, Notice } from '../../App.types';
import {
  addNoticesFavorite,
  fetchCityLocations,
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
  favorites: Notice[];
  views: Notice[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  categories: string[];
  species: string[];
  sex: string[];
  locations: City[];

  // search
  title: string;
  priceFilter: boolean | null;
  popularityFilter: boolean | null;
  locationsFilter: City | null;
  categoryFilter: string | null;
  speciesFilter: string | null;
  sexFilter: string | null;
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
  locations: [],

  // search
  title: '',
  priceFilter: null,
  popularityFilter: null,
  locationsFilter: null,
  categoryFilter: null,
  speciesFilter: null,
  sexFilter: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    resetNoticesState() {
      return initialState;
    },
    resetFilters(state) {
      state.currentPage = 1;
      state.perPage = 6;
      state.title = '';
      state.priceFilter = null;
      state.popularityFilter = null;
      state.locationsFilter = null;
      state.categoryFilter = null;
      state.speciesFilter = null;
      state.sexFilter = null;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.title = action.payload;
      state.currentPage = 1;
    },
    setCategory(state, action: PayloadAction<string | null>) {
      state.categoryFilter = action.payload;
      state.currentPage = 1;
    },
    setSex(state, action: PayloadAction<string | null>) {
      state.sexFilter = action.payload;
      state.currentPage = 1;
    },
    setSpecies(state, action: PayloadAction<string | null>) {
      state.speciesFilter = action.payload;
      state.currentPage = 1;
    },
    // setPopularity(state, action: PayloadAction<string | null>) {
    //   state.popularityFilter = action.payload;
    //   state.currentPage = 1;
    // },
    // setPrice(state, action: PayloadAction<string | null>) {
    //   state.priceFilter = action.payload;
    //   state.currentPage = 1;
    // },
    setLocation: (state, action: PayloadAction<City | null>) => {
      state.locationsFilter = action.payload;
      state.currentPage = 1;
    },
    sortPopularityAsc: state => {
      state.popularityFilter = true;
    },
    sortPopularityDesc: state => {
      state.popularityFilter = null;
    },
    sortPriceAsc: state => {
      state.priceFilter = true;
      state.popularityFilter = null;
    },
    sortPriceDesc: state => {
      state.priceFilter = null;
      state.popularityFilter = false;
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
      })
      .addCase(fetchCityLocations.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCityLocations.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.loading = false;
          state.error = null;
          state.locations = action.payload;
        }
      )
      .addCase(
        fetchCityLocations.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error occurred';
        }
      );
  },
});

export const {
  setSearch,
  setCategory,
  setSex,
  setSpecies,
  // setPopularity,
  // setPrice,
  resetFilters,
  resetNoticesState,
  setLocation,
  sortPopularityAsc,
  sortPopularityDesc,
  sortPriceAsc,
  sortPriceDesc,
} = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
