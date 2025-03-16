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
/************************ */
export const selectNoticeCategories = (state: RootState) =>
  state.notices.categories;
export const selectNoticeSpecies = (state: RootState) => state.notices.species;
export const selectNoticeSexes = (state: RootState) => state.notices.sex;
/************************ */

export const selectFilters = (state: RootState) => state.notices.filters;
// export const selectCategoryFilter = (state: RootState) =>
//   state.notices.filters.category;
// export const selectSexFilter = (state: RootState) => state.notices.filters.sex;
// export const selectSpeciesFilter = (state: RootState) =>
//   state.notices.filters.species;
// export const selectLocationFilter = (state: RootState) =>
//   state.notices.filters.location;
// export const selectPopularityFilter = (state: RootState) =>
//   state.notices.filters.popularity;
// export const selectPriceFilter = (state: RootState) =>
//   state.notices.filters.price;
// export const selectTitleFilter = (state: RootState) =>
//   state.notices.filters.title;
