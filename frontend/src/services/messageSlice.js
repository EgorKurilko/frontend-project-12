import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: {
      ids: [],
      entities: {},
    }
  },
  reducers: {
    addMessage: (state, { payload }) => {
      const id = _.uniqueId('msg_'); // msg_1, msg_2, msg_3...
      state.messages.entities[id] = { id, ...payload };
      state.messages.ids.push(id);
    },
    updateMessagesChannelId: (state, { payload }) => {
      const { oldName, newName } = payload;
      state.messages.ids.forEach((id) => {
        if (state.messages.entities[id].channelId === oldName) {
          state.messages.entities[id].channelId = newName;
        }
      });
    }
  },
});

export const { addMessage, updateMessagesChannelId } = messagesSlice.actions;
export default messagesSlice;
