import { PetProfile, UserProfile } from '../../App.types';
import { RootState } from '../store';

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
