import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchUserCurrentApi,
  fetchUserFullInfoApi,
  updateUserProfileApi,
  addUserPetApi,
  removeUserPetApi,
} from '../../services/userApi';
import { PetUProfile, UserProfile } from './types';

// Get current user info
export const fetchUserCurrent = createAsyncThunk<
  UserProfile,
  void,
  { rejectValue: string }
>('user/fetchUserCurrent', async (_, { rejectWithValue }) => {
  try {
    return await fetchUserCurrentApi();
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to fetch user data.';
    return rejectWithValue(message);
  }
});

// Get full user info
export const fetchFullUserInfo = createAsyncThunk<
  UserProfile,
  void,
  { rejectValue: string }
>('user/fetchFullUserInfo', async (_, { rejectWithValue }) => {
  try {
    return await fetchUserFullInfoApi();
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Failed to fetch full user data.';
    return rejectWithValue(message);
  }
});

// Update user profile
export const updateUserProfile = createAsyncThunk<
  UserProfile,
  Partial<UserProfile>,
  { rejectValue: string }
>('user/updateUserProfile', async (userData, { rejectWithValue }) => {
  try {
    return await updateUserProfileApi(userData);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to update profile.';
    return rejectWithValue(message);
  }
});

// Add pet
export const addUserPet = createAsyncThunk<
  PetUProfile,
  Partial<PetUProfile>,
  { rejectValue: string }
>('user/addUserPet', async (petData, { rejectWithValue }) => {
  try {
    return await addUserPetApi(petData);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to add pet.';
    return rejectWithValue(message);
  }
});

// Remove pet
export const removeUserPet = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('user/removeUserPet', async (petId, { rejectWithValue }) => {
  try {
    await removeUserPetApi(petId);
    return petId;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to remove pet.';
    return rejectWithValue(message);
  }
});
