import { RootState } from '../store';
import { NewsState } from './slice';

export const selectNewsList = (state: RootState): NewsState['newsList'] =>
  state.news.newsList;

export const selectNewsLoading = (state: RootState) => state.news.loading;

export const selectNewsError = (state: RootState) => state.news.error;

export const selectCurrentPage = (state: RootState): NewsState['currentPage'] =>
  state.news.currentPage;

export const selectPerPage = (state: RootState): NewsState['perPage'] =>
  state.news.perPage;

export const selectTotalPages = (state: RootState): NewsState['totalPages'] =>
  state.news.totalPages;

export const selectNewsFilter = (state: RootState): NewsState['newsFilter'] =>
  state.news.newsFilter;
