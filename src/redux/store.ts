import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import noticesReducer from './notices/slice';
import newsReducer from './news/slice';
// import storage from 'redux-persist/lib/storage'; // Модуль для роботи з localStorage
// import { persistStore, persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notices: noticesReducer,
    news: newsReducer,
  },
});

// // Конфігурація для redux-persist
// const persistConfig = {
//   key: 'root', // Ключ для збереження даних у localStorage
//   storage,     // Використовуємо localStorage для збереження
//   whitelist: ["auth"], // Зберігаємо тільки auth стан (наприклад, токен)
// };

// // Налаштовуємо persistReducer з rootReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer, // Використовуємо persistReducer із rootReducer
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export const persistor = persistStore(store); // Створюємо persistor для збереження стану
