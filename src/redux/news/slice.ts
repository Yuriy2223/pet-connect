import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from './operations';
import { GetNewsResponse, News } from '../../App.types';

export interface NewsState {
  newsList: News[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  newsFilter: {
    keyword: string | null;
  };
}
const initialState: NewsState = {
  newsList: [],
  currentPage: 1,
  perPage: 6,
  totalPages: 1,
  loading: false,
  error: null,
  newsFilter: {
    keyword: null,
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsFilter(
      state,
      action: PayloadAction<Partial<NewsState['newsFilter']>>
    ) {
      state.newsFilter = { ...state.newsFilter, ...action.payload };
      state.currentPage = 1;
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
          state.error = null;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setNewsFilter } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
