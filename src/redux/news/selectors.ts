import { RootState } from '../store';

export const selectNewsList = (state: RootState) => state.news.newsList;
export const selectSearchQuery = (state: RootState) => state.news.searchQuery;
export const selectCurrentPage = (state: RootState) => state.news.currentPage;
export const selectTotalPages = (state: RootState) => state.news.totalPages;
export const selectPerPage = (state: RootState) => state.news.perPage;