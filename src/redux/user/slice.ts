import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet, UserState } from './types';

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
      })
      .addCase(fetchUserCurrent.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      //  Get current user full info
      .addCase(fetchUserFullInfo.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUserFullInfo.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserFullInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // User edit
      .addCase(updateUserProfile.pending, state => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // User adds pet
      .addCase(addUserPet.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUserPet.fulfilled, (state, action: PayloadAction<Pet>) => {
        state.profile?.pets.push(action.payload);
        state.loading = false;
      })
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
              pet => pet.id !== action.payload
            );
          }
          state.loading = false;
        }
      )
      .addCase(removeUserPet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const userReducer = userSlice.reducer;
