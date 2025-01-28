import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addPetApi,
  removePetApi,
  updateUserProfileApi,
  fetchUserFullInfoApi,
  fetchUserCurrentApi,
} from '../../services/userApi';
import { Pet } from './types';

// Get current user info
export const fetchUserCurrent = createAsyncThunk(
  'user/fetchUserCurrent',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserCurrentApi();
      return response.data;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : '?';
      return rejectWithValue(message);
    }
  }
);

//  Get current user full info
export const fetchFullUserInfo = createAsyncThunk(
  'user/fetchFullUserInfo',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserFullInfoApi();
      return response.data;
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Failed to remove pet.';
      return rejectWithValue(message);
    }
  }
);

// User edit
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (
    userData: { name: string; email: string; phone: string; avatar: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await updateUserProfileApi(userData);
      return response.data;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : '?';
      return rejectWithValue(message);
    }
  }
);

// Add Pet
export const addPetAsync = createAsyncThunk<
  Pet,
  Partial<Pet>,
  { rejectValue: string }
>('user/addPet', async (petData, { rejectWithValue }) => {
  try {
    return await addPetApi(petData);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to add pet.';
    return rejectWithValue(message);
  }
});

// Remove Pet
export const removePetAsync = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('user/removePet', async (petId, { rejectWithValue }) => {
  try {
    await removePetApi(petId);
    return petId;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to remove pet.';
    return rejectWithValue(message);
  }
});
