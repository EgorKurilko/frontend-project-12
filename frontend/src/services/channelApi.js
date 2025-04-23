import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../routes.js';

export const channelApi = createApi({
  reducerPath: 'channelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => routes.api.channels(),
    }),
    addChannel: builder.mutation({
      query: (channel) => ({
        url: routes.api.channels(),
        method: 'POST',
        body: channel,
      }),
    }),
    editChannel: builder.mutation({
      query: ({ id, data }) => ({
        url: routes.api.channel(id),
        method: 'PATCH',
        body: data,
      }),
    }),
    removeChannel: builder.mutation({
      query: (id) => ({
        url: routes.api.channel(id),
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useGetChannelsQuery, 
  useAddChannelMutation, 
  useEditChannelMutation, 
  useRemoveChannelMutation 
} = channelApi;
