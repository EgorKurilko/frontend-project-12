import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import routes from '../routes.js';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }), // Базовый URL задается в `routes.js`
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: routes.api.login(),
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: routes.api.signup(),
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
