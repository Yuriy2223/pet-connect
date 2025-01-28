import { RootState } from '../store';
import { UserProfile, Pet } from './types';

// Selector to get the user profile
export const selectUserProfile = (state: RootState): UserProfile | null => state.user.profile;

// Selector to get the list of pets
export const selectUserPets = (state: RootState): Pet[] => state.user.profile?.pets || [];

// Selector to get the loading status
export const selectUserLoading = (state: RootState): boolean => state.user.loading;

// Selector to get the error message
export const selectUserError = (state: RootState): string | null => state.user.error;
