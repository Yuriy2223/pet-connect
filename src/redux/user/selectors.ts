import { RootState } from '../store';
import { UserProfile, PetProfile } from './user.types';

// Selector to get the user profile
export const selectUserProfile = (state: RootState): UserProfile | null =>
  state.user.profile;

export const selectUserPets = (state: RootState): PetProfile[] =>
  state.user.profile?.pets || [];

export const selectUserLoading = (state: RootState): boolean =>
  state.user.loading;

export const selectUserError = (state: RootState): string | null =>
  state.user.error;

export const selectUserPetById = (
  state: RootState,
  petId: string
): PetProfile | undefined =>
  state.user.profile?.pets.find(pet => pet._id === petId);

export const selectUserHasPets = (state: RootState): boolean =>
  (state.user.profile?.pets.length ?? 0) > 0;
