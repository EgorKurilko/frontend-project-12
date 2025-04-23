import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './authApi.js'
import authReducer from './authSlice.js'
import channelSlice from './channelSlice.js'
import messageSlice from './messageSlice.js'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
    channels: channelSlice,
    messages: messageSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
});
