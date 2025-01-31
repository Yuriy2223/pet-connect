import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from './operations';
import { News, GetNewsResponse } from './news.types';

interface NewsState {
  newsList: News[];
  searchQuery: string;
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  newsList: [],
  searchQuery: '',
  currentPage: 1,
  perPage: 6,
  totalPages: 1,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<GetNewsResponse>) => {
          const { results, page, perPage, totalPages } = action.payload;
          state.newsList = results;
          state.currentPage = page;
          state.perPage = perPage;
          state.totalPages = totalPages;
          state.loading = false;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
