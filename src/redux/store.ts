// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage'; // Модуль для роботи з localStorage
// import { persistStore, persistReducer } from 'redux-persist';
// import authReducer from './auth/authSlice';
// import userReducer from './user/userSlice';
// import noticesReducer from './notices/noticesSlice';
// import newsReducer from './news/newsSlice';

// // Комбінуємо всі ред'юсери
// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   notices: noticesReducer,
//   news: newsReducer,
// });

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

// export const persistor = persistStore(store); // Створюємо persistor для збереження стану
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import userReducer from './user/slice';
import noticesReducer from './notices/slice';
import newsReducer from './news/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notices: noticesReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
