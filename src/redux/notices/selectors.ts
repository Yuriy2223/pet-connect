import { RootState } from '../store';
import { NoticesState } from './slice';

export const selectNoticesLoading = (state: RootState) => state.notices.loading;
export const selectNoticesError = (state: RootState) => state.notices.error;
export const selectNoticesList = (state: RootState): NoticesState['notices'] =>
  state.notices.notices;

export const selectCurrentPage = (
  state: RootState
): NoticesState['currentPage'] => state.notices.currentPage;
export const selectPerPage = (state: RootState): NoticesState['perPage'] =>
  state.notices.perPage;
export const selectTotalPages = (
  state: RootState
): NoticesState['totalPages'] => state.notices.totalPages;

export const selectFavorites = (state: RootState) => state.notices.favorites;
export const selectViewed = (state: RootState) => state.notices.views;

export const selectNoticeCategories = (state: RootState) =>
  state.notices.categories;
export const selectNoticeSpecies = (state: RootState) => state.notices.species;
export const selectNoticeSexes = (state: RootState) => state.notices.sex;
export const selectFilters = (state: RootState) => state.notices.filters;
