import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pet {
  id: string;
  name: string;
  age: number;
  species: string;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  pets: Pet[];
}

interface UserState {
  profile: UserProfile | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    addPet: (state, action: PayloadAction<Pet>) => {
      state.profile?.pets.push(action.payload);
    },
    removePet: (state, action: PayloadAction<string>) => {
      if (state.profile) {
        state.profile.pets = state.profile.pets.filter((pet) => pet.id !== action.payload);
      }
    },
  },
});

export const { setUserProfile, addPet, removePet } = userSlice.actions;
export default userSlice.reducer;
