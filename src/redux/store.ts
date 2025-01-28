import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { useDispatch } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { AuthState } from './auth/types';
import { authReducer } from './auth/slice';
import { friendsReducer } from './friends/slice';
import { newsReducer } from './news/slice';
// import { userReducer } from './user/slice';
// import { noticesReducer } from './notices/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token-pet'],
};

const persistedAuthReducer = persistReducer<AuthState>(
  authPersistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    auth: persistedAuthReducer,
    // user: userReducer,
    // notices: noticesReducer,
    news: newsReducer,
    friends: friendsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);

/************************************************************** */
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import authReducer from './auth/slice';
// import userReducer from './user/slice';
// import noticesReducer from './notices/slice';
// import newsReducer from './news/slice';
// import { friendsReducer } from './friends/slice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['auth'],
//   // whitelist: ['auth', 'news'],
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   notices: noticesReducer,
//   news: newsReducer,
//   friends: friendsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store);
