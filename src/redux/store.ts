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
import { authReducer, AuthState } from './auth/slice';
import { friendsReducer } from './friends/slice';
import { newsReducer } from './news/slice';
import { userReducer } from './user/slice';
import { noticesReducer } from './notices/slice';
import { citiesReducer } from './cities/slice';
import { modalReducer } from './modal/slice';
import { themeReducer } from './theme/slice';
import { favoritesReducer } from './favorites/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
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
    favorites: favoritesReducer,
    theme: persistedThemeReducer,
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
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
