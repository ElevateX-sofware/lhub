import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './services/courseApi';
import { userApi } from './services/userApi';
import themeReducer from './services/themeSlice';

export const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware, userApi.middleware),
});

export default store;
