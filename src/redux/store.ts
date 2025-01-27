import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import noticesReducer from './notices/slice';
import newsReducer from './news/slice';

// Конфігурація для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  // whitelist: ['auth', 'news'], // Додаємо 'news' до whitelist
};

// Об'єднання ред'юсерів
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notices: noticesReducer,
  news: newsReducer,
});

// Створення persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Налаштування store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);

/************************************************************** */

// import { configureStore } from '@reduxjs/toolkit';
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

// const persistConfig = {
//   key: 'root-auth',
//   storage,
//   whitelist: ['auth'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(persistConfig, authReducer),
//     user: userReducer,
//     notices: noticesReducer,
//     news: newsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export const persistor = persistStore(store);
