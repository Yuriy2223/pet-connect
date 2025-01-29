import { RootState } from '../store';

export const selectNotices = (state: RootState) => state.notices.notices;

export const selectNoticeCategories = (state: RootState) => state.notices.categories;

export const selectNoticeSpecies = (state: RootState) => state.notices.species;

export const selectNoticeSexes = (state: RootState) => state.notices.sexes;

export const selectFavorites = (state: RootState) => state.notices.favorites;

export const selectNoticesLoading = (state: RootState) => state.notices.loading;

export const selectNoticesError = (state: RootState) => state.notices.error;
