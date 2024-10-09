import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import noticesReducer from './notices/noticesSlice';
import newsReducer from './news/newsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notices: noticesReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;