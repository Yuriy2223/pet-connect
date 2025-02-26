import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';
import { Friend } from '../../App.types';

export interface FriendsState {
  friends: Friend[];
  loading: boolean;
  error: string | null;
}
const initialState: FriendsState = {
  friends: [],
  loading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFriends.fulfilled,
        (state, action: PayloadAction<Friend[]>) => {
          state.loading = false;
          state.error = null;
          state.friends = action.payload;
        }
      )
      .addCase(
        fetchFriends.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error occurred';
        }
      );
  },
});

export const friendsReducer = friendsSlice.reducer;
