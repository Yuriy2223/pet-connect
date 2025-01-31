import { RootState } from '../store';
import { NewsState } from './news.types';

export const selectNewsList = (state: RootState): NewsState['newsList'] =>
  state.news.newsList;

export const selectCurrentPage = (state: RootState): NewsState['currentPage'] =>
  state.news.currentPage;

export const selectPerPage = (state: RootState): NewsState['perPage'] =>
  state.news.perPage;

export const selectTotalPages = (state: RootState): NewsState['totalPages'] =>
  state.news.totalPages;

export const selectSearchQuery = (state: RootState): NewsState['searchQuery'] =>
  state.news.searchQuery;
