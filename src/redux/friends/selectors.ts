import { RootState } from '../store';

export const selectFriends = (state: RootState) => state.friends.friends;

export const selectFriendsLoading = (state: RootState) => state.friends.loading;

export const selectFriendsError = (state: RootState) => state.friends.error;
