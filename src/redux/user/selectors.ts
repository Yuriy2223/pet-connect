import { RootState } from '../store';
import { UserProfile, PetProfile } from './types';

// Selector to get the user profile
export const selectUserProfile = (state: RootState): UserProfile | null => state.user.profile;

// Selector to get the list of pets
export const selectUserPets = (state: RootState): PetProfile[] => state.user.profile?.pets || [];

// Selector to get the loading status
export const selectUserLoading = (state: RootState): boolean => state.user.loading;

// Selector to get the error message
export const selectUserError = (state: RootState): string | null => state.user.error;

// Selector to get a specific pet by ID
export const selectUserPetById = (state: RootState, petId: string): PetProfile | undefined =>
  state.user.profile?.pets.find(pet => pet._id === petId);

// Selector to check if a user has pets
export const selectUserHasPets = (state: RootState): boolean =>
  (state.user.profile?.pets.length ?? 0) > 0;
