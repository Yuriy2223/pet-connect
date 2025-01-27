import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface Friend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: WorkDay[];
  phone: string;
  email: string;
}

interface FriendsState {
  friends: Friend[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FriendsState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    fetchFriendsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchFriendsSuccess(state, action: PayloadAction<Friend[]>) {
      state.isLoading = false;
      state.friends = action.payload;
    },
    fetchFriendsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFriendsStart, fetchFriendsSuccess, fetchFriendsFailure } =
  friendsSlice.actions;

export default friendsSlice.reducer;

/************************************************************* */

// import { createSlice} from '@reduxjs/toolkit';
// import { fetchFriennds } from './operations';

// export interface WorkDay {
//   _id: string;
//   isOpen: boolean;
//   from?: string;
//   to?: string;
// }

// export interface Friend {
//   _id: string;
//   title: string;
//   url: string;
//   addressUrl: string;
//   imageUrl: string;
//   address: string;
//   workDays: WorkDay[];
//   phone: string;
//   email: string;
// }

// interface FriendsState {
//   friends: Friend[];
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: FriendsState = {
//   friends: [],
//   isLoading: false,
//   error: null,
// };

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchFriennds } from './operations';

// interface WorkDay {
//   _id: string;
//   isOpen: boolean;
//   from?: string;
//   to?: string;
// }

// interface Friend {
//   _id: string;
//   title: string;
//   url: string;
//   addressUrl: string;
//   imageUrl: string;
//   address: string;
//   workDays: WorkDay[];
//   phone: string;
//   email: string;
// }

// interface FriendsState {
//   friends: Friend[];
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: FriendsState = {
//   friends: [],
//   isLoading: false,
//   error: null,
// };

// const friendsSlice = createSlice({
//   name: 'friends',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchFriennds.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchFriennds.fulfilled, (state, action: PayloadAction<Friend[]>) => {
//         state.isLoading = false;
//         state.error = null;
//         state.friends = action.payload;
//       })
//       .addCase(fetchFriennds.rejected, (state, action: PayloadAction<string>) => {
//         state.isLoading = false;
//         // state.error = action.payload;
//         state.error = action.payload.error;
//       });
//   },
// });

// export default friendsSlice.reducer;
/*********************************** */
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchFriennds } from './operations';
// import { SerializedError } from '@reduxjs/toolkit'; // Імпортуємо SerializedError

// interface WorkDay {
//   _id: string;
//   isOpen: boolean;
//   from?: string;
//   to?: string;
// }

// interface Friend {
//   _id: string;
//   title: string;
//   url: string;
//   addressUrl: string;
//   imageUrl: string;
//   address: string;
//   workDays: WorkDay[];
//   phone: string;
//   email: string;
// }

// interface FriendsState {
//   friends: Friend[];
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: FriendsState = {
//   friends: [],
//   isLoading: false,
//   error: null,
// };

// const friendsSlice = createSlice({
//   name: 'friends',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchFriennds.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchFriennds.fulfilled, (state, action: PayloadAction<Friend[]>) => {
//         state.isLoading = false;
//         state.error = null;
//         state.friends = action.payload;
//       })
//       .addCase(fetchFriennds.rejected, (state, action: PayloadAction<SerializedError>) => {
//         state.isLoading = false;
//            state.error = action.payload;
//         // state.error = action.error.message || 'Error occurred';
//       });
//   },
// });

// export default friendsSlice.reducer;
