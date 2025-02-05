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
import { AuthState } from './auth/auth.types';
import { authReducer } from './auth/slice';
import { friendsReducer } from './friends/slice';
import { newsReducer } from './news/slice';
import { userReducer } from './user/slice';
import { noticesReducer } from './notices/slice';
import { citiesReducer } from './cities/slice';
import { modalReducer } from './modal/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token-user-pet'],
};

const persistedAuthReducer = persistReducer<AuthState>(
  authPersistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: userReducer,
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
    cities: citiesReducer,
    modal: modalReducer,
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
