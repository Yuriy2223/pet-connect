import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addUserPet,
  fetchFullUserInfo,
  fetchUserCurrent,
  removeUserPet,
  updateUserProfile,
} from './operations';
import { PetProfile, UserProfile } from '../../App.types';

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Get current user info
      .addCase(fetchUserCurrent.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Get current user full info
      .addCase(fetchFullUserInfo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFullUserInfo.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFullUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // User edit
      .addCase(updateUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          state.profile = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // User adds pet
      .addCase(addUserPet.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addUserPet.fulfilled,
        (state, action: PayloadAction<PetProfile>) => {
          state.profile?.pets.push(action.payload);
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(addUserPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Remove a pet from user pets
      .addCase(removeUserPet.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeUserPet.fulfilled,
        (state, action: PayloadAction<string>) => {
          if (state.profile) {
            state.profile.pets = state.profile.pets.filter(
              pet => pet._id !== action.payload
            );
          }
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(removeUserPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const userReducer = userSlice.reducer;
