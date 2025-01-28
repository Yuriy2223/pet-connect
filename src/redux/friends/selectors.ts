import { RootState } from '../store';

export const selectFriends = (state: RootState) => state.friends.friends;

export const selectLoading = (state: RootState) => state.friends.loading;

export const selectError = (state: RootState) => state.friends.error;
