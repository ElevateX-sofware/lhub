import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './services/courseApi';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware, userApi.middleware),
});

export default store;
