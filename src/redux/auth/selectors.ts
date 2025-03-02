import { RootState } from '../store';

export const selectUser = (state: RootState) => state.auth.user;

export const selectToken = (state: RootState) => state.auth.user?.token || null;

export const selectIsSignedIn = (state: RootState) => state.auth.isSignedIn;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsAuthChecking = (state: RootState) => state.auth.isChecking;
