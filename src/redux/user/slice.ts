import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserProfile, addPetAsync, removePetAsync } from './operations';
import { GetUserProfileResponse, Pet, UserState } from './types';

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
      .addCase(fetchUserProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<GetUserProfileResponse>) => {
          state.profile = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addPetAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPetAsync.fulfilled, (state, action: PayloadAction<Pet>) => {
        state.profile?.pets.push(action.payload);
        state.loading = false;
      })
      .addCase(addPetAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(removePetAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removePetAsync.fulfilled,
        (state, action: PayloadAction<string>) => {
          if (state.profile) {
            state.profile.pets = state.profile.pets.filter(
              pet => pet.id !== action.payload
            );
          }
          state.loading = false;
        }
      )
      .addCase(removePetAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const userReducer = userSlice.reducer;
