import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }), 
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => '/courses',
    }),
  }),
});

export const { useGetCoursesQuery } = courseApi;
